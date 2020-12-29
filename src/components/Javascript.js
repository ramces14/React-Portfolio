import React from 'react'
import Card from "./Card";
import information from "../cardInformation";




function Javascript() {
    const javascript = information[2];

    return (
        <div className="multi-container">

            {javascript.map((data, index) => {
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

export default Javascript
