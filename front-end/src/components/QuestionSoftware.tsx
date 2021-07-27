import { Answer } from "../models/Answer";
import { Software, SoftwareType } from "../models/Software";

const QuestionSoftware = ( { answer, type, placeHolder, helpText }: { answer?: Answer, type: SoftwareType, helpText?: string, placeHolder?: string } ) => {
  const softwareAnswers = answer as Array<Software> || [];


  return (
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
          {
            softwareAnswers.map( m =>
              <tr>
                <td><input type="text" placeholder="name" title="Name of software" value={ m.name } /></td>
                <td><input type="text" placeholder="version" title="Version" value={ m.version } /></td>
              </tr>
            )
          }
          <tr>
            <td><input type="text" placeholder="name" title="Name of software" /></td>
            <td><input type="text" placeholder="version" title="Version" /></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default QuestionSoftware;