class Theme < ApplicationRecord
    belongs_to :author
    belongs_to :journal_entry
    has_many :questions
end
