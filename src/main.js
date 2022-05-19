import React, { Component } from "react";
import "./main.css"

export default class main extends Component {





    render() {
        return (<main>

            <div className="main__title-row">
                <h1 className="main__title">
                    3 INSANELY easy steps to earn up to
                    18.7 lacs per year while studying in UK
                </h1>

                <p className="main__title-text">
                    (even without work experience, IELTS or TOFEL)
                </p>
            </div>

            <div className="main__content-row">

                <form className="main__card">
                    <h4 className="main__card-title">
                        JOIN THE FREE PROGRAM
                    </h4>
                    <p className="main__card-text">
                        JOIN THE FREE PROGRAM
                    </p>
                    <span className="main__card-clock">
                        {new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()}
                    </span>

                    <input type="text" name="name" placeholder="Sumanya" required />
                    <input type="email" name="email" placeholder="Example@gmail.com" required />
                    <button className="main__card-btn" type="submit">Join The Free Training</button>
                </form>

            </div>

        </main>);
    }
}