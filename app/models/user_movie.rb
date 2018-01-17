class UserMovie < ApplicationRecord
  belongs_to :movie, :foreign_key => :movie_id , :primary_key => :id
  belongs_to :user, :foreign_key => :user_id , :primary_key => :id
end
