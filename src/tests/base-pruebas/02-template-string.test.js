import {getSaludo} from "../../base-pruebas/02-template-string.js";


describe('Pruebas em 02-template-string', () => {

    test('getSaludo debe de retornar "Hola Gustavo"',  ()  => {

        const name = 'Gustavo';
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name} `);

    })

})

