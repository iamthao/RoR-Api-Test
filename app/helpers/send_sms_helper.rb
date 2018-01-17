module SendSmsHelper
  def send_sms(phone_number, message)
    if valid_phone_number?(phone_number)
      api_key = ENV['CLICKATELL_API']
      @conn = Faraday.new(:url => 'https://platform.clickatell.com/') do |c|
        c.use Faraday::Request::UrlEncoded # encode request params as "www-form-urlencoded"
        c.use Faraday::Response::Logger # log request & response to STDOUT
        c.use Faraday::Adapter::NetHttp # perform requests with Net::HTTP
      end
      @response_conn = @conn.get "messages/http/send",
        {apiKey: api_key,
         to: phone_number,
         content: message
        }
      body = JSON.parse(@response_conn.body)
      @msg = body['messages']
      @msg[0]['apiMessageId']
    else
      0
    end

  end
  def valid_phone_number?(phone_number)
    account_sid = ENV['TWILIO_ACCOUNT_SID']
    auth_token  = ENV['TWILIO_AUTH_TOKEN']
    lookup_client = Twilio::REST::Client.new(account_sid, auth_token)
    begin
      response = lookup_client.lookups.v1.phone_numbers(phone_number).fetch(type: 'carrier')
      return true
    rescue => e
      return false
    end
  end
end
