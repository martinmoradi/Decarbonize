class Api::V1::FixedEmissionsController < Api::V1::ApiBaseController
  before_action :set_fixed_emission, only: [:show, :update, :destroy]

  # GET /fixed_emissions
  def index
    @fixed_emissions = FixedEmission.all

    render json: @fixed_emissions
  end

  # GET /fixed_emissions/1
  def show
    render json: @fixed_emission
  end

  # POST /fixed_emissions
  def create
    @fixed_emission = FixedEmission.new(fixed_emission_params)

    if @fixed_emission.save
      render json: @fixed_emission, status: :created, location: api_v1_fixed_emissions_url(@fixed_emission)
    else
      render json: @fixed_emission.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /fixed_emissions/1
  def update
    if @fixed_emission.update(fixed_emission_params)
      render json: @fixed_emission
    else
      render json: @fixed_emission.errors, status: :unprocessable_entity
    end
  end

  # DELETE /fixed_emissions/1
  def destroy
    @fixed_emission.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_fixed_emission
      @fixed_emission = FixedEmission.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def fixed_emission_params
      params.require(:fixed_emission).permit(:user_id, :house_surface, :electricity_consumption, :heating_fuel, :heating_consumption, :float)
    end
end
