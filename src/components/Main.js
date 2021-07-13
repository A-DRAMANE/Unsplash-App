import React from 'react'
import '../css/Main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'
import image1 from '../images/casp2.jpg'
import image2 from '../images/fond-home - Copie.jpg'
import image3 from '../images/mosqBobo.jpg'
import image4 from '../images/Photo by quatro via Iwaria(1).jpg'
import image5 from '../images/Photo byaimeevia Iwaria.jpeg'
import image6 from '../images/Photo byaimeevia Iwaria(1).jpeg'
import image7 from '../images/Photo byaimeevia Iwaria(2).jpeg'
import image8 from '../images/Photo byTAMBAvia Iwaria.jpeg'
import image9 from '../images/pp - Copie.jpg'
import image10 from '../images/virgyl-sowah-E9NPWGBXM9o-unsplash2 - Copie.png'



function Main() {

    const imgClick = (e) =>{
        e.target.classList.toggle('opacity')
    }

    return (
        <div className='main conatainer'>
            <div>
                <div className='cart'>
                    <img src={image1} alt="image" className='img-fluid items'/>
                    <div className='overEff'
                        onClick={imgClick} >
                        <Button className='btn' variant="outline-danger">Supprimé</Button>
                        <p>ceci est un petit commentaire pour tout.</p>
                    </div>
                </div>
                <div className='cart'>
                    <img src={image2} alt="image" className='img-fluid items'/>
                    <div className='overEff'
                        onClick={imgClick} >
                        <Button className='btn' variant="outline-danger">Supprimé</Button>
                        <p>ceci est un petit commentaire pour tout.</p>
                    </div>
                </div>
                <div className='cart'>
                    <img src={image3} alt="image" className='img-fluid items'/>
                    <div className='overEff'
                        onClick={imgClick} >
                        <Button className='btn' variant="outline-danger">Supprimé</Button>
                        <p>ceci est un petit commentaire pour tout.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='cart'>
                    <img src={image4} alt="image" className='img-fluid items'/>
                    <div className='overEff'
                        onClick={imgClick} >
                        <Button className='btn' variant="outline-danger">Supprimé</Button>
                        <p>ceci est un petit commentaire pour tout.</p>
                    </div>
                </div>
                <div className='cart'>
                    <img src={image5} alt="image" className='img-fluid items'/>
                    <div className='overEff'
                        onClick={imgClick} >
                        <Button className='btn' variant="outline-danger">Supprimé</Button>
                        <p>ceci est un petit commentaire pour tout.</p>
                    </div>
                </div>
                <div className='cart'>
                    <img src={image6} alt="image" className='img-fluid items'/>
                    <div className='overEff'
                        onClick={imgClick} >
                        <Button className='btn' variant="outline-danger">Supprimé</Button>
                        <p>ceci est un petit commentaire pour tout.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='cart'>
                    <img src={image7} alt="image" className='img-fluid items'/>
                    <div className='overEff'
                        onClick={imgClick} >
                        <Button className='btn' variant="outline-danger">Supprimé</Button>
                        <p>ceci est un petit commentaire pour tout.</p>
                    </div>
                </div>
                <div className='cart'>
                    <img src={image8} alt="image" className='img-fluid items'/>
                    <div className='overEff'
                        onClick={imgClick} >
                        <Button className='btn' variant="outline-danger">Supprimé</Button>
                        <p>ceci est un petit commentaire pour tout.</p>
                    </div>
                </div>
                <div className='cart'>
                    <img src={image9} alt="image" className='img-fluid items'/>
                    <div className='overEff'
                        onClick={imgClick} >
                        <Button className='btn' variant="outline-danger">Supprimé</Button>
                        <p>ceci est un petit commentaire pour tout.</p>
                    </div>
                </div>
                <div className='cart'>
                    <img src={image10} alt="image" className='img-fluid items'/>
                    <div className='overEff'
                        onClick={imgClick} >
                        <Button className='btn' variant="outline-danger">Supprimé</Button>
                        <p>ceci est un petit commentaire pour tout.</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Main
