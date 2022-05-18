import React, { Component } from "react";
import Header from "./header"

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Shakhzod"
        }


    }
    render() {
        return (
            <div>
                <Header />
            </div>
        )

    }
}

