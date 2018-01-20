Before do
  ActionController::Base.allow_forgery_protection = true
end

After do
  ActionController::Base.allow_forgery_protection = false
end
