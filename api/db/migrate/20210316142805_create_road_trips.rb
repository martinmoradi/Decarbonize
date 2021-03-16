class CreateRoadTrips < ActiveRecord::Migration[6.1]
  def change
    create_table :road_trips do |t|
      t.string :vehicle_type
      t.integer :distance
      t.boolean :round_trip

      t.timestamps
    end
  end
end
