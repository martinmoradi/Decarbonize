class CreateFixedEmissions < ActiveRecord::Migration[6.1]
  def change
    create_table :fixed_emissions do |t|
      t.references :user, null: false, foreign_key: true
      t.float :house_surface
      t.float :electricity_consumption
      t.string :heating_fuel
      t.string :heating_consumption
      t.string :float

      t.timestamps
    end
  end
end
