import { useEffect, useState } from "react";


export const useFetch = (urlPeticion) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    });

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true
        })

        const resp = await fetch(urlPeticion);
        const data = await resp.json();
        const {forms} = data;
        
        

        setState({
            data: forms,
            isLoading: false,
            hasError: null
        })
    }


    useEffect(() => {

        getFetch();

    }, [urlPeticion]);



  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  };
}
