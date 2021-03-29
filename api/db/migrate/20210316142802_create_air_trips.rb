class CreateAirTrips < ActiveRecord::Migration[6.1]
  def change
    create_table :air_trips do |t|
      t.references :user, null: false, foreign_key: true
      t.boolean :round_trip, null: false, default: true
      t.string :departure, null: false
      t.string :arrival, null: false
      t.float :distance, default: 0, null: false
      t.float :departure_latitude, null: false
      t.float :departure_longitude, null: false
      t.float :arrival_latitude, null: false
      t.float :arrival_longitude, null: false
      t.timestamps
    end
  end
end
