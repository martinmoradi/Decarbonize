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

ActiveRecord::Schema.define(version: 2021_03_21_110130) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "air_trips", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.boolean "round_trip", default: true, null: false
    t.string "departure", null: false
    t.string "arrival", null: false
    t.float "distance", default: 0.0, null: false
    t.float "departure_latitude", null: false
    t.float "departure_longitude", null: false
    t.float "arrival_latitude", null: false
    t.float "arrival_longitude", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_air_trips_on_user_id"
  end

  create_table "commitments", force: :cascade do |t|
    t.string "title", null: false
    t.string "description", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
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
    t.float "electricity_consumption", default: 0.0, null: false
    t.float "gas_consumption", default: 0.0, null: false
    t.float "wood_consumption", default: 0.0, null: false
    t.string "wood_type", default: "wood_logs", null: false
    t.float "fuel_consumption", default: 0.0, null: false
    t.integer "roommates", default: 1, null: false
    t.float "clothes", default: 0.0, null: false
    t.float "furnitures", default: 0.0, null: false
    t.float "others", default: 0.0, null: false
    t.integer "breakfasts_per_week", default: 0, null: false
    t.integer "red_meats_per_week", default: 0, null: false
    t.integer "vegan_per_week", default: 0, null: false
    t.integer "vegetarian_per_week", default: 0, null: false
    t.integer "white_meats_per_week", default: 0, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_fixed_emissions_on_user_id"
  end

  create_table "land_trips", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "vehicle_type", default: "diesel_car", null: false
    t.integer "distance", null: false
    t.boolean "round_trip", default: false, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_land_trips_on_user_id"
  end

  create_table "regular_trips", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "land_trip_id", null: false
    t.boolean "monday", default: false, null: false
    t.boolean "tuesday", default: false, null: false
    t.boolean "wednesday", default: false, null: false
    t.boolean "thursday", default: false, null: false
    t.boolean "friday", default: false, null: false
    t.boolean "saturday", default: false, null: false
    t.boolean "sunday", default: false, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["land_trip_id"], name: "index_regular_trips_on_land_trip_id"
    t.index ["user_id"], name: "index_regular_trips_on_user_id"
  end

  create_table "user_commitments", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "commitment_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["commitment_id"], name: "index_user_commitments_on_commitment_id"
    t.index ["user_id"], name: "index_user_commitments_on_user_id"
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
  add_foreign_key "land_trips", "users"
  add_foreign_key "regular_trips", "land_trips"
  add_foreign_key "regular_trips", "users"
  add_foreign_key "user_commitments", "commitments"
  add_foreign_key "user_commitments", "users"
end
