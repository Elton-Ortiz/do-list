import React from "react"
import "./list.css"

export default function (props) {
    const listItems = props.listItens.map((number) =>
  <li>{number}</li>
);
    return(
        <ul className="ul-list">
                {listItems}
        </ul>
    )
}