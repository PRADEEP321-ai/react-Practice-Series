import React from 'react'

function Home() {
  return (
    <div>
      <h1 className='font-bold text-5xl py-7 px-120'>Welcome to Car Dekho</h1>
      
      <img
        style={{ height: "30vh", width: "30vw", objectFit: "cover", borderRadius: "10px", margin: "0 20px", display: "block" }}
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70" 
        alt="Car"
      />
      
       <img
        style={{ height: "30vh", width: "30vw", objectFit: "cover", borderRadius: "10px", margin: "0 20px", display: "block" }}
        src="https://stock.adobe.com/search?k=super+car&asset_id=422644658" 
        alt="Car"
      />
    </div>
  )
}

export default Home
