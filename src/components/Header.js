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
    return (
        <header className='header'>
            <img src={logo} alt='logo'/>
            <div className='logo-s'>
                <div className='search'>
                    <SearchIcon className='icon-s'></SearchIcon>
                    <input
                        type='text'
                        placeholder='Search by name'
                    />
                </div>
                <div>
                    <Button onClick={handleAdd} active className='my-btn' variant="success">Add a photo</Button>
                </div>
            </div>
            <AddPic x={x} setx={setx} AddImage={AddImage}/>
        </header>
    )
}

export default Header
