ActiveAdmin.register UserPart do
  permit_params :list, :of, :attributes, :on, :model, :user_id, :part_id, :answer_user,
    :answer_result, :scheduled_at, :difficult
  config.sort_order = 'id_asc'

  filter :id, label: "Id"
  filter :user_id, label: "User Id"
  filter :part_id, label: "Part Id"
  filter :answer_user, label: "User Answer"
  filter :answer_result, label: "Answer Result"
  filter :scheduled_at, label: "Scheduled At"
  filter :difficult, label: "Difficult"
  filter :updated_at, label: "Ngày Cập Nhật"

  index :title => 'Movie' do
    selectable_column
    column "Id", :id, sortable: :id, :class => 'text-align-right'
    column "User Id", :user_id, sortable: :user_id, :class => 'text-align-right'
    column "Part Id", :part_id, sortable: :part_id, :class => 'text-align-right'
    column "User Answer", :answer_user, sortable: :answer_user, :class => 'text-align-right'
    column "Answer Result", :answer_result, sortable: :answer_result, :class => 'text-align-right'
    column "Scheduled At", :scheduled_at, sortable: :scheduled_at, :class => 'text-align-right'
    column "Difficult", :difficult, sortable: :difficult, :class => 'text-align-right'
    column "Ngày Cập Nhật", :updated_at, sortable: :updated_at,:class => 'text-align-right'
    actions
  end
end
