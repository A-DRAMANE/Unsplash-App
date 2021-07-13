import React,{ useEffect, useRef} from 'react'
import '../css/Inscription.css'
import logo from '../images/my_unsplash_logo.svg'
import { Annim1 } from '../gsapAnnim'

function Inscription() {

    const ConnAnnim = useRef(null)

    useEffect(() => {
        Annim1(ConnAnnim)
    }, [])

    return (
        <div className='inCenter'>
            <h1 className='title'>Inscription</h1>
            <div ref={ConnAnnim} className='inscription'>
                <img src={logo}/>
                <form className='inForm'>
                    <input placeholder='Nom utilisateur' type='text'/>
                    <input placeholder='Adress mail' type='mail'/>
                    <input placeholder='Mot de passe' type='password'/>
                    <button>commencer</button>
                </form>
            </div>

        </div>
    )
}

export default Inscription
