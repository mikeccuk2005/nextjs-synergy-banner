import Layout from '../components/InnityLayout.js'

export default () => (
  <Layout>
    <h1>Page G</h1>
    <p>
      Mobile Cards_Spin / Standard Platform
    </p>
    {/* <script src='http://network.innity.com/html5/mobile_spin/ad.js'></script> */}
    <script dangerouslySetInnerHTML={{ __html: `new innity_adZone("a34e1ddbb4d329167f50992ba59fe45a", "67702", {});`}} />
  </Layout>
)
