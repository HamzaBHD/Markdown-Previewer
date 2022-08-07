import React from "react";
import './Textarea.css'


export default function Textarea(props) {
    return (
        <div className="textarea--container">
          <div className='control--bar'>
            <h6>Editor</h6>
          </div>
          <textarea
           name='textarea'
           type='textarea'
           id='editor'
           value={props.text}
           onChange={props.handleChange}
            />
        </div>
    )
}