Rails.application.routes.draw do
  
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resource :fixed_emissions do
        resource :emissions, module: :fixed_emissions
      end
      resource :regular_trips do
        resource :emissions, module: :regular_trips
      end
      resource :road_trips do
        resource :emissions, module: :road_trips
      end
      resource :air_trips do
        resource :emissions, module: :air_trips
      end
      resource :airports
    end
  end

  devise_for :users,
             defaults: { format: :json },
             path: '',
             path_names: {
               sign_in: 'login',
               sign_out: 'logout',
               registration: 'signup'
             },
             controllers: {
               sessions: 'sessions',
               registrations: 'registrations'
             }
end
