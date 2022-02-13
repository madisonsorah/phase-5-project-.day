class AuthorsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def show
        author = find_author
        render json: author
    end

    def currentauthor
        author = Author.find_by(id: session[:author_id])
        if author
            render json: author
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end

    def create
        author = Author.create(author_params)
        if author.valid?
          render json: author, status: :created
        else
          render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
      end

    def update
        author = find_author
        author.update!(author_params)
        render json: author
    end

    def destroy
        author = find_author
        author.destroy
        head :no_content
    end

    private
    def find_author
        Author.find(params[:id])
    end

    def author_params
        params.permit(:first_name, :last_name, :pen_name, :email, :password, :bio, :avatar_url)
    end

    def render_not_found_response
        render json: {error: "Author not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end
