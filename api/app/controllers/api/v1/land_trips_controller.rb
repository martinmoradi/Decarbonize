class Api::V1::LandTripsController < Api::V1::ApiBaseController
  before_action :set_land_trip, only: %i[show update destroy]

  # GET /land_trip
  def index
    @land_trips = LandTrip.where(user_id: current_user.id).order(created_at: :desc)
    @air_trips = AirTrip.where(user_id: current_user.id).order(created_at: :desc)

    render json: {
      status:{
        code: 200
      },
      data: {land_trips: @land_trips, air_trips: @air_trips} 
    }
  end
  
  # GET /land_trip/1
  def show
    @land_trips = LandTrip.where(user_id: current_user.id).order(created_at: :desc)
    @air_trips = AirTrip.where(user_id: current_user.id).order(created_at: :desc)
    render json: {
      status:{
        code: 200
      },
      data: { land_trips: @land_trips, air_trips: @air_trips } 
    }
  end

  # POST /land_trip
  def create
    @land_trip = LandTrip.new(land_trip_params)
    @land_trip.user_id = current_user.id
    @land_trips = LandTrip.where(user_id: current_user.id).order(created_at: :desc)
    @air_trips = AirTrip.where(user_id: current_user.id).order(created_at: :desc)
    if @land_trip.save
      render json: {
               status: {
                 code: 200,
                 message: 'Land Trip emission was successfully created',
               },
               data: { trips: {land_trips: @land_trips, air_trips: @air_trips }, emissions: EmissionSerializer.new(current_user).serializable_hash[:data][:attributes]  }
             }
    else
      render json: @land_trip.errors, status: :unprocessable_entity
    end
  end

  

  # PATCH/PUT /land_trip/1
  def update
    if @land_trip.update(land_trip_params)
      render json: @land_trip
    else
      render json: @land_trip.errors, status: :unprocessable_entity
    end
  end

  # DELETE /land_trip/1
  def destroy
    @land_trip.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_land_trip
    @land_trip = LandTrip.find_by(user_id: current_user.id)
  end

  # Only allow a list of trusted parameters through.
  def land_trip_params
    params.require(:land_trip).permit(:vehicle_type, :distance, :round_trip)
  end
end
