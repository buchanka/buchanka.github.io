import React from 'react';

const MyButtons = ({ text }) => {
    return (
      <button style={{ 
        borderRadius: '80px',
        borderColor: 'transparent',
        padding: '10px 30px',
        backgroundColor: '#760b91',
        color: '#fff'
      }}>
        {text}
      </button>
    );
  }

  export default MyButtons