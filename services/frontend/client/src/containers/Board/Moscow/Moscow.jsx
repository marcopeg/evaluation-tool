import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { DragDropContext } from 'react-beautiful-dnd'
import { updateMoscow } from 'Services/cards-service'

import MoscowColumn from './MoscowColumn'

// $FlowFixMe
import styles from './Moscow.module.styl'

const mapState = ({ cards }) => ({
    cards: cards.items,
})

const mapDispatch = {
    updateMoscow,
}

const byColumn = column => card => column === card.moscow

class BoardMoscow extends React.Component {

    state = {
        cards: [],
    }

    componentWillReceiveProps (props) {
        const { cards } = props
        this.setState({ cards })
    }

    onDragEnd = (DropResult) => {
        const { destination, draggableId } = DropResult
        if (destination) {
            this.props.updateMoscow(draggableId, destination.droppableId)
        }
    }

    render () {
        const { cards } = this.props
        return (
            <div className={styles.board}>
                <h4>MoSCoW</h4>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <div className={styles.columns}>
                        <MoscowColumn
                          id={'m'}
                          title={'Mo'}
                          cards={cards.filter(byColumn('m'))}
                        />
                        <MoscowColumn
                          id={'s'}
                          title={'S'}
                          cards={cards.filter(byColumn('s'))}
                        />
                        <MoscowColumn
                          id={'c'}
                          title={'Co'}
                          cards={cards.filter(byColumn('c'))}
                        />
                        <MoscowColumn
                          id={'w'}
                          title={'W'}
                          cards={cards.filter(byColumn('w'))}
                        />
                    </div>
                </DragDropContext>
            </div>
        )
    }
}

const CardShape = PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
})

BoardMoscow.propTypes = {
    cards: PropTypes.arrayOf(CardShape).isRequired,
    updateMoscow: PropTypes.func.isRequired,
}

export default connect(mapState, mapDispatch)(BoardMoscow)
