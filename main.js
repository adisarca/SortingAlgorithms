let arSize = document.getElementById("arraysize");
let generate = document.getElementById("generate");
let display = document.getElementById("displayArray");
let bubleSort = document.getElementById("bublesort");
let selSort = document.getElementById("selectionsort");
let insSort = document.getElementById("insertionsort");
let currentArray = [];

function generateArray(size) {
    display.innerHTML = "";
    let n = size;
    currentArray = [];
    for (let i = 0; i < n; i++) {
        let rnd = Math.floor(Math.random() * 100) + 1;
        let a = document.createElement("div");
        a.style.height = rnd + "%";
        a.style.width = "10px";
        a.style.background = `linear-gradient( rgba(${Math.floor(Math.random() * 250)},${Math.floor(Math.random() * 250)},${Math.floor(Math.random() * 250)}) 1%, rgba(${Math.floor(Math.random() * 250)},${Math.floor(Math.random() * 250)},${Math.floor(Math.random() * 250)},1) 94%)`;
        a.style.marginLeft = "1px";
        display.appendChild(a);
        currentArray.push(rnd);
    }

}
generateArray(arSize.value);

generate.addEventListener("click", function () {
    generateArray(arSize.value);
})

function displayArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        let a = document.createElement("div");
        a.style.height = arr[i] + "%";
        a.style.width = "10px";
        a.style.background = `linear-gradient( rgba(${Math.floor(Math.random() * 250)},${Math.floor(Math.random() * 250)},${Math.floor(Math.
            random() * 250)}) 1%, rgba(${Math.floor(Math.random() * 250)},${Math.floor(Math.random() * 250)},${Math.floor(Math.random() * 250)},
            1) 94%)`;
       a.style.marginLeft = "1px"
        display.appendChild(a);
    }

}
bubleSort.addEventListener("click", function () {

    let len = currentArray.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {

            setTimeout(function () {

                if (currentArray[j] > currentArray[j + 1]) {

                    let tmp = currentArray[j];
                    currentArray[j] = currentArray[j + 1];
                    currentArray[j + 1] = tmp;
                    display.innerHTML = "";
                    displayArray(currentArray);

                }
            }, 100);
        }

    };

})

insSort.addEventListener("click", function () {

    let len = currentArray.length;
    for (let i = 1; i < len; i++) {
        setTimeout(function () {
            let current = currentArray[i];
            let j = i - 1;
            while ((j > -1) && (current < currentArray[j])) {
                currentArray[j + 1] = currentArray[j];
                j--;
                display.innerHTML = "";

                displayArray(currentArray);
            }
            currentArray[j + 1] = current;
        }, 100)


    }

})

selSort.addEventListener("click", function () {

    let len = currentArray.length;

    for (let i = 0; i < len; i++) {
        setTimeout(function () {
            let min = i;
            for (let j = i + 1; j < len; j++) {
                if (currentArray[j] < currentArray[min]) {
                    min = j;
                }
            }

            if (min != i) {

                let tmp = currentArray[i];
                currentArray[i] = currentArray[min];
                currentArray[min] = tmp;
                display.innerHTML = ""
                displayArray(currentArray);
            }
        }, 100);

    }

})





