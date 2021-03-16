class Api::V1::RoadTripsController < Api::V1::ApiBaseController
  before_action :set_road_trip, only: %i[show update destroy]

  # GET /road_trips
  def index
    @road_trips = RoadTrip.all

    render json: @road_trips
  end

  # GET /road_trips/1
  def show
    render json: @road_trip
  end

  # POST /road_trips
  def create
    @road_trip = RoadTrip.new(road_trip_params)

    if @road_trip.save
      Emission.create!(amount: @road_trip.emitted_carbon, emissionable: @road_trip, user_id: current_user.id)
      render json: @road_trip, status: :created,
             location: api_v1_road_trips_url(@road_trip)
    else
      render json: @road_trip.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /road_trips/1
  def update
    if @road_trip.update(road_trip_params)
      render json: @road_trip
    else
      render json: @road_trip.errors, status: :unprocessable_entity
    end
  end

  # DELETE /road_trips/1
  def destroy
    @road_trip.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_road_trip
    @road_trip = RoadTrip.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def road_trip_params
    params.require(:road_trip).permit(:vehicle_type, :distance, :round_trip)
  end
end
