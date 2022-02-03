class Answer < ApplicationRecord
    belongs_to :question
    belongs_to :journal_entry
end
