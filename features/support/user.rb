module UserMethods
   def create_new_user(full_name, email, password)
    User.create!(:full_name => full_name, :email => email, :password => password)
  end
end

World(UserMethods)
