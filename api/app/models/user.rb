class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher

  devise :database_authenticatable,
         :registerable,
         :recoverable,
         :rememberable,
         :validatable,
         :jwt_authenticatable,
         jwt_revocation_strategy: self

  validates :email,
            presence: true,
            uniqueness: true,
            format: {
              with: URI::MailTo::EMAIL_REGEXP,
              message: "L'adresse email n'est pas correcte.",
            }

  has_many :emissions, dependent: :destroy
  has_many :air_trips, dependent: :destroy
  has_many :road_trips, dependent: :destroy
  has_one :fixed_emission, dependent: :destroy

  def yearly_total_emitted
    (
      fixed_emission.daily_emitted_carbon *
        ((Date.today - Date.today.at_beginning_of_year).days.to_i / 86_400) +
        current_year_roadtrips_emissions
    ).round(2)
  end

  def total_roadtrips_emissions
    emissions = Emission.where(user_id: id, emissionable_type: 'RoadTrip')
    (emissions.reduce(0) { |sum, emission| sum + emission.amount }).round(2)
  end

  def current_year_roadtrips_emissions
    emissions =
      Emission.find_by_sql(
        "SELECT * FROM emissions WHERE created_at BETWEEN '#{Date.today - 1.year}' AND '#{Date.today}' AND user_id = '#{id}' AND emissionable_type = 'RoadTrip'",
      )
    (emissions.reduce(0) { |sum, emission| sum + emission.amount }).round(2)
  end

  def current_month_roadtrips_emissions
    emissions =
      Emission.find_by_sql(
        "SELECT * FROM emissions WHERE created_at BETWEEN '#{Date.today - 1.month}' AND '#{Date.today}' AND user_id = '#{id}'",
      )
    (emissions.reduce(0) { |sum, emission| sum + emission.amount }).round(2)
  end

  def current_week_roadtrips_emissions
    emissions =
      Emission.find_by_sql(
        "SELECT * FROM emissions WHERE created_at BETWEEN '#{Date.today - 1.week}' AND '#{Date.today}' AND user_id = '#{id}'",
      )
    (emissions.reduce(0) { |sum, emission| sum + emission.amount }).round(2)
  end
end
