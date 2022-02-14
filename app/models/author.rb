class Author < ApplicationRecord
    has_many :journal_entries
    belongs_to :theme
    
    has_secure_password
end
