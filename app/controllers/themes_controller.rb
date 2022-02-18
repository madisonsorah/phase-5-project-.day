class ThemesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        themes = Theme.all
        render json: themes
    end

    def show
        theme = Theme.find(params[:id])
        render json: theme
    end

    def authortheme
        theme = Theme.where(author_id: params[:author_id])
        render json: theme, include: [:questions, :check_list_items]
    end

    def update
        theme = Theme.find(params[:id])
        theme.update!(theme_params)
        render json: theme
    end

    private
    def theme_params
        params.permit(:category, :journal_entry_id, :author_id)
    end

    def render_not_found_response
        render json: {error: 'Theme not found'}, status: :not_found
    end

    def render_unprocessable_entity_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end
