
let stack = document.getElementById('stack');
let addInput = document.getElementById('num');

function addNew(value) {
    
    let item = document.createElement('div');

    stack.insertBefore(item , stack.firstChild);
    item.textContent = value;

}

function push() {
    let item = addInput.value;
    addNew(item);
    addInput.value = '';
}

function pop() {

    for(item of stack.children){
        if(item = stack.firstElementChild){
            item.style.display = 'none';
        }
    }
}