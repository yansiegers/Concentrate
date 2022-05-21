# frozen_string_literal: true

module System
  # Helper for houses
  module HousesHelper
    def house_select_options
      House.pluck(:name, :id)
    end
  end
end
