/// <reference path="typings/d3/d3.d.ts" />
/// <reference path="typings/plottable/plottable.d.ts" />
/// <reference path="typings/moment/moment.d.ts" />
declare module Plottable {
    function locale(): string;
    function locale(language: string): void;
    function loadLocale(id: string, localeDefinition: moment.MomentLanguage): void;
    module Locales {
        function defaultTimeAxisConfigurations(): Axes.TimeAxisConfiguration[];
    }
}
