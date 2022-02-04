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

  # Journal Entry CRUD actions
  resources :journal_entries, only: [:index, :show, :create, :update, :destroy] 

  # Theme CRUD actions
  resources :themes, only: [:index, :show, :update]

  # Question CRUD actions
  resources :questions, only: [:index, :show]

  # Answer CRUD actions 
  resources :answers, only: [:index, :show, :create, :update]

  
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
