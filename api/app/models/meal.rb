
class Meal < ApplicationRecord
  has_one :emission, as: :emissionable, dependent: :destroy
  belongs_to :user
  after_create :create_emission
  scope :red_meat, -> { where(meal_type:  "red_meat") }
  scope :white_meat, -> { where(meal_type:  "white_meat") }
  scope :vegetarian, -> { where(meal_type:  "vegetarian") }
  scope :vegan, -> { where(meal_type:  "vegan") }

  attribute :amount

  def amount
    emission.amount
  end

  def emitted_carbon
    case meal_type
    when 'red_meat'
      6.29
     when 'white_meat'
      1.35
    when 'vegetarian'
      0.51
    when 'vegan'
      0.3939
    end
  end

  def create_emission
    Emission.create!(user_id: user.id, emissionable: self, amount: emitted_carbon.round(2))
  end


end
