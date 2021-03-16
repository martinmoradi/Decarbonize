class CreateAirports < ActiveRecord::Migration[6.1]
  def change
    create_table :airports do |t|
      t.string :city
      t.float :latitude
      t.float :longitude
      t.string :code

      t.timestamps
    end
  end
end
