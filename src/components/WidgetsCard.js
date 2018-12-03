import React from 'react';
import './App.css';
import './WidgetsCard.css'
import { Row, Col} from 'react-bootstrap'
import {FaShoppingBag} from 'react-icons/fa'

const WidgetsCard = (props) => {
    return(
        <div>
            <Row className="rowWidgetsCard">
                <Col xs={12} sm={12} md={4} lg={4} className={props.iconClass}>{props.icon}</Col>
                <Col xs={12} sm={12} md={8} lg={8} className="white_block"> 
                    <p className="widget_value">{props.value}</p>
                    <p className="widget_description">{props.title}</p>
                </Col>
            </Row>
        </div>
    )
}

export default WidgetsCard; 