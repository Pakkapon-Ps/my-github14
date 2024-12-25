import React from "react";

function Room() {
    const rooms = [
        { id: 1, name: "Deluxe Room", price: "$200 per night", description: "Spacious room with king-size bed and city view." },
        { id: 2, name: "Suite Room", price: "$300 per night", description: "Luxury suite with separate living area and premium amenities." },
        { id: 3, name: "Standard Room", price: "$100 per night", description: "Comfortable room with queen-size bed and basic facilities." },
    ];

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Our Rooms</h1>
            <div className="row">
                {rooms.map((room) => (
                    <div className="col-md-4 mb-4" key={room.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{room.name}</h5>
                                <p className="card-text">{room.description}</p>
                                <p className="card-text text-primary">{room.price}</p>
                                <button className="btn btn-danger">Book Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Room;
