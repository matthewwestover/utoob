import React from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';
import {Segment, Divider, Header, Image, Button, Icon, } from "semantic-ui-react";
import {Link} from 'react-router-dom';

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
          <Image src={video.trailer} centered />
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

export default Video;