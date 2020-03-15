import React from "react"

export default function (props) {
    return (
        <button className="btn btn-outline-secondary" type="button" onClick={props.addTask} id="button-addon2">+</button>
    )
}

