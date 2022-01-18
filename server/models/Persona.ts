import {Schema, model} from 'mongoose'

const personSchema = new Schema({
  nom_persona : {
    type: String,
    trim:true
  },
  ape_paterno : {
    type: String,
    trim:true
  },
  ape_materno : {
    type: String,
    trim:true
  }
},{
  versionKey:false,
})

export default model('Persona', personSchema)