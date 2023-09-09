import React from "react"

export default function Card() {
    return (
        <div className="card">
           <img src="katie-zaferes.png" className="card--image"/>
           <div className="card--stats">
                <img src="star.png" className="card--star" />
                <span className="grayed-out">5.0</span>
                <span className="grayed-out">(6) • </span>
                <span className="grayed-out">USA</span>
           </div>
           <p>Life Lessons with Katie Zaferes</p>
           <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}