class CreateMovieParts < ActiveRecord::Migration[5.1]
  def self.up
    create_table :movie_parts do |t|
      t.integer :movie_id
      t.integer :part_id
      t.integer :order

      t.timestamps
    end
  end
  def self.down
    drop_table :movie_parts
  end
end
