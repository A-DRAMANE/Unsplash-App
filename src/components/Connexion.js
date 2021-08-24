import React,{ useEffect, useRef, useState} from 'react'
import '../css/Connexion.css'
import logo from '../images/logoAll.png'
import { useHistory } from 'react-router-dom'
import {Annim1} from '../gsapAnnim'
import { LogIn } from '../API/fetchFonc'
import { getResult } from '../localStorage/getData'


function Connexion() {

    const [name, setName] = useState('')
    const [pass, setPass] = useState('')
    const [Log, setLog] = useState('')
    const [statut, setStatut] = useState(0)

    let history = useHistory()
    const ConnAnnim = useRef(null)

    useEffect(() => {
        console.log(getResult().success);
        setLog(<div className='load'></div>)
        if(getResult() && getResult().success){
            console.log(getResult());
            history.push("/")
        }else{
            console.log(getResult());
            setName('');
            setPass('');
            setLog(getResult().error)
        }
    }, [statut])

    useEffect(() => {
        Annim1(ConnAnnim)
    }, [])

    const handleSubmit = async (e) =>{
        e.preventDefault()
        await LogIn(name,pass)
        setStatut( statut + 1)
    }

    const handleInscription = () =>{
        localStorage.removeItem('result');
        history.push("/inscription")
    }

    const handleToHome = (e) =>{
        history.push("/")
    }

    return (
        <div className='conCenter'>
            <h1 className='title'>Connexion</h1>
            <div ref={ConnAnnim} className='connexion'>
                <img onClick={handleToHome} className='my-logo' alt="my-logo" src={logo}/>
                <p>*Veiller vous identifiez</p>
                <form onSubmit={handleSubmit} className='conForm'>
                    <input placeholder='Nom Utilisateur' type='text'
                        onChange={e => setName(e.target.value)}
                    />
                    <input placeholder='Mot de passe' type='password'
                        onChange={e => setPass(e.target.value)}
                    />
                    <button>connexion</button>
                </form>
                {Log === '' ? "" : <div className='errorConn'>{Log}</div>}
                <span onClick={handleInscription}>s'inscrire</span>
            </div>

        </div>
    )
}

export default Connexion
