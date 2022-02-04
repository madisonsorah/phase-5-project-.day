class JournalEntriesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        journalentries = JournalEntry.all
        render json: journalentries
    end

    def show
        journalentry = find_journalentry
        render json: journalentry
    end

    def create
        journalentry = JournalEntry.create!(journalentry_params)
        render json: journalentry, status: :created
    end

    def update
        journalentry = find_journalentry
        journalentry.update!(journalentry_params)
        render json: journalentry
    end

    def destroy
        journalentry = find_journalentry
        journalentry.destroy
        head :no_content
    end
    
    private
    def find_journalentry
        journalentry = JournalEntry.find(params[:id])
    end

    def journalentry_params
        params.permit(:image_url, :date, :author_id)
    end

    def render_not_found_response
        render json: {error: "Journal entry not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end