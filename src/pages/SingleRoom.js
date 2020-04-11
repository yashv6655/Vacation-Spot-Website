import React, { Component } from 'react';
import defaultBcg from "../images/room-2.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import {RoomContext} from "../Context";
import StyledHero from "../components/Styled-Hero";

export default class SingleRoom extends Component {
    constructor(props) {
        super(props)
        //console.log(this.props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        };        
    }

    static contextType = RoomContext;

    //componentDidMount(){}

    render() {

        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if(!room){
            return <div className="error">
                    <h3>No Room Found</h3>
                    <Link to="/rooms/" className="btn-primary">Return to Rooms</Link>
                </div>
            
        }
        

        const {name,description, capacity, size, price, extras, breakfast, pets, images} = room;
        const [mainImg, ...defaultImg] = images;

        return (
            <>
            <StyledHero img={mainImg || this.state.defaultBcg}>
                <Banner title={`${name} room`} />
                <Link to="/rooms" className="btn-primary">Back to Rooms</Link>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {defaultImg.map((item,index) => {
                        return <img key={index} src={item} atl={name} />
                    })}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>Details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>Info</h3>
                        <h6>Price: ${price}</h6>
                        <h6>Size: ${size} sqft</h6>
                        <h6>
                            Max Capacity: {capacity > 1 ? `${capacity} People` : `${capacity} person`}
                        </h6>
                        <h6>{pets ? "Pets allowed" : "No pets allowed"}</h6>
                        <h6>{breakfast && "Free Breakfast"}</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>Extras</h6>
                <ul className="extras">
                    {extras.map((item,index) => {
                        return <li key={index}>- {item}</li> 
                    })}
                </ul>
            </section>
            </>
        )
    }
}
