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

interface ICar {
  brand: string
  model: string
  year: number
  plate: string
}

const carSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true, unique: true },
  year: { type: Number, required: true },
  plate: { type: String, required: true, unique: true }
}, {
  versionKey: false
})

const Car = model("car", carSchema)

const addNewCar = async (newCar: ICar) => {
  try {
    const { brand, model, year, plate } = newCar
    if (!brand || !model || !year || !plate) {
      return { success: false, error: "Invalid data" }
    }

    const newFileToDb = new Car({ brand, model, year, plate })
    await newFileToDb.save()
    return {
      success: true,
      data: newFileToDb,
      message: "Car was added succesfully"
    }
  } catch (error: any) {
    return { success: false, error: error.message }

  }
}

const getCars = async () => {
  try {

    const cars = await Car.find()
    return {
      success: true,
      data: cars,
      message: "cars where recovered correctly"
    }
  } catch (error: any) {
    return {
      success: false,
      error: error.message
    }

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


const main = async () => {
  await connectMongoDb()

  //const savedNewCar = await addNewCar({ brand: "Toyota", model: "Camry v6", year: 2012, plate: "jkl-891" })

  const cars = await getCars()

  console.log(cars)

}

main()