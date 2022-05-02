import mainPage from "../pages/mainPage";
import computers from "../pages/computers";
const data = require("../../fixtures/example.json");
describe("QA Automation test 2", () => {
  const main = new mainPage();
  const computer = new computers();
  beforeEach(() => {
    main.visit();
  });
  it("HP", () => {
    main.searchComputer(data.testCase2);
    main.tableOfResults();
  });
});
