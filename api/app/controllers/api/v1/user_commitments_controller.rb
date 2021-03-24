class Api::V1::UserCommitmentsController < Api::V1::ApiBaseController
  before_action :set_user_commitment, only: %i[destroy]

  # POST /user_commitments
  def create
    @user_commitment = UserCommitment.new(user_commitment_params)
    @user_commitment.user_id = current_user.id

    if @commitment.save
      render json: @user_commitment, status: :created, location: @user_commitment
    else
      render json: @user_commitment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user_commitments/1
  def destroy
    @user_commitment.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_user_commitment
    @user_commitment =
      UserCommitment.where(user_id: current_user.id).find_by(commitment_id: commitment.id)
  end

  # Only allow a list of trusted parameters through.
  def user_commitment_params
    params.require(:user_commitment).permit(:user_id, :commitment_id)
  end
end
