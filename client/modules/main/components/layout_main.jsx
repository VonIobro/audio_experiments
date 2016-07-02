import React from 'react'
import {
  NavbarMain,
  Footer,
  AppVerifiedMsg,
} from '/client/configs/components'

class LayoutMain extends React.Component {

  render() {

    const { content = () => null, emailVerified, loggedIn } = this.props

    return (
      <div>
        <NavbarMain />
        <AppVerifiedMsg loggedIn={ loggedIn } emailVerified={ emailVerified }/>
        { content() }
        <hr />
        <Footer />
      </div>
    )
  }
}

export default LayoutMain
