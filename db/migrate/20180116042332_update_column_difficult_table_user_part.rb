class UpdateColumnDifficultTableUserPart < ActiveRecord::Migration[5.1]
  def self.up
    change_column :user_parts, :difficult, :decimal, precision: 4, scale: 2
  end

  def self.down
    change_column :user_parts, :difficult, :decimal, precision: 2, scale: 2
  end
end
