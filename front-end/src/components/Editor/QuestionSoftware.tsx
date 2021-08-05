import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddRowAnswer } from "../../actions/AddRowAnswerAction";
import { Answer } from "../../models/Answer";
//import { Hardware } from "../../models/Hardware";
//import { Network } from "../../models/Network";
import { Software, SoftwareType } from "../../models/Software";

const QuestionRow = ({ software, onChange }: { software: Software, onChange: (updated: Software) => void }) => {
  return (
    <>
      <td><input type="text" placeholder="name" title="Name" value={software.name} onChange={e => onChange({ ...software, name: e.currentTarget.value })} /></td>
      <td><input type="text" placeholder="version" title="Version" value={software.version} onChange={e => onChange({ ...software, version: e.currentTarget.value })} /></td>
    </>
  );
}

const QuestionSoftware = ({ id, /*updateRowAnswer, deleteRowAnswer, addRowAnswer,*/ answer, type, placeHolder, helpText }: { id: string, answer?: Answer, type: SoftwareType, helpText?: string, placeHolder?: string, /*updateRowAnswer: (id: string, index: number, value: Network | Hardware | Software) => void, deleteRowAnswer: (id: string, index: number) => void, addRowAnswer: (id: string, answer: Software) => void */ }) => {
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
                  button onClick={() => /*deleteRowAnswer( id, i )*/ { }}>X</button>
                </td>
                <QuestionRow software={m} onChange={software =>/* updateRowAnswer( id, i, software )*/ { }} />
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