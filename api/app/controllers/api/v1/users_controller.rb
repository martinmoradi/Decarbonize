class Api::V1::UsersController < Api::V1::ApiBaseController
  before_action :set_user, only: %i[show update]

  def show
    @land_trips = LandTrip.includes(:emission).where(user_id: current_user.id)
    @air_trips = AirTrip.includes(:emission).where(user_id: current_user.id)
    render json: { data: { land_trips: @land_trips, road_trips: @air_trips } }
  end

  # def show
  #   @land_trips = LandTrip.all.where(user_id: current_user.id)
  #   @air_trips = AirTrip.all.where(user_id: current_user.id)
  #   render json: current_user.to_json(
  #     include: :air_trips
  #   )
  # end

  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private

  def set_user
    @user = current_user
  end

  def user_params
    params.require(:user).permit(:email)
  end
end
