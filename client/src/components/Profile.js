import React from 'react'
import axios from 'axios'
import { AuthConsumer, } from '../providers/AuthProvider';
import {Segment, Image, Divider, Header, Button} from "semantic-ui-react";

class Profile extends React.Component {
  // state = { posts: [], }

  // componentDidMount() {
  //   const { auth: {user, }} = this.props
  //   axios.get(`/api/users/${user.id}/my_posts`)
  //     .then( res => this.setState({ posts: res.data, }))
  // }

  // removePost = (id) => {
  //   const remove = window.confirm("Are you sure you want to delete this post?")
  //   if (remove)
  //     axios.delete(`/api/users/${this.props.auth.user.id}/posts/${id}`)
  //       .then( res => {
  //         const posts = this.state.posts.filter( p => {
  //           if (p.id !== id)
  //             return p;
  //         })
  //         this.setState({ posts, })
  //       })
  // }

  render() {
    const { auth: {user, }} = this.props
    // const { posts } = this.state;
    return(
      <div>
        <Segment centered raised clearing>
          <Image floated="left" inline src={user.image} size="small" bordered />
          <Header>{user.user_name}</Header>
          {user.email}
        </Segment>
        {/* { posts.map( post =>
          <Segment raised color="blue ">
            <Header floated="right">
            <Button color="red" onClick={() => this.removePost(post.id)}>Delete</Button>
            </Header>
            <Header>{post.title}</Header>
            <Header.Subheader>By:{' '}{post.first_name}{' '}{post.last_name}</Header.Subheader>
            <Divider />
            {post.body}
          </Segment>
        )} */}
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