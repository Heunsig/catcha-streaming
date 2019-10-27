import React from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'

class GoogleAuth extends React.Component {
  // state = { 
  //   // auth: null,
  //   isSignedIn: null
  // }

  componentDidMount () {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '955405637388-fg1ghoqt2j3j8m48lg8nbi3dp6fesv15.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
        // this.setState({ isSignedIn: this.auth.isSignedIn.get() })
        this.onAuthChange(this.auth.isSignedIn.get())
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }

  onSignInClick = () => {
    this.auth.signIn()
  }

  onSignOutClick = () => {
    this.auth.signOut()
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId())
    } else {
      this.props.signOut()
    }
  }

  renderAuthButton () {
    // if (this.state.isSignedIn === null) {
    if (this.props.isSignedIn === null) {
      return null
    // } else if (this.state.isSignedIn) {
    } else if (this.props.isSignedIn) {
      return (
        <a onClick={this.onSignOutClick} className="item">
          <i className="google icon"/>
          Sign Out
        </a>
      )
    } else {
      return (
        <a onClick={this.onSignInClick} className="item">
          <i className="google icon"/>
          Sign In with Google
        </a>
      )
    }
  }

  render () {
    return <React.Fragment>{this.renderAuthButton()}</React.Fragment>
  }
}
const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)