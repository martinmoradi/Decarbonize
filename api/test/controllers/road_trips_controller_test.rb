require 'test_helper'

class LandripsControllerTest < ActionDispatch::IntegrationTest
  setup { @land_trip = land_trips(:one) }

  test 'should get index' do
    get land_trips_url, as: :json
    assert_response :success
  end

  test 'should create land_trip' do
    assert_difference('LandTrip.count') do
      post land_trips_url,
           params: {
             land_trip: {
               distance: @land_trip.distance,
               round_trip: @land_trip.round_trip,
               vehicle_type: @land_trip.vehicle_type,
             },
           },
           as: :json
    end

    assert_response 201
  end

  test 'should show land_trip' do
    get land_trip_url(@land_trip), as: :json
    assert_response :success
  end

  test 'should update land_trip' do
    patch land_trip_url(@land_trip),
          params: {
            land_trip: {
              distance: @land_trip.distance,
              round_trip: @land_trip.round_trip,
              vehicle_type: @land_trip.vehicle_type,
            },
          },
          as: :json
    assert_response 200
  end

  test 'should destroy land_trip' do
    assert_difference('LandTrip.count', -1) { delete land_trip_url(@land_trip), as: :json }

    assert_response 204
  end
end
