// let element = document.querySelector('body');
// let style = getComputedStyle(element)
// style.backgroundColor === rgb(33, 37, 41)

let html = `
<div class="containerr " id="loading">
<h1 class="h4 display-3">Loading</h1>
<div class="wrapper">
    <div class="loader display-3">
        <div class="spinner display-3"></div>
    </div>
    <div class="loader display-3">
        <div class="spinner display-3"></div>
    </div>
    <div class="loader display-3">
        <div class="spinner display-3"></div>
    </div>
    <div class="loader display-3">
        <div class="spinner display-3"></div>
    </div>
    <div class="loader display-3">
        <div class="spinner display-3"></div>
    </div>
    <div class="loader display-3">
        <div class="spinner display-3"></div>
    </div>
    <div class="loader display-3">
        <div class="spinner display-3"></div>
    </div>
    <div class="loader display-3">
        <div class="spinner display-3"></div>
    </div>
</div>
</div>
    `
document.getElementById('main').insertAdjacentHTML("beforeend", html);