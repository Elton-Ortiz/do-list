import React from "react"

export default function (props) {
    return(
<div className="input-group mb-3">
  <input type="text" className="form-control" id="input" placeholder="Update Task" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <div className="input-group-append">
    <button  className="btn btn-outline-secondary" onClick={()=>{
      props.updateTask(props.ind,document.getElementById("input").value)
      props.closeUpdate()
      }} type="button" id="button-addon2">Update</button>
  </div>
</div>
    )
}



