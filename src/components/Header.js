import React,{ useRef, useState } from 'react'
import logo from '../images/monLogo.png'
import SearchIcon from '@material-ui/icons/Search';
import {Button} from 'react-bootstrap'
import AddPic from './AddPic'
import Person from './Person'
import { getUser } from '../localStorage/getData'
import { useHistory } from 'react-router-dom'
import '../css/Header.css'

function Header({functions}) {

    
    let myRegex = /^[a-zA-Z-]+$/;
    let messageShow = 'veillez entrer un nom valide.';

    let history = useHistory()
    const AddImage = useRef(null)
    const Modal = useRef(null)
    const Modal3 = useRef(null)
    const showPerson = useRef(null)
    const [x, setx] = useState(false)
    const [person, setperson] = useState('')
    console.log(getUser());

    const handleAdd = (e) =>{
        AddImage.current.style.display = 'flex'
        setx(true)
        console.log(AddImage);
        console.log(getUser());
        console.log(Modal);
    }

    const handleConnect = (e) =>{
        console.log(Modal);
        Modal.current.click()
        history.push("/connexion")
    }

    const handleDeconnect = (e) =>{
        console.log(Modal3);
        Modal3.current.click()
        localStorage.removeItem('Me');
        localStorage.removeItem('result');
        history.push("/connexion")
    }

    const handleToConnect = (e) =>{
        history.push("/connexion")
    }

    const handeleSearch = (e) =>{
        e.preventDefault()
        if (person != '') {
            if ( !myRegex.test(person) ){
                console.log("non");
                alert(messageShow)
            }else{
                console.log(person);
                showPerson.current.click()                 
            }
           
        }

    }

    return (
        <header className='header container'>
            <div className='my-status'>
                <img className='my-logo' src={logo} alt='logo'/> 
                {
                    getUser() === false  || getUser().success === false ? 
                    <div style={{cursor:'pointer',textTransform: 'none',fontSize: '13px'}} onClick={handleToConnect} className='my-user'>
                        {/* <span className="iconify" data-icon="clarity:disconnected-line"></span>  */}
                        <span style={{color:'#ff000073'}} className="iconify" data-icon="emojione-monotone:loudly-crying-face"></span><br></br> vous êtes déconnecter
                    </div>

                    :
                    <div data-bs-toggle="modal" data-bs-target="#deconnect" className='my-user'>
                        <span style={{color: "#173fd4",margin:'0px'}} className="iconify" data-icon="carbon:user-online"></span>
                        <span style={{color:'#0d004e'}} >{getUser().result.name}</span>
                    </div>

                }
                              
            </div>

            <div className='logo-s'>
                <form onSubmit={handeleSearch} className='search'>
                    <button type="submit" className='button-s'><SearchIcon className='icon-s'></SearchIcon></button>
                    <input
                        type='text'
                        placeholder="Nom d'un Utilisateur"
                        onChange={e =>{setperson(e.target.value)}}
                    />
                </form>
                <div>
                    {
                        getUser() === false  || getUser().success === false ?
                            ""
                        :  <Button onClick={handleAdd} active className='my-btn' variant="success"> Ajout Une photo </Button>
                    }
                </div>
            </div>
            <AddPic 
                x={x} setx={setx} 
                AddImage={AddImage} 
                functions={functions}
            />
            {
                getUser() === false  || getUser().success === false ? <Button type="button" className="my-btn btn2" data-bs-toggle="modal" data-bs-target="#exampleModal"> Ajout Une photo </Button>
                : ''
            }
            <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Oups
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-emoji-frown" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                        </svg>
                        </h5>
                        <button ref={Modal} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Désoler connectez vous pour ajouter une nouvelle photo
                    </div>
                    <div className="modal-footer">
                        <button onClick={handleConnect} type="button" className="btn btn-outline-success">se connectez</button>
                    </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="deconnect"  aria-labelledby="deconnectId" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deconnectId">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-emoji-frown" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                        </svg>
                        </h5>
                        <button ref={Modal3} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Voulez vous vraiment vous déconnecter ?
                    </div>
                    <div className="modal-footer">
                        <button onClick={handleDeconnect} type="button" className="btn btn-outline-success">se déconnectez</button>
                    </div>
                    </div>
                </div>
            </div>

            <Person 
                showPerson = {showPerson}
                person = {person}
                />

        </header>
    )
}

export default Header
