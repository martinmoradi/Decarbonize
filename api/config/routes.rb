Rails
  .application
  .routes
  .draw do
    namespace :api, defaults: { format: :json } do
      namespace :v1 do
        resources :fixed_emissions do
          resource :emissions, module: :fixed_emissions
        end
        resources :regular_trips do
          resource :emissions, module: :regular_trips
        end
        resources :land_trips do
          resource :emissions, module: :land_trips
        end
        resources :air_trips do
          resource :emissions, module: :air_trips
        end
        resources :meals
        resource :users
      end
    end

    devise_for :users,
               defaults: {
                 format: :json,
               },
               path: '',
               path_names: {
                 sign_in: 'login',
                 sign_out: 'logout',
                 registration: 'signup',
               },
               controllers: {
                 sessions: 'sessions',
                 registrations: 'registrations',
               }
  end
