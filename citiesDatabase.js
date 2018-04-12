

// Declare object (Database)

const CitiesDatabase = {}

// Declare arrays (tables)

const CitiesDatabase.atlanta = []
const CitiesDatabase.boston = []
const CitiesDatabase.cape_may = []
const CitiesDatabase.philadelphia = []
const CitiesDatabase.lancaster = []
const CitiesDatabase.nashville = []
const CitiesDatabase.new_york = []
const CitiesDatabase.pittsburgh = []
const CitiesDatabase.portland = []
const CitiesDatabase.san_francisco = []

// Add info for each array

CitiesDatabase.atlanta.push(
  {
    "name": "Atlanta",
    "year_visited": "2017",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Atlanta_Skyline_from_Buckhead.jpg",
    "top_five_attractions": ["Watch a Braves Game", "Drive on the Interstate", "Eat at the Varsity", "Visit World of Coca-Cola"]
  }
)


localStorage.setItem("CitiesDatabase", JSON.stringify(StudentDatabase));