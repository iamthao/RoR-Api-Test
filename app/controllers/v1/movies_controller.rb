include SendSmsHelper

class V1::MoviesController < V1::BaseController
  def index
    render :json => {:data => 'test'}, root: false
  end
  def send_sms
    if !params[:phone_number].blank? && !params[:message].blank?
      @sid = SendSmsHelper.send_sms(params[:phone_number],params[:message])
      render :json => {:error => 'false',:phone_number => params[:phone_number], :sid => @sid }, root: false
    else
      render :json => {:error => 'true'}, root: false
    end
  end
end
