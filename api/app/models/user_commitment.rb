# Commitments =
# 1) I switch my appliances off instead of leaving them on standby'
# 2) I reduce the heating at home by 1°C
# 3) I opt in for eco-friendly driving
# 4) I drink tap water instead of bottled water
# 5) I reduce food waste
# 6) I buy groceries in a bulk food store

class UserCommitment < ApplicationRecord
  belongs_to :user
  belongs_to :commitment
end
