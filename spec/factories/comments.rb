FactoryBot.define do
  factory :comment do
    author { Faker::Name.name}
    text { Faker::Lorem.paragraph }
  end
end
