import { useState } from "react";
import { Answer } from "../models/Answer";
import { Hardware, HardwareType } from "../models/Hardware";
import { Network } from "../models/Network";
import { Software } from "../models/Software";

const QuestionHardware = ( { id, updateRowAnswer, deleteRowAnswer,addRowAnswer, answer, type, placeHolder, helpText }: { id: string, answer?: Answer, type: HardwareType, helpText?: string, placeHolder?: string, updateRowAnswer: ( id: string, index: number, value: Network | Hardware | Software ) => void, deleteRowAnswer: ( id: string, index: number ) => void,addRowAnswer: (id: string, answer: Network) => void },  ) => {
  const [newRowState, setNewRowState] = useState({ name: "",make:"",model:"",os:"",featureVersion:"", location: "",quantity:"", purpose: "",numberOfVirtuals:"" });
  const hardwareAnswers = answer as Array<Hardware> || [];

  return (
    <>
      { placeHolder && <div>{ placeHolder }</div> }
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Make</th>
            <th>Model</th>
            <th>OS</th>
            <th>Version</th>
            <th>Location</th>
            <th>Quantity</th>
            <th>Purpose</th>
            { type === HardwareType.Server && <th>No. of virtuals</th> }
          </tr>
        </thead>
        <tbody>
          { hardwareAnswers.map( ( m, i ) =>
            <tr key={ i }>
              <td><button onClick={ () => deleteRowAnswer( id, i ) }>X</button></td>
              <td><input type="text" placeholder="name" title="Name of device" value={ m.name } onChange={ e => updateRowAnswer( id, i, { ...m, name: e.currentTarget.value } ) } /></td>
              <td><input type="text" placeholder="make" title="Make" value={ m.make } onChange={ e => updateRowAnswer( id, i, { ...m, make: e.currentTarget.value } ) } /></td>
              <td><input type="text" placeholder="model" title="Model" value={ m.model } onChange={ e => updateRowAnswer( id, i, { ...m, model: e.currentTarget.value } ) }/></td>
              <td><input type="text" placeholder="os" title="OS" value={ m.os }onChange={ e => updateRowAnswer( id, i, { ...m, os: e.currentTarget.value } ) } /></td>
              <td><input type="text" placeholder="version" title="Version" value={ m.featureVersion } onChange={ e => updateRowAnswer( id, i, { ...m, featureVersion: e.currentTarget.value } ) }/></td>
              <td><input type="text" placeholder="location" title="Location" value={ m.location }  onChange={ e => updateRowAnswer( id, i, { ...m, location: e.currentTarget.value } ) } /></td>
              <td><input type="number" placeholder="quantity" title="Quantity" value={ m.quantity } onChange={ e => updateRowAnswer( id, i, { ...m, quantity: e.currentTarget.valueAsNumber } ) }/></td>
              <td><input type="text" placeholder="purpose" title="Purpose" value={ m.purpose } onChange={ e => updateRowAnswer( id, i, { ...m, purpose: e.currentTarget.value } ) } /></td>
              { type === HardwareType.Server && <td><input type="text" placeholder="number of virtuals" title="No of virtuals" value={ m.numberOfVirtuals } onChange={ e => updateRowAnswer( id, i, { ...m, numberOfVirtuals: e.currentTarget.valueAsNumber } ) } /></td> }
            </tr> ) }
          <tr>
            <td>
              <button
                onClick={() => {
                  addRowAnswer(id, { name: newRowState.name, location: newRowState.location, purpose: newRowState.purpose });
                  setNewRowState({ name: "",make:"",model:"",os:"",featureVersion:"", location: "",quantity:"", purpose: "",numberOfVirtuals:"" });
                }}>
                +
              </button>
              </td>
            <td><input type="text" placeholder="name" title="Name of device" onChange={e => setNewRowState({ ...newRowState, name: e.currentTarget.value })}/></td>
            <td><input type="text" placeholder="make" title="Make"onChange={e => setNewRowState({ ...newRowState, make: e.currentTarget.value })}/></td>
            <td><input type="text" placeholder="model" title="Model"onChange={e => setNewRowState({ ...newRowState, model: e.currentTarget.value })} /></td>
            <td><input type="text" placeholder="os" title="OS" onChange={e => setNewRowState({ ...newRowState, os: e.currentTarget.value })}/></td>
            <td><input type="text" placeholder="version" title="Version" onChange={e => setNewRowState({ ...newRowState, featureVersion: e.currentTarget.value })}/></td>
            <td><input type="text" placeholder="location" title="Location" onChange={e => setNewRowState({ ...newRowState, location: e.currentTarget.value })}/></td>
            <td><input type="number" placeholder="quantity" title="Quantity" onChange={e => setNewRowState({ ...newRowState, quantity: e.currentTarget.value })}/></td>
            <td><input type="text" placeholder="purpose" title="Purpose"onChange={e => setNewRowState({ ...newRowState, purpose: e.currentTarget.value })} /></td>
            { type === HardwareType.Server && <td><input type="text" placeholder="number of virtuals" title="No of virtuals" onChange={e => setNewRowState({ ...newRowState, 
              numberOfVirtuals: e.currentTarget.value })}/></td> }
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default QuestionHardware;