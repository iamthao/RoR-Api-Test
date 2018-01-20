class Movie < ApplicationRecord
  has_many :user_movie, :foreign_key => :id , :primary_key => :id
  has_many :movie_part, :foreign_key => :id , :primary_key => :id
end
