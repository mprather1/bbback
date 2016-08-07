Rails.application.routes.draw do
  get "users" => "users#index"
  get "user/:id" => "users#show"
  post "user" => "users#create"
  
  root to: "application#index"
end
