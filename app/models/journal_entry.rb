class JournalEntry < ApplicationRecord
    belongs_to :author
    has_one :theme, through: :author
    has_many :questions, through: :theme
    has_many :check_list_items, through: :theme
    has_many :answers
end
