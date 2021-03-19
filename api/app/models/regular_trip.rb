class RegularTrip < ApplicationRecord
  has_one :emission, as: :emissionable, dependent: :destroy
end
