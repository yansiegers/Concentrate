# frozen_string_literal: true

Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'pages#home'
  get '/menu', to: 'pages#menu'

  namespace :system do
    resources :users
    resources :houses
    resources :scores
  end
end
