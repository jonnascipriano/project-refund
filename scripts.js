// Seleciona os elementos do formulário
const form = document.querySelector('form');
const amount = document.getElementById('amount');
const expense = document.getElementById('expense');
const category = document.getElementById('category');

// Captura o evento de input para formatar o valor
amount.oninput = () =>{
    // Remove todos os caracteres que não são dígitos
    // \D corresponde a qualquer caractere que não seja um dígito
    // g é a flag de global, que indica que a substituição deve ser feita em toda a string
    let value = amount.value.replace(/\D/g,"");

    // Transformar o valor em centavos.
    value = Number(value)/100;

    // Atualiza o valor do input
    amount.value = formatCurrencyBRL(value);
}

function formatCurrencyBRL(value){
    // Formata o valor no padrão BRL (R$)
    value = value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    // Retorna o valor formatado
    return value;
}

// Captura o evento de submit do formulário
form.onsubmit = (event) =>{
    // Não recarrega a página ao enviar o formulário
    event.preventDefault();
    
    // Cria um objeto com os dados do formulário(nova despesa)
    const newExpense = {
        id: new Date().getTime(),
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        amount: amount.value,
        created_at: new Date()
    }

    // Chama a função que irá adicionar o item na lista
    expenseAdd(newExpense);
}

function expenseAdd(newExpense){



    try{

    } catch {
        alert("Não foi possível adicionar a despesa")
        console.log(error)
    }
}