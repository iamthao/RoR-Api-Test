class UserPart < ApplicationRecord
  belongs_to :part, :foreign_key => :part_id , :primary_key => :id
  belongs_to :user, :foreign_key => :user_id , :primary_key => :id
end
