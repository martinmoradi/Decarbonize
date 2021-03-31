# Commitments =
# 1) I switch my appliances off instead of leaving them on standby'
# 2) I reduce the heating at home by 1°C
# 3) I opt in for eco-friendly driving
# 4) I drink tap water instead of bottled water
# 5) I reduce food waste
# 6) I buy groceries in a bulk food store

# Schema.rb
# t.bigint 'user_id'
# t.bigint 'commitment_id'

class UserCommitment < ApplicationRecord
  validates :user_id, :commitment_id, presence: true, numericality: { only_integer: true }

  belongs_to :user
  belongs_to :commitment
end
