// Creation of database and adding it to local storage

// Declare object (Database)

const CitiesDatabase = {}

// Declare arrays (tables)

CitiesDatabase.atlanta = []
CitiesDatabase.boston = []
CitiesDatabase.cape_may = []
CitiesDatabase.philadelphia = []
CitiesDatabase.lancaster = []
CitiesDatabase.nashville = []
CitiesDatabase.new_york = []
CitiesDatabase.pittsburgh = []
CitiesDatabase.portland = []
CitiesDatabase.san_francisco = []

// Add info for each array

CitiesDatabase.atlanta.push(
  {
    "name": "Atlanta",
    "year_visited": "2017",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Atlanta_Skyline_from_Buckhead.jpg",
    "top_five_attractions": ["Watch a Braves Game", "Drive on the Interstate", "Eat at the Varsity", "Visit World of Coca-Cola"]
  }
)

// Convert object to JSON string, name "CitiesDatabase", set 

localStorage.setItem("CitiesDatabase", JSON.stringify(CitiesDatabase));