class DropTableUserSentence < ActiveRecord::Migration[5.1]
  def change
    drop_table :user_sentences
  end
end
