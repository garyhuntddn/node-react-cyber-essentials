//import { useState } from "react";
import "./App.scss";
import { Action } from "redux";
import Question from "./components/Editor/Question";
import ReadOnlyQuestion from "./components/ReadOnly/ReadOnlyQuestion";
//import { Answer } from "./models/Answer";
//import { answers } from "./models/answerList";
//import { Answers } from "./models/Answers";
//import { Hardware } from "./models/Hardware";
//import { Network } from "./models/Network";
import { questions } from "./models/questions";
//import { Software } from "./models/Software";
import { connect, useDispatch /*, useStore*/ } from "react-redux";
import { Model, ViewConstants } from "./models/Model";
import { ChangeView } from "./actions/ChangeViewAction";

const mapStateToProps = ( state: Model ) => {
  return state;
};

const mapDispatchToProps = ( dispatch: ( action: Action ) => unknown ) => ( {
} );

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const App = ( model: Props ) => {
  //  const model = useStore().getState() as Model;
  /*
  const [ answersState, setAnswers ] = useState( answers );

  const updateAnswer = ( id: string, value: Answer ): void => {
    const newAnswers = { ...answersState, [ id ]: value };
    setAnswers( newAnswers );
  };

  const updateRowAnswer = ( id: string, index: number, value: Hardware | Software | Network ): void => {
    const existingArray: Array<Hardware | Software | Network> = answersState[ id ] as Array<Hardware | Software | Network> || [];
    const newArray = [ ...existingArray ];
    newArray[ index ] = { ...value };
    const newAnswers = { ...answersState, [ id ]: newArray as Answer };
    setAnswers( newAnswers );
  };

  const deleteRowAnswer = ( id: string, index: number ): void => {
    const existingArray: Array<Hardware | Software | Network> = answersState[ id ] as Array<Hardware | Software | Network> || [];
    const newArray = [ ...existingArray ];
    newArray.splice( index, 1 );
    const newAnswers = { ...answersState, [ id ]: newArray as Answer };
    setAnswers( newAnswers );
  };

  const addRowAnswer = ( id: string, value: Hardware | Software | Network ): void => {
    const existingArray: Array<Hardware | Software | Network> = answersState[ id ] as Array<Hardware | Software | Network> || [];
    const newArray = [ ...existingArray ];
    newArray.push( value );
    const newAnswers = { ...answersState, [ id ]: newArray as Answer };
    setAnswers( newAnswers );
  };
*/

  const dispatch = useDispatch();

  return (
    <div className="App">
      <header>
        <h1>Cyber Essentials Questionnaire</h1>
      </header>
      <section>
        <div>
          <label><input type="radio" checked={ model.view === ViewConstants.Editable } radioGroup="view" onChange={ () => { dispatch( ChangeView( ViewConstants.Editable ) ) } } />Editor</label>
          <label><input type="radio" checked={ model.view === ViewConstants.ReadOnly } radioGroup="view" onChange={ () => { dispatch( ChangeView( ViewConstants.ReadOnly ) ) } } />Viewer</label>
        </div>
        { model.view === ViewConstants.Editable && questions.map( m => (
          <Question key={ m.id } /*updateAnswer={ updateAnswer } updateRowAnswer={ updateRowAnswer } deleteRowAnswer={ deleteRowAnswer } addRowAnswer={ addRowAnswer }*/ placeHolder={ m.prompt } helpText={ m.tooltip } id={ m.id } answer={ model.answers[ m.id ] } text={ m.question } required={ !!!m.optional } type={ m.type } subType={ m.subType } />
        ) ) }
        { model.view === ViewConstants.ReadOnly && questions.map( m => (
          <ReadOnlyQuestion key={ m.id } id={ m.id } answer={ model.answers[ m.id ] } text={ m.question } type={ m.type } subType={ m.subType } />
        ) ) }
      </section>
    </div>
  );
};

export default connect( mapStateToProps, mapDispatchToProps )( App );
