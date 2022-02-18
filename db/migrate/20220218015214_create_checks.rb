class CreateChecks < ActiveRecord::Migration[6.1]
  def change
    create_table :checks do |t|
      t.boolean :checked
      t.integer :check_list_item
      t.integer :journal_entry_id

      t.timestamps
    end
  end
end
