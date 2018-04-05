class AddCoumnAvatarToUsers < ActiveRecord::Migration[5.1]
  def change
    unless column_exists? :users, :avatar
      add_column :users, :avatar, :string
    end
  end
end
