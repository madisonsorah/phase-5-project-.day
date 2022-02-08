class AnswersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        answers = Answer.all
        render json: answers
    end

    def show
        answer = Answer.find_answer
        render json: answer
    end

    def entryanswers
        answers = Answer.where(journal_entry_id: params[:journal_entry_id])
        render json: answers, include: ['question']
    end

    def create
        answer = Answer.create!(answer_params)
        render json: answer, status: :created
    end

    def update
        answer = Answer.find_answer
        answer.update!(answer_params)
        render json: answer
    end

    private
    def find_answer
        answer = Answer.find(params[:id])
    end

    def answer_params
        params.permit(:answer, :question_id, :journal_entry_id)
    end

    def render_not_found_response
        render json: {error: "Answer not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end
