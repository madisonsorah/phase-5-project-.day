class SessionsController < ApplicationController
    def create
      author = Author.find_by(pen_name: params[:pen_name])
        if author&.authenticate(params[:password])
          session[:author_id] = author.id
          render json: author, status: :created
        else
          render json: {error: 'Invalid pen name or password'}, status: :unauthorized
        end
    end
      
    def destroy
      session.delete :author_id
      head :no_content
    end
  end
