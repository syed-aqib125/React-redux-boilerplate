import React from 'react';
import { set_data } from '../../store/action';
import { connect } from 'react-redux';


class Home extends React.Component {
    render() {
        console.log("props", this.props)
        return (
            <div>
                <h1>Home</h1>
                <button onClick={() => this.props.set_data()}>SET DATA</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.users
})

const mapDispatchToProps = (dispatch) => ({
    set_data: () => dispatch(set_data())
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);