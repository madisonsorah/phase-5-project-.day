class Check < ApplicationRecord
    belongs_to :check_list_item
    belongs_to :journal_entry
end
