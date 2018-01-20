### Sign up
Given(/^I visit register page$/) do
  visit new_user_registration_path
  sleep 10
end

Given(/^I input full name is "([^\"]*)", email is "([^\"]*)" and password is "([^\"]*)" and comfirm password is "([^\"]*)"$/) do |full_name, email,password,confirm_password|
  @full_name = full_name
  find("#user_full_name").set full_name
  find("#user_email").set email
  find("#user_password").set password
  find("#user_password_confirmation").set confirm_password
end

When(/^I submit form$/) do
  find(".sign-up-btn").click
end

Then(/^Account will create successfully and go to dashboard$/) do
  expect(page).to have_content "HOME"
  within "nav .username" do
    expect(page).to have_content @full_name
  end
end

### Login
Given(/^I had account with full_name is "([^\"]*)", email is "([^\"]*)" and password is "([^\"]*)"$/) do |full_name,email,password|
    @user = create_new_user(full_name, email, password)
    @full_name = full_name
end

Given(/^I visit login page$/) do
  visit new_user_session_path
end

Given(/^I input email is "([^\"]*)" and password is "([^\"]*)"$/) do |email,password|
  puts "email #{email}"
  find("#user_email").set email
  puts "password #{password}"
  find("#user_password").set password
end

When(/^I click button Login$/) do
  find(".sign-in-btn").click
end

Then(/^Login is successfully$/) do
  expect(page).to have_content "HOME"
  within "nav .username" do
    expect(page).to have_content @full_name
  end
end

### test warden
Given(/^I sign in use Warden$/) do
  @full_name = 'Thao Nguyen'
  @current_user = User.create!(:full_name => @full_name, :email => 'user@test.vn', :password => 'password')
  login_as(@current_user, :scope => :user)
end

Then(/^Login Warden is successfully$/) do
  visit '/'
  within "nav .username" do
    expect(page).to have_content @full_name
  end
end


