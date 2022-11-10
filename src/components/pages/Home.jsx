import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
      <h1><img src="https://upload.wikimedia.org/wikipedia/commons/2/22/Dragon_Ball_Super.png" alt="" /></h1>
      </div>
      <div>
      <button onClick={()=>navigate("characters")}>Characters</button>
      <button onClick={()=>navigate("about")}>About</button>
      </div>


    </div>
  )
}

export default Home