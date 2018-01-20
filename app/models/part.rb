class Part < ApplicationRecord
  has_many :movie_part, :foreign_key => :id , :primary_key => :id
  has_many :user_part, :foreign_key => :id , :primary_key => :id
end
