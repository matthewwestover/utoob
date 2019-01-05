Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :videos, only: [:index]
    resources :users, only: [:show] do
      resources :posts, only: [:create, :destroy]
      get 'my_videos', to: 'videos#my_videos'
    end
  end
end
