import Link from 'next/link'

const Nav = () => {
  console.log("run NEV")
  return (
    <nav>
      <Link href="/">
        <a>Index</a>
      </Link>
      <Link href="/ssg">
        <a>SSG</a>
      </Link>
      <Link href="/ssr">
        <a>SSR</a>
      </Link>
      <Link href="/login">
        <a>login</a>
      </Link>
      <style jsx>
        {`
          a {
            margin-right: 25px;
          }
        `}
      </style>
    </nav>
  )
}

export default Nav
