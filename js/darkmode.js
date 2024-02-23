const rootElement = document.documentElement;

   const darkmode =()=>{
        rootElement.style.setProperty('--Element', 'hsl(209, 23%, 22%)');
        rootElement.style.setProperty('--Background', 'hsl(207, 26%, 17%)');
        rootElement.style.setProperty('--Text', 'white');
    }      
    
 const   ligthmode=()=>{
        rootElement.style.setProperty('--Element', 'hsl(0, 0%, 100%)');
                rootElement.style.setProperty('--Background', 'hsl(0, 100%, 98%)');
                rootElement.style.setProperty('--Text', ' hsl(200, 15%, 8%)');
                
    }     
    
    export default {
        darkmode,
        ligthmode
    }

