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
    // вывод количества продуктов в корзине
    alert('Items in your cart: ' + all_Storage());
}
//number of cart items
function all_Storage() {

    var cnt = 0;

    for (var i = 0; i < localStorage.length; i++) {

        // получаем ключ
        var key = localStorage.key(i);

        // получаем значение
        var value = localStorage.getItem(key)*1;
        //
        if(key.indexOf('product_')==0)
        {
          cnt+= value;
        }

    }
    return cnt;
}