#  Schema.rb
# t.string 'meal_type', default: 'vegetarian'
# t.bigint 'user_id',

class Meal < ApplicationRecord
  validates :user_id, presence: true, numericality: { only_integer: true }

  validates :meal_type, presence: true, inclusion: { in: %w[vegetarian red_meat white_meat vegan] }

  has_one :emission, as: :emissionable, dependent: :destroy
  belongs_to :user
  after_create :create_emission
  scope :red_meat, -> { where(meal_type: 'red_meat') }
  scope :white_meat, -> { where(meal_type: 'white_meat') }
  scope :vegetarian, -> { where(meal_type: 'vegetarian') }
  scope :vegan, -> { where(meal_type: 'vegan') }

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
