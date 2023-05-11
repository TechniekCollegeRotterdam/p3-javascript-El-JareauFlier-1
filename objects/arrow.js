const marvels = ['captain america','iron','thor'];
const addMarvel = () =>{
    marvels.push('spiderman');
}
addMarvel();

for(let marvel of marvels){
    console.log(marvel);
}