# frozen_string_literal: true

class ReactController < ApplicationController
  layout "_shared.main"

  def index
    @hello_world_props = { name: "Stranger" }
  end
end
