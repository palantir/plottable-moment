/// <reference path="references.ts"/>

let assert = chai.assert;

describe("Locales", () => {

  describe("modifying default time axis configurations", () => {

    let localeDefinition: moment.MomentLanguage;
    let localeId: string;
    let oldLocale: string;
    let format: string;

    beforeEach(() => {
      oldLocale = moment.locale();
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
      moment.locale(localeId, localeDefinition);
    });

    afterEach(() => {
      moment.locale(oldLocale);
    });

    it("uses locale specific formatters in the configuration", () => {
      let testDate = new Date(1999, 10, 12);
      let timeScale = new Plottable.Scales.Time();
      let config = new Plottable.Axes.Time(timeScale, "bottom").axisConfigurations();
      let formatter = config[0][0].formatter;
      assert.strictEqual(formatter(testDate), moment(testDate).format(format), "formats to locale definition");
    });

    it("formats according to the most updated locale", () => {
      let testDate = new Date(1999, 10, 12);
      let timeScale = new Plottable.Scales.Time();
      let secondFormat = "[bar]";
      let secondlocaleDefinition = {
        longDateFormat: {
          LT: secondFormat,
          LTS: secondFormat,
          L: secondFormat,
          LL: secondFormat,
          LLL: secondFormat,
          LLLL: secondFormat
        }
      };
      let secondlocaleId = "bar";
      let config = new Plottable.Axes.Time(timeScale, "bottom").axisConfigurations();
      moment.locale(secondlocaleId, secondlocaleDefinition);
      let formatter = config[0][0].formatter;
      assert.strictEqual(formatter(testDate), moment(testDate).format(secondFormat), "formats to locale definition");
    });
  });

});
