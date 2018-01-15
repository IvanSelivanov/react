include ActionDispatch::TestProcess

FactoryBot.define do
  factory :photo do
    name { Faker::Lorem.sentence }
    description { Faker::Lorem.paragraph }
    image { fixture_file_upload Rails.root.join('spec', 'support', 'assets', 'sample_image.jpg'), 'image/jpeg' }
  end
end
