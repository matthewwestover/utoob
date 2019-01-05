import React from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';
import {Segment, Divider, Header, Button, Icon, } from "semantic-ui-react";
import {Link} from 'react-router-dom';
import { AuthConsumer, } from '../providers/AuthProvider';

class Video extends React.Component {
  state = { video: [], comments: [], }

  componentDidMount() {
    axios.get(`/api/videos/${this.props.match.params.id}`)
    .then( res => {
      this.setState({ video: res.data, })
    })
    axios.get(`/api/videos/${this.props.match.params.id}/comments`)
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

  renderButtons = (id) => (
    <div>
    <Button 
    color="red" 
    icon 
    floated="right"
    onClick={() => this.removeComment(id)}
    id='delete'
    name='Delete Comment'
    ><Icon name="trash" />Delete</Button>
    <Button 
    color="blue" 
    icon 
    floated="right"
    onClick={() => this.viewEdit(id)}
    id='editcomment'
    name='Edit Comment'
    ><Icon name="edit" />Edit</Button>
    </div>
  )


  render() {
    const { video, comments, } = this.state;
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return(
      <div>
        <Segment centered raised clearing>
        <Segment padding="20px" textAlign="center">
          <YouTube
          videoId="2g811Eo7K8U"
          opts={opts}
          onReady={this.onReady}
          />
        </Segment>
          <Button 
          color="green" 
          icon 
          floated="right"
          as={Link}
          to={`/videos/${this.props.match.params.id}/comment`}
          id='newcomment'
          name='New Comment'
          ><Icon name="add" />Add Comment</Button>
          <Header>{video.title}</Header>
          Duration: {video.duration}
          <br />
          Genre: {video.genre}
          <br />
          {video.description}
        </Segment>
        { comments.map( comment =>
          <Segment raised color="blue ">
          { this.props.auth.user.id === comment.user_id ? this.renderButtons(comment.id) : null}
          <Header.Subheader>By:{comment.user_name}</Header.Subheader>
            <Divider />
            {comment.body}
          </Segment>
        )} 
      </div>
    )
  }
  onReady(event) {
    event.target.pauseVideo();
  }
}

export default class ConnectedVideo extends React.Component {
  render(){
    return(
      <AuthConsumer>
        { auth => <Video {...this.props} auth={auth} /> }
      </AuthConsumer>
    )
  }
}