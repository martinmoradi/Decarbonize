require 'test_helper'

class FixedEmissionsControllerTest < ActionDispatch::IntegrationTest
  setup { @fixed_emission = fixed_emissions(:one) }

  test 'should get index' do
    get fixed_emissions_url, as: :json
    assert_response :success
  end

  test 'should create fixed_emission' do
    assert_difference('FixedEmission.count') do
      post fixed_emissions_url,
           params: {
             fixed_emission: {
               electricity_consumption: @fixed_emission.electricity_consumption,
               float: @fixed_emission.float,
               heating_consumption: @fixed_emission.heating_consumption,
               heating_fuel: @fixed_emission.heating_fuel,
               house_surface: @fixed_emission.house_surface,
               user_id: @fixed_emission.user_id
             }
           },
           as: :json
    end

    assert_response 201
  end

  test 'should show fixed_emission' do
    get fixed_emission_url(@fixed_emission), as: :json
    assert_response :success
  end

  test 'should update fixed_emission' do
    patch fixed_emission_url(@fixed_emission),
          params: {
            fixed_emission: {
              electricity_consumption: @fixed_emission.electricity_consumption,
              float: @fixed_emission.float,
              heating_consumption: @fixed_emission.heating_consumption,
              heating_fuel: @fixed_emission.heating_fuel,
              house_surface: @fixed_emission.house_surface,
              user_id: @fixed_emission.user_id
            }
          },
          as: :json
    assert_response 200
  end

  test 'should destroy fixed_emission' do
    assert_difference('FixedEmission.count', -1) do
      delete fixed_emission_url(@fixed_emission), as: :json
    end

    assert_response 204
  end
end
