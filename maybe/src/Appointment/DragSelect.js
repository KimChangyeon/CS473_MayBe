import React, {Component} from 'react';
import TableDragSelect from "react-table-drag-select";
import "./DragSelect.css";
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles';
import FormLabel from '@material-ui/core/FormLabel';
import CheckboxesGroup from './friend_list';
import Typography from '@material-ui/core/Typography';

let isDrag = false
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
      ],
    };

    updateFriendList = () => {
      const checkCell = this.state.cells.filter((cell) => {
        let check = cell.filter((state)=> state)
        return (check.length != 0)
      })
      if (checkCell.length != 0) isDrag = true
      else isDrag = false
    }

    renderFriendList = ()=>{
      if (isDrag) {
        return(
        <div>
          <CheckboxesGroup />
        </div>)
      }
      else return null
    }

    render () {
      this.updateFriendList();
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
              <td/>
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
                  style={{left: 200, top : 10 }}
          >
                    RESET
          </Button>
          <FormLabel component="legend">
          <Typography variant = "h6" ><span style = {{fontFamily : "ubuntu"}}>Available Friends</span></Typography>
        </FormLabel>
            {this.renderFriendList()}
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