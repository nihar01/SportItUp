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

        const varr = this.state.vList.map(ven => <Venueshow key={ven.venue_id} img_link={ven.img_link} venuename={ven.venueName} venueaddress={ven.venueAddress} coatperhour={ven.costPerHour}/>)
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