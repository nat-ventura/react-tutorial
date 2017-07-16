import React from "react";

export default class Title extends React.Component {
    render() {
        return (
            <h1>{this.props.title}</h1>
            // title makes use of the prop^
            // takes it and spits it out
            // so we end up with a diff header and footer for each one
        );
    }
}