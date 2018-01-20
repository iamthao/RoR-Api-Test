class DropTableUserMovie < ActiveRecord::Migration[5.1]
  def self.up
    drop_table :user_movies
  end
  def self.down
    create_table :user_movies do |t|
      t.integer :user_id
      t.integer :movie_id
      t.boolean :answer_result
      t.boolean :vocabulary_result

      t.timestamps
    end
  end
end
