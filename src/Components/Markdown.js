import React from "react";
import './Markdown.css'
import { marked } from "marked";

function Markdown({ markdown }) {
    marked.setOptions({
      breaks: true
    });

    const renderer = new marked.Renderer();


    return (
        <div className='previewer--container'>
            <div className='previewer--bar'>
              <h6>previewer</h6>
            </div>
            <div id='preview'
              dangerouslySetInnerHTML={{
                __html: marked(markdown, { renderer: renderer }),
              }}
            >
            </div>
        </div>
    )
}

  export default Markdown;