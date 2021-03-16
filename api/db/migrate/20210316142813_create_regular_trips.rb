class CreateRegularTrips < ActiveRecord::Migration[6.1]
  def change
    create_table :regular_trips do |t|
      t.references :user, null: false, foreign_key: true
      t.string :vehicle_type
      t.float :departure_latitude
      t.float :departure_longitude
      t.float :arrival_latitude
      t.float :arrival_longitude
      t.boolean :round_trip
      t.integer :monday
      t.integer :tuesday
      t.integer :wednesday
      t.integer :thursday
      t.integer :friday
      t.integer :saturday
      t.integer :sunday

      t.timestamps
    end
  end
end
