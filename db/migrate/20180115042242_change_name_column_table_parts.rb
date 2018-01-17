class ChangeNameColumnTableParts < ActiveRecord::Migration[5.1]
  def self.up
    rename_column :parts, :type, :type_of
  end
  def self.down
    rename_column :parts, :type_of, :type
  end
end
