import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {
    render() {
        console.log(this.props);
        return (
            <Title title={this.props.title} />
            // even tho header returning the title,
            // no extra dom elements added
            // unless you wanna wrap a div over it
            // passing values into components is up next
            // and it's probs more complicated...
            // maybe i will wait on that one
        )
    }
}