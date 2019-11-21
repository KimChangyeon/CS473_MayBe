import React, {Component} from 'react';
import TableDragSelect from "react-table-drag-select";
import "./DragSelect.css";
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles';
import CheckboxesGroup from './friend_list';

class DragSelect extends Component {
    state = {
      cells: [
        [false, false, false, false, false, false, false,false],
        [false, false, false, false, false, false, false,false],
        [false, false, false, false, false, false, false,false],
        [false, false, false, false, false, false, false,false],
        [false, false, false, false, false, false, false,false],
        [false, false, false, false, false, false, false,false],
        [false, false, false, false, false, false, false,false],
        [false, false, false, false, false, false, false,false],
        [false, false, false, false, false, false, false,false],
        [false, false, false, false, false, false, false,false],
        [false, false, false, false, false, false, false,false],
        [false, false, false, false, false, false, false,false],
        [false, false, false, false, false, false, false,false],
      ]
    };
    render () {
      return (
        <div>
        <TableDragSelect 
          value={this.state.cells} 
          onChange={this.handleChange}>
            <tr>
              <td disabled />
              <td disabled>MON</td>
              <td disabled>TUE</td>
              <td disabled>WED</td>
              <td disabled>THU</td>
              <td disabled>FRI</td>
              <td disabled>SAT</td>
              <td disabled>SUN</td>
            </tr>
          <tr>
            <td disabled>11</td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td>
            </td>
            <td/>
          </tr>
          <tr>
            <td disabled>12</td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td></td>
            <td/>
          </tr>
          <tr>
            <td disabled>13</td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td disabled>14</td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td/>
            <td/>
          </tr>
          <tr>
            <td disabled>15</td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td/><td/>
          </tr>
          <tr>
            <td disabled>16</td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td/><td/>
          </tr>
          <tr>
            <td disabled>17</td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td/><td/>
          </tr>
          <tr>
            <td disabled>18</td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td/><td/>
          </tr>
          <tr>
            <td disabled>19</td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td/><td/>
          </tr>
          <tr>
            <td disabled>20</td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td/><td/>
          </tr>
          <tr>
            <td disabled>21</td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td/><td/>
          </tr>
        </TableDragSelect>
        <Button size = "small"
                variant = "outlined"
                color ="secondary" 
                onClick = {this.handleClick}
                style={{left: 170, top : 10 }}
        >
                  RESET
        </Button>
        <div>
          <CheckboxesGroup />
        </div>
      </div>
      )

      }
      
  
    handleChange = (cells) => {
      this.setState({ cells })
      console.log(this.state.cells)
    }
  
    handleClick = () => {
      const cells = [
        [false, false, false, false, false, false, false,false],
        [false, false, false, false, false, false, false,false],
        [false, false, false, false, false, false, false,false],
        [false, false, false, false, false, false, false,false],
        [false, false, false, false, false, false, false,false],
        [false, false, false, false, false, false, false,false],
        [false, false, false, false, false, false, false,false],
        [false, false, false, false, false, false, false,false],
        [false, false, false, false, false, false, false,false],
        [false, false, false, false, false, false, false,false],
        [false, false, false, false, false, false, false,false],
        [false, false, false, false, false, false, false,false],
        [false, false, false, false, false, false, false,false],
      ];
      this.setState({ cells });
    };
  }

  export default DragSelect