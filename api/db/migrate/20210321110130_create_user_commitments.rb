class CreateUserCommitments < ActiveRecord::Migration[6.1]
  def change
    create_table :user_commitments do |t|
      t.references :user, null: false, foreign_key: true
      t.references :commitment, null: false, foreign_key: true
      t.timestamps
    end
  end
end
