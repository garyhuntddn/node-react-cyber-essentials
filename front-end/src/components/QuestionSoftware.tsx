import { Answer } from "../models/Answer";
import { SoftwareType } from "../models/Software";

const QuestionSoftware = ( { answer, type, placeHolder, helpText }: { answer?: Answer, type: SoftwareType, helpText?: string, placeHolder?: string } ) => (
  <>
    { placeHolder && <div>{ placeHolder }</div> }
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Version</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="text" placeholder="name" title="Name of device" /></td>
          <td><input type="text" placeholder="version" title="Version" /></td>
        </tr>
      </tbody>
    </table>
  </>
);

export default QuestionSoftware;