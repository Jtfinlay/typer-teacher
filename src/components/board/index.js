import Board from './board';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        words: state.lessons.basic.text.split(/(\s)/)
    }
}

const BoardConnected = connect(
    mapStateToProps
)( Board );

export default BoardConnected;