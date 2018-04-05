require 'aws-sdk'
require 'fileutils'

module UploadHelper
  def upload_file_from_list_to_s3(list_file)
    begin
    puts "[LOG]: upload_file_from_list_to_s3 Start -  #{list_file}"
    bucket = InitAws()

    list_file.each_with_index do |item, index|
      #file_name = File.basename item.file_path
      response = bucket.object(item["file_name"]).upload_file(item["file_path"])
    end
    puts "[LOG]: upload_file_from_list_to_s3 End"
    rescue Exception => e
      puts "[LOG]: upload_file_from_list_to_s3 - Error #{e}"
    end
  end

  def InitAws
    Aws.config.update({
        region: 'us-east-1',
        credentials: Aws::Credentials.new(ENV['S3_ACCESS_KEY_ID'], ENV['S3_SECRET_ACCESS_KEY'])
    })
    s3 = Aws::S3::Resource.new
    s3.bucket(ENV['S3_BUCKET_NAME'])
  end

  def UploadFileFromPath(path)
    puts "[LOG]: UploadFileFromPath Start -  #{path}"
    bucket = InitAws()

    file_name = File.basename path
    response = bucket.object(file_name).upload_file(path)
    puts "[LOG]: UploadFileFromPath End - #{response}"
    return response
  end
end
