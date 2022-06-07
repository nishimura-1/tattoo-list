//selectors
const tattooInput = document.querySelector('.tattoo-input');
const tattooButton = document.querySelector('.tattoo-button');
const tattooList = document.querySelector('.tattoo-list');
const filterOption = document.querySelector('.filter-tattoo');

//event listeners
tattooButton.addEventListener('click', addTattoo);
tattooList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTattoo);

//functions

function addTattoo(event) {
    //prevent form from submitting
    event.preventDefault();
    //tattoo div
    const tattooDiv = document.createElement('div');
    tattooDiv.classList.add('tattoo');
    //create li
    const newTattoo = document.createElement('li');
    newTattoo.innerText = tattooInput.value;
    newTattoo.classList.add('tattoo-item');
    tattooDiv.appendChild(newTattoo);
    //got button
    const gotButton = document.createElement('button');
    gotButton.innerHTML = '<i class="fas fa-check"></i>';
    gotButton.classList.add('got-btn');
    tattooDiv.appendChild(gotButton);
    //trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    tattooDiv.appendChild(trashButton);
    //append to list
    tattooList.appendChild(tattooDiv);
    //clear tattoo input value
    tattooInput.value = '';
}

function deleteCheck(e) {
    const item = e.target;
    //delete tattoo
    if (item.classList[0] === 'trash-btn') {
        const tattoo = item.parentElement;
        //animation
        tattoo.classList.add('fall');
        tattoo.addEventListener('transitionend', function() {
            tattoo.remove();
        })
    }

    //check mark
    if (item.classList[0] === 'got-btn') {
        const tattoo = item.parentElement;
        tattoo.classList.toggle('completed');
    }
}

function filterTattoo(e) {
    const tattoos = tattooList.childNodes;
    tattoos.forEach(function(tattoo) {
        const mStyle = tattoo.style;
        if (mStyle != undefined && mStyle !=null) {
            switch(e.target.value) {
                case 'all':
                    mStyle.display = 'flex';
                    break;
                case 'got':
                    if (tattoo.classList.contains('got')) {
                        mStyle.display = 'flex';
                    } else {
                        mStyle.display = 'none';
                    }
                    break;
                case 'will-get':
                    if (tattoo.classList.contains('got')) {
                        mStyle.display = 'none';
                    } else {
                        mStyle.display = 'flex';
                    }
                    break;
                }        
        }
    });
}