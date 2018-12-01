import React from 'react';
import './App.css';
import './WidgetsCard.css'
import { Row, Col} from 'react-bootstrap'
import {FaShoppingBag} from 'react-icons/fa'

const WidgetsCard = (props) => {
    return(
        <div>
            <Row className="rowWidgetsCard">
                <Col className={props.iconClass} md={4}>{props.icon}</Col>
                <Col className="white_block" md={8}> 
                    <p>{props.value}</p>
                    <p className="description">{props.title}</p>
                </Col>
            </Row>
        </div>
    )
}

export default WidgetsCard; 