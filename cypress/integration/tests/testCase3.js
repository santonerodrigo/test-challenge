import mainPage from "../pages/mainPage";
import computers from "../pages/computers";
const data = require("../../fixtures/example.json");
describe("QA Automation test 3", () => {
  const main = new mainPage();
  const computer = new computers();
  beforeEach(() => {
    main.visit();
  });
  it("IBM", () => {
    main.searchComputer(data.testCase3);
    main.goToLastPage();
    main.printNames();
  });
});
