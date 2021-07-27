import { Answer } from "../models/Answer";
import { Hardware, HardwareType } from "../models/Hardware";
import { Network } from "../models/Network";
import { Software } from "../models/Software";

const QuestionHardware = ( { id, updateRowAnswer, deleteRowAnswer, answer, type, placeHolder, helpText }: { id: string, answer?: Answer, type: HardwareType, helpText?: string, placeHolder?: string, updateRowAnswer: ( id: string, index: number, value: Network | Hardware | Software ) => void, deleteRowAnswer: ( id: string, index: number ) => void } ) => {
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
              <td><input type="number" placeholder="quantity" title="Quantity" value={ m.quantity } onChange={ e => updateRowAnswer( id, i, { ...m, quantity: e.currentTarget.value } ) }/></td>
              <td><input type="text" placeholder="purpose" title="Purpose" value={ m.purpose } onChange={ e => updateRowAnswer( id, i, { ...m, purpose: e.currentTarget.value } ) } /></td>
              { type === HardwareType.Server && <td><input type="text" placeholder="number of virtuals" title="No of virtuals" value={ m.numberOfVirtuals } onChange={ e => updateRowAnswer( id, i, { ...m, numberOfVirtuals: e.currentTarget.value } ) } /></td> }
            </tr> ) }
          <tr>
            <td></td>
            <td><input type="text" placeholder="name" title="Name of device" /></td>
            <td><input type="text" placeholder="make" title="Make" /></td>
            <td><input type="text" placeholder="model" title="Model" /></td>
            <td><input type="text" placeholder="os" title="OS" /></td>
            <td><input type="text" placeholder="version" title="Version" /></td>
            <td><input type="text" placeholder="location" title="Location" /></td>
            <td><input type="number" placeholder="quantity" title="Quantity" /></td>
            <td><input type="text" placeholder="purpose" title="Purpose" /></td>
            { type === HardwareType.Server && <td><input type="text" placeholder="number of virtuals" title="No of virtuals" /></td> }
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default QuestionHardware;