import React, { Component } from 'react';
import Title from "./Title";
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from "react-icons/fa";

export default class Services extends Component {
    state = {
        services:[
            {
                icon: <FaCocktail />,
                title:"Free Cocktails",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                icon: <FaHiking />,
                title:"Hiking",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                icon: <FaShuttleVan />,
                title:"Free Shuttles",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                icon: <FaBeer />,
                title:"Free Beers",
                info: "Excepteur nulla incididunt ullamco minim nostrud culpa commodo pariatur elit Lorem eiusmod non eu."
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services"/>
                <div className="services-center">
                    {this.state.services.map((service,index) => {
                        return(
                            <article key={index} className="service">
                                <span>{service.icon}</span>
                                <h6>{service.title}</h6>
                                <p>{service.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        )
    }
}
