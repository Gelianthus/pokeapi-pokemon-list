import pokemonNamesArr from "./pokemonList";
import { useState, useRef, useEffect } from "react";
import {BsArrowUpSquareFill} from 'react-icons/bs';

function PokemonListPage () {

    const [ listArr, setListArr ] = useState(pokemonNamesArr);
    const [ isIconVisible, setIsIconVisible ] = useState(false);
    const inputValue = useRef(null);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 500) {
                setIsIconVisible(true);
            } else {
                setIsIconVisible(false);
            }
        })
    }, [])

    const filter = () => {
        setListArr(pokemonNamesArr.filter((index) => {
            return index.includes(inputValue.current.value.toLowerCase())
        }))
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <main>
            <h2>
                <a className="back-link" rel="noreferrer" target="_blank" href="https://gelianthus.github.io/not-pokedex">
                    Go back
                </a>
            </h2>
            <div className="prefixes">
                <p>Here are some of the available prefixes to target specific forms:</p>
                <ul className="prefix-list">
                    <li className="prefix-item">"-mega"</li>
                    <li className="prefix-item">"-alola"</li>
                    <li className="prefix-item">"-galar"</li>
                    <li className="prefix-item">"-gmax"</li>
                </ul>
            </div>
            <div className="search-input-container">
                <input ref={inputValue} className="search-input" placeholder="Type to filter the list" onChange={filter}/>
            </div>
            <ul className="list-items">
                {listArr.length < 1 && <li className="list-item">(No match)</li>}
                {listArr.map((index) => {
                    return <li key={index} className="list-item">{index}</li>
                })}
            </ul>
            <button onClick={scrollToTop} className={`auto-scroll ${isIconVisible ? "icon-visible" : "icon-hidden"}`}><BsArrowUpSquareFill className="arrow-icon"></BsArrowUpSquareFill></button>
        </main>
    )
}

export default PokemonListPage;