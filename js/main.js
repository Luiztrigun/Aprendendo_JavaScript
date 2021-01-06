/* 
var nome = "Luiz Felipe";
var n1 = 33;
var frase = " Japão é o melhor time do mundo ";
var lista=["pera","uva","maça"];

alert("Seja Bem Vindo " + nome );
alert(frase.replace("Japão" , "Brasil"));
console.log(n1);
console.log(frase.replace("Japão" , "Brasil").toUpperCase());// deixa todas em maiusculo
//listas
console.log(lista);
console.log(lista[1]);
lista.push("laranja");//lista.pop() tira da lista
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));
var fruta = {nome: "maça" , cor: "verde"};
console.log(fruta.nome);
var frutas = [{nome: "maça" , cor: "verde"},{nome: "pera" , cor: "amarela"}];
console.log(frutas[1].nome);
console.log(frutas);
*/
/*
//condição
var idade = prompt("Qual a sua idade"); //recebe o valor e atribui a idade
if(idade>=18){
    alert(" Maior de idade ");
}else{
    alert("Menor de idade");
}
*/
/*
//repetição
var count=0;
while(count<5){
    console.log(count);
    count++;
}

var a;
for(a=1;a<6;a++){
    alert(a);
}
*/
/*
//date
var d = new Date();
alert(d);
alert(d.getDate()+ " /" + (d.getMonth()+1) + " /"+ d.getFullYear() );
*/

//funções
/*
function soma(n1,n2){
    return  n1+n2 ;
}
alert(soma(5,7));

function setReplace(frase, nome, novo_nome){
return frase.replace(nome,novo_nome);
}
alert(setReplace("Vai Japon","Japon","Brasil"));
*/
//variavel global com function
/*var validar=0 //variavel global, fora da function
function validaridade(idade){
    if(idade>=18){
        validar=true;
    }else{
        validar = false;
    }
}
var idade = prompt("Qaul a sua idade");
validaridade(idade);
alert("Sua idade para beber é " + validar);
*/
function clicar(){
   // alert("Obrigado por clicar ");
   document.getElementById("agradecer").innerHTML = "Obrigado por clicar , caso queira fazer uma pesquisa click aqui";
   //console.log(document.getElementById("agradecer"))
}
function redirecionar(){
    window.open("https://www.google.com.br");
    // window.location.href= "https://google.com.br"   // abre em cima da pagina atual;
}
function trocar(){
    document.getElementById("mouseover").innerHTML = "Valeu por passar aqui";  
}
function voltar(element){
    //elemento.innerHTML = "Passe o mause aqui";  
    element.innerHTML = "Valeu por sair daqui"; 
}
function change(element){
    console.log(element.value);
}