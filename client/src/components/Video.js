import React from 'react';
import axios from 'axios';
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
    return(
      <div>
        <Segment centered raised clearing>
          <Image src={video.trailer} centered />
          <Button 
          color="green" 
          icon 
          floated="right"
          as={Link}
          as={Link}
          to='/video/:id/comment'
          id='newcomment'
          name='New Commit'
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
}

export default Video;