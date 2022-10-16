import Image from "next/image";

import styles from '../../styles/Pokemon.module.css'
import {useRouter} from "next/router";

export async function getStaticProps(context) {
  const id = context.params.pokemonId;
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const pokemon = await data.json()
  return {
    props: { pokemon },
  }
}

export async function getStaticPaths() {
  const maxPokemons = 151
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${maxPokemons}`)
  const data = await res.json()

  const paths = data.results.map((pokemon, index) => {
    return {
      params: {
        pokemonId: (index + 1).toString()
      }
    }
  })

  return { paths, fallback: true } // false: geração das páginas no momento do build
}

export default function Pokemon({pokemon}) {
  // for fallback = true
  const router = useRouter()
  if(router.isFallback) {
    return (
      <div><h1>Loading...</h1></div>
    )
  }

  return (
    <div className={styles.pokemon_container}>
      <h1 className={styles.name}>{pokemon.name}</h1>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
        width={"200px"}
        height={"200px"}
        alt={`${pokemon.name} image.`}
      />
      <div>
        <h3>Number</h3>
        <p className={styles.id}>#{pokemon.id}</p>
      </div>
      <div>
        <h3>Type</h3>
        <div className={styles.types_container}>
        {
          pokemon.types.map(({type}, index) => (
            <span key={index} className={`${styles.type} ${styles['type_'+type.name]}`}>{type.name}</span>
          ))
        }
        </div>
      </div>
      <div className={styles.data_container}>
        <div className={styles.data_height}>
          <h4>Height:</h4>
          <p>
            {pokemon.height * 10} cm
          </p>
        </div>
        <div className={styles.data_weight}>
          <h4>Weight:</h4>
          <p>
            {pokemon.weight / 10} kg
          </p>
        </div>
      </div>
    </div>
  )
}