Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  authenticated :user do
    root 'home#index'
  end

  unauthenticated :user do
    root 'home#landing'
  end

  #devise
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks'}
  #End devise

  # Home controller
  get 'get_current_user' => 'home#get_current_user'
  get "home/*path", to: 'home#index' #for React Router
  # End Home controller

  # Movie controller
  get 'get_list_movie_for_user' => 'movie#get_list_movie_for_user'
  get 'get_part_for_move_id' => 'movie#get_part_for_move_id'
  get 'check_answer_for_hint' => 'movie#check_answer_for_hint'
  # End Movie controller

  get '*unmatched_route', to: 'application#not_found'
end
