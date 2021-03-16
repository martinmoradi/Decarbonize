require "test_helper"

class AirTripsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @air_trip = air_trips(:one)
  end

  test "should get index" do
    get air_trips_url, as: :json
    assert_response :success
  end

  test "should create air_trip" do
    assert_difference('AirTrip.count') do
      post air_trips_url, params: { air_trip: { distance: @air_trip.distance, round_trip: @air_trip.round_trip } }, as: :json
    end

    assert_response 201
  end

  test "should show air_trip" do
    get air_trip_url(@air_trip), as: :json
    assert_response :success
  end

  test "should update air_trip" do
    patch air_trip_url(@air_trip), params: { air_trip: { distance: @air_trip.distance, round_trip: @air_trip.round_trip } }, as: :json
    assert_response 200
  end

  test "should destroy air_trip" do
    assert_difference('AirTrip.count', -1) do
      delete air_trip_url(@air_trip), as: :json
    end

    assert_response 204
  end
end
