import React from "react"
import Card from "./Card";
import information from "../cardInformation";

function Express() {
   const express = information[4];

   return (
      <div className="multi-container">

         {express.map((data, index) => {
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

export default Express
