class CreateLandTrips < ActiveRecord::Migration[6.1]
  def change
    create_table :land_trips do |t|
      t.references :user, null: false, foreign_key: true
      t.string :vehicle_type, default: 'diesel_car', null: false
      t.integer :distance, null: false
      t.boolean :round_trip, default: false, null: false

      t.timestamps
    end
  end
end
