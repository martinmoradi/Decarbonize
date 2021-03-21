# Schema.rb
#     t.bigint "user_id", null: false
#     t.bigint "land_trip_id", null: false
#     t.boolean "monday", default: false
#     t.boolean "tuesday", default: false
#     t.boolean "wednesday", default: false
#     t.boolean "thursday", default: false
#     t.boolean "friday", default: false
#     t.boolean "saturday", default: false
#     t.boolean "sunday", default: false

class RegularTrip < ApplicationRecord
  has_one :emission, as: :emissionable, dependent: :destroy
  belongs_to :user
  belongs_to :land_trip
end
