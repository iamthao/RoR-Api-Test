class HangHoaController < ApplicationController
  before_action :authenticate_user!, :only => [:get_list_sp, :add_new_sp]

  class DataReturn
    attr_accessor :movie_draft_id, :data, :error, :total_page
  end
  def number_of_page (total,take)
    total/take + (total%take > 0 ? 1 : 0)
  end

  def get_list_sp
    @data = DataReturn.new
    @current_page = params[:current_page].blank? != true ? params[:current_page] : 1
    @take = params[:take].blank? != true ? params[:take] : 0
    @skip = (@current_page.to_i - 1) * @take.to_i

    @query =  SanPham.where("user_id = #{user_id}")
    @total = @query.select("id").count()

    @data.total_page = number_of_page(@total.to_i,@take.to_i)

    @data.data = @query.order("id ASC").limit(@take).offset(@skip).select("id, masp, tensp, giaban, giavon, tonkho, image_1")

    render :json => @data
  end

  def add_new_sp
    dataEncode = request.body
    dataDecode = Base64.decode64(dataEncode.read)
    data = JSON.parse dataDecode

    @sp = SanPham.new
    @sp.masp = data['masp']
    @sp.tensp = data['tensp']
    @sp.giaban = data['giaban']
    @sp.giavon = data['giavon']
    @sp.tonkho = data['tonkho']
    @sp.image_1 = data['images'][0]
    @sp.image_2 = data['images'][1]
    @sp.image_3 = data['images'][2]
    @sp.image_4 = data['images'][3]
    @sp.image_5 = data['images'][4]

    @sp.user_id = user_id
    @sp.save

    render :json => true
  end

end
