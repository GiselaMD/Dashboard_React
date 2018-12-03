import React, { Component } from 'react';
import './App.css';
import './PageViews.css';
import { connect } from 'react-redux';
import {Line} from 'react-chartjs-2';
import { fetchPageViews } from '../actions/pageViewsActions';

class PageViews extends Component {
    state = {
        lineChartData: {},
    }

    componentDidMount(){
        //pageViews.map((year) => year.month) ===> ["January", "February", "March", "April", "May", "June", "July"]
        //pageViews.map((each) => each.views) ===> [674, 651, 93, 624, 805, 619, 390]
        this.props.getPageViews().then(
            () => this.setState({
                lineChartData: {
                    labels: this.props.pageViews.map((year) => year.month),
                    datasets: [
                        {
                            label: "Views",
                            data: this.props.pageViews.map((each) => each.views),
                            backgroundColor: 'rgb(180, 175, 255)',
                        }
                    ]
                }
            })
        )
    }

    render(){
        console.log(this.state);
        console.log("pageviews: ", this.props.pageViews);
        const {lineChartData} = this.state
        return(
            <div className="lineChart_box">
            {lineChartData ?   <Line
                    data={lineChartData}
                    options={{
                        maintainAspectRatio: false,
                        layout:{
                            padding:{
                                left: 20,
                                right: 40,
                                top: 40,
                                bottom: 40,
                            }
                        },
                        title:{
                            display: true,
                            text: 'Site Traffic Overview',
                            fontSize: 20,
                            position: 'left'
                        },
                        legend: {
                            display: false,
                            position: 'right',
                        }
                    }}
                    height={600}
                    width={window.innerWidth}
                    />
            : null }
            </div>
        )
    }
}

const mapStateToProps = ({pageViews}) => ({
    pageViews: pageViews
  });
  
  const mapDispatchToProps = dispatch => ({
    getPageViews: () => dispatch(fetchPageViews())
  });

export default connect(mapStateToProps, mapDispatchToProps)(PageViews); 