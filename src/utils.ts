import { List, Range } from "immutable";
import reactStringReplace from "react-string-replace";

export const ENCODED_NEWLINE = 10; // \n
export const ENCODED_CARRIAGE_RETURN = 13; // \r
export const SEARCH_BAR_HEIGHT = 45;
export const SEARCH_MIN_KEYWORDS = 2;

export const isNewline = (current) => current === ENCODED_NEWLINE || current === ENCODED_CARRIAGE_RETURN;

export const getScrollIndex = ({
    follow = false,
    scrollToLine = 0,
    previousCount = 0,
    count = 0,
    offset = 0,
}) => {
    if (follow) {
        return count - 1 - offset;
    } else if (scrollToLine && previousCount > scrollToLine) {
        return -1;
    } else if (scrollToLine) {
        return scrollToLine - 1 - offset;
    }

    return -1;
};

export const getHighlightRange = (highlight) => {
    if (!highlight) {
        return Range(0, 0);
    }

    if (!Array.isArray(highlight)) {
        return Range(highlight, highlight + 1);
    }

    if (highlight.length === 1) {
        return Range(highlight[0], highlight[0] + 1);
    }

    return Range(highlight[0], highlight[1] + 1);
};

export const bufferConcat = (a, b) => {
    const buffer = new Uint8Array(a.length + b.length);

    buffer.set(a, 0);
    buffer.set(b, a.length);

    return buffer;
};

export const convertBufferToLines = (current, previous?) => {
    const buffer = previous ? bufferConcat(previous, current) : current;
    const { length } = buffer;
    let lastNewlineIndex = 0;
    let index = 0;
    const lines = List().withMutations((lines) => {
        while (index < length) {
            const current = buffer[index];
            const next = buffer[index + 1];

            if (isNewline(current)) {
                lines.push(buffer.subarray(lastNewlineIndex, index));
                lastNewlineIndex =
                    current === ENCODED_CARRIAGE_RETURN && next === ENCODED_NEWLINE ? index + 2 : index + 1;

                index = lastNewlineIndex;
            } else {
                index += 1;
            }
        }
    });

    return {
        lines,
        remaining: index !== lastNewlineIndex ? buffer.slice(lastNewlineIndex) : null,
    };
};

export const getLinesLengthRanges = (rawLog) => {
    const { length } = rawLog;
    const linesRanges = [];
    let lastNewlineIndex = 0;
    let index = 0;

    while (index < length) {
        const current = rawLog[index];
        const next = rawLog[index + 1];

        if (isNewline(current)) {
            linesRanges.push(index);
            lastNewlineIndex =
                current === ENCODED_CARRIAGE_RETURN && next === ENCODED_NEWLINE ? index + 2 : index + 1;

            index = lastNewlineIndex;
        } else {
            index += 1;
        }
    }

    return linesRanges;
};

export const searchFormatPart = ({
    searchKeywords,
    nextFormatPart,
    caseInsensitive,
    replaceJsx,
    // True if this is the line the browser search is highlighting
    selectedLine,
    replaceJsxHighlight,
    /**
     * highlightedWordLocation is a bit weird, it deals with
     * the special highlighting of a searched term
     * if it is the one the browser-like search is currently
     * highlighting. This is to deal with the case where there are
     * multiple instances of the searched term in the same line,
     * to make sure the correct one is highlighted.
     */
    highlightedWordLocation,
}) => (part) => {
    let formattedPart = part;

    if (nextFormatPart) {
        formattedPart = nextFormatPart(part);
    }

    // Escape out regex characters so they're treated as normal
    // characters when we use regex to search for them.
    const regexKeywords = searchKeywords.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");

    // Split part on keywords
    const splitExp = new RegExp(`(?=${regexKeywords})`, caseInsensitive ? "i" : undefined);
    const splitParts = part.split(splitExp);

    // Expression to replace keywords
    const replaceExp = new RegExp(`(${regexKeywords})`, caseInsensitive ? "i" : undefined);

    // This deals with the special highlighting that occurs when a
    // line is selected using the browser search
    const handleHighlighting = () => {
        // If this line is selected so we need to deal with special highlighting
        if (selectedLine) {
            // This is the special case where the searched
            // word is at the very start of the string
            if (splitParts.length === 1) {
                formattedPart = reactStringReplace(formattedPart, regexKeywords, replaceJsxHighlight);
            } else {
                // This highlights the special color
                // if the word is selected, otherwise, just
                // the regular matched search term color
                formattedPart = splitParts.map((splitPart: string, index: number) =>
                    reactStringReplace(
                        splitPart,
                        replaceExp,
                        index === highlightedWordLocation ? replaceJsxHighlight : replaceJsx,
                    ),
                );
            }
        }
        // Finally, just do regular highlighting since this line isn't selected
        else {
            formattedPart = reactStringReplace(formattedPart, replaceExp, replaceJsx);
        }

        return formattedPart;
    };

    if (caseInsensitive) {
        if (part.toLowerCase().includes(searchKeywords.toLowerCase())) {
            formattedPart = handleHighlighting();
        }
    } else if (part.includes(searchKeywords)) {
        formattedPart = handleHighlighting();
    }

    return formattedPart;
};
