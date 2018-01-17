class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable, omniauth_providers: [:google_oauth2,:facebook]


  has_many :user_part, :foreign_key => :id , :primary_key => :id
  has_many :user_movie, :foreign_key => :id , :primary_key => :id

  def self.from_omniauth(access_token)
    data = access_token.info
    user = User.where(email: data['email']).first

    # Uncomment the section below if you want users to be created if they don't exist
    unless user
        user = User.create( email: data['email'],
                           password: Devise.friendly_token[0,20],
                           provider: access_token['provider'], uid: access_token['uid'],
                           full_name: data['name']
        )
    end
    user
  end
end
