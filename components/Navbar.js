import Link from "next/link";

import styles from '../styles/Navbar.module.css'
import Image from "next/image";

export default function Navbar() {
  return(
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src={'/pokeball.png'} height={"50px"} width={"50px"} alt={"Pokebola"}></Image>
        <h1>PokeNextJS</h1>
      </div>
      <ul>
        <li>
          <Link href={"/"}><a>Home</a></Link>
        </li>
        <li>
          <Link href={"/about"}><a>About</a></Link>
        </li>
      </ul>
    </nav>
  )
}