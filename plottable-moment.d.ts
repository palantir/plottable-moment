/// <reference path="typings/d3/d3.d.ts" />
/// <reference path="typings/plottable/plottable.d.ts" />
/// <reference path="typings/moment/moment.d.ts" />
/// <reference path="typings/moment-timezone/moment-timezone.d.ts" />
declare module Plottable {
}
declare module Plottable.Axes {
    class TimeZone extends Time {
        private _timezone;
        /**
         * Constructs a Time Axis.
         *
         * A Time Axis is a visual representation of a Time Scale.
         *
         * @constructor
         * @param {Scales.Time} scale
         * @param {string} orientation One of "top"/"bottom".
         */
        constructor(scale: Scales.Time, orientation: string, timezone: string);
        private _formatTickLabels(labelPos);
    }
}
