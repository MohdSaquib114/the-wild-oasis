import supabase from "./supabase";

export async function getCabins(){
    const { data, error } = await supabase
  .from('cabins')
  .select('*')
  if(error) {
    throw new Error(error)
  }
  return data;
}
export async function deleteCabins(id){

    
const { data,error } = await supabase
.from('cabins')
.delete()
.eq('id', id)
if(error) {
    throw new Error(error)
  }
return data
}

export async function createCabin(newCabin, id){
  
  //https://jrubnjwivnkeabeovhfi.supabase.co/storage/v1/object/public/cabin-images/cabin-004.jpg?t=2023-08-08T10%3A23%3A53.769Z  
 const  hasImagePath = newCabin.image?.startsWith('https://jrubnjwivnkeabeovhfi.supabase.co')
  const imageName   =  `${Math.random()}-${newCabin.image.name}`.replaceAll('/','')
  const imagePath  = hasImagePath?newCabin.image:`https://jrubnjwivnkeabeovhfi.supabase.co/storage/v1/object/public/cabin-images/${imageName}`
  let newCreatedCabinData
  let err
if(!id){
const { data, error } = await supabase
.from('cabins')
.insert([
{...newCabin,image:imagePath}])
.select().single()
newCreatedCabinData= data
err = error
}
if(id){
    
const { data, error } = await supabase
.from('cabins')
.update({...newCabin,image:imagePath})
.eq('id', id)
.select()
err = error
newCreatedCabinData=data
}
if(err) {
    throw new Error(err)
  }

if(hasImagePath) return newCreatedCabinData;
 
  const {  error: storagError } = await supabase
    .storage
    .from('cabin-images')
    .upload(imageName,newCabin.image)


if(storagError) {
        
await supabase
.from('cabins')
.delete()
.eq('id', newCreatedCabinData.id  )
throw new Error('Cabin image could not be uploaded and the cabin was not created')
}

return newCreatedCabinData
}