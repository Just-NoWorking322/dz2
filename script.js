const val = {
    name: 'Alisher',
    age: 17,
    password: 'no no no mister fish'
};

function vyvoditel() {
    let key = prompt('Введите свойство (name, age, password)');
    if (val.hasOwnProperty(key)) {
        alert(`${key}: ${val[key]}`);
    } else {
        key = prompt('Неверное свойство. Введите -name, -age , -password');
        if (val.hasOwnProperty(key)) {
            alert(`${key}: ${val[key]}`);
        } else {
            alert('Неверное свойство. Доступные значения: name, age, password');
        }
    }
}

vyvoditel();