# frozen_string_literal: true

class Score < ApplicationRecord
  belongs_to :house

  validates :value, inclusion: 1..12
end
