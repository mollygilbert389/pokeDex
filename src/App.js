import React, {useState, useEffect} from 'react';
import './App.css';
import PokemonList from './PokemonList'
import axios from 'axios'
import Pagination from './Pagination';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'

function App() {
  

  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setcurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [pokeimageFirstUrl, setPokeFirstImageUrl] = useState()
  const [pokeSecondimageUrl, setPokeSecondImageUrl] = useState()
  const [pokeImage, setPokeImage] = useState()
  const [nextPageUrl, setNextPageUrl] = useState()
  const [previousPageUrl, setPreviousPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken( c => cancel = c)
    }).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPreviousPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
      setPokeFirstImageUrl(res.data.results.map(i => i.url))
      // setPokeSecondImageUrl(res.sprites.font_default)
      // setPokeImage(res.sprites.font_default)
    })

    return () => cancel()
  }, [currentPageUrl])

  function gotoNextPage() {
    setcurrentPageUrl(nextPageUrl)
  }

  function gotoPreviousPage() {
    setcurrentPageUrl(previousPageUrl)
  }

  function showImages() {
    setPokeFirstImageUrl(pokeimageFirstUrl)
    setPokeSecondImageUrl(pokeSecondimageUrl)
    setPokeImage(pokeSecondimageUrl)
  }

  if (loading) return "Loading..."

  return (
    <div>

      <>
        <style type="text/css">
          {`
          .navbar {
            background-color: red;
            color: white;
          }
          `}
        </style>

        <Navbar className="navbar">
        <Navbar className="navbar" >Gotta catch em All!</Navbar>
      </Navbar>
      </>

      <br></br>
      <PokemonList 
      pokemon={pokemon} 
      // pokeImage={pokeImage} 
      />
      
      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPreviousPage={previousPageUrl ? gotoPreviousPage : null}
      />
    </div>
  );
}

export default App;
