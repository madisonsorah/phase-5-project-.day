class CreateCheckListItems < ActiveRecord::Migration[6.1]
  def change
    create_table :check_list_items do |t|
      t.string :item
      t.integer :theme_id

      t.timestamps
    end
  end
end
