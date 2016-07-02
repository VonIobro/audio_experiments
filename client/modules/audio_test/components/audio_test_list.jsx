import React from 'react'
import { AccountNotLoggedIn, AppLoading } from '/client/configs/components'
import {
  Accordion,
  PageHeader,
  Panel,
  Row,
} from 'react-bootstrap'

class AudioTestList extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      audiotest1: '',
    }
  }
  displayUser() {
    return (
      <Accordion>
        <Panel header="Test 1" eventKey="1">Content and what not</Panel>
        <Panel header="Test 2" eventKey="2">Content and what not</Panel>
        <Panel header="Test 3" eventKey="3">Content and what not</Panel>
      </Accordion>
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
    if ( loggedIn ) {
      return this.displayUser()
    } else {
      return this.displayGuest()
    }
  }
}

export default AudioTestList
