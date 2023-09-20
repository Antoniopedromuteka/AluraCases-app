import { useEffect, useState } from "react"
import Link from "../src/components/Link"

export async function getStaticProps () {
  const FAQ_API_URL = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json"
  const data = await fetch(FAQ_API_URL)
  .then(response => response.json())
  .then(response => response)
  return{
    props:{
      faq: data
    }
  }
}

export default function FAQPage(props){
  // const [faq, setFaq] = useState([])
  // useEffect(() => {
 
  // }, [])
  return(
    <div>
      <h1>Alura Cases - Pagina de Perguntas FAQ</h1> 
      <Link href="/">Ir para a Home</Link>
      <ul>
        {props.faq?.map(({answer, question}, idx) => (
          <li>
            <article>
              <h2 key={idx}>{question}</h2>
              <p>{answer}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}