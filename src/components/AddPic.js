import React,{ useRef, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button } from 'react-bootstrap'
import { Annim2, rev, imgAnniView } from '../gsapAnnim'
import '../css/AddPic.css'
import { AddNewPic } from '../API/fetchFonc'
import { getCheckCharge } from '../localStorage/getData'

function AddPic({ AddImage,x, setx }) {

    console.log(getCheckCharge());
    const [description, setDescription] = useState('')
    const [imageSelected, setImageSelected] = useState(null)
    const [baseImage, setBaseImage] = useState("");
    const [charge, setCharge] = useState(null)
    const [status, setStatus] = useState(0)

    const formDiv = useRef(null)
    const imgToAdd = useRef(null)

    useEffect(() => {
        x && Annim2(AddImage)
    }, [x])
    useEffect(() => {
        imgAnniView(imgToAdd)
        console.log(baseImage);
    }, [baseImage])
    useEffect(() => {
        console.log(charge);
        if (status!==0) {
            setCharge(getCheckCharge())
        }
        
    }, [status])

    const handleCansel = (e) =>{
        e.preventDefault();
        setBaseImage("");
        setCharge(null);
        setStatus(0);
        rev(AddImage);
        setx(false);
    }

    const handleLoad = async (e) =>{
        e.preventDefault();
        if (description.length > 2) {
            if (imageSelected !== null) {
                setCharge(false);
                await AddNewPic(5,imageSelected,description);
                setStatus(status + 1)
            } else {
                alert("selectionnez une image et decrivez la correctement, au moins 3 lettres.")
            }
        }else{
            alert("selectionnez une image et decrivez la correctement, au moins 3 lettres.")
        }
        
    }

    const handleImg = async (e) =>{
        const file = e.target.files[0];
        let base64 = await convertBase64(file);
        setImageSelected(file);
        setBaseImage(base64)
    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
    
          fileReader.onload = () => {
            resolve(fileReader.result);
          };
    
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
      };

    return (
        <div ref={AddImage} className='addPic'>
            <Form ref={formDiv} onSubmit={e => handleLoad(e)} className="formAdd">
                <h2>Ajouter une nouvelle image</h2>
                <Form.Group className="formCont" controlId="formBasicEmail">
                    <Form.Label className="addLabel">Description de l'image</Form.Label>
                    <Form.Control
                    onChange={e =>setDescription(e.target.value)}
                     type="text" placeholder="ex:Une personne qui sourit...." />
                </Form.Group>

                <div className='addPicBtn'>
                    
                   <input
                        className='input' 
                        type="file" 

                        placeholder="Choose a file"
                        accept=".jpg, .jpeg, .png"
                        onChange={(e) =>{
                            handleImg(e);
                    }}/>

                    <button>
                        <span className="iconify" data-icon="akar-icons:image" data-inline="false"></span>
                        selectionnez une image
                    </button>
 
                </div>

                { baseImage == "" ? "" : <img ref={imgToAdd} className="imageView" src={baseImage} height="200px"/> }

                {charge == false ? <div className='load'></div> : "" }
                {charge == true ?  <div>Votre image à été ajouter!</div> :'' }
                
                {charge !== true ?
                <div className='buttons'>
                    <Button onClick={handleCansel} className='btnCans' variant="success">
                        Annuler
                    </Button>
                    <Button className='btnAdd' variant="success" type="submit">
                        Ajouter
                    </Button>
                </div> :
                <Button
                onClick={handleCansel} 
                 className='btnAdd m-3' variant="success">
                    TERMINER
                </Button>
                }

            </Form>
        </div>
    )
}

export default AddPic
