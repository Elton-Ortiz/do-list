import React from "react"
import Button from "./button"

export default function (props) {
    return(
        <div>
                <div className="input-group mb-3">
  <input onChange={props.newState} value={props.toDo} type="text" className="form-control" placeholder="write here" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <div className="input-group-append">
    
            <Button addTask={props.addTask} />
  </div>
</div>
        </div>
        )
}
