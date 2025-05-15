import { Schema, model, connect } from "mongoose"

process.loadEnvFile()

const URI_DB = process.env.URI_DB || ""

const connectMongoDb = async () => {
  try {
    await connect(URI_DB)
    console.log("☑️ Conectado a MongoDB")
  } catch (error) {
    console.log("❌ Error al conectar a MongoDB")
  }
}

const carSchema = new Schema({
  brand: { type: String, requiered: true },
  model: { type: String, required: true, unique: true },
  year: { type: Number, requiered: true },
  plate: { type: String, requiered: true, unique: true }
})

const car = model("car", carSchema)

const addNewCar = async () => {
  try {

  } catch (error) {

  }
}

const getCars = async () => {
  try {

  } catch (error) {

  }
}

const getUniqueCar = async (id: string) => {
  try {

  } catch (error) {

  }
}


const updateCar = async (id: string) => {
  try {

  } catch (error) {

  }
}

const deleteFilm = async (id: string) => {
  try {

  } catch (error) {

  }
}

connectMongoDb()