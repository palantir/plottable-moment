/// <reference path="references.ts"/>

let assert = chai.assert;

describe("Locales", () => {
  describe("loading a locale", () => {

    let localeDefinition = {};
    let localeId = "foo";
    let oldLocale: string;

    before(() => {
      oldLocale = Plottable.locale();
    })

    after(() => {
      Plottable.locale(oldLocale);
    })

    it("can set the locale to a loaded locale", () => {
      Plottable.loadLocale(localeId, localeDefinition);

      Plottable.locale(localeId);
      assert.strictEqual(Plottable.locale(), localeId);
    });

    it("can set the locale one of many loaded locales", () => {
      let localeId2 = "bar";
      Plottable.loadLocale(localeId2, localeDefinition);

      Plottable.locale(localeId2);
      assert.strictEqual(Plottable.locale(), localeId2);
    });
  });

  describe("calculating default time axis configurations", () => {

    let localeDefinition: moment.MomentLanguage;
    let localeId: string;
    let oldLocale: string;
    let format: string;

    before(() => {
      oldLocale = Plottable.locale();
    })

    after(() => {
      Plottable.locale(oldLocale);
    })

    beforeEach(() => {
      format = "[foo]";
      localeDefinition = {
        longDateFormat: {
          LT: format,
          LTS: format,
          L: format,
          LL: format,
          LLL: format,
          LLLL: format
        }
      };
      localeId = "foo";
      Plottable.loadLocale(localeId, localeDefinition);
      Plottable.locale(localeId);
    })

    it("uses locale specific formatters in the configuration", () => {
      let testDate = new Date(1999, 10, 12);
      let config = Plottable.Locales.defaultTimeAxisConfigurations();
      let formatter = config[0][0].formatter;
      assert.strictEqual(formatter(testDate), moment(testDate).format(format), "formats to locale definition");
    });
  });

});