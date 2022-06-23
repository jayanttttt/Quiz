import React, { useEffect, useState } from 'react';
import Pic1 from "../images/Frame1.svg";
import Pic5 from "../images/Frame5.svg";
import Pic6 from "../images/image2.svg";
import Pic7 from "../images/Frame6.svg";
import Pic8 from "../images/Frame7.svg";
import { Link } from 'react-router-dom';

const Result = (props) => {
    const { answer, clear } = props;
    const [result, setResult] = useState(0);
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);
    const [rotate, setRotate] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [incorrect, setIncorrect] = useState(0);
    const height = window.innerHeight;
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        if (answer[0].ans === 0 && answer[1].ans === 1 && answer[2].ans === 2) {
            setResult(100);
            setTop(152);
            setLeft(270);
            setRotate(90);
            setCorrect(3);
            setIncorrect(0);
        }
        else if (answer[0].ans === 0 && answer[1].ans === 1 ||
            answer[1].ans === 1 && answer[2].ans === 2 ||
            answer[0].ans === 0 && answer[2].ans === 2) {
            setResult(66);
            setTop(100);
            setLeft(246);
            setRotate(36);
            setCorrect(2);
            setIncorrect(1);
        }
        else if (answer[0].ans === 0 || answer[1].ans === 1 || answer[2].ans === 2) {
            setResult(33);
            setTop(100);
            setLeft(186);
            setRotate(324);
            setCorrect(1);
            setIncorrect(2);
        }
        else {
            setResult(0);
            setTop(152);
            setLeft(168);
            setRotate(270);
            setCorrect(0);
            setIncorrect(3);
        }
    }, [])

    return (
        <div style={{
            background: '#AF9CF3',
        }}>
            <img src={Pic1} alt="" />
            <div className='d-flex flex-column justify-content-between align-items-center position-relative'
                style={{
                    background: "white",
                    borderRadius: "60px 60px 0px 0px",
                    marginTop: "78px",
                    height: `calc(${height}px - 235px)`
                }}>
                <div className='d-flex align-items-center flex-column'>
                    <p
                        style={{
                            fontFamily: `'Nunito', sans-serif`,
                            fontSize: "56px",
                            padding: "0px 40px",
                            textAlign: "left",
                            marginTop: "74px",
                            marginBottom: "30px",
                            opacity: "0.8"
                        }}>Your result
                    </p>
                    <div className='d-flex justify-content-center align-items-center position-relative'>
                        <p className='position-absolute mb-0 d-flex justify-content-center align-items-center'
                            style={{
                                zIndex: "2",
                                fontFamily: `'Nunito', sans-serif`,
                                fontSize: "64px",
                                background: "white",
                                width: "250px",
                                height: "256px",
                                borderRadius: "50%",
                            }}>
                            {result}%
                        </p>
                        <svg style={{
                            width: "600px",
                            height: "600px",
                            background: "white",
                            borderRadius: "50%",
                            transform: "rotate(270deg)",
                        }}>
                            <circle cx="290" cy="290" r="140" style={{
                                width: "100%",
                                height: "100%",
                                fill: "transparent",
                                stroke: "#EBEDF5",
                                strokeWidth: "20px",
                                transform: "translate(10px, 6px)",
                                strokeLinecap: "round",
                            }}></circle>
                            <circle cx="290" cy="290" r="140" style={{
                                width: "100%",
                                height: "100%",
                                fill: "transparent",
                                stroke: "white",
                                strokeWidth: "14px",
                                transform: "translate(10px, 6px)",
                                strokeDasharray: "",
                                strokeDashoffset: "",
                                strokeLinecap: "round",
                            }}></circle>
                            <circle cx="290" cy="290" r="184" style={{
                                width: "100%",
                                height: "100%",
                                fill: "transparent",
                                stroke: "#EBEDF5",
                                strokeWidth: "68px",
                                transform: "translate(10px, 6px)",
                                strokeDasharray: "386",
                            }}></circle>
                        </svg>
                        <img src={Pic5} alt="" style={{
                            position: "absolute",
                            top: "64px",
                            width: "466px",
                            left: "64px",
                        }} />
                        <div className='position-absolute' style={{ top: `${top}px`, left: `${left}px`, transform: `rotate(${rotate}deg)` }}>
                            <img src={Pic6} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className='d-flex align-items-center' style={{
                            width: "84vw",
                            padding: "0px 30px",
                            background: "#e9f7f0",
                            height: "130px",
                            borderRadius: "20px",
                            marginBottom: "40px"
                        }}>
                            <img src={Pic7} alt="" />
                            <p className='mb-0' style={{ fontSize: "32px", fontWeight: "700", marginLeft: "25px" }}>{correct}</p>
                            <p className='mb-0' style={{ fontSize: "32px", fontWeight: "700", opacity: "0.5", marginLeft: "20px" }}>Correct</p>
                        </div>
                        <div className='d-flex align-items-center' style={{
                            width: "84vw",
                            padding: "0px 30px",
                            background: "#ffe8e9",
                            height: "130px",
                            borderRadius: "20px",
                            marginBottom: "40px"
                        }}>
                            <img src={Pic8} alt="" />
                            <p className='mb-0' style={{ fontSize: "32px", fontWeight: "700", marginLeft: "25px" }}>{incorrect}</p>
                            <p className='mb-0' style={{ fontSize: "32px", fontWeight: "700", opacity: "0.5", marginLeft: "20px" }}>Correct</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center' style={{
                    position: 'sticky',
                    bottom: "40px",
                }}>
                    <Link to="/" style={{ textDecoration: "none" }} onClick={() => clear()} >
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
                            <p className='mb-0'>Start Again</p>
                            <div></div>
                        </div>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default Result