class CreateUserParts < ActiveRecord::Migration[5.1]
  def self.up
    create_table :user_parts do |t|
      t.integer :user_id
      t.integer :part_id

      t.timestamps
    end
  end

  def self.down
    drop_table :user_parts
  end
end
