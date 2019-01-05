import React from 'react';
import { AuthConsumer } from '../providers/AuthProvider';
import axios from 'axios';
import { Form, TextArea, Header,} from 'semantic-ui-react';

class EditForm extends React.Component {
  state = { body: '', }

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.user_id}/comments/${this.props.match.params.id}`)
      .then( res =>{
        this.setState({ body: res.data.body, ...res.data, })
      })
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, })
  }

  handleSubmit = (e) => {
    const comment = this.state;
    e.preventDefault();
    axios.put(`/api/videos/${comment.video_id}/comments/${comment.id}`, comment)
      .then( res => this.props.history.push(`/videos/${comment.video_id}`))
  }

  render() {
    const { body } = this.state;
    return(
      <div>
        <Header as ="h2">Edit Comment</Header>
        <Form onSubmit={this.handleSubmit}>
        <Form.Input 
          name="body"
          as={TextArea}
          placeholder="Post Body"
          required
          value={body}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <Form.Button color="green">
        Submit
        </Form.Button>
        </Form>
      </div>
    )
  }
}


export default class ConnectedEditForm extends React.Component {
  render(){
    return(
      <AuthConsumer>
        { auth => <EditForm {...this.props} auth={auth} /> }
      </AuthConsumer>
    )
  }
}