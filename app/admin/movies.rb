ActiveAdmin.register Movie do

permit_params :list, :of, :attributes, :on, :model, :name, :price, :image, :description
config.sort_order = 'id_asc'

  filter :id, label: "Id"
  filter :name, label: "Name"
  filter :image, label: "Image"
  filter :description, label: "Description"
  filter :price, label: "Price"
  filter :updated_at, label: "Ngày Cập Nhật"

  index :title => 'Movie' do
    selectable_column
    column "Id", :id, sortable: :id, :class => 'text-align-right'
    column "Name", :name, sortable: :name, :class => 'text-align-right'
    column "Image", :image, sortable: :image, :class => 'text-align-right'
    column "Description", :description, sortable: :description, :class => 'text-align-right'
    column "Price", :price, sortable: :price, :class => 'text-align-right'
    column "Ngày Cập Nhật", :updated_at, sortable: :updated_at,:class => 'text-align-right'
    actions
  end

  show do
    attributes_table do
      row 'Id' do |r|
        r.id
      end
      row 'Name' do |r|
        r.name
      end
      row 'Image' do |r|
        r.image
      end
      row 'Description' do |r|
        r.description
      end
      row 'Price' do |r|
        r.price
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
    f.inputs 'Movie' do
      f.input :name, :label => 'Name'
      f.input :image, :label => "Image"
      f.input :description, :label => 'Description'
      f.input :price, :label => 'Price'
    end
    f.actions
  end
end
