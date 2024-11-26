function hexToRgb(hex: string) {
  const bigint = parseInt(hex.replace("#", ""), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgb(${r}, ${g}, ${b})`;
}

const allowedColors = [
  "#A8A87B", // normal
  "#559EDF", // water
  "#EE803B", // fire
  "#88BE5D", // grass
  "#F7CF43", // electric
  "#9AD8D8", // ice
  "#BE322E", // fighting
  "#B563CE", // poison
  "#DFBF6E", // ground
  "#A893ED", // flying
  "#EC5C89", // psychic
  "#A8B732", // bug
  "#B89F41", // rock
  "#705A97", // ghost
  "#705849", // dark
  "#7043F4", // dragon
  "#B8B9CF", // steel
  "#EFB7BD", // fairy
].map((hex) => hexToRgb(hex));

function runPokemonTests() {
  //Check if there is a background color
  cy.get("#pokemon-page")
    .should("have.css", "background-color")
    .then((bgColor) => {
      expect(allowedColors).to.include(bgColor);
    });

  //Check if the image is visible
  cy.get("#image").should("be.visible");

  //Check if the name is not empty
  cy.get("#name").should("not.be.empty");

  // Check if the parent div has children
  cy.get("#types")
    .children()
    .should("have.length.greaterThan", 0) // Assert the div has at least one child
    .each((child) => {
      // Run a test for each child
      cy.wrap(child).should("be.visible"); // Example: Check if each child is visible

      // Perform additional assertions as needed
      cy.wrap(child).should("not.be.empty");

      //Has background color
      cy.wrap(child)
        .should("have.css", "background-color")
        .then((bgColor) => {
          expect(allowedColors).to.include(bgColor);
        });
    });

  //Check if the description are not empty
  cy.get("#description").should("not.be.empty");

  //Check if the move button are visible
  cy.get("#MOVES").click();

  //Check if the stats are visible
  cy.get("#STATS").click();
  cy.get("#stat-block").children().should("have.length.greaterThan", 0);

  //Check if the evolutions are visible
  cy.get("#EVOLUTIONS").click();
  cy.get("#evolution-block")
    .children()
    .should("have.length.greaterThan", 0)
    .each((child) => {
      // Check if the image is visible
      cy.wrap(child).find(".evolution-image").should("be.visible");

      // Check if the name is not empty
      cy.wrap(child).find(".evolution-name").should("not.be.empty");
    });
}

describe("Main app test", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");

    // Find the random button by ID and click it
    cy.get("#random").click();

    // Run the Pokemon page tests
    runPokemonTests();

    // Find the back button by ID and click it
    cy.get("#back-button").click();

    // Find the input field by ID and type a value
    cy.get("#input").type("1");

    // Assert that the input field has the correct value
    cy.get("#input").should("have.value", "1");

    // Find the search button by ID and click it
    cy.get("#search").click();

    // Run the Pokemon page tests
    runPokemonTests();
  });
});
