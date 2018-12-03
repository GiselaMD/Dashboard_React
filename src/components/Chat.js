import React, { Component } from 'react';
import './App.css';
import './Chat.css';
import { Row, Col, Button} from 'react-bootstrap'
import { connect } from 'react-redux';
import { MdChatBubbleOutline } from 'react-icons/md'
import MessageCard from './MessageCard';
import { fetchMessages } from '../actions/messagesActions';

class Chat extends Component {
    componentDidMount(){
        this.props.getMessages();
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
                            <MessageCard key={message.userName} message={message}/>
                        )
                    })
                    : null}
                    <div className="chat_box_input">
                        <form>
                                <input placeholder={'Type your message...'} />
                                <Button type="submit">Send</Button>
                        </form>
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
    getMessages: () => dispatch(fetchMessages())
  });

export default connect(mapStateToProps, mapDispatchToProps)(Chat); 