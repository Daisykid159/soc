import {instructionActionTypes} from '../constants';
const initialState = {
  instructions: []
};
const instructionReducer = (state = initialState, action: any) => {
  switch(action.type){
    case instructionActionTypes.QUERY_ALL_INSTRUCTION:
        const instructions = action.payload;
        return {
            ...state,
            instructions
        }
    default: return { ...state };
}
};

export default instructionReducer;
