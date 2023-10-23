import './style/my-img.css'
import { Component } from "react";

class ImageComponent extends Component {
    render() {
        return <img className="myImg" src={this.props.mySrc} alt={this.props.myAlt} />
    }
}

export default ImageComponent