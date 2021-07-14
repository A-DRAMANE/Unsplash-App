import React,{ useRef, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button } from 'react-bootstrap'
import { Annim2, rev, imgAnniView } from '../gsapAnnim'
import '../css/AddPic.css'
import axios, { post } from 'axios'

function AddPic({ AddImage,x, setx }) {

    const [imageSelect, setImageSelect] = useState()
    const [baseImage, setBaseImage] = useState("");

    console.log("c",baseImage);



    const formDiv = useRef(null)
    const imgToAdd = useRef(null)
    useEffect(() => {
        x && Annim2(AddImage)
    }, [x])
    useEffect(() => {
        imgAnniView(imgToAdd)
        console.log(baseImage);
    }, [baseImage])

    const handleCansel = (e) =>{
        e.preventDefault()
        setBaseImage("")
        rev(AddImage)
        setx(false)
    }

    const handleAdd = async (e) =>{

        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setBaseImage(base64);
        let ok = JSON.stringify(base64);
        console.log('S',ok);
        const AddPic = {
            image:JSON.stringify(base64),
            id:101
        }

        let AddPi = JSON.stringify(AddPic)
        //

        let formData = new FormData()
        formData.append('file',base64)
        const config = {
            headers: {'Content-Type': 'multipart/form-data' }
        }


        /*post("http://localhost:80/API/txt.php",formData,config).then(res =>{
            console.log(res.data);
        })*/

        fetch("http://192.168.1.10/API/txt.php",{
            method: 'post',
            body: {
                data:'salut'
            }
        }).then((response) => response.json())
        .then(response =>{console.log(response);})

        // axios.post("http://localhost/API/txt.php",{
        //         'data': 'test'})
        //     .then(function (response) {
        //         //handle success
        //         console.log(response.data);
        //     })
        //     .catch(function (response) {
        //         //handle error
        //         console.log(response);
        //     });
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

    const handleLoad = (e) =>{
        e.preventDefault()
    }

    return (
        <div ref={AddImage} className='addPic'>
            <Form ref={formDiv} className="formAdd">
                <h2>Ajouter une nouvelle image</h2>
                <Form.Group className="formCont" controlId="formBasicEmail">
                    <Form.Label className="addLabel">Description de l'image</Form.Label>
                    <Form.Control type="text" placeholder="ex:Une personne qui sourit...." />
                </Form.Group>

                <Form.Group className="formCont" controlId="formBasicPassword">
                    <Form.Label className="addLabel">LE lien URL de l'image</Form.Label>
                    <Form.Control type="password" placeholder="https://www.w3schools.com/php/php_mysql_select.png" />
                </Form.Group>

                <div className='addPicBtn'>
                    
                   <input
                        className='input' 
                        type="file" 

                        placeholder="Choose a file"
                        accept=".jpg, .jpeg, .png"
                        onChange={(e) =>{
                            handleAdd(e)
                    }}/>

                    <button>
                        <span className="iconify" data-icon="akar-icons:image" data-inline="false"></span>
                        selectionner une image
                    </button>
 
                </div>

                { baseImage == "" ? "" : <img ref={imgToAdd} className="imageView" src={baseImage} height="200px"/> }  
                
                <div className='buttons'>
                    <Button onClick={handleCansel} className='btnCans' variant="success" type="submit">
                        Annuler
                    </Button>
                    <Button className='btnAdd' variant="success" type="submit">
                        Ajouter
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default AddPic
