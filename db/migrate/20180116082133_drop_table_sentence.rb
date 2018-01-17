class DropTableSentence < ActiveRecord::Migration[5.1]
  def change
    drop_table :sentences
  end
end
