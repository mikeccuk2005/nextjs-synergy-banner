import Layout from '../components/InnityLayout.js'
import ContentPage from './content.js'
export default () => (
  <Layout>
    <h1>Page H</h1>
    <p>
      This is the Mobile Scroll page
    </p>
    <ContentPage />
    <script id='innity_mobile_scroll' src='http://network.innity.com/html5/mobile_scroll/ad.js' />
  </Layout>
)
