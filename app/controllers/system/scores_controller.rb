# frozen_string_literal: true

module System
  # Controls the scores of the scores (admin-only)
  class ScoresController < ApplicationController
    def index
      @scores = Score.all
    end

    def new
      @score = Score.new
    end

    def create
      @score = Score.new(score_params)
      if @score.save
        flash[:success] = 'Score successfully created.'
        redirect_to system_scores_path
      else
        render :new, status: :unprocessable_entity
      end
    end

    def edit
      @score = Score.find(params[:id])
    end

    def update
      @score = Score.find(params[:id])
      if @score.update(score_params)
        flash[:success] = 'Score was successfully updated.'
        redirect_to system_scores_path
      else
        render :edit, status: :unprocessable_entity
      end
    end

    def destroy
      @score = Score.find(params[:id])
      if @score.destroy
        flash[:success] = 'Score was successfully deleted.'
      else
        flash[:error] = 'Something went wrong'
      end
      redirect_to system_scores_url
    end

    private

    def score_params
      params.require(:score)
            .permit(:house_id, :value)
    end
  end
end
