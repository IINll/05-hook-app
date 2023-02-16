import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./index";



export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);

    const {data, isLoading, hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    console.log(data, isLoading, hasError);

    const {name, url} = !!data && data[0];

    const onNextPokemon = () => {
        increment(1);
    }
   

  return (
    <>

        <h1>Pokemon quotes</h1>
        <hr />
        {
            // isLoading
            // ? (
            //     <div className="alert alert-info text-center">
            //         Loading...
            //     </div>
            // )
            // : (
            //     <blockquote className="blockquote text-end">
            //         <p className="mb-1">{url}</p>
            //         <footer className="blockquote-footer">{name}</footer>
            //     </blockquote>
            // )
        }

        {
            isLoading 
            ? <LoadingQuote />
            : <Quote  url={url} name={name}/>
        }
        <button onClick={onNextPokemon} disabled={isLoading} className="btn btn-primary">Next</button>

        

        


    </>
  )
}
