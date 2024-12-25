import React from "react";
import StrRoom from "./StrRoom";

function Room() {
    return (
        <div>
            {Array(6).fill().map((_, index) => (
                <StrRoom key={index} />
            ))}
        </div>
    );
}

export default Room;
