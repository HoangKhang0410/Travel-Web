import React from 'react'

const Card = ({card}) => {
    return (
        <div className="card-item item">
            <div className="image">
                <img src={card.image} alt="" />
                <h4 className="type">{card.type}</h4>
            </div>
            <div className="title">
                <h1 className="title">{card.title}</h1>
            </div>
        </div>
    )
}

export default Card
