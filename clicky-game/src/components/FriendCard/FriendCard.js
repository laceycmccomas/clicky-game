import React from "react";
// import "./FriendCard.css";

const FriendCard = props => (
   
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
     {props.message}
   
    <span onClick={() => props.removeFriend(props.id)} className="remove">
      𝘅
    </span>
    </div>
);

export default FriendCard;