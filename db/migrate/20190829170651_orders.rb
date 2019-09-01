class Orders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.string :title
      t.text :orders_input
      t.text :name
      t.text :phone
      t.text :address
      t.timestamp
    end
  end
end
