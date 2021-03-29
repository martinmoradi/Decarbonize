require "test_helper"

class CommitmentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @commitment = commitments(:one)
  end

  test "should get index" do
    get commitments_url, as: :json
    assert_response :success
  end

  test "should create commitment" do
    assert_difference('Commitment.count') do
      post commitments_url, params: { commitment: { title: @commitment.title } }, as: :json
    end

    assert_response 201
  end

  test "should show commitment" do
    get commitment_url(@commitment), as: :json
    assert_response :success
  end

  test "should update commitment" do
    patch commitment_url(@commitment), params: { commitment: { title: @commitment.title } }, as: :json
    assert_response 200
  end

  test "should destroy commitment" do
    assert_difference('Commitment.count', -1) do
      delete commitment_url(@commitment), as: :json
    end

    assert_response 204
  end
end
