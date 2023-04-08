import React from 'react'
import './createCLass.css'
const Createclass = () => {

    
    return (
        <div class="container">
            <div class="title">Schedule Class</div>
            <form action="#">
                <div class="user__details">
                    <div class="input__box">
                        <span class="details">Title</span>
                        <input type="text" placeholder="E.g: Basic maths" required />
                    </div>
                    {/* <div class="input__box">
                        <span class="details">Username</span>
                        <input type="text" placeholder="johnWC98" required />
                    </div> */}
                    <div class="input__box">
                        <span class="details">Description</span>
                        <input type="text" className='disc' placeholder="this ....." required />
                    </div>
                    <div class="input__box">
                        <span class="details">Date</span>
                        {/* <input type="text" className='disc' placeholder="this ....." required /> */}
                        <input type="datetime-local" id="birthdaytime" name="birthdaytime" />
                        {/* <input type="date" name="date" value="8-04-2023" /> */}
                    </div>

                </div>
                {/* <div class="gender__details">
                    <input type="radio" name="gender" id="dot-1" />
                    <input type="radio" name="gender" id="dot-2" />
                    <input type="radio" name="gender" id="dot-3" />
                    <span class="gender__title">Gender</span>
                    <div class="category">
                        <label for="dot-1">
                            <span class="dot one"></span>
                            <span>Male</span>
                        </label>
                        <label for="dot-2">
                            <span class="dot two"></span>
                            <span>Female</span>
                        </label>
                        <label for="dot-3">
                            <span class="dot three"></span>
                            <span>Prefer not to say</span>
                        </label>
                    </div>
                </div> */}
                <div class="button">
                    <input type="submit" value="Register" />
                </div>
            </form>
        </div>

    )
}

export default Createclass