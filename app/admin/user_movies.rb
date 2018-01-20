ActiveAdmin.register UserMovie do

  permit_params :list, :of, :attributes, :on, :model, :user_id, :movie_id, :start_date
  config.sort_order = 'id_asc'

  filter :id, label: "Id"
  filter :movie_id, label: "Movie Id"
  filter :user_id, label: "User Id"
  filter :start_date, label: "Ngày bắt đầu"
  filter :updated_at, label: "Ngày Cập Nhật"

  index :title => 'User Movie' do
    selectable_column
    column "Id", :id, sortable: :id, :class => 'text-align-right'
    column "User Id", :user_id, sortable: :user_id, :class => 'text-align-right'
    column "Movie Id", :movie_id, sortable: :movie_id, :class => 'text-align-right'
    column "Ngày bắt đầu", :start_date, sortable: :start_date, :class => 'text-align-right'
    column "Ngày Cập Nhật", :updated_at, sortable: :updated_at,:class => 'text-align-right'
    actions
  end

  show do
    attributes_table do
      row 'Id' do |r|
        r.id
      end
      row 'User Id' do |r|
        r.user_id
      end
      row 'Movie Id' do |r|
        r.movie_id
      end
      row 'Ngày bắt đầu' do |r|
        r.start_date
      end
      row 'Ngày Cập Nhật' do |r|
        r.updated_at
      end
      row 'Ngày Tạo' do |r|
        r.created_at
      end
    end
  end
end

