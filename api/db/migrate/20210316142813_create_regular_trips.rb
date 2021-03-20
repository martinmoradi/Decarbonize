class CreateRegularTrips < ActiveRecord::Migration[6.1]
  def change
    create_table :regular_trips do |t|
      t.references :user, null: false, foreign_key: true
      t.references :road_trip, null: false, foreign_key: true
      t.boolean :monday, default: false
      t.boolean :tuesday, default: false
      t.boolean :wednesday, default: false
      t.boolean :thursday, default: false
      t.boolean :friday, default: false
      t.boolean :saturday, default: false
      t.boolean :sunday, default: false

      t.timestamps
    end
  end
end
