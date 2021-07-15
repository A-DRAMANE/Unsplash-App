import {gsap} from 'gsap'

//show element on x
export const Annim1 = (element) =>{

    gsap.from(element.current,{
        x:500,
        opacity:0,
        duration:2
    })

}

//masque element
export const Annim2 = (element) =>{

    gsap.fromTo(element.current,{
        y:-500,
    },{
        y:0,
        duration:1,
        display:'flex',

    })

}
export const rev = (element) =>{

    gsap.fromTo(element.current,{
        y:0,
    },{
        y:-500,
        duration:1,
        display:'none',

    })

}

//message annim
export const messageAnni = (element) =>{

    gsap.from(element.current,{
        x:15,
        opacity:0,
        duration:1,
        display:'block',

    })

}

//image view when addNewImg annim
export const imgAnniView = (element) =>{

    gsap.from(element.current,{
        y:15,
        opacity:0,
        duration:1,

    })

}