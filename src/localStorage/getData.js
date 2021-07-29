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
