interface CssModule {
    [className: string]: string
}

declare module "*.scss" {
    const styles: CssModule
    export = styles;
}

declare module "*.css" {
    const styles: CssModule
    export = styles;
}
