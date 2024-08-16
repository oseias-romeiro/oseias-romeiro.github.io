
const code = 'C38391BF9EE44AEF8A39523FE091C999';
const token = 'd3ff3c2c-f0c4-4f62-947f-e0a4e28a39e98e2ef3c6404d9b0de840c28bfa6cc47a03da-ae8e-45ae-8ded-216cf6386356';

const options = {
    method: 'POST',
    headers: {
        accept: '*/*',
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        items: [
            {
                reference_id: 'coffe'+generateUniqueId(),
                name: 'Coffe',
                description: 'support developer',
                quantity: 1,
                unit_amount: 500
            }
        ],
        payment_methods: [{type: 'DEBIT_CARD'}, {type: 'BOLETO'}, {type: 'PIX'}],
        redirect_url: 'https://oseias-romeiro.github.io/buymeacoffe?payed=yes'
    })
};

const createCheckout = ()=>{
    fetch('https://sandbox.api.pagseguro.com/checkouts', options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            window.location.href = response.links.find(link => link.rel === 'PAY').href;
        })
        .catch(err => {
            alert('Error with payment, try again later');
            console.error(err);
        })
    ;
}



const openThanksModal = ()=>{
    console.log("Thanks Modal");
    document.getElementById('thanksModal').style.display = 'block';
}
const closeThanksModal = ()=>{
    document.getElementById('thanksModal').style.display = 'none';
}

const onBodyLoad = ()=>{
    if(window.location.search.includes('payed=yes')){
        openThanksModal();
    }
}
