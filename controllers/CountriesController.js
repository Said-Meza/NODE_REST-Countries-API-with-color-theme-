import url from '../js/url.js'
import axios from 'axios'

const getallCountries =(req,res)=>{
    
    axios.get(url.GETALL)
    .then(response=>{
        const countries=response.data;
        
        res.render('index',{ countries })

    })
    .catch(err=>{
        console.log(err)
    })
    

}

const moreaboutcountry = (req,res)=>{

    const country = req.params.country;
    // console.log(country)

    // console.log(`${url.SEARCH}${country}`)

    const urlsearch=`${url.SEARCH}${country}`

    axios.get(urlsearch)
    .then(response=>{
       
        const more = response.data;
        
           console.log(more[0].name.common)

        res.render('more_about_country',{more})

    })
    
    .catch(err=>{
        console.log(err)
    })

}

export default{
    getallCountries,
    moreaboutcountry
}