// selectors

const input = document.getElementById("input");
const results = document.querySelector(".results > span");
const spans = document.querySelectorAll(".buttons span");

// add event listeners

spans.forEach(function (span) {
    span.addEventListener("click", function (e) {
        if (e.target.classList.contains("check")) {
            checkItem();
        }
        if (e.target.classList.contains("add")) {
            addItem();
        }
        if (e.target.classList.contains("delete")) {
            deleteItem();
        }
        if (e.target.classList.contains("show")) {
            showItem();
        }

    });
});

// functionality

// return message if the input is empty 
function checkTheInput() {
    results.innerHTML = `Input Can't Be Empty`;
}

// check items in local storage 
function checkItem() {
    if (input.value === "") {
        checkTheInput();
    }
    else {
        if (localStorage.getItem(`${input.value}`)) {
            results.innerHTML = `Found Local Storage Item Called <span>${input.value}</span>`;
        }
        else {
            results.innerHTML = `No Loacal Storage Item Called <span>${input.value}</span>`;
        }
    }
};

// add items to local storage 
function addItem() {
    if (input.value === "") {
        checkTheInput();
    }
    else {
        localStorage.setItem(`${input.value}`, "test");
        results.innerHTML = `<span>${input.value}</span> Item Is added To Local Storage`;
        input.value = "";

    }
};

// delete items to local storage 
function deleteItem() {
    if (input.value === "") {
        checkTheInput();
    }
    else {
        if (localStorage.getItem(`${input.value}`)) {
            localStorage.removeItem(`${input.value}`);
            results.innerHTML = `<span>${input.value}</span> Item Is Deleted From Local Storage`;
            input.value = "";
        }
        else {
            results.innerHTML = `No Loacal Storage Item Called <span>${input.value}</span>`;
        }
    }
};

// show local storage items
function showItem() {
    if (localStorage.length) {
        results.innerHTML = "";
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            results.innerHTML += `<span>${key}</span> `;
        }
    }
    else {
        results.innerHTML = `Local Storage Is Empty`;
    }
};