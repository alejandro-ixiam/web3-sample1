const Web3 = require('web3')

window.onload = function() {
    // Variables
    let web3;
    let from;

    //Elements
    const connectButton = document.getElementById('connect');
    const content = document.getElementById('content');
    const account = document.getElementById('account');

    //Functions
    const connect = async function () {
        if(window.ethereum) {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            
            content.style.display = 'initial';
            connectButton.style.display = 'none';
            account.innerText = 'Insertar la cuenta aquí'
        } else {
            alert('Necesitas Instalar Metamask. Descarga Metamask!!')
        }
        
    
    }


    //Listeners
    connectButton.onclick = connect;


};