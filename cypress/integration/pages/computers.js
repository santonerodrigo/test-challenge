class computers {
  saveEdit() {
    cy.get(".primary").click();
  }
  editComputerName(value) {
    cy.get("#name").clear().type(value);
  }
  editComputerIntroduced(value) {
    cy.get("#introduced").clear().type(value);
  }
  editComputerDiscontinued(value) {
    cy.get("#discontinued").clear().type(value);
  }
  editComputerCompany(value) {
    cy.get("select").first().select(value);
  }
  errorMessage() {
    return cy.get("div.clearfix.error > div > span").invoke("text");
  }
  succesMessage() {
    return cy.get(".alert-message").invoke("text");
  }
  createComputer() {
    cy.get(".primary").click();
  }
}
export default computers;
