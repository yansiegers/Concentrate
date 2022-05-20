# frozen_string_literal: true

class User < ApplicationRecord
  belongs_to :house

  enum role: {
    admin: 0,
    coach: 1
  }
end
