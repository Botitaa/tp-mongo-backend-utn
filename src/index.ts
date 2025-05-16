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
    return {
      success: false,
      error: error.message
    }

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

    const foundCar = await Car.findById(id)

    if (!foundCar) {
      return {
        success: false,
        message: "Error while finding car by id"
      }
    } else {
      return {
        success: true,
        data: foundCar,
        message: "car was find correctly"
      }
    }

  } catch (error: any) {
    return {
      success: false,
      error: error.message
    }

  }
}


const updateCar = async (id: string, newData: Partial<ICar>) => {
  try {

    const updatedCar = await Car.findByIdAndUpdate(id, newData, { new: true })

    if (!updatedCar) {
      return {
        success: false,
        message: "Error while updating, ID not found"
      }
    }

    return {
      success: true,
      data: updatedCar,
      message: "Car update was succesfull"
    }

  } catch (error: any) {
    return {
      success: false,
      error: error.message
    }

  }
}

const deleteCar = async (id: string) => {
  try {
    const removeCar = await Car.findByIdAndDelete(id)

    if (!removeCar) {
      return {
        success: false,
        message: "Error while finding car by id"
      }
    }

    return {
      success: true,
      data: removeCar,
      message: "car was removed correctly"
    }
  } catch (error: any) {
    return {
      success: false,
      error: error.message
    }

  }
}


const main = async () => {
  await connectMongoDb()

  const savedNewCar = await addNewCar({ brand: "Toyota", model: "Camry v6", year: 2012, plate: "jkl-891" })

  const cars = await getCars()

  const findCar = await getUniqueCar("682796a0ac2aefdeba3ab6a4")

  const uCar = await updateCar("682796a0ac2aefdeba3ab6a4", { model: "hilux 4x4" })

  const removeCar = await deleteCar("68278b4d7d4a5003042abaea")

  console.log()

}

main()