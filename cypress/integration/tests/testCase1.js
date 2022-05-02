import mainPage from "../pages/mainPage";
import computers from "../pages/computers";
const data = require("../../fixtures/example.json");
describe("QA Automation test 1", () => {
  const main = new mainPage();
  const computer = new computers();
  beforeEach(() => {
    main.visit();
  });
  it("a- i", () => {
    main.searchComputer(data.testCase1);
    main.clickOnResults(data.testCase1);
    computer.editComputerDiscontinued("1994-01-01111");
    computer.saveEdit();
    computer.errorMessage().should("contain", "Failed to decode date");
  });
  it("a- ii", () => {
    main.searchComputer(data.testCase1);
    main.clickOnResults(data.testCase1);
    computer.editComputerName(`${data.testCase1} edited`);
    computer.saveEdit();
    computer
      .succesMessage()
      .should(
        "contain",
        `Done !  Computer ${data.testCase1} edited has been updated`
      );
  });
});
