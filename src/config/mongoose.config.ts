import mongoose from "mongoose"

export const mongooseConnection = (url: string) => {
  mongoose.connect(url)
  mongoose.connection.on('error', () => console.log('Error on db connection'));
  mongoose.connection.once('connected', () => console.log('Db connected'));
}