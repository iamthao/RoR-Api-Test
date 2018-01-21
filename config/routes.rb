Rails.application.routes.draw do
  get 'react', to: 'react#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #
  root 'application#index'
  get 'dashboard2' => 'application#dashboard2'
end
