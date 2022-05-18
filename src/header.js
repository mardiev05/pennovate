import React, { Component } from "react";

export default class header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            headerLists:
                [
                    {
                        id: 1,
                        name: "About Us"
                    },
                    {
                        id: 2,
                        name: "Contact Us"
                    },
                    {
                        id: 1,
                        name: "Service Breakdown"
                    },
                    {
                        id: 1,
                        name: "Help"
                    }
                ]
        }
    }

    render() {
        return (<div>
            <header>

                <h3 className="header__title">Pennovate</h3>

                <ul className="header__ul">
                    {this.state.headerLists.map((item) => (
                        <li className="header__list">
                            <a href="#">{item.name}</a>
                        </li>
                    ))}
                </ul>

                <button className="header__btn">Claim your free session</button>

            </header>
        </div>)
    }
}
