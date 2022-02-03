class CreateThemes < ActiveRecord::Migration[6.1]
  def change
    create_table :themes do |t|
      t.string :category
      t.integer :author_id
      t.integer :journal_entry_id

      t.timestamps
    end
  end
end
