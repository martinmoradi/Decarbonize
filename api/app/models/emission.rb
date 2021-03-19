class Emission < ApplicationRecord
  belongs_to :emissionable, polymorphic: true
  belongs_to :user
end
