interface CssModule {
    [className: string]: string
}

declare module "*.css" {
    const styles: CssModule
    export = styles;
}
