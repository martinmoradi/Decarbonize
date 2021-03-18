# Schema.rb
#  t.float "amount"
#     t.string "emissionable_type", null: false
#     t.bigint "emissionable_id", null: false
#     t.bigint "user_id", null: false

class Emission < ApplicationRecord
  belongs_to :emissionable, polymorphic: true
  belongs_to :user
end
