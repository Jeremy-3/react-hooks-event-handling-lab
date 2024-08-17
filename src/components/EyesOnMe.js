import React from 'react'

function EyesOnMe() {
    handleBlur=()=>{
        console.log('Hey! Eyes on me!');
    }
    handleFocus=()=>{
        console.log('Good!');
    }
  return (
    <button
    onBlur={handleBlur}
    onFocus={handleFocus}
    >
        Eyes on me
    </button>
  )
}

export default EyesOnMe