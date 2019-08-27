orders = 'product_1=1,product_2=2,product_3=4,'

s1 = orders.split(',')
hh = {}
s1.each do |x|
  s2 = x.split('=')
  s3 = s2[0].split('_')
  value = s2[1]
  key = s3[1]
  hh[key] = value
end

puts hh.inspect
