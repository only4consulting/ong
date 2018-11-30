import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './Layout';

const Home = (props) => {
  console.log("Log", props);
  return (
    <Layout>
      <Link to="/memogame">Ir al juego!!</Link>
    </Layout>
  );
};

const mapStateToProps = state => {
  return {
    homeValue: state.homeReducer.homeValue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    disp: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);