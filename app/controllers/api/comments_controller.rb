class Api::CommentsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_video, only: [:video, :create]
  before_action :set_user, except: [:video, :create]
  before_action :set_comment, only: [:destroy]


  def index
    render json: @user.comments.order(created_at: :desc)
  end

  def video
    render json: @video.comments.order(created_at: :desc)
  end

  def show
  end

  def create
    comment = @video.comments.new(comment_params)
    if comment.save
      render json: comment
    else
      render json: comment.errors
    end
  end

  def update
  end

  def destroy
    @comment.destroy
  end

  private
    def set_video
      @video = Video.find(params[:video_id])
    end

    def set_user
      @user = User.find(params[:user_id])
    end

    def set_comment
      @comment = @user.comments.find(params[:id])
    end

    def comment_params
      params.require(:comment).permit(:ctitle, :body, :user_name, :user_id)
    end
end



