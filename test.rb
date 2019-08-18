hh = {}

loop do
  puts 'Enter product id: '
  id = gets.chomp

  print 'Ente amount (How much items you want to order): '

  n = gets.chomp.to_i

  x = hh[id].to_i

  x += n

  hh[id] = x

  puts hh.inspect
  # всего товаров в корзине
  total = 0
  hh.each do |key, value|
    total = total + value #
  end
  puts "total items  #{total}"
  puts '====================================================================='
end
