// DOM - DOCUMENT OBJECT MODEL - HTML
console.log(document);
console.log(window);

const btn = document.querySelector("button");
btn.style.background = 'red';

btn.addEventListener('click', function(evento) {
    alert("Ola");
});

// -----------------------------------------
const btn2 = $("button");
btn2.css("background", 'blue');

btn2.on('click', function() {
    alert("Com Jquery");
});

// ------------------------------------------
let lista = [];
let id = null;


function listarDados() {
    const tbody = $("#table tbody");
    tbody.html('');
    lista.map((valor, indice) => {
        tbody.append(`
            <tr>
                <td>${indice}</td>
                <td>${valor.nome} - ${valor.email}</td>
                <td>
                    <button onclick="editar(${indice})" class="btn btn-primary">Editar</button>
                    <button onclick="excluir(${indice})" class="btn btn-danger">Excluir</button>
                  
                </td>
            </tr>
        `);
    });
    
}

function excluir(indice) {
    lista.splice(indice, 1);
    listarDados();
}

function editar(indice) {
    const dado = lista[indice];
    id = indice;
    
    $("#nome").val(dado.nome);
    $("#email").val(dado.email);
}

$("#form").on('submit', (evento) => {

    evento.preventDefault();
    const nome = $("#nome").val();
    const email = $("#email").val();

    if(nome === '') {
        alert("Nome obrigatório");
        return false;
    }

    if(email === '') {
        alert("Email obrigatório");
        return false;
    }

    // VALIDACAO DE EMAIL UNICO
    let checkEmail = false;
    lista.map((item, indice) => {
        if(item.email === email) {
            if(indice !== id) {
                checkEmail = true;
            }
        }
    });

    if(checkEmail) {
        alert("Email já existe na Listagem")
        return false;
    }

    if(id === null) {
        lista.push({
            nome: nome,
            email: email
        });
    } else {
        lista[id] = {
            nome: nome,
            email: email
        };
        id = null;
    }
   
    listarDados();
    $("#nome").val('');
    $("#email").val('');
    // VIA
    // REST FUL API 
    // GET - POST - PUT - DELETE   
    
});