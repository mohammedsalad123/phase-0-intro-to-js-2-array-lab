// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]
    
function  destructivelyAppendCat(name){
    cats.push('Ralph')
}
function destructivelyPrependCat(name){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop("Garfield")
}
function destructivelyRemoveFirstCat(){
    cats.shift("Milo")
}
function appendCat(name){
   name = [...cats,"Broom"]
    return name
}
    
function prependCat(name){
    name=["Arnold",...cats]
    return name
}
function removeLastCat(){
    const copyOfcats = [...cats];

    copyOfcats.pop();

    return copyOfcats;
}
function removeFirstCat(){
    const copyOfcats = [...cats];

    copyOfcats.shift();

    return copyOfcats;
}
