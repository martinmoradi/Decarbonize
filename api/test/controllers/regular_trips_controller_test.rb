require 'test_helper'

class RegularTripsControllerTest < ActionDispatch::IntegrationTest
  setup { @regular_trip = regular_trips(:one) }

  test 'should get index' do
    get regular_trips_url, as: :json
    assert_response :success
  end

  test 'should create regular_trip' do
    assert_difference('RegularTrip.count') do
      post regular_trips_url,
           params: {
             regular_trip: {
               arrival_latitude: @regular_trip.arrival_latitude,
               arrival_longitude: @regular_trip.arrival_longitude,
               departure_latitude: @regular_trip.departure_latitude,
               departure_longitude: @regular_trip.departure_longitude,
               friday: @regular_trip.friday,
               monday: @regular_trip.monday,
               round_trip: @regular_trip.round_trip,
               saturday: @regular_trip.saturday,
               sunday: @regular_trip.sunday,
               thursday: @regular_trip.thursday,
               tuesday: @regular_trip.tuesday,
               user_id: @regular_trip.user_id,
               vehicle_type: @regular_trip.vehicle_type,
               wednesday: @regular_trip.wednesday
             }
           },
           as: :json
    end

    assert_response 201
  end

  test 'should show regular_trip' do
    get regular_trip_url(@regular_trip), as: :json
    assert_response :success
  end

  test 'should update regular_trip' do
    patch regular_trip_url(@regular_trip),
          params: {
            regular_trip: {
              arrival_latitude: @regular_trip.arrival_latitude,
              arrival_longitude: @regular_trip.arrival_longitude,
              departure_latitude: @regular_trip.departure_latitude,
              departure_longitude: @regular_trip.departure_longitude,
              friday: @regular_trip.friday,
              monday: @regular_trip.monday,
              round_trip: @regular_trip.round_trip,
              saturday: @regular_trip.saturday,
              sunday: @regular_trip.sunday,
              thursday: @regular_trip.thursday,
              tuesday: @regular_trip.tuesday,
              user_id: @regular_trip.user_id,
              vehicle_type: @regular_trip.vehicle_type,
              wednesday: @regular_trip.wednesday
            }
          },
          as: :json
    assert_response 200
  end

  test 'should destroy regular_trip' do
    assert_difference('RegularTrip.count', -1) { delete regular_trip_url(@regular_trip), as: :json }

    assert_response 204
  end
end
