import Board from './board';
import { connect } from 'react-redux';
import { keyPressed } from '../../actions';

const mapStateToProps = state => ({
    words: state.lessons.basic.text.split(/(\s)/),
    history: state.activeLesson.history
});

const mapDispatchToProps = dispatch => ({
    keyPressed: key => dispatch(keyPressed(key))
});

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
)( Board );

export default connector;