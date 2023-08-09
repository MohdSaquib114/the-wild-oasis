import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createCabin } from "../../services/apiCabins"
import { toast } from "react-hot-toast"

export function useCreateCabin(){

    const queryClient = useQueryClient()
    const {isLoading:isCreating, mutate:createNewCabin}=useMutation({
        mutationFn:createCabin,
        onSuccess:()=>{
            toast.success("New Cabin was created and stored")
   queryClient.invalidateQueries({
     queryKey:['cabins']
   })

 },
 onError:(err)=>toast.error('There is an error in creating new Cabin', err.message)
})

return {isCreating,createNewCabin}
}