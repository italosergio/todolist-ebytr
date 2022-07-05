import PropTypes from 'prop-types';
import { React, useState } from 'react';

const DescriptionColumn = ({
  task,
  updateEachTask,
}) => {
  const [editor, setEditor] = useState(0);
  const [editorInput, setEditorInput] = useState('');

  const handleClick = ({ target: { id } }) => {
    setEditor(0);
    updateEachTask({ id, editedTask: { description: editorInput } });
    setEditorInput('');
  };

  return (
    <td id={ task.id } onDoubleClick={ () => setEditor(task.id) }>
      {
        editor === task.id
          ? (
            <>
              <div
                className="ui inverted large transparent icon input"
                data-inverted=""
                data-tooltip="Escreva a nova descrição e clique no icone para concluir"
                data-position="top left"
              >
                <input
                  type="text"
                  placeholder={ task.description }
                  value={ editorInput }
                  onChange={ ({ target: { value } }) => setEditorInput(value) }
                />
              </div>
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <i
                key={ task.id }
                role="button"
                id={ task.id }
                className="edit icon"
                onClick={ handleClick }
                onKeyDown={ () => { } }
                tabIndex={ 0 }
              />
            </>
          )
          : (
            <spam
              data-inverted=""
              data-tooltip="Double click para editar"
              data-position="top left"
            >
              {task.description}
            </spam>
          )
      }
    </td>
  );
};

DescriptionColumn.propTypes = {
  task: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  updateEachTask: PropTypes.func.isRequired,
};

export default DescriptionColumn;
