4.times do
  user = User.new(
    user_name: Faker::Name.first_name,
    email: Faker::Internet.email,
    image: Faker::Avatar.image,
    password: "password",
    password_confirmation: "password",
  )
  user.save!

  5.times do
      word = "word",
      title = Faker::Lorem.word,
      description = Faker::Lorem.paragraph,
      duration = "10 minutes",
      genre = Faker::Book.genre,
      trailer = Faker::Avatar.image(title, "200x200", "png", "set4"),
      video = user.videos.create(title: title, description: description, duration: duration, genre: genre, trailer: trailer)

      5.times do
        ctitle = "Title",
        body = Faker::Lorem.paragraph,
        user_name = user.user_name,
        user_id = video.user_id,
        comment = video.comments.create(ctitle: ctitle, body: body, user_name: user_name, user_id: user_id)
    end

  end

  end
  
  puts "4 Users Created"