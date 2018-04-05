class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  def index
  end

  def dashboard2

  end

  def user_id
    if !current_user.blank?
        return current_user.id
    else
        return 0
    end
  end
end
