class ChangNameColumnDifficultTableUserPart < ActiveRecord::Migration[5.1]
   def change
    change_column :user_parts, :difficult, :decimal, precision: 6, scale: 4
    rename_column :user_parts, :difficult, :difficulty
  end
end
