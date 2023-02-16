import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";


describe('Pruebas en el useCounter', () => {


    test('debe retornar los valores por defecto', () => {


        const { result } = renderHook( () => useCounter() );
        const { counter, decrement, increment, reset } = result.current;

        expect( counter ).toBe(10);
        expect( decrement ).toEqual(expect.any( Function ) );
        expect( increment ).toEqual(expect.any( Function ) );
        expect( reset ).toEqual(expect.any( Function ) );

    });


    test('debe generar el counter con el valor de 100', () => {

        const { result } = renderHook( () => useCounter(100) );
        const { counter, decrement, increment, reset } = result.current;

        expect( counter ).toBe(100);


    })

    test('debe incrementar el counter', () => {

        const { result } = renderHook( () => useCounter(100) );
        const { counter, decrement, increment, reset } = result.current;

        act( () => {

            increment();
            increment(2);

        });
        

        expect( result.current.counter ).toBe(103);


    });


    test('debe decrecer el counter', () => {

        const { result } = renderHook( () => useCounter(100) );
        const { counter, decrement, increment, reset } = result.current;

        act( () => {

            decrement();
            decrement(2);

        });
        

        expect( result.current.counter ).toBe(97);


    });


    test('debe resetear el counter', () => {

        const { result } = renderHook( () => useCounter(100) );
        const { counter, decrement, increment, reset } = result.current;

        act( () => {

            decrement(2);
            decrement(2);
            decrement(2);
            reset();

        });
        

        expect( result.current.counter ).toBe(100);


    });



});

