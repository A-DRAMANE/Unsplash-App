import Axios from 'axios'
import { setResult } from '../localStorage/setData'
const host = 'localhost';
const port = 80;
const paht = '/API/txt.php'
export let resultat = false;

export const getAllUser = () =>{

    fetch("http://"+host+":"+port+paht+"?callAll")
        .then((response) => response.json())
        .then((response) => {
            let USER = JSON.parse(response)
            return USER;
        })
        .catch((response) =>{
             console.log("ERREUR CHARGEMENT",response)
             return false
            })
}

export const AddNewUser = async (mail,name,pass) =>{

    let user = {mail,name,pass}

    await fetch("http://localhost:8000/api/register",{
        method:'POST',
        body:JSON.stringify(user),
        headers:{
            "Content-Type":'application/json',
            "Accept":'application/json'
        }
    }).then((response) => response.json())
    .then(response =>{
        resultat = response;
        setResult(resultat);
        console.log(response);})

    // Axios.get("http://"+host+":"+port+paht+"?AddUser&mail="+mail+"&name="+name+"&pass="+pass)

}
export const LogIn = async (name,pass) =>{

    let user = {name,pass}

    await fetch("http://localhost:8000/api/logIn",{
        method:'POST',
        body:JSON.stringify(user),
        headers:{
            "Content-Type":'application/json',
            "Accept":'application/json'
        }
    }).then((response) => response.json())
    .then(response =>{
        resultat = response;
        setResult(resultat)
    })

    // Axios.get("http://"+host+":"+port+paht+"?AddUser&mail="+mail+"&name="+name+"&pass="+pass)

}

export const AddNewPic = (id,image) =>{

    fetch("http://"+host+":"+port+paht+"?AddPic&id="+id+"&image="+image)
    
}