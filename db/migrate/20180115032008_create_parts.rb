class CreateParts < ActiveRecord::Migration[5.1]
  def self.up
    create_table :parts do |t|
      t.integer :type
      t.string :hint
      t.string :answer

      t.timestamps
    end
  end

  def self.down
    drop_table :parts
  end
end
