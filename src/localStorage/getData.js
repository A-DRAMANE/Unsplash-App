export function getResult () {
    let result = localStorage.getItem('result');
    if(result !== null) {
        let data = JSON.parse(result);
        return data;
    }else return false;
}

export function getCheckCharge () {
    let result = localStorage.getItem('checkCharge');
    if(result !== null) {
        let data = JSON.parse(result);
        return data;
    }else return false;
}

export function getImages () {
    let result = localStorage.getItem('IMAGES');
    if(result !== null) {
        let data = JSON.parse(result);
        return data;
    }else return false;
}


export function getCurrentUser () {
    let result = localStorage.getItem('currentUser');
    if(result !== null) {
        let data = JSON.parse(result);
        return data;
    }else return false;
}


export function getUser () {
    let result = localStorage.getItem('Me');
    if(result !== null) {
        let data = JSON.parse(result);
        return data;
    }else return false;
}
