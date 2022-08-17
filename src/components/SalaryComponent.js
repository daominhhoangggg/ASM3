import React from 'react';
import { Card, CardHeader, CardText } from 'reactstrap';
import formatDecimal from 'format-decimal';

function RenderSalary({ staff }) {
  return (
    <Card className="mb-3 p-3">
      <h4>{staff.name}</h4>
      <CardText>Mã nhân viên: {staff.id}</CardText>
      <CardText>Hệ số lương: {staff.salaryScale}</CardText>
      <CardText>Số ngày làm thêm: {staff.overTime}</CardText>
      <CardHeader>Lương: {`${formatDecimal(staff.salaryScale * 3000000 + staff.overTime * 200000, { decimal: '.', thousands: ',', precision: 0 })} VND`} </CardHeader>
    </Card>
  );
}

const Salary = props => {
  const salary = props.staffs.map(staff => {
    return (
      <div key={staff.id} className="col-md-6 col-lg-3">
        <RenderSalary staff={staff} />
      </div>
    );
  });

  return (
    <div className="container my-3">
      <div className="row">{salary}</div>
    </div>
  );
};

export default Salary;
