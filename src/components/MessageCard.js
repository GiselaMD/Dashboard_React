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
                <Col xs={6} sm={8} md={8} lg={10}>
                    <div className="message_name">
                        <strong>{message.userName}</strong>
                        <p className="message_time">{message.time}</p>
                    </div> <br/>
                    <div className="message_body">
                    {message.message}
                    </div>
                </Col>
                <Col xs={2} sm={2} md={2} className="img_profile">
                    <img src={message.portrait}/>
                </Col>            
            </Row>
        : 
        <Row>
            <Col xs={2} sm={2} md={2} className="img_profile"> 
                <img src={message.portrait}/>
            </Col>
            <Col xs={6} sm={8} md={8} lg={10}>
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