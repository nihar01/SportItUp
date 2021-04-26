import React, { Component } from 'react';
import UserService from '../services/UserService'
class UserSignInComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            emailId: '',
            password:'',

        }
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        
        this.validateSignIn = this.validateSignIn.bind(this);
        
    }


    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }
    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    validateSignIn(e)
    {
        e.preventDefault();

        let user = {
            emailId: this.state.emailId,
            password: this.state.password
        }
        console.log("HandleClick")
        console.log(user);
        UserService.loginUser(user).then(res => {
                console.log("response",res);
                console.log("Signin Component", res.data);
                console.log("Publisher", res.data.adminFlag);
                console.log("Request status",res.status)
            //   if(res.status===200)
              {
                if(res.data.adminFlag){
                    this.props.history.push('/AdminDashboard');
                }
                else{
                    this.props.history.push('/welcome');
                }
                console.log("LoggedIn");
            }
        })
            .catch(err =>{
                console.log(err.response.data);
                alert("Username or Password doesn't Match!");
                // window.location.reload(true);
                });
        //alert("Login")
    }

    render() {
        return (
            <div>
                
                <div className = "container" style={{ marginTop:"50px" }}>
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    <h2 className="text-center" style={{ marginTop:"15px" }}>Sign In</h2>
                                }
                                <div className = "card-body">
                                    <form>
                                        
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" type="email" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="Password" name="password" type="password"  className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>
                                        <br></br>

                                        <button className="btn btn-success btn-block" type="submit" onClick={this.validateSignIn}>Sign In</button>
                                        
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>

            </div>
        );
    }
}

export default UserSignInComponent;