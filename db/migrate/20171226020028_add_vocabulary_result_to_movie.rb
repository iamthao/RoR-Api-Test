class AddVocabularyResultToMovie < ActiveRecord::Migration[5.1]
  def change
    add_column :movies, :vocabulary_result, :string
  end
end
