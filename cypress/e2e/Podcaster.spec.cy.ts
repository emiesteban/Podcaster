describe('Podcaster Root', () => {
    beforeEach(() => {
      cy.visit('http://localhost:9000');
  })

    it('frontend can be opened', () => {
      cy.contains('Podcaster')
  });

  it('get List filtered', () => {
      cy.get('input').type('a')
  });

  it('open first card', () => {
      cy.get('[class="card"]:first').click()
  });

  it('open episode from first card', () => {
      cy.get('[class="card"]:first').click()
      cy.get('[data-testid="episodelink"]:first').click()
      cy.contains('Preview\:')
  });

})

describe('Podcaster Subroute podcast', () => {
    beforeEach(() => {
        cy.visit('http://localhost:9000/podcast/1');
  })

    it('frontend can be opened', () => {
        cy.contains('Podcaster')
  });
})

describe('Podcaster Subroute episode', () => {
    beforeEach(() => {
        cy.visit('http://localhost:9000/podcast/1/episode/1');
      })

      it('frontend can be opened', () => {
        cy.contains('Podcaster')
      });
})
