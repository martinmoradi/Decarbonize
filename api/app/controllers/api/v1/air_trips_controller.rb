class Api::V1::AirTripsController < Api::V1::ApiBaseController
  before_action :set_air_trip, only: %i[show update destroy]

  # GET /air_trips
  def index
    @air_trips = AirTrip.all

    render json: @air_trips
  end

  # GET /air_trips/1
  def show
    render json: @air_trip
  end

  # POST /air_trips
  def create
    @air_trip = AirTrip.new(air_trip_params)

    if @air_trip.save
      render json: @air_trip, status: :created, location: api_v1_air_trips_url(@air_trip)
    else
      render json: @air_trip.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /air_trips/1
  def update
    if @air_trip.update(air_trip_params)
      render json: @air_trip
    else
      render json: @air_trip.errors, status: :unprocessable_entity
    end
  end

  # DELETE /air_trips/1
  def destroy
    @air_trip.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_air_trip
    @air_trip = AirTrip.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def air_trip_params
    params.require(:air_trip).permit(:round_trip, :distance)
  end
end