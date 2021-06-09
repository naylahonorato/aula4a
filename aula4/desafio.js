
function podeSubir(altura,acompanhado){
if( altura >= 140 && altura <200){
    return"Pode subir";
} else if( altura <140 && altura>120 && acompanhado== true){
    return"Pode subir,acompanhado";
}else {
    return"não subir";
}
}

console.log(podeSubir(135,true));