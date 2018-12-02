import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Row, Col} from 'react-bootstrap';
import {LineChart,  AreaChart, d3 } from 'react-d3-components';
import {Line} from 'react-chartjs-2';

class PageViews extends Component {
    state = {
        lineChartData: {},
    }

    componentWillMount(){
        this.getLineChartData();
        
    }
    
    getLineChartData(){
        //Ajax calls here
        this.setState({
            lineChartData: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "Site Traffic Overview",
                        data: [883, 475, 883, 3, 99, 819, 725],
                        backgroundColor: 'rgb(255, 99, 132)',
                    }
                ]
            }
        });
        
    }
    render(){
        console.log(this.state);
        const {lineChartData} = this.state
        return(
            
            <div>
             {/* <AreaChart
                axes
                axisLabels={{x: '', y: 'Site Traffic Overview'}}
                data={this.state.data}
                width={1200}
                height={600}
                margin={{top: 10, right: 10, bottom: 50, left: 100}}
                interpolate={'cardinal'}
                /> */}
            {lineChartData ?   <Line
                    data={lineChartData}
                    options={{
                        maintainAspectRatio: false,
                        layout:{
                            padding:{
                                left: 50,
                                right: 50,
                                top: 100,
                                bottom: 0,
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
                    height={500}
                    width={700}
                    />
            : null }
            </div>
        )
    }
}

// const mapStateToProps = ({widgets}) => ({
//     widgets: widgets
//   });
  
//   const mapDispatchToProps = dispatch => ({
//     getWidgets: () => dispatch(fetchWidgets())
//   });

export default PageViews; 