class RoadTrip < ApplicationRecord
  has_one :emission, as: :emissionable, dependent: :destroy
  after_create :create_emission

  def emitted_carbon
    distance * 2
  end

  # def create_emission
  #   Emission.create!(amount: emitted_carbon, emissionable: self, user_id: current_user.id)
  # end
end
