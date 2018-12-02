import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchWidgets } from '../actions/widgetsActions';
import WidgetsCard from './WidgetsCard';
import { Row, Col} from 'react-bootstrap'
import {FaShoppingBag, FaComment, FaUser, FaColumns} from 'react-icons/fa'

class WidgetsBlock extends Component {
    componentDidMount(){
        this.props.getWidgets()
    }
    pageViewsFormatted(num) {
        if (num > 999) {
            return (num / 1000).toFixed(1) + 'k';
        }
        if (num >= 999999) {
        return (num / 1000000).toFixed(1) + 'M';
        }
        if (num >= 999999999) {
           return (num / 1000000000).toFixed(1) + 'G';
        }
        return num;
    }
    render(){
        const {widgets} = this.props
        console.log(widgets)
        
        return(
            <div>
                <Row className="rowWidgetsBlock">
                    <Col sm={12} md={6} lg={3}><WidgetsCard iconClass="icon_blue" icon={<FaShoppingBag/>} title="NewOrders" value={widgets.newOrders}/></Col>
                    <Col sm={12} md={6} lg={3}><WidgetsCard iconClass="icon_orange" icon={<FaComment/>} title="Comments" value={widgets.comments}/></Col>
                    <Col sm={12} md={6} lg={3}><WidgetsCard iconClass="icon_green" icon={<FaUser/>} title="NewUsers" value={widgets.newUsers}/></Col>
                    <Col sm={12} md={6} lg={3}><WidgetsCard iconClass="icon_red" icon={<FaColumns/>} title="PageViews" value={this.pageViewsFormatted(widgets.pageViews)}/></Col>
                </Row>
                
            </div>
        )
    }
}

const mapStateToProps = ({widgets}) => ({
    widgets: widgets
  });
  
  const mapDispatchToProps = dispatch => ({
    getWidgets: () => dispatch(fetchWidgets())
  });

export default connect(mapStateToProps, mapDispatchToProps)(WidgetsBlock); 