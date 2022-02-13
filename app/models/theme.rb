class Theme < ApplicationRecord
    has_many :authors
    has_many :questions
end
