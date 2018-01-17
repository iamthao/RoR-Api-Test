ActiveAdmin.register User do

permit_params :list, :of, :attributes, :on, :model,:email,:full_name
config.sort_order = 'id_asc'

  filter :id, label: "Id"
  filter :email, label: "Email"
  filter :full_name, label: "Full Name"
  filter :updated_at, label: "Ngày Cập Nhật"

  index :title => 'User' do
    selectable_column
    column "Id", :id, sortable: :id, :class => 'text-align-right'
    column "Email", :email, sortable: :email, :class => 'text-align-right'
    column "Full Name", :full_name, sortable: :full_name, :class => 'text-align-right'
    column "Provider", :provider, sortable: :provider, :class => 'text-align-right'
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
      row 'Full Name' do |r|
        r.full_name
      end
      row 'Provider' do |r|
        r.provider
      end
      row 'Ngày Cập Nhật' do |r|
        r.updated_at
      end
      row 'Ngày Tạo' do |r|
        r.created_at
      end
    end
  end

  form do |f|
    f.inputs 'User' do
      f.input :full_name, :label => 'Full Name'
    end
    f.actions
  end
end
