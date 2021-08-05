import { Answer } from "../../models/Answer";
import { Software, SoftwareType } from "../../models/Software";

const ReadOnlyQuestionSoftware = ({ answer }: { answer?: Answer }) => {
  const softwareAnswers = (answer as Array<Software>) || [];

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Version</th>
          </tr>
        </thead>
        <tbody>
          {softwareAnswers.map((m, i) => (
            <tr key={i}>
              <td>
                <span>{m.name}</span>
              </td>
              <td>
                <span>{m.version}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ReadOnlyQuestionSoftware;
