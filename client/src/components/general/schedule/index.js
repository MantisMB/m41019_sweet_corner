
import React, { Component } from 'react';
import './schedule.scss';
import axios from 'axios'

class Schedule extends Component {
  constructor(props){
    super(props)

    this.state = {
      scheduleData :[] 

    }
  }

  componentDidMount = ()=>{
  axios.get('http://localhost:3001/data/schedule.json')
    .then( (response) =>{
      this.setState({
        scheduleData:response.data.schedule
      }) 
    })
    .catch( (error) =>{
      console.log(error);
    });
  }


  render() { 
    const {scheduleData} = this.state;
    const day = scheduleData.map(v=>(
        <div key={v.pid} className="w-100 m-2 inline"> 
            <div className='col-md-6 widthday center'>{v.day} </div>
            <div className='col-md-6 w-100 widthday float-right center'>{v.open} - {v.close}</div>
        </div>
    ))
    return ( 
    <>
      <div className='row'> {day}
      </div>
     </>
     );
  }
}
 
export default Schedule;