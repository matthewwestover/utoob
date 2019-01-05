10.times do
  user = User.new(
    user_name: Faker::Name.first_name,
    email: Faker::Internet.email,
    password: "password",
    password_confirmation: "password",
  )
  user.save!

  10.times do
    video = user.videos.new(
      title: Faker::Lorem.word,
      description: Faker::Lorem.paragraph,
      duration: "10 minutes",
      genre: Faker::Book.genre,
      trailer: Faker::Lorem.paragraph,
    )
    video.save!
  end

  end
  
  puts "10 Users Created"