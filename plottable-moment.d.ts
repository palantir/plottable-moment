/// <reference path="typings/d3/d3.d.ts" />
/// <reference path="typings/plottable/plottable.d.ts" />
/// <reference path="typings/moment/moment.d.ts" />
declare module Plottable {
    /**
     * Gets the current locale.
     */
    function locale(): string;
    /**
     * Sets the current locale.
     *
     * Input is ignored if locale definition has not been loaded.
     */
    function locale(language: string): void;
    /**
     * Loads a locale into the library.
     *
     * After the locale is loaded it can be loaded using the id parameter
     *
     * @param {string} id Language identifier for the locale
     * @param {moment.MomentLanguage} localeDefinition Definition for the locale
     */
    function loadLocale(id: string, localeDefinition: moment.MomentLanguage): void;
    module Locales {
        /**
         * Creates a TimeAxisConfiguration array to use for Plottable's Axes.Time
         * with formatters that are locale-friendly.
         *
         * After this TimeAxisConfiguration array is created, it can be used similar to
         * timeAxis.axisConfigurations(Plottable.Locales.defaultTimeAxisConfigurations())
         */
        function defaultTimeAxisConfigurations(): Axes.TimeAxisConfiguration[];
    }
}
