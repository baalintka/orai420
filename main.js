let LISTA=[]
let POKEMON=[]
$(function(){
    console.log("betöltés után ",LISTA);
    let vegpont="adat.json";
    adatbeolvasas(vegpont,LISTA,megjelenit);
    console.log("adatbeolvas() metodus utan",LISTA);
    let pokvegpont="https://pokeapi.co/api/v2/pokemon/ditto";
    adatbeolvasas(vegpont,POKEMON,pokemonmegjelenit)
    adatTorles(vegpont,2);

});
function adatTorles(vegpont,id){
    vegpont=vegpont+"/"+id;
    console.log(vegpont)
    fetch(vegpont,{
        method:"DELETE",
        
    })
        .then((response)=> response.json())
        .then((data) => {
        console.log(data);
        
        lista=data;
        callbackFv(lista);
        console.log("fetch adatbeolvasás után", lista);
        
        })
        .catch((error)=> console.log(error));


}
function adatbeolvasas(vegpont,lista,callbackFv){
    
    fetch(vegpont,{
        method:"GET",
        
    })
        .then((response)=> response.json())
        .then((data) => {
        console.log(data);
        
        lista=data;
        callbackFv(lista);
        console.log("fetch adatbeolvasás után", lista);
        
        })
        .catch((error)=> console.log(error));


}
function megjelenit(lista){
    console.log("megjelenit",lista);
}
function pokemonmegjelenit(adat){
    console.log(adat)
    console.log(adat.sprites)
   // let eleres=adat.sprites.front_default;
   // let pokemonnev=adat.name;
    const Pokobj={
        eleres:adat.sprites.front_default,
        pokemonnev:adat.name,


    }
    let megjelenit=$(".pokemon");
    let pokenev=`<h1>${Pokobj.pokemonnev}</h1>`+`<img src=${Pokobj.eleres}>`;
    
    console.log(pokenev)
    megjelenit.html(pokenev);
}