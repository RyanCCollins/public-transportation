import React, { PropTypes, Component } from 'react';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

class ScheduleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 300
    };
  }
  render() {
    const {
      items
    } = this.props;
    return (
      <div className={styles.container}>
        <Table
          height={this.state.height}
          fixedHeader
          fixedFooter
          selectable
        >
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
            enableSelectAll={false}
          >
            <TableRow>
              <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{ textAlign: 'center' }}>
                {items && items.length > 0 ? 'Train Schedule' : 'No Schedule Loaded'}
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="Departure Time">Departure Time</TableHeaderColumn>
              <TableHeaderColumn tooltip="Arrival Time">Arrival Time</TableHeaderColumn>
              <TableHeaderColumn tooltip="Duration">Duration</TableHeaderColumn>
            </TableRow>
            <TableBody
              displayRowCheckbox={this.state.showCheckboxes}
              deselectOnClickaway={this.state.deselectOnClickaway}
              showRowHover={this.state.showRowHover}
              stripedRows={this.state.stripedRows}
            >
              {items && items.map((row, index) =>
                <TableRow key={index} selected={row.selected || false}>
                  <TableRowColumn>{index}</TableRowColumn>
                  <TableRowColumn>{row.departure}</TableRowColumn>
                  <TableRowColumn>{row.arrival}</TableRowColumn>
                  <TableRowColumn>{row.duration}</TableRowColumn>
                </TableRow>
              )}
            </TableBody>
          </TableHeader>
        </Table>
      </div>
    );
  }
}

ScheduleList.propTypes = {
  items: PropTypes.array
};

export default ScheduleList;
