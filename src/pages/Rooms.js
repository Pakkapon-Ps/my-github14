import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

function Rooms() {
    return (
        <><Navbar /><div class="room-card">
            <div class="room-images">
                <img class="main-image" src="room-main.jpg" alt="Main Room Image" />
                <div class="thumbnail-images">
                    <img src="room1.jpg" alt="Room Thumbnail" />
                    <img src="room2.jpg" alt="Room Thumbnail" />
                </div>
            </div>
            <div class="room-details">
                <ul class="room-options">
                    <li>Free Breakfast</li>
                    <li>Kitchen</li>
                    <li>Conditioner</li>
                </ul>
            </div>
            <div class="room-info">
                <div class="guests">
                    Guests(s): <strong>2</strong>
                </div>
                <div class="price">
                    Price/Room/Night: <strong>1350.00 ฿</strong>
                </div>
                <button class="see-more">See More</button>
            </div>
        </div><footer>

            </footer></>
    );
};

export default Rooms;
