/// <reference types="cypress" />

describe("testes do crud da agenda de contatos", () => {

    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('testando a renderização inicial',() => {
        cy.get('input').should('have.length', 3)
    })

    it('testando a adição de contatos na agenda', () => {
        cy.get('[type="text"]').type('felipe martins')
        cy.get('[type="email"]').type('felipe@martins.com')
        cy.get('[type="tel"]').type('119123456789')
        cy.get('.adicionar').click()
        cy.get('.contato ul li').contains('felipe martins').should('exist')
    })

    it('testando a edição de contatos na agenda', () => {
        cy.get('.edit').first().click()
        cy.get('[type="text"]').clear().type('editado: felipe martins')
        cy.get('.alterar').click()
        cy.get('.contato ul li').contains('editado: felipe martins').should('exist')
    })

    it('testando a exclusão de contatos na agenda', () => {
        cy.request('GET','https://fake-api-tau.vercel.app/api/contatos')
        .then((response) => {
            expect(response.status).to.eq(200)

            const tamanhoAnterior = response.body.data.length

            expect(tamanhoAnterior).to.be.greaterThan(0)

            cy.get('.delete').last().click()

            cy.request('GET','https://fake-api-tau.vercel.app/api/contatos')
            .then(resp => {
                expect(resp.status).to.eq(200)

                const tamanhoNovo = resp.body.data.length

                expect(tamanhoNovo).to.eq(tamanhoAnterior - 1)
            })


        })
    })

})
