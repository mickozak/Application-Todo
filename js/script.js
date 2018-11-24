var arr = ["Cooking", "Shopping", "Homework", "Washing"];

updateView();

function removeElement(key) {
    arr.splice(key, 1);
    updateView();
}

function cloneElement(key) {
    arr.splice(key, 0, arr[key]);
    updateView();
}

function mergeElement(key) {
    if (key > 0) {
        arr[key - 1] += ' ' + arr[key];
        removeElement(key);
    }
}

function mergeAllElement(key) {
    if (key > 0) {
        var spliced = arr.splice(1, key);
        var string = spliced.join(' ');
        arr[0] = arr[0] + ' ' + string;
        updateView();
    }
}

function moveLeft(key) {
    if (key > 0) {
        var tmp = arr[key - 1];
        arr[key - 1] = arr[key];
        arr[key] = tmp;
        updateView();
    }
}

function moveRight(key) {
    if (key < arr.length - 1) {
        var tmp = arr[key];
        arr[key] = arr[key + 1];
        arr[key + 1] = tmp;
        updateView();
    }
}

function pushElement() {
    var value = document.getElementById("element-name").value;
    arr.push(value);
    updateView();
}
function removeLast() {
    arr.pop();
    updateView();
}

function removeFirst() {
    arr.shift();
    updateView();
}

function updateView() {
    var arrayElementsDOM = document.getElementById('array-elements');
    arrayElementsDOM.innerHTML = "";
    arr.forEach(drawBox);
    drawArrayInfo(arr);
}

function drawArrayInfo(arr) {
    var arrayElementsDOM = document.getElementById('array');
    arrayElementsDOM.innerHTML = "";
    arrayElementsDOM.insertAdjacentHTML('beforeend', '<h3><small class="text-muted pr-2">Number of tasks: </small>' + arr.length + '</h3>');
}

function drawBox(arrValue, index) {
    var arrayElementsDOM = document.getElementById('array-elements');
    var html = '<div class="col-3">\n\
<div class="box">\n\
<div class="box-actions">\n\
<span class="badge badge-primary float-left">' + index +'</span>\n\
<button class="btn btn-danger btn-sm test"  onclick="removeElement(\'' + index + '\')">\n\
<i class="far fa-trash-alt"></i>\n\
</button>\n\
<button class="btn btn-warning btn-sm" onclick="cloneElement(\'' + index + '\')">\n\
<i class="far fa-clone"></i>\n\
</button>\n\
<button class="btn btn-primary btn-sm" onclick="mergeElement(\'' + index + '\')">\n\
<i class="fas fa-compress"></i>\n\
</button>\n\
<button class="btn btn-primary btn-sm" onclick="mergeAllElement(\'' + index + '\')">\n\
<i class="fas fa-arrow-left"></i>\n\
</button>\n\
<button class="btn btn-success btn-sm" onclick="moveLeft(' + index + ')">\n\
<i class="far fa-arrow-alt-circle-left"></i>\n\
</button>\n\
<button class="btn btn-success btn-sm" onclick="moveRight(' + index + ')">\n\
<i class="far fa-arrow-alt-circle-right"></i>\n\
</button>\n\
</div>\n\
<h2>' + arrValue + '</h2>\n\
</div>\n\
</div>';
    arrayElementsDOM.insertAdjacentHTML('beforeend', html);
}
