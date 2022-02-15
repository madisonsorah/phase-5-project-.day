class RemoveAvatarUrlFromAuthors < ActiveRecord::Migration[6.1]
  def change
    remove_column :authors, :avatar_url, :string
  end
end
