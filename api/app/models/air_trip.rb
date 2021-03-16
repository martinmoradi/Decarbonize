class AirTrip < ApplicationRecord
  has_one :emission, as: :emissionable, dependent: :destroy
  has_many :airports
end
