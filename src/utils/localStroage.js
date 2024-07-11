export const storeItemToLocalStorage = movie =>{
    localStorage.setItem('movieList',JSON.stringify(movie))
}

export const getItemFromLocalStorage =()=>{
    const str = localStorage.getItem('movieList')
    return str?JSON.parse(str):null;
}