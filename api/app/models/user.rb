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

  has_one :fixed_emission, dependent: :destroy
  has_many :emissions, dependent: :destroy
  has_many :air_trips, dependent: :destroy
  has_many :land_trips, dependent: :destroy
  has_many :user_commitments, dependent: :destroy
  has_many :meals, dependent: :destroy
  has_many :commitments

  # TOTALS

  def yearly_total
    (fixed_emission.yearly_fixed_emissions + yearly_landtrip_emissions + yearly_airtrip_emissions)
      .round(2)
  end

  def monthly_total
    (
      fixed_emission.monthly_fixed_emissions + monthly_landtrip_emissions +
        monthly_airtrip_emissions
    ).round(2)
  end

  def weekly_total
    (fixed_emission.weekly_fixed_emissions + weekly_landtrip_emissions + weekly_airtrip_emissions)
      .round(2)
  end

  # MEALS EMISSIONS

  def total_meals_emissions
    (meals.reduce(0) { |sum, meals| sum + meals.emission.amount }).round(2)
  end

  def total_red_meat_emissions
    (meals.red_meat.reduce(0) { |sum, e| sum + e.emission.amount }).round(2)
  end

  def total_white_meat_emissions
    (meals.white_meat.reduce(0) { |sum, e| sum + e.emission.amount }).round(2)
  end

  def total_vegetarian_emissions
    (meals.vegetarian.reduce(0) { |sum, e| sum + e.emission.amount }).round(2)
  end

  def total_vegan_emissions
    (meals.vegan.reduce(0) { |sum, e| sum + e.emission.amount }).round(2)
  end

  # LAND TRIPS EMISSIONS

  def total_landtrip_emissions
    (land_trips.reduce(0) { |sum, land_trip| sum + land_trip.emission.amount }).round(2)
  end

  def total_car_emissions
    (land_trips.cars.includes(:emission).reduce(0) { |sum, e| sum + e.emission.amount }).round(2)
  end

  def total_bus_emissions
    (land_trips.bus.includes(:emission).reduce(0) { |sum, e| sum + e.emission.amount }).round(2)
  end

  def total_tramway_emissions
    (land_trips.tramway.includes(:emission).reduce(0) { |sum, e| sum + e.emission.amount }).round(2)
  end

  def total_metro_emissions
    (land_trips.metro.includes(:emission).reduce(0) { |sum, e| sum + e.emission.amount }).round(2)
  end

  def total_train_emissions
    (land_trips.train.includes(:emission).reduce(0) { |sum, e| sum + e.emission.amount }).round(2)
  end

  def yearly_landtrip_emissions
    (
      land_trips
        .includes(:emission)
        .where(created_at: Date.today.beginning_of_year..Date.tomorrow)
        .reduce(0) { |sum, trip| sum + trip.emission.amount }
    ).round(2)
  end

  def monthly_landtrip_emissions
    (
      land_trips
        .includes(:emission)
        .where(created_at: Date.today.beginning_of_month..Date.tomorrow)
        .reduce(0) { |sum, trip| sum + trip.emission.amount }
    ).round(2)
  end

  def weekly_landtrip_emissions
    (
      land_trips
        .includes(:emission)
        .where(created_at: Date.today.beginning_of_week..Date.tomorrow)
        .reduce(0) { |sum, trip| sum + trip.emission.amount }
    ).round(2)
  end

  def daily_landtrip_emissions
    (
      land_trips
        .includes(:emission)
        .where(created_at: Date.today)
        .reduce(0) { |sum, trip| sum + trip.emission.amount }
    ).round(2)
  end

  def yearly_cars_emissions
    (
      land_trips
        .cars
        .includes(:emission)
        .where(created_at: Date.today.beginning_of_year..Date.tomorrow)
        .reduce(0) { |sum, trip| sum + trip.emission.amount }
    ).round(2)
  end

  def monthly_cars_emissions
    (
      land_trips
        .cars
        .includes(:emission)
        .where(created_at: Date.today.beginning_of_month..Date.tomorrow)
        .reduce(0) { |sum, trip| sum + trip.emission.amount }
    ).round(2)
  end

  def weekly_cars_emissions
    (
      land_trips
        .cars
        .includes(:emission)
        .where(created_at: Date.today.beginning_of_week..Date.tomorrow)
        .reduce(0) { |sum, trip| sum + trip.emission.amount }
    ).round(2)
  end

  def yearly_bus_emissions
    (
      land_trips
        .bus
        .includes(:emission)
        .where(created_at: Date.today.beginning_of_year..Date.tomorrow)
        .reduce(0) { |sum, trip| sum + trip.emission.amount }
    ).round(2)
  end

  def monthly_bus_emissions
    (
      land_trips
        .bus
        .includes(:emission)
        .where(created_at: Date.today.beginning_of_month..Date.tomorrow)
        .reduce(0) { |sum, trip| sum + trip.emission.amount }
    ).round(2)
  end

  def weekly_bus_emissions
    (
      land_trips
        .bus
        .includes(:emission)
        .where(created_at: Date.today.beginning_of_week..Date.tomorrow)
        .reduce(0) { |sum, trip| sum + trip.emission.amount }
    ).round(2)
  end

  def yearly_tramway_emissions
    (
      land_trips
        .tramway
        .includes(:emission)
        .where(created_at: Date.today.beginning_of_year..Date.tomorrow)
        .reduce(0) { |sum, trip| sum + trip.emission.amount }
    ).round(2)
  end

  def monthly_tramway_emissions
    (
      land_trips
        .tramway
        .includes(:emission)
        .where(created_at: Date.today.beginning_of_month..Date.tomorrow)
        .reduce(0) { |sum, trip| sum + trip.emission.amount }
    ).round(2)
  end

  def weekly_tramway_emissions
    (
      land_trips
        .tramway
        .includes(:emission)
        .where(created_at: Date.today.beginning_of_week..Date.tomorrow)
        .reduce(0) { |sum, trip| sum + trip.emission.amount }
    ).round(2)
  end

  def yearly_metro_emissions
    (
      land_trips
        .metro
        .includes(:emission)
        .where(created_at: Date.today.beginning_of_year..Date.tomorrow)
        .reduce(0) { |sum, trip| sum + trip.emission.amount }
    ).round(2)
  end

  def monthly_metro_emissions
    (
      land_trips
        .metro
        .includes(:emission)
        .where(created_at: Date.today.beginning_of_month..Date.tomorrow)
        .reduce(0) { |sum, trip| sum + trip.emission.amount }
    ).round(2)
  end

  def weekly_metro_emissions
    (
      land_trips
        .metro
        .includes(:emission)
        .where(created_at: Date.today.beginning_of_week..Date.tomorrow)
        .reduce(0) { |sum, trip| sum + trip.emission.amount }
    ).round(2)
  end

  def yearly_train_emissions
    (
      land_trips
        .train
        .includes(:emission)
        .where(created_at: Date.today.beginning_of_year..Date.tomorrow)
        .reduce(0) { |sum, trip| sum + trip.emission.amount }
    ).round(2)
  end

  def monthly_train_emissions
    (
      land_trips
        .train
        .includes(:emission)
        .where(created_at: Date.today.beginning_of_month..Date.tomorrow)
        .reduce(0) { |sum, trip| sum + trip.emission.amount }
    ).round(2)
  end

  def weekly_train_emissions
    (
      land_trips
        .train
        .includes(:emission)
        .where(created_at: Date.today.beginning_of_week..Date.tomorrow)
        .reduce(0) { |sum, trip| sum + trip.emission.amount }
    ).round(2)
  end

  # AIR TRIPS EMISSIONS

  def total_airtrip_emissions
    (air_trips.includes(:emission).reduce(0) { |sum, e| sum + e.emission.amount }).round(2)
  end

  def yearly_airtrip_emissions
    (
      air_trips
        .includes(:emission)
        .where(created_at: Date.today.beginning_of_year..Date.tomorrow)
        .reduce(0) { |sum, trip| sum + trip.emission.amount }
    ).round(2)
  end

  def monthly_airtrip_emissions
    (
      air_trips
        .includes(:emission)
        .where(created_at: Date.today.beginning_of_month..Date.tomorrow)
        .reduce(0) { |sum, trip| sum + trip.emission.amount }
    ).round(2)
  end

  def weekly_airtrip_emissions
    (
      air_trips
        .includes(:emission)
        .where(created_at: Date.today.beginning_of_week..Date.tomorrow)
        .reduce(0) { |sum, trip| sum + trip.emission.amount }
    ).round(2)
  end

  def daily_airtrip_emissions
    (
      air_trips
        .includes(:emission)
        .where(created_at: Date.today)
        .reduce(0) { |sum, trip| sum + trip.emission.amount }
    ).round(2)
  end

  def weekly_travel_emissions
    (weekly_airtrip_emissions + weekly_landtrip_emissions).round(2)
  end

  def monthly_travel_emissions
    (monthly_airtrip_emissions + monthly_landtrip_emissions).round(2)
  end

  def yearly_travel_emissions
    (yearly_airtrip_emissions + yearly_landtrip_emissions).round(2)
  end
end
