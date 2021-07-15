export function getResult () {
    let result = localStorage.getItem('result');
    if(result !== null) {
        let data = JSON.parse(result);
        return data;
    }else return false;
}
