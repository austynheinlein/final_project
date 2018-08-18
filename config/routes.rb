Rails.application.routes.draw do

  get '/trails', to: 'trails#index'
  get '/trails/:id', to: 'trails#show'
  post '/trails', to: 'trails#create'
  delete '/trails/:id', to: 'trails#delete'
  put '/trails/:id', to: 'trails#update'

end
