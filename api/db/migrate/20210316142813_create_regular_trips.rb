class CreateRegularTrips < ActiveRecord::Migration[6.1]
  def change
    create_table :regular_trips do |t|
      t.references :user, null: false, foreign_key: true
      t.references :land_trip, null: false, foreign_key: true
      t.boolean :monday, default: false, null: false
      t.boolean :tuesday, default: false, null: false
      t.boolean :wednesday, default: false, null: false
      t.boolean :thursday, default: false, null: false
      t.boolean :friday, default: false, null: false
      t.boolean :saturday, default: false, null: false
      t.boolean :sunday, default: false, null: false

      t.timestamps
    end
  end
end
