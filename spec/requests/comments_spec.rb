require 'rails_helper'

RSpec.describe "Comments", type: :request do
  before(:each) do
    @photo = create :photo
    @comment = @photo.comments.create attributes_for :comment
  end
  describe "GET /photos/:id" do
    it "html" do
      get photo_path @photo
      expect(response).to have_http_status(200)
    end
    it "js" do
      headers = {
          "ACCEPT" => "application/json"
      }
      get photo_path(@photo), :headers => headers
      expect(response.body).to include(@comment.author)
    end
  end
end
