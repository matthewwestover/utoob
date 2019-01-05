class Api::VideosController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user, except: [:index, :show]
  before_action :set_video, only: [:destroy, :show]

  def index
    render json: Video.all.order(created_at: :desc)
  end

  def show
    render json: @video
  end

  def my_videos
    render json: @user.videos.order(created_at: :desc)
  end

  def create
    video = @user.videos.new(video_params)
    if video.save
      render json: video
    else
      render json: video.errors
    end
  end

  def update
  end

  def destroy
    @video.destroy
  end

  private

  def set_user
    @user = User.find(params[:user_id])
  end

  def set_video
    @video = Video.find(params[:id])
  end

  def video_params
    params.require(:video).permit(:title, :duration, :genre, :description, :trailer)
  end
end
