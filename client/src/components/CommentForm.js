import React from 'react';
import axios from 'axios';
import { Form, TextArea, } from "semantic-ui-react"
import { AuthConsumer } from '../providers/AuthProvider';

class CommentForm extends React.Component {
  state = {
    ctitle: "Title",
    body: '',
    user_name: '',
    user_id: '',
  };

  componentDidMount() {
    this.setState({ user_name: this.props.auth.user.user_name })
    this.setState({ user_id: this.props.auth.user.id })
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, })
  }

  handleSubmit = (e) => {
    const comment = this.state;
    e.preventDefault();
    axios.post(`/api/videos/${this.props.match.params.id}/comments`, comment)
      .then( res => this.props.history.push(`/videos/${this.props.match.params.id}`))
  }

  render() {
    return(
      <div>CommentForm</div>
    )
  }
}

export default class ConnectedCommentForm extends React.Component {
  render(){
    return(
      <AuthConsumer>
        { auth => <CommentForm {...this.props} auth={auth} /> }
      </AuthConsumer>
    )
  }
}