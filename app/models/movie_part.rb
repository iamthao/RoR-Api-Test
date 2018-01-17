class MoviePart < ApplicationRecord
  belongs_to :movie, :foreign_key => :movie_id , :primary_key => :id
  belongs_to :part, :foreign_key => :part_id , :primary_key => :id
end
