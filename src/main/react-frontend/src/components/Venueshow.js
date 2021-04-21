import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import {Button , Card} from "react-bootstrap"

function Venueshow(props){
console.log(props);
    const {url} = props.img_link;
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="Top" src={props.img_link} />
        <Card.Body>
            <Card.Title>{props.venuename}</Card.Title>
            <Card.Text>
                {props.venueaddress}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        // <div>
        //     <h2>55</h2>
        //     <img src = {props.img_link}/>
        //     <h2>{props.venuename}</h2>
        //     <p>Address : {props.venueaddress}</p>
        //     <p>{props.coatperhour}</p> 

        // </div>    
    )

}

export default Venueshow