import React from "react";
import './Textarea.css'


const Textarea = ({ text, handleChange }) => {
    return (
        <div className="textarea--container">
          <div className='control--bar'>
            <h6>Editor</h6>
          </div>
          <textarea
           name='textarea'
           type='textarea'
           id='editor'
           value={text}
           onChange={handleChange}
            />
        </div>
    )
}

export default Textarea; 