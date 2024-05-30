import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>
      </ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aspernatur repellendus exercitationem, facilis magnam id minima eveniet provident sint, cum dolorum aperiam. Voluptatibus similique facilis modi consectetur, reprehenderit placeat recusandae?</p>
        <button>
          comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}