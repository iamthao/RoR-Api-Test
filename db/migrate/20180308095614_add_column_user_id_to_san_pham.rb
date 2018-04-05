class AddColumnUserIdToSanPham < ActiveRecord::Migration[5.1]
  def change
    unless column_exists? :san_phams, :user_id
      add_column :san_phams, :user_id, :integer
    end
  end
end
