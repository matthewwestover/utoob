class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :ctitle
      t.text :body
      t.string :user_name
      t.belongs_to :user, foreign_key: true
      t.belongs_to :video, foreign_key: true

      t.timestamps
    end
  end
end
