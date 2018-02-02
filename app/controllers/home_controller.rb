class HomeController < ApplicationController
  before_action :authenticate_user!, :only => [:index]
  layout "_shared.main"

  def index
    @hello_world_props = { name: "Stranger" }
  end
end

