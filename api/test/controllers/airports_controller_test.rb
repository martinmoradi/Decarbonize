require 'test_helper'

class AirportsControllerTest < ActionDispatch::IntegrationTest
  setup { @airport = airports(:one) }

  test 'should get index' do
    get airports_url, as: :json
    assert_response :success
  end

  test 'should create airport' do
    assert_difference('Airport.count') do
      post airports_url,
           params: {
             airport: {
               city: @airport.city,
               code: @airport.code,
               latitude: @airport.latitude,
               longitude: @airport.longitude
             }
           },
           as: :json
    end

    assert_response 201
  end

  test 'should show airport' do
    get airport_url(@airport), as: :json
    assert_response :success
  end

  test 'should update airport' do
    patch airport_url(@airport),
          params: {
            airport: {
              city: @airport.city,
              code: @airport.code,
              latitude: @airport.latitude,
              longitude: @airport.longitude
            }
          },
          as: :json
    assert_response 200
  end

  test 'should destroy airport' do
    assert_difference('Airport.count', -1) { delete airport_url(@airport), as: :json }

    assert_response 204
  end
end
