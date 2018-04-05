include  UploadHelper
ActiveAdmin.register User do
  permit_params :list, :of, :attributes, :on, :model,:email


  index :title => 'User' do
    selectable_column
    column "Id", :id, sortable: :id, :class => 'text-align-right'
    column "Email", :email, sortable: :email, :class => 'text-align-right'
    column "Avatar" do |item|
      if item.present? && item.avatar.present?
        raw("<img src='#{item.avatar}' height='100'")
      end
    end
    column "Ngày Cập Nhật", :updated_at, sortable: :updated_at,:class => 'text-align-right'
    actions
  end

  show do
    attributes_table do
      row 'Id' do |r|
        r.id
      end
      row 'Email' do |r|
        r.email
      end
      row 'Ngày Cập Nhật' do |r|
        r.updated_at
      end
      row 'Avatar' do |r|
        raw("<img src='#{r.avatar}' alt='Smiley face' height='100'")
      end
    end
  end

  form do |f|
    f.inputs 'User' do
      f.input :email, :label => 'Email'
      f.input :password, :label => 'Password'
      f.input :password_confirmation, :label => 'Password Confirmation'
      f.input :avatar, :label => 'Choose image file', :as => :file
    end
    f.actions
  end

  controller do
    def create
      #@avatar = params[:user][:avatar]
      #content = @avatar.read
      #item = Base64.strict_encode64(content)

      if params[:user][:avatar].present?
        path_download = File.join(Rails.root,"public", "download")
        FileUtils::mkdir_p path_download

        @extn = File.extname params[:user][:avatar].original_filename
        file_name = "test_upload_image" + @extn
        image_temp = File.join(Rails.root,"public","download",file_name)

        FileUtils.mv params[:user][:avatar].tempfile, image_temp
        debugger
        if UploadHelper.UploadFileFromPath(image_temp)
          @avatar = "http://s3.amazonaws.com/" + ENV['S3_BUCKET_NAME'] + "/" + file_name
        end

        FileUtils.rm(image_temp)
      end

      User.create!(email: params[:user][:email], password: params[:user][:password], password_confirmation: params[:user][:password_confirmation],avatar: @avatar)
      redirect_to "/admin/users", notice: "Create  successfully."
    end
  end
end
