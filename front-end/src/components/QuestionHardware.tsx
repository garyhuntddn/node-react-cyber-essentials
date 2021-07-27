import { Answer } from "../models/Answer";
import { HardwareType } from "../models/Hardware";

const QuestionHardware = ( { answer, type, placeHolder, helpText }: { answer?: Answer, type: HardwareType, helpText?: string, placeHolder?: string } ) => (
  <>
    { placeHolder && <div>{ placeHolder }</div> }
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
          { type === HardwareType.Server && <th>No. of virtuals</th> }
        </tr>
      </thead>
      <tbody>
        <tr>
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

export default QuestionHardware;