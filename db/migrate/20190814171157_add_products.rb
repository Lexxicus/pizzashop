# frozen_string_literal: true

class AddProducts < ActiveRecord::Migration[5.2]
  def change
    Product.create ({
        title: 'Hawaiian',
        description: 'This is Hawaiian pizza',
        price: 350,
        size: 30,
        is_spicy: false,
        is_veg: false,
        is_best_offer: false,
        path_to_image: '/images/hawaiian.jpg'
        })
    Product.create ({
        title: 'Pepperoni',
        description: 'This is cool Pepperoni pizza',
        price: 400,
        size: 30,
        is_spicy: false,
        is_veg: false,
        is_best_offer: false,
        path_to_image: '/images/pepperoni.jpg'
        })
    Product.create ({
        title: 'Vegetarian',
        description: 'This is tereble Vegetarian pizza',
        price: 350,
        size: 30,
        is_spicy: false,
        is_veg: false,
        is_best_offer: true,
        path_to_image: '/images/veg.jpg'
        })
  end
end
