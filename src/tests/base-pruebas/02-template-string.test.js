import { getUser, getUsuarioActivo } from '../../src/base-pruebas/02-template-string';

describe('Pruebas en 05-funciones', () => {

    test('getUser debe de retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        // Llamar a la función getUser
        const user = getUser();

        // Comparar el objeto esperado con el objeto retornado
        expect(testUser).toEqual(user);

    });

    test('getUsuarioActivo debe de retornar un objeto', () => {

        const name = 'Fernando';

        // Llamar a la función getUsuarioActivo con el nombre como argumento
        const user = getUsuarioActivo(name);

        // Comparar el objeto esperado con el objeto retornado
        expect(user).toStrictEqual({
            uid: 'ABC567',
            username: name
        });

    });

});