class Api::V1::MealsController < Api::V1::ApiBaseController
  before_action :set_meal, only: %i[show update]

  # GET /meals
  def index
    @red_meat_meals = Meal.red_meat.where(user_id: current_user.id).order(created_at: :desc)
    @white_meat_meals = Meal.white_meat.where(user_id: current_user.id).order(created_at: :desc)
    @vegetarian_meals = Meal.vegetarian.where(user_id: current_user.id).order(created_at: :desc)
    @vegan_meals = Meal.vegan.where(user_id: current_user.id).order(created_at: :desc)
    render json: {
      status:{
        code: 200
      },
      data: {red_meat_meals: @red_meat_meals, white_meat_meals: @white_meat_meals, vegetarian_meals: @vegetarian_meals, vegan_meals: @vegan_meals}
    }
  end

  # GET /meals/1
  def show
    render json: @meal
  end

  # POST /meals
  def create
    @meal = Meal.new(meal_params)
    @meal.user_id = current_user.id
    @red_meat_meals = Meal.red_meat.where(user_id: current_user.id).order(created_at: :desc)
    @white_meat_meals = Meal.white_meat.where(user_id: current_user.id).order(created_at: :desc)
    @vegetarian_meals = Meal.vegetarian.where(user_id: current_user.id).order(created_at: :desc)
    @vegan_meals = Meal.vegan.where(user_id: current_user.id).order(created_at: :desc)
    if @meal.save
      render json: {
        status: {
          code: 200,
          message: 'Meal emission was successfully created',
        },
        data: {meals: {red_meat_meals: @red_meat_meals, white_meat_meals: @white_meat_meals, vegetarian_meals: @vegetarian_meals, vegan_meals: @vegan_meals}, emissions: EmissionSerializer.new(current_user).serializable_hash[:data][:attributes] }
      }
    else
      render json: @meal.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /meals/1
  def update
    if @meal.update(meal_params)
      render json: @meal
    else
      render json: @meal.errors, status: :unprocessable_entity
    end
  end

  # DELETE /meals/1
  def destroy
    @meal= Meal.where(user_id: current_user.id, id: params[:id])
    @red_meat_meals = Meal.red_meat.where(user_id: current_user.id).order(created_at: :desc)
    @white_meat_meals = Meal.white_meat.where(user_id: current_user.id).order(created_at: :desc)
    @vegetarian_meals = Meal.vegetarian.where(user_id: current_user.id).order(created_at: :desc)
    @vegan_meals = Meal.vegan.where(user_id: current_user.id).order(created_at: :desc)
    if @meal.destroy(params[:id])
      render json: {status: {
        code: 200,
        message: 'Meal was successfully destroyed',
      },
      data: {meals: {red_meat_meals: @red_meat_meals, white_meat_meals: @white_meat_meals, vegetarian_meals: @vegetarian_meals, vegan_meals: @vegan_meals}, emissions: EmissionSerializer.new(current_user).serializable_hash[:data][:attributes] }}
    else
      render json: @meal.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_meal
      @meal = Meal.find_by(user_id: current_user.id)
    end

    # Only allow a list of trusted parameters through.
    def meal_params
      params.require(:meal).permit(:meal_type, :id)
    end
end
