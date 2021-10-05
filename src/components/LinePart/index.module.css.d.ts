declare namespace IndexModuleCssNamespace {
  export interface IIndexModuleCss {
    black: string;
    blackBg: string;
    blackBold: string;
    blue: string;
    blueBg: string;
    blueBold: string;
    bold: string;
    cyan: string;
    cyanBg: string;
    cyanBold: string;
    green: string;
    greenBg: string;
    greenBold: string;
    grey: string;
    greyBg: string;
    greyBold: string;
    italic: string;
    magenta: string;
    magentaBg: string;
    magentaBold: string;
    red: string;
    redBg: string;
    redBold: string;
    underline: string;
    white: string;
    whiteBg: string;
    whiteBold: string;
    yellow: string;
    yellowBg: string;
    yellowBold: string;
  }
}

declare const IndexModuleCssModule: IndexModuleCssNamespace.IIndexModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IndexModuleCssNamespace.IIndexModuleCss;
};

export = IndexModuleCssModule;
