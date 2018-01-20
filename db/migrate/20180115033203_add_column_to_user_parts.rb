class AddColumnToUserParts < ActiveRecord::Migration[5.1]
  def self.up
    add_column :user_parts, :answer_user, :string
    add_column :user_parts, :answer_result, :boolean
    add_column :user_parts, :scheduled_at, :datetime
  end

  def self.down
    remove_column :user_parts, :answer_user
    remove_column :user_parts, :answer_result
    remove_column :user_parts, :scheduled_at
  end
end
