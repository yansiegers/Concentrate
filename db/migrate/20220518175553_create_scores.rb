class CreateScores < ActiveRecord::Migration[7.0]
  def change
    create_table :scores do |t|
      t.references :house, null: false, foreign_key: true
      t.integer :value, null: false, default: 0

      t.timestamps
    end
  end
end
