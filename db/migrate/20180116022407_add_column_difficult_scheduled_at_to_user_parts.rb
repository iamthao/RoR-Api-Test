class AddColumnDifficultScheduledAtToUserParts < ActiveRecord::Migration[5.1]
  def self.up
    add_column :user_parts, :difficult, :decimal, precision: 2, scale: 2
  end

  def self.down
    remove_column :user_parts, :difficult
  end
end
