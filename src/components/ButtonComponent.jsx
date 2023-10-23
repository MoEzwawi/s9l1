import './style/button-component.css'

const ButtonComponent = function (props) {
    return (
        <button className="my-button">{props.buttonText}</button>
    )
}

export default ButtonComponent