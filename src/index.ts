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

const filmSchema = new Schema({
  title: { type: String, required: true, unique: true },
  year: { type: Number, requiered: true },
  rating: { type: Number, requiered: true },
  gender: {}
})

const Film = model("film", filmSchema)

connectMongoDb()