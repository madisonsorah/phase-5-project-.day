class ChecksController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        checks = Check.all
        render json: checks
    end

    def show
        check = Check.find_check
        render json: check
    end

    def entrychecks
        checks = Check.where(journal_entry_id: params[:journal_entry_id])
        render json: checks, include: [:check_list_item]
    end

    def create_entry_checks
        entry = JournalEntry.find(params[:journal_entry_id])
        checks = params[:checks]
        checks.each do |check_list_item_id, checked|
            Check.create(checked: checked, check_list_item_id: check_list_item_id, journal_entry_id: entry.id)
        end
    end

    def update_entry_checks
        checks = params[:updatedchecks]
        checks.each do |check_id, checked|
            Check.find(check_id).update(checked: checked)
        end
    end

    def create
        check = Check.create!(check_params)
        render json: check, status: :created
    end

    def update
        check = Check.find_check
        check.update!(check_params)
        render json: check
    end

    private
    def find_check
        check = Check.find(params[:id])
    end

    def check_params
        params.permit(:checked, :check_list_item_id, :journal_entry_id)
    end

    def render_not_found_response
        render json: {error: 'Check not found'}, status: :not_found
    end

    def render_unprocessable_entity_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end
