class CreateAnswers < ActiveRecord::Migration[6.1]
  def change
    create_table :answers do |t|
      t.string :answer
      t.integer :question_id
      t.integer :journal_entry_id

      t.timestamps
    end
  end
end
