class Theme < ApplicationRecord
    has_many :authors
    has_many :questions
    has_many :check_list_items
end
