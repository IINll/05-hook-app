import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
        
    });

    beforeEach( () => {
        jest.clearAllMocks();
    });

    test('debe mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render( <MultipleCustomHooks /> );
        
        expect( screen.getByText( 'Loading...' ) );
        expect( screen.getByText( 'Pokemon quotes' ) );

        const nextButton = screen.getByRole('button', { name: 'Next' });

        expect( nextButton.disabled ).toBeTruthy();

        // expect( nextButton.disable );
        
        screen.debug();

    });


    test('debe mostrar un Quote', () => {

        useFetch.mockReturnValue({
            data: [{ name: 'Fernando', url: 'Hola Mundo' }],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks /> );
        expect( screen.getByText('Hola Mundo') ).toBeTruthy();
        expect( screen.getByText('Fernando') ).toBeTruthy();


    });



    test('debe llamar la función de incrementar', () => {


        

        useFetch.mockReturnValue({
            data: [{ name: 'Fernando', url: 'Hola Mundo' }],
            isLoading: false,
            hasError: null
        });
        
        


        render( <MultipleCustomHooks /> );
        

        const nextButton = screen.getByRole( 'button', {name: 'Next'} );
        fireEvent.click( nextButton );

        expect( mockIncrement ).toHaveBeenCalled();

    })




});