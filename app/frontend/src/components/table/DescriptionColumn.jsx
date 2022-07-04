import { useState } from 'react';

const DescriptionColumn = ({
  task,
  updateEachTask,
}) => {
  const [editor, setEditor] = useState(0);
  const [editorInput, setEditorInput] = useState('');
  return (
    <td id={task.id} onDoubleClick={() => setEditor(task.id)} >
      {
        editor === task.id
          ? (
            <>
              <div class="ui inverted large transparent icon input" data-inverted="" data-tooltip="Escreva a nova descrição e clique no icone para concluir" data-position="top left">
                <input
                  type="text"
                  placeholder={task.description}
                  value={editorInput}
                  onChange={({ target: { value } }) => setEditorInput(value)}
                />
              </div>
              <i
                id={task.id}
                class="edit icon"
                onClick={({ target: { id } }) => {
                  setEditor(0);
                  updateEachTask({ id, editedTask: { description: editorInput } })
                  setEditorInput('')
                }}
              ></i>
            </>
          )
          : <spam data-inverted="" data-tooltip="Double click para editar" data-position="top left">
            {task.description}
          </spam>
      }
    </td>
  );
}

export default DescriptionColumn;