import Axios from 'axios'
import { setResult, setCheckCharge, setData } from '../localStorage/setData'
const host = 'localhost';
const port = 80;
const paht = '/API/txt.php'

export let resultat = false;
export let AllImages = false;


export const AddNewUser = async (mail, name, pass) => {

    let user = { mail, name, pass }

    await fetch("http://localhost:8000/api/register", {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        }
    }).then((response) => response.json())
        .then(response => {
            resultat = response;
            setResult(resultat);
            console.log(response);
        })

}
export const LogIn = async (name, pass) => {

    let user = { name, pass }

    await fetch("http://localhost:8000/api/logIn", {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        }
    }).then((response) => response.json())
        .then(response => {
            resultat = response;
            setResult(resultat)
        })

}

export const AddNewPic = async (id, file, description) => {
    console.log(id, file, description);

    const formData = new FormData();
    formData.append('idUser', id);
    formData.append('file', file);
    formData.append('description', description);

    await fetch("http://localhost:8000/api/addImages", {
        method: 'POST',
        body: formData
    })
        .then((response) => response.json())
        .then(response => {
            console.log(response);
            if (response == 1) {
                setCheckCharge(true)
            }
        }).catch((error) => {
            console.log("ERREUR", error);
            setCheckCharge(false)
        })

}

export const AllImg = async () => {

    await fetch("http://localhost:8000/api/imageList", {
        method: 'POST',
    })
        .then((response) => response.json())
        .then(response => {
            console.log(response);
            AllImages = response;
            setData(AllImages);
        })

}