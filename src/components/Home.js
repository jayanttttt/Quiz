import React from 'react';
import Logo from "../images/Frame.svg";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className='d-flex flex-column justify-content-between align-items-center'
            style={{ background: "linear-gradient(180deg, rgba(175, 156, 243, 0) 7.92%, #AF9CF3 86.48%)", height: "100vh", padding: "40px 0px" }}>
            <img src={Logo} alt="" style={{ width: "292px" }} />
            <div className='d-flex justify-content-center align-items-center' style={{
                fontSize: "80px",
                fontWeight: 800,
                background: "white",
                width: "432px",
                height: "396px",
                borderRadius: "50%",
                color: "#FF3B3C",
                boxShadow: "0px 10px 0px 4px #c2b9e3",
            }}>
                Quiz
            </div>
            <Link to="/question1" style={{ textDecoration: "none" }}>
                <div className='d-flex justify-content-center align-items-center' style={{
                    fontWeight: 900,
                    fontSize: "48px",
                    background: "#FF3B3F",
                    borderRadius: "80px",
                    width: "84vw",
                    height: "120px",
                    color: "white",
                }}>
                    Start
                </div>
            </Link>
        </div>
    )
}

export default Home