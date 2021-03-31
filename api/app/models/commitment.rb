# Schema.rb
# t.string 'title'
# t.string 'description'

class Commitment < ApplicationRecord
  validates :title, :description, presence: true
  has_many :user_commitments, dependent: :destroy
  has_many :users, through: :user_commitments
end
