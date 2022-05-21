# frozen_string_literal: true

class User < ApplicationRecord
  belongs_to :house, optional: true

  enum role: {
    admin: 0,
    coach: 1
  }

  validates :email_address, :password, :role, presence: true
  validates :house, presence: true, on: %i[create update]
  validates :role, inclusion: { in: roles.keys }
  validates :email_address, format: { with: URI::MailTo::EMAIL_REGEXP }
end
