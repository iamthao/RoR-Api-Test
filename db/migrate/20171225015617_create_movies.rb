class CreateMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :movies do |t|
      t.string :name
      t.string :link
      t.string :answer
      t.string :vocabulary

      t.timestamps
    end
  end
end
