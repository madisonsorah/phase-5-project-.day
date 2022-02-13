class RemoveAuthorIdFromThemes < ActiveRecord::Migration[6.1]
  def change
    remove_column :themes, :author_id, :integer
  end
end
