import React from 'react';
import './App.css';
import './MessageCard.css'
import { Row, Col} from 'react-bootstrap'

const MessageCard = (props) => {
    const {message} = props
    return(
        <div className="message_box">
            {message.displayPortraitLeft ? 
            <Row>
                <Col md={2} className="img_profile"> 
                    <img src={message.portrait}/>
                </Col>
                <Col md={10}>
                    <div className="message_name">
                        <strong>{message.userName}</strong>
                        <p className="message_time">{message.time}</p>
                    </div> <br/>
                    <div className="message_body">
                    {message.message}
                    </div>
                </Col>
            </Row>
        : 
        <Row>
            <Col md={2} mdPush={11} className="img_profile">
                 <img src={message.portrait}/>
            </Col>
            <Col md={10} mdPull={1}>
                 <div className="message_name">
                     <strong>{message.userName}</strong>
                     <p className="message_time">{message.time}</p>
                 </div> <br/>
                 <div className="message_body">
                 {message.message}
                 </div>
            </Col>
        </Row>
        }
        </div>
    )
}

export default MessageCard; 