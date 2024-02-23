
const error404 = (req,res) =>{
    res.status(404).render("error", 
    {code:"Error 404 notFound",
    errortext: "la ruta que buscas no existe"} );
};

export default {
    error404,
} 