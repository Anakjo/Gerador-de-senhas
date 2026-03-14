const senha = document.getElementById('senha');
const comprimento = document.getElementById('comprimento');
const minusculo = document.getElementById('minusc');
const maisculo = document.getElementById('maisc');
const numero = document.getElementById('num');
const especial = document.getElementById('esp');
const gerar = document.getElementById('gerar');

/*criação da senha, soma de caracteres de acordo com os checkbox*/

gerar.addEventListener('click', () => {
    let caracteresPermitidos = '';

    if (minusculo.checked) {
        caracteresPermitidos += 'abcdefghijklmnopqrstuvwxyz';
    }

    if (maisculo.checked) {
        caracteresPermitidos += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    if (numero.checked) {
        caracteresPermitidos += '0123456789';
    }

    if (especial.checked) {
        caracteresPermitidos += '!@#$%^&*()'
    }

    /*validação, para não ser vazio*/
    if (caracteresPermitidos === '') {
        alert('Selecione no mínimo uma opção.');
        return;
    }

    /*variável de armazenamento da senha*/
    let senhaGerada = '';

    /* conversão do tamanho da senha para números */
    let tamanho = parseInt(comprimento.value);

    /* Validação: impede que o usuário digite mais que 20 ou menos que 4 */
    if (tamanho > 20) {
        alert('O limite de caracteres é 20!');
        tamanho = 20;
        comprimento.value = 20;
    } else if (tamanho < 4 || isNaN(tamanho)) {
        alert('O mínimo de caracteres é 4!');
        tamanho = 4;
        comprimento.value = 4;
    }

    /*criação da senha até o limite imposto*/
    for (let i = 0; i < tamanho; i++) {
        let numAleatorio = Math.floor(Math.random() * caracteresPermitidos.length); /*arredondamento do math random + número aleatório*/
        senhaGerada += caracteresPermitidos[numAleatorio];
    }

    /*resultado mostrado*/
    senha.value = senhaGerada
});