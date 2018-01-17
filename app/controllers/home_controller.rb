require 'faraday'
require 'json'

class HomeController < ApplicationController
  layout '_shared.main'
  def landing
    render layout: false
  end

  def index
    @user = 'Home'
  end

  def login_success

  end

end
