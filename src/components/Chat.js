import React, { Component } from 'react';
import './App.css';
import './Chat.css';
import { Row, Col, Button} from 'react-bootstrap'
import { connect } from 'react-redux';
import { MdChatBubbleOutline } from 'react-icons/md'
import MessageCard from './MessageCard';

class Chat extends Component {
    state = {
      
    }

    componentDidMount(){
    }

    render(){
        return(
            <div>
                <Row>
                    <Col md={8}>
                    <div className="chat_box_title">
                      <MdChatBubbleOutline className="chat_icon"/>
                      <p className="title">Chat</p>
                    </div>
                    <MessageCard/>
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

// const mapStateToProps = ({pageViews}) => ({
//     pageViews: pageViews
//   });
  
//   const mapDispatchToProps = dispatch => ({
//     getPageViews: () => dispatch(fetchPageViews())
//   });

export default Chat; 