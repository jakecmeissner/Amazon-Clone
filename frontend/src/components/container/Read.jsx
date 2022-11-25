import React from 'react';
import Axios from  'axios';
import {useState, useEffect} from 'react';
import ReadCSS from '../../assets/css/Read.css'

function Read() {

    const [age, setAge] = useState('')
    const [abc, setAbc] = useState('')
    
    const msg = () =>{
        alert('Hey deleted sucessfulyy..')
    }

    const reload = () =>{
        window.location.reload()
    }

    const handleDelete = (id) =>{
        Axios.delete(`http://127.0.0.1:8000/s/delete/${id}/`)
        .then(() =>console.log('deleted sucessfully...'))
        // here it reloads it
        setAbc('1')
        msg();
        reload()
        
    }

    useEffect (() =>{
        const fetchData = () =>{
            Axios.get('http://127.0.0.1:8000/s/')
            .then((res) =>{
                console.log(res.data)
                setAge(res.data)
    
            })
        }
        fetchData();
        setAbc('2');

    },[])

   
  return (
    <div className='App'>
        <h1>Hii i am reading from backend</h1>
            { age.length >0  && age.map((a) =>(<div className='read-image-card'>
                <a  target="_blank" rel="noopener noreferrer">
                        <img className="post-image" src={a.image} alt="thumbnail" />
                </a>
                <h1>Name: {a.username}</h1>
                <h1>Email: {a.email}</h1>
                <h1>Password:{a.password}</h1>
                <br/>
                <button onClick={() => {handleDelete(a.id)}}>Delete</button>

        
        </div>)
        )}

    </div>
  )
}

export default Read;