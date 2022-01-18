import {connect} from 'mongoose';

export const startConecction = async() => {
  try {
    const db = await connect('mongodb://localhost/mevndatabase');
    console.log(db.connection.name)
  } catch (error) {
    console.error(error)
  }
}