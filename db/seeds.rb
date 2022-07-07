# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')

   apartments_array = [
    {
      street: "23 French Quarter",
      city: "Inglewood",
      state: "CA",
      manager: "Bob Billiam",
      email: "bob@frenchquarter.com", 
      price: "5 baguettes", 
      bedrooms: 3, 
      bathrooms: 2, 
      pets: "Poodles Only",
      image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      street: "42 Rue LaCroix",
      city: "New Orleans",
      state: "LA",
      manager: "Steve Irwin",
      email: "crikey@crocs.com", 
      price: "500 soda pops", 
      bedrooms: 10, 
      bathrooms: 1, 
      pets: "sure",
      image: "https://images.unsplash.com/photo-1624204386084-dd8c05e32226?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }
  ]

  apartments_array.each do |apartment_obj|
    user.apartments.create apartment_obj
  end

  p user.apartments
  p "Apartments were made successfully" 