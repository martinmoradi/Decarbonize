class CreateUserCommitments < ActiveRecord::Migration[6.1]
  def change
    create_table :user_commitments do |t|
      t.references :user, null: false, foreign_key: true
      t.references :commitments, null: false, foreign_key: true
      t.timestamps
    end
  end
end
