import React,{ useEffect, useRef, useState } from 'react'
import '../css/Inscription.css'
import logo from '../images/logoAll.png'
import { Annim1, messageAnni } from '../gsapAnnim'
import {useHistory} from 'react-router-dom'
import { AddNewUser } from '../API/fetchFonc'
import { getResult } from '../localStorage/getData' 

function Inscription() {

    const ConnAnnim = useRef(null)
    const mess = useRef(null)
    let history = useHistory();
    let myRegex = /^[a-zA-Z-]+$/;
    let messageShow = 'veillez remplir correctement les champs!';

    const [mail, setMail] = useState('')
    const [name, setName] = useState('')
    const [pass, setPass] = useState('')
    const [Status, setStatus] = useState(0);
    const [message, setMessage] = useState('')

    useEffect(() => {
        if(getResult()){
            if( !getResult().success ) {
                setMessage(getResult().error)
            }
            else{
                console.log(getResult());
                history.push("/")
            }
        }
    }, [Status])

    useEffect(() => {
        Annim1(ConnAnnim)
    }, [])

    const handleInscription = async (e) => {
        e.preventDefault();

        if ( !myRegex.test(name) || !myRegex.test(pass)) {
            console.log("non");
            setMessage(messageShow);
            messageAnni(mess)
        }
        else{

            if (name.length >2 && pass.length > 2) {
                await AddNewUser(mail,name,pass);
                setStatus(Status + 1)
            }else{
                setMessage(messageShow);
                messageAnni(mess)
            }
        }
    }

    return (
        <div className='inCenter'>
            <h1 className='title'>Inscription</h1>
            <div ref={ConnAnnim} className='inscription'>
                <img className='my-logo' src={logo}/>
                <form onSubmit={handleInscription} className='inForm'>
                    <input required
                     onChange={e => setMail(e.target.value
                        )}
                        placeholder='Adress mail' type='email'/>
                    
                    <input required
                     onChange={e => setName(e.target.value
                        )}
                        placeholder='Nom utilisateur' type='text'/>
                    
                    <input required
                     onChange={e => setPass(e.target.value
                        )}
                        placeholder='Mot de passe' type='password'/>
                    
                    <button>commencer</button>
                    {message !== '' ? <p ref={mess} className='message'>{message}</p> : ""}
                </form>
            </div>

        </div>
    )
}

export default Inscription
