json.extract! @photo, :created_at, :updated_at
json.comments do
  json.array! @photo.comments do |comment|
    json.(comment, :author, :text, :created_at, :updated_at)
  end
end
