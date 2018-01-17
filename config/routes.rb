Rails.application.routes.draw do
  authenticated :user do
    root 'home#index'
  end

  unauthenticated :user do
    root 'home#landing'
  end

  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }


end
