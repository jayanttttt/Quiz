import React, { useEffect, useState } from 'react';
import Pic1 from "../images/Frame1.svg";
import Pic2 from "../images/Frame2.svg";
import Pic3 from "../images/Frame3.svg";
import Pic4 from "../images/Frame4.svg";
import { Link } from 'react-router-dom';

const Question3 = (props) => {
    const { handleAnswer, options } = props;
    const number = 3;
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const [selected, setSelected] = useState();

    return (
        <div style={{
            background: '#AF9CF3',
        }}>
            <img src={Pic1} alt="" />
            <div className='d-flex flex-column align-items-center position-relative'
                style={{
                    background: "white",
                    borderRadius: "60px 60px 0px 0px",
                    marginTop: "78px",
                }}>
                <div className='d-flex justify-content-center align-items-center position-absolute' style={{ top: "-104px" }}>
                    <p className='position-absolute mb-0'
                        style={{
                            zIndex: "2",
                            fontFamily: `'Nunito', sans-serif`,
                            fontSize: "98px",
                            fontStyle: "italic",
                        }}>
                        {number}<span style={{
                            fontSize: "36px",
                            opacity: 0.6
                        }}>/3</span>
                    </p>
                    <svg style={{
                        width: "218px",
                        height: "218px",
                        transform: "rotate(-88deg)",
                        background: "white",
                        borderRadius: "50%",
                    }}>
                        <circle cx="100" cy="100" r="80" style={{
                            width: "100%",
                            height: "100%",
                            fill: "transparent",
                            stroke: "#F3F4FA",
                            strokeWidth: "12px",
                            transform: "translate(10px, 6px)",
                            strokeLinecap: "round",
                        }}></circle>
                        <circle cx="100" cy="100" r="80" style={{
                            width: "100%",
                            height: "100%",
                            fill: "transparent",
                            stroke: "#44B77B",
                            strokeWidth: "14px",
                            transform: "translate(10px, 6px)",
                            strokeDasharray: "502",
                            strokeDashoffset: `calc(502 - ((502 * ${number}) / 3))`,
                            strokeLinecap: "round",
                        }}></circle>
                    </svg>
                </div>
                <p
                    style={{
                        fontFamily: `'Nunito', sans-serif`,
                        fontSize: "40px",
                        padding: "0px 40px",
                        textAlign: "left",
                        marginTop: "120px",
                        marginBottom: "30px"
                    }}>How do you judge what should be added in the next version of the app?
                </p>
                <div style={{ paddingBottom: "3vh" }}>
                    {options.map((option) => (
                        <div
                            key={option.id}
                            className="d-flex align-items-center"
                            onClick={() => setSelected(option.id)}
                            style={selected === option.id ? {
                                fontSize: "28px", fontWeight: "600px",
                                width: "670px",
                                height: "160px",
                                background: "#F3F4FA",
                                borderRadius: "20px",
                                padding: "40px",
                                border: "4px solid #44B77B",
                                margin: "10px 0px"
                            } : {
                                fontSize: "28px", fontWeight: "600px",
                                width: "670px",
                                height: "160px",
                                background: "#F3F4FA",
                                borderRadius: "20px",
                                padding: "40px",
                                border: "4px solid #F3F4FA",
                                margin: "10px 0px"
                            }}
                        >
                            <input type="radio" name='option' style={{ display: "none" }} />
                            {selected === option.id ? <img src={Pic3} alt="" /> : <img src={Pic2} alt="" />}
                            <p className='mb-0' style={{ marginLeft: "30px" }}>{option.name}</p>
                        </div>
                    ))}
                </div>
                <div className='d-flex justify-content-center' style={{
                    position: 'sticky',
                    bottom: "40px",
                }}>
                    <Link to={selected === null ? "" : "/result"} style={{ textDecoration: "none" }} onClick={() => handleAnswer(selected)} >
                        <div className='d-flex justify-content-between align-items-center' style={{
                            fontWeight: 900,
                            fontFamily: `'Nunito', sans-serif`,
                            fontSize: "36px",
                            background: "#FF3B3F",
                            borderRadius: "80px",
                            width: "84vw",
                            height: "120px",
                            color: "white",
                            padding: "0px 60px"
                        }}>
                            <div></div>
                            <p className='mb-0'>Next</p>
                            <img src={Pic4} alt="" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Question3