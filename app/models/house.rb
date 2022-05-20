# frozen_string_literal: true

class House < ApplicationRecord
  has_many :users
  has_many :scores
end
