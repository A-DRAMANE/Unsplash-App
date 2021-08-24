import { setResult, setCheckCharge,setData , setCurrentUser, setUser, setDeleteImage } from '../localStorage/setData'
const host = "http://localhost:";
const port = "8000";
const paht = "/api/"
export const urlMy = host+port+paht

export let resultat = false;
export let AllImages = false;
export let AllUser = false; 
export let del = false; 


export const AddNewUser = async (mail, name, pass) => {

    let user = { mail, name, pass }

    await fetch(urlMy+"register", {
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
            setUser(resultat)
            console.log(response);
        })

}
export const LogIn = async (name, pass) => {

    let user = { name, pass }

    await fetch(urlMy+"logIn", {
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
            setUser(resultat)
        })

}

export const AddNewPic = async (id, file, description) => {
    console.log(id, file, description);

    const formData = new FormData();
    formData.append('idUser', id);
    formData.append('file', file);
    formData.append('description', description);

    await fetch(urlMy+"addImages", {
        method: 'POST',
        body: formData
    })
        .then((response) => response.json())
        .then(response => {
            console.log(response);
            if (response === 1) {
                setCheckCharge(true)
            }
        }).catch((error) => {
            console.log("ERREUR", error);
            setCheckCharge(false)
        })

}

export const AllImg = async () => {

    await fetch(urlMy+"imageList", {
        method: 'POST',
    })
        .then((response) => response.json())
        .then(response => {
            console.log(response);
            AllImages = response;
            setData(AllImages);
        })

}

export const AllUsers = async () => {

    await fetch(urlMy+"users", {
        method: 'GET',
    })
        .then((response) => response.json())
        .then(response => {
            console.log(response);
            AllUser = response;
            setCurrentUser(AllUser)
        })

}

export const DeleteImg = async (id) => {

    const formData = new FormData();
    formData.append('id', id);

    await fetch(urlMy+"delededImg", {
        method: 'POST',
        body: formData
    })
        .then((response) => response.json())
        .then(response => {
            console.log(response);
            del = response;
            setDeleteImage(del);
        })

}