import { useState } from "react";
import { Answer } from "../../models/Answer";
import { Hardware, HardwareType } from "../../models/Hardware";
import { Network } from "../../models/Network";
import { Software } from "../../models/Software";

const QuestionRow = ({ hardware, type, onChange }: { hardware: Hardware; type: HardwareType; onChange: (updated: Hardware) => void }) => {
  return (
    <>
      <td>
        <input type="text" placeholder="name" title="Name of device" value={hardware.name} onChange={e => onChange({ ...hardware, name: e.currentTarget.value })} />
      </td>
      <td>
        <input type="text" placeholder="make" title="Make" value={hardware.make} onChange={e => onChange({ ...hardware, make: e.currentTarget.value })} />
      </td>
      <td>
        <input type="text" placeholder="model" title="Model" value={hardware.model} onChange={e => onChange({ ...hardware, model: e.currentTarget.value })} />
      </td>
      <td>
        <input type="text" placeholder="os" title="OS" value={hardware.os} onChange={e => onChange({ ...hardware, os: e.currentTarget.value })} />
      </td>
      <td>
        <input type="text" placeholder="version" title="Version" value={hardware.featureVersion} onChange={e => onChange({ ...hardware, featureVersion: e.currentTarget.value })} />
      </td>
      <td>
        <input type="text" placeholder="location" title="Location" value={hardware.location} onChange={e => onChange({ ...hardware, location: e.currentTarget.value })} />
      </td>
      <td>
        <input type="number" placeholder="quantity" title="Quantity" value={hardware.quantity} onChange={e => onChange({ ...hardware, quantity: e.currentTarget.valueAsNumber })} />
      </td>
      <td>
        <input type="text" placeholder="purpose" title="Purpose" value={hardware.purpose} onChange={e => onChange({ ...hardware, purpose: e.currentTarget.value })} />
      </td>
      {type === HardwareType.Server && (
        <td>
          <input type="number" placeholder="number of virtuals" title="No of virtuals" value={hardware.numberOfVirtuals || ""} onChange={e => onChange({ ...hardware, numberOfVirtuals: e.currentTarget.valueAsNumber })} />
        </td>
      )}
    </>
  );
};

const QuestionHardware = ({ id, updateRowAnswer, deleteRowAnswer, addRowAnswer, answer, type, placeHolder, helpText }: { id: string; answer?: Answer; type: HardwareType; helpText?: string; placeHolder?: string; updateRowAnswer: (id: string, index: number, value: Network | Hardware | Software) => void; deleteRowAnswer: (id: string, index: number) => void; addRowAnswer: (id: string, answer: Hardware) => void }) => {
  const [newRowState, setNewRowState] = useState<Hardware>({ name: "", make: "", model: "", os: "", featureVersion: "", location: "", quantity: 1, purpose: "", numberOfVirtuals: undefined, type: type });
  const hardwareAnswers = (answer as Array<Hardware>) || [];

  return (
    <>
      {placeHolder && <div>{placeHolder}</div>}
      <table>
        <thead>
          <tr>
            <th></th>
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
          {hardwareAnswers.map((m, i) => (
            <tr key={i}>
              <td>
                <button onClick={() => deleteRowAnswer(id, i)}>X</button>
              </td>

              <QuestionRow type={type} hardware={m} onChange={hardware => updateRowAnswer(id, i, hardware)} />
            </tr>
          ))}
          <tr>
            <td>
              <button
                onClick={() => {
                  addRowAnswer(id, { name: newRowState.name, location: newRowState.location, purpose: newRowState.purpose, make: newRowState.make, model: newRowState.model, os: newRowState.os, featureVersion: newRowState.featureVersion, quantity: newRowState.quantity, numberOfVirtuals: newRowState.numberOfVirtuals, type: type });
                  setNewRowState({ name: "", make: "", model: "", os: "", featureVersion: "", location: "", quantity: 1, purpose: "", numberOfVirtuals: undefined, type: type });
                }}>
                +
              </button>
            </td>

            <QuestionRow type={type} hardware={newRowState} onChange={hardware => setNewRowState(hardware)} />
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default QuestionHardware;
