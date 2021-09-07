import { Action } from "redux";
import { AddRowAnswerMessage, AddRowAnswerAction } from "../actions/AddRowAnswerAction";
import { DeleteRowAnswerMessage, DeleteRowAnswerAction } from "../actions/DeleteRowAnswerAction";
import { SwitchPanelMessage, SwitchPanelAction } from "../actions/SwitchPanel";
import { UpdateAnswerMessage, UpdateAnswerAction } from "../actions/UpdateAnswerAction";
import { UpdateRowAnswerMessage, UpdateRowAnswerAction } from "../actions/UpdateRowAnswerAction";
import { Answer } from "../models/Answer";
import { Answers } from "../models/Answers";
import { Hardware } from "../models/Hardware";
import { PanelConstants } from "../models/Model";
import { Network } from "../models/Network";
import { Software } from "../models/Software";

export const answersReducer = ( answers: Answers = {}, action: Action ): Answers => {
  switch ( action.type ) {
    case UpdateAnswerMessage: {
      const a = action as UpdateAnswerAction;
      return { ...answers, [ a.id ]: a.value };
    }

    case UpdateRowAnswerMessage: {
      const a = action as UpdateRowAnswerAction;
      const existingArray: Array<Hardware | Software | Network> = ( answers[ a.id ] as Array<Hardware | Software | Network> ) || [];
      const newArray = [ ...existingArray ];
      newArray[ a.index ] = { ...a.value };
      const newAnswers = { ...answers, [ a.id ]: newArray as Answer };

      return newAnswers;
    }

    case DeleteRowAnswerMessage: {
      const a = action as DeleteRowAnswerAction;
      const existingArray: Array<Hardware | Software | Network> = ( answers[ a.id ] as Array<Hardware | Software | Network> ) || [];
      const newArray = [ ...existingArray ];
      newArray.splice( a.index, 1 );
      const newAnswers = { ...answers, [ a.id ]: newArray as Answer };

      return newAnswers;
    }

    case AddRowAnswerMessage: {
      const a = action as AddRowAnswerAction;
      const existingArray: Array<Hardware | Software | Network> = ( answers[ a.id ] as Array<Hardware | Software | Network> ) || [];
      const newArray = [ ...existingArray ];
      newArray.push( a.value );
      const newAnswers = { ...answers, [ a.id ]: newArray as Answer };

      return newAnswers;
    }

    case SwitchPanelMessage: {
      const a = action as SwitchPanelAction;

      if ( a.panel === PanelConstants.Login ) return {};
      return answers;
    }
  }

  return answers;
};
