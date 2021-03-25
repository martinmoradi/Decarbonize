class Api::V1::FixedEmissionsController < Api::V1::ApiBaseController
  before_action :set_fixed_emission, only: %i[index show update destroy]

  # GET /fixed_emissions
  def index
    
    render json: {
             status: {
               code: 200,
             },
             data: EmissionSerializer.new(current_user).serializable_hash[:data][:attributes],
           }
  end

  # GET /fixed_emissions/1
  def show
    render json: {
             status: {
               code: 200,
             },
             data: EmissionSerializer.new(current_user).serializable_hash[:data][:attributes],
           }
  end

  def edit_fixed_emission
    @fixed_emissions = FixedEmission.all
  end
  # POST /fixed_emissions
  def create
    @fixed_emission = FixedEmission.new(fixed_emission_params)
    @fixed_emission.user_id = current_user.id
    if @fixed_emission.save
      render json: {
               status: {
                 code: 200,
                 message: 'Fixed emission was successfully created',
               },
               data: EmissionSerializer.new(current_user).serializable_hash[:data][:attributes],
             }
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
    @fixed_emission = FixedEmission.find_by(user_id: current_user.id)
  end

  # Only allow a list of trusted parameters through.
  def fixed_emission_params
    params
      .require(:fixed_emission)
      .permit(
        :user_id,
        :house_surface,
        :electricity_consumption,
        :gas_consumption,
        :wood_consumption,
        :wood_type,
        :fuel_consumption,
        :roommates,
        :clothes,
        :furnitures,
        :others,
        :breakfasts_per_week,
        :red_meats_per_week,
        :vegan_per_week,
        :vegetarian_per_week,
        :white_meats_per_week,
      )
  end
end
