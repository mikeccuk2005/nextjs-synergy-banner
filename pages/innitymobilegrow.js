import Layout from '../components/InnityLayout.js'
import ContentPage from './content.js'
export default () => (
  <Layout>
    <h1>Page D</h1>
    <p>
      This is the Mobile Grow page
    </p>
    <script dangerouslySetInnerHTML={{__html: ` innity_domain = 'http://network.innity.com/testscript/mobile/grow/';`}} />
    <script src='http://network.innity.com/testscript/mobile/grow/scripts/proxy_grow.js'></script>
    <ContentPage />
  </Layout>
)
