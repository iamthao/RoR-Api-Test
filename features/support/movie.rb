module MovieMethods
  def create_movie_and_sentences_to_test_type_of_video
    @movie = Movie.new(:name => "How to Train Your Dragon", :image => "https://i.imgur.com/Ng5mpcR.jpg",
      :description => "How to Train Your Dragon is a 2010 American 3D computer-animated action-fantasy film produced by DreamWorks Animation and distributed by Paramount Pictures",
      :price => 50000)

    if @movie.save
      @arr_part_id = [];

      @part1 = Part.create!(:hint => "https://www.w3schools.com/html/mov_bbb.mp4",
                  :answer => "test", :type_of => 1)
      if !@part1.nil? && !@part1.id.nil?
        @arr_part_id.push(@part1.id)
      end

      @part2 = Part.create!(:hint => "You",
                  :answer => "ban", :type_of => 2)
      if !@part2.nil? && !@part2.id.nil?
        @arr_part_id.push(@part2.id)
      end

      @part3 = Part.create!(:hint => "Yes",
                  :answer => "co", :type_of => 2)
      if !@part3.nil? && !@part3.id.nil?
        @arr_part_id.push(@part3.id)
      end

      @arr_part_id.each_with_index do |item, index|
        @item = MoviePart.create!(:movie_id => @movie.id,:part_id => item, :order => index)
      end
    end
    @movie
  end

  def create_movie_and_sentences_to_test_type_of_vocabulary
    @movie = Movie.new(:name => "How to Train Your Dragon", :image => "https://i.imgur.com/Ng5mpcR.jpg",
      :description => "How to Train Your Dragon is a 2010 American 3D computer-animated action-fantasy film produced by DreamWorks Animation and distributed by Paramount Pictures",
      :price => 50000)

    if @movie.save
      @arr_part_id = [];

      @part2 = Part.create!(:hint => "You",
                  :answer => "ban", :type_of => 2)
      if !@part2.nil? && !@part2.id.nil?
        @arr_part_id.push(@part2.id)
      end

      @part1 = Part.create!(:hint => "https://www.w3schools.com/html/mov_bbb.mp4",
                  :answer => "test", :type_of => 1)
      if !@part1.nil? && !@part1.id.nil?
        @arr_part_id.push(@part1.id)
      end

      @part3 = Part.create!(:hint => "Yes",
                  :answer => "co", :type_of => 2)
      if !@part3.nil? && !@part3.id.nil?
        @arr_part_id.push(@part3.id)
      end

      @arr_part_id.each_with_index do |item, index|
        @item = MoviePart.create!(:movie_id => @movie.id,:part_id => item, :order => index)
      end
    end
    @movie
  end

  def add_movie_for_user(user_id, movie_id)
      UserMovie.create!(:user_id => user_id, :movie_id => movie_id, :start_date => Time.now)
  end

  def check_user_part_insert_success(answer_is_true)
    @return = nil
    @item = UserPart.last

    if !@item.nil?
        @return = @item.difficulty
    end
    @return
  end
end

World(MovieMethods)
