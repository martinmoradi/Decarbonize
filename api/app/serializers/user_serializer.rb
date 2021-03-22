class UserSerializer
  include JSONAPI::Serializer
  attributes :id, :email

  attribute :has_completed_onboarding do |object|
    FixedEmission.where(user_id: object.id).exists?
  end
end
