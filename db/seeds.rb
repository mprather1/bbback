10.times do |x|
    User.create(name: Faker::Name.name, email: Faker::Internet.safe_email)
end