let lista_nome = ["Isabele","Sara","Alissia","Sophia","Amanda"];
function atualizar_lista(){
    let nomes ="";

    if(lista_nome.length > 0){
        for(let i=0; i < lista_nome.length; i++){
            nomes += lista_nome[i] + "<br>";
        }
        document.getElementById("lista").innerHTML = nomes;
        return;
    }
    document.getElementById("lista").innerHTML = "Lista Vazia";
}
function insere_primeiro (){
    let nomes = document.getElementById ("nome").value
if (nomes!=="");{
   lista_nome= [];
    atualizar_lista;
   }
 }

function deletar_primeiro (){
    let nomes = document.getElementById ("nome").value
if (lista_nome.nome.length > 0) {
    lista_nome.shift ();
    document.getElementById("nome").value
    atualizar_lista ();
}
 }

 function deletar_ultimo (){
    if (lista_nome.length > 0) {
        lista_nome.pop ();
        atualizar_lista ();
    }
     }
     function insere_ultimo (){
     if(lista_nome.length > 0) {
       lista_nome.shift();
       document.getElementById("nomes").value = ""
       atualizar_lista();

     }

     }
        
         function ordenar_za (){
            if (lista_nome.length > 0) {
                lista_nome.sort ();
                lista_nome.reverse ();
                atualizar_lista ();
            }
             }
             function deletar_nome () {
        let nome = document.getElementById("nome").value;
        if(nome != ""){
            for(let i=0; i < lista_nome,length; i++){
             if(nome == lista_nome[i]) lista_nome.splice(i,i);
  }
        atualizar_lista();
        }

             }