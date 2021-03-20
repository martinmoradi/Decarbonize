# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_03_16_142817) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "air_trips", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.boolean "round_trip", default: true, null: false
    t.string "departure", null: false
    t.string "arrival", null: false
    t.float "distance", default: 0.0
    t.float "departure_latitude", null: false
    t.float "departure_longitude", null: false
    t.float "arrival_latitude", null: false
    t.float "arrival_longitude", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_air_trips_on_user_id"
  end

  create_table "emissions", force: :cascade do |t|
    t.float "amount"
    t.string "emissionable_type", null: false
    t.bigint "emissionable_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["emissionable_type", "emissionable_id"], name: "index_emissions_on_emissionable"
    t.index ["user_id"], name: "index_emissions_on_user_id"
  end

  create_table "fixed_emissions", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.float "house_surface", null: false
    t.float "electricity_consumption", default: 188.0
    t.float "gas_consumption", default: 0.0
    t.float "wood_consumption", default: 0.0
    t.string "wood_type", default: "wood_logs"
    t.float "fuel_consumption", default: 0.0
    t.integer "roommates", default: 1
    t.float "clothes", default: 0.0
    t.float "furnitures", default: 0.0
    t.float "others", default: 0.0
    t.integer "breakfasts_per_week", default: 0
    t.integer "red_meats_per_week", default: 0
    t.integer "vegan_per_week", default: 0
    t.integer "vegetarian_per_week", default: 0
    t.integer "white_meats_per_week", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_fixed_emissions_on_user_id"
  end

  create_table "regular_trips", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "road_trip_id", null: false
    t.boolean "monday", default: false
    t.boolean "tuesday", default: false
    t.boolean "wednesday", default: false
    t.boolean "thursday", default: false
    t.boolean "friday", default: false
    t.boolean "saturday", default: false
    t.boolean "sunday", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["road_trip_id"], name: "index_regular_trips_on_road_trip_id"
    t.index ["user_id"], name: "index_regular_trips_on_user_id"
  end

  create_table "road_trips", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "vehicle_type", default: "diesel_car"
    t.integer "distance", null: false
    t.boolean "round_trip", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_road_trips_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "jti", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["jti"], name: "index_users_on_jti", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "air_trips", "users"
  add_foreign_key "emissions", "users"
  add_foreign_key "fixed_emissions", "users"
  add_foreign_key "regular_trips", "road_trips"
  add_foreign_key "regular_trips", "users"
  add_foreign_key "road_trips", "users"
end
