export const randomChar = ()=>{
    const str ="qwertyuiopasdfghjklzxcvbnm"
    const randomIndex = Math.floor(Math.random() * str.length);
    return str[randomIndex]
}