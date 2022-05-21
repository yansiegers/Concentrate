# frozen_string_literal: true

module System
  # Controls the users
  class UsersController < ApplicationController
    def index
      @users = User.all
    end

    def new
      @user = User.new
    end

    def create
      @user = User.new(user_params)
      if @user.save
        flash[:success] = 'User successfully created'
        redirect_to system_users_path
      else
        flash[:error] = 'Something went wrong'
        render 'new'
      end
    end

    def edit
      @user = User.find(params[:id])
    end

    def update
      @user = User.find(params[:id])
      if @user.update(user_params)
        flash[:success] = 'User was successfully updated'
        redirect_to system_users_path
      else
        flash[:error] = 'Something went wrong'
        render 'edit'
      end
    end

    def destroy
      @user = User.find(params[:id])
      if @user.destroy
        flash[:success] = 'User was successfully deleted.'
      else
        flash[:error] = 'Something went wrong'
      end
      redirect_to system_users_url
    end

    private

    def user_params
      params.require(:user)
            .permit(:email_address, :password, :house_id, :role)
    end
  end
end
