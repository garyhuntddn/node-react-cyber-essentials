import { useState } from "react";
import { Answer } from "../../models/Answer";
import { Hardware } from "../../models/Hardware";
import { Network } from "../../models/Network";
import { Software } from "../../models/Software";

const QuestionNetwork = ( { id, updateRowAnswer, deleteRowAnswer, addRowAnswer, answer, placeHolder, helpText }: { id: string; answer?: Answer; helpText?: string; placeHolder?: string; updateRowAnswer: ( id: string, index: number, value: Network | Hardware | Software ) => void; deleteRowAnswer: ( id: string, index: number ) => void; addRowAnswer: ( id: string, answer: Network ) => void } ) => {
  const [ newRowState, setNewRowState ] = useState( { name: "", location: "", purpose: "" } );
  const networkAnswers = ( answer as Array<Network> ) || [];

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
                <button onClick={ () => deleteRowAnswer( id, i ) }>X</button>
              </td>
              <td>
                <input type="text" placeholder="name" title="Name of device" value={ m.name } onChange={ e => updateRowAnswer( id, i, { ...m, name: e.currentTarget.value } ) } />
              </td>
              <td>
                <input type="text" placeholder="location" title="Location" value={ m.location } onChange={ e => updateRowAnswer( id, i, { ...m, location: e.currentTarget.value } ) } />
              </td>
              <td>
                <input type="text" placeholder="purpose" title="Purpose" value={ m.purpose } onChange={ e => updateRowAnswer( id, i, { ...m, purpose: e.currentTarget.value } ) } />
              </td>
            </tr>
          ) ) }
          <tr>
            <td>
              <button
                onClick={ () => {
                  addRowAnswer( id, { name: newRowState.name, location: newRowState.location, purpose: newRowState.purpose } );
                  setNewRowState( { name: "", location: "", purpose: "" } );
                } }>
                +
              </button>
            </td>
            <td>
              <input type="text" placeholder="name" title="Name of device" value={ newRowState.name } onChange={ e => setNewRowState( { ...newRowState, name: e.currentTarget.value } ) } />
            </td>
            <td>
              <input type="text" placeholder="location" title="Location" value={ newRowState.location } onChange={ e => setNewRowState( { ...newRowState, location: e.currentTarget.value } ) } />
            </td>
            <td>
              <input type="text" placeholder="purpose" title="Purpose" value={ newRowState.purpose } onChange={ e => setNewRowState( { ...newRowState, purpose: e.currentTarget.value } ) } />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default QuestionNetwork;
