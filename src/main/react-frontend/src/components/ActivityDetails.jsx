import React, { Component } from 'react';

class ActivityDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userId:this.props.location.userId,
            activity_id: this.props.location.activity_id,
            isChecked: true,
            activityData:[],         //contains everything returned by api
            // chapterData: [],    //contains everything in "bookChapter" part of api result
            // cartChapters: [],   //cart with current {chapterNum, bookId}
            // finalCart: []       //cart with chapters {chapterNum, bookId} that are sent to the next component
        }
        this.handleChange = this.handleChange.bind(this)
        // this.addToCart = this.addToCart.bind(this)
        // this.goToCart=this.goToCart.bind(this)
        this.getBookDetails=this.getBookDetails.bind(this)
    }

    async getActivityDetails(){
        let response = await fetch('http://localhost:8081/api/activity/'+this.state.activity_id, {
            method: 'GET',
            headers: {
                'Accept': '*/*'
            }
        })
        let status = response.status;
        if (status === 200) {
            console.log("successful")
        }
        let activityDetails= await response.json()
        console.log(JSON.stringify(activityDetails))
        this.setState({
            // chapterData: bookDetails["bookChapters"],
            activityData:activityDetails
        })
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        if (type === "checkbox") {
            let tempCart = this.state.cartChapters
            if (checked) {
                tempCart.push(name)
            } else {
                tempCart = this.state.cartChapters.filter((chapter) => chapter !== name)

            }
            this.setState(
                {[name]: checked, cartChapters: tempCart}
            )
        } else {
            this.setState({[name]: value})
        }
    }

    addToCart() {
        let tempCart = [];
        this.state.cartChapters.forEach(cNum => {
            let chapterData=[]
            for(let i=0;i<this.state.chapterData.length;i++)
            {
                if(this.state.chapterData[i].chapterNumber==cNum)
                    chapterData.push(this.state.chapterData[i])

            }
            tempCart.push({
                "bookId": this.state.bookId,
                "bookName":this.state.bookData["bookName"],
                "bookLocation":this.state.bookData["pdfFileLocation"],
                "chapterNum": cNum,
                "chapterData":chapterData,
            })
        })

        this.setState({
            finalCart: tempCart
        },()=>console.log(this.state.finalCart))
    }

    goToCart() {
        this.props.history.push({
            pathname: "/Cart",
            cart: this.state.finalCart,
            userId: this.state.userId
        })
    }

    async componentDidMount() {
        if (this.state.activity_id === undefined) {
            this.setState({
                activity_id: JSON.parse(localStorage.getItem('bookId')),
                userId:JSON.parse(localStorage.getItem('userId'))
            },()=>this.getActivityDetails())
        } else {
            localStorage.setItem('activity_id', JSON.stringify(this.state.activity_id));
            localStorage.setItem('userId', JSON.stringify(this.state.userId));

            await this.getActivityDetails()
        }
        // let bookDetails= await this.getBookDetails()
        // this.setState({
        //     chapterData: bookDetails["bookChapters"],
        //     bookData:bookDetails
        // })
    }

    render() {
        
            const bookComponent = this.state.bookData;
            return (
                <div>
                    <h1 style={{color: "white"}}>Activity Details</h1>
    
                    <div className="ActivityDetails_Info">  
                        <img src={bookComponent.imageLocation} style={{width: '20rem'}}/>
                        {this.state.finalCart.length>0 &&(<div className="Preview">
                            <button onClick={this.goToCart}>Go to Cart</button>
                        </div>)}
                        <p>Name:{bookComponent.bookName}</p>
                        <p>Description:{bookComponent.description}</p>
                        <p>Price:{bookComponent.price}</p>
                        <p>Author:{bookComponent.author}</p>
                        {this.state.chapterData==null?<h3>No Chapters</h3>:<ol title="Chapters">
                            {
                                this.state.chapterData.map((chap) => {
                                    return (
                                        <div>
                                            <li>{chap.chapterName}: ${chap.price}
                                                <input type="checkbox"
                                                       name={chap.chapterNumber}
                                                       onChange={this.handleChange}
                                                       value={this.state.isChecked}
                                                />
                                            </li>
                                            <br/>
                                        </div>
                                    )
                                })
                            }
                            <br/>
                            <button className="addToCart" onClick={this.addToCart}> Add To Cart</button>
                            <button className="buyNow"> Buy Now</button>
                        </ol>}
                    </div>
    
                </div>
    
    
            )
        
    }
}

export default ActivityDetails;
