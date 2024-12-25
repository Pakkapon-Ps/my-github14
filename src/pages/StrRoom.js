import React from "react";
import "./RoomCard.css";

function StrRoom() {
    return (
        <table>
            <tbody>
                <tr>
                    
                    <td className="image-column">
                        <img src={`${process.env.PUBLIC_URL}/img/r1.jpg`} alt="Room Image 1" />
                    </td>
                    <td className="image-column2">
                        <img src={`${process.env.PUBLIC_URL}/img/r2.jpg`} alt="Room Image 2" />
                        <img src={`${process.env.PUBLIC_URL}/img/r3.jpg`} alt="Room Image 3" />
                    </td>
                    
                    <td className="info-column">
                        <h3>Room Options</h3>
                        <ul>
                            <li>▪ Free Breakfast</li>
                            <li>▪ Kitchen</li>
                            <li>▪ Conditioner</li>
                        </ul>
                    </td>

                    <td className="info-column">
                        <h3>Guest(s)</h3>
                        <ul>
                            <li>▪ 2 <img src={`${process.env.PUBLIC_URL}/img/guesticon.png`} width={20}/></li>
                        </ul>
                    </td>

                    <td className="info-column">
                        <h3>Price/Room/Night</h3>
                        <ul>
                            <li><h4>3150.00 ฿</h4></li>
                        </ul>
                    </td>
                   
                    <td className="button-column">
                        <button className="see-more-btn">See more</button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default StrRoom;
