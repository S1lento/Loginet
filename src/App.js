import React, {useMemo} from 'react';
import ReactSpinnerTimer from 'react-spinner-timer';
import {connect} from 'react-redux';

import ReactTable from './components/Table';
import {fetchData} from './store/actions';
import {computeDataWrapperForTable} from './helpers/compute';

import './App.css';

function App(props) {
  const id = props && props.id;
  const userId = props && props.userId;
  const title = props && props.title;
  const completed = props && props.completed;
  const changeThisForSpinnerSpeed = 3;

  const computedData = useMemo(
    () => computeDataWrapperForTable(id, userId, title, completed),
    [id, userId, title, completed]
  );
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

  return (
    <div className='table__container'>
      <ReactSpinnerTimer
        timeInSeconds={changeThisForSpinnerSpeed}
        totalLaps={200}
        isRefresh={false}
        onLapInteraction={(lap) => handleOnLapInteraction(lap)}
      />
      <ReactTable columns={columns} data={[computedData]} />
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
