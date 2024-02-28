import React from "react";
import ReservePost from "../components/ReservePost";
import ButtonEffect from "../components/buttonEffect";

export default function Reserve() {
    return (
        <div className="reservation-container">
            <h1 className="reservation-title">Book Minsoon Now</h1>
            <ReservePost />
            <ButtonEffect />
        </div>
    );
}
