import axios from 'axios';
import React, { Component } from 'react';
import { CardDeck } from 'react-bootstrap';
import VenueService from "../services/VenueService"
import Venueshow from "./Venueshow"

class VenueList extends Component {
    constructor (props){
        super(props)
        this.state={
            vList : []
        }
     

    }
    
    componentDidMount(){
        VenueService.getVenue().then((res) => {
            this.setState({ vList: res.data});
        });
    }


    render() {
        console.log(this.props)
        console.log(this.state.vList)
<<<<<<< HEAD
        const varr = this.state.vList.map(ven => <Venueshow key={ven.venue_id} vId={ven.venue_id} slots={ven.slots} uId={this.props.uId} img_link={ven.img_link} venuename={ven.venueName} venueaddress={ven.venueAddress} costperhour={ven.costPerHour}/>)
=======
        const varr = this.state.vList.map(ven => <Venueshow key={ven.venue_id} slots={ven.slots} uId={this.props.uId} img_link={ven.img_link} venuename={ven.venueName} venueaddress={ven.venueAddress} coatperhour={ven.costPerHour}/>)
>>>>>>> cd557e14e35a2eb374851c31381d651b64728e0f
            
        console.log(varr);
        return(
            //<h1>123</h1>
            <CardDeck>
            {varr}
            </CardDeck>
        );
        
    }
}

export default VenueList;