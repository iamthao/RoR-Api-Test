class AddColumnImageDescriptionToMovies < ActiveRecord::Migration[5.1]
  def self.up
    add_column :movies, :image, :string
    add_column :movies, :description, :string
  end

  def self.down
    remove_column :movies, :image
    remove_column :movies, :description
  end
end
