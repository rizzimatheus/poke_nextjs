import styles from "../styles/About.module.css"
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>About</h1>
      <p>
        Pokedex created using <strong>Next.js</strong> and <strong>PokeAPI</strong>.
      </p>
      <Image src={'/pokedex.webp'} width={513} height={392} alt={"Pokedex"} />
    </div>
  )
}