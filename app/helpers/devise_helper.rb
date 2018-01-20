module DeviseHelper
  def devise_error_messages!
    return "" unless devise_error_messages?
    messages = resource.errors.full_messages.map { |msg| content_tag(:li, msg) }.join
    sentence = I18n.t("errors.messages.not_saved",
                      :count => resource.errors.count,
                      :resource => resource.class.model_name.human.downcase)
    html = <<-HTML
    <div class="container" id="error_explanation">
      <div class="alert alert-danger">
        <strong>Error:</strong>
         <ul>#{messages}</ul>
      </div>
    </div>
    HTML

    html.html_safe
  end

  def devise_error_messages?
    !resource.errors.empty?
  end

end
