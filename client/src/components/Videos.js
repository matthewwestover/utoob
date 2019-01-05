import React from 'react'
import axios from 'axios'

class Videos extends React.Component {
  state = { videos: [], };

  componentDidMount() {
    axios.get('/api/videos')
      .then( res => {
        this.setState({ videos: res.data, })
      })
  }

  render(){
    return(
      <div>Videos</div>
    )
  }
}

export default Videos;