class RenameCheckCheckListItemToCheckListItemId < ActiveRecord::Migration[6.1]
  def change
    rename_column :checks, :check_list_item, :check_list_item_id
  end
end
