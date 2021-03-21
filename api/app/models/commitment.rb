class Commitment < ApplicationRecord
  has_many :user_commitments, dependent: :destroy
  has_many :users, through: :user_commitments
end
