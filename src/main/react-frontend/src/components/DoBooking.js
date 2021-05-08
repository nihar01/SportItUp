import React, { Component } from 'react'
import DatePicker from 'react-datepicker'

export default class DoBooking extends Component {
    
    constructor(props){
        super(props)
        this.state={
            selectedDate:null,
            selectedTime:null,
            selectedSlot:null
            
        }

    }
    cancel(){
        this.props.history.push('/VenueList');
    }

    changeDateHandler = (event) => {
        this.setState({selectedDate: event});
    }
    changeSlotHandler = (event)=>{
        this.setState({selectedSlot : event.target})
    }
    
    render() {
        console.log(this.props.location.params.props.venuename)
        console.log(this.state.selectedSlot)
        console.log(this.state.selectedDate)
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center"> Bookig The {this.props.location.params.props.venuename}</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                />
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                />
                                        </div>
                                        <div className = "form-group">
                                            <DatePicker hjhjhjhjjh
                                            selected={this.state.selectedDate}
                                            onChange={date => this.changeDateHandler(date)}
                                            />
                                        </div>
                                        <select value={this.state.selectedSlot} onChange={this.changeSlotHandler}> 
                                            {this.props.location.params.props.slots.map(data=>(
                                                <option>{data.start_time} to {data.end_time}</option>
                                            )

                                            ) 
                                            
                                            }
                                        </select>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                />
                                        </div>

                                        <button className="btn btn-success" >Book</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}
