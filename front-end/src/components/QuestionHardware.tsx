import { Answer } from "../models/Answer";
import { Hardware, HardwareType } from "../models/Hardware";

const QuestionHardware = ( { answer, type, placeHolder, helpText }: { answer?: Answer, type: HardwareType, helpText?: string, placeHolder?: string } ) => {
 const hardwareAnswers = answer as Array <Hardware> || [];

  return (
    <>
      {placeHolder && <div>{placeHolder}</div>}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Make</th>
            <th>Model</th>
            <th>OS</th>
            <th>Version</th>
            <th>Location</th>
            <th>Quantity</th>
            <th>Purpose</th>
            {type === HardwareType.Server && <th>No. of virtuals</th>}
          </tr>
        </thead>
        <tbody>
        {hardwareAnswers.map( m =>
           <tr>
           <td><input type="text" placeholder="name" title="Name of device" value={m.name} /></td>
           <td><input type="text" placeholder="make" title="Make" value={m.make} /></td>
           <td><input type="text" placeholder="model" title="Model"value={m.model} /></td>
           <td><input type="text" placeholder="os" title="OS" value={m.os} /></td>
           <td><input type="text" placeholder="version" title="Version" value ={m.featureVersion} /></td>
           <td><input type="text" placeholder="location" title="Location" value={m.location} /></td>
           <td><input type="number" placeholder="quantity" title="Quantity" value={m.quantity} /></td>
           <td><input type="text" placeholder="purpose" title="Purpose" value={m.purpose} /></td>
           {type === HardwareType.Server && <td><input type="text" placeholder="number of virtuals" title="No of virtuals" value={m.numberOfVirtuals} /></td>}
         </tr>)}
          <tr>
            <td><input type="text" placeholder="name" title="Name of device" /></td>
            <td><input type="text" placeholder="make" title="Make" /></td>
            <td><input type="text" placeholder="model" title="Model" /></td>
            <td><input type="text" placeholder="os" title="OS" /></td>
            <td><input type="text" placeholder="version" title="Version" /></td>
            <td><input type="text" placeholder="location" title="Location" /></td>
            <td><input type="number" placeholder="quantity" title="Quantity" /></td>
            <td><input type="text" placeholder="purpose" title="Purpose" /></td>
            {type === HardwareType.Server && <td><input type="text" placeholder="number of virtuals" title="No of virtuals" /></td>}
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default QuestionHardware;