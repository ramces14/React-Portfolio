import React from "react";
import Card from "./Card";
import information from "../cardInformation";


function CSS() {

    const css = information[1];

    return (
        <div className="multi-container">

            {css.map((data, index) => {
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

export default CSS
