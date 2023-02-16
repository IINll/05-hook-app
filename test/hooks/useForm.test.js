import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('Pruebas en useForm', () => {


    const initialForm = {
        name: 'Fernando',
        email: 'fernando@google.com'
    }


    test('debe regresar la información por defecto', () => {

        const { result } = renderHook( () => useForm( initialForm ) );

        expect( result.current ).toEqual({

            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )


        });

    });


    test('debe regresar el form con los cambios', () => {

        const newValue = 'Juan';   
        const { result } = renderHook( () => useForm( initialForm ) );

        const { onInputChange } = result.current;


        act( () => {

            onInputChange( { target: { name: 'name', value: newValue } } );


        });


        expect( result.current.name ).toBe('Juan');
        expect( result.current.formState.name ).toBe('Juan');


    });


    test('debe realizar el reset del formulario', () => {

        const newValue = 'Juan';   
        const { result } = renderHook( () => useForm( initialForm ) );

        const { onInputChange, onResetForm } = result.current;


        act( () => {

            onInputChange( { target: { name: 'name', value: newValue } } );
            onResetForm();


        });


        expect( result.current.name ).toBe( initialForm.name );
        expect( result.current.formState.name ).toBe( initialForm.name );


    });



});