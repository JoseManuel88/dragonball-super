import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        Home
      </div>
      <div>
      <button onClick={()=>navigate("characters")}>Characters</button>
      </div>


    </div>
  )
}

export default Home