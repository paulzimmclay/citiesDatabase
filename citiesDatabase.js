// Creation of database and adding it to local storage

// Declare object (Database)

const CitiesDatabase = {}

// Declare arrays for continents(tables)
CitiesDatabase.northAmerica = []
CitiesDatabase.southAmerica = []
CitiesDatabase.europe = []
CitiesDatabase.asia = []
CitiesDatabase.africa = []
CitiesDatabase.antarctica = []

// Add info for each array

CitiesDatabase.northAmerica.push(
  {
    name: "Atlanta",
    "year_visited": "2017",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Atlanta_Skyline_from_Buckhead.jpg",
    "top_five_attractions": ["Watch a Braves Game", "Drive on the Interstate", "Eat at the Varsity", "Visit World of Coca-Cola", "Film Baby Driver"]
  }
)

// Convert object to JSON string, name "CitiesDatabase", set 

localStorage.setItem("CitiesDatabase", JSON.stringify(CitiesDatabase));