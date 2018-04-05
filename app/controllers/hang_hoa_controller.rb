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

    @data.data = @query.order("id ASC").limit(@take).offset(@skip).select("id, masp, tensp, giaban, giavon, tonkho")

    render :json => @data
  end

  def add_new_sp
    @sp = SanPham.new
    @sp.masp = params[:masp]
    @sp.tensp = params[:tensp]
    @sp.giaban = params[:giaban]
    @sp.giavon = params[:giavon]
    @sp.tonkho = params[:tonkho]
    @sp.user_id = user_id
    @sp.save

    render :json => true
  end

end
