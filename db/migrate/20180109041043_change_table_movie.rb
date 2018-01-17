class ChangeTableMovie < ActiveRecord::Migration[5.1]
  def self.up
    remove_column :movies, :link
    remove_column :movies, :answer
    remove_column :movies, :vocabulary
    remove_column :movies, :vocabulary_result
    add_column :movies, :price, :integer
  end

  def self.down
    add_column :movies, :link
    add_column :movies, :answer
    add_column :movies, :vocabulary
    add_column :movies, :vocabulary_result
    remove_column :movies, :price
  end
end
