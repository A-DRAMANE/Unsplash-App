import React, { useEffect, useState} from 'react'
import '../css/Main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { getImages, getCurrentUser } from '../localStorage/getData'
import { AllImg, AllUsers } from '../API/fetchFonc'
import {Button} from 'react-bootstrap'


function Main() {

    const [DataImages, setDataImages] = useState([])
    const [DataUsers, setDataUsers] = useState([])
    let Auteur = '';
    
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

    return (
        <div className='main conatainer d-flex justify-content-center align-items-center'>
            <div className="row container justify-content-center">

                { getImages() ? DataImages.map(item => 

                    <div className='col-4 cart'>
                        <img ig={item.id} key={item.id} src={"http://localhost:8000/"+item.image_path} alt="image" className='img-fluid items'/>
                        <div className='overEff'
                            onClick={imgClick} >
                            <Button className='btn' variant="outline-danger">Supprimé</Button>
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
                                        onClick={e =>{
                                            console.log('salut jeune')
                                        } 
                                    } 
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
            </div>
            
        </div>
    )
}

export default Main
