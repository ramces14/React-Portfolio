import React from 'react'
import Card from "./Card";
import information from "../cardInformation";
import "../css/Card.css";

function HTML() {
    const [html] = information;

    return (
        <div className="container">
            
            <Card 
                title={html.title}
                img={html.img}
                content={html.content}
                link={html.link}
                github={html.github}
            />

        </div>
    )
}

export default HTML
