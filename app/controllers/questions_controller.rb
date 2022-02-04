class QuestionsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        questions = Question.all
        render json: questions
    end

    def show
        question = Question.find_question
        render json: question
    end

    private
    def find_question
        question = Question.find(params[:id])
    end

    def render_not_found_response
        render json: {error: "Question not found"}, status: :not_found
    end
end
