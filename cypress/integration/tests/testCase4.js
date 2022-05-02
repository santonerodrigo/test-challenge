import mainPage from "../pages/mainPage";
import computers from "../pages/computers";
const data = require("../../fixtures/example.json");
describe("QA Automation test 4", () => {
  const main = new mainPage();
  const computer = new computers();
  beforeEach(() => {
    main.visit();
  });
  it("add new computer", () => {
    main.addNewComputer();
    computer.editComputerName(data.testCase4.name);
    computer.editComputerIntroduced(data.testCase4.introduced);
    computer.editComputerDiscontinued(data.testCase4.discontinued);
    computer.editComputerCompany(data.testCase4.company);
    computer.createComputer();
    computer
      .succesMessage()
      .should(
        "contain",
        `Done !  Computer ${data.testCase4.name} has been created`
      );
  });
});
