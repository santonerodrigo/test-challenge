class mainPage {
  constructor() {
    this.url = "/";
  }
  visit() {
    cy.visit(this.url);
    cy.clearCookies();
  }
  searchComputer(computer) {
    cy.get("#searchbox").type(computer);
    cy.get("#searchsubmit").click();
  }
  clickOnResults(computer) {
    cy.get("tbody>tr>td>a").contains(computer).click();
  }
  tableOfResults() {
    cy.get("#main > table > tbody>tr").each(($row) => {
      cy.wrap($row).within(() => {
        cy.get("td").each(($cellData) => {
          const data = Array.from($cellData, (el) => el.innerText);
          console.log(data);
        });
      });
    });
  }
  goToLastPage() {
    const lastPage = () => {
      cy.get("li.next").then((el) => {
        if (el.hasClass("disabled")) {
          return;
        }
        cy.wrap(el).find("a").click();
        lastPage();
      });
    };
    lastPage();
  }

  printNames() {
    cy.get("#main > table > tbody>tr > td:nth-child(1)").each(($name) => {
      const data = Array.from($name, (el) => el.innerText);
      cy.log(data);
    });
  }

  addNewComputer(add) {
    cy.get("#add").click();
  }
}
export default mainPage;
