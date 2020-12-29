import React from 'react';
import Card from "./Card";
import information from "../cardInformation";

function Reacts() {
    const react = information[3];

    return (
        <div className="multi-container">

            {react.map((data, index) => {
                return(
                    <Card 
                        key={index}
                        title={data.title}
                        img={data.img}
                        content={data.content}
                        link={data.link}
                        github={data.github}
                    />
                );
            })}  

        </div>
    )
}

export default Reacts
