import {connect} from "mongoose"
import dotenv from "dotenv"
process.loadEnvFile()
dotenv.config()

const URI_DB = process.env.URI_DB || ""

const connectMongoDB = async () => {
    try {
        await connect(URI_DB)
        console.log("✅ Conectado correctamente a MongoDB")
    } catch (error) {
        console.log(`📛 no se pudo conectar a MongoDB`)
    }
}

export { connectMongoDB }