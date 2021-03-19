class FixedEmission < ApplicationRecord
  has_one :emission, as: :emissionable, dependent: :destroy
end
