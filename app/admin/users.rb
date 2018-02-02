ActiveAdmin.register User do
 permit_params :list, :of, :attributes, :on, :model,:email

 form do |f|
    f.inputs 'User' do
      f.input :email, :label => 'Email'
      f.input :password, :label => 'Password'
      f.input :password_confirmation, :label => 'Password Confirmation'
    end
    f.actions
  end
end
