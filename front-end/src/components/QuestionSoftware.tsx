import { SoftwareType } from "../models/Software";

const QuestionSoftware = ( { type, placeHolder, helpText }: { type: SoftwareType, helpText?: string, placeHolder?: string } ) => (
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