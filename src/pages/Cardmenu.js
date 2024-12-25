import React from "react";

function Cardmenu() {
    return (
        <div class="card-container centy">

            <div class="card bgc">
            <img src={`${process.env.PUBLIC_URL}/img/1x.jpg`} alt="Room Image" />
            <div class="card-content">
                <h3>Room Options</h3>
                <ul>
                <li>◽ Free Breakfast</li>
                <li>◽ Free Lunch</li>
                <li>◽ Conditioner</li>
                </ul>
                <div class="rating">
                <span>10.0</span>
                <div class="reviews">Superb: 9,899 reviews</div>
                </div>
                <a href="#" class="button">Booking</a>
            </div>
            </div>

            <div class="card bgc">
            <img src={`${process.env.PUBLIC_URL}/img/1x.jpg`} alt="Room Image" />
            <div class="card-content">
                <h3>Room Options</h3>
                <ul>
                <li>◽ Free Breakfast</li>
                <li>◽ Kitchen</li>
                <li>◽ Conditioner</li>
                </ul>
                <div class="rating">
                <span>9.8</span>
                <div class="reviews">Superb: 9,766 reviews</div>
                </div>
                <a href="#" class="button">Booking</a>
            </div>
            </div>

            <div class="card bgc">
            <img src={`${process.env.PUBLIC_URL}/img/1x.jpg`} alt="Room Image" />
            <div class="card-content">
                <h3>Room Options</h3>
                <ul>
                <li>◽ Free Breakfast</li>
                <li>◽ Kitchen</li>
                <li>◽ Conditioner</li>
                </ul>
                <div class="rating">
                <span>9.6</span>
                <div class="reviews">Superb: 9,699 reviews</div>
                </div>
                <a href="#" class="button">Booking</a>
            </div>
            </div>

            <div class="card bgc">
            <img src={`${process.env.PUBLIC_URL}/img/1x.jpg`} alt="Room Image" />
            <div class="card-content">
                <h3>Room Options</h3>
                <ul>
                <li>◽ Free Breakfast</li>
                <li>◽ Kitchen</li>
                <li>◽ Conditioner</li>
                </ul>
                <div class="rating">
                <span>9.1</span>
                <div class="reviews">Superb: 9,311 reviews</div>
                </div>
                <a href="#" class="button">Booking</a>
            </div>
            </div>

            <div class="card bgc">
            <img src={`${process.env.PUBLIC_URL}/img/1x.jpg`} alt="Room Image" />
            <div class="card-content">
                <h3>Room Options</h3>
                <ul>
                <li>◽ Free Breakfast</li>
                <li>◽ Kitchen</li>
                <li>◽ Conditioner</li>
                </ul>
                <div class="rating">
                <span>8.6</span>
                <div class="reviews">Superb: 9,259 reviews</div>
                </div>
                <a href="#" class="button">Booking</a>
            </div>
            </div>

            <div class="card bgc">
            <img src={`${process.env.PUBLIC_URL}/img/1x.jpg`} alt="Room Image" />
            <div class="card-content">
                <h3>Room Options</h3>
                <ul>
                <li>◽ Free Breakfast</li>
                <li>◽ Kitchen</li>
                <li>◽ Conditioner</li>
                </ul>
                <div class="rating">
                <span>8.2</span>
                <div class="reviews">Superb: 9,149 reviews</div>
                </div>
                <a href="#" class="button">Booking</a>
            </div>
            </div>
        </div>
        
    );
}

export default Cardmenu;