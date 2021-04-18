export const TICK = ( lastUpdate, light ) => {
    return {
        type: 'TICK',
        lastUpdate: lastUpdate,
        light: light
    };
};
export const INCREMENT = ( ) => {


    const cat = localStorage.getItem('ras');
    console.log("[ras]", cat)
    var cok = document.cookie.match('token');
    console.log("[cok]", cok)
    return {
        type: 'INCREMENT',
       
        
    };
};
export const DECREMENT = ( ) => {
    return {
        type: 'DECREMENT',
       
        
    };
};
export const RESET = ( ) => {
    return {
        type: 'RESET',
       
        
    };
};