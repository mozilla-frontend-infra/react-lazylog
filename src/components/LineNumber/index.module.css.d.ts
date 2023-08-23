declare namespace IndexModuleCssNamespace {
    export interface IIndexModuleCss {
        lineNumber: string;
        lineNumberHighlight: string;
    }
}

declare const IndexModuleCssModule: IndexModuleCssNamespace.IIndexModuleCss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: IndexModuleCssNamespace.IIndexModuleCss;
};

export = IndexModuleCssModule;
