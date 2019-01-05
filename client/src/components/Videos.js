import React from 'react'
import axios from 'axios'
import { Card, Button, Icon, Image, Divider } from 'semantic-ui-react';

class Videos extends React.Component {
  state = { videos: [], };

  componentDidMount() {
    axios.get('/api/videos')
      .then( res => {
        this.setState({ videos: res.data, })
      })
  }

  viewVideo = (id) => {
    this.props.history.push(`/videos/${id}`)
  }

  render(){
    const { videos } = this.state;
    return(
      <div>
        <Card.Group centered itemsPerRow={3} centered>
          { videos.map( video =>
            <Card key={video.id} raised>
              <Card.Content textAlign="center">
                <Image src={video.trailer} />
                <Divider />
                <Button
                icon color="green" f
                fluid
                onClick={() => this.viewVideo(video.id)}>
                <Icon name="eye" />View Video
                </Button>
                <Divider />
                <Card.Header>
                  {video.title}
                </Card.Header>
                <Card.Meta>
                  Duration: {video.duration}
                </Card.Meta>
                  {video.description}
              </Card.Content>
            </Card>
            )}
        </Card.Group>
      </div>
    )
  }
}

export default Videos;