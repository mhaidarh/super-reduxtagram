import { bindActionCreators } from 'redux'
import { connect} from 'react-redux'
import * as actionCreators from '../actions/actionCreators'
import Main from './Main'

const mapStateOfProps = (state) => {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}

const App = connect(mapStateOfProps, mapDispatchToProps)(Main)

export default App
