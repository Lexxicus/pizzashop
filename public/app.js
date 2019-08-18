var x = 1

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
    var key = 'product_' + id //создаем переменную для ключа хэша
    var x = window.localStorage.getItem(key); // записываем переменную в локал сторедж
    x = x*1 + 1; // увеличиваем значение переменной
    window.localStorage.setItem(key, x) // записываем значение пару ключ значение в локалсторедж
}