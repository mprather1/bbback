Rails.application.routes.draw do
  get "users" => "users#index"
  get "user/:id" => "users#show"
  root to: "application#index"
end
