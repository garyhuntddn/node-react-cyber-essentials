import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddRowAnswer } from "../../actions/AddRowAnswerAction";
import { DeleteRowAnswer } from "../../actions/DeleteRowAnswerAction";
import { UpdateRowAnswer } from "../../actions/UpdateRowAnswerAction";
import { Answer } from "../../models/Answer";
import { Software, SoftwareType } from "../../models/Software";

const QuestionRow = ({ software, onChange }: { software: Software, onChange: (updated: Software) => void }) => {
  return (
    <>
      <td><input type="text" placeholder="name" title="Name" value={software.name} onChange={e => onChange({ ...software, name: e.currentTarget.value })} /></td>
      <td><input type="text" placeholder="version" title="Version" value={software.version} onChange={e => onChange({ ...software, version: e.currentTarget.value })} /></td>
    </>
  );
}

const QuestionSoftware = ({ id, answer, type, placeHolder, helpText }: { id: string, answer?: Answer, type: SoftwareType, helpText?: string, placeHolder?: string }) => {
  const [newRowState, setNewRowState] = useState({ name: "", version: "" });
  const softwareAnswers = answer as Array<Software> || [];

  const dispatch = useDispatch();

  return (
    <>
      {placeHolder && <div>{placeHolder}</div>}
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
            softwareAnswers.map((m, i) =>
              <tr key={i}>
                <td><
                  button onClick={() => dispatch(DeleteRowAnswer(id, i))}>X</button>
                </td>
                <QuestionRow software={m} onChange={software => dispatch(UpdateRowAnswer(id, i, software))} />
              </tr>
            )
          }
          <tr>
            <td> <button
              onClick={() => {
                dispatch(AddRowAnswer(id, { name: newRowState.name, version: newRowState.version, type: type }));
                setNewRowState({ name: "", version: "" });
              }}>
              +
            </button>
            </td>
            <QuestionRow software={{ ...newRowState, type: type }} onChange={software => setNewRowState(software)} />
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default QuestionSoftware;


