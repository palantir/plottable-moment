/// <reference path="references.ts"/>

module Plottable {
  let localeAwareTimeAxisConfigurations: Axes.TimeAxisConfiguration[] = [
    [
      {interval: TimeInterval.second, step: 1, formatter: (d) => moment(d).format("LTS")},
      {interval: TimeInterval.day, step: 1, formatter: (d) => moment(d).format("LL")}
    ],
    [
      {interval: TimeInterval.second, step: 5, formatter: (d) => moment(d).format("LTS")},
      {interval: TimeInterval.day, step: 1, formatter: (d) => moment(d).format("LL")}
    ],
    [
      {interval: TimeInterval.second, step: 10, formatter: (d) => moment(d).format("LTS")},
      {interval: TimeInterval.day, step: 1, formatter: (d) => moment(d).format("LL")}
    ],
    [
      {interval: TimeInterval.second, step: 15, formatter: (d) => moment(d).format("LTS")},
      {interval: TimeInterval.day, step: 1, formatter: (d) => moment(d).format("LL")}
    ],
    [
      {interval: TimeInterval.second, step: 30, formatter: (d) => moment(d).format("LTS")},
      {interval: TimeInterval.day, step: 1, formatter: (d) => moment(d).format("LL")}
    ],
    [
      {interval: TimeInterval.minute, step: 1, formatter: (d) => moment(d).format("LT")},
      {interval: TimeInterval.day, step: 1, formatter: (d) => moment(d).format("LL")}
    ],
    [
      {interval: TimeInterval.minute, step: 5, formatter: (d) => moment(d).format("LT")},
      {interval: TimeInterval.day, step: 1, formatter: (d) => moment(d).format("LL")}
    ],
    [
      {interval: TimeInterval.minute, step: 10, formatter: (d) => moment(d).format("LT")},
      {interval: TimeInterval.day, step: 1, formatter: (d) => moment(d).format("LL")}
    ],
    [
      {interval: TimeInterval.minute, step: 15, formatter: (d) => moment(d).format("LT")},
      {interval: TimeInterval.day, step: 1, formatter: (d) => moment(d).format("LL")}
    ],
    [
      {interval: TimeInterval.minute, step: 30, formatter: (d) => moment(d).format("LT")},
      {interval: TimeInterval.day, step: 1, formatter: (d) => moment(d).format("LL")}
    ],
    [
      {interval: TimeInterval.hour, step: 1, formatter: (d) => moment(d).format("LT")},
      {interval: TimeInterval.day, step: 1, formatter: (d) => moment(d).format("LL")}
    ],
    [
      {interval: TimeInterval.hour, step: 3, formatter: (d) => moment(d).format("LT")},
      {interval: TimeInterval.day, step: 1, formatter: (d) => moment(d).format("LL")}
    ],
    [
      {interval: TimeInterval.hour, step: 6, formatter: (d) => moment(d).format("LT")},
      {interval: TimeInterval.day, step: 1, formatter: (d) => moment(d).format("LL")}
    ],
    [
      {interval: TimeInterval.hour, step: 12, formatter: (d) => moment(d).format("LT")},
      {interval: TimeInterval.day, step: 1, formatter: (d) => moment(d).format("LL")}
    ],
    [
      {interval: TimeInterval.day, step: 1, formatter: (d) => moment(d).format("ddd D")},
      {interval: TimeInterval.month, step: 1, formatter: (d) => moment(d).format("MMMM YYYY")}
    ],
    [
      {interval: TimeInterval.day, step: 1, formatter: (d) => moment(d).format("dd D")},
      {interval: TimeInterval.month, step: 1, formatter: (d) => moment(d).format("MMMM YYYY")}
    ],
    [
      {interval: TimeInterval.day, step: 1, formatter: (d) => moment(d).format("D")},
      {interval: TimeInterval.month, step: 1, formatter: (d) => moment(d).format("MMMM YYYY")}
    ],
    [
      {interval: TimeInterval.month, step: 1, formatter: (d) => moment(d).format("MMMM")},
      {interval: TimeInterval.year, step: 1, formatter: (d) => moment(d).format("YYYY")}
    ],
    [
      {interval: TimeInterval.month, step: 1, formatter: (d) => moment(d).format("MMM")},
      {interval: TimeInterval.year, step: 1, formatter: (d) => moment(d).format("YYYY")}
    ],
    [
      {interval: TimeInterval.month, step: 3, formatter: (d) => moment(d).format("MMM")},
      {interval: TimeInterval.year, step: 1, formatter: (d) => moment(d).format("YYYY")}
    ],
    [
      {interval: TimeInterval.month, step: 6, formatter: (d) => moment(d).format("MMM")},
      {interval: TimeInterval.year, step: 1, formatter: (d) => moment(d).format("YYYY")}
    ],
    [
      {interval: TimeInterval.year, step: 1, formatter: (d) => moment(d).format("YYYY")}
    ],
    [
      {interval: TimeInterval.year, step: 5, formatter: (d) => moment(d).format("YYYY")}
    ],
    [
      {interval: TimeInterval.year, step: 25, formatter: (d) => moment(d).format("YYYY")}
    ],
    [
      {interval: TimeInterval.year, step: 50, formatter: (d) => moment(d).format("YYYY")}
    ],
    [
      {interval: TimeInterval.year, step: 100, formatter: (d) => moment(d).format("YYYY")}
    ],
    [
      {interval: TimeInterval.year, step: 250, formatter: (d) => moment(d).format("YYYY")}
    ],
    [
      {interval: TimeInterval.year, step: 500, formatter: (d) => moment(d).format("YYYY")}
    ],
    [
      {interval: TimeInterval.year, step: 1000, formatter: (d) => moment(d).format("YYYY")}
    ]
  ];

  // HACKHACK: https://github.com/palantir/plottable/issues/2824 default config variable not publicized
  (<any> Axes.Time)._DEFAULT_TIME_AXIS_CONFIGURATIONS = localeAwareTimeAxisConfigurations;
  
}

module Plottable.Axes {
  export class TimeZone extends Time {
    private _timezone: string;
    /**
     * Constructs a Time Axis.
     *
     * A Time Axis is a visual representation of a Time Scale.
     *
     * @constructor
     * @param {Scales.Time} scale
     * @param {string} orientation One of "top"/"bottom".
     */
    constructor(scale: Scales.Time, orientation: string, timezone: string) {
      this._timezone = timezone;
      super(scale, orientation);
    }
    
    private _formatTickLabels(labelPos: Date[]) {
      return labelPos.map((l) => moment(l).tz(this._timezone));
    }
  }
}
