import React from "react"

export default function Card(props) {
    let badgeText

    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="badge">{badgeText}</div>}
            <img src={props.item.coverImg} className="card--image"/>
            <div className="card--stats">
                <img src="star.png" className="card--star" />
                <span className="grayed-out">{props.item.stats.rating}</span>
                <span className="grayed-out">({props.item.stats.reviewCount}) • </span> 
                <span className="grayed-out">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}