describe("404 page demo", () => {
  it("should visit the index page", () => {
    cy.visit("/en-jp/index/");
    cy.contains("Hello world");
  });
});
