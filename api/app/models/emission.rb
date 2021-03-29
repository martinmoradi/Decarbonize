# Schema.rb
#  t.float "amount"
#  t.string "emissionable_type"
#  t.bigint "emissionable_id"
#  t.bigint "user_id"

class Emission < ApplicationRecord
  validates :emissionable_type, :emissionable_id, :user_id, presence: true
  belongs_to :emissionable, polymorphic: true
  belongs_to :user
end
