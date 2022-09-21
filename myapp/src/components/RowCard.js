import React from 'react'

function RowCard() {
  return (
    <div className="shadow-lg rounded-2xl flex flex-row items-center justify-center py-6">
    <div className="w-20 h-20 rounded-full">
      <img src="" className="h-full w-full"/>
    </div>
    <p>name</p>
    <p>lastName</p>
  </div>
  )
}

export default RowCard;