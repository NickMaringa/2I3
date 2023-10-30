let a = "";
let b = "";
let valor = "";
let executar = "";
let temPonto = false;
let desligada = false;
soma = (a,b) => Number(a) + Number(b);
sub = (a,b) => Number(a) - Number(b);
mult = (a,b) => Number(a) * Number(b);
div = (a,b) => Number(a) / Number(b);
raiz = a => Math.sqrt(a);
equacao2Grau = (a,b,c) =>{
    let delta = sub(mult(b,b),mult(4,mult(a,c)));
    if (delta < 0) return "Não possui raiz Real.";
    if (delta == 0) return "x1 = x2 = " + div(-b,mult(2,a));
    return "x1 = " + div(soma(-b,raiz(delta)),mult(2,a)) + 
           " x2 = " + div(sub(-b,raiz(delta)),mult(2,a));
}

function mostrar_resultado(){
    document.getElementById("resultado").value = valor;
}
function raiz_quadrada(){
    valor = raiz(valor);
    mostrar_resultado();
    valor = "";
}
function calcular(){
    if(desligada) return;
    if(executar != ""){
        b = valor;
        if(executar == "soma") valor = soma(a,b);
        if(executar == "sub") valor = sub(a,b);
        if(executar == "div") valor = div(a,b);
        if(executar == "mult") valor = mult(a,b);
        mostrar_resultado();
        executar = "";
        a = "";
        b = "";
        valor = "";
        temPonto = false;
    }
}
function desliga(){
    if(desligada){
        desligada = false;
        zerar();
    }else{
        zerar();
        mostrar_resultado();
        desligada = true;
    }
}

function porcentagem(){
   if(executar == "mult"){
       b = valor;
       valor = div(mult(a,b),100);
       mostrar_resultado();
       valor = "";
   }
}
function zerar(){
    if(desligada) return;
    a = "";
    b = "";
    valor = "0";
    mostrar_resultado();
    executar = "";
    valor = "";
}
function operacao(op){
    if(desligada) return;
    executar = op;
    a = valor;
    valor = "";
}
function digitando(tecla){
    if(desligada) return;
   if (tecla == "."){
       if(!temPonto) {
         valor = valor + tecla;
         mostrar_resultado();
         temPonto = true;
       }
       return;
   }
   valor = valor + tecla;
   mostrar_resultado();
}
   conset calcular_equacao = () =>{
      if(a != "" && a != "0"){
       alert(sa+a+"x2" +sb+b "x" +sc+c "= 0")
         if(a != "+") a = -(Number(a)) else {a=Number(a)};
         if(a != "+") b = -(Number(b)) else {b=Number(b)};
         if(a != "+") c = -(Number(c)) else  {c=Number(c)};
         document.getElementById ("raiz").innerHTML = equacao2Grau(a,b,c);
      }
    }

const set_sinal_a = () => {
   a + document.getElementById("sinal_a").value
   calcular_equacao();

}
const set_sinal_b = () => {
    a + document.getElementById("sinal_b").value
    calcular_equacao();
 
 }
 const set_sinal_c = () => {
    a + document.getElementById("sinal_c").value
    calcular_equacao();
 
 }
 const set_valor_a = () => {
    a + document.getElementById("sinal_a").value
    calcular_equacao();
 
 }
 const set_valor_b = () => {
    a + document.getElementById("sinal_b").value
    calcular_equacao();
 
 }
 const set_valor_c = () => {
    a + document.getElementById("sinal_c").value
    calcular_equacao();
 
 }





