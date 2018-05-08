import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <ul>
      <Link href='/innity'>
      <a style={linkStyle}>
        <li> Home Innity </li>
      </a>
      </Link>
      <Link href='/innitymobilecard'>
      <a style={linkStyle}>
        <li> Clientside Routing to Page B </li>
      </a>
      </Link>
      <a href='/innitymobilecard' style={linkStyle}>
        <li> Serverside Routing to Page B </li>
      </a>
      <a href='/innitymobileslider' style={linkStyle}>
        <li> Mobile Slider to Page C </li>
      </a>
      <a href='/innitymobilegrow' style={linkStyle}>
        <li> Mobile Grow to Page D </li>
      </a>
      <a href='/innitymobileunderlay' style={linkStyle}>
        <li> Mobile Underlay to Page E </li>
      </a>
      <a href='/innitymobilecude' style={linkStyle}>
        <li> Mobile Cude to Page F </li>
      </a>
      <a href='/innitymobilespin' style={linkStyle}>
        <li> Mobile Spin to Page G </li>
      </a>
      <a href='/innitymobilescroll' style={linkStyle}>
        <li> Mobile Scroll to Page H </li>
      </a>
    </ul>
  </div>
)

export default Header
