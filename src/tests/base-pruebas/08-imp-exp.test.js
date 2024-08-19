import {getHeroeById} from "../../base-pruebas/08-imp-exp.js";


describe('base-pruebas/08-imp-exp', () => {


    test('getHeroeByID debe de retornar un heroe por ID', () => {

        const id = 100;
        const hero = getHeroeById(id )


        expect(hero).toEqual({id: 1, name: 'Batman', owner: })



    })
})