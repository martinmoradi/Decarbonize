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
    t.boolean "round_trip"
    t.integer "distance"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "airports", force: :cascade do |t|
    t.string "city"
    t.float "latitude"
    t.float "longitude"
    t.string "code"
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
    t.float "house_surface"
    t.float "electricity_consumption"
    t.string "heating_fuel"
    t.string "heating_consumption"
    t.string "float"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_fixed_emissions_on_user_id"
  end

  create_table "regular_trips", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "vehicle_type"
    t.float "departure_latitude"
    t.float "departure_longitude"
    t.float "arrival_latitude"
    t.float "arrival_longitude"
    t.boolean "round_trip"
    t.integer "monday"
    t.integer "tuesday"
    t.integer "wednesday"
    t.integer "thursday"
    t.integer "friday"
    t.integer "saturday"
    t.integer "sunday"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_regular_trips_on_user_id"
  end

  create_table "road_trips", force: :cascade do |t|
    t.string "vehicle_type"
    t.integer "distance"
    t.boolean "round_trip"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
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

  add_foreign_key "emissions", "users"
  add_foreign_key "fixed_emissions", "users"
  add_foreign_key "regular_trips", "users"
end
