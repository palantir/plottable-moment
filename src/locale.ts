/// <reference path="references.ts"/>

module Plottable {

  export function locale(): string;
  export function locale(language: string): void;
  export function locale(language?: string): any {
    if (language == null) {
      return moment.locale();
    }
    moment.locale(language);
  }

  export function loadLocale(id: string, localeDefinition: moment.MomentLanguage) {
    let currentLocale = moment.locale();
    moment.locale(id, localeDefinition);
    // Loading a locale sets the locale
    moment.locale(currentLocale);
  }

  export module Locales {

    export function defaultTimeAxisConfigurations(): Axes.TimeAxisConfiguration[] {
      return [
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
    }

  }
}