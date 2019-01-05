import React from 'react';
import { AuthConsumer } from '../providers/AuthProvider';
import { Menu, Button, Icon } from 'semantic-ui-react';
import { Link, withRouter, } from 'react-router-dom';

class Navbar extends React.Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, history, } = this.props;

    if (user) {
      return(
        <Menu.Menu position='right'>
          {/* <Menu.Item
              as={Link}
              to='/newpost'
              id='newpost'
              name='New Post'
            ><Button color="green" style={{marginBottom: "5px"}}><Icon name="plus" />New Post</Button>
          </Menu.Item>  */}
          {/* <Menu.Item 
            as={Link}
            to='/profile'
            id='profile'
            name="Profile"
            active={location.pathname === '/profile'}
          ><Icon name="user circle" /> Profile</Menu.Item> */}
          <Menu.Item 
            name="Logout"
            onClick={ () => handleLogout(history) }
          ><Icon name="arrow alternate circle right outline" />Logout</Menu.Item>
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Menu.Item 
            as={Link}
            to='/login'
            id='login'
            name="Login"
            active={location.pathname === '/login'}
          ><Icon name="arrow alternate circle left outline" />Login</Menu.Item>
          <Menu.Item 
            as={Link}
            to='/register'
            id='register'
            name="Register"
            active={location.pathname === '/register'}
          ><Icon name="registered" />Register</Menu.Item>
        </Menu.Menu>
      )
    }
  }

  userNavItems = () => {
    const { auth: { user, handleLogout, }, location, history, } = this.props;

    if (user) {
      return(
        <Menu.Menu>
          <Menu.Item 
            as={Link}
            to='/videos'
            id='videos'
            name="Users"
            active={location.pathname === '/videos'}
          ><Icon name="video" /> Videos </Menu.Item>
          {/* <Menu.Item 
            as={Link}
            to='/postfeed'
            id='postfeed'
            name="All Posts"
            active={location.pathname === '/postfeed'}
          ><Icon name='feed' /> Feed </Menu.Item> */}
        </Menu.Menu>
      )
    } else {
      return(
        null
      )
    }
  }

  render() {
    return (
      <div>
        <Menu pointing secondary inverted color="blue" icon="labeled">
          <Menu.Item 
            as={Link}
            to='/'
            id='home'
            icon
            active={this.props.location.pathname === '/'}
          ><Icon name="home" />Home</Menu.Item>
          { this.userNavItems() }
          { this.rightNavItems() }
        </Menu>
      </div>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);