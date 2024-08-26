import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Jangan lupa untuk mengimpor file CSS

function App() {
  const [imageSrc1, setImageSrc1] = useState('');
  const [imageSrc2, setImageSrc2] = useState('');
  const [imageSrc3, setImageSrc3] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/image/1', { responseType: 'blob' })
      .then(response => {
        const imageUrl = URL.createObjectURL(response.data);
        setImageSrc1(imageUrl);
      })
      .catch(error => console.error('Error fetching the image:', error));
    axios.get('http://localhost:3000/image/2', { responseType: 'blob' })
      .then(response => {
        const imageUrl = URL.createObjectURL(response.data);
        setImageSrc2(imageUrl);
      })
      .catch(error => console.error('Error fetching the image:', error));
    axios.get('http://localhost:3000/image/3', { responseType: 'blob' })
      .then(response => {
        const imageUrl = URL.createObjectURL(response.data);
        setImageSrc3(imageUrl);
      })
      .catch(error => console.error('Error fetching the image:', error));
  }, []);

  return (
    <>
      <h1>Image From API</h1>
    <div className='container'>
      {imageSrc1 && (
        <div className='grid-item'>
          <img src={imageSrc1} alt="API Image 1" />
          <p>Text 1</p>
        </div>
      )}
      {imageSrc2 && (
        <div className='grid-item'>
          <img src={imageSrc2} alt="API Image 2" />
          <p>Text 2</p>
        </div>
      )}
      {imageSrc3 && (
        <div className='grid-item'>
          <img src={imageSrc3} alt="API Image 3" />
          <p>Text 3</p>
        </div>
          )}
      {imageSrc3 && (
        <div className='grid-item'>
          <img src={imageSrc3} alt="API Image 3" />
          <p>Text 3</p>
        </div>
          )}
      {imageSrc3 && (
        <div className='grid-item'>
          <img src={imageSrc3} alt="API Image 3" />
          <p>Text 3</p>
        </div>
          )}
      {imageSrc3 && (
        <div className='grid-item'>
          <img src={imageSrc3} alt="API Image 3" />
          <p>Text 3</p>
        </div>
          )}
    </div>
    </>
  );
}

export default App;
