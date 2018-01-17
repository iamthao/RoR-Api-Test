ActiveAdmin.register Part do

  permit_params :list, :of, :attributes, :on, :model, :type, :hint, :answer,:type_of
  config.sort_order = 'id_asc'

  filter :id, label: "Id"
  filter :hint, label: "Hint"
  filter :answer, label: "Answer"
  filter :type_of, label: "Type"
  filter :updated_at, label: "Ngày Cập Nhật"
  filter :created_at, label: "Ngày Tạo"

  index :title => 'Part' do
    selectable_column
    column "Id", :id, sortable: :id, :class => 'text-align-right'
    column "Hint", :hint, sortable: :hint, :class => 'text-align-right'
    column "Answer", :answer, sortable: :answer, :class => 'text-align-right'
    column "Type", :type_of, sortable: :type_of, :class => 'text-align-right'
    column "Ngày Cập Nhật", :updated_at, sortable: :updated_at,:class => 'text-align-right'
    column "Ngày Tạo", :created_at, sortable: :created_at,:class => 'text-align-right'
    actions
  end

  show do
    attributes_table do
      row 'Id' do |r|
        r.id
      end
      row 'Hint' do |r|
        r.hint
      end
      row 'Answer' do |r|
        r.answer
      end
      row 'Type' do |r|
        r.type_of
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
    f.inputs 'Part' do
      f.input :hint, :label => 'Hint'
      f.input :answer, :label => 'Answer'
      f.input :type_of, :label => 'Type'
    end
    f.actions
  end
end
