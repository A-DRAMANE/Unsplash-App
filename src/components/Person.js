import React, { useRef, useEffect, useState} from 'react'
import { getImages } from '../localStorage/getData'
import '../css/Person.css'

function Person( {showPerson,person} ) {

    const MyURL = "http://localhost:8000/";

    
    return (
        <div className="person">

            <button ref={showPerson} type="button" className="btn btn-primary person-btnShow" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">{person}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body my-modalPerson">
                           {
                               person != '' ? getImages().map( item =>
                                <div className='col-4 cart'>
                                    <span className="iconify my-eyes" data-icon="icon-park-outline:eyes"></span>
                                    <img download id={item.id} key={item.id} src={MyURL+item.image_path} alt="image_here" className='img-fluid items'/>
                                    {/* <div className='overEff'
                                        onClick={imgClick} >
                                        <Button onClick={e => handleSetId(item.id)} className='btn' data-bs-toggle="modal" data-bs-target="#Modal2" variant="outline-danger">Supprimé</Button>
                                        <div>
                                            <p>{item.description}</p>
                                            <p className='d-flex justify-content-between'>
                                                {
                                                    DataUsers.forEach(element => {
                                                        if (element.id === item.idUser) {
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

                                    </div> */}
                                </div>
                                ) : ""
                           } 
                        </div>
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Understood</button>
                        </div> */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Person
