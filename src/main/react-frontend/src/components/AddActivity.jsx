import React, { Component } from 'react';
import ActivityService from '../services/ActivityService'
class AddActivity extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            sportName: "",
            activityDate: "",   //can add venue aswell
            activityTime: "",
            numberOfPlayers: "",
            chargesPerPerson: ""

        }
        // this.changeSportNameHandler = this.changeSportNameHandler.bind(this);
        // this.changeDateHandler = this.changeDateHandler.bind(this);
        // this.changeTimeHandler = this.changeTimeHandler.bind(this);
        // this.changeNoOfPlayersHandler = this.changeNoOfPlayersHandler.bind(this);
        // this.changeChargesPerPerson=this.changeChargesPerPerson.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }
    // step 3
    // componentDidMount(){

    //     // step 4
    //     if(this.state.id === '_add'){
    //         return
    //     }else{
    //         UserService.getUserById(this.state.id).then( (res) =>{
    //             let user = res.data;
    //             this.setState({firstName: user.firstName,
    //                 lastName: user.lastName,
    //                 emailId : user.emailId,
    //                 contactNumber:user.contactNumber,
    //                 password: user.password,
    //                 isAdminFlag:user.isAdminFlag

    //             });
    //         });
    //     }        
    // }
    cancel(){
        this.props.history.push('/');
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let activity = {sportName: this.state.sportName, date: this.state.activityDate, time: this.state.activityTime,
            numberOfPlayers:this.state.numberOfPlayers, chargesPerPerson :this.state.chargesPerPerson};
        console.log('activity => ' + JSON.stringify(activity));

        // step 5is_admin_flag
        // if(this.state.id === '_add'){
            ActivityService.createActivity(activity).then((res) =>{
                console.log("activity id",res)
                
                this.props.history.push({pathname:'/ActivityList'});
            });
        // }else{
        //     UserService.updateUser(user, this.state.id).then( res => {
        //         this.props.history.push('/users');
        //     });
            }
    
    
    //     changeSportNameHandler= (event) => {
    //     this.setState({sportName: event.target.value});
    // }

    // changeDateHandler= (event) => {
    //     this.setState({date: event.target.value});
    // }

    // changeTimeHandler= (event) => {
    //     this.setState({time: event.target.value});
        
    // }
    // changeNoOfPlayersHandler= (event) => {
    //     this.setState({noOfPlayers: event.target.value});
    // }

    // changeChargesPerPerson= (event) => {
    //     this.setState({chargerPerPerson: event.target.value});
    // }





    getTitle(){
        // if(this.state.id === '_add'){
        //     return <h3 className="text-center">Add User</h3>
        // }else{
            return <h2 className="text-center" style={{ marginTop:"15px" }}>Create new Activity</h2>
        // }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3" style={{borderRadius:"25px",padding :"20px"
                                }}>
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body" >
                                    <form >
                                        <div className = "form-group" style={{borderRadius:"25px"}}>
                                            <label> Sport Name: </label>
                                            <input 
                                            placeholder="Sport Name" 
                                            name="sportName" className="form-control" 
                                            style={{borderRadius:"15px"}}
                                            value={this.state.sportName} 
                                            onChange={this.handleChange}/>

                                        </div>
                                        <div className = "form-group">
                                            <label> Date :</label>
                                            <input 
                                            placeholder="Date"
                                            name="activityDate" 
                                            type="date" 
                                            
                                            className="form-control" 
                                            value={this.state.activityDate} 
                                            onChange={this.handleChange} style={{borderRadius:"25px"}}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Time:</label>
                                            <input 
                                            placeholder="Time" 
                                            name="activityTime" type="time" 
                                            className="form-control" 
                                            value={this.state.activityTime} 
                                            onChange={this.handleChange} 
                                            style={{borderRadius:"25px"}}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Number Of Players </label>
                                            <input 
                                            placeholder="Number of Players"   
                                            className="form-control"  
                                            name="numberOfPlayers"
                                            type="number"
                                            value={this.state.numberOfPlayers} 
                                            onChange={this.handleChange} 
                                            style={{borderRadius:"25px"}}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Charger per person: </label>
                                            <input 
                                            placeholder="Charges per person"    
                                            className="form-control" 
                                            type="number"
                                            name="chargesPerPerson"
                                            value={this.state.chargesPerPerson} 
                                            onChange={this.handleChange} 
                                            style={{borderRadius:"25px"}}/>
                                        </div>
                                   

                                        <button className="btn btn-success" type="submit" onClick={this.handleSubmit}>Create Activity</button>
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

export default AddActivity;