import React from 'react'
import { AccountNotLoggedIn, AppLoading } from '/client/configs/components'

class AudioTestList extends React.Component {
  displayUser() {
    return (
      <div>
        <h3>Audio Test List</h3>
        <ul>
          <li>Test 1</li>
          <li>Test 2</li>
        </ul>
      </div>
    )
  }
  displayGuest() {
    return (
      <AccountNotLoggedIn />
    )
  }
  displayLoading() {
    return (
      <AppLoading />
    )
  }
  render() {
    const { loggedIn, loggingIn } = this.props
    if ( loggingIn ) { return this.displayLoading() }
    return (
      <div>
      { loggedIn ? this.displayUser() : this.displayGuest() }
      </div>
    )
  }
}

export default AudioTestList
