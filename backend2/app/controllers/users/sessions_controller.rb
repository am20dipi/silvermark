# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  respond_to :json

  def create
    super 
  end

  private

  def respond_with(resource, _opts = {})
    current_user
    render json: {
      status: {code: 200, message: 'Logged in sucessfully.'},
      data: resource
    }, status: :ok
  end

  def respond_to_on_destroy
    
    if current_user
      render json: {
        status: 200,
        message: "Logged out successfully"
      }, status: :ok
    else
      
      render json: {
        status: 401,
        message: "Couldn't find an active session."
      }, status: :unauthorized
    end
  end
end