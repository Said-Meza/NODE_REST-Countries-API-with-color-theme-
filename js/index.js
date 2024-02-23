console.log("hola desde index.js")

import md from './darkmode.js'

const d=document,
    ls=localStorage;
let conta=0;


d.addEventListener("click", (e)=>{

    if(e.target.matches(".nav__darktext") || e.target.matches(".nav__img") || e.target.matches(".nav__darkmode")){
        e.preventDefault();
      
        // console.log("dando click en click")
        conta++;

        if(conta==1){
            md.darkmode()
            ls.setItem("modedark","1")
        }
        if(conta>1 ||conta ==0)
        {
            md.ligthmode()
            conta=0
            ls.setItem("modedark","0")
        }
    }
})

d.addEventListener("DOMContentLoaded",e=>{

    if(ls.getItem("modedark")=="1"){
        md.darkmode()
    }
})