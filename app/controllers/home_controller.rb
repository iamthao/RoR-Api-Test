require 'faraday'
require 'json'

class HomeController < ApplicationController
  before_action :authenticate_user!, :only => [:index, :get_current_user]
  layout '_shared.main'

  def landing
    render layout: false
  end

  def index

  end

  def get_current_user
    _layout false
    @user_profile = UserProfile.new
    @user_profile.error = true

    if current_user
      @user_profile.error = false
      @user_profile.full_name = current_user.full_name
    end

    render :json => @user_profile
  end

  class UserProfile
    attr_accessor :id, :full_name, :error
  end
end
