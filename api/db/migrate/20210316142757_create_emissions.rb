class CreateEmissions < ActiveRecord::Migration[6.1]
  def change
    create_table :emissions do |t|
      t.float :amount
      t.references :emissionable, polymorphic: true, null: false
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
