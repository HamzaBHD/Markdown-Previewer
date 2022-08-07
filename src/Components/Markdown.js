import React from "react";
import './Markdown.css'
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Markdown(props) {
    return (
        <div className='previewer--container'>
            <div className='previewer--bar'>
              <h6>previewer</h6>
            </div>
            <div id='preview' className="markdown--container">
            <ReactMarkdown 
              children={props.text}
              className='markdown'
              renderers={{
                code: Component,
              }}
            />
            </div>
        </div>
    )
}

const Component = ({value, language}) => {
    return (
      <SyntaxHighlighter language={language ?? null} style={docco}>
        {value ?? ''}
      </SyntaxHighlighter>
    );
  };