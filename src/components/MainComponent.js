import React, { Component } from 'react';
import Staffs from './StaffListComponent';
import StaffDetail from './StaffDetailComponent';
import Departments from './DepartmentComponent';
import Salary from './SalaryComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    staffs: state.staffs,
    departments: state.departments,
  };
};

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const StaffWithId = ({ match }) => {
      return <StaffDetail staff={this.props.staffs.filter(staff => staff.id === parseInt(match.params.staffId, 10))[0]} />;
    };

    const DepartmentList = () => {
      return <Departments departments={this.props.departments} />;
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/staffs" component={() => <Staffs staffs={this.props.staffs} departments={this.props.departments} onClick={staffId => this.onStaffSelect(staffId)} />} />
          <Route path="/staffs/:staffId" component={StaffWithId} />
          <Route path="/departments" component={DepartmentList} />
          <Route path="/salary" component={() => <Salary staffs={this.props.staffs} />} />
          <Redirect to="/staffs" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
