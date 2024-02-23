import url from '../js/url.js'
import axios from 'axios'

const getallCountries =(req,res)=>{
    
    axios.get(url.GETALL)
    .then(response=>{
        const countries=response.data;
        
        res.render('index',{ countries })

    })
    .catch(err=>{
        const errortext= err.response.statusText || "ocurrio un error",
        code = err.response.status;

        res.render('error',{ errortext, code})
    })
}

const moreaboutcountry = (req,res)=>{

    const country = req.params.country;
    const urlsearch=`${url.SEARCH}${country}`

    axios.get(urlsearch)
    .then(response=>{
        const more = response.data;
        res.render('more_about_country',{more})

    }).catch(err=>
    {
        const errortext= err.response.statusText || "ocurrio un error",
            code = err.response.status;

        res.render('error',{ errortext, code})
    })
}

const getRegion = (req,res)=>{
    
    const {region} = req.query;
    const urlregion =`${url.REGION}${region}` ;
    
    axios.get(urlregion)
    .then(response=>{

        const countries=response.data;      
        res.render('region',{ countries })

    })

    .catch(err=>{
       
        const errortext= err.response.statusText || "ocurrio un error",
            code = err.response.status;

        res.render('error',{ errortext, code})
    })
}

const getSearch= (req,res)=>{
    
    const {search} = req.query;
    const urlsearch =`${url.SEARCH}${search}` ;
    
    axios.get(urlsearch)
    .then(response=>{

        const countries=response.data;
        res.render('search',{ countries })

    })
    .catch(err=>{
       
        const errortext= err.response.statusText || "ocurrio un error",
            code = err.response.status;
        res.render('error',{ errortext, code})
    })
}

export default{
    getallCountries,
    moreaboutcountry,
    getRegion,
    getSearch
}