/// <reference path="typings/d3/d3.d.ts" />
/// <reference path="typings/plottable/plottable.d.ts" />
/// <reference path="typings/moment/moment.d.ts" />
declare module Plottable {
    module Moment {
        /**
        * Creates a TimeAxisConfiguration array to use for Plottable's Axes.Time
        * with formatters that are locale-friendly.
        *
        * After this TimeAxisConfiguration array is created, it can be used similar to
        * timeAxis.axisConfigurations(Plottable.Moment.localeAwareTimeAxisConfigurations())
        */
        function localeAwareTimeAxisConfigurations(): Axes.TimeAxisConfiguration[];
    }
}
