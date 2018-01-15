require 'rails_helper'

RSpec.describe Photo, type: :model do
  let(:photo) { create :photo }
  let(:comment) { Comment.new attributes_for :comment }
  it 'has a valid factory' do
    expect(photo).to be_valid
  end
  it 'has comments' do
    photo.comments << comment
    expect(photo.comments).to include(comment)
  end
  it 'does not list comments of comments' do
    subcomment = Comment.new attributes_for :comment
    comment.comments << subcomment
    photo.comments << comment
    expect(photo.comments.first.comments).to include(subcomment)
    expect(photo.comments).not_to include(subcomment)
  end
end
