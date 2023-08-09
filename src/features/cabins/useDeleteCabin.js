import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-hot-toast"
import { deleteCabins as deleteCabinApi } from "../../services/apiCabins"

export function useDelteCabin(){

    const quertClient = useQueryClient()
    const {isLoading:isDeleting, mutate:deleteCabins} = useMutation({
  mutationFn:deleteCabinApi,
  onSuccess:()=> {
    toast.success("Cabin successfullly deleted")
    quertClient.invalidateQueries({
      queryKey:['cabins']
  })},
  onError:(err)=>toast.error(err.message)
})
return {isDeleting,deleteCabins}
}