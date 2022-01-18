import {Router} from 'express'
import Persona from '../models/Persona'

const router=Router()

// ruta para los encales de las pag

// router.get('/', (req,res ) =>{
//   res.send('Inicio')
// });

router.get('/tasks', async (req,res ) =>{
  const persona = await Persona.find() 
  res.send(persona)
});

router.post('/tasks', async (req,res ) =>{
  const {nom_persona,ape_paterno,ape_materno} = req.body

  const persona = new Persona({nom_persona,ape_paterno,ape_materno})

  await persona.save()

  res.send(persona)
});

router.get('/tasks/:id', async (req,res ) =>{
  try {
    const persona = await Persona.findById(req.params.id)
    
    if(!persona) return res.status(400).json({message:"Task no found"})

    res.send(persona)
  } catch (error) {
    // console.error(error)
    return res.status(500).send(error);
  }
});



router.delete('/tasks/:id', async (req,res ) =>{

  try {

  const persona = await Persona.findByIdAndDelete(req.params.id)
  
  if(!persona) return res.status(400).json({message:"Task no found"})

  return res.json(persona)
    
  } catch (error) {
    return res.status(500).send(error)
  }

});


router.put('/tasks/:id', async (req,res ) =>{
  
  const upPersona = await Persona.findByIdAndUpdate(req.params.id,req.body, {
    new:true //Devuelve el valor actualizado en lugar del "viejo antes de actualizarse"
  })
  res.json(upPersona)
  // return res.send('put')
});

export default router;