Rails.application.routes.draw do
  root 'home#index'
  get 'admin' => 'application#index'
end
