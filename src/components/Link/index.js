import NextLink  from "next/link"

export default function Link({href, children, ...props}){
  return(
    <NextLink href={href}>
      <span {...props}>{children}</span>
    </NextLink>
  )
}