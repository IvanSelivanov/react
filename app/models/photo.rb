class Photo
  include Mongoid::Document
  include Mongoid::Timestamps
  include Mongoid::Paperclip

  field :name, type: String
  field :description, type: String
  has_many :comments, as: :commentable, dependent: :delete
  validates_presence_of :image
  has_mongoid_attached_file :image,
                            :styles => {
                                :original => ['1920x1680>', :jpg],
                                :small    => ['100x100#',   :jpg],
                                :medium   => ['250x250',    :jpg],
                                :large    => ['500x500>',   :jpg]
                            },
                            :convert_options => { :all => '-background white -flatten +matte' }
  validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg"]


  def as_json(options={})
    {
        :id => self.id.to_s,
        comments: self.comments
    }
  end
end
