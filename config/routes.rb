Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :videos, only: [:index, :show] do
      resources :comments, only: [:create, :update]
      get 'comments', to: 'comments#video'
    end
    resources :users, only: [:show] do
      resources :videos, only: [:create, :destroy]
      resources :comments, only: [:index, :destroy, :show, :update]
    end
  end
end
