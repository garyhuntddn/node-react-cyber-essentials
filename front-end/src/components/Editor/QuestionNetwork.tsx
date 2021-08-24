import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddRowAnswer } from "../../actions/AddRowAnswerAction";
import { DeleteRowAnswer } from "../../actions/DeleteRowAnswerAction";
import { UpdateRowAnswer } from "../../actions/UpdateRowAnswerAction";
import { Answer } from "../../models/Answer";
import { Network } from "../../models/Network";

const QuestionRow = ( { network, onChange }: { network: Network; onChange: ( updated: Network ) => void } ) => {
  return (
    <>
      <td>
        <input type="text" placeholder="name" title="Name of device" value={ network.name } onChange={ e => onChange( { ...network, name: e.currentTarget.value } ) } />
      </td>
      <td>
        <input type="text" placeholder="location" title="Location" value={ network.location } onChange={ e => onChange( { ...network, location: e.currentTarget.value } ) } />
      </td>
      <td>
        <input type="text" placeholder="purpose" title="Purpose" value={ network.purpose } onChange={ e => onChange( { ...network, purpose: e.currentTarget.value } ) } />
      </td>
    </>
  );
};

const QuestionNetwork = ( { id, answer, placeHolder, helpText }: { id: string; answer?: Answer; helpText?: string; placeHolder?: string } ) => {
  const [ newRowState, setNewRowState ] = useState( { name: "", location: "", purpose: "" } );
  const networkAnswers = ( answer as Array<Network> ) || [];
  const dispatch = useDispatch();

  return (
    <>
      { placeHolder && <div>{ placeHolder }</div> }
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Location</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          { networkAnswers.map( ( m, i ) => (
            <tr key={ i }>
              <td>
                <button onClick={ () => dispatch( DeleteRowAnswer( id, i ) ) }>X</button>
              </td>
              <QuestionRow network={ m } onChange={ network => dispatch( UpdateRowAnswer( id, i, network ) ) } />
            </tr>
          ) ) }
          <tr>
            <td>
              <button
                onClick={ () => {
                  dispatch( AddRowAnswer( id, { name: newRowState.name, location: newRowState.location, purpose: newRowState.purpose } ) );
                  setNewRowState( { name: "", location: "", purpose: "" } );
                } }>
                +
              </button>
            </td>
            <QuestionRow network={ newRowState } onChange={ network => setNewRowState( network ) } />
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default QuestionNetwork;
