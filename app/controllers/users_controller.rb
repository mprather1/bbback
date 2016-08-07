class UsersController < ApplicationController

  # skip_before_filter :verify_authenticity_token
  
  protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format.include? 'application/json' }
  
  def index
    @users = User.all
    respond_to do |format|
      format.json { render json: @users, each_serializer: IndexSerializer }
    end
  end

  def show
    @user = User.find(params[:id])
    respond_to do |format|
      format.json { render json: @user, serializer: ShowSerializer }
    end
  end
  
  def create
    @user = User.create(user_params)
  end
  
  private
  
  def user_params
    params.require(:user).permit(:name, :email)
  end
  
end
