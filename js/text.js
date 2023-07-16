// Start when the document is ready
if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded' , start);
}
else {
    start();
}

//  => start
function start() {
    addEvents();
}

//  => Update & Rerender
function update() {
    addEvents();
    updateTotal();
}

// => Add events
function addEvents() {
    // Change item quantity
    let camerasQuantity = document.querySelectorAll('.camerasQuantity');
    camerasQuantity.forEach(e => {
        e.addEventListener('change', handle_changeItemQuantity);
    });
}

// => Handle events funcations
function handle_changeItemQuantity() {
    if(isNaN(this.value) || this.value <= 0) {
        this.value = 0;
    }
    this.value = Math.floor(this.value);
    update();
}

// => Update & Rerender funcations
function updateTotal() {
    var num1 = Number(document.querySelector('.quantity1').value);
    var num2 = Number(document.querySelector('.quantity2').value);
    var total = num1 + num2;
    document.querySelector('.totalQuantity').value = total;

    if(total <= 4) {
        let pricr1 = 345;
        document.querySelector('.totalprice').value = pricr1;
        console.log(pricr1)
    }
    else if(total >= 5 && total <= 16) {
        let pricr1 = 862;
        document.querySelector('.totalprice').value = pricr1;
        console.log(pricr1)
    }
    else if(total >= 17 && total <= 32) {
        let pricr1 = 1495;
        document.querySelector('.totalprice').value = pricr1;
        console.log(pricr1)
    }
    else if(total >= 33 && total <= 64) {
        let pricr1 = 2070;
        document.querySelector('.totalprice').value = pricr1;
        console.log(pricr1)
    }
    else if(total >= 65) {
        let pricr1 = 2875;
        document.querySelector('.totalprice').value = pricr1;
        console.log(pricr1)
    }
    console.log(total)
}