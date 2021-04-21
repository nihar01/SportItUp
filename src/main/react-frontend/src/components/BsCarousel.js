import React, { Component } from 'react'  
import Carousel from 'react-bootstrap/Carousel'  
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "../images/crik.jpg"
import img2 from "../images/badm.jpg"
import img3 from "../images/footb.jpg"

export class BsCarousel extends Component {  

        render() {  
                return ( 
                    <div> 
                    <Carousel class="carousel slide carousel-fade" data-ride="carousel">
                    <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={img1} height="350" width="500"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={img2} height="350" width="350"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={img3} height="350" width="350"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>  
            <div class="container marketing">

{/* <!-- Three columns of text below the carousel --> */}
</div>


        
            </div>

                )  
        } 
}  

export default BsCarousel