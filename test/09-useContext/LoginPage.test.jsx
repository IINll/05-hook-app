import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";

import { LoginPage } from "../../src/09-useContext/LoginPage";






describe( 'Pruebas en <LoginPage />',  () => {

    const user = {
        id: 1,
        name: 'Fernando',
    }

    

    test('debe mostrar el componente sin el usuario', () => {


        render(
            <UserContext.Provider value= { { user: null } } >
                <LoginPage />
            </UserContext.Provider>
        )

        expect( screen.getByLabelText( 'preLogin' ).innerHTML ).toBe( 'null' );

    } );


    test('debe llamar el setUser cuando se hace click en el boton', () => {
        
        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value= { { user: null, setUser: setUserMock } } >
                <LoginPage />
            </UserContext.Provider>
        )

        const button = screen.getByRole('button');
        fireEvent.click( button );

        expect( setUserMock ).toHaveBeenCalledWith( { id:123, name: 'Juan', email: 'juan@google.com' } );




    } );


} );

