# Schema.rb
#  t.bigint "user_id", null: false
#  t.string "vehicle_type"
#  t.float "departure_latitude"
#  t.float "departure_longitude"
#  t.float "arrival_latitude"
#  t.float "arrival_longitude"
#  t.boolean "round_trip"
#  t.integer "monday"
#  t.integer "tuesday"
#  t.integer "wednesday"
#  t.integer "thursday"
#  t.integer "friday"
#  t.integer "saturday"
#  t.integer "sunday"


class RegularTrip < ApplicationRecord
  has_one :emission, as: :emissionable, dependent: :destroy
end
