/// <reference path="../typings/d3/d3.d.ts"/>
/// <reference path="../typings/plottable/plottable.d.ts"/>
/// <reference path="../typings/moment/moment.d.ts"/>
/// <reference path="../typings/moment-timezone/moment-timezone.d.ts"/>
/// <reference path="references.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Plottable;
(function (Plottable) {
    var localeAwareTimeAxisConfigurations = [
        [
            { interval: Plottable.TimeInterval.second, step: 1, formatter: function (d) { return moment(d).format("LTS"); } },
            { interval: Plottable.TimeInterval.day, step: 1, formatter: function (d) { return moment(d).format("LL"); } }
        ],
        [
            { interval: Plottable.TimeInterval.second, step: 5, formatter: function (d) { return moment(d).format("LTS"); } },
            { interval: Plottable.TimeInterval.day, step: 1, formatter: function (d) { return moment(d).format("LL"); } }
        ],
        [
            { interval: Plottable.TimeInterval.second, step: 10, formatter: function (d) { return moment(d).format("LTS"); } },
            { interval: Plottable.TimeInterval.day, step: 1, formatter: function (d) { return moment(d).format("LL"); } }
        ],
        [
            { interval: Plottable.TimeInterval.second, step: 15, formatter: function (d) { return moment(d).format("LTS"); } },
            { interval: Plottable.TimeInterval.day, step: 1, formatter: function (d) { return moment(d).format("LL"); } }
        ],
        [
            { interval: Plottable.TimeInterval.second, step: 30, formatter: function (d) { return moment(d).format("LTS"); } },
            { interval: Plottable.TimeInterval.day, step: 1, formatter: function (d) { return moment(d).format("LL"); } }
        ],
        [
            { interval: Plottable.TimeInterval.minute, step: 1, formatter: function (d) { return moment(d).format("LT"); } },
            { interval: Plottable.TimeInterval.day, step: 1, formatter: function (d) { return moment(d).format("LL"); } }
        ],
        [
            { interval: Plottable.TimeInterval.minute, step: 5, formatter: function (d) { return moment(d).format("LT"); } },
            { interval: Plottable.TimeInterval.day, step: 1, formatter: function (d) { return moment(d).format("LL"); } }
        ],
        [
            { interval: Plottable.TimeInterval.minute, step: 10, formatter: function (d) { return moment(d).format("LT"); } },
            { interval: Plottable.TimeInterval.day, step: 1, formatter: function (d) { return moment(d).format("LL"); } }
        ],
        [
            { interval: Plottable.TimeInterval.minute, step: 15, formatter: function (d) { return moment(d).format("LT"); } },
            { interval: Plottable.TimeInterval.day, step: 1, formatter: function (d) { return moment(d).format("LL"); } }
        ],
        [
            { interval: Plottable.TimeInterval.minute, step: 30, formatter: function (d) { return moment(d).format("LT"); } },
            { interval: Plottable.TimeInterval.day, step: 1, formatter: function (d) { return moment(d).format("LL"); } }
        ],
        [
            { interval: Plottable.TimeInterval.hour, step: 1, formatter: function (d) { return moment(d).format("LT"); } },
            { interval: Plottable.TimeInterval.day, step: 1, formatter: function (d) { return moment(d).format("LL"); } }
        ],
        [
            { interval: Plottable.TimeInterval.hour, step: 3, formatter: function (d) { return moment(d).format("LT"); } },
            { interval: Plottable.TimeInterval.day, step: 1, formatter: function (d) { return moment(d).format("LL"); } }
        ],
        [
            { interval: Plottable.TimeInterval.hour, step: 6, formatter: function (d) { return moment(d).format("LT"); } },
            { interval: Plottable.TimeInterval.day, step: 1, formatter: function (d) { return moment(d).format("LL"); } }
        ],
        [
            { interval: Plottable.TimeInterval.hour, step: 12, formatter: function (d) { return moment(d).format("LT"); } },
            { interval: Plottable.TimeInterval.day, step: 1, formatter: function (d) { return moment(d).format("LL"); } }
        ],
        [
            { interval: Plottable.TimeInterval.day, step: 1, formatter: function (d) { return moment(d).format("ddd D"); } },
            { interval: Plottable.TimeInterval.month, step: 1, formatter: function (d) { return moment(d).format("MMMM YYYY"); } }
        ],
        [
            { interval: Plottable.TimeInterval.day, step: 1, formatter: function (d) { return moment(d).format("dd D"); } },
            { interval: Plottable.TimeInterval.month, step: 1, formatter: function (d) { return moment(d).format("MMMM YYYY"); } }
        ],
        [
            { interval: Plottable.TimeInterval.day, step: 1, formatter: function (d) { return moment(d).format("D"); } },
            { interval: Plottable.TimeInterval.month, step: 1, formatter: function (d) { return moment(d).format("MMMM YYYY"); } }
        ],
        [
            { interval: Plottable.TimeInterval.month, step: 1, formatter: function (d) { return moment(d).format("MMMM"); } },
            { interval: Plottable.TimeInterval.year, step: 1, formatter: function (d) { return moment(d).format("YYYY"); } }
        ],
        [
            { interval: Plottable.TimeInterval.month, step: 1, formatter: function (d) { return moment(d).format("MMM"); } },
            { interval: Plottable.TimeInterval.year, step: 1, formatter: function (d) { return moment(d).format("YYYY"); } }
        ],
        [
            { interval: Plottable.TimeInterval.month, step: 3, formatter: function (d) { return moment(d).format("MMM"); } },
            { interval: Plottable.TimeInterval.year, step: 1, formatter: function (d) { return moment(d).format("YYYY"); } }
        ],
        [
            { interval: Plottable.TimeInterval.month, step: 6, formatter: function (d) { return moment(d).format("MMM"); } },
            { interval: Plottable.TimeInterval.year, step: 1, formatter: function (d) { return moment(d).format("YYYY"); } }
        ],
        [
            { interval: Plottable.TimeInterval.year, step: 1, formatter: function (d) { return moment(d).format("YYYY"); } }
        ],
        [
            { interval: Plottable.TimeInterval.year, step: 5, formatter: function (d) { return moment(d).format("YYYY"); } }
        ],
        [
            { interval: Plottable.TimeInterval.year, step: 25, formatter: function (d) { return moment(d).format("YYYY"); } }
        ],
        [
            { interval: Plottable.TimeInterval.year, step: 50, formatter: function (d) { return moment(d).format("YYYY"); } }
        ],
        [
            { interval: Plottable.TimeInterval.year, step: 100, formatter: function (d) { return moment(d).format("YYYY"); } }
        ],
        [
            { interval: Plottable.TimeInterval.year, step: 250, formatter: function (d) { return moment(d).format("YYYY"); } }
        ],
        [
            { interval: Plottable.TimeInterval.year, step: 500, formatter: function (d) { return moment(d).format("YYYY"); } }
        ],
        [
            { interval: Plottable.TimeInterval.year, step: 1000, formatter: function (d) { return moment(d).format("YYYY"); } }
        ]
    ];
    // HACKHACK: https://github.com/palantir/plottable/issues/2824 default config variable not publicized
    Plottable.Axes.Time._DEFAULT_TIME_AXIS_CONFIGURATIONS = localeAwareTimeAxisConfigurations;
})(Plottable || (Plottable = {}));
var Plottable;
(function (Plottable) {
    var Axes;
    (function (Axes) {
        var TimeZone = (function (_super) {
            __extends(TimeZone, _super);
            /**
             * Constructs a Time Axis.
             *
             * A Time Axis is a visual representation of a Time Scale.
             *
             * @constructor
             * @param {Scales.Time} scale
             * @param {string} orientation One of "top"/"bottom".
             */
            function TimeZone(scale, orientation, timezone) {
                this._timezone = timezone;
                _super.call(this, scale, orientation);
            }
            TimeZone.prototype._formatTickLabels = function (labelPos) {
                var _this = this;
                return labelPos.map(function (l) { return moment(l).tz(_this._timezone); });
            };
            return TimeZone;
        })(Axes.Time);
        Axes.TimeZone = TimeZone;
    })(Axes = Plottable.Axes || (Plottable.Axes = {}));
})(Plottable || (Plottable = {}));
