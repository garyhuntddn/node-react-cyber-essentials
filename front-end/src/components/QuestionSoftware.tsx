import { Answer } from "../models/Answer";
import { Hardware } from "../models/Hardware";
import { Network } from "../models/Network";
import { Software, SoftwareType } from "../models/Software";

const QuestionSoftware = ( { id, updateRowAnswer, deleteRowAnswer, answer, type, placeHolder, helpText }: { id: string, answer?: Answer, type: SoftwareType, helpText?: string, placeHolder?: string, updateRowAnswer: ( id: string, index: number, value: Network | Hardware | Software ) => void, deleteRowAnswer: ( id: string, index: number ) => void } ) => {
  const softwareAnswers = answer as Array<Software> || [];

  return (
    <>
      { placeHolder && <div>{ placeHolder }</div> }
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Version</th>
          </tr>
        </thead>
        <tbody>
          {
            softwareAnswers.map( ( m, i ) =>
              <tr key={ i }>
                <td><button onClick={ () => deleteRowAnswer( id, i ) }>X</button></td>
                <td><input type="text" placeholder="name" title="Name of software" value={ m.name } onChange={ e => updateRowAnswer( id, i, { ...m, name: e.currentTarget.value } ) } /></td>
                <td><input type="text" placeholder="version" title="Version" value={ m.version } onChange={ e => updateRowAnswer( id, i, { ...m, version: e.currentTarget.value } ) } /></td>
              </tr>
            )
          }
          <tr>
            <td></td>
            <td><input type="text" placeholder="name" title="Name of software" /></td>
            <td><input type="text" placeholder="version" title="Version" /></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default QuestionSoftware;