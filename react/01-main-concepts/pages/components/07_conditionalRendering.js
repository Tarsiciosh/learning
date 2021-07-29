import React from 'react'
//-------- Conditional Rendering
function UserGreeting(props) {
  return <h1>Welcome back</h1>
}

function GuestGreeting(props) {
  return <h1>Please sing in.</h1>
}

function Greeting(props){
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting/>;
  }
  return <GuestGreeting/>
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  )
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  )
}

export default class LoginControl extends React.Component {
  constructor(props){
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render(){
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn){
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    )
  }
}

//----- Logical && Operator
function Mailbox(props){
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1> Hello </h1>
      {unreadMessages.length > 0 && 
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  )
}

//-------- Conditional Operator
function Test (props){
  const isLoggedIn = props.isLoggedIn;
  return (
    <div>
      Thes user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in. 
    </div>
  )
}