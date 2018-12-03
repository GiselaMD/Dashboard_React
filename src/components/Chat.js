import React, { Component } from 'react';
import './App.css';
import './Chat.css';
import { Row, Col, Button} from 'react-bootstrap'
import { connect } from 'react-redux';
import { MdChatBubbleOutline } from 'react-icons/md'
import MessageCard from './MessageCard';
import { fetchMessages, createMessage } from '../actions/messagesActions';

class Chat extends Component {
    state = {
        message: '',
        notValid: false,
    }
    componentDidMount(){
        this.props.getMessages();
    }

    addNewMessage = e => {
        e.preventDefault();
        console.log("add new message button submited")
        const { message } = this.state
    
        if (message) {
          const newMessage = {
            userName: 'Eu',
            message,
            displayPortraitLeft: true,
            time: '1 min ago',
          } 
          this.props.addMessage(newMessage)
        } else {
          this.setState({
            notValid: true
          })
        }
      }
    
    handleMessageChange(e) {
    this.setState({ message: e.target.value })
    console.log(this.state.message)
    }

    render(){
        const {messages} = this.props
        return(
            <div>
                <Row>
                    <Col md={8}>
                    <div className="chat_box_title">
                      <MdChatBubbleOutline className="chat_icon"/>
                      <p className="title">Chat</p>
                    </div>
                    {messages ? messages.map((message) => {
                        return(
                            <MessageCard key={message.index} message={message}/>
                        )
                    })
                    : null}
                    <div className="chat_box_input">
                        <form onSubmit={this.addNewMessage}>
                                <input 
                                    name="message" 
                                    placeholder={'Type your message...'} 
                                    onChange={(e) => this.handleMessageChange(e)}
                                    value={this.state.message}/>
                                <Button type="submit">Send</Button>
                        </form>
                    </div>
                    <div>
                    {this.state.notValid && (
                        <h3>Please enter all values...</h3> 
                    )}
                    </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = ({messages}) => ({
    messages: messages
  });
  
  const mapDispatchToProps = dispatch => ({
    getMessages: () => dispatch(fetchMessages()),
    addMessage: (newMessage) => dispatch(createMessage(newMessage))
  });

export default connect(mapStateToProps, mapDispatchToProps)(Chat); 