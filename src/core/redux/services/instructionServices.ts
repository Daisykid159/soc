import { ToastAndroid } from "react-native";
import sendRequest from "../axios/api";
import * as Converter from "../../../utils/converData";
import instructionActions from "../actions/instructionActions";
class InstructionService {
    GetAllInstructionService(dispatch:any){
        return sendRequest('/mobile/instruction/queryAll','get')
        .then(response =>{
            if(response.data.status == 200){
                const action = instructionActions.Get_All_Instruction(Converter.convertListInstruction(response.data.data || []));
                dispatch(action);
                return response.data.data
            }else{
                throw new Error(response.data.message);
            }
        })
        .catch(err => ToastAndroid.show(err.message,ToastAndroid.SHORT))
    }
}
export default new InstructionService();

