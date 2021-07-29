import React,{ useRef, useState } from 'react'
import logo from '../images/my_unsplash_logo.svg'
import SearchIcon from '@material-ui/icons/Search';
import {Button} from 'react-bootstrap'
import AddPic from './AddPic'
import '../css/Header.css'

function Header() {

    const AddImage = useRef(null)
    const [x, setx] = useState(false)

    const handleAdd = (e) =>{
        AddImage.current.style.display = 'flex'
        setx(true)
        console.log(AddImage);
    }

    const handleShearch = (e) =>{
        e.preventDefault()
        console.log('cest zooo');
    }

    return (
        <header className='header container'>
            <img src={logo} alt='logo'/>
            <div className='logo-s'>
                <form onSubmit={handleShearch} className='search'>
                    <button className='button-s'><SearchIcon className='icon-s'></SearchIcon></button>
                    <input
                        type='text'
                        placeholder='Search by name'
                    />
                </form>
                <div>
                    <Button onClick={handleAdd} active className='my-btn' variant="success">Add a photo</Button>
                </div>
            </div>
            <AddPic x={x} setx={setx} AddImage={AddImage}/>
        </header>
    )
}

export default Header
