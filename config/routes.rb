Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # Author login
  post '/login', to: 'sessions#create'

  # Author logout
  delete '/logout', to: 'sessions#destroy'

  # Current logged in author
  get "/currentauthor", to: "authors#currentauthor"

  # Answers that belong to a journal entry
  get '/journal_entries/:journal_entry_id/answers', to: 'answers#entryanswers'

  # Adding answers to a journal entry
  post '/journal_entries/:journal_entry_id/answers', to: 'answers#create_entry_answers'

  # Adding theme to an author
  patch '/authors/:id/theme', to: 'authors#addtheme'

  # Editing a journal entry's answers
  patch '/journal_entries/:journal_entry_id/answers', to: 'answers#update_entry_answers'

  # Theme & questions that belong to an author
  get '/authors/:author_id/themes', to: 'themes#authortheme'
  
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
