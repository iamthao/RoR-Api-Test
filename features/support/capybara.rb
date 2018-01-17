Capybara.register_driver :selenium do |app|
  Capybara::Selenium::Driver.new(app, :browser => :chrome,desired_capabilities: {
      "chromeOptions" => {
        "args" => %w{ window-size=1024,768 }
      }
    })
end

#Capybara.server do |app, port|
  #require 'rack/handler/thin'
  #Rack::Handler::Thin.run(app, :Port => port)
#end


