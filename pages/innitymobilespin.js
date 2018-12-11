import Layout from '../components/InnityLayout.js'
import React from 'react'
import ContentPage from './content.js'

export default class InnityMobileSpinPage extends React.Component {
  componentDidMount () {
    // new innity_adZone('a34e1ddbb4d329167f50992ba59fe45a', '67702', {})
  }
  render () {
    return (
      <Layout>
        <h1>Page G</h1>
        <p>
          Mobile Cards_Spin / Standard Platform
        </p>
        <script src='http://network.innity.com/html5/mobile_spin/ad.js'></script>
        <ContentPage />
      </Layout>
    )
  }
}
