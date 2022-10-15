import styles from '../styles/Home.module.css'
import Card from "../components/Card";

export async function getStaticProps() {
  const maxPokemons = 151
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${maxPokemons}`)
  const data = await res.json()

  data.results.forEach((item, index) => {
    item.id = index + 1;
  })

  return {
    props: {
      pokemons: data.results
    },
  }
}

export default function Home({ pokemons }) {
  return (
    <>
      <h1 className={styles.title}><span>Poke</span>NextJS</h1>
      <div className={styles.card_container}>
        {
          pokemons.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon}/>
          ))
        }
      </div>
    </>
  )
}
