class CreateFixedEmissions < ActiveRecord::Migration[6.1]
  def change
    create_table :fixed_emissions do |t|
      t.references :user, null: false, foreign_key: true
      t.float :house_surface, null: false
      t.float :electricity_consumption, default: 188
      t.float :gas_consumption, default: 0
      t.float :wood_consumption, default: 0
      t.string :wood_type, default: "wood_logs"
      t.float :fuel_consumption, default: 0
      t.integer :roommates, default: 1
      t.float :clothes, default: 0
      t.float :furnitures, default: 0
      t.float :others, default: 0
      t.integer :breakfasts_per_week, default: 0
      t.integer :red_meats_per_week, default: 0
      t.integer :vegan_per_week, default: 0
      t.integer :vegetarian_per_week, default: 0
      t.integer :white_meats_per_week, default: 0
      t.timestamps
    end
  end
end
