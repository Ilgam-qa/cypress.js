
describe('Проверка покупки нового аватара', function () {
    it('e2e тест на покупку нового аватара для тренера', function () {
         cy.visit('https://pokemonbattle.ru/'); 
         cy.get('#k_email').type('USER_LOGIN');
         cy.get('#k_password').type('USER_PASSWORD');
         cy.get('.MuiButton-root').click();
         cy.get('.header_card_trainer').click();
         cy.get('[data-qa="shop"] > .k_trainer_in_button_wrapper > .k_trainer_in_button_title_no_desc').click();
         cy.get('.available > button').first().click();
         cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4620869113632996');
         cy.get(':nth-child(1) > .style_1_base_input').type('0129');
         cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125');
         cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('ILGAM VALIEV');
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
         cy.get('.style_1_base_input').type('56456');
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
         cy.get('.payment_status_top_title').contains('Покупка прошла успешно');
         cy.get('.payment_status_top_title').should('be.visible');
    })
     });