import React from 'react'
import logo from '../images/my_unsplash_logo.svg'
import SearchIcon from '@material-ui/icons/Search';
import {Button} from 'react-bootstrap'
import '../css/Header.css'

function Header() {
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
                    <Button className='my-btn' variant="success">Add a photo</Button>
                </div>
            </div>
            
        </header>
    )
}

export default Header
