ActiveAdmin.register SanPham do
  permit_params :list, :of, :attributes, :on, :model

  index :title => 'SanPham' do
    selectable_column
    column "Id", :id, sortable: :id, :class => 'text-align-right'
    column "Ten SP", :tensp, sortable: :tensp
    column "Gia ban", :giaban, sortable: :giaban, :class => 'text-align-right'
    column "Gia von", :giavon, sortable: :giavon, :class => 'text-align-right'
    column "Ton Kho", :tonkho, sortable: :tonkho, :class => 'text-align-right'
    column "Image 1" do |item|
      if item.present? && item.image_1.present?
        raw("<img src='#{item.image_1}' height='100'")
      else
        raw("")
      end
    end
    column "Image 2" do |item|
      if item.present? && item.image_2.present?
        raw("<img src='#{item.image_2}' height='100'")
      else
        raw("")
      end
    end
    column "Image 3" do |item|
      if item.present? && item.image_3.present?
        raw("<img src='#{item.image_3}' height='100'")
      else
        raw("")
      end
    end
    column "Image 4" do |item|
      if item.present? && item.image_4.present?
        raw("<img src='#{item.image_4}' height='100'")
      else
        raw("")
      end
    end
    column "Image 5" do |item|
      if item.present? && item.image_5.present?
        raw("<img src='#{item.image_5}' height='100'")
      else
        raw("")
      end
    end
    column "Ngày Cập Nhật", :updated_at, sortable: :updated_at,:class => 'text-align-right'
    column "User" do |item|
      if item.present? && item.user_id.present?
        user = User.find(item.user_id)
        if user.present?
          raw("#{user.email}")
        else
          raw("")
        end
      else
        raw("")
      end
    end
    actions
  end
end
