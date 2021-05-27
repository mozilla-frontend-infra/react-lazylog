/* eslint-disable no-plusplus, no-continue */
const foregroundColors = {
  '30': 'term-fg30',
  '31': 'term-fg31',
  '32': 'term-fg32',
  '33': 'term-fg33',
  '34': 'term-fg34',
  '35': 'term-fg35',
  '36': 'term-fg36',
  '90': 'term-fgi90',
  '91': 'term-fgi91',
  '92': 'term-fgi92',
  '93': 'term-fgi93',
  '94': 'term-fgi94',
  '95': 'term-fgi95',
  '96': 'term-fgi96',
};
const backgroundColors = {
  '40': 'term-bg40',
  '41': 'term-bg41',
  '42': 'term-bg42',
};
const styles = {
  '1': 'term-fg1',
  '2': 'term-fg2',
  '3': 'term-fg3',
  '4': 'term-fg4',
  '5': 'term-fg5',
  '9': 'term-fg9',
};
const eraseChar = (matchingText, result) => {
  if (matchingText.length) {
    return [matchingText.substr(0, matchingText.length - 1), result];
  } else if (result.length) {
    const index = result.length - 1;
    const { text } = result[index];
    const newResult =
      text.length === 1
        ? result.slice(0, result.length - 1)
        : result.map((item, i) =>
            index === i
              ? { ...item, text: text.substr(0, text.length - 1) }
              : item
          );

    return [matchingText, newResult];
  }

  return [matchingText, result];
};

const ansiparse = str => {
  let matchingControl = null;
  let matchingData = null;
  let matchingText = '';
  let ansiState = [];
  let result = [];
  let state = {};

  for (let i = 0; i < str.length; i++) {
    if (matchingControl !== null) {
      if (matchingControl === '\x1b' && str[i] === '[') {
        if (matchingText) {
          state.text = matchingText;
          result.push(state);
          state = {};
          matchingText = '';
        }

        matchingControl = null;
        matchingData = '';
      } else {
        matchingText += matchingControl + str[i];
        matchingControl = null;
      }

      continue;
    } else if (matchingData !== null) {
      if (str[i] === ';') {
        ansiState.push(matchingData);
        matchingData = '';
      } else if (str[i] === 'm') {
        ansiState.push(matchingData);
        matchingData = null;
        matchingText = '';

        for (let a = 0; a < ansiState.length; a++) {
          const ansiCode = ansiState[a];

          if (foregroundColors[ansiCode]) {
            state.foreground = foregroundColors[ansiCode];
          } else if (backgroundColors[ansiCode]) {
            state.background = backgroundColors[ansiCode];
          } else if (ansiCode === 39) {
            delete state.foreground;
          } else if (ansiCode === 49) {
            delete state.background;
          } else if (styles[ansiCode]) {
            state[styles[ansiCode]] = true;
          } else if (ansiCode === 22) {
            state.bold = false;
          } else if (ansiCode === 23) {
            state.italic = false;
          } else if (ansiCode === 24) {
            state.underline = false;
          }
        }

        ansiState = [];
      } else {
        matchingData += str[i];
      }

      continue;
    }

    if (str[i] === '\x1b') {
      matchingControl = str[i];
    } else if (str[i] === '\u0008') {
      [matchingText, result] = eraseChar(matchingText, result);
    } else {
      matchingText += str[i];
    }
  }

  if (matchingText) {
    state.text = matchingText + (matchingControl || '');
    result.push(state);
  }

  return result;
};

export default ansiparse;
