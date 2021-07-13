import React,{ useRef, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap'
import { Annim1, Annim2, rev } from '../gsapAnnim'
import '../css/AddPic.css'

function AddPic({ AddImage,x, setx }) {


    const formDiv = useRef(null)
    useEffect(() => {
        x && Annim2(AddImage)
    }, [x])

    const handleCansel = (e) =>{
        e.preventDefault()
        rev(AddImage)
        setx(false)
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

                <div className='buttons'>
                    <Button onClick={handleCansel} className='btnCans' variant="success" type="submit">
                        Annuler
                    </Button>
                    <Button  className='btnAdd' variant="success" type="submit">
                        Ajouter
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default AddPic
