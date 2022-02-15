class RemoveImageUrlFromJournalEntries < ActiveRecord::Migration[6.1]
  def change
    remove_column :journal_entries, :image_url, :string
  end
end
