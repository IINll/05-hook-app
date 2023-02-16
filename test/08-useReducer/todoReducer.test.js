import { todoReducer } from "../../src/08-useReducer/todoReducer";



describe('Pruebas en todoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }]

    test('debe regresar el estado inicial', () => {

        const newState = todoReducer( initialState, {} );
        expect( newState ).toEqual( initialState );

    });

    test('debe agregar un todo', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo Todo 2',
                done: false,
            }
        }
        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe( 2 );
        expect( newState ).toContain( action.payload );

    });

    test('debe eliminar un todo', () => {

        const action = {
            type: '[TODO] Remove Todo',
            payload: {
                id: 1,
                description: 'Demo Todo',
                done: false,
            }
        }
        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe( 1 );
        

    });

    test('debe marcar como completado un todo', () => {

        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
                
            
        }
        const [ primero, ...rest ] = todoReducer( initialState, action );
        
        expect( primero.done ).toBeTruthy();

    });

});



