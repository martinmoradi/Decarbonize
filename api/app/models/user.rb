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

  # TOTALS

  def yearly_total
    (fixed_emission.yearly_fixed_emissions + yearly_roadtrip_emissions + yearly_airtrip_emissions)
      .round(2)
  end

  def monthly_total
    (
      fixed_emission.monthly_fixed_emissions + monthly_roadtrip_emissions +
        monthly_airtrip_emissions
    ).round(2)
  end

  def weekly_total
    (fixed_emission.weekly_fixed_emissions + weekly_roadtrip_emissions + weekly_airtrip_emissions)
      .round(2)
  end

  # ROAD TRIPS EMISSIONS

  def total_roadtrip_emissions
    (road_trips.reduce(0) { |sum, road_trip| sum + road_trip.emission.amount }).round(2)
  end

  def yearly_roadtrip_emissions
    (
      road_trips
        .where(created_at: Date.today.beginning_of_year..Date.today)
        .reduce(0) { |sum, trip| sum + trip.emission.amount }
    ).round(2)
  end

  def monthly_roadtrip_emissions
    (
      road_trips
        .where(created_at: Date.today.beginning_of_month..Date.today)
        .reduce(0) { |sum, trip| sum + trip.emission.amount }
    ).round(2)
  end

  def weekly_roadtrip_emissions
    (
      road_trips
        .where(created_at: Date.today.beginning_of_week..Date.today)
        .reduce(0) { |sum, trip| sum + trip.emission.amount }
    ).round(2)
  end

  def daily_roadtrip_emissions
    (road_trips.where(created_at: Date.today).reduce(0) { |sum, trip| sum + trip.emission.amount })
      .round(2)
  end

  # AIR TRIPS EMISSIONS

  def total_airtrip_emissions
    (air_trips.reduce(0) { |sum, road_trip| sum + road_trip.emission.amount }).round(2)
  end

  def yearly_airtrip_emissions
    (
      air_trips
        .where(created_at: Date.today.beginning_of_year..Date.today)
        .reduce(0) { |sum, trip| sum + trip.emission.amount }
    ).round(2)
  end

  def monthly_airtrip_emissions
    (
      air_trips
        .where(created_at: Date.today.beginning_of_month..Date.today)
        .reduce(0) { |sum, trip| sum + trip.emission.amount }
    ).round(2)
  end

  def weekly_airtrip_emissions
    (
      air_trips
        .where(created_at: Date.today.beginning_of_week..Date.today)
        .reduce(0) { |sum, trip| sum + trip.emission.amount }
    ).round(2)
  end

  def daily_airtrip_emissions
    (air_trips.where(created_at: Date.today).reduce(0) { |sum, trip| sum + trip.emission.amount })
      .round(2)
  end
end
