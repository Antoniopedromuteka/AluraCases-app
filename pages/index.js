import Link  from "../src/components/Link"


function Title ({ children, as }){
  const Tag = as ?? 'h1'
  return(
    <>
    <Tag>
      { children }
    </Tag>
    <style jsx>{`
      ${Tag} {
        color: red;
      }

    `}</style>
    </>
  )
}
export default function HomePage(){
  return(
    <div>
      <Title>Alura Cases - Home Page</Title> 
      <Link href="/faq">Ir para o FAQ</Link>
    </div>
  )
}