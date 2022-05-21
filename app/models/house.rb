# frozen_string_literal: true

class House < ApplicationRecord
  has_many :users
  has_many :scores

  validates :name, presence: true

  before_destroy :clear_users_collection

  private

  def clear_users_collection
    users.clear
  end
end
