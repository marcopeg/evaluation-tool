import React from 'react'
import PropTypes from 'prop-types'
import { Draggable } from 'react-beautiful-dnd'

// $FlowFixMe
import styles from './Moscow.module.styl'

const MoscowCard = ({ id, title }) => (
    <Draggable
      key={id}
      draggableId={id}
    >
        {(provided, snapshot) => (
            <div>
                <div
                  ref={provided.innerRef}
                  style={provided.draggableStyle}
                  {...provided.dragHandleProps}
                >
                    <div>{title}</div>
                </div>
                {provided.placeholder}
            </div>
        )}
    </Draggable>
)

MoscowCard.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default MoscowCard
