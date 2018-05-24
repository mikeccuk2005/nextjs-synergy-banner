// pages/index.js

import Layout from '../components/InnityLayout.js'
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

export default () => (
  <div style={layoutStyle}>
    <h3>Innity Adzone</h3>
    <p>
      Mobile Cards_Spin - Standard Platform : A script on this page.
    </p>
    <div id='div-ad-innity-67702/0'>
      <script dangerouslySetInnerHTML={{ __html: `innity_adZoneAsync.q.push(function (){innity_adZoneAsync.display("a34e1ddbb4d329167f50992ba59fe45a", "67702", {"target": "div-ad-innity-67702/0"});});`}} n/>
    </div>
  </div>
)
