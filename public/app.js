function something()
{
   // var x = window.localStorage.getItem('aaa');
    //x = x*1 + 1
    //window.localStorage.setItem('aaa', x);
    //alert(x);
    alert('Hello from function');
}

function add_to_cart(id)
{
    //создаем переменную для ключа хэша
    var key = 'product_' + id;
    // записываем переменную в локал сторедж
    var x = window.localStorage.getItem(key);
    // увеличиваем значение переменной
    x = x*1 + 1;
    // записываем значение пару ключ значение в локалсторедж
    window.localStorage.setItem(key, x);
}

function all_Storage() {

    var sum = 0;

    for (var i = 0; i < localStorage.length; i++) {

        // set iteration key name
        var key = localStorage.key(i);

        // use key name to retrieve the corresponding value
        var value = localStorage.getItem(key)*1;
        // get sum of all value of localstorage
        sum = sum + value;

    }
    alert (sum);
}