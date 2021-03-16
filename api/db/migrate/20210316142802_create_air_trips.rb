class CreateAirTrips < ActiveRecord::Migration[6.1]
  def change
    create_table :air_trips do |t|
      t.boolean :round_trip
      t.integer :distance

      t.timestamps
    end
  end
end
