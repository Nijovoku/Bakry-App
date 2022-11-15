function main() {
    
    fetch('https://215a765a-6a1f-43f1-ae8d-89f8ad9bd944.mock.pstmn.io/list')
    .then((response) => response.json())
    .then((data) => (data.data))
    .then((result) => {
        setTimeout(function(){
            let x = document.getElementById('loading');
        document.getElementById('main').removeChild(x);
        for(let x=0; x<result.length; x++) {
            let name = result[x].name;
            let price = result[x].price;
            let sliced = result[x].sliced;
            let img = result[x].img;
            let loc =[x];
            document.getElementById('main').insertAdjacentHTML("beforeend", getHtml(img, name, price, loc));
            
        };
        }, 4000)
         
    })
};
function myFunction(x){
    window.location.replace(`checkOut.html?id=${x}`)
}

function getHtml(img,name, price, loc){
    return `
        <div class="row bg-light my-2 border">
            <div onclick="myFunction(${loc})" class="col my-2">
                <div class="w-100">
                    <img src=${img} width="100%" class="img-thumbnail"></a>
                </div>
                <div>
                    <h1>${name}</h1>
                    <h4> Price: ${price} $</h4>
                </div>
            </div>
        </div>`        
};

main();
