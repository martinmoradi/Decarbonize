class Api::V1::RegularTripsController < Api::V1::ApiBaseController
  before_action :set_regular_trip, only: %i[show update destroy]

  # GET /regular_trips
  def index
    @regular_trips = RegularTrip.all

    render json: @regular_trips
  end

  # GET /regular_trips/1
  def show
    render json: @regular_trip
  end

  # POST /regular_trips
  def create
    @regular_trip = RegularTrip.new(regular_trip_params)

    if @regular_trip.save
      render json: @regular_trip, status: :created, location: api_v1_regular_trips_url(@regular_trip)
    else
      render json: @regular_trip.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /regular_trips/1
  def update
    if @regular_trip.update(regular_trip_params)
      render json: @regular_trip
    else
      render json: @regular_trip.errors, status: :unprocessable_entity
    end
  end

  # DELETE /regular_trips/1
  def destroy
    @regular_trip.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_regular_trip
    @regular_trip = RegularTrip.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def regular_trip_params
    params.require(:regular_trip).permit(:user_id, :vehicle_type, :departure_latitude, :departure_longitude,
                                         :arrival_latitude, :arrival_longitude, :round_trip, :monday, :tuesday, :wednesday, :thursday, :friday, :saturday, :sunday)
  end
end
