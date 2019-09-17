import React from 'react'
import './style.css'

export default function PokemonList({pokemon, pokeImage}) {
    return (
        <div className="pokeList">
          {pokemon.map(p => (
              <div key={p}>{p}</div>

          ))}  
            {/* {pokeImage.map(i => (
                <img key={i}>{i}</img>

            ))}   */}
        </div>
    )
}
