Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :users

  authenticated :user do
    root 'home#index'
  end

  unauthenticated :user do
    devise_scope :user do
      root to: "devise/sessions#new"
    end
  end

  get 'get_list_sp' => 'hang_hoa#get_list_sp'
  post 'add_new_sp' => 'hang_hoa#add_new_sp'
end
