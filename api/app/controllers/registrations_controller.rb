class RegistrationsController < Devise::RegistrationsController
  respond_to :json

  def destroy
    resource.destroy
    render json: { status: { code: 200, message: 'User successfully deleted' } }
  end

  private

  def respond_with(resource, _opts = {})
    if resource.persisted?
      render json: {
               status: {
                 code: 200,
                 message: 'Signed up sucessfully.',
               },
               data: {
                 id: resource.id,
                 email: resource.email,
               },
             }
    else
      render json: {
               status: {
                 message:
                   "User couldn't be created successfully. #{resource.errors.full_messages.to_sentence}",
               },
             },
             status: :unprocessable_entity
    end
  end

  def sign_up_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end

  # def account_update_params
  #   params.require(:user).permit(:first_name, :email, :password, :password_confirmation, :current_password,
  #                                :current_plan_id)
  # end
end
