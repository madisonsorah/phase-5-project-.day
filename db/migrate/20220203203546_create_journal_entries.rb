class CreateJournalEntries < ActiveRecord::Migration[6.1]
  def change
    create_table :journal_entries do |t|
      t.string :image_url
      t.date :date
      t.integer :author_id

      t.timestamps
    end
  end
end
