import React from "react";

class Weather extends React.Component {
    render() {
        return (
            <div>
             {this.props.temper}
            </div>
        );
    }
};


export default Weather;