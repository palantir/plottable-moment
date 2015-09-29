/// <reference path="references.ts"/>

let assert = chai.assert;

describe("Locales", () => {

  describe("modifying default time axis configurations", () => {

    let localeDefinition: moment.MomentLanguage;
    let localeId: string;
    let oldLocale: string;
    let format: string;

    before(() => {
      oldLocale = moment.locale();
    })

    after(() => {
      moment.locale(oldLocale);
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
      moment.locale(localeId, localeDefinition);
    })

    it("uses locale specific formatters in the configuration", () => {
      let testDate = new Date(1999, 10, 12);
      let timeScale = new Plottable.Scales.Time();
      let config = new Plottable.Axes.Time(timeScale, "bottom").axisConfigurations();
      let formatter = config[0][0].formatter;
      assert.strictEqual(formatter(testDate), moment(testDate).format(format), "formats to locale definition");
    });
  });

});
