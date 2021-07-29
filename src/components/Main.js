import React, { useEffect, useState} from 'react'
import '../css/Main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { getImages } from '../localStorage/getData'
import { AllImg } from '../API/fetchFonc'
import {Button} from 'react-bootstrap'


function Main() {

    const [DataImages, setDataImages] = useState([])
    
    const images = async () =>{
        if (!getImages()) {
            await AllImg();
            setDataImages(getImages())
        }
        if (DataImages.length == 0) {
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
                            <p>{item.description}</p>
                        </div>
                    </div>
                    ) : <div className='load'></div> 
                    
                } 
            </div>
            
        </div>
    )
}

export default Main
