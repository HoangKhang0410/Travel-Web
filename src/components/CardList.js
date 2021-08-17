import React from 'react'
import Card from './Card'

const CardList = () => {
    const Cards = [
        {
            image: "/images/img-9.jpg",
            title: "Explore the hidden waterfall deep inside the Amazon Jungle",
            type: "Adventure",
        },
        {
            image: "/images/img-2.jpg",
            title: "Travel through the Islands of Bali in a private cruise",
            type: "Luxury",
        },
        {
            image: "/images/img-3.jpg",
            title: "Set Sail in the Atlantic Ocean visiting Uncharted Waters",
            type: "Mystery",
        },
        {
            image: "/images/img-4.jpg",
            title: "Experience Football on Top of the Himalayan Mountains",
            type: "Adventure",
        },
        {
            image: "/images/img-8.jpg",
            title: "Ride through the Sahara Desert on a guided camel tour",
            type: "Adrenaline",
        }
    ]
    return (
        <div className="card-list">
            <h1>Check out these EPIC Destinations</h1>
            <div className="cards">
            {Cards.map(card => (
                <Card card={card}/>
            ))}
            </div>
        </div>
    )
}

export default CardList
