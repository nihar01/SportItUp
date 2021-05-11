import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
<<<<<<< HEAD
import "react-datepicker/dist/react-datepicker.css";
import BookingService from "../services/BookingService"
=======
>>>>>>> cd557e14e35a2eb374851c31381d651b64728e0f

export default class DoBooking extends Component {
    
    constructor(props){
        super(props)
        this.state={
            selectedDate:null,
            selectedTime:null,
            selectedSlot:null
            
        }
<<<<<<< HEAD

    }

    makeBooking = (event) => {
        event.preventDefault();
        let booking = {user:{user_id:this.props.location.params.props.uId},venue:{venue_id:this.props.location.params.props.vId} ,slot: this.state.selectedSlot, booking_date: this.state.selectedDate     }
        console.log("hiiiiiiiiiiii");
        console.log(JSON.stringify(booking));
        BookingService.createBooking(booking).then(res => {
            this.props.history.push('/VenueList');    
        });
    }
    cancel(){
        this.props.history.push('/VenueList');
    }
=======
>>>>>>> cd557e14e35a2eb374851c31381d651b64728e0f

    changeDateHandler = (event) => {
        this.setState({selectedDate: event});
        console.log(event);
    }
    changeSlotHandler = (event)=>{
         this.setState({selectedSlot : event.target.value})
        console.log(event)
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
<<<<<<< HEAD
        console.log(this.props.location.params.props)
=======
        console.log(this.props.location.params.props.venuename)
>>>>>>> cd557e14e35a2eb374851c31381d651b64728e0f
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
<<<<<<< HEAD
                                        
                                        <div className = "form-group">
                                            <DatePicker 
                                            selected={this.state.selectedDate}
                                            onChange={date => this.changeDateHandler(date)}
                                            // dateFormat="yyyy-mm-dd"
                                            />
                                        </div>
                                        
                                        <select value={this.state.selectedSlot} onChange={this.changeSlotHandler}> 
                                            {this.props.location.params.props.slots.map(data=>(
                                                <option value={data.slot_id}>{data.start_time} to {data.end_time}</option>
=======
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
>>>>>>> cd557e14e35a2eb374851c31381d651b64728e0f
                                            )

                                            ) 
                                            
                                            }
                                        </select>
<<<<<<< HEAD
                                        
                                        <br/>
                                        <br/>
                                        <button className="btn btn-success" onClick={this.makeBooking}>Book</button>
                                        
=======
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                />
                                        </div>

                                        <button className="btn btn-success" >Book</button>
>>>>>>> cd557e14e35a2eb374851c31381d651b64728e0f
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
