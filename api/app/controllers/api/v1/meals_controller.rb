class Api::V1::MealsController < Api::V1::ApiBaseController
  before_action :set_meal, only: %i[show update destroy]

  # GET /meals
  def index
    @meals = Meal.where(user_id: current_user.id).order(created_at: :desc)

    render json: {
      status:{
        code: 200
      },
      data: @meals
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
    @meals = Meal.where(user_id: current_user.id).order(created_at: :desc)
    if @meal.save
      render json: {
        status: {
          code: 200,
          message: 'Meal emission was successfully created',
        },
        data: @meals
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
    @meal.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_meal
      @meal = Meal.find_by(user_id: current_user.id)
    end

    # Only allow a list of trusted parameters through.
    def meal_params
      params.require(:meal).permit(:meal_type)
    end
end
