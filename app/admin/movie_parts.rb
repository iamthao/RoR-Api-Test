ActiveAdmin.register MoviePart do

  permit_params :list, :of, :attributes, :on, :model, :movie_id, :part_id, :order
  config.sort_order = 'id_asc'

  filter :id, label: "Id"
  filter :movie_id, label: "Movie Id"
  filter :part_id, label: "Part Id"
  filter :order, label: "Order"
  filter :updated_at, label: "Ngày Cập Nhật"

  index :title => 'Movie' do
    selectable_column
    column "Id", :id, sortable: :id, :class => 'text-align-right'
    column "Movie Id", :movie_id, sortable: :movie_id, :class => 'text-align-right'
    column "Part Id", :part_id, sortable: :part_id, :class => 'text-align-right'
    column "Order", :order, sortable: :order, :class => 'text-align-right'
    column "Ngày Cập Nhật", :updated_at, sortable: :updated_at,:class => 'text-align-right'
    actions
  end
end
