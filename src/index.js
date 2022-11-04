const Web3 = require('web3')

window.onload = function() {
    // Variables
    let web3;
    let from;

    //Elements
    const connectButton = document.getElementById('connect');
    const content = document.getElementById('content');
    const account = document.getElementById('account');

    //Form
    const form = document.getElementById('send');
    const recipientInput = document.getElementById('recipient');
    const amountInput = document.getElementById('amount');

    //Functions
    const connect = async function () {
        if(window.ethereum) {
            try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });

            web3 = new Web3(window.ethereum);
            let accounts = await web3.eth.getAccounts();

            from = accounts [0];            

            content.style.display = 'initial';
            connectButton.style.display = 'none';
            account.innerText = from;
            } catch(err){
                alert('Has rechazado la conexión')
            }
        } else {
            alert('Necesitas Instalar Metamask. Descarga Metamask!!');
            }
        };
        
        const transact = function (event) {
            event.preventDefault();

            const amount = amountInput.value;
            const recipient = recipientInput.value;

            if (Number(amount <=0)) {
                alert('valor no permitido');
                return;
            }
            if (!web3.utils.isAddress(recipient)){
                alert('direccion invalida')
                return;
            }

            web3.eth.sendTransaction({
                from: from,
                to: recipient,
                value: amount,

            })
        };
    

    //Listeners
    connectButton.onclick = connect;
    form.onsubmit = transact; 


};