import React from 'react';
import './App.css';
import './MessageCard.css'
import { Row, Col} from 'react-bootstrap'

const MessageCard = (props) => {
    return(
        <div className="message_box">
           <Row>
               <Col md={2} className="img_profile"> {/*mdPush={10}*/}
                    <img src="http://dev.4all.com:3050/imgs/profile1.jpg"/>
               </Col>
               <Col md={10}>{/*mdPull={1}*/}
                    <div className="message_name">
                        <strong>John Doe</strong>
                        <p className="message_time">32 mins ago</p>
                    </div> <br/>
                    <div className="message_body">
                    Laborum sit veniam adipisicing cillum laborum officia officia.
                    </div>
               </Col>
           </Row>
        </div>
    )
}

export default MessageCard; 