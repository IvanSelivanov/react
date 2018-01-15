class Comment
  include Mongoid::Document
  include Mongoid::Timestamps
  include Mongoid::Tree

  field :author, type: String
  field :text, type: String

  belongs_to :commentable, polymorphic: true
  has_many :comments, as: :commentable, dependent: :delete

  def as_json(options={})
    {
        id: self.id.to_s,
        author: self.author,
        text: self.text,
        parent_type: self.commentable_type,
        parent_id: self.commentable_id.to_s,
        comments: self.comments.map {|c| JSON.parse c.to_json}
    }
  end

end
