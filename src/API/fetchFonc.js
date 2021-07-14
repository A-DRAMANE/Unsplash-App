import Axios from 'axios'
const host = 'localhost';
const port = 80;
const paht = '/API/txt.php'

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

export const AddNewUser = (mail,name,pass) =>{

    Axios.get("http://"+host+":"+port+paht+"?AddUser&mail="+mail+"&name="+name+"&pass="+pass)

}

export const AddNewPic = (id,image) =>{

    fetch("http://"+host+":"+port+paht+"?AddPic&id="+id+"&image="+image)
    
}