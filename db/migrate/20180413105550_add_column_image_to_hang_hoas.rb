class AddColumnImageToHangHoas < ActiveRecord::Migration[5.1]
  def change
    unless column_exists? :san_phams, :image_1
      add_column :san_phams, :image_1, :string
    end
    unless column_exists? :san_phams, :image_2
      add_column :san_phams, :image_2, :string
    end
    unless column_exists? :san_phams, :image_3
      add_column :san_phams, :image_3, :string
    end
    unless column_exists? :san_phams, :image_4
      add_column :san_phams, :image_4, :string
    end
    unless column_exists? :san_phams, :image_5
      add_column :san_phams, :image_5, :string
    end
  end
end
