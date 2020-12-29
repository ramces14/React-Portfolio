import React from "react";

function Card(props) {
   return (
      <div className="card">
         <img src={props.img} className="card-img-top" alt="..." />
         <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.content}</p>
         </div>

         <div className="btn-container">
         <a href={props.link} className="btn btn-color custom-btn" target="_blank" rel="noopener noreferrer" >Launch website</a>
         <a href={props.github} className="btn btn-color custom-btn" target="_blank" rel="noopener noreferrer" >Github</a>
         </div>
      </div>
   )
}

export default Card
