require 'test_helper'

class RoadTripsControllerTest < ActionDispatch::IntegrationTest
  setup { @road_trip = road_trips(:one) }

  test 'should get index' do
    get road_trips_url, as: :json
    assert_response :success
  end

  test 'should create road_trip' do
    assert_difference('RoadTrip.count') do
      post road_trips_url,
           params: {
             road_trip: {
               distance: @road_trip.distance,
               round_trip: @road_trip.round_trip,
               vehicle_type: @road_trip.vehicle_type
             }
           },
           as: :json
    end

    assert_response 201
  end

  test 'should show road_trip' do
    get road_trip_url(@road_trip), as: :json
    assert_response :success
  end

  test 'should update road_trip' do
    patch road_trip_url(@road_trip),
          params: {
            road_trip: {
              distance: @road_trip.distance,
              round_trip: @road_trip.round_trip,
              vehicle_type: @road_trip.vehicle_type
            }
          },
          as: :json
    assert_response 200
  end

  test 'should destroy road_trip' do
    assert_difference('RoadTrip.count', -1) { delete road_trip_url(@road_trip), as: :json }

    assert_response 204
  end
end
