class Author < ApplicationRecord
    has_one :theme
    has_many :journal_entries
    has_many :rewards through :journal_entries
end
