import React,{ useEffect, useRef} from 'react'
import '../css/Connexion.css'
import logo from '../images/my_unsplash_logo.svg'
import { useHistory } from 'react-router-dom'
import {Annim1} from '../gsapAnnim'


function Connexion() {

    let history = useHistory()
    const ConnAnnim = useRef(null)

    useEffect(() => {
        Annim1(ConnAnnim)
    }, [])

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('zoo');
        history.push("/phtfb")
    }

    const handleInscription = () =>{
        history.push("/inscription")
    }

    return (
        <div className='conCenter'>
            <h1 className='title'>Connection</h1>
            <div ref={ConnAnnim} className='connexion'>
                <img src={logo}/>
                <p>*Veiller vous identifiez</p>
                <form onSubmit={handleSubmit} className='conForm'>
                    <input placeholder='Adress mail' type='mail'/>
                    <input placeholder='Mot de passe' type='password'/>
                    <button>connection</button>
                </form>
                <span onClick={handleInscription}>s'inscrire</span>
            </div>

        </div>
    )
}

export default Connexion
