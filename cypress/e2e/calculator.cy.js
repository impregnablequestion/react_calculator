describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should be able to update the running total when number buttons are clicked', () => {
    cy.get('#number8').click();
    cy.get('#number8').click();
    cy.get('#number8').click();
    cy.get('.display').should('contain', '888');
  })

  it('should update display when arithmetic is performed', () => {
    cy.get('#number8').click();
    cy.get('#operator-divide').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2');
  })

  it('should be able to chain together multiple operations', () => {
    cy.get('#number8').click();
    cy.get('#operator-divide').click();
    cy.get('#number4').click();
    cy.get('#operator-add').click()
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '8');
  })

  it('should display decimals properly', () => {
    cy.get('#number9').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4.5');
  })

  it('should display negative numbers', () => {
    cy.get('#number1').click();
    cy.get('#operator-subtract').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-8');

  })

  it('should display very large numbers', () => {
    for (let i = 0; i < 16; i++) {
      cy.get('#number1').click();
    }
    cy.get('.display').should('contain', '111111111111111');
  })

  it('should display numbers to the power of when that is the result of a multiplication', () => {
    cy.get('#number1').click();
    for (let i = 0; i < 15; i++) {
      cy.get('#number0').click();
    }
    cy.get('#operator-multiply').click()
    cy.get('#number1').click();
    for (let i = 0; i < 15; i++) {
      cy.get('#number0').click();
    }
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '1e+30');

  })

  it('should display recurring numbers', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator-divide').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3.3333333333333335');
  })

  it('should return an appropriate response when dividing by 0', () => {
    cy.get('#number1').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'error: not a number');
  })

})