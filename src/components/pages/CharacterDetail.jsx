import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

const CharacterDetail = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState({})
    useEffect(() => {
        const getCharacter = async () => {
            const res = await axios.get(`https://dragon-ball-super-api.herokuapp.com/api/characters/${id}`);
            console.log(res);
            setCharacter(res.data);
        }
        getCharacter();
    },[])
  return (
    <div>
        <img src ={character.image} alt={character.name}/>
                <p>{character.name}</p>
                <button onClick={()=>navigate("/characters")}>go back</button>
    </div>
  )
}

export default CharacterDetail