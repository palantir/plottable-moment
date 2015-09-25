/// <reference path="../typings/d3/d3.d.ts"/>
/// <reference path="../typings/plottable/plottable.d.ts"/>
/// <reference path="../typings/moment/moment.d.ts"/> 
/// <reference path="references.ts"/>
var Plottable;
(function (Plottable) {
    var Axes;
    (function (Axes) {
        var Time;
        (function (Time) {
            /**
            * Creates a TimeAxisConfiguration array to use for Plottable's Axes.Time
            * with formatters that are locale-friendly.
            *
            * After this TimeAxisConfiguration array is created, it can be used similar to
            * timeAxis.axisConfigurations(Plottable.Locales.defaultTimeAxisConfigurations())
            */
            function defaultTimeAxisConfigurations() {
                return [
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
            }
            Time.defaultTimeAxisConfigurations = defaultTimeAxisConfigurations;
        })(Time = Axes.Time || (Axes.Time = {}));
    })(Axes = Plottable.Axes || (Plottable.Axes = {}));
})(Plottable || (Plottable = {}));
