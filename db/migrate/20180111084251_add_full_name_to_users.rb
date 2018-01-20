class AddFullNameToUsers < ActiveRecord::Migration[5.1]
   def self.up
    add_column :users, :full_name, :string
  end

  def self.down
    remove_column :users, :full_name
  end
end
