import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createCabin } from "../../services/apiCabins"
import { toast } from "react-hot-toast"


export function useEditCabin(){
    const queryClient = useQueryClient()
    const {isLoading:isEditing, mutate:editCabin}=useMutation({
        mutationFn:({newCabinData,id})=>createCabin(newCabinData,id),
        onSuccess:()=>{
      toast.success("Cabin updated successsfully")
      queryClient.invalidateQueries({
        queryKey:['cabins']
      })
      
    },
    onError:(err)=>toast.error('There is an error in creating new Cabin', err.message)
})
    return {isEditing,editCabin}
}