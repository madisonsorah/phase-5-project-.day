Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # Author login
  post '/authorlogin', to: 'sessions#create'

  # Author logout
  delete '/authorlogout', to: 'sessions#destroy'

  # Current logged in author
  get "/me", to: "authors#currentauthors"
  
  # Author CRUD actions
  resources :authors, only: [:show, :create, :update, :destroy]
  
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
