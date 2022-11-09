import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import "../pages/Character.css";
const Character = () => {
    const navigate = useNavigate();
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const getCharacters = async () => {
            const res = await axios.get("https://dragon-ball-super-api.herokuapp.com/api/characters");
            setCharacters(res.data);
        }

        getCharacters();
    }, [])

    return (
        <div>
            <button onClick={() => navigate("/")}>Go back</button>

            <div className='container'>
                {characters && characters.map((character, index) => {
                    return (
                        <div className='card' key={character.id}>
                            <img src={character.imageUrl} alt={character.name} />
                            <p>{character.name}</p>
                            {/* <Link to={`/character/${character.id}`}>Ver mas</Link> */}

                        </div>

                    )
                })}

            </div>
        </div>
    )
}

export default Character