import React,{ useEffect, useRef, useState } from 'react'
import '../css/Inscription.css'
import logo from '../images/my_unsplash_logo.svg'
import { Annim1, messageAnni } from '../gsapAnnim'
import {useHistory} from 'react-router-dom'
import { AddNewUser } from '../API/fetchFonc'

function Inscription() {

    const ConnAnnim = useRef(null)
    const mess = useRef(null)
    let history = useHistory();
    let myRegex = /^[a-zA-Z-]+$/;

    const [mail, setMail] = useState('')
    const [name, setName] = useState('')
    const [pass, setPass] = useState('')


    useEffect(() => {
        Annim1(ConnAnnim)
    }, [])

    const handleInscription = (e) => {
        e.preventDefault();

        console.log(name.length);

        if ( !myRegex.test(name) || !myRegex.test(pass)) {
            console.log('cest pas bon');
            messageAnni(mess)
        }else{
            
            if (name.length >1 && pass.length > 2) {
                console.log('zooooo');
                console.log(mail,name,pass);
                AddNewUser(mail,name,pass);
                history.push('/')
            }else{
                console.log('non non');
                messageAnni(mess)
            }
        }

        ;}

    return (
        <div className='inCenter'>
            <h1 className='title'>Inscription</h1>
            <div ref={ConnAnnim} className='inscription'>
                <img src={logo}/>
                <form onSubmit={handleInscription} className='inForm'>
                    <input required
                     onChange={e => setName(e.target.value
                        )}
                        placeholder='Nom utilisateur' type='text'/>
                    
                    <input required
                     onChange={e => setMail(e.target.value
                        )}
                        placeholder='Adress mail' type='email'/>
                    
                    <input required
                     onChange={e => setPass(e.target.value
                        )}
                        placeholder='Mot de passe' type='password'/>
                    
                    <button>commencer</button>
                    <p ref={mess} className='message'>veillez remplir correctement les champs!</p>
                </form>
            </div>

        </div>
    )
}

export default Inscription
