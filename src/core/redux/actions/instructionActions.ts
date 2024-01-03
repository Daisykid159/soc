/*
 * Reducer actions related with login
 */
import {instructionActionTypes} from '../constants';

class InstructionActions {
    Get_All_Instruction = (instructions:any) => {
      return {
          type: instructionActionTypes.QUERY_ALL_INSTRUCTION,
          payload: instructions
      }
  }
}

export default new InstructionActions();
