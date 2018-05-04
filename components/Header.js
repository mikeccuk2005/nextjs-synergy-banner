import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <ul>
      <Link href='/'>
      <a style={linkStyle}>
        <li> Home </li>
      </a>
      </Link>
      <Link href='/second'>
      <a style={linkStyle}>
        <li> Clientside Routing to Page Second </li>
      </a>
      </Link>
      <a href='/second' style={linkStyle}>
        <li> Serverside Routing to Page Second </li>
      </a>
    </ul>
  </div>
)

export default Header
