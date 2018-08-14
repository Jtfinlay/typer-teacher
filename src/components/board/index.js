import Board from './board';
import { connect } from 'react-redux';
import { keyPressed } from '../../actions';

const mapStateToProps = state => ({
    lesson: state.lessons[ state.activeLesson ]
});

const mapDispatchToProps = dispatch => ({
    keyPressed: key => dispatch(keyPressed(key))
});

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
)( Board );

export default connector;