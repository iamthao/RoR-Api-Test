module MovieHelper
  def get_part_for_movie(user_id, movie_id)

    #1. Lay Part de on tap, DK scheduled_at < Time.now
    @list_movie_part = MoviePart.where("movie_id = #{movie_id}").select("part_id")
    @user_part_1_first = UserPart.where("user_id = #{user_id} and part_id IN (?)", @list_movie_part).where("scheduled_at <= (?)", Time.now)
                           .order("scheduled_at ASC").first

    #2. Lay Part chua tung learn, DK Part NOT IN list UserPart
    @list_user_part = UserPart.where("user_id = #{user_id}").select("part_id")
    @list_movie_part_2_first = MoviePart.where("movie_id = #{movie_id} and part_id NOT IN (?)", @list_user_part).select("part_id").first

    #3. Lay cau hoi theo DK Scheduled_at tang dan
    @list_user_part_scheduled_at_asc_first =  UserPart.where("user_id = #{user_id}  and part_id IN (?)", @list_movie_part)
            .order("scheduled_at ASC").select("part_id").first

    @part = nil
    if !@user_part_1_first.nil?
      @part = Part.select("id, hint, type_of").find_by(:id => @user_part_1_first.part_id)
    elsif !@list_movie_part_2_first.nil?
      @part = Part.select("id, hint, type_of").find_by(:id => @list_movie_part_2_first.part_id)
    elsif !@list_user_part_scheduled_at_asc_first.nil?
      @part = Part.select("id, hint, type_of").find_by(:id => @list_user_part_scheduled_at_asc_first.part_id)
    end

    @part
  end
end