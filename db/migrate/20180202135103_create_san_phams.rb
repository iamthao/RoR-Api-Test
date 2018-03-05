class CreateSanPhams < ActiveRecord::Migration[5.1]
  def change
    create_table :san_phams do |t|
      t.string :masp
      t.string :tensp
      t.integer :giaban
      t.integer :giavon
      t.integer :tonkho

      t.timestamps
    end
  end
end
