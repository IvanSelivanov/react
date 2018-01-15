require 'rails_helper'

RSpec.describe Comment, type: :model do
  before(:each) do
    @photo = create :photo
    @comment = @photo.comments.create attributes_for :comment
  end

  it 'has subcomments' do
    new_comment = @comment.comments.create attributes_for :comment
    expect(@comment.comments).to include(new_comment)
  end
end
