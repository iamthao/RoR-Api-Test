class AddTableUserMoviesNew < ActiveRecord::Migration[5.1]
  def self.up
    create_table :user_movies do |t|
      t.integer :user_id
      t.integer :movie_id
      t.datetime :start_date

      t.timestamps
    end
  end
  def self.down
    drop_table :user_movies
  end
end
