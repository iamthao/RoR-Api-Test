include MovieHelper
class MovieController < ApplicationController
  before_action :authenticate_user!, :only => [:get_list_movie_for_user, :get_movie_with_id,
              :check_answer_for_hint]

  def get_list_movie_for_user
    @object_return = ObjectReturn.new
    @object_return.error = true

    if !current_user.blank? && !current_user.id.blank?
      @current_page = params[:current_page].blank? != true ? params[:current_page] : 1
      @take = params[:take].blank? != true ? params[:take] : 0
      @skip = (@current_page.to_i - 1) * @take.to_i

      @list_user_movie_query = UserMovie.where("user_id =#{@current_user.id}").select("movie_id")
      @list_movie_query =  Movie.where('id IN (?)',@list_user_movie_query)

      @total = @list_movie_query.select("id").count()
      @total_page = number_of_page(@total.to_i,@take.to_i)

      @list_movie = @list_movie_query.order("id ASC").limit(@take).offset(@skip)
      .select("id, name, image, description")

      if !@list_movie.nil?
        @object_return.data = @list_movie
        @object_return.total_page = @total_page
        @object_return.error = false
      end
    end
    render :json => @object_return
  end

  def get_part_for_move_id
    @object_return = ObjectReturn.new
    @object_return.error = true

    if !params[:id].blank? && !current_user.blank?
      @part = MovieHelper.get_part_for_movie(current_user.id, params[:id])

      if !@part.nil?
        @object_return.data = @part
        @object_return.error = false
      end
    end
    render :json => @object_return
  end

  def check_answer_for_hint
    @object_return = ObjectReturn.new
    @object_return.error = true

    if !params[:id].blank? && !params[:answer_input].blank?
      @hint = Part.find_by(:id => params[:id])
      if !@hint.nil?
        @object_return.error = false
        @object_return.answer = @hint.answer

        if @hint.answer.downcase == params[:answer_input].downcase
          @object_return.answer_is_true = true
        else
          @object_return.answer_is_true = false
        end

        #save record user_part
        if !current_user.blank? && !current_user.id.blank?
          @item = UserPart.find_by(:user_id => current_user.id, :part_id => params[:id])
          if !@item.nil?
            @item.answer_user = params[:answer_input]
            @item.answer_result = @object_return.answer_is_true
            @item.scheduled_at = @object_return.answer_is_true ? Time.now.utc + 1.days : Time.now.utc + 5.minutes
            @item.difficulty = calc_difficulty(@item.difficulty, @object_return.answer_is_true)
            @item.save
          else
            @item = UserPart.new
            @item.user_id = @current_user.id
            @item.part_id = params[:id]
            @item.answer_user = params[:answer_input]
            @item.answer_result = @object_return.answer_is_true
            @item.scheduled_at = @object_return.answer_is_true ? Time.now.utc + 1.days : Time.now.utc + 5.minutes
            @item.difficulty = @object_return.answer_is_true ? 0.95 : 1
            @item.save
          end
        end
      end
    end
    render :json => @object_return
  end

  class ObjectReturn
    attr_accessor :data, :id, :name, :hint, :answer,
      :answer_is_true, :error, :total_page
  end

  def number_of_page (total,take)
    total/take + (total%take > 0 ? 1 : 0)
  end

  def calc_difficulty(difficulty, answer_is_true)
    @val = 0
    if answer_is_true
      @val =  (difficulty * 0.95) <= 0 ? 0 : (difficulty * 0.95)
    else
      @val =  1
    end
    @val
  end
end
