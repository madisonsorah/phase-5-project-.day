class CreateAuthors < ActiveRecord::Migration[6.1]
  def change
    create_table :authors do |t|
      t.string :first_name
      t.string :last_name
      t.string :pen_name
      t.string :email
      t.string :password_digest
      t.string :avatar_url
      t.string :bio

      t.timestamps
    end
  end
end
