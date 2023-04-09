import React from 'react'
import { Link } from "react-router-dom";
import './ClassBox.css'
const ClassBox = (props) => {
    return (
        <div className='classBox'>
            <div className="inner">
                <div className='title'>
                    <h1>{props.data.name}</h1>
                </div>
                <div >
                    <p>By Akhand Pratap</p>
                    <p> {props.data.ScheduledTime}</p>
                </div>
                <Link to='/startclass'>
                    <button className='btn bg-primary'>
                        Start class
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ClassBox