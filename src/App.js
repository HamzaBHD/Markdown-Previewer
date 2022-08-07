import './App.css';
import React , { useState } from 'react';
import Navbar from './Components/Navbar';
import Textarea from './Components/Textarea';
import Markdown from './Components/Markdown';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ReactMarkdown from 'react-markdown';


function App() {
  const [formData, setFormData] = useState({
    textarea: `# Welcome to my React Markdown Previewer! `
  })

  function handleChange(event) {
    const {name, value} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  return (
    <main className='main'>
      <Navbar />
      <div className='main--container'>
        <Textarea 
          text={formData.textarea}
          handleChange={handleChange}
          />
        <Markdown 
          text={formData.textarea}
        />
      </div>
      <Footer />
    </main>
  ); 
}

export default App;
