class CheckListItemsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        items = CheckListItem.all
        render json: items
    end

    def show
        item = CheckListItem.find_item
        render json: item
    end

    private
    def find_item
        item = CheckListItem.find(params[:id])
    end

    def render_not_found_response
        render json: {error: 'Check list item not found'}, status: :not_found
    end
end
