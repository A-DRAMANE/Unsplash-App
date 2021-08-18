import React, { useRef, useEffect, useState} from 'react'
import '../css/Main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { getImages, getCurrentUser, getUser } from '../localStorage/getData'
import { AllImg, AllUsers, DeleteImg } from '../API/fetchFonc'
import { useHistory } from 'react-router-dom'
import {Button} from 'react-bootstrap'


function Main({functions}) {

    const MyURL = "http://localhost:8000/";

    const [addImgStatus, setaddImgStatus] = functions;
    let history = useHistory()
    const [DataImages, setDataImages] = useState([])
    const [DataUsers, setDataUsers] = useState([])
    const [MyImgId, setMyImgId] = useState()
    const [userPass, setuserPass] = useState("")
    const [loadStatus, setloadStatus] = useState(false)
    const Modal2 = useRef(null)
    const ImageToDownLoad = useRef(null)
    let Auteur = '';

    useEffect(() => {
        if (addImgStatus) {
            console.log(addImgStatus);
            images();
            setaddImgStatus(false)
        }
    }, [addImgStatus])
    
    const images = async () =>{

        if (!getImages()) {
            await AllImg();
            await AllUsers()
            setDataUsers(getCurrentUser())
            setDataImages(getImages())
        }
        if (DataImages.length == 0) {
            setDataUsers(getCurrentUser())
            setDataImages(getImages())
        }
    }
    images();

    const imgClick = (e) =>{
        e.target.classList.toggle('opacity')
    }

    const handleDelete = async (e) =>{
        if (userPass == '') {
            alert('Entrez votre mots de pass')
        } else {
            
            if (getUser().result.pass == userPass) {
                console.log(MyImgId,userPass,getUser());  
                setloadStatus(true);
                await DeleteImg(MyImgId);
                console.log(addImgStatus);
                setloadStatus(false);
                localStorage.removeItem('IMAGES');
                setaddImgStatus(true)
                Modal2.current.click()
            }
        }

    }

    const handleSetId = (e) =>{
        console.log(e);
        setMyImgId(e)
    }

    const handleConnect = (e) =>{
        Modal2.current.click()
        history.push("/connexion")
    }

    const handleDownLoadImg = (tag) =>{
        console.log(tag);
        let items = document.getElementsByClassName('items');
        // console.log(items);
        for(let i in items){
            console.log(items[i]);
         }
        DataImages.forEach(element => {
            // console.log(element);
            if (element.id == tag) {
                console.log(element);
            }
        });
    }

    return (
        <div className='main conatainer d-flex justify-content-center align-items-center'>
            <div className="row container justify-content-center">

                { getImages() ? DataImages.map(item => 

                    <div className='col-4 cart'>
                        <span className="iconify my-eyes" data-icon="icon-park-outline:eyes"></span>
                        <img download id={item.id} key={item.id} src={MyURL+item.image_path} alt="image" className='img-fluid items'/>
                        <div className='overEff'
                            onClick={imgClick} >
                            <Button onClick={e => handleSetId(item.id)} className='btn' data-bs-toggle="modal" data-bs-target="#Modal2" variant="outline-danger">Supprimé</Button>
                            <div>
                                <p>{item.description}</p>
                                <p className='d-flex justify-content-between'>
                                    {
                                        DataUsers.forEach(element => {
                                            if (element.id == item.idUser) {
                                                Auteur = element.name;
                                                }
                                            }
                                        )
                                    } <span>par ~{Auteur}</span>
                                    <svg 
                                        onClick={ e => handleDownLoadImg(item.id) } 
                                    xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                    </svg>
                                </p>                                
                            </div>

                        </div>
                    </div>
                    ) : <div className='load'></div> 
                    
                } 

                <div className="modal fade" id="Modal2" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                {
                                    getUser() == false  || getUser().success == false ?
                                    <h5 className="modal-title" id="exampleModalLabel"> Oups    
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-emoji-frown" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                                        </svg>
                                    </h5> :
                                    <h5 className="modal-title" id="exampleModalLabel"> êtes-Vous sûr de <strong className='pe-3'>SUPPRIMER ?</strong>     
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-emoji-frown" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                                        </svg>
                                    </h5>
                                }
                                
                                <button ref={Modal2} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            {
                                getUser() == false  || getUser().success == false ?
                                <div className="modal-body">
                                    Désoler connectez vous pour supprimer des photos
                                </div> :
                                <div className="modal-body conForm">
                                    <input placeholder='Mot de passe' type='password'
                                        onChange={e => setuserPass(e.target.value)}
                                    />
                                    {
                                        loadStatus == true ? 
                                        <div className='load'></div> :
                                        " "
                                    }
                                </div>                                
                            }

                            {
                                getUser() == false  || getUser().success == false ?
                                <div className="modal-footer">
                                    <button onClick={handleConnect} type="button" className="btn btn-outline-success">se connectez</button>
                                </div> :
                                <div className="modal-footer">
                                    <button style={{width: 'auto',height: '47px'}} type="button" className="btn btn-secondary my-btn" data-bs-dismiss="modal">ANNULER</button>
                                    <button onClick={handleDelete} style={{backgroundColor:'#9d1a1a96',border:'none'}} type="button" className="btn btn-primary">supprimer</button>
                                </div>                                
                            }

                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Main
