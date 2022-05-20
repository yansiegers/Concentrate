class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :email_address, null: false
      t.string :password, null: false
      t.references :house, null: false, foreign_key: true
      t.integer :role, null: false, default: 1

      t.timestamps
    end
  end
end
