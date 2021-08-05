import { Answer } from "../../models/Answer";
import { Hardware, HardwareType } from "../../models/Hardware";

const ReadOnlyQuestionHardware = ( { answer, type, }: { answer?: Answer, type: HardwareType } ) => {
  const hardwareAnswers = answer as Array<Hardware> || [];

  return (
    <>
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
          { hardwareAnswers.map( ( m, i ) =>
            <tr key={ i }>
              <td><span>{ m.name }</span></td>
              <td><span>{ m.make }</span></td>
              <td><span>{ m.model }</span></td>
              <td><span>{ m.os }</span></td>
              <td><span>{ m.featureVersion }</span></td>
              <td><span>{ m.location }</span></td>
              <td><span>{ m.quantity }</span></td>
              <td><span>{ m.purpose }</span></td>
              { type === HardwareType.Server && <td><span>{ m.numberOfVirtuals }</span></td> }
            </tr> ) }
        </tbody>
      </table>
    </>
  );
};

export default ReadOnlyQuestionHardware;