### Show list movie
Given(/^I had a movie and some part for this movie with the first part is "video"$/) do
    @movie = create_movie_and_sentences_to_test_type_of_video
    @type_of = 1
end

Given(/^I had a movie and some part for this movie with the first part is "vocabulary"$/) do
    @movie = create_movie_and_sentences_to_test_type_of_vocabulary
    @type_of = 2
end

Given(/^I add movie for this user$/) do
    add_movie_for_user(@user.id, @movie.id)
end

Then(/^Show list movie$/) do
  sleep 3
  within "#movies .caption h4 b" do
    expect(page).to have_content "How to Train Your Dragon"
  end
  within "#movies .thumbnail" do
    expect(page).to have_css "img[src*='https://i.imgur.com/Ng5mpcR.jpg']"
  end
end

### Show part for movie
When(/^I choosen a movie$/) do
  find("#btn-start-now").click
end

Then(/^Show part of movie$/) do
  if @type_of == 1
    within ".container .row #video-react" do
      expect(page).to have_css "video[src*='https://www.w3schools.com/html/mov_bbb.mp4']"
    end
  else
    within ".container .row #view-vocabulary-hint" do
      expect(page).to have_content "You"
    end
  end
end

### check button check answer
When(/^I click button "Check Answer"$/) do
    find("#btn-check-answer").click
end

Then(/^Show message "([^\"]*)"$/) do |msg|
  sleep 2
  within "#movie-alert" do
    expect(page).to have_content msg
  end
end

Given(/^I input value correct$/) do
  find("#answer_input").set "test"
end


Given(/^I input value incorrect$/) do
  find("#answer_input").set "wrong"
end

### check button next sentence
When(/^I click button "Next"$/) do
    find("#btn-next-sentence").click
end

Then(/^Show next sentence of movie$/) do
  sleep 2
  within ".container .row #view-vocabulary-hint" do
    expect(page).to have_content "You"
  end
end

Then(/^Check record in UserPart when input "Correct"$/) do
  sleep 2
  expect(check_user_part_insert_success(true)).to eq('0.95'.to_d)
end

Then(/^Check record in UserPart when input "Incorrect"$/) do
  sleep 2
  expect(check_user_part_insert_success(false)).to eq('1'.to_d)
end

### check button got to your movie
When(/^I click button "Go to your movie"$/) do
    find("#btn-go-to-your-movie").click
end

Then(/^Show your list movie$/) do
  sleep 2
  within ".container .list-movie-title" do
    expect(page).to have_content "Your Movie"
  end
end

