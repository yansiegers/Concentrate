# frozen_string_literal: true

module System
  # Controls the houses
  class HousesController < ApplicationController
    def index
      @houses = House.all
    end

    def new
      @house = House.new
    end

    def create
      @house = House.new(house_params)
      if @house.save
        flash[:success] = 'House successfully created'
        redirect_to system_houses_path
      else
        render :new, status: :unprocessable_entity
      end
    end

    def edit
      @house = House.find(params[:id])
    end

    def update
      @house = House.find(params[:id])
      if @house.update(house_params)
        flash[:success] = 'House was successfully updated'
        redirect_to system_houses_path
      else
        render :edit, status: :unprocessable_entity
      end
    end

    def destroy
      @house = House.find(params[:id])
      if @house.destroy
        flash[:success] = 'House was successfully deleted.'
      else
        flash[:error] = 'Something went wrong'
      end
      redirect_to system_houses_url
    end

    private

    def house_params
      params.require(:house)
            .permit(:name)
    end
  end
end
