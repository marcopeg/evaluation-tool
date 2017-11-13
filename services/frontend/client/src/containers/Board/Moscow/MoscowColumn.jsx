import React from 'react'
import PropTypes from 'prop-types'
import { Droppable } from 'react-beautiful-dnd'

import MoscowCard from './MoscowCard'

// $FlowFixMe
import styles from './Moscow.module.styl'

const MoscowColumn = ({ id, cards, title }) => (
    <Droppable droppableId={id}>
        {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              className={styles.column}
              style={{ backgroundColor: snapshot.isDraggingOver ? '#efefef' : 'grey' }}
            >
                <h2>{title}</h2>
                {provided.placeholder}
                {cards.map(card => (
                    <MoscowCard
                      key={card.id}
                      {...card}
                    />
                ))}
            </div>
        )}
    </Droppable>
)

MoscowColumn.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired, // eslint-disable-line
}

export default MoscowColumn
