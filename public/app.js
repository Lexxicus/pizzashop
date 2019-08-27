
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
    update_orders_input();
    update_orders_button();
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
// функция для передачиданных данных на сервер о заказе
function update_orders_input() {

    var orders = cart_get_orders();
    $('#orders_input').val(orders);

}
// Функция вывода количества заказанных продуктов в кнопке
function update_orders_button() {

    var text = 'Cart ('+ all_Storage() +')';
    $('#orders_button').val(text);

}

function cart_get_orders() {

    var orders = '';

    for (var i = 0; i < localStorage.length; i++) {

        // получаем ключ
        var key = localStorage.key(i);

        // получаем значение
        var value = localStorage.getItem(key)*1;
        //
        if(key.indexOf('product_')==0)
        {
            orders = orders + key + '=' + value +',';
        }

    }
    return orders;
}

function cart_get_id() {

    var id = '';

    for (var i = 0; i < localStorage.length; i++) {

        // получаем ключ
        var key = localStorage.key(i);

        id = id + key +',';

    }
    $('#orders_id').val(id);
}