function main() {
    let x  = location.search;
    let id = (x[4]);

    fetch(`https://215a765a-6a1f-43f1-ae8d-89f8ad9bd944.mock.pstmn.io/list/${id}`)
    .then((response) => response.json())
    .then((data) => (data.data[0]))
    .then((result) => {
        let x = document.getElementById('loading')
        document.getElementById('main').removeChild(x)
        let name = result.name;
        let price = result.price;
        let description = result.description;
        let img = result.img;
        document.getElementById('main').insertAdjacentHTML("beforeend", getHtml(img, name, description));
        //Amount Tracker
        const plusButton = document.querySelectorAll('.btn')[0];
        const numberBetween = document.querySelector('.amount');
        const minusButton = document.querySelectorAll('.btn')[1];
        let amount = 0;
        plusButton.addEventListener('click', function(){
            amount +=1;
            total += price;
            priceUpdate();
            numberBetween.innerHTML = amount;
        });
        minusButton.addEventListener('click', function(){
            if (amount > 0) {
                amount -= 1;
                total -=price;
                priceUpdate();
                numberBetween.innerHTML = amount;
            }
        });


        //Sliced or Not Tracker
        const sliced = document.querySelectorAll('.form-check-input')[0];
        const notSliced = document.querySelectorAll('.form-check-input')[1];
        let isSliced;
        let isChoosen = false;
        function isChecked() {
            sliced.checked?isSliced=true:isSliced;
            notSliced.checked?isSliced=false:isSliced;
            if (isChoosen == false && isSliced) {
                total+=0.5;
                priceUpdate();
                isChoosen = true;
            } else if (isChoosen && notSliced && isSliced == false) {
                total -= 0.5;
                priceUpdate();
                isChoosen = false;
            };
        };

            
        // Price Track
        total = 0;
        const priceOutput = document.querySelector('.price');
        function priceUpdate() {
            priceOutput.innerText = total + ' $';
        };

        //Definition of Order
        function CreateOrder(name, amount, price, sliced, numorder) {
            this.nameOfProduct = name;
            this.amount = amount;
            this.price = price;
            this.isSliced = sliced;
            this.orderNumber = numorder;
        };

        // Adding to card
        NumberOfOrder = 0;
        let listOfOrderedItems = [];

        function createOrder(x) {
            const order = new CreateOrder('Whole Wheat Bread', amount, total, isSliced, NumberOfOrder);
            let type;
            order.isSliced?type = 'sliced':type='loaf bread';
            const racun = 'Product: ' + order.nameOfProduct + '\nAmoutnt: ' + order.amount + '\nPrice: ' + order.price + '\nOrder Number: ' + order.orderNumber + '\n' + type;
            alert(racun);
            x.push(order)
            NumberOfOrder +=1
            console.log(order)
        };
        document.getElementById('baba').addEventListener('click', function(){
            return createOrder(listOfOrderedItems)
        });

        //Add favourite to favourite
        let favList = [];
        const heart = document.querySelector('.fa-regular');
        let clicked = 0;
        heart.addEventListener('click', function() {
            clicked%2==0?heart.classList.add('text-danger'):heart.classList.remove('text-danger');
            clicked +=1;
            clicked%2!=0?createOrder(favList):favList.pop();
        })
            });
        };


function getHtml(img, nme, description){
    return `<div class="container">
    <div class="row my-4 mt-4">
        <div class="col col-sm-12">
            <img src=${img} class="img-fluid" alt="">
        </div>
    </div>

    <div class="row">
        <div class="col col-7">
            <h1 class="my-3">${nme}</h1>
        </div>
        <div class="col col-5">
            <div class="btn-group h-75 mt-2 me-1" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-outline-dark border-top border-bottom border-start border-3 border-dark border-end-0  my-0 py-0"><h1 class="mb-1">+</h1></button>
                <div class="border-3 border-top border-bottom border-dark"><p class="display-6 amount mx-3 my-1 ">0</p></div>
                <button type="button" class="btn btn-outline-dark border-top border-bottom border-end border-3 border-dark border-start-0 my-0 py-0"><h1 class="px-1">- </h1></button>
              </div>
        </div>
    </div>
    <div class="row my-4">
        <div class="col col-sm-12">
            <h5>${description}</h5>
        </div>
    </div>
    <div class="row">
        <div class="col col-sm-6 bg-dark">
            <div class="form-check my-3">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label text-light" for="flexRadioDefault1">
                  <h5 class="mb-0 mx-3">Sliced <i class="fa-solid fa-bread-slice ms-1"></i></h5> 
                </label>
              </div>
        </div>
        <div class="col col-sm-6">
            <div class="form-check my-3">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label " for="flexRadioDefault1">
                  <h5 class="mb-0 mx-1">Loaf Bread <i class="fa-solid fa-bread-slice ms-1"></i></h5> 
                </label>
            </div>
        </div>
    </div>
</div>`
};

main();


