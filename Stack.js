
let stack = document.getElementById('stack');
let addInput = document.getElementById('num');

function addNew(value) {
    
    let item = document.createElement('div');

    stack.insertBefore(item , stack.firstChild);
    item.textContent = value;

}

function push() {
    let item = addInput.value;
    if (!item.length) {
        warning.classList.remove('hidden-item');
        return;
    }
    if (!warning.classList.contains('hidden-item')) {
        warning.classList.add('hidden-item');
    }
    addNew(item);
    addInput.value = '';
}

function pop() {

    stack.removeChild(stack.firstChild);
}