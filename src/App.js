import React from 'react';
import {connect} from 'react-redux';
import ReactSpinnerTimer from 'react-spinner-timer';
import {fetchData} from './store/actions';
import ReactTable from './components/Table';
import './App.css';

function App(props) {
  const id = props && props.id;
  const userId = props && props.userId;
  const title = props && props.title;
  const completed = props && props.completed;

  const handleOnLapInteraction = (lap) => {
    props.fetchData(id);
  };
  const columns = [
    {
      Header: 'id',
      accessor: 'id',
    },
    {
      Header: 'userId',
      accessor: 'userId',
    },
    {
      Header: 'title',
      accessor: 'title',
    },
    {
      Header: 'completed',
      accessor: (v) => v.completed.toString(),
    },
  ];

  const createDataForTable = (id, userId, title, completed) => {};
  return (
    <div className='table__container'>
      <ReactSpinnerTimer
        timeInSeconds={1}
        totalLaps={200}
        isRefresh={false}
        onLapInteraction={(lap) => handleOnLapInteraction(lap)}
      />
      <ReactTable columns={columns} data={[{id, userId, completed, title}]} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return state.main;
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (currentId) => dispatch(fetchData(currentId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
