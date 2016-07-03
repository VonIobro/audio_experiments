import React from 'react'
import { AccountNotLoggedIn, AppLoading } from '/client/configs/components'
import {
  ListGroup,
  PageHeader,
  PanelGroup,
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
      <PanelGroup>
        <Panel header="MediaRecorder">
          <ul>
            <li>Audio recording in Firefox (?) and Chrome 49</li>
            <li>Can only be used from HTTPS or localhost</li>
          </ul>
        </Panel>
        <Panel header="Test 2" >Content and what not</Panel>
      </PanelGroup>
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
