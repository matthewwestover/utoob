import React from 'react';
import axios from 'axios';
import YouTube from 'react-youtube'
import {Segment, Divider, Header, Image,} from "semantic-ui-react";


class Video extends React.Component {
  state = { video: [], comments: [], }

  componentDidMount() {
    axios.get(`/api/videos/${this.props.match.params.id}`)
    .then( res => {
      this.setState({ video: res.data, })
    })
    // axios.get(`/api/users/${this.props.match.params.id}/my_posts`)
    //   .then( res => this.setState({ posts: res.data, }))
  }

  render() {
    const { video, comments, } = this.state;
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }

    return(
      <div>
        <Segment centered raised clearing>
          <Image src={video.trailer} centered />
          <Header>{video.title}</Header>
          Duration: {video.duration}
          <br />
          Genre: {video.genre}
          <br />
          {video.description}
        </Segment>
        {/* { posts.map( post =>
          <Segment raised color="blue ">
            <Header floated="right">
            </Header>
            <Header>{post.title}</Header>
            <Header.Subheader>By:{' '}{post.first_name}{' '}{post.last_name}</Header.Subheader>
            <Divider />
            {post.body}
          </Segment>
        )}  */}
      </div>
    )
  }
}

export default Video;