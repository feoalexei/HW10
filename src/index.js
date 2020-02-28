'use strict';
//------------ generateList function -------------------
function generateList(array) {
    const $ul = document.createElement('ul');

    for (let item of array) { //eslint-disable-line
        const $li = document.createElement('li');

        if(Array.isArray(item)) {
            $li.append(generateList(item));
        } else {
            $li.innerHTML = item;
        }
        $ul.append($li);
    }

    document.body.prepend($ul);
    return $ul;
}

generateList([1, 2, [3, [4, [5, 6], 7], 8], 9]); //eslint-disable-line

//------------ generateTable function -------------------
function generateTable(height, width) {
    const $table = document.createElement('table');

    for (let i = 0; i < height; i++) {
        const $row = document.createElement('tr');
        $table.append($row);

        for (let j = 0; j < width; j++) {
            const $cell = document.createElement('td');
            $row.append($cell);
        }
    }
    for(let k = 0; k < width*height; k++) {
        $table.querySelectorAll('td')[k].innerHTML = k + 1; //eslint-disable-line
    }

    document.body.prepend($table);
}

generateTable(10, 10); //eslint-disable-line
