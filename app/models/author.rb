class Author < ApplicationRecord
    has_one :theme
    has_many :journal_entries

    has_secure_password
end
