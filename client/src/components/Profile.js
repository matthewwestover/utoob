import React from 'react'
import axios from 'axios'
import { AuthConsumer, } from '../providers/AuthProvider';
import {Segment, Image, Divider, Header, Button, Icon} from "semantic-ui-react";

class Profile extends React.Component {
  state = { comments: [], }

  componentDidMount() {
    const { auth: {user, }} = this.props
    axios.get(`/api/users/${user.id}/comments`)
      .then( res => this.setState({ comments: res.data, }))
  }

  removeComment = (id) => {
    const remove = window.confirm("Are you sure you want to delete this comment?")
    if (remove)
      axios.delete(`/api/users/${this.props.auth.user.id}/comments/${id}`)
        .then( res => {
          const comments = this.state.comments.filter( c => {
            if (c.id !== id)
              return c;
          })
          this.setState({ comments, })
        })
  }

  viewEdit = (id) => {
    this.props.history.push(`/profile/${this.props.auth.user.id}/comment/${id}`)
  }

  render() {
    const { auth: {user, }} = this.props
    const { comments } = this.state;
    return(
      <div>
        <Segment centered raised clearing>
          <Image floated="left" inline src={user.image} size="small" bordered />
          <Header>{user.user_name}</Header>
          {user.email}
        </Segment>
        { comments.map( comment =>
          <Segment raised color="blue ">
            <Header floated="right">
            <Button color="red" onClick={() => this.removeComment(comment.id)} ><Icon name="trash" /> Delete</Button>
            <Button color="blue"
            onClick={() => this.viewEdit(comment.id)}
            ><Icon name="edit" /> Edit</Button>
            </Header>
            <Header.Subheader style={{ paddingTop: "10px" }}>By:{' '}{comment.user_name}</Header.Subheader>
            <Divider />
            {comment.body}
          </Segment>
        )}
      </div>
    )
  }
}

export default class ConnectedProfile extends React.Component {
  render(){
    return(
      <AuthConsumer>
        { auth => <Profile {...this.props} auth={auth} /> }
      </AuthConsumer>
    )
  }
}