import Image from "next/image"
import { HomeContainer, Product } from "../styles/pages/home"
import Shirt1 from '../assets/Shirt-1.png'
import Shirt2 from '../assets/Shirt-2.png'
import Shirt3 from '../assets/Shirt-3.png'


export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={Shirt1} width={520} height={480} alt={""} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={Shirt2} width={520} height={480} alt={""} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
)
}
