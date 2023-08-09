import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateSetting as updateSettingApi } from "../../services/apiSettings"
import { toast } from "react-hot-toast"


export function useUpdateSetting(){
    const queryClient = useQueryClient()
    const {isLoading:isUpdating, mutate:updateSetting}=useMutation({
        mutationFn:updateSettingApi,
        onSuccess:()=>{
      toast.success("Setting updated successsfully")
      queryClient.invalidateQueries({
        queryKey:['settings']
      })
      
    },
    onError:(err)=>toast.error('There is an error in updating setting', err.message)
})
    return {isUpdating,updateSetting}
}