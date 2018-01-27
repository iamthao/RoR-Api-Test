class HomeController < ApplicationController
  layout "_shared.main"

  def index
    @hello_world_props = { name: "Stranger" }
  end
end

