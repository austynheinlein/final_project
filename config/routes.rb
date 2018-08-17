Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/trails', to: 'trails#index'
  get '/trails/:id', to: 'trails#show'
  post '/trails', to: 'trails#create'
  delete '/trails/:id', to: 'trails#delete'
  put '/trails/:id', to: 'trails#update'

end
