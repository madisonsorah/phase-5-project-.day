class JournalEntry < ApplicationRecord
    belongs_to :author
    has_many :answers
    has_one :theme, through: :author
    has_many :questions, through: :theme
end
