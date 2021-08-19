class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
    
    def encode_token(payload)
    # don't forget to hide your JWT_SECRET in an environment variable
      JWT.encode(payload, ENV['JWT_SECRET'])
    end
  
    def auth_header
      request.headers['Authorization']
    end
  

    def decoded_token
      if auth_header
        token = auth_header.split(' ')[1]
        begin
          JWT.decode(token, ENV['JWT_SECRET'], true, algorithm: 'HS256')
        rescue JWT::DecodeError
          nil
        end
      end
    end
  
    def current_user
        if decoded_token
          user_id = decoded_token[0]['user_id']
          user = User.find_by(id: user_id)
        end
      end
    
      def logged_in?
        !!current_user
      end
    
      def authorized
        render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
      end
    

end
