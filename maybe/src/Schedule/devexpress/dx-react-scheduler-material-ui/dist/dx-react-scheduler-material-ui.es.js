/**
 * Bundle of @devexpress/dx-react-scheduler-material-ui
 * Generated: 2019-11-07
 * Version: 2.2.1
 * License: https://js.devexpress.com/Licensing
 */

import React__default, { createElement, createRef, PureComponent, memo, Fragment, useCallback, useState, useMemo, forwardRef } from 'react';
import { object, node, string, oneOfType, number, func, arrayOf, instanceOf, bool, oneOf, array, shape } from 'prop-types';
import { Scheduler as Scheduler$1, DayView as DayView$1, WeekView as WeekView$1, MonthView as MonthView$1, Appointments as Appointments$1, Toolbar as Toolbar$2, DateNavigator as DateNavigator$1, AppointmentTooltip as AppointmentTooltip$1, ViewSwitcher as ViewSwitcher$1, AllDayPanel as AllDayPanel$1, AppointmentForm as AppointmentForm$1, DragDropProvider as DragDropProvider$1, TodayButton as TodayButton$2, EditRecurrenceMenu as EditRecurrenceMenu$1, ConfirmationDialog as ConfirmationDialog$1 } from '@devexpress/dx-react-scheduler';
import { withStyles } from '@material-ui/core/styles';
import { AUTO_HEIGHT, HOUR_MINUTE_OPTIONS, WEEK_DAY_OPTIONS, DAY_OPTIONS, DAY_SHORT_MONTH_OPTIONS, HORIZONTAL_TYPE, VERTICAL_TYPE, POSITION_START, POSITION_END, MONTH_YEAR_OPTIONS, viewBoundText, WEEKDAY_INTERVAL, OPEN_COMMAND_BUTTON, CLOSE_COMMAND_BUTTON, DELETE_COMMAND_BUTTON, ORDINARY_TEXT_EDITOR, NUMBER_EDITOR, MULTILINE_TEXT_EDITOR, TITLE_TEXT_EDITOR, handleChangeFrequency, REPEAT_TYPES, TITLE, CANCEL_BUTTON, DELETE_BUTTON, SAVE_BUTTON, ORDINARY_LABEL, STANDARD_SELECT, getRecurrenceOptions, checkIsNaturalNumber, changeRecurrenceOptions, MONTHLY_RADIO_GROUP, YEARLY_RADIO_GROUP, getFrequencyString, getAvailableRecurrenceOptions, OUTLINED_SELECT, END_REPEAT_RADIO_GROUP, RRULE_REPEAT_TYPES, handleStartDateChange, getRadioGroupDisplayData, handleWeekNumberChange, getWeekNumberLabels, getDaysOfWeek, handleToDayOfWeekChange, getMonths, getMonthsWithOf, getDaysOfWeekArray, getDaysOfWeekDates, handleWeekDaysChange } from '@devexpress/dx-scheduler-core';
import classNames from 'clsx';
import { withComponents } from '@devexpress/dx-react-core';
import Grid from '@material-ui/core/Grid';
import { lighten, fade, darken } from '@material-ui/core/styles/colorManipulator';
import { blue } from '@material-ui/core/colors';
import TableRow from '@material-ui/core/TableRow';
import TableMUI from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Repeat from '@material-ui/icons/Repeat';
import ToolbarMUI from '@material-ui/core/Toolbar';
import Popover from '@material-ui/core/Popover';
import Button$1 from '@material-ui/core/Button';
import CalendarToday from '@material-ui/icons/CalendarToday';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import moment from 'moment';
import TableHead from '@material-ui/core/TableHead';
import Typography from '@material-ui/core/Typography';
import AccessTime from '@material-ui/icons/AccessTime';
import Lens from '@material-ui/icons/Lens';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import Select$1 from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import TextField from '@material-ui/core/TextField';
import Drawer from '@material-ui/core/Drawer';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider, KeyboardDateTimePicker } from '@material-ui/pickers';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup$1 from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import InputAdornment from '@material-ui/core/InputAdornment';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var ContainerBase = function ContainerBase(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, ["children", "classes", "className"]);

  return createElement("div", _extends({
    className: classNames(classes.container, className)
  }, restProps), children);
};
process.env.NODE_ENV !== "production" ? ContainerBase.propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
  className: string
} : void 0;
ContainerBase.defaultProps = {
  className: undefined
};

var styles = {
  container: {
    WebkitOverflowScrolling: 'touch',
    // NOTE: fix sticky positioning in Safari
    width: '100%',
    height: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column'
  }
};
var LayoutBase = function LayoutBase(_ref) {
  var height = _ref.height,
      style = _ref.style,
      restProps = _objectWithoutProperties(_ref, ["height", "style"]);

  var containerStyle = height === AUTO_HEIGHT ? {
    height: '100%'
  } : {
    height: "".concat(height, "px")
  };
  return createElement(ContainerBase, _extends({
    style: _objectSpread2({}, containerStyle, {}, style)
  }, restProps));
};
process.env.NODE_ENV !== "production" ? LayoutBase.propTypes = {
  height: oneOfType([number, string]).isRequired,
  style: object
} : void 0;
LayoutBase.defaultProps = {
  style: null
};
var Root = withStyles(styles, {
  name: 'Root'
})(LayoutBase);

var Scheduler = function Scheduler(_ref) {
  var children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["children"]);

  return createElement(Scheduler$1, _extends({
    rootComponent: Root
  }, restProps), children);
};
Scheduler.Root = Root;
process.env.NODE_ENV !== "production" ? Scheduler.propTypes = {
  children: node.isRequired
} : void 0;

var PRIMARY_COLOR = blue;
var TRANSITIONS_TIME = 400;

var getBorder = function getBorder(theme) {
  return "1px solid ".concat(theme.palette.type === 'light' ? lighten(fade(theme.palette.divider, 1), 0.88) : darken(fade(theme.palette.divider, 1), 0.68));
};
var cellsMeta = function cellsMeta(tableElement) {
  var cellElements = Array.from(tableElement.querySelectorAll('td'));
  return {
    parentRect: function parentRect() {
      return tableElement.getBoundingClientRect();
    },
    getCellRects: cellElements.map(function (element) {
      return function () {
        return element.getBoundingClientRect();
      };
    })
  };
};
var scrollingStrategy = function scrollingStrategy(scrollablePart, fixedPart) {
  var fixedPartRect = fixedPart.getBoundingClientRect();

  var changeVerticalScroll = function changeVerticalScroll(value) {
    // eslint-disable-next-line no-param-reassign
    scrollablePart.scrollTop += value;
  };

  return {
    topBoundary: fixedPartRect.height + fixedPartRect.top,
    bottomBoundary: scrollablePart.offsetTop + scrollablePart.clientHeight,
    changeVerticalScroll: changeVerticalScroll
  };
};
var setColor = function setColor(level, color) {
  return color[level] || PRIMARY_COLOR[level];
};

var styles$1 = function styles(theme) {
  return {
    container: {
      overflowY: 'auto',
      position: 'relative'
    },
    stickyHeader: {
      top: 0,
      zIndex: 1,
      tableLayout: 'fixed',
      position: 'sticky',
      overflow: 'visible',
      background: theme.palette.background.paper
    },
    timeTable: {
      position: 'relative'
    },
    fixedWidth: {
      width: theme.spacing(10)
    },
    mainTable: {
      width: "calc(100% - ".concat(theme.spacing(10), "px)")
    }
  };
};

var VerticalViewLayoutBase =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(VerticalViewLayoutBase, _React$PureComponent);

  function VerticalViewLayoutBase(props) {
    var _this;

    _classCallCheck(this, VerticalViewLayoutBase);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VerticalViewLayoutBase).call(this, props));
    _this.layout = createRef();
    _this.layoutHeader = createRef();
    return _this;
  }

  _createClass(VerticalViewLayoutBase, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setScrollingStrategy();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.setScrollingStrategy();
    }
  }, {
    key: "setScrollingStrategy",
    value: function setScrollingStrategy() {
      var setScrollingStrategy = this.props.setScrollingStrategy;
      setScrollingStrategy(scrollingStrategy(this.layout.current, this.layoutHeader.current));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          TimeScale = _this$props.timeScaleComponent,
          DayScale = _this$props.dayScaleComponent,
          TimeTable = _this$props.timeTableComponent,
          DayScaleEmptyCell = _this$props.dayScaleEmptyCellComponent,
          setScrollingStrategy = _this$props.setScrollingStrategy,
          classes = _this$props.classes,
          className = _this$props.className,
          restProps = _objectWithoutProperties(_this$props, ["timeScaleComponent", "dayScaleComponent", "timeTableComponent", "dayScaleEmptyCellComponent", "setScrollingStrategy", "classes", "className"]);

      return createElement(Grid, _extends({
        ref: this.layout,
        container: true,
        className: classNames(classes.container, className),
        direction: "column",
        wrap: "nowrap"
      }, restProps), createElement("div", null, createElement(Grid, {
        item: true,
        xs: "auto",
        className: classes.stickyHeader
      }, createElement(Grid, {
        ref: this.layoutHeader,
        container: true,
        direction: "row"
      }, createElement("div", {
        className: classes.fixedWidth
      }, createElement(DayScaleEmptyCell, null)), createElement("div", {
        className: classes.mainTable
      }, createElement(DayScale, null)))), createElement(Grid, {
        item: true,
        xs: "auto"
      }, createElement(Grid, {
        container: true,
        direction: "row"
      }, createElement("div", {
        className: classes.fixedWidth
      }, createElement(TimeScale, null)), createElement("div", {
        className: classNames(classes.timeTable, classes.mainTable)
      }, createElement(TimeTable, null))))));
    }
  }]);

  return VerticalViewLayoutBase;
}(PureComponent);

process.env.NODE_ENV !== "production" ? VerticalViewLayoutBase.propTypes = {
  // oneOfType is a workaround because withStyles returns react object
  timeScaleComponent: oneOfType([func, object]).isRequired,
  dayScaleComponent: oneOfType([func, object]).isRequired,
  timeTableComponent: oneOfType([func, object]).isRequired,
  dayScaleEmptyCellComponent: oneOfType([func, object]).isRequired,
  setScrollingStrategy: func.isRequired,
  classes: object.isRequired,
  className: string
} : void 0;
VerticalViewLayoutBase.defaultProps = {
  className: undefined
};
var VerticalViewLayout = withStyles(styles$1, {
  name: 'VerticalViewLayout'
})(VerticalViewLayoutBase);

var Row = function Row(_ref) {
  var children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["children"]);

  return createElement(TableRow, restProps, children);
};
process.env.NODE_ENV !== "production" ? Row.propTypes = {
  children: node
} : void 0;
Row.defaultProps = {
  children: null
};

var styles$2 = function styles(theme) {
  return {
    emptyCell: {
      borderBottom: getBorder(theme),
      boxSizing: 'border-box',
      height: '100%',
      width: '100%'
    }
  };
};

var DayScaleEmptyCellBase = function DayScaleEmptyCellBase(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["classes", "className", "children"]);

  return createElement("div", _extends({}, restProps, {
    className: classNames(classes.emptyCell, className)
  }), children);
};
process.env.NODE_ENV !== "production" ? DayScaleEmptyCellBase.propTypes = {
  classes: object.isRequired,
  className: string,
  children: node
} : void 0;
DayScaleEmptyCellBase.defaultProps = {
  className: undefined,
  children: undefined
};
var DayScaleEmptyCell = withStyles(styles$2, {
  name: 'DayScaleEmptyCell'
})(DayScaleEmptyCellBase);

var styles$3 = {
  container: {
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0
  }
};
var Container = withStyles(styles$3, {
  name: 'AppointmentsContainer'
})(ContainerBase);

var styles$4 = {
  table: {
    tableLayout: 'fixed'
  }
};

var TicksLayoutBase = function TicksLayoutBase(_ref) {
  var Cell = _ref.cellComponent,
      Row = _ref.rowComponent,
      cellsData = _ref.cellsData,
      classes = _ref.classes,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, ["cellComponent", "rowComponent", "cellsData", "classes", "className"]);

  return createElement(TableMUI, _extends({}, restProps, {
    className: classNames(classes.table, className)
  }), createElement(TableBody, null, cellsData.map(function (days) {
    return createElement(Row, {
      key: days[0].startDate
    }, createElement(Cell, {
      key: days[0].endDate
    }));
  })));
};

process.env.NODE_ENV !== "production" ? TicksLayoutBase.propTypes = {
  cellsData: arrayOf(Array).isRequired,
  cellComponent: oneOfType([func, object]).isRequired,
  rowComponent: oneOfType([func, object]).isRequired,
  classes: object.isRequired,
  className: string
} : void 0;
TicksLayoutBase.defaultProps = {
  className: undefined
};
var TicksLayout = withStyles(styles$4, {
  name: 'TicksLayout'
})(TicksLayoutBase);

var styles$5 = function styles(_ref) {
  var spacing = _ref.spacing;
  return {
    timeScale: {
      width: "calc(100% - ".concat(spacing(1), "px)")
    },
    ticks: {
      width: spacing(1)
    }
  };
};

var LayoutBase$1 = function LayoutBase(_ref2) {
  var Label = _ref2.labelComponent,
      rowComponent = _ref2.rowComponent,
      tickCellComponent = _ref2.tickCellComponent,
      cellsData = _ref2.cellsData,
      formatDate = _ref2.formatDate,
      classes = _ref2.classes,
      restProps = _objectWithoutProperties(_ref2, ["labelComponent", "rowComponent", "tickCellComponent", "cellsData", "formatDate", "classes"]);

  return createElement(Grid, _extends({
    container: true,
    direction: "row"
  }, restProps), createElement("div", {
    className: classes.timeScale
  }, createElement(Label, {
    key: cellsData[0][0].startDate
  }), cellsData.map(function (days, index) {
    return index !== cellsData.length - 1 && createElement(Label, {
      time: days[0].endDate,
      formatDate: formatDate,
      key: days[0].endDate
    });
  }), createElement(Label, {
    key: cellsData[cellsData.length - 1][0].endDate
  })), createElement(TicksLayout, {
    rowComponent: rowComponent,
    cellComponent: tickCellComponent,
    cellsData: cellsData,
    className: classes.ticks
  }));
};

process.env.NODE_ENV !== "production" ? LayoutBase$1.propTypes = {
  cellsData: arrayOf(Array).isRequired,
  labelComponent: oneOfType([func, object]).isRequired,
  rowComponent: oneOfType([func, object]).isRequired,
  tickCellComponent: oneOfType([func, object]).isRequired,
  formatDate: func.isRequired,
  classes: object.isRequired
} : void 0;
var Layout = withStyles(styles$5, {
  name: 'Layout'
})(LayoutBase$1);

var styles$6 = function styles(theme) {
  return {
    label: {
      userSelect: 'none',
      border: 0,
      height: theme.spacing(6) + 1,
      lineHeight: "".concat(theme.spacing(6), "px"),
      padding: 0,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      textAlign: 'right',
      paddingLeft: theme.spacing(0.25),
      paddingRight: theme.spacing(1)
    },
    text: _objectSpread2({}, theme.typography.caption, {
      fontSize: '0.7rem',
      whiteSpace: 'nowrap',
      color: theme.palette.text.secondary
    }),
    emptyLabel: {
      height: theme.spacing(3)
    }
  };
};

var LabelBase = memo(function (_ref) {
  var _classNames;

  var classes = _ref.classes,
      className = _ref.className,
      time = _ref.time,
      formatDate = _ref.formatDate,
      restProps = _objectWithoutProperties(_ref, ["classes", "className", "time", "formatDate"]);

  return createElement("div", _extends({
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes.label, true), _defineProperty(_classNames, classes.emptyLabel, !time), _classNames), className)
  }, restProps), time && createElement("span", {
    className: classes.text
  }, formatDate(time, HOUR_MINUTE_OPTIONS)));
});
LabelBase.propTypes = {
  formatDate: func,
  time: instanceOf(Date),
  classes: object.isRequired,
  className: string
};
LabelBase.defaultProps = {
  className: undefined,
  time: undefined,
  formatDate: function formatDate() {
    return undefined;
  }
};
var Label = withStyles(styles$6, {
  name: 'Label'
})(LabelBase);

var styles$7 = function styles(theme) {
  return {
    cell: {
      height: theme.spacing(6),
      padding: 0,
      borderBottom: getBorder(theme),
      'tr:last-child &': {
        borderBottom: 'none'
      }
    }
  };
};

var TickCellBase = function TickCellBase(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      startDate = _ref.startDate,
      endDate = _ref.endDate,
      restProps = _objectWithoutProperties(_ref, ["classes", "className", "startDate", "endDate"]);

  return createElement(TableCell, _extends({
    className: classNames(classes.cell, className)
  }, restProps));
};

process.env.NODE_ENV !== "production" ? TickCellBase.propTypes = {
  classes: object.isRequired,
  startDate: instanceOf(Date),
  endDate: instanceOf(Date),
  className: string
} : void 0;
TickCellBase.defaultProps = {
  className: undefined,
  startDate: undefined,
  endDate: undefined
};
var TickCell = withStyles(styles$7, {
  name: 'TickCell'
})(TickCellBase);

var styles$8 = {
  table: {
    tableLayout: 'fixed'
  }
};

var LayoutBase$2 =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(LayoutBase, _React$PureComponent);

  function LayoutBase(props) {
    var _this;

    _classCallCheck(this, LayoutBase);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LayoutBase).call(this, props));
    _this.table = createRef();
    return _this;
  }

  _createClass(LayoutBase, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setCells();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.setCells();
    }
  }, {
    key: "setCells",
    value: function setCells() {
      var setCellElementsMeta = this.props.setCellElementsMeta;
      var tableElement = this.table.current;
      setCellElementsMeta(cellsMeta(tableElement));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          setCellElementsMeta = _this$props.setCellElementsMeta,
          Cell = _this$props.cellComponent,
          Row = _this$props.rowComponent,
          classes = _this$props.classes,
          className = _this$props.className,
          cellsData = _this$props.cellsData,
          formatDate = _this$props.formatDate,
          restProps = _objectWithoutProperties(_this$props, ["setCellElementsMeta", "cellComponent", "rowComponent", "classes", "className", "cellsData", "formatDate"]);

      return createElement(TableMUI, _extends({
        ref: this.table,
        className: classNames(classes.table, className)
      }, restProps), createElement(TableBody, null, cellsData.map(function (days, index) {
        return createElement(Row, {
          key: index.toString()
        }, days.map(function (_ref) {
          var startDate = _ref.startDate,
              endDate = _ref.endDate;
          return createElement(Cell, {
            key: startDate,
            startDate: startDate,
            endDate: endDate
          });
        }));
      })));
    }
  }]);

  return LayoutBase;
}(PureComponent);

process.env.NODE_ENV !== "production" ? LayoutBase$2.propTypes = {
  // oneOfType is a workaround because withStyles returns react object
  classes: object.isRequired,
  cellsData: arrayOf(Array).isRequired,
  cellComponent: oneOfType([func, object]).isRequired,
  rowComponent: oneOfType([func, object]).isRequired,
  formatDate: func.isRequired,
  setCellElementsMeta: func.isRequired,
  className: string
} : void 0;
LayoutBase$2.defaultProps = {
  className: undefined
};
var Layout$1 = withStyles(styles$8, {
  name: 'Layout'
})(LayoutBase$2);

var styles$9 = function styles(theme) {
  return {
    cell: {
      height: theme.spacing(6),
      padding: 0,
      borderLeft: getBorder(theme),
      'tr:last-child &': {
        borderBottom: 'none'
      },
      '&:hover': {
        backgroundColor: theme.palette.action.hover
      },
      '&:focus': {
        backgroundColor: fade(theme.palette.primary.main, 0.15),
        outline: 0
      },
      '&:last-child': {
        paddingRight: 0
      }
    }
  };
};

var CellBase = function CellBase(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      children = _ref.children,
      startDate = _ref.startDate,
      endDate = _ref.endDate,
      restProps = _objectWithoutProperties(_ref, ["classes", "className", "children", "startDate", "endDate"]);

  return createElement(TableCell, _extends({
    tabIndex: 0,
    className: classNames(classes.cell, className)
  }, restProps), children);
};

process.env.NODE_ENV !== "production" ? CellBase.propTypes = {
  classes: object.isRequired,
  startDate: instanceOf(Date),
  endDate: instanceOf(Date),
  children: node,
  className: string
} : void 0;
CellBase.defaultProps = {
  children: null,
  className: undefined,
  startDate: undefined,
  endDate: undefined
};
var Cell = withStyles(styles$9, {
  name: 'Cell'
})(CellBase);

var styles$a = {
  table: {
    tableLayout: 'fixed'
  }
};

var LayoutBase$3 = function LayoutBase(_ref) {
  var Cell = _ref.cellComponent,
      Row = _ref.rowComponent,
      cellsData = _ref.cellsData,
      className = _ref.className,
      classes = _ref.classes,
      formatDate = _ref.formatDate,
      restProps = _objectWithoutProperties(_ref, ["cellComponent", "rowComponent", "cellsData", "className", "classes", "formatDate"]);

  return createElement(TableMUI, _extends({
    className: classNames(classes.table, className)
  }, restProps), createElement(TableBody, null, createElement(Row, null, cellsData[0].map(function (_ref2, index) {
    var startDate = _ref2.startDate,
        endDate = _ref2.endDate,
        today = _ref2.today;
    return createElement(Cell, {
      key: index.toString(),
      startDate: startDate,
      endDate: endDate,
      today: today,
      formatDate: formatDate
    });
  }))));
};

process.env.NODE_ENV !== "production" ? LayoutBase$3.propTypes = {
  // oneOfType is a workaround because withStyles returns react object
  classes: object.isRequired,
  cellsData: arrayOf(Array).isRequired,
  cellComponent: oneOfType([func, object]).isRequired,
  rowComponent: oneOfType([func, object]).isRequired,
  formatDate: func.isRequired,
  className: string
} : void 0;
LayoutBase$3.defaultProps = {
  className: undefined
};
var Layout$2 = withStyles(styles$a, {
  name: 'Layout'
})(LayoutBase$3);

var styles$b = function styles(theme) {
  return {
    cell: {
      userSelect: 'none',
      paddingBottom: 0,
      textAlign: 'center',
      borderBottom: 'none',
      paddingRight: 0,
      paddingLeft: 0,
      '@media (max-width: 700px)': {
        padding: theme.spacing(1),
        paddingBottom: 0
      },
      'table:last-child &': {
        borderBottom: getBorder(theme)
      },
      '&:only-child': {
        textAlign: 'left',
        paddingLeft: theme.spacing(2)
      },
      paddingTop: theme.spacing(0.5)
    },
    dayOfWeek: _objectSpread2({}, theme.typography.caption, {
      margin: 0,
      color: theme.palette.text.secondary
    }),
    dayOfMonth: _objectSpread2({}, theme.typography.h4, {
      '@media (max-width: 700px)': _objectSpread2({}, theme.typography.h6),
      color: theme.palette.text.secondary,
      lineHeight: 1.5
    }),
    today: {
      width: '1.5em',
      height: '1.5em',
      lineHeight: 1.5,
      textAlign: 'center',
      borderRadius: '50%',
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      cursor: 'default',
      paddingBottom: 0,
      marginRight: 'auto',
      marginLeft: 'auto',
      'td:only-child &': {
        marginRight: 0,
        marginLeft: 0
      }
    },
    highlight: {
      color: theme.palette.primary.main
    },
    dayView: {
      'td:only-child &': {
        textAlign: 'center',
        width: 'auto',
        display: 'inline-block'
      }
    }
  };
};

var CellBase$1 = memo(function (_ref) {
  var _classNames, _classNames2;

  var classes = _ref.classes,
      className = _ref.className,
      startDate = _ref.startDate,
      endDate = _ref.endDate,
      today = _ref.today,
      formatDate = _ref.formatDate,
      restProps = _objectWithoutProperties(_ref, ["classes", "className", "startDate", "endDate", "today", "formatDate"]);

  return createElement(TableCell, _extends({
    className: classNames(classes.cell, className)
  }, restProps), createElement("div", {
    className: classes.dayView
  }, createElement("p", {
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes.dayOfWeek, true), _defineProperty(_classNames, classes.highlight, today), _classNames))
  }, formatDate(startDate, WEEK_DAY_OPTIONS)), createElement("div", {
    className: classNames((_classNames2 = {}, _defineProperty(_classNames2, classes.dayOfMonth, true), _defineProperty(_classNames2, classes.today, today), _classNames2))
  }, formatDate(startDate, DAY_OPTIONS))));
});
CellBase$1.propTypes = {
  classes: object.isRequired,
  formatDate: func.isRequired,
  startDate: instanceOf(Date).isRequired,
  endDate: instanceOf(Date),
  className: string,
  today: bool
};
CellBase$1.defaultProps = {
  className: undefined,
  endDate: undefined,
  today: false
};
var Cell$1 = withStyles(styles$b, {
  name: 'Cell'
})(CellBase$1);

var DayView = withComponents({
  Layout: VerticalViewLayout,
  AppointmentLayer: Container,
  DayScaleEmptyCell: DayScaleEmptyCell,
  TimeScaleLayout: Layout,
  TimeScaleLabel: Label,
  TimeScaleTickCell: TickCell,
  TimeScaleTicksRow: Row,
  DayScaleLayout: Layout$2,
  DayScaleCell: Cell$1,
  DayScaleRow: Row,
  TimeTableLayout: Layout$1,
  TimeTableCell: Cell,
  TimeTableRow: Row
})(DayView$1);

var WeekView = withComponents({
  Layout: VerticalViewLayout,
  AppointmentLayer: Container,
  DayScaleEmptyCell: DayScaleEmptyCell,
  TimeScaleLayout: Layout,
  TimeScaleLabel: Label,
  TimeScaleTickCell: TickCell,
  TimeScaleTicksRow: Row,
  DayScaleLayout: Layout$2,
  DayScaleCell: Cell$1,
  DayScaleRow: Row,
  TimeTableLayout: Layout$1,
  TimeTableCell: Cell,
  TimeTableRow: Row
})(WeekView$1);

var styles$c = function styles(theme) {
  return {
    container: {
      overflowY: 'auto',
      position: 'relative'
    },
    stickyHeader: {
      top: 0,
      zIndex: 1,
      tableLayout: 'fixed',
      position: 'sticky',
      overflow: 'visible',
      background: theme.palette.background.paper
    },
    timeTable: {
      position: 'relative'
    }
  };
};

var HorizontalViewLayoutBase =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(HorizontalViewLayoutBase, _React$PureComponent);

  function HorizontalViewLayoutBase(props) {
    var _this;

    _classCallCheck(this, HorizontalViewLayoutBase);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HorizontalViewLayoutBase).call(this, props));
    _this.layout = createRef();
    _this.layoutHeader = createRef();
    return _this;
  }

  _createClass(HorizontalViewLayoutBase, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setScrollingStrategy();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.setScrollingStrategy();
    }
  }, {
    key: "setScrollingStrategy",
    value: function setScrollingStrategy() {
      var setScrollingStrategy = this.props.setScrollingStrategy;
      setScrollingStrategy(scrollingStrategy(this.layout.current, this.layoutHeader.current));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          DayScale = _this$props.dayScaleComponent,
          TimeTable = _this$props.timeTableComponent,
          setScrollingStrategy = _this$props.setScrollingStrategy,
          classes = _this$props.classes,
          className = _this$props.className,
          restProps = _objectWithoutProperties(_this$props, ["dayScaleComponent", "timeTableComponent", "setScrollingStrategy", "classes", "className"]);

      return createElement(Grid, _extends({
        ref: this.layout,
        className: classNames(classes.container, className),
        container: true,
        direction: "column",
        wrap: "nowrap"
      }, restProps), createElement("div", null, createElement(Grid, {
        ref: this.layoutHeader,
        item: true,
        className: classes.stickyHeader
      }, createElement(DayScale, null)), createElement(Grid, {
        item: true,
        className: classes.timeTable
      }, createElement(TimeTable, null))));
    }
  }]);

  return HorizontalViewLayoutBase;
}(PureComponent);

process.env.NODE_ENV !== "production" ? HorizontalViewLayoutBase.propTypes = {
  // oneOfType is a workaround because withStyles returns react object
  dayScaleComponent: oneOfType([func, object]).isRequired,
  timeTableComponent: oneOfType([func, object]).isRequired,
  setScrollingStrategy: func.isRequired,
  classes: object.isRequired,
  className: string
} : void 0;
HorizontalViewLayoutBase.defaultProps = {
  className: undefined
};
var HorizontalViewLayout = withStyles(styles$c, {
  name: 'HorizontalViewLayout'
})(HorizontalViewLayoutBase);

var styles$d = {
  table: {
    tableLayout: 'fixed'
  }
};

var LayoutBase$4 =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(LayoutBase, _React$PureComponent);

  function LayoutBase(props) {
    var _this;

    _classCallCheck(this, LayoutBase);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LayoutBase).call(this, props));
    _this.table = createRef();
    return _this;
  }

  _createClass(LayoutBase, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setCells();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.setCells();
    }
  }, {
    key: "setCells",
    value: function setCells() {
      var setCellElementsMeta = this.props.setCellElementsMeta;
      var tableElement = this.table.current;
      setCellElementsMeta(cellsMeta(tableElement));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          setCellElementsMeta = _this$props.setCellElementsMeta,
          Cell = _this$props.cellComponent,
          Row = _this$props.rowComponent,
          classes = _this$props.classes,
          className = _this$props.className,
          cellsData = _this$props.cellsData,
          formatDate = _this$props.formatDate,
          restProps = _objectWithoutProperties(_this$props, ["setCellElementsMeta", "cellComponent", "rowComponent", "classes", "className", "cellsData", "formatDate"]);

      return createElement(TableMUI, _extends({
        ref: this.table,
        className: classNames(classes.table, className)
      }, restProps), createElement(TableBody, null, cellsData.map(function (row) {
        return createElement(Row, {
          key: row[0].startDate.toString()
        }, row.map(function (_ref) {
          var startDate = _ref.startDate,
              endDate = _ref.endDate,
              today = _ref.today,
              otherMonth = _ref.otherMonth;
          return createElement(Cell, {
            key: startDate,
            startDate: startDate,
            endDate: endDate,
            today: today,
            otherMonth: otherMonth,
            formatDate: formatDate
          });
        }));
      })));
    }
  }]);

  return LayoutBase;
}(PureComponent);

process.env.NODE_ENV !== "production" ? LayoutBase$4.propTypes = {
  // oneOfType is a workaround because withStyles returns react object
  cellsData: arrayOf(Array).isRequired,
  classes: object.isRequired,
  cellComponent: oneOfType([func, object]).isRequired,
  rowComponent: oneOfType([func, object]).isRequired,
  formatDate: func.isRequired,
  setCellElementsMeta: func.isRequired,
  className: string
} : void 0;
LayoutBase$4.defaultProps = {
  className: undefined
};
var Layout$3 = withStyles(styles$d, {
  name: 'Layout'
})(LayoutBase$4);

var styles$e = function styles(theme) {
  return {
    cell: {
      userSelect: 'none',
      verticalAlign: 'top',
      padding: 0,
      height: 100,
      borderLeft: getBorder(theme),
      '&:first-child': {
        borderLeft: 'none'
      },
      '&:last-child': {
        paddingRight: 0
      },
      'tr:last-child &': {
        borderBottom: 'none'
      },
      '&:hover': {
        backgroundColor: theme.palette.action.hover
      },
      '&:focus': {
        backgroundColor: fade(theme.palette.primary.main, 0.15),
        outline: 0
      }
    },
    text: {
      padding: '1em',
      paddingTop: '0.5em',
      textAlign: 'center',
      '@media (max-width: 500px)': {
        padding: '0.5em'
      }
    },
    today: {
      marginTop: '0.33em',
      width: '1.72em',
      height: '1.72em',
      lineHeight: 1.72,
      textAlign: 'center',
      borderRadius: '50%',
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      cursor: 'default',
      marginRight: 'auto',
      marginLeft: 'auto'
    },
    otherMonth: {
      color: theme.palette.text.disabled
    }
  };
};

var CellBase$2 = memo(function (_ref) {
  var _classNames;

  var classes = _ref.classes,
      className = _ref.className,
      startDate = _ref.startDate,
      endDate = _ref.endDate,
      today = _ref.today,
      otherMonth = _ref.otherMonth,
      formatDate = _ref.formatDate,
      restProps = _objectWithoutProperties(_ref, ["classes", "className", "startDate", "endDate", "today", "otherMonth", "formatDate"]);

  var isFirstMonthDay = startDate.getDate() === 1;
  var formatOptions = isFirstMonthDay && !today ? DAY_SHORT_MONTH_OPTIONS : DAY_OPTIONS;
  return createElement(TableCell, _extends({
    tabIndex: 0,
    className: classNames(classes.cell, className)
  }, restProps), createElement("div", {
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes.text, !today), _defineProperty(_classNames, classes.today, today), _defineProperty(_classNames, classes.otherMonth, otherMonth && !today), _classNames))
  }, formatDate(startDate, formatOptions)));
});
process.env.NODE_ENV !== "production" ? CellBase$2.propTypes = {
  classes: object.isRequired,
  formatDate: func.isRequired,
  startDate: instanceOf(Date).isRequired,
  endDate: instanceOf(Date),
  className: string,
  today: bool,
  otherMonth: bool
} : void 0;
CellBase$2.defaultProps = {
  endDate: undefined,
  className: undefined,
  today: false,
  otherMonth: false
};
var Cell$2 = withStyles(styles$e, {
  name: 'Cell'
})(CellBase$2);

var styles$f = function styles(theme) {
  return {
    cell: {
      userSelect: 'none',
      padding: 0,
      borderLeft: getBorder(theme),
      borderBottom: 'none',
      '&:first-child': {
        borderLeft: 'none'
      },
      '&:last-child': {
        paddingRight: 0
      },
      textAlign: 'center'
    },
    dayOfWeek: _objectSpread2({}, theme.typography.caption, {
      margin: 0,
      padding: theme.spacing(1),
      paddingBottom: 0,
      color: theme.palette.text.secondary,
      fontWeight: 'bold'
    })
  };
};

var CellBase$3 = memo(function (_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      startDate = _ref.startDate,
      endDate = _ref.endDate,
      today = _ref.today,
      formatDate = _ref.formatDate,
      restProps = _objectWithoutProperties(_ref, ["classes", "className", "startDate", "endDate", "today", "formatDate"]);

  return createElement(TableCell, _extends({
    className: classNames(classes.cell, className)
  }, restProps), createElement("div", {
    className: classes.dayOfWeek
  }, formatDate(startDate, WEEK_DAY_OPTIONS)));
});
CellBase$3.propTypes = {
  classes: object.isRequired,
  formatDate: func.isRequired,
  startDate: instanceOf(Date).isRequired,
  endDate: instanceOf(Date),
  className: string,
  today: bool
};
CellBase$3.defaultProps = {
  className: undefined,
  endDate: undefined,
  today: false
};
var Cell$3 = withStyles(styles$f, {
  name: 'Cell'
})(CellBase$3);

var MonthView = withComponents({
  Layout: HorizontalViewLayout,
  AppointmentLayer: Container,
  DayScaleLayout: Layout$2,
  DayScaleCell: Cell$3,
  DayScaleRow: Row,
  TimeTableLayout: Layout$3,
  TimeTableCell: Cell$2,
  TimeTableRow: Row
})(MonthView$1);

var styles$g = function styles(_ref) {
  var palette = _ref.palette,
      spacing = _ref.spacing;
  return {
    title: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    content: {
      color: palette.common.white,
      padding: spacing(0.5),
      paddingTop: spacing(0.125),
      paddingLeft: spacing(0.75),
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      display: 'flex'
    },
    container: {
      width: '100%'
    },
    recurringContainer: {
      width: "calc(100% - ".concat(spacing(2), "px)")
    },
    imageContainer: {
      width: spacing(2),
      height: spacing(2)
    },
    image: {
      width: '100%',
      height: '100%'
    }
  };
};

var HorizontalAppointmentBase = function HorizontalAppointmentBase(_ref2) {
  var classes = _ref2.classes,
      data = _ref2.data,
      children = _ref2.children,
      className = _ref2.className,
      RecurringIcon = _ref2.recurringIconComponent,
      formatDate = _ref2.formatDate,
      durationType = _ref2.durationType,
      restProps = _objectWithoutProperties(_ref2, ["classes", "data", "children", "className", "recurringIconComponent", "formatDate", "durationType"]);

  var repeat = !!data.rRule;
  return createElement("div", _extends({
    className: classNames(classes.content, className)
  }, restProps), children || createElement(Fragment, null, createElement("div", {
    className: repeat ? classes.recurringContainer : classes.container
  }, createElement("div", {
    className: classes.title
  }, data.title)), repeat ? createElement("div", {
    className: classes.imageContainer
  }, createElement(RecurringIcon, {
    className: classes.image
  })) : undefined));
};

process.env.NODE_ENV !== "production" ? HorizontalAppointmentBase.propTypes = {
  // oneOfType is a workaround because withStyles returns react object
  recurringIconComponent: oneOfType([func, object]).isRequired,
  classes: object.isRequired,
  data: object.isRequired,
  durationType: string,
  children: node,
  className: string,
  formatDate: func
} : void 0;
HorizontalAppointmentBase.defaultProps = {
  formatDate: function formatDate() {
    return '';
  },
  children: undefined,
  className: undefined,
  durationType: undefined
};
var HorizontalAppointment = withStyles(styles$g, {
  name: 'HorizontalAppointment'
})(HorizontalAppointmentBase);

var styles$h = function styles(_ref) {
  var palette = _ref.palette,
      spacing = _ref.spacing;
  return {
    title: {
      fontWeight: 'bold',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    textContainer: {
      lineHeight: 1,
      whiteSpace: 'pre-wrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    middleContainer: {
      lineHeight: '0.9!important'
    },
    time: {
      display: 'inline-block',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    content: {
      color: palette.common.white,
      padding: spacing(0.5, 1),
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      display: 'flex',
      '@media (max-width: 500px)': {
        paddingLeft: spacing(0.5),
        paddingRight: spacing(0.5)
      }
    },
    shortContent: {
      padding: spacing(0.25, 1),
      '@media (max-width: 500px)': {
        paddingLeft: spacing(0.5),
        paddingRight: spacing(0.5)
      }
    },
    shortContainer: {
      display: 'flex'
    },
    shortTime: {
      textOverflow: 'initial',
      flexShrink: 0
    },
    shortTitle: {
      flexShrink: 3
    },
    container: {
      width: '100%'
    },
    recurringContainer: {
      width: "calc(100% - ".concat(spacing(2), "px)")
    },
    imageContainer: {
      width: spacing(2),
      height: spacing(2)
    },
    image: {
      width: '100%',
      height: '100%'
    }
  };
};

var VerticalAppointmentBase = function VerticalAppointmentBase(_ref2) {
  var _classNames, _classNames2, _classNames3;

  var classes = _ref2.classes,
      data = _ref2.data,
      children = _ref2.children,
      className = _ref2.className,
      formatDate = _ref2.formatDate,
      RecurringIcon = _ref2.recurringIconComponent,
      durationType = _ref2.durationType,
      restProps = _objectWithoutProperties(_ref2, ["classes", "data", "children", "className", "formatDate", "recurringIconComponent", "durationType"]);

  var repeat = !!data.rRule;
  var isShortHeight = durationType === 'short';
  var isMiddleHeight = durationType === 'middle';
  return createElement("div", _extends({
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes.content, true), _defineProperty(_classNames, classes.shortContent, isShortHeight || isMiddleHeight), _classNames), className)
  }, restProps), children || createElement(Fragment, null, createElement("div", {
    className: classNames((_classNames2 = {}, _defineProperty(_classNames2, classes.container, !repeat), _defineProperty(_classNames2, classes.recurringContainer, repeat), _classNames2))
  }, isShortHeight ? createElement("div", {
    className: classes.shortContainer
  }, createElement("div", {
    className: classNames(classes.title, classes.shortTitle)
  }, data.title, ", \xA0"), createElement("div", {
    className: classNames(classes.time, classes.shortTime)
  }, formatDate(data.startDate, HOUR_MINUTE_OPTIONS))) : createElement(Fragment, null, createElement("div", {
    className: classes.title
  }, data.title), createElement("div", {
    className: classNames((_classNames3 = {}, _defineProperty(_classNames3, classes.textContainer, true), _defineProperty(_classNames3, classes.middleContainer, isMiddleHeight), _classNames3))
  }, createElement("div", {
    className: classes.time
  }, formatDate(data.startDate, HOUR_MINUTE_OPTIONS)), createElement("div", {
    className: classes.time
  }, "\xA0 - \xA0"), createElement("div", {
    className: classes.time
  }, formatDate(data.endDate, HOUR_MINUTE_OPTIONS))))), repeat ? createElement("div", {
    className: classes.imageContainer
  }, createElement(RecurringIcon, {
    className: classes.image
  })) : undefined));
};

process.env.NODE_ENV !== "production" ? VerticalAppointmentBase.propTypes = {
  // oneOfType is a workaround because withStyles returns react object
  recurringIconComponent: oneOfType([func, object]).isRequired,
  classes: object.isRequired,
  data: object.isRequired,
  formatDate: func.isRequired,
  durationType: string.isRequired,
  children: node,
  className: string
} : void 0;
VerticalAppointmentBase.defaultProps = {
  children: undefined,
  className: undefined
};
var VerticalAppointment = withStyles(styles$h, {
  name: 'VerticalAppointment'
})(VerticalAppointmentBase);

var AppointmentContent = function AppointmentContent(_ref) {
  var type = _ref.type,
      restProps = _objectWithoutProperties(_ref, ["type"]);

  return type === HORIZONTAL_TYPE ? createElement(HorizontalAppointment, restProps) : createElement(VerticalAppointment, restProps);
};
process.env.NODE_ENV !== "production" ? AppointmentContent.propTypes = {
  type: oneOf([HORIZONTAL_TYPE, VERTICAL_TYPE]).isRequired
} : void 0;

var styles$i = function styles(_ref) {
  var palette = _ref.palette,
      typography = _ref.typography,
      spacing = _ref.spacing;
  return {
    appointment: _objectSpread2({
      userSelect: 'none',
      position: 'absolute',
      height: '100%',
      width: '100%',
      overflow: 'hidden',
      boxSizing: 'border-box',
      // fix no space between appointments bug in Firefox (https://bugzilla.mozilla.org/show_bug.cgi?id=989340)
      borderRight: '2px solid transparent',
      borderBottom: '1px solid transparent',
      backgroundClip: 'padding-box',
      borderRadius: spacing(0.5),
      backgroundColor: setColor(300, palette.primary)
    }, typography.caption, {
      '&:hover': {
        backgroundColor: setColor(400, palette.primary)
      },
      '&:focus': {
        backgroundColor: setColor(100, palette.primary),
        outline: 0
      }
    }),
    clickableAppointment: {
      cursor: 'pointer'
    }
  };
};

var AppointmentBase = function AppointmentBase(_ref2) {
  var _classNames;

  var classes = _ref2.classes,
      className = _ref2.className,
      children = _ref2.children,
      data = _ref2.data,
      handleClick = _ref2.onClick,
      draggable = _ref2.draggable,
      restProps = _objectWithoutProperties(_ref2, ["classes", "className", "children", "data", "onClick", "draggable"]);

  var onClick = handleClick ? {
    onClick: function onClick(_ref3) {
      var target = _ref3.target;
      handleClick({
        target: target,
        data: data
      });
    }
  } : null;
  var clickable = onClick || restProps.onDoubleClick || draggable;
  return createElement("div", _extends({
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes.appointment, true), _defineProperty(_classNames, classes.clickableAppointment, clickable), _classNames), className)
  }, onClick, restProps), children);
};

process.env.NODE_ENV !== "production" ? AppointmentBase.propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
  className: string,
  data: object,
  onClick: func,
  draggable: bool
} : void 0;
AppointmentBase.defaultProps = {
  onClick: undefined,
  className: undefined,
  data: {},
  draggable: false
};
var Appointment = withStyles(styles$i, {
  name: 'Appointment'
})(AppointmentBase);

var verticalStyles = {
  width: '100%',
  height: '10px'
};
var horizontalStyles = {
  top: 0,
  width: '10px',
  height: '100%'
};
var styles$j = {
  slice: {
    position: 'absolute',
    zIndex: 50
  },
  verticalStart: _objectSpread2({}, verticalStyles, {
    top: '-10px',
    boxShadow: '0 10px 15px rgba(0,0,0,0.2)'
  }),
  verticalEnd: _objectSpread2({}, verticalStyles, {
    bottom: '-10px',
    boxShadow: '0 -10px 15px rgba(0,0,0,0.2)'
  }),
  horizontalStart: _objectSpread2({}, horizontalStyles, {
    left: '-10px',
    boxShadow: '10px 0 15px rgba(0,0,0,0.2)'
  }),
  horizontalEnd: _objectSpread2({}, horizontalStyles, {
    right: '-10px',
    boxShadow: '-10px 0 15px rgba(0,0,0,0.2)'
  })
};
var SplitIndicatorBase = memo(function (_ref) {
  var _classNames;

  var position = _ref.position,
      appointmentType = _ref.appointmentType,
      classes = _ref.classes,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, ["position", "appointmentType", "classes", "className"]);

  var vertical = appointmentType === VERTICAL_TYPE;
  var start = position === POSITION_START;
  return createElement("div", _extends({
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes.slice, true), _defineProperty(_classNames, classes.verticalStart, vertical && start), _defineProperty(_classNames, classes.verticalEnd, vertical && !start), _defineProperty(_classNames, classes.horizontalStart, !vertical && start), _defineProperty(_classNames, classes.horizontalEnd, !vertical && !start), _classNames), className)
  }, restProps));
});
process.env.NODE_ENV !== "production" ? SplitIndicatorBase.propTypes = {
  classes: object.isRequired,
  appointmentType: oneOf([VERTICAL_TYPE, HORIZONTAL_TYPE]).isRequired,
  position: oneOf([POSITION_START, POSITION_END]).isRequired,
  className: string
} : void 0;
SplitIndicatorBase.defaultProps = {
  className: undefined
};
var SplitIndicator = withStyles(styles$j, {
  name: 'AppointmentsContainer'
})(SplitIndicatorBase);

var AppointmentContainer = function AppointmentContainer(_ref) {
  var style = _ref.style,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["style", "children"]);

  return createElement("div", _extends({
    style: style
  }, restProps), children);
};
process.env.NODE_ENV !== "production" ? AppointmentContainer.propTypes = {
  children: node.isRequired,
  style: object.isRequired
} : void 0;

var Appointments = withComponents({
  Appointment: Appointment,
  AppointmentContent: AppointmentContent,
  Container: AppointmentContainer,
  SplitIndicator: SplitIndicator,
  RecurringIcon: Repeat
})(Appointments$1);

var styles$k = function styles(theme) {
  return {
    toolbar: {
      borderBottom: getBorder(theme)
    }
  };
};

var ToolbarBase = function ToolbarBase(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, ["children", "classes", "className"]);

  return createElement(ToolbarMUI, _extends({
    className: classNames(classes.toolbar, className)
  }, restProps), children);
};

process.env.NODE_ENV !== "production" ? ToolbarBase.propTypes = {
  children: node.isRequired,
  classes: object.isRequired,
  className: string
} : void 0;
ToolbarBase.defaultProps = {
  className: undefined
};
var Toolbar = withStyles(styles$k, {
  name: 'Toolbar'
})(ToolbarBase);

var styles$l = {
  flexibleSpace: {
    flex: '0 0 0',
    marginLeft: 'auto'
  }
};
var FlexibleSpaceBase = function FlexibleSpaceBase(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, ["children", "classes", "className"]);

  return createElement("div", _extends({
    className: classNames(classes.flexibleSpace, className)
  }, restProps), children);
};
process.env.NODE_ENV !== "production" ? FlexibleSpaceBase.propTypes = {
  classes: object.isRequired,
  children: node,
  className: string
} : void 0;
FlexibleSpaceBase.defaultProps = {
  children: null,
  className: undefined
};
var FlexibleSpace = withStyles(styles$l, {
  name: 'FlexibleSpace'
})(FlexibleSpaceBase);

var Toolbar$1 = withComponents({
  Root: Toolbar,
  FlexibleSpace: FlexibleSpace
})(Toolbar$2);

var styles$m = function styles(_ref) {
  var spacing = _ref.spacing;
  return {
    root: {
      marginLeft: spacing(0.5),
      '&:first-child': {
        marginLeft: 0
      }
    }
  };
};

var RootBase = function RootBase(_ref2) {
  var NavigationButton = _ref2.navigationButtonComponent,
      OpenButton = _ref2.openButtonComponent,
      navigatorText = _ref2.navigatorText,
      rootRef = _ref2.rootRef,
      onVisibilityToggle = _ref2.onVisibilityToggle,
      onNavigate = _ref2.onNavigate,
      className = _ref2.className,
      classes = _ref2.classes,
      restProps = _objectWithoutProperties(_ref2, ["navigationButtonComponent", "openButtonComponent", "navigatorText", "rootRef", "onVisibilityToggle", "onNavigate", "className", "classes"]);

  var navigateBack = useCallback(function () {
    return onNavigate('back');
  }, [onNavigate]);
  var navigateForward = useCallback(function () {
    return onNavigate('forward');
  }, [onNavigate]);
  return createElement("div", _extends({
    className: classNames(classes.root, className),
    ref: rootRef
  }, restProps), createElement(NavigationButton, {
    type: "back",
    onClick: navigateBack
  }), createElement(NavigationButton, {
    type: "forward",
    onClick: navigateForward
  }), createElement(OpenButton, {
    onVisibilityToggle: onVisibilityToggle,
    text: navigatorText
  }));
};

process.env.NODE_ENV !== "production" ? RootBase.propTypes = {
  // oneOfType is a workaround because withStyles returns react object
  navigationButtonComponent: oneOfType([func, object]).isRequired,
  openButtonComponent: oneOfType([func, object]).isRequired,
  onVisibilityToggle: func.isRequired,
  onNavigate: func.isRequired,
  rootRef: func.isRequired,
  navigatorText: string,
  classes: object.isRequired,
  className: string
} : void 0;
RootBase.defaultProps = {
  navigatorText: '',
  className: undefined
};
var Root$1 = withStyles(styles$m)(RootBase, {
  name: 'Root'
});

var origin = {
  vertical: 'top',
  horizontal: 'right'
};
var Overlay = function Overlay(_ref) {
  var visible = _ref.visible,
      onHide = _ref.onHide,
      children = _ref.children,
      target = _ref.target,
      restProps = _objectWithoutProperties(_ref, ["visible", "onHide", "children", "target"]);

  return createElement(Popover, _extends({
    open: visible,
    anchorEl: target,
    onClose: onHide,
    anchorOrigin: origin,
    transformOrigin: origin
  }, restProps), children);
};
process.env.NODE_ENV !== "production" ? Overlay.propTypes = {
  onHide: func.isRequired,
  children: node.isRequired,
  visible: bool,
  target: oneOfType([object, func])
} : void 0;
Overlay.defaultProps = {
  visible: false,
  target: null
};

var styles$n = function styles(_ref) {
  var spacing = _ref.spacing;
  return {
    textButton: {
      '@media (max-width: 700px)': {
        display: 'none'
      }
    },
    iconButton: {
      '@media (min-width: 700px)': {
        display: 'none'
      },
      '@media (max-width: 500px)': {
        width: spacing(4),
        height: spacing(4),
        padding: 0
      }
    }
  };
};

var OpenButtonBase = memo(function (_ref2) {
  var text = _ref2.text,
      onVisibilityToggle = _ref2.onVisibilityToggle,
      classes = _ref2.classes,
      className = _ref2.className,
      restProps = _objectWithoutProperties(_ref2, ["text", "onVisibilityToggle", "classes", "className"]);

  return createElement(Fragment, null, createElement(Button$1, _extends({
    onClick: onVisibilityToggle,
    className: classNames(classes.textButton, className)
  }, restProps), text), createElement(IconButton, _extends({
    onClick: onVisibilityToggle,
    className: classNames(classes.iconButton, className)
  }, restProps), createElement(CalendarToday, null)));
});
OpenButtonBase.propTypes = {
  onVisibilityToggle: func.isRequired,
  text: string,
  className: string,
  classes: object.isRequired
};
OpenButtonBase.defaultProps = {
  text: '',
  className: undefined
};
var OpenButton = withStyles(styles$n, {
  name: 'OpenButton'
})(OpenButtonBase);

var styles$o = function styles(_ref) {
  var spacing = _ref.spacing;
  return {
    button: {
      '@media (max-width: 500px)': {
        width: spacing(4),
        height: spacing(4),
        padding: 0
      }
    }
  };
};

var NavigationButtonBase = memo(function (_ref2) {
  var type = _ref2.type,
      onClick = _ref2.onClick,
      classes = _ref2.classes,
      className = _ref2.className,
      restProps = _objectWithoutProperties(_ref2, ["type", "onClick", "classes", "className"]);

  return createElement(IconButton, _extends({
    onClick: onClick,
    className: classNames(classes.button, className)
  }, restProps), type === 'back' ? createElement(ChevronLeft, null) : createElement(ChevronRight, null));
});
NavigationButtonBase.propTypes = {
  type: oneOf(['forward', 'back']).isRequired,
  onClick: func,
  classes: object.isRequired,
  className: string
};
NavigationButtonBase.defaultProps = {
  onClick: function onClick() {},
  className: undefined
};
var NavigationButton = withStyles(styles$o, {
  name: 'NavigationButton'
})(NavigationButtonBase);

var styles$p = {
  table: {
    width: '320px',
    tableLayout: 'fixed'
  }
};

var TableBase = function TableBase(_ref) {
  var Row = _ref.rowComponent,
      Cell = _ref.cellComponent,
      HeaderRow = _ref.headerRowComponent,
      HeaderCell = _ref.headerCellComponent,
      classes = _ref.classes,
      className = _ref.className,
      cells = _ref.cells,
      headerCells = _ref.headerCells,
      selectedDate = _ref.selectedDate,
      onCellClick = _ref.onCellClick,
      formatDate = _ref.formatDate,
      restProps = _objectWithoutProperties(_ref, ["rowComponent", "cellComponent", "headerRowComponent", "headerCellComponent", "classes", "className", "cells", "headerCells", "selectedDate", "onCellClick", "formatDate"]);

  var comparableSelectedDate = moment(selectedDate);
  return createElement(TableMUI, _extends({
    className: classNames(classes.table, className)
  }, restProps), createElement(TableHead, null, createElement(HeaderRow, null, headerCells.map(function (cell) {
    var key = formatDate(cell.startDate, WEEK_DAY_OPTIONS);
    return createElement(HeaderCell, {
      key: key
    }, key);
  }))), createElement(TableBody, null, cells.map(function (row) {
    return createElement(Row, {
      key: row[0].startDate.toString()
    }, row.map(function (_ref2) {
      var startDate = _ref2.startDate,
          otherMonth = _ref2.otherMonth,
          today = _ref2.today;
      var selected = comparableSelectedDate.isSame(moment(startDate), 'date');
      return createElement(Cell, {
        key: startDate.toString(),
        otherMonth: otherMonth,
        selected: selected,
        today: today,
        onClick: function onClick() {
          onCellClick(startDate);
        }
      }, formatDate(startDate, DAY_OPTIONS));
    }));
  })));
};

process.env.NODE_ENV !== "production" ? TableBase.propTypes = {
  // oneOfType is a workaround because withStyles returns react object
  rowComponent: oneOfType([func, object]).isRequired,
  cellComponent: oneOfType([func, object]).isRequired,
  headerRowComponent: oneOfType([func, object]).isRequired,
  headerCellComponent: oneOfType([func, object]).isRequired,
  cells: array.isRequired,
  classes: object.isRequired,
  selectedDate: oneOfType([instanceOf(Date), string, number]),
  formatDate: func.isRequired,
  headerCells: array,
  className: string,
  onCellClick: func
} : void 0;
TableBase.defaultProps = {
  className: undefined,
  headerCells: [],
  onCellClick: function onCellClick() {},
  selectedDate: undefined
};
var Table = withStyles(styles$p, {
  name: 'Table'
})(TableBase);

var Root$2 =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Root, _React$PureComponent);

  function Root(props) {
    var _this;

    _classCallCheck(this, Root);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Root).call(this, props));
    var selectedDate = _this.props.selectedDate;
    _this.state = {
      selectedDate: selectedDate,
      currentDate: selectedDate
    };
    _this.onNavigate = _this.onNavigate.bind(_assertThisInitialized(_this));
    _this.onCellClick = _this.onCellClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Root, [{
    key: "onNavigate",
    value: function onNavigate(_ref) {
      var back = _ref.back;
      var currentDateState = this.state.currentDate;
      var nextDate = moment(currentDateState)[back ? 'subtract' : 'add'](1, 'month');
      this.setState({
        currentDate: nextDate.toDate()
      });
    }
  }, {
    key: "onCellClick",
    value: function onCellClick(nextDate) {
      var onSelectedDateChange = this.props.onSelectedDateChange;
      this.setState({
        selectedDate: nextDate,
        currentDate: nextDate
      });
      onSelectedDateChange(nextDate);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          selectedDate = _this$props.selectedDate,
          firstDayOfWeek = _this$props.firstDayOfWeek,
          getCells = _this$props.getCells,
          Text = _this$props.textComponent,
          NavigationButton = _this$props.navigationButtonComponent,
          Navigator = _this$props.navigatorComponent,
          Row = _this$props.rowComponent,
          Cell = _this$props.cellComponent,
          HeaderRow = _this$props.headerRowComponent,
          HeaderCell = _this$props.headerCellComponent,
          onSelectedDateChange = _this$props.onSelectedDateChange,
          formatDate = _this$props.formatDate,
          restProps = _objectWithoutProperties(_this$props, ["selectedDate", "firstDayOfWeek", "getCells", "textComponent", "navigationButtonComponent", "navigatorComponent", "rowComponent", "cellComponent", "headerRowComponent", "headerCellComponent", "onSelectedDateChange", "formatDate"]);

      var _this$state = this.state,
          selectedDateState = _this$state.selectedDate,
          currentDate = _this$state.currentDate;
      var cellsData = getCells(currentDate, firstDayOfWeek, 1, Date.now());
      return createElement("div", restProps, createElement(Navigator, {
        currentDate: currentDate,
        textComponent: Text,
        navigationButtonComponent: NavigationButton,
        onNavigate: this.onNavigate,
        formatDate: formatDate
      }), createElement(Table, {
        headerCells: cellsData[0],
        selectedDate: selectedDateState,
        cells: cellsData,
        rowComponent: Row,
        cellComponent: Cell,
        headerRowComponent: HeaderRow,
        headerCellComponent: HeaderCell,
        onCellClick: this.onCellClick,
        formatDate: formatDate
      }));
    }
  }]);

  return Root;
}(PureComponent);
process.env.NODE_ENV !== "production" ? Root$2.propTypes = {
  // oneOfType is a workaround because withStyles returns react object
  textComponent: oneOfType([func, object]).isRequired,
  navigationButtonComponent: oneOfType([func, object]).isRequired,
  headerRowComponent: oneOfType([func, object]).isRequired,
  headerCellComponent: oneOfType([func, object]).isRequired,
  navigatorComponent: oneOfType([func, object]).isRequired,
  rowComponent: oneOfType([func, object]).isRequired,
  cellComponent: oneOfType([func, object]).isRequired,
  getCells: func.isRequired,
  selectedDate: oneOfType([number, string, instanceOf(Date)]).isRequired,
  formatDate: func.isRequired,
  firstDayOfWeek: number,
  onSelectedDateChange: func
} : void 0;
Root$2.defaultProps = {
  onSelectedDateChange: function onSelectedDateChange() {},
  firstDayOfWeek: 0
};

var styles$q = function styles(_ref) {
  var palette = _ref.palette,
      spacing = _ref.spacing;
  return {
    cell: {
      userSelect: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      height: spacing(6),
      textAlign: 'center',
      verticalAlign: 'middle',
      '&:last-child': {
        padding: 0
      }
    },
    otherMonth: {
      color: palette.text.disabled
    },
    selected: {
      background: palette.primary.main,
      color: palette.primary.contrastText,
      display: 'inline-block',
      width: '2.3em',
      lineHeight: 2.3,
      borderRadius: '50%',
      cursor: 'default'
    },
    today: {
      color: palette.primary.main,
      fontWeight: 'bold'
    }
  };
};

var CellBase$4 = function CellBase(_ref2) {
  var _classNames, _classNames2;

  var otherMonth = _ref2.otherMonth,
      selected = _ref2.selected,
      today = _ref2.today,
      classes = _ref2.classes,
      children = _ref2.children,
      className = _ref2.className,
      restProps = _objectWithoutProperties(_ref2, ["otherMonth", "selected", "today", "classes", "children", "className"]);

  return createElement(TableCell, _extends({
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes.cell, true), _defineProperty(_classNames, classes.otherMonth, otherMonth), _classNames), className)
  }, restProps), createElement("span", {
    className: classNames((_classNames2 = {}, _defineProperty(_classNames2, classes.selected, selected), _defineProperty(_classNames2, classes.today, today && !selected), _classNames2))
  }, children));
};

process.env.NODE_ENV !== "production" ? CellBase$4.propTypes = {
  children: node,
  otherMonth: bool,
  selected: bool,
  today: bool,
  classes: object.isRequired,
  className: string
} : void 0;
CellBase$4.defaultProps = {
  children: undefined,
  otherMonth: false,
  selected: false,
  today: false,
  className: undefined
};
var Cell$4 = withStyles(styles$q, {
  name: 'Cell'
})(CellBase$4);

var styles$r = {
  cell: {
    userSelect: 'none',
    border: 'none',
    padding: 0,
    textAlign: 'center',
    verticalAlign: 'middle',
    '&:last-child': {
      padding: 0
    }
  }
};

var HeaderCellBase = function HeaderCellBase(_ref) {
  var classes = _ref.classes,
      children = _ref.children,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, ["classes", "children", "className"]);

  return createElement(TableCell, _extends({
    className: classNames(_defineProperty({}, classes.cell, true), className)
  }, restProps), children);
};

process.env.NODE_ENV !== "production" ? HeaderCellBase.propTypes = {
  children: node,
  classes: object.isRequired,
  className: string
} : void 0;
HeaderCellBase.defaultProps = {
  children: undefined,
  className: undefined
};
var HeaderCell = withStyles(styles$r, {
  name: 'HeaderCell'
})(HeaderCellBase);

var Row$1 = function Row(_ref) {
  var children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["children"]);

  return createElement(TableRow, restProps, children);
};
process.env.NODE_ENV !== "production" ? Row$1.propTypes = {
  children: node.isRequired
} : void 0;

var styles$s = {
  navigator: {
    paddingLeft: 0,
    paddingRight: 0
  }
};

var NavigatorBase = function NavigatorBase(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      currentDate = _ref.currentDate,
      Text = _ref.textComponent,
      NavigationButton = _ref.navigationButtonComponent,
      onNavigate = _ref.onNavigate,
      formatDate = _ref.formatDate,
      restProps = _objectWithoutProperties(_ref, ["classes", "className", "currentDate", "textComponent", "navigationButtonComponent", "onNavigate", "formatDate"]);

  return createElement(ToolbarMUI, _extends({
    className: classNames(classes.navigator, className)
  }, restProps), createElement(NavigationButton, {
    type: "back",
    onClick: function onClick() {
      onNavigate({
        back: true
      });
    }
  }), createElement(Text, {
    currentDate: currentDate,
    formatDate: formatDate
  }), createElement(NavigationButton, {
    type: "forward",
    onClick: function onClick() {
      onNavigate({
        back: false
      });
    }
  }));
};

process.env.NODE_ENV !== "production" ? NavigatorBase.propTypes = {
  // oneOfType is a workaround because withStyles returns react object
  classes: object.isRequired,
  textComponent: oneOfType([func, object]).isRequired,
  navigationButtonComponent: oneOfType([func, object]).isRequired,
  currentDate: oneOfType([number, string, instanceOf(Date)]).isRequired,
  formatDate: func.isRequired,
  className: string,
  onNavigate: func
} : void 0;
NavigatorBase.defaultProps = {
  className: undefined,
  onNavigate: function onNavigate() {}
};
var Navigator = withStyles(styles$s, {
  name: 'Navigator'
})(NavigatorBase);

var styles$t = {
  text: {
    userSelect: 'none',
    flex: 1,
    textAlign: 'center'
  }
};

var TextBase = function TextBase(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      currentDate = _ref.currentDate,
      formatDate = _ref.formatDate,
      restProps = _objectWithoutProperties(_ref, ["classes", "className", "currentDate", "formatDate"]);

  return createElement(Typography, _extends({
    variant: "h6",
    className: classNames(_defineProperty({}, classes.text, true), className)
  }, restProps), formatDate(currentDate, MONTH_YEAR_OPTIONS));
};

process.env.NODE_ENV !== "production" ? TextBase.propTypes = {
  classes: object.isRequired,
  currentDate: oneOfType([number, string, instanceOf(Date)]).isRequired,
  formatDate: func.isRequired,
  className: string
} : void 0;
TextBase.defaultProps = {
  className: undefined
};
var Text = withStyles(styles$t, {
  name: 'Text'
})(TextBase);

var DateNavigator = withComponents({
  Root: Root$1,
  OpenButton: OpenButton,
  Overlay: Overlay,
  NavigationButton: NavigationButton,
  Calendar: Root$2,
  CalendarNavigator: Navigator,
  CalendarCell: Cell$4,
  CalendarRow: Row$1,
  CalendarHeaderCell: HeaderCell,
  CalendarHeaderRow: Row$1,
  CalendarText: Text,
  CalendarNavigationButton: NavigationButton
})(DateNavigator$1);

var verticalTopHorizontalCenterOptions = {
  vertical: 'top',
  horizontal: 'center'
};
var styles$u = {
  popover: {
    borderRadius: '8px',
    width: '400px',
    '@media (max-width: 500px)': {
      width: '300px'
    }
  }
};

var LayoutBase$5 = function LayoutBase(_ref) {
  var Header = _ref.headerComponent,
      Content = _ref.contentComponent,
      commandButtonComponent = _ref.commandButtonComponent,
      recurringIconComponent = _ref.recurringIconComponent,
      appointmentMeta = _ref.appointmentMeta,
      showOpenButton = _ref.showOpenButton,
      showCloseButton = _ref.showCloseButton,
      showDeleteButton = _ref.showDeleteButton,
      visible = _ref.visible,
      onHide = _ref.onHide,
      commandButtonIds = _ref.commandButtonIds,
      onOpenButtonClick = _ref.onOpenButtonClick,
      onDeleteButtonClick = _ref.onDeleteButtonClick,
      formatDate = _ref.formatDate,
      classes = _ref.classes,
      restProps = _objectWithoutProperties(_ref, ["headerComponent", "contentComponent", "commandButtonComponent", "recurringIconComponent", "appointmentMeta", "showOpenButton", "showCloseButton", "showDeleteButton", "visible", "onHide", "commandButtonIds", "onOpenButtonClick", "onDeleteButtonClick", "formatDate", "classes"]);

  var target = appointmentMeta.target,
      _appointmentMeta$data = appointmentMeta.data,
      data = _appointmentMeta$data === void 0 ? {} : _appointmentMeta$data;
  return createElement(Popover, _extends({
    open: visible,
    anchorEl: target,
    onClose: onHide,
    anchorOrigin: verticalTopHorizontalCenterOptions,
    transformOrigin: verticalTopHorizontalCenterOptions,
    PaperProps: {
      className: classes.popover
    }
  }, restProps), createElement(Header, {
    appointmentData: data,
    commandButtonComponent: commandButtonComponent,
    showOpenButton: showOpenButton,
    showCloseButton: showCloseButton,
    showDeleteButton: showDeleteButton,
    commandButtonIds: commandButtonIds,
    onOpenButtonClick: onOpenButtonClick,
    onDeleteButtonClick: onDeleteButtonClick,
    onHide: onHide
  }), createElement(Content, {
    appointmentData: data,
    formatDate: formatDate,
    recurringIconComponent: recurringIconComponent
  }));
};

process.env.NODE_ENV !== "production" ? LayoutBase$5.propTypes = {
  // oneOfType is a workaround because withStyles returns react object
  commandButtonComponent: oneOfType([func, object]).isRequired,
  headerComponent: oneOfType([func, object]).isRequired,
  contentComponent: oneOfType([func, object]).isRequired,
  recurringIconComponent: oneOfType([func, object]).isRequired,
  showOpenButton: bool.isRequired,
  showCloseButton: bool.isRequired,
  showDeleteButton: bool.isRequired,
  commandButtonIds: object.isRequired,
  classes: object.isRequired,
  formatDate: func.isRequired,
  onOpenButtonClick: func,
  onDeleteButtonClick: func,
  appointmentMeta: shape({
    target: oneOfType([object, func]),
    data: object
  }),
  visible: bool,
  onHide: func
} : void 0;
LayoutBase$5.defaultProps = {
  onOpenButtonClick: function onOpenButtonClick() {
    return undefined;
  },
  onDeleteButtonClick: function onDeleteButtonClick() {
    return undefined;
  },
  onHide: function onHide() {
    return undefined;
  },
  appointmentMeta: {},
  visible: false
};
var Layout$4 = withStyles(styles$u, {
  name: 'Layout'
})(LayoutBase$5);

var styles$v = function styles(_ref) {
  var spacing = _ref.spacing,
      palette = _ref.palette;
  return {
    head: {
      position: 'relative',
      paddingLeft: spacing(1),
      paddingRight: spacing(0.5),
      paddingTop: spacing(0.25),
      minHeight: spacing(1.5)
    },
    line: {
      backgroundColor: palette.action.disabledBackground,
      height: spacing(3.5),
      marginLeft: spacing(1),
      marginRight: spacing(1),
      marginTop: spacing(1.25),
      width: '1px'
    },
    flexContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'flex-start'
    }
  };
};

var HeaderBase = function HeaderBase(_ref2) {
  var appointmentData = _ref2.appointmentData,
      CommandButton = _ref2.commandButtonComponent,
      showOpenButton = _ref2.showOpenButton,
      showCloseButton = _ref2.showCloseButton,
      showDeleteButton = _ref2.showDeleteButton,
      commandButtonIds = _ref2.commandButtonIds,
      onOpenButtonClick = _ref2.onOpenButtonClick,
      onDeleteButtonClick = _ref2.onDeleteButtonClick,
      onHide = _ref2.onHide,
      classes = _ref2.classes,
      className = _ref2.className,
      children = _ref2.children,
      restProps = _objectWithoutProperties(_ref2, ["appointmentData", "commandButtonComponent", "showOpenButton", "showCloseButton", "showDeleteButton", "commandButtonIds", "onOpenButtonClick", "onDeleteButtonClick", "onHide", "classes", "className", "children"]);

  var handleOpenButtonClick = function handleOpenButtonClick() {
    onHide();
    onOpenButtonClick();
  };

  return createElement("div", _extends({
    className: classNames(classes.head, classes.flexContainer, className)
  }, restProps), showOpenButton && createElement(CommandButton, {
    id: commandButtonIds.open,
    onExecute: handleOpenButtonClick
  }), showDeleteButton && createElement(CommandButton, {
    id: commandButtonIds.delete,
    onExecute: onDeleteButtonClick
  }), children, showCloseButton && createElement("div", {
    className: classes.flexContainer
  }, createElement("div", {
    className: classes.line
  }), createElement(CommandButton, {
    id: commandButtonIds.close,
    onExecute: onHide
  })));
};

process.env.NODE_ENV !== "production" ? HeaderBase.propTypes = {
  classes: object.isRequired,
  appointmentData: object,
  children: node,
  className: string,
  commandButtonComponent: oneOfType([func, object]).isRequired,
  showOpenButton: bool.isRequired,
  showCloseButton: bool.isRequired,
  showDeleteButton: bool.isRequired,
  commandButtonIds: object.isRequired,
  onOpenButtonClick: func,
  onDeleteButtonClick: func,
  onHide: func
} : void 0;
HeaderBase.defaultProps = {
  appointmentData: undefined,
  className: undefined,
  children: undefined,
  onOpenButtonClick: function onOpenButtonClick() {
    return undefined;
  },
  onDeleteButtonClick: function onDeleteButtonClick() {
    return undefined;
  },
  onHide: function onHide() {
    return undefined;
  }
};
var Header = withStyles(styles$v, {
  name: 'Header'
})(HeaderBase);

var styles$w = function styles(_ref) {
  var spacing = _ref.spacing,
      palette = _ref.palette,
      typography = _ref.typography;
  return {
    content: _objectSpread2({
      padding: spacing(1.5, 1),
      paddingTop: spacing(1),
      backgroundColor: palette.background.paper,
      boxSizing: 'border-box'
    }, typography.body2),
    text: {
      display: 'inline-block'
    },
    title: _objectSpread2({}, typography.h6, {
      color: palette.text.secondary,
      fontWeight: typography.fontWeightBold,
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }),
    icon: {
      verticalAlign: 'middle',
      color: palette.action.active
    },
    lens: {
      color: setColor(300, palette.primary),
      width: spacing(4.5),
      height: spacing(4.5),
      verticalAlign: 'super',
      position: 'absolute',
      left: '50%',
      transform: 'translate(-50%,0)'
    },
    textCenter: {
      textAlign: 'center'
    },
    dateAndTitle: {
      lineHeight: 1.4
    },
    titleContainer: {
      paddingBottom: spacing(2)
    },
    contentContainer: {
      paddingBottom: spacing(1.5)
    },
    recurringIcon: {
      position: 'absolute',
      paddingTop: spacing(0.875),
      left: '50%',
      transform: 'translate(-50%,0)',
      color: palette.background.paper,
      width: spacing(2.625),
      height: spacing(2.625)
    },
    relativeContainer: {
      position: 'relative',
      width: '100%',
      height: '100%'
    }
  };
};

var ContentBase = function ContentBase(_ref2) {
  var classes = _ref2.classes,
      className = _ref2.className,
      children = _ref2.children,
      appointmentData = _ref2.appointmentData,
      formatDate = _ref2.formatDate,
      RecurringIcon = _ref2.recurringIconComponent,
      restProps = _objectWithoutProperties(_ref2, ["classes", "className", "children", "appointmentData", "formatDate", "recurringIconComponent"]);

  var weekDays = viewBoundText(appointmentData.startDate, appointmentData.endDate, WEEKDAY_INTERVAL, appointmentData.startDate, 1, formatDate);
  return createElement("div", _extends({
    className: classNames(classes.content, className)
  }, restProps), createElement(Grid, {
    container: true,
    alignItems: "flex-start",
    className: classes.titleContainer
  }, createElement(Grid, {
    item: true,
    xs: 2
  }, createElement("div", {
    className: classes.relativeContainer
  }, createElement(Lens, {
    className: classes.lens
  }), !!appointmentData.rRule && createElement(RecurringIcon, {
    className: classes.recurringIcon
  }))), createElement(Grid, {
    item: true,
    xs: 10
  }, createElement("div", null, createElement("div", {
    className: classNames(classes.title, classes.dateAndTitle)
  }, appointmentData.title), createElement("div", {
    className: classNames(classes.text, classes.dateAndTitle)
  }, weekDays)))), createElement(Grid, {
    container: true,
    alignItems: "center",
    className: classes.contentContainer
  }, createElement(Grid, {
    item: true,
    xs: 2,
    className: classes.textCenter
  }, createElement(AccessTime, {
    className: classes.icon
  })), createElement(Grid, {
    item: true,
    xs: 10
  }, createElement("div", {
    className: classes.text
  }, "".concat(formatDate(appointmentData.startDate, HOUR_MINUTE_OPTIONS), "\n              - ").concat(formatDate(appointmentData.endDate, HOUR_MINUTE_OPTIONS))))), children);
};
process.env.NODE_ENV !== "production" ? ContentBase.propTypes = {
  classes: object.isRequired,
  appointmentData: object,
  children: node,
  className: string,
  formatDate: func.isRequired,
  recurringIconComponent: oneOfType([func, object]).isRequired
} : void 0;
ContentBase.defaultProps = {
  appointmentData: undefined,
  className: undefined,
  children: undefined
};
var Content = withStyles(styles$w, {
  name: 'Content'
})(ContentBase);

var getIcon = function getIcon(id) {
  if (id === OPEN_COMMAND_BUTTON) {
    return createElement(EditIcon, null);
  }

  if (id === CLOSE_COMMAND_BUTTON) {
    return createElement(CloseIcon, null);
  }

  if (id === DELETE_COMMAND_BUTTON) {
    return createElement(DeleteIcon, null);
  }

  return null;
};

var CommandButton = function CommandButton(_ref) {
  var id = _ref.id,
      onExecute = _ref.onExecute,
      restProps = _objectWithoutProperties(_ref, ["id", "onExecute"]);

  return createElement(IconButton, _extends({
    onClick: onExecute
  }, restProps), getIcon(id));
};
process.env.NODE_ENV !== "production" ? CommandButton.propTypes = {
  id: string,
  onExecute: func
} : void 0;
CommandButton.defaultProps = {
  onExecute: function onExecute() {
    return undefined;
  },
  id: ''
};

var AppointmentTooltip = withComponents({
  Layout: Layout$4,
  Header: Header,
  Content: Content,
  CommandButton: CommandButton,
  RecurringIcon: Repeat
})(AppointmentTooltip$1);

var styles$x = function styles(_ref) {
  var typography = _ref.typography;
  return {
    root: {
      fontSize: typography.fontSize
    },
    input: {
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: typography.fontSize
    },
    menuItem: {
      fontSize: typography.fontSize,
      textTransform: 'uppercase'
    },
    inputRoot: {
      width: '100%'
    }
  };
};

var OutlinedSelectBase = memo(function (_ref2) {
  var value = _ref2.value,
      availableOptions = _ref2.availableOptions,
      onValueChange = _ref2.onValueChange,
      readOnly = _ref2.readOnly,
      classes = _ref2.classes,
      inputClasses = _ref2.inputClasses,
      restProps = _objectWithoutProperties(_ref2, ["value", "availableOptions", "onValueChange", "readOnly", "classes", "inputClasses"]);

  var handleChange = function handleChange(event) {
    if (event.target.value !== value) onValueChange(event.target.value);
  };

  return createElement(Select$1, _extends({
    disabled: readOnly,
    classes: {
      root: classes.root
    },
    value: value,
    onChange: handleChange,
    input: createElement(OutlinedInput, {
      classes: inputClasses || {
        input: classes.input,
        root: classes.inputRoot
      },
      labelWidth: 0
    })
  }, restProps), availableOptions.map(function (option) {
    return createElement(MenuItem, {
      value: option.id,
      key: option.id,
      className: classes.menuItem
    }, option.text);
  }));
});
process.env.NODE_ENV !== "production" ? OutlinedSelectBase.propTypes = {
  onValueChange: func,
  classes: object.isRequired,
  value: oneOfType([string, number]).isRequired,
  availableOptions: arrayOf(shape({
    id: oneOfType([string, number]),
    text: string.isRequired
  })),
  readOnly: bool,
  inputClasses: object
} : void 0;
OutlinedSelectBase.defaultProps = {
  readOnly: false,
  onValueChange: function onValueChange() {
    return undefined;
  },
  availableOptions: [],
  inputClasses: null
};
var OutlinedSelect = withStyles(styles$x)(OutlinedSelectBase, {
  name: 'OutlinedSelect'
});

var styles$y = function styles(_ref) {
  var spacing = _ref.spacing;
  return {
    input: {
      padding: spacing(1.25, 1.75),
      paddingRight: spacing(4),
      textTransform: 'uppercase',
      '@media (max-width: 700px)': {
        fontSize: '0.75rem'
      }
    },
    inputRoot: {
      marginLeft: spacing(0.5),
      '&:first-child': {
        marginLeft: 0
      }
    }
  };
};

var SwitcherBase = memo(function (_ref2) {
  var currentView = _ref2.currentView,
      availableViews = _ref2.availableViews,
      onChange = _ref2.onChange,
      classes = _ref2.classes,
      restProps = _objectWithoutProperties(_ref2, ["currentView", "availableViews", "onChange", "classes"]);

  var availableOptions = availableViews.map(function (_ref3) {
    var name = _ref3.name,
        displayName = _ref3.displayName;
    return {
      id: name,
      text: displayName
    };
  });
  return createElement(OutlinedSelect, _extends({
    value: currentView.name,
    availableOptions: availableOptions,
    onValueChange: onChange,
    inputClasses: {
      input: classes.input,
      root: classes.inputRoot
    }
  }, restProps));
});
process.env.NODE_ENV !== "production" ? SwitcherBase.propTypes = {
  onChange: func.isRequired,
  classes: object.isRequired,
  currentView: shape({
    name: string.isRequired,
    displayName: string.isRequired
  }).isRequired,
  availableViews: arrayOf(shape({
    name: string.isRequired,
    displayName: string.isRequired
  }))
} : void 0;
SwitcherBase.defaultProps = {
  availableViews: []
};
var Switcher = withStyles(styles$y)(SwitcherBase, {
  name: 'Switcher'
});

var ViewSwitcher = withComponents({
  Switcher: Switcher
})(ViewSwitcher$1);

var styles$z = {
  table: {
    tableLayout: 'fixed'
  }
};

var LayoutBase$6 =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(LayoutBase, _React$PureComponent);

  function LayoutBase(props) {
    var _this;

    _classCallCheck(this, LayoutBase);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LayoutBase).call(this, props));
    _this.table = createRef();
    return _this;
  }

  _createClass(LayoutBase, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setCells();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.setCells();
    }
  }, {
    key: "setCells",
    value: function setCells() {
      var setCellElementsMeta = this.props.setCellElementsMeta;
      var tableElement = this.table.current;
      setCellElementsMeta(cellsMeta(tableElement));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          setCellElementsMeta = _this$props.setCellElementsMeta,
          cellsData = _this$props.cellsData,
          classes = _this$props.classes,
          className = _this$props.className,
          Cell = _this$props.cellComponent,
          Row = _this$props.rowComponent,
          formatDate = _this$props.formatDate,
          restProps = _objectWithoutProperties(_this$props, ["setCellElementsMeta", "cellsData", "classes", "className", "cellComponent", "rowComponent", "formatDate"]);

      return createElement(TableMUI, _extends({
        ref: this.table,
        className: classNames(classes.table, className)
      }, restProps), createElement(TableBody, null, createElement(Row, null, cellsData.map(function (_ref) {
        var startDate = _ref.startDate,
            endDate = _ref.endDate;
        return createElement(Cell, {
          key: startDate,
          startDate: startDate,
          endDate: endDate
        });
      }))));
    }
  }]);

  return LayoutBase;
}(PureComponent);

process.env.NODE_ENV !== "production" ? LayoutBase$6.propTypes = {
  classes: object.isRequired,
  formatDate: func.isRequired,
  cellsData: arrayOf(Array).isRequired,
  cellComponent: func.isRequired,
  rowComponent: func.isRequired,
  setCellElementsMeta: func.isRequired,
  className: string
} : void 0;
LayoutBase$6.defaultProps = {
  className: undefined
};
var Layout$5 = withStyles(styles$z, {
  name: 'Layout'
})(LayoutBase$6);

var styles$A = function styles(theme) {
  return {
    cell: {
      padding: 0,
      height: theme.spacing(5.75),
      borderLeft: getBorder(theme),
      '&:hover': {
        backgroundColor: theme.palette.action.hover
      },
      '&:focus': {
        backgroundColor: fade(theme.palette.primary.main, 0.15),
        outline: 0
      }
    }
  };
};

var CellBase$5 = function CellBase(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      children = _ref.children,
      startDate = _ref.startDate,
      endDate = _ref.endDate,
      restProps = _objectWithoutProperties(_ref, ["classes", "className", "children", "startDate", "endDate"]);

  return createElement(TableCell, _extends({
    tabIndex: 0,
    className: classNames(classes.cell, className)
  }, restProps), children);
};

process.env.NODE_ENV !== "production" ? CellBase$5.propTypes = {
  classes: object.isRequired,
  startDate: instanceOf(Date),
  endDate: instanceOf(Date),
  children: node,
  className: string
} : void 0;
CellBase$5.defaultProps = {
  children: null,
  startDate: undefined,
  endDate: undefined,
  className: undefined
};
var Cell$5 = withStyles(styles$A, {
  name: 'Cell'
})(CellBase$5);

var styles$B = function styles(theme) {
  return {
    container: {
      userSelect: 'none',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      position: 'relative'
    },
    content: {
      borderBottom: getBorder(theme),
      height: theme.spacing(5.75),
      textAlign: 'right',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    title: _objectSpread2({
      paddingRight: theme.spacing(2)
    }, theme.typography.caption, {
      color: theme.palette.text.secondary
    })
  };
};

var TitleCellBase = memo(function (_ref) {
  var classes = _ref.classes,
      getMessage = _ref.getMessage,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, ["classes", "getMessage", "className"]);

  return createElement("div", _extends({
    className: classNames(classes.container, className)
  }, restProps), createElement("div", {
    className: classes.content
  }, createElement(Typography, {
    className: classes.title,
    variant: "body1"
  }, getMessage('allDay'))));
});
TitleCellBase.propTypes = {
  classes: object.isRequired,
  getMessage: func.isRequired,
  className: string
};
TitleCellBase.defaultProps = {
  className: undefined
};
var TitleCell = withStyles(styles$B, {
  name: 'TitleCell'
})(TitleCellBase);

var styles$C = {
  container: {
    position: 'relative'
  }
};
var Container$1 = withStyles(styles$C, {
  name: 'AllDayContainer'
})(ContainerBase);

var AllDayPanel = withComponents({
  AppointmentLayer: Container,
  Layout: Layout$5,
  Cell: Cell$5,
  Row: Row,
  TitleCell: TitleCell,
  Container: Container$1
})(AllDayPanel$1);

var styles$D = {
  root: {
    height: '100%',
    margin: '0 auto',
    overflowY: 'auto'
  },
  container: {
    /*display: 'flex',
    '@media (max-width: 700px)': {
      flexDirection: 'column'
    }*/
  },
  stickyContainer: {
    display: 'flex',
    position: 'sticky',
    top: 0,
    zIndex: 1
  }
};

var LayoutBase$7 = function LayoutBase(_ref) {
  var BasicLayout = _ref.basicLayoutComponent,
      CommandLayout = _ref.commandLayoutComponent,
      RecurrenceLayout = _ref.recurrenceLayoutComponent,
      isRecurrence = _ref.isRecurrence,
      children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, ["basicLayoutComponent", "commandLayoutComponent", "recurrenceLayoutComponent", "isRecurrence", "children", "classes", "className"]);

  return createElement("div", _extends({
    className: classNames(classes.root, className)
  }, restProps), createElement("div", {
    className: classes.stickyContainer
  }, createElement(CommandLayout, null)), createElement("div", {
    className: classes.container
  }, createElement(BasicLayout, null), createElement(RecurrenceLayout, null)), children);
};

process.env.NODE_ENV !== "production" ? LayoutBase$7.propTypes = {
  basicLayoutComponent: oneOfType([func, object]).isRequired,
  commandLayoutComponent: oneOfType([func, object]).isRequired,
  recurrenceLayoutComponent: oneOfType([func, object]).isRequired,
  children: node,
  className: string,
  classes: object.isRequired,
  isRecurrence: bool
} : void 0;
LayoutBase$7.defaultProps = {
  className: undefined,
  isRecurrence: false,
  children: null
};
var Layout$6 = withStyles(styles$D)(LayoutBase$7, {
  name: 'Layout'
});

var styles$E = function styles(theme) {
  return {
    editor: {
      width: '100%',
      marginTop: theme.spacing(0.375),
      marginBottom: theme.spacing(0.125)
    },
    title: _objectSpread2({}, theme.typography.h6)
  };
};

var TextEditorBase = memo(function (_ref) {
  var classes = _ref.classes,
      value = _ref.value,
      placeholder = _ref.placeholder,
      className = _ref.className,
      readOnly = _ref.readOnly,
      onValueChange = _ref.onValueChange,
      type = _ref.type,
      restProps = _objectWithoutProperties(_ref, ["classes", "value", "placeholder", "className", "readOnly", "onValueChange", "type"]);

  var textFieldType = type === NUMBER_EDITOR ? 'number' : 'text';
  var notesTextEditor = type === MULTILINE_TEXT_EDITOR;
  return createElement(TextField, _extends({
    className: classNames(classes.editor, className),
    value: value,
    variant: notesTextEditor ? 'outlined' : 'filled',
    disabled: readOnly,
    onChange: function onChange(_ref2) {
      var target = _ref2.target;
      return onValueChange(target.value);
    },
    InputProps: {
      className: classNames(_defineProperty({}, classes.title, type === TITLE_TEXT_EDITOR))
    },
    multiline: notesTextEditor,
    rows: "5",
    type: textFieldType,
    hiddenLabel: true,
    margin: "normal",
    placeholder: placeholder
  }, restProps));
});
process.env.NODE_ENV !== "production" ? TextEditorBase.propTypes = {
  classes: object.isRequired,
  value: oneOfType([string, number]),
  placeholder: string,
  className: string,
  readOnly: bool,
  onValueChange: func,
  type: string
} : void 0;
TextEditorBase.defaultProps = {
  value: '',
  placeholder: undefined,
  className: undefined,
  readOnly: false,
  onValueChange: function onValueChange() {
    return undefined;
  },
  type: ORDINARY_TEXT_EDITOR
};
var TextEditor = withStyles(styles$E)(TextEditorBase, {
  name: 'TextEditor'
});

var styles$F = function styles(_ref) {
  var spacing = _ref.spacing,
      typography = _ref.typography;
  return {
    root: {
      width: '500px',
      paddingTop: spacing(3),
      paddingBottom: spacing(3),
      paddingLeft: spacing(4),
      paddingRight: spacing(4),
      boxSizing: 'border-box',
      transition: "all ".concat(TRANSITIONS_TIME, "ms cubic-bezier(0, 0, 0.2, 1)"),
      '@media (max-width: 700px)': {
        width: '100%',
        maxWidth: '700px',
        paddingRight: spacing(2),
        paddingLeft: spacing(2),
        paddingBottom: 0
      }
    },
    fullSize: {
      paddingBottom: spacing(3)
    },
    halfSize: {
      '@media (min-width: 700px) and (max-width: 850px)': {
        width: '500px'
      },
      '@media (min-width: 850px) and (max-width: 1000px)': {
        width: '500px'
      },
      '@media (min-width: 1000px) and (max-width: 1150px)': {
        width: '500px'
      }
    },
    labelWithMargins: {
      marginBottom: spacing(0.5),
      marginTop: spacing(0.5)
    },
    notesEditor: {
      marginTop: spacing(0)
    },
    dateEditor: {
      width: '45%',
      paddingTop: '0px!important',
      marginTop: spacing(2),
      paddingBottom: '0px!important',
      marginBottom: 0
    },
    dividerLabel: _objectSpread2({}, typography.body2, {
      width: '10%',
      textAlign: 'center',
      paddingTop: spacing(2)
    }),
    allDayEditor: {
      marginRight: spacing(5)
    },
    booleanEditors: {
      marginTop: spacing(0.875)
    },
    '@media (max-width: 570px)': {
      dateEditors: {
        flexDirection: 'column'
      },
      booleanEditors: {
        flexDirection: 'column',
        marginTop: spacing(1.875)
      },
      dateEditor: {
        width: '100%',
        '&:first-child': {
          marginBottom: 0
        },
        '&:last-child': {
          marginTop: spacing(2)
        }
      },
      dividerLabel: {
        display: 'none'
      }
    }
  };
};

var LayoutBase$8 = function LayoutBase(_ref2) {
  var _classNames;

  var children = _ref2.children,
      locale = _ref2.locale,
      classes = _ref2.classes,
      className = _ref2.className,
      getMessage = _ref2.getMessage,
      readOnly = _ref2.readOnly,
      onFieldChange = _ref2.onFieldChange,
      appointmentData = _ref2.appointmentData,
      fullSize = _ref2.fullSize,
      TextEditor = _ref2.textEditorComponent,
      DateEditor = _ref2.dateEditorComponent,
      Select = _ref2.selectComponent,
      Label = _ref2.labelComponent,
      BooleanEditor = _ref2.booleanEditorComponent,
      restProps = _objectWithoutProperties(_ref2, ["children", "locale", "classes", "className", "getMessage", "readOnly", "onFieldChange", "appointmentData", "fullSize", "textEditorComponent", "dateEditorComponent", "selectComponent", "labelComponent", "booleanEditorComponent"]);

  var changeTitle = useCallback(function (title) {
    return onFieldChange({
      title: title
    });
  }, [onFieldChange]);
  var changeNotes = useCallback(function (notes) {
    return onFieldChange({
      notes: notes
    });
  }, [onFieldChange]);
  var changeStartDate = useCallback(function (startDate) {
    return onFieldChange({
      startDate: startDate
    });
  }, [onFieldChange]);
  var changeEndDate = useCallback(function (endDate) {
    return onFieldChange({
      endDate: endDate
    });
  }, [onFieldChange]);
  var changeAllDay = useCallback(function (allDay) {
    return onFieldChange({
      allDay: allDay
    });
  }, [onFieldChange]);
  var rRule = appointmentData.rRule,
      startDate = appointmentData.startDate;
  var changeFrequency = useCallback(function (value) {
    return handleChangeFrequency(value ? REPEAT_TYPES.DAILY : REPEAT_TYPES.NEVER, rRule, startDate, onFieldChange);
  }, [rRule, startDate, onFieldChange]);
  return createElement("div", _extends({
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes.root, true), _defineProperty(_classNames, classes.fullSize, fullSize), _defineProperty(_classNames, classes.halfSize, !fullSize), _classNames), className)
  }, restProps), createElement(Label, {
    text: getMessage('detailsLabel'),
    type: TITLE
  }), createElement(TextEditor, {
    placeholder: getMessage('titleLabel'),
    readOnly: readOnly,
    type: TITLE_TEXT_EDITOR,
    value: appointmentData.title,
    onValueChange: changeTitle
  }), createElement(Grid, {
    container: true,
    alignItems: "center",
    className: classes.dateEditors
  }, createElement(DateEditor, {
    className: classes.dateEditor,
    readOnly: readOnly,
    value: appointmentData.startDate,
    onValueChange: changeStartDate,
    locale: locale,
    excludeTime: appointmentData.allDay
  }), createElement(Label, {
    text: "-",
    className: classes.dividerLabel
  }), createElement(DateEditor, {
    className: classes.dateEditor,
    readOnly: readOnly,
    value: appointmentData.endDate,
    onValueChange: changeEndDate,
    locale: locale,
    excludeTime: appointmentData.allDay
  })), createElement(Grid, {
    container: true,
    className: classes.booleanEditors
  }, createElement(BooleanEditor, {
    label: getMessage('allDayLabel'),
    readOnly: readOnly,
    value: appointmentData.allDay,
    onValueChange: changeAllDay
  }), createElement(BooleanEditor, {
    label: getMessage('repeatLabel'),
    readOnly: readOnly,
    value: !!appointmentData.rRule,
    onValueChange: changeFrequency
  })), createElement(Label, {
    text: getMessage('moreInformationLabel'),
    type: TITLE,
    className: classes.labelWithMargins
  }), createElement(TextEditor, {
    placeholder: getMessage('notesLabel'),
    readOnly: readOnly,
    type: MULTILINE_TEXT_EDITOR,
    value: appointmentData.notes,
    onValueChange: changeNotes,
    className: classes.notesEditor
  }), children);
};

process.env.NODE_ENV !== "production" ? LayoutBase$8.propTypes = {
  textEditorComponent: oneOfType([func, object]).isRequired,
  dateEditorComponent: oneOfType([func, object]).isRequired,
  selectComponent: oneOfType([func, object]).isRequired,
  labelComponent: oneOfType([func, object]).isRequired,
  booleanEditorComponent: oneOfType([func, object]).isRequired,
  locale: oneOfType([string, arrayOf(string)]).isRequired,
  children: node,
  className: string,
  classes: object.isRequired,
  getMessage: func.isRequired,
  onFieldChange: func,
  appointmentData: shape({
    title: string,
    startDate: instanceOf(Date),
    endDate: instanceOf(Date),
    rRule: string,
    notes: string,
    additionalInformation: string,
    allDay: bool
  }).isRequired,
  readOnly: bool,
  fullSize: bool.isRequired
} : void 0;
LayoutBase$8.defaultProps = {
  onFieldChange: function onFieldChange() {
    return undefined;
  },
  className: undefined,
  readOnly: false,
  children: null
};
var Layout$7 = withStyles(styles$F)(LayoutBase$8, {
  name: 'BasicLayout'
});

var styles$G = function styles(_ref) {
  var spacing = _ref.spacing,
      palette = _ref.palette;
  return {
    root: {
      display: 'flex',
      justifyContent: 'flex-end',
      paddingTop: spacing(2),
      paddingLeft: spacing(2),
      paddingRight: spacing(4),
      transition: "all ".concat(TRANSITIONS_TIME, "ms cubic-bezier(0, 0, 0.2, 1)"),
      backgroundColor: palette.background.paper
    },
    basic: {
      width: '650px'
    },
    fullSize: {
      width: '500px',
      '@media (min-width: 700px) and (max-width: 850px)': {
        width: '500px'
      },
      '@media (min-width: 850px) and (max-width: 1000px)': {
        width: '500px'
      },
      '@media (min-width: 1000px) and (max-width: 1150px)': {
        width: '500px'
      }
    },
    '@media (max-width: 700px)': {
      basic: {
        maxWidth: '700px',
        width: '100%'
      },
      root: {
        paddingRight: spacing(2),
        paddingLeft: 0,
        paddingTop: spacing(1),
        maxWidth: '700px',
        width: '100%'
      }
    },
    line: {
      backgroundColor: palette.action.disabledBackground,
      height: spacing(4.5),
      width: '1px'
    }
  };
};

var LayoutBase$9 = function LayoutBase(_ref2) {
  var _classNames;

  var CommandButton = _ref2.commandButtonComponent,
      onCommitButtonClick = _ref2.onCommitButtonClick,
      onCancelButtonClick = _ref2.onCancelButtonClick,
      onDeleteButtonClick = _ref2.onDeleteButtonClick,
      getMessage = _ref2.getMessage,
      children = _ref2.children,
      classes = _ref2.classes,
      className = _ref2.className,
      fullSize = _ref2.fullSize,
      readOnly = _ref2.readOnly,
      disableSaveButton = _ref2.disableSaveButton,
      hideDeleteButton = _ref2.hideDeleteButton,
      restProps = _objectWithoutProperties(_ref2, ["commandButtonComponent", "onCommitButtonClick", "onCancelButtonClick", "onDeleteButtonClick", "getMessage", "children", "classes", "className", "fullSize", "readOnly", "disableSaveButton", "hideDeleteButton"]);

  return createElement(Grid, _extends({
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes.root, true), _defineProperty(_classNames, classes.basic, !fullSize), _defineProperty(_classNames, classes.fullSize, fullSize), _classNames), className),
    container: true,
    alignItems: "center"
  }, restProps), createElement(CommandButton, {
    onExecute: onCancelButtonClick,
    getMessage: getMessage,
    id: CANCEL_BUTTON
  }), !readOnly && createElement(Fragment, null, !hideDeleteButton && createElement(Fragment, null, createElement(CommandButton, {
    onExecute: onDeleteButtonClick,
    getMessage: getMessage,
    id: DELETE_BUTTON
  }), createElement("div", {
    className: classes.line
  })), createElement(CommandButton, {
    getMessage: getMessage,
    disabled: disableSaveButton,
    onExecute: onCommitButtonClick,
    id: SAVE_BUTTON
  })), children);
};

process.env.NODE_ENV !== "production" ? LayoutBase$9.propTypes = {
  commandButtonComponent: oneOfType([func, object]).isRequired,
  classes: object.isRequired,
  onCommitButtonClick: func.isRequired,
  onCancelButtonClick: func.isRequired,
  onDeleteButtonClick: func.isRequired,
  getMessage: func.isRequired,
  className: string,
  fullSize: bool,
  readOnly: bool,
  children: node,
  disableSaveButton: bool,
  hideDeleteButton: bool
} : void 0;
LayoutBase$9.defaultProps = {
  className: undefined,
  children: undefined,
  fullSize: false,
  readOnly: false,
  disableSaveButton: false,
  hideDeleteButton: false
};
var Layout$8 = withStyles(styles$G)(LayoutBase$9, {
  name: 'Layout'
});

var styles$H = function styles(_ref) {
  var spacing = _ref.spacing,
      palette = _ref.palette;
  return {
    button: {
      padding: spacing(0.5, 3.5),
      marginLeft: spacing(3),
      height: spacing(4.5),
      '&:first-child': {
        marginLeft: 0
      },
      backgroundColor: setColor(300, palette.primary),
      color: palette.primary.contrastText,
      '&:hover': {
        backgroundColor: setColor(400, palette.primary)
      }
    }
  };
};

var SaveButtonBase = memo(function (_ref2) {
  var classes = _ref2.classes,
      getMessage = _ref2.getMessage,
      className = _ref2.className,
      onExecute = _ref2.onExecute,
      restProps = _objectWithoutProperties(_ref2, ["classes", "getMessage", "className", "onExecute"]);

  return createElement(Button$1, _extends({
    className: classNames(classes.button, className),
    onClick: onExecute
  }, restProps), getMessage('commitCommand'));
});
SaveButtonBase.propTypes = {
  classes: object.isRequired,
  className: string,
  getMessage: func.isRequired,
  onExecute: func.isRequired
};
SaveButtonBase.defaultProps = {
  className: undefined
};
var SaveButton = withStyles(styles$H)(SaveButtonBase, {
  name: 'SaveButton'
});

var styles$I = function styles(_ref) {
  var spacing = _ref.spacing;
  return {
    button: {
      marginRight: spacing(0.5)
    }
  };
};

var DeleteButtonBase = memo(function (_ref2) {
  var onExecute = _ref2.onExecute,
      className = _ref2.className,
      classes = _ref2.classes,
      restProps = _objectWithoutProperties(_ref2, ["onExecute", "className", "classes"]);

  return createElement(IconButton, _extends({
    className: classNames(classes.button, className),
    onClick: onExecute
  }, restProps), createElement(DeleteIcon, null));
});
DeleteButtonBase.propTypes = {
  classes: object.isRequired,
  className: string,
  onExecute: func.isRequired
};
DeleteButtonBase.defaultProps = {
  className: undefined
};
var DeleteButton = withStyles(styles$I)(DeleteButtonBase, {
  name: 'DeleteButton'
});

var styles$J = function styles() {
  return {
    button: {
      marginRight: 'auto'
    }
  };
};

var CancelButtonBase = memo(function (_ref) {
  var onExecute = _ref.onExecute,
      className = _ref.className,
      classes = _ref.classes,
      restProps = _objectWithoutProperties(_ref, ["onExecute", "className", "classes"]);

  return createElement(IconButton, _extends({
    className: classNames(classes.button, className),
    onClick: onExecute
  }, restProps), createElement(CloseIcon, null));
});
CancelButtonBase.propTypes = {
  classes: object.isRequired,
  className: string,
  onExecute: func.isRequired
};
CancelButtonBase.defaultProps = {
  className: undefined
};
var CancelButton = withStyles(styles$J)(CancelButtonBase, {
  name: 'CancelButton'
});

var CommandButton$1 = memo(function (_ref) {
  var id = _ref.id,
      getMessage = _ref.getMessage,
      onExecute = _ref.onExecute,
      restProps = _objectWithoutProperties(_ref, ["id", "getMessage", "onExecute"]);

  switch (id) {
    case SAVE_BUTTON:
      return createElement(SaveButton, _extends({
        getMessage: getMessage,
        onExecute: onExecute
      }, restProps));

    case DELETE_BUTTON:
      return createElement(DeleteButton, _extends({
        onExecute: onExecute
      }, restProps));

    case CANCEL_BUTTON:
      return createElement(CancelButton, _extends({
        onExecute: onExecute
      }, restProps));

    default:
      return null;
  }
});
process.env.NODE_ENV !== "production" ? CommandButton$1.propTypes = {
  id: string.isRequired,
  onExecute: func.isRequired,
  getMessage: func.isRequired
} : void 0;

var styles$K = function styles(_ref) {
  var spacing = _ref.spacing;
  return {
    root: {
      overflow: 'hidden',
      paddingTop: spacing(2)
    },
    absolutePosition: {
      position: 'absolute!important'
    },
    paper: {
      outline: 'none'
    },
    fullSize: {
      height: '100%',
      width: '500px',
      '@media (min-width: 700px) and (max-width: 850px)': {
        width: '500px'
      },
      '@media (min-width: 850px) and (max-width: 1000px)': {
        width: '500px'
      },
      '@media (min-width: 1000px) and (max-width: 1150px)': {
        width: '500px'
      },
      '@media (max-width: 700px)': {
        width: '500px',
        maxWidth: '500px'
      }
    },
    halfSize: {
      height: '100%',
      width: '500px',
      '@media (max-width: 700px)': {
        width: '500px',
        maxWidth: '700px'
      }
    },
    transition: {
      transition: "all ".concat(TRANSITIONS_TIME, "ms cubic-bezier(0, 0, 0.2, 1)!important")
    }
  };
};

var OverlayBase = function OverlayBase(_ref2) {
  var _classNames;

  var children = _ref2.children,
      visible = _ref2.visible,
      classes = _ref2.classes,
      className = _ref2.className,
      fullSize = _ref2.fullSize,
      target = _ref2.target,
      onHide = _ref2.onHide,
      restProps = _objectWithoutProperties(_ref2, ["children", "visible", "classes", "className", "fullSize", "target", "onHide"]);

  var _React$useState = useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      previouslyOpen = _React$useState2[0],
      setPreviouslyOpen = _React$useState2[1];

  var paperClasses = classNames((_classNames = {}, _defineProperty(_classNames, classes.absolutePosition, true), _defineProperty(_classNames, classes.paper, true), _defineProperty(_classNames, classes.fullSize, fullSize), _defineProperty(_classNames, classes.halfSize, !fullSize), _defineProperty(_classNames, classes.transition, visible && previouslyOpen), _classNames));
  return createElement(Drawer, _extends({
    className: classNames(classes.root, className),
    PaperProps: {
      className: paperClasses
    },
    BackdropProps: {
      className: classes.absolutePosition
    },
    ModalProps: {
      className: classes.absolutePosition,
      container: target.current
    },
    SlideProps: {
      onEntered: function onEntered() {
        return setPreviouslyOpen(true);
      },
      onExited: function onExited() {
        return setPreviouslyOpen(false);
      }
    },
    open: visible,
    variant: "temporary",
    anchor: "left",
    transitionDuration: TRANSITIONS_TIME,
    onBackdropClick: onHide
  }, restProps), children);
};

process.env.NODE_ENV !== "production" ? OverlayBase.propTypes = {
  children: node.isRequired,
  classes: object.isRequired,
  fullSize: bool.isRequired,
  onHide: func.isRequired,
  visible: bool,
  className: string,
  target: object
} : void 0;
OverlayBase.defaultProps = {
  className: undefined,
  visible: false,
  target: null
};
var Overlay$1 = withStyles(styles$K)(OverlayBase, {
  name: 'Overlay'
});

var styles$L = function styles(_ref) {
  var spacing = _ref.spacing;
  return {
    dateEditor: {
      paddingBottom: spacing(1.5)
    }
  };
};

var DateEditorBase = memo(function (_ref2) {
  var classes = _ref2.classes,
      onValueChange = _ref2.onValueChange,
      value = _ref2.value,
      readOnly = _ref2.readOnly,
      className = _ref2.className,
      locale = _ref2.locale,
      excludeTime = _ref2.excludeTime,
      restProps = _objectWithoutProperties(_ref2, ["classes", "onValueChange", "value", "readOnly", "className", "locale", "excludeTime"]);

  var memoizedChangeHandler = useCallback(function (nextDate) {
    return nextDate && onValueChange(nextDate.toDate());
  }, [onValueChange]);
  var dateFormat = excludeTime ? 'DD/MM/YYYY' : 'DD/MM/YYYY hh:mm A';
  return createElement(MuiPickersUtilsProvider, {
    utils: MomentUtils,
    locale: locale
  }, createElement(KeyboardDateTimePicker, _extends({
    variant: "inline",
    disabled: readOnly,
    className: classNames(classes.dateEditor, className),
    margin: "normal",
    value: value,
    onChange: memoizedChangeHandler,
    format: dateFormat,
    inputVariant: "filled",
    hiddenLabel: true
  }, restProps)));
});
process.env.NODE_ENV !== "production" ? DateEditorBase.propTypes = {
  classes: object.isRequired,
  value: oneOfType([number, string, instanceOf(Date)]),
  className: string,
  readOnly: bool,
  onValueChange: func.isRequired,
  locale: oneOfType([string, arrayOf(string)]),
  excludeTime: bool
} : void 0;
DateEditorBase.defaultProps = {
  locale: 'en-US',
  value: undefined,
  className: undefined,
  readOnly: false,
  excludeTime: false
};
var DateEditor = withStyles(styles$L)(DateEditorBase, {
  name: 'DateEditor'
});

var styles$M = function styles(theme) {
  return {
    label: {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis'
    },
    titleLabel: {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.typography.fontSize + 5
    }
  };
};

var LabelBase$1 = memo(function (_ref) {
  var _classNames;

  var classes = _ref.classes,
      text = _ref.text,
      className = _ref.className,
      type = _ref.type,
      restProps = _objectWithoutProperties(_ref, ["classes", "text", "className", "type"]);

  return createElement(Typography, _extends({
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes.label, true), _defineProperty(_classNames, classes.titleLabel, type === TITLE), _classNames), className)
  }, restProps), text);
});
LabelBase$1.propTypes = {
  classes: object.isRequired,
  text: string,
  className: string,
  type: string
};
LabelBase$1.defaultProps = {
  text: undefined,
  className: undefined,
  type: ORDINARY_LABEL
};
var Label$1 = withStyles(styles$M)(LabelBase$1, {
  name: 'Label'
});

var styles$N = {
  label: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    userSelect: 'none'
  }
};
var BooleanEditorBase = memo(function (_ref) {
  var label = _ref.label,
      value = _ref.value,
      readOnly = _ref.readOnly,
      onValueChange = _ref.onValueChange,
      classes = _ref.classes,
      restProps = _objectWithoutProperties(_ref, ["label", "value", "readOnly", "onValueChange", "classes"]);

  return createElement(FormControlLabel, _extends({
    classes: {
      label: classes.label
    },
    control: createElement(Checkbox, {
      color: "primary",
      checked: value,
      onChange: function onChange(_ref2) {
        var target = _ref2.target;
        return onValueChange(target.checked);
      }
    }),
    disabled: readOnly,
    label: label
  }, restProps));
});
BooleanEditorBase.propTypes = {
  label: string,
  readOnly: bool,
  value: bool,
  onValueChange: func.isRequired,
  classes: object.isRequired
};
BooleanEditorBase.defaultProps = {
  label: undefined,
  readOnly: false,
  value: false
};
var BooleanEditor = withStyles(styles$N)(BooleanEditorBase, {
  name: 'BooleanEditor'
});

var styles$O = function styles(_ref) {
  var typography = _ref.typography,
      spacing = _ref.spacing;
  return {
    filledSelect: {
      marginTop: spacing(0.375),
      marginBottom: spacing(0.125)
    },
    menuItem: {
      fontSize: typography.fontSize,
      textTransform: 'uppercase'
    }
  };
};

var FilledSelectBase = memo(function (_ref2) {
  var value = _ref2.value,
      availableOptions = _ref2.availableOptions,
      onValueChange = _ref2.onValueChange,
      readOnly = _ref2.readOnly,
      classes = _ref2.classes,
      className = _ref2.className,
      restProps = _objectWithoutProperties(_ref2, ["value", "availableOptions", "onValueChange", "readOnly", "classes", "className"]);

  var handleChange = function handleChange(event) {
    if (event.target.value !== value) onValueChange(event.target.value);
  };

  return createElement(TextField, _extends({
    select: true,
    className: classNames(classes.filledSelect, className),
    value: value,
    onChange: handleChange,
    margin: "normal",
    variant: "filled",
    hiddenLabel: true,
    disabled: readOnly
  }, restProps), availableOptions.map(function (option) {
    return createElement(MenuItem, {
      value: option.id,
      key: option.id,
      className: classes.menuItem
    }, option.text);
  }));
});
process.env.NODE_ENV !== "production" ? FilledSelectBase.propTypes = {
  onValueChange: func,
  classes: object.isRequired,
  value: oneOfType([string, number]).isRequired,
  availableOptions: arrayOf(shape({
    id: oneOfType([string, number]),
    text: string.isRequired
  })),
  readOnly: bool,
  className: string
} : void 0;
FilledSelectBase.defaultProps = {
  readOnly: false,
  onValueChange: function onValueChange() {
    return undefined;
  },
  availableOptions: [],
  className: undefined
};
var FilledSelect = withStyles(styles$O)(FilledSelectBase, {
  name: 'FilledSelect'
});

var Select = memo(function (_ref) {
  var value = _ref.value,
      availableOptions = _ref.availableOptions,
      onValueChange = _ref.onValueChange,
      readOnly = _ref.readOnly,
      type = _ref.type,
      restProps = _objectWithoutProperties(_ref, ["value", "availableOptions", "onValueChange", "readOnly", "type"]);

  var ResultingSelect = type === STANDARD_SELECT ? FilledSelect : OutlinedSelect;
  return createElement(ResultingSelect, _extends({
    value: value,
    availableOptions: availableOptions,
    onValueChange: onValueChange,
    readOnly: readOnly
  }, restProps));
});
process.env.NODE_ENV !== "production" ? Select.propTypes = {
  onValueChange: func.isRequired,
  value: oneOfType([string, number]).isRequired,
  availableOptions: arrayOf(shape({
    id: oneOfType([string, number]),
    text: string.isRequired
  })),
  readOnly: bool,
  type: string
} : void 0;
Select.defaultProps = {
  readOnly: false,
  availableOptions: [],
  type: STANDARD_SELECT
};

var styles$P = function styles(_ref) {
  var spacing = _ref.spacing;
  return {
    grid: {
      marginTop: spacing(1.75)
    },
    label: {
      width: '6.5em'
    },
    labelWithMargin: {
      marginLeft: '1em',
      width: 'calc((100% - 7.5em) * 4 / 7)'
    },
    textEditor: {
      width: 'calc((100% - 7.5em) * 3 / 7)',
      maxWidth: '8em'
    }
  };
};

var IntervalEditorBase = function IntervalEditorBase(_ref2) {
  var classes = _ref2.classes,
      className = _ref2.className,
      Label = _ref2.labelComponent,
      TextEditor = _ref2.textEditorComponent,
      repeatEveryLabel = _ref2.repeatEveryLabel,
      repeatIntervalLabel = _ref2.repeatIntervalLabel,
      readOnly = _ref2.readOnly,
      interval = _ref2.interval,
      changeRecurrenceInterval = _ref2.changeRecurrenceInterval,
      restProps = _objectWithoutProperties(_ref2, ["classes", "className", "labelComponent", "textEditorComponent", "repeatEveryLabel", "repeatIntervalLabel", "readOnly", "interval", "changeRecurrenceInterval"]);

  return createElement(Grid, _extends({
    container: true,
    direction: "row",
    justify: "flex-start",
    alignItems: "center",
    className: classNames(classes.grid, className)
  }, restProps), createElement(Label, {
    text: repeatEveryLabel,
    className: classes.label
  }), createElement(TextEditor, {
    readOnly: readOnly,
    value: interval,
    className: classes.textEditor,
    type: NUMBER_EDITOR,
    onValueChange: changeRecurrenceInterval
  }), createElement(Label, {
    text: repeatIntervalLabel,
    className: classes.labelWithMargin
  }));
};

process.env.NODE_ENV !== "production" ? IntervalEditorBase.propTypes = {
  classes: object.isRequired,
  className: string,
  repeatEveryLabel: string.isRequired,
  repeatIntervalLabel: string.isRequired,
  readOnly: bool.isRequired,
  interval: number,
  changeRecurrenceInterval: func.isRequired,
  labelComponent: oneOfType([func, object]).isRequired,
  textEditorComponent: oneOfType([func, object]).isRequired
} : void 0;
IntervalEditorBase.defaultProps = {
  className: undefined,
  interval: 1
};
var IntervalEditor = withStyles(styles$P)(IntervalEditorBase, {
  name: 'IntervalEditor'
});

var Daily = function Daily(_ref) {
  var weeklyRecurrenceSelectorComponent = _ref.weeklyRecurrenceSelectorComponent,
      radioGroupComponent = _ref.radioGroupComponent,
      textEditorComponent = _ref.textEditorComponent,
      labelComponent = _ref.labelComponent,
      getMessage = _ref.getMessage,
      readOnly = _ref.readOnly,
      onFieldChange = _ref.onFieldChange,
      appointmentData = _ref.appointmentData,
      selectComponent = _ref.selectComponent,
      formatDate = _ref.formatDate,
      firstDayOfWeek = _ref.firstDayOfWeek,
      restProps = _objectWithoutProperties(_ref, ["weeklyRecurrenceSelectorComponent", "radioGroupComponent", "textEditorComponent", "labelComponent", "getMessage", "readOnly", "onFieldChange", "appointmentData", "selectComponent", "formatDate", "firstDayOfWeek"]);

  var rRule = appointmentData.rRule;
  var recurrenceOptions = useMemo(function () {
    return getRecurrenceOptions(rRule) || {};
  }, [rRule]);
  var changeRecurrenceInterval = useCallback(function (interval) {
    return checkIsNaturalNumber(interval) && onFieldChange({
      rRule: changeRecurrenceOptions(_objectSpread2({}, recurrenceOptions, {
        interval: interval
      }))
    });
  }, [recurrenceOptions, onFieldChange]);
  return createElement(IntervalEditor, _extends({
    repeatEveryLabel: getMessage('repeatEveryLabel'),
    repeatIntervalLabel: getMessage('daysLabel'),
    textEditorComponent: textEditorComponent,
    labelComponent: labelComponent,
    changeRecurrenceInterval: changeRecurrenceInterval,
    interval: recurrenceOptions.interval,
    readOnly: readOnly
  }, restProps));
};
process.env.NODE_ENV !== "production" ? Daily.propTypes = {
  labelComponent: oneOfType([func, object]).isRequired,
  radioGroupComponent: oneOfType([func, object]).isRequired,
  textEditorComponent: oneOfType([func, object]).isRequired,
  selectComponent: oneOfType([func, object]).isRequired,
  weeklyRecurrenceSelectorComponent: oneOfType([func, object]).isRequired,
  appointmentData: shape({
    title: string,
    startDate: instanceOf(Date),
    endDate: instanceOf(Date),
    rRule: string,
    notes: string,
    additionalInformation: string,
    allDay: bool
  }).isRequired,
  onFieldChange: func,
  getMessage: func.isRequired,
  readOnly: bool,
  formatDate: func.isRequired,
  firstDayOfWeek: number.isRequired
} : void 0;
Daily.defaultProps = {
  onFieldChange: function onFieldChange() {
    return undefined;
  },
  readOnly: false
};

var styles$Q = function styles(theme) {
  return {
    container: {
      marginBottom: theme.spacing(2)
    }
  };
};

var WeeklyBase = function WeeklyBase(_ref) {
  var radioGroupComponent = _ref.radioGroupComponent,
      textEditorComponent = _ref.textEditorComponent,
      labelComponent = _ref.labelComponent,
      classes = _ref.classes,
      getMessage = _ref.getMessage,
      readOnly = _ref.readOnly,
      onFieldChange = _ref.onFieldChange,
      appointmentData = _ref.appointmentData,
      selectComponent = _ref.selectComponent,
      WeeklyRecurrenceSelector = _ref.weeklyRecurrenceSelectorComponent,
      formatDate = _ref.formatDate,
      firstDayOfWeek = _ref.firstDayOfWeek,
      restProps = _objectWithoutProperties(_ref, ["radioGroupComponent", "textEditorComponent", "labelComponent", "classes", "getMessage", "readOnly", "onFieldChange", "appointmentData", "selectComponent", "weeklyRecurrenceSelectorComponent", "formatDate", "firstDayOfWeek"]);

  var rRule = appointmentData.rRule;
  var recurrenceOptions = useMemo(function () {
    return getRecurrenceOptions(rRule) || {};
  }, [rRule]);
  var changeRecurrenceInterval = useCallback(function (interval) {
    return checkIsNaturalNumber(interval) && onFieldChange({
      rRule: changeRecurrenceOptions(_objectSpread2({}, recurrenceOptions, {
        interval: interval
      }))
    });
  }, [recurrenceOptions, onFieldChange]);
  return createElement("div", restProps, createElement(IntervalEditor, _extends({
    className: classes.container,
    repeatEveryLabel: getMessage('repeatEveryLabel'),
    repeatIntervalLabel: getMessage('weeksOnLabel'),
    textEditorComponent: textEditorComponent,
    labelComponent: labelComponent,
    changeRecurrenceInterval: changeRecurrenceInterval,
    interval: recurrenceOptions.interval,
    readOnly: readOnly
  }, restProps)), createElement(WeeklyRecurrenceSelector, {
    rRule: appointmentData.rRule,
    onValueChange: onFieldChange,
    readOnly: readOnly,
    formatDate: formatDate,
    firstDayOfWeek: firstDayOfWeek
  }));
};

process.env.NODE_ENV !== "production" ? WeeklyBase.propTypes = {
  labelComponent: oneOfType([func, object]).isRequired,
  radioGroupComponent: oneOfType([func, object]).isRequired,
  textEditorComponent: oneOfType([func, object]).isRequired,
  selectComponent: oneOfType([func, object]).isRequired,
  weeklyRecurrenceSelectorComponent: oneOfType([func, object]).isRequired,
  appointmentData: shape({
    title: string,
    startDate: instanceOf(Date),
    endDate: instanceOf(Date),
    rRule: string,
    notes: string,
    additionalInformation: string,
    allDay: bool
  }).isRequired,
  onFieldChange: func,
  classes: object.isRequired,
  getMessage: func.isRequired,
  readOnly: bool,
  formatDate: func.isRequired,
  firstDayOfWeek: number.isRequired
} : void 0;
WeeklyBase.defaultProps = {
  onFieldChange: function onFieldChange() {
    return undefined;
  },
  readOnly: false
};
var Weekly = withStyles(styles$Q)(WeeklyBase, {
  name: 'Weekly'
});

var styles$R = function styles(theme) {
  return {
    container: {
      marginBottom: theme.spacing(1)
    }
  };
};

var MonthlyBase = function MonthlyBase(_ref) {
  var RadioGroup = _ref.radioGroupComponent,
      textEditorComponent = _ref.textEditorComponent,
      labelComponent = _ref.labelComponent,
      classes = _ref.classes,
      getMessage = _ref.getMessage,
      readOnly = _ref.readOnly,
      onFieldChange = _ref.onFieldChange,
      appointmentData = _ref.appointmentData,
      selectComponent = _ref.selectComponent,
      weeklyRecurrenceSelectorComponent = _ref.weeklyRecurrenceSelectorComponent,
      formatDate = _ref.formatDate,
      firstDayOfWeek = _ref.firstDayOfWeek,
      restProps = _objectWithoutProperties(_ref, ["radioGroupComponent", "textEditorComponent", "labelComponent", "classes", "getMessage", "readOnly", "onFieldChange", "appointmentData", "selectComponent", "weeklyRecurrenceSelectorComponent", "formatDate", "firstDayOfWeek"]);

  var rRule = appointmentData.rRule;
  var recurrenceOptions = useMemo(function () {
    return getRecurrenceOptions(rRule) || {};
  }, [rRule]);
  var changeRecurrenceInterval = useCallback(function (interval) {
    return checkIsNaturalNumber(interval) && onFieldChange({
      rRule: changeRecurrenceOptions(_objectSpread2({}, recurrenceOptions, {
        interval: interval
      }))
    });
  }, [recurrenceOptions, onFieldChange]);
  return createElement("div", restProps, createElement(IntervalEditor, _extends({
    className: classes.container,
    repeatEveryLabel: getMessage('repeatEveryLabel'),
    repeatIntervalLabel: getMessage('monthsLabel'),
    textEditorComponent: textEditorComponent,
    labelComponent: labelComponent,
    changeRecurrenceInterval: changeRecurrenceInterval,
    interval: recurrenceOptions.interval,
    readOnly: readOnly
  }, restProps)), createElement(RadioGroup, {
    type: MONTHLY_RADIO_GROUP,
    readOnly: readOnly,
    getMessage: getMessage,
    textEditorComponent: textEditorComponent,
    labelComponent: labelComponent,
    onFieldChange: onFieldChange,
    appointmentData: appointmentData,
    selectComponent: selectComponent,
    formatDate: formatDate,
    dateEditorComponent: function dateEditorComponent() {
      return null;
    },
    firstDayOfWeek: firstDayOfWeek
  }));
};

process.env.NODE_ENV !== "production" ? MonthlyBase.propTypes = {
  labelComponent: oneOfType([func, object]).isRequired,
  radioGroupComponent: oneOfType([func, object]).isRequired,
  textEditorComponent: oneOfType([func, object]).isRequired,
  selectComponent: oneOfType([func, object]).isRequired,
  weeklyRecurrenceSelectorComponent: oneOfType([func, object]).isRequired,
  appointmentData: shape({
    title: string,
    startDate: instanceOf(Date),
    endDate: instanceOf(Date),
    rRule: string,
    notes: string,
    additionalInformation: string,
    allDay: bool
  }).isRequired,
  onFieldChange: func,
  classes: object.isRequired,
  getMessage: func.isRequired,
  readOnly: bool,
  formatDate: func.isRequired,
  firstDayOfWeek: number.isRequired
} : void 0;
MonthlyBase.defaultProps = {
  onFieldChange: function onFieldChange() {
    return undefined;
  },
  readOnly: false
};
var Monthly = withStyles(styles$R)(MonthlyBase, {
  name: 'Monthly'
});

var styles$S = function styles(theme) {
  return {
    radioGroup: {
      marginTop: theme.spacing(1)
    }
  };
};

var YearlyBase = function YearlyBase(_ref) {
  var RadioGroup = _ref.radioGroupComponent,
      textEditorComponent = _ref.textEditorComponent,
      labelComponent = _ref.labelComponent,
      classes = _ref.classes,
      getMessage = _ref.getMessage,
      readOnly = _ref.readOnly,
      onFieldChange = _ref.onFieldChange,
      appointmentData = _ref.appointmentData,
      selectComponent = _ref.selectComponent,
      weeklyRecurrenceSelectorComponent = _ref.weeklyRecurrenceSelectorComponent,
      formatDate = _ref.formatDate,
      firstDayOfWeek = _ref.firstDayOfWeek,
      restProps = _objectWithoutProperties(_ref, ["radioGroupComponent", "textEditorComponent", "labelComponent", "classes", "getMessage", "readOnly", "onFieldChange", "appointmentData", "selectComponent", "weeklyRecurrenceSelectorComponent", "formatDate", "firstDayOfWeek"]);

  var rRule = appointmentData.rRule;
  var recurrenceOptions = useMemo(function () {
    return getRecurrenceOptions(rRule) || {};
  }, [rRule]);
  var changeRecurrenceInterval = useCallback(function (interval) {
    return checkIsNaturalNumber(interval) && onFieldChange({
      rRule: changeRecurrenceOptions(_objectSpread2({}, recurrenceOptions, {
        interval: interval
      }))
    });
  }, [recurrenceOptions, onFieldChange]);
  return createElement("div", restProps, createElement(IntervalEditor, _extends({
    repeatEveryLabel: getMessage('repeatEveryLabel'),
    repeatIntervalLabel: getMessage('yearsLabel'),
    textEditorComponent: textEditorComponent,
    labelComponent: labelComponent,
    changeRecurrenceInterval: changeRecurrenceInterval,
    interval: recurrenceOptions.interval,
    readOnly: readOnly
  }, restProps)), createElement(RadioGroup, {
    type: YEARLY_RADIO_GROUP,
    readOnly: readOnly,
    getMessage: getMessage,
    textEditorComponent: textEditorComponent,
    labelComponent: labelComponent,
    onFieldChange: onFieldChange,
    appointmentData: appointmentData,
    selectComponent: selectComponent,
    formatDate: formatDate,
    className: classes.radioGroup,
    dateEditorComponent: function dateEditorComponent() {
      return null;
    },
    firstDayOfWeek: firstDayOfWeek
  }));
};

process.env.NODE_ENV !== "production" ? YearlyBase.propTypes = {
  labelComponent: oneOfType([func, object]).isRequired,
  radioGroupComponent: oneOfType([func, object]).isRequired,
  textEditorComponent: oneOfType([func, object]).isRequired,
  selectComponent: oneOfType([func, object]).isRequired,
  weeklyRecurrenceSelectorComponent: oneOfType([func, object]).isRequired,
  appointmentData: shape({
    title: string,
    startDate: instanceOf(Date),
    endDate: instanceOf(Date),
    rRule: string,
    notes: string,
    additionalInformation: string,
    allDay: bool
  }).isRequired,
  onFieldChange: func,
  classes: object.isRequired,
  getMessage: func.isRequired,
  readOnly: bool,
  formatDate: func.isRequired,
  firstDayOfWeek: number.isRequired
} : void 0;
YearlyBase.defaultProps = {
  onFieldChange: function onFieldChange() {
    return undefined;
  },
  readOnly: false
};
var Yearly = withStyles(styles$S)(YearlyBase, {
  name: 'Yearly'
});

var styles$T = function styles(_ref) {
  var spacing = _ref.spacing;
  return {
    root: {
      padding: 0,
      paddingTop: spacing(3),
      overflow: 'hidden',
      width: 0,
      transition: "all ".concat(TRANSITIONS_TIME, "ms cubic-bezier(0, 0, 0.2, 1)"),
      boxSizing: 'border-box',
      maxWidth: 0,
      opacity: 0,
      '@media (max-width: 700px)': {
        minWidth: '100%',
        maxHeight: 0
      }
    },
    visible: {
      maxWidth: '500px',
      width: '500px',
      padding: spacing(3),
      paddingRight: spacing(4),
      paddingLeft: spacing(4),
      opacity: 1,
      '@media (max-width: 700px)': {
        width: '500px',
        maxWidth: '700px',
        paddingRight: spacing(2),
        paddingLeft: spacing(2),
        maxHeight: 1000
      },
      '@media (min-width: 700px) and (max-width: 850px)': {
        width: '500px'
      },
      '@media (min-width: 850px) and (max-width: 1000px)': {
        width: '500px'
      },
      '@media (min-width: 1000px) and (max-width: 1150px)': {
        width: '500px'
      }
    },
    invisible: {
      maxHeight: 0,
      '@media (min-width: 700px)': {
        maxHeight: '500px'
      }
    },
    label: {
      width: '8em'
    },
    repeatLabel: {
      marginBottom: spacing(0.375)
    },
    radioGroup: {
      marginTop: spacing(0.5)
    },
    endRepeatLabel: {
      marginTop: spacing(2)
    },
    select: {
      height: '3.8em'
    }
  };
};

var getLayoutComponent = function getLayoutComponent(recurrenceOptions) {
  if (recurrenceOptions) {
    switch (recurrenceOptions.freq) {
      case RRULE_REPEAT_TYPES.DAILY:
        return Daily;

      case RRULE_REPEAT_TYPES.WEEKLY:
        return Weekly;

      case RRULE_REPEAT_TYPES.MONTHLY:
        return Monthly;

      case RRULE_REPEAT_TYPES.YEARLY:
        return Yearly;
    }
  }

  return function () {
    return null;
  };
};

var LayoutBase$a = function LayoutBase(_ref2) {
  var _classNames;

  var RadioGroup = _ref2.radioGroupComponent,
      textEditorComponent = _ref2.textEditorComponent,
      Label = _ref2.labelComponent,
      dateEditorComponent = _ref2.dateEditorComponent,
      Select = _ref2.selectComponent,
      weeklyRecurrenceSelectorComponent = _ref2.weeklyRecurrenceSelectorComponent,
      children = _ref2.children,
      classes = _ref2.classes,
      className = _ref2.className,
      getMessage = _ref2.getMessage,
      readOnly = _ref2.readOnly,
      onFieldChange = _ref2.onFieldChange,
      appointmentData = _ref2.appointmentData,
      formatDate = _ref2.formatDate,
      locale = _ref2.locale,
      visible = _ref2.visible,
      firstDayOfWeek = _ref2.firstDayOfWeek,
      restProps = _objectWithoutProperties(_ref2, ["radioGroupComponent", "textEditorComponent", "labelComponent", "dateEditorComponent", "selectComponent", "weeklyRecurrenceSelectorComponent", "children", "classes", "className", "getMessage", "readOnly", "onFieldChange", "appointmentData", "formatDate", "locale", "visible", "firstDayOfWeek"]);

  var recurrenceOptions = getRecurrenceOptions(appointmentData.rRule) || {};
  var MainLayoutComponent = getLayoutComponent(recurrenceOptions);
  var frequency = getFrequencyString(recurrenceOptions.freq);
  var rRule = appointmentData.rRule,
      startDate = appointmentData.startDate;
  var changeFrequency = useCallback(function (repeatType) {
    return handleChangeFrequency(repeatType, rRule, startDate, onFieldChange);
  }, [rRule, startDate, onFieldChange]);
  var selectOptions = useMemo(function () {
    return getAvailableRecurrenceOptions(getMessage);
  }, [getMessage]);
  return createElement("div", _extends({
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes.root, true), _defineProperty(_classNames, classes.visible, visible), _defineProperty(_classNames, classes.invisible, !visible), _defineProperty(_classNames, "className", className), _classNames))
  }, restProps), createElement(Label, {
    text: getMessage('repeatLabel'),
    type: TITLE,
    className: classes.repeatLabel
  }), createElement(Select, {
    onValueChange: changeFrequency,
    availableOptions: selectOptions,
    value: frequency,
    type: OUTLINED_SELECT,
    className: classes.select,
    readOnly: readOnly
  }), createElement(MainLayoutComponent, {
    textEditorComponent: textEditorComponent,
    labelComponent: Label,
    getMessage: getMessage,
    readOnly: readOnly,
    radioGroupComponent: RadioGroup,
    appointmentData: appointmentData,
    onFieldChange: onFieldChange,
    selectComponent: Select,
    weeklyRecurrenceSelectorComponent: weeklyRecurrenceSelectorComponent,
    formatDate: formatDate,
    firstDayOfWeek: firstDayOfWeek
  }), createElement(Label, {
    text: getMessage('endRepeatLabel'),
    className: classes.endRepeatLabel
  }), createElement(RadioGroup, {
    className: classes.radioGroup,
    type: END_REPEAT_RADIO_GROUP,
    readOnly: readOnly,
    getMessage: getMessage,
    textEditorComponent: textEditorComponent,
    labelComponent: Label,
    dateEditorComponent: dateEditorComponent,
    appointmentData: appointmentData,
    onFieldChange: onFieldChange,
    selectComponent: Select,
    formatDate: formatDate,
    locale: locale,
    firstDayOfWeek: firstDayOfWeek
  }), children);
};

process.env.NODE_ENV !== "production" ? LayoutBase$a.propTypes = {
  locale: oneOfType([string, arrayOf(string)]),
  labelComponent: oneOfType([func, object]).isRequired,
  radioGroupComponent: oneOfType([func, object]).isRequired,
  textEditorComponent: oneOfType([func, object]).isRequired,
  dateEditorComponent: oneOfType([func, object]).isRequired,
  selectComponent: oneOfType([func, object]).isRequired,
  weeklyRecurrenceSelectorComponent: oneOfType([func, object]).isRequired,
  onFieldChange: func,
  children: node,
  className: string,
  classes: object.isRequired,
  getMessage: func.isRequired,
  readOnly: bool,
  appointmentData: shape({
    title: string,
    startDate: instanceOf(Date),
    endDate: instanceOf(Date),
    rRule: string,
    notes: string,
    additionalInformation: string,
    allDay: bool
  }).isRequired,
  formatDate: func.isRequired,
  visible: bool.isRequired,
  firstDayOfWeek: number.isRequired
} : void 0;
LayoutBase$a.defaultProps = {
  locale: 'en-US',
  onFieldChange: function onFieldChange() {
    return undefined;
  },
  className: undefined,
  readOnly: false,
  children: null
};
var Layout$9 = withStyles(styles$T)(LayoutBase$a, {
  name: 'RecurrenceLayout'
});

var styles$U = function styles(_ref) {
  var spacing = _ref.spacing,
      typography = _ref.typography;
  return {
    textEditor: {
      width: 'calc(100% - 4.5em)'
    },
    label: {
      width: '4.5em'
    },
    input: {
      paddingBottom: spacing(2.75)
    },
    radioLabel: {
      fontSize: typography.fontSize + 1
    },
    dateEditor: {
      width: 'calc(100% - 4.5em)'
    },
    formControl: {
      marginRight: 0
    },
    controlLabel: {
      width: '100%'
    }
  };
};

var EndRepeatEditorBase = function EndRepeatEditorBase(_ref2) {
  var classes = _ref2.classes,
      getMessage = _ref2.getMessage,
      Label = _ref2.labelComponent,
      TextEditor = _ref2.textEditorComponent,
      DateEditor = _ref2.dateEditorComponent,
      onFieldChange = _ref2.onFieldChange,
      appointmentData = _ref2.appointmentData,
      locale = _ref2.locale,
      readOnly = _ref2.readOnly,
      restProps = _objectWithoutProperties(_ref2, ["classes", "getMessage", "labelComponent", "textEditorComponent", "dateEditorComponent", "onFieldChange", "appointmentData", "locale", "readOnly"]);

  var _React$useState = useState(1),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      count = _React$useState2[0],
      setCount = _React$useState2[1];

  var _React$useState3 = useState(appointmentData.endDate),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      endDate = _React$useState4[0],
      setEndDate = _React$useState4[1];

  var rRule = appointmentData.rRule;
  var recurrenceOptions = useMemo(function () {
    return getRecurrenceOptions(rRule) || {};
  }, [rRule]);
  var changeRecurrenceCount = useCallback(function (nextCount) {
    return checkIsNaturalNumber(nextCount) && onFieldChange({
      rRule: changeRecurrenceOptions(_objectSpread2({}, recurrenceOptions, {
        count: nextCount
      }))
    });
  }, [recurrenceOptions, onFieldChange]);
  var changeRecurrenceEndDate = useCallback(function (date) {
    if (moment(date).isValid()) {
      onFieldChange({
        rRule: changeRecurrenceOptions(_objectSpread2({}, recurrenceOptions, {
          until: date
        }))
      });
    }
  }, [recurrenceOptions, onFieldChange]);
  var countEditorProps = useMemo(function () {
    return {
      endAdornment: createElement(InputAdornment, {
        position: "end"
      }, getMessage('occurrencesLabel'))
    };
  }, []);
  var recurrenceCount = recurrenceOptions.count || count;
  var recurrenceEndDate = recurrenceOptions.until || endDate;
  var value;

  if (recurrenceOptions.count) {
    value = 'endAfter';
  } else if (recurrenceOptions.until) {
    value = 'endBy';
  } else {
    value = 'never';
  }

  var onRadioGroupValueChange = function onRadioGroupValueChange(event) {
    var change;

    switch (event.target.value) {
      case 'endAfter':
        setEndDate(recurrenceOptions.until || endDate);
        change = {
          count: count,
          until: undefined
        };
        break;

      case 'endBy':
        setCount(recurrenceOptions.count || count);
        change = {
          count: undefined,
          until: endDate
        };
        break;

      case 'never':
        setEndDate(recurrenceOptions.until || endDate);
        setCount(recurrenceOptions.count || count);
        change = {
          count: undefined,
          until: undefined
        };
        break;
    }

    onFieldChange({
      rRule: changeRecurrenceOptions(_objectSpread2({}, recurrenceOptions, {}, change))
    });
  };

  return createElement(RadioGroup$1, _extends({
    onChange: onRadioGroupValueChange,
    value: value
  }, restProps), createElement(FormControlLabel, {
    value: "never",
    control: createElement(Radio, {
      color: "primary"
    }),
    label: getMessage('never'),
    classes: {
      label: classes.radioLabel
    },
    disabled: readOnly
  }), createElement(FormControlLabel, {
    className: classes.formControl,
    value: "endAfter",
    classes: {
      label: classes.controlLabel
    },
    control: createElement(Radio, {
      color: "primary"
    }),
    disabled: readOnly,
    label: createElement(Grid, {
      container: true,
      direction: "row",
      justify: "flex-start",
      alignItems: "center"
    }, createElement(Label, {
      className: classes.label,
      text: getMessage('onLabel')
    }), createElement(TextEditor, {
      readOnly: readOnly || value !== 'endAfter',
      className: classes.textEditor,
      value: recurrenceCount,
      type: NUMBER_EDITOR,
      onValueChange: changeRecurrenceCount,
      InputProps: countEditorProps
    }))
  }), createElement(FormControlLabel, {
    className: classes.formControl,
    classes: {
      label: classes.controlLabel
    },
    value: "endBy",
    disabled: readOnly,
    control: createElement(Radio, {
      color: "primary"
    }),
    label: createElement(Grid, {
      container: true,
      direction: "row",
      justify: "flex-start",
      alignItems: "center"
    }, createElement(Label, {
      className: classes.label,
      text: getMessage('afterLabel')
    }), createElement(DateEditor, {
      className: classes.dateEditor,
      readOnly: readOnly || value !== 'endBy',
      value: recurrenceEndDate,
      onValueChange: changeRecurrenceEndDate,
      allowKeyboardControl: false,
      locale: locale,
      excludeTime: appointmentData.allDay
    }))
  }));
};

process.env.NODE_ENV !== "production" ? EndRepeatEditorBase.propTypes = {
  labelComponent: oneOfType([func, object]).isRequired,
  textEditorComponent: oneOfType([func, object]).isRequired,
  dateEditorComponent: oneOfType([func, object]).isRequired,
  locale: oneOfType([string, arrayOf(string)]).isRequired,
  classes: object.isRequired,
  getMessage: func,
  onFieldChange: func,
  appointmentData: shape({
    title: string,
    startDate: instanceOf(Date),
    endDate: instanceOf(Date),
    rRule: string,
    notes: string,
    additionalInformation: string,
    allDay: bool
  }).isRequired,
  readOnly: bool
} : void 0;
EndRepeatEditorBase.defaultProps = {
  onFieldChange: function onFieldChange() {
    return undefined;
  },
  getMessage: function getMessage() {
    return undefined;
  },
  readOnly: false
};
var EndRepeatEditor = withStyles(styles$U)(EndRepeatEditorBase, {
  name: 'EndRepeatEditor'
});

var styles$V = function styles(_ref) {
  var spacing = _ref.spacing;
  return {
    textEditor: {
      width: 'calc((100% - 5.5em) * 3 / 7)',
      maxWidth: '12em',
      marginRight: '1em'
    },
    input: {
      paddingBottom: spacing(2.75)
    },
    select: {
      width: 'calc((100% - 5.5em) * 3 / 7)',
      maxWidth: '8em'
    },
    longSelect: {
      width: 'calc((100% - 5.5em) * 4 / 7)',
      minWidth: 'calc(100% - 13.5em)',
      marginLeft: '1em'
    },
    label: {
      width: '4.5em'
    },
    longLabel: {
      width: 'calc((100% - 5.5em) * 4 / 7)',
      minWidth: 'calc(100% - 14em)'
    },
    grid: {
      marginTop: spacing(1),
      marginBottom: spacing(1)
    },
    formControl: {
      marginRight: 0
    },
    controlLabel: {
      width: '100%'
    }
  };
};

var MonthlyEditorBase = function MonthlyEditorBase(_ref2) {
  var classes = _ref2.classes,
      getMessage = _ref2.getMessage,
      Label = _ref2.labelComponent,
      TextEditor = _ref2.textEditorComponent,
      Select = _ref2.selectComponent,
      readOnly = _ref2.readOnly,
      appointmentData = _ref2.appointmentData,
      formatDate = _ref2.formatDate,
      onFieldChange = _ref2.onFieldChange,
      firstDayOfWeek = _ref2.firstDayOfWeek,
      restProps = _objectWithoutProperties(_ref2, ["classes", "getMessage", "labelComponent", "textEditorComponent", "selectComponent", "readOnly", "appointmentData", "formatDate", "onFieldChange", "firstDayOfWeek"]);

  var _useState = useState(appointmentData.startDate.getDate()),
      _useState2 = _slicedToArray(_useState, 2),
      dayNumber = _useState2[0],
      setDayNumber = _useState2[1];

  var _useState3 = useState(Math.trunc((appointmentData.startDate.getDate() - 1) / 7)),
      _useState4 = _slicedToArray(_useState3, 2),
      stateWeekNumber = _useState4[0],
      setStateWeekNumber = _useState4[1];

  var _useState5 = useState(appointmentData.startDate.getDay()),
      _useState6 = _slicedToArray(_useState5, 2),
      stateDayOfWeek = _useState6[0],
      setStateDayOfWeek = _useState6[1];

  var rRule = appointmentData.rRule;
  var recurrenceOptions = React__default.useMemo(function () {
    return getRecurrenceOptions(rRule) || {};
  }, [rRule]);
  var changeByMonthDay = React__default.useCallback(function (nextByMonthDay) {
    return onFieldChange({
      rRule: handleStartDateChange(nextByMonthDay, recurrenceOptions)
    });
  }, [recurrenceOptions]);

  var _getRadioGroupDisplay = getRadioGroupDisplayData(recurrenceOptions, stateDayOfWeek, stateWeekNumber, dayNumber, 'onDayNumber', 'onDayOfWeek'),
      dayOfWeek = _getRadioGroupDisplay.dayOfWeek,
      weekNumber = _getRadioGroupDisplay.weekNumber,
      dayNumberTextField = _getRadioGroupDisplay.dayNumberTextField,
      value = _getRadioGroupDisplay.radioGroupValue;

  var changeWeekNumber = React__default.useCallback(function (nextWeekNumber) {
    return onFieldChange({
      rRule: handleWeekNumberChange(nextWeekNumber, recurrenceOptions)
    });
  }, [recurrenceOptions]);
  var weekNumbers = React__default.useMemo(function () {
    return getWeekNumberLabels(getMessage);
  }, [getMessage]);
  var changeDayOfWeek = React__default.useCallback(function (nextDayOfWeek) {
    return onFieldChange({
      rRule: changeRecurrenceOptions(_objectSpread2({}, recurrenceOptions, {
        byweekday: nextDayOfWeek > 0 ? nextDayOfWeek - 1 : 6
      }))
    });
  }, [recurrenceOptions]);
  var daysOfWeek = React__default.useMemo(function () {
    return getDaysOfWeek(formatDate, firstDayOfWeek);
  }, [formatDate, firstDayOfWeek]);
  var onDayNumberReadOnly = readOnly || value !== 'onDayNumber';
  var onDayOfWeekReadOnly = readOnly || value !== 'onDayOfWeek';

  var onRadioGroupValueChange = function onRadioGroupValueChange(event) {
    switch (event.target.value) {
      case 'onDayNumber':
        setStateWeekNumber(weekNumber);
        setStateDayOfWeek(dayOfWeek);
        onFieldChange({
          rRule: changeRecurrenceOptions(_objectSpread2({}, recurrenceOptions, {
            bymonthday: dayNumber,
            byweekday: undefined
          }))
        });
        break;

      case 'onDayOfWeek':
        setDayNumber(recurrenceOptions.bymonthday || dayNumber);
        onFieldChange({
          rRule: handleToDayOfWeekChange(stateWeekNumber, stateDayOfWeek, recurrenceOptions)
        });
        break;
    }
  };

  return React__default.createElement(RadioGroup$1, _extends({
    onChange: onRadioGroupValueChange,
    value: value
  }, restProps), React__default.createElement(FormControlLabel, {
    className: classes.formControl,
    value: "onDayNumber",
    control: React__default.createElement(Radio, {
      color: "primary"
    }),
    disabled: readOnly,
    label: React__default.createElement(Grid, {
      container: true,
      direction: "row",
      justify: "flex-start",
      alignItems: "center",
      className: classes.grid
    }, React__default.createElement(Label, {
      text: getMessage('onLabel'),
      className: classes.label
    }), React__default.createElement(TextEditor, {
      readOnly: onDayNumberReadOnly,
      value: dayNumberTextField,
      className: classes.textEditor,
      type: NUMBER_EDITOR,
      onValueChange: changeByMonthDay
    }), React__default.createElement(Label, {
      text: getMessage('ofEveryMonthLabel'),
      className: classes.longLabel
    }))
  }), React__default.createElement(FormControlLabel, {
    value: "onDayOfWeek",
    className: classes.formControl,
    classes: {
      label: classes.controlLabel
    },
    control: React__default.createElement(Radio, {
      color: "primary"
    }),
    disabled: readOnly,
    label: React__default.createElement(Grid, {
      container: true,
      direction: "row",
      justify: "flex-start",
      alignItems: "center",
      className: classes.grid
    }, React__default.createElement(Label, {
      text: getMessage('theLabel'),
      className: classes.label
    }), React__default.createElement(Select, {
      readOnly: onDayOfWeekReadOnly,
      onValueChange: changeWeekNumber,
      value: weekNumber,
      availableOptions: weekNumbers,
      className: classes.select
    }), React__default.createElement(Select, {
      readOnly: onDayOfWeekReadOnly,
      onValueChange: changeDayOfWeek,
      value: dayOfWeek,
      availableOptions: daysOfWeek,
      className: classes.longSelect
    }))
  }));
};

process.env.NODE_ENV !== "production" ? MonthlyEditorBase.propTypes = {
  classes: object.isRequired,
  getMessage: func,
  onFieldChange: func,
  labelComponent: oneOfType([func, object]).isRequired,
  textEditorComponent: oneOfType([func, object]).isRequired,
  selectComponent: oneOfType([func, object]).isRequired,
  appointmentData: shape({
    title: string,
    startDate: instanceOf(Date),
    endDate: instanceOf(Date),
    rRule: string,
    notes: string,
    additionalInformation: string,
    allDay: bool
  }).isRequired,
  readOnly: bool,
  formatDate: func.isRequired,
  firstDayOfWeek: number.isRequired
} : void 0;
MonthlyEditorBase.defaultProps = {
  getMessage: function getMessage() {
    return undefined;
  },
  onFieldChange: function onFieldChange() {
    return undefined;
  },
  readOnly: false
};
var MonthlyEditor = withStyles(styles$V)(MonthlyEditorBase, {
  name: 'MonthlyEditor'
});

var styles$W = function styles(_ref) {
  var spacing = _ref.spacing;
  return {
    textEditor: {
      width: 'calc((100% - 5.5em) * 4 / 7)',
      minWidth: 'calc(100% - 13.5em)',
      marginLeft: '1em'
    },
    label: {
      width: '4.5em'
    },
    select: {
      width: 'calc((100% - 5.5em) * 3 / 7)',
      maxWidth: '8em'
    },
    formControl: {
      marginRight: 0,
      marginTop: spacing(1),
      marginBottom: spacing(1)
    },
    controlLabel: {
      width: '100%'
    }
  };
};

var ChangeMonthEditorBase = React__default.memo(function (_ref2) {
  var classes = _ref2.classes,
      getMessage = _ref2.getMessage,
      Label = _ref2.labelComponent,
      TextEditor = _ref2.textEditorComponent,
      Select = _ref2.selectComponent,
      readOnly = _ref2.readOnly,
      month = _ref2.month,
      changeMonth = _ref2.changeMonth,
      months = _ref2.months,
      dayNumber = _ref2.dayNumber,
      changeByMonthDay = _ref2.changeByMonthDay,
      className = _ref2.className,
      restProps = _objectWithoutProperties(_ref2, ["classes", "getMessage", "labelComponent", "textEditorComponent", "selectComponent", "readOnly", "month", "changeMonth", "months", "dayNumber", "changeByMonthDay", "className"]);

  return React__default.createElement(FormControlLabel, _extends({
    value: "onDayAndMonth",
    className: classNames(classes.formControl, className),
    classes: {
      label: classes.controlLabel
    },
    control: React__default.createElement(Radio, {
      color: "primary"
    }),
    disabled: readOnly
  }, restProps, {
    label: React__default.createElement(Grid, {
      container: true,
      direction: "row",
      justify: "flex-start",
      alignItems: "center"
    }, React__default.createElement(Label, {
      text: getMessage('everyLabel'),
      className: classes.label
    }), React__default.createElement(Select, {
      className: classes.select,
      value: month,
      onValueChange: changeMonth,
      readOnly: readOnly,
      availableOptions: months
    }), React__default.createElement(TextEditor, {
      className: classes.textEditor,
      readOnly: readOnly,
      value: dayNumber,
      type: NUMBER_EDITOR,
      onValueChange: changeByMonthDay
    }))
  }));
});
ChangeMonthEditorBase.propTypes = {
  classes: object.isRequired,
  getMessage: func,
  labelComponent: oneOfType([func, object]).isRequired,
  textEditorComponent: oneOfType([func, object]).isRequired,
  selectComponent: oneOfType([func, object]).isRequired,
  readOnly: bool,
  month: number.isRequired,
  changeMonth: func.isRequired,
  months: arrayOf(shape({
    id: number.isRequired,
    text: string.isRequired
  })).isRequired,
  dayNumber: number.isRequired,
  changeByMonthDay: func.isRequired,
  className: string
};
ChangeMonthEditorBase.defaultProps = {
  getMessage: function getMessage() {
    return undefined;
  },
  readOnly: false,
  className: undefined
};
var ChangeMonthEditor = withStyles(styles$W)(ChangeMonthEditorBase, {
  name: 'ChangeMonthEditor'
});

var styles$X = function styles(_ref) {
  var spacing = _ref.spacing;
  return {
    label: {
      width: '4.5em'
    },
    select: {
      width: 'calc((100% - 5.5em) * 3 / 7)',
      maxWidth: '8em'
    },
    longSelect: {
      width: 'calc((100% - 5.5em) * 4 / 7)',
      minWidth: 'calc(100% - 13.5em)',
      marginLeft: '1em'
    },
    formControlLabel: {
      alignItems: 'flex-start'
    },
    formControl: {
      marginRight: 0,
      marginTop: spacing(1),
      marginBottom: spacing(1)
    },
    doubleSelect: {
      marginLeft: '4.5em',
      width: 'calc(100% - 4.5em)',
      marginTop: spacing(1)
    },
    radioButton: {
      marginTop: spacing(0.75)
    },
    controlLabel: {
      width: '100%'
    }
  };
};

var ChangeWeekNumberEditorBase = React__default.memo(function (_ref2) {
  var classes = _ref2.classes,
      getMessage = _ref2.getMessage,
      Label = _ref2.labelComponent,
      Select = _ref2.selectComponent,
      readOnly = _ref2.readOnly,
      className = _ref2.className,
      weekNumber = _ref2.weekNumber,
      weekNumbers = _ref2.weekNumbers,
      changeWeekNumber = _ref2.changeWeekNumber,
      month = _ref2.month,
      months = _ref2.months,
      changeMonth = _ref2.changeMonth,
      dayOfWeek = _ref2.dayOfWeek,
      daysOfWeek = _ref2.daysOfWeek,
      changeDayOfWeek = _ref2.changeDayOfWeek,
      restProps = _objectWithoutProperties(_ref2, ["classes", "getMessage", "labelComponent", "selectComponent", "readOnly", "className", "weekNumber", "weekNumbers", "changeWeekNumber", "month", "months", "changeMonth", "dayOfWeek", "daysOfWeek", "changeDayOfWeek"]);

  return React__default.createElement(FormControlLabel, _extends({
    value: "onDayOfWeek",
    className: classNames(classes.formControlLabel, classes.formControl, className),
    classes: {
      label: classes.controlLabel
    },
    control: React__default.createElement(Radio, {
      color: "primary",
      className: classes.radioButton
    }),
    disabled: readOnly
  }, restProps, {
    label: React__default.createElement("div", null, React__default.createElement(Grid, {
      container: true,
      direction: "row",
      justify: "flex-start",
      alignItems: "center"
    }, React__default.createElement(Label, {
      className: classes.label,
      text: getMessage('theLabel')
    }), React__default.createElement(Select, {
      className: classes.select,
      value: weekNumber,
      onValueChange: changeWeekNumber,
      readOnly: readOnly,
      availableOptions: weekNumbers
    }), React__default.createElement(Select, {
      className: classes.longSelect,
      value: dayOfWeek,
      onValueChange: changeDayOfWeek,
      readOnly: readOnly,
      availableOptions: daysOfWeek
    })), React__default.createElement(Select, {
      className: classes.doubleSelect,
      value: month,
      onValueChange: changeMonth,
      readOnly: readOnly,
      availableOptions: months
    }))
  }));
});
ChangeWeekNumberEditorBase.propTypes = {
  classes: object.isRequired,
  getMessage: func,
  labelComponent: oneOfType([func, object]).isRequired,
  selectComponent: oneOfType([func, object]).isRequired,
  readOnly: bool,
  month: number.isRequired,
  changeMonth: func.isRequired,
  months: arrayOf(shape({
    id: number.isRequired,
    text: string.isRequired
  })).isRequired,
  weekNumber: number.isRequired,
  changeWeekNumber: func.isRequired,
  weekNumbers: arrayOf(shape({
    id: number.isRequired,
    text: string.isRequired
  })).isRequired,
  dayOfWeek: number.isRequired,
  changeDayOfWeek: func.isRequired,
  daysOfWeek: arrayOf(shape({
    id: number.isRequired,
    text: string.isRequired
  })).isRequired,
  className: string
};
ChangeWeekNumberEditorBase.defaultProps = {
  getMessage: function getMessage() {
    return undefined;
  },
  readOnly: false,
  className: undefined
};
var ChangeWeekNumberEditor = withStyles(styles$X)(ChangeWeekNumberEditorBase, {
  name: 'ChangeWeekNumberEditor'
});

var getCurrentMonth = function getCurrentMonth(recurrenceOptions, appointmentData) {
  if (recurrenceOptions.bymonth) {
    return recurrenceOptions.bymonth;
  }

  return appointmentData.startDate.getMonth() + 1;
};

var YearlyEditor = function YearlyEditor(_ref) {
  var getMessage = _ref.getMessage,
      Label = _ref.labelComponent,
      TextEditor = _ref.textEditorComponent,
      Select = _ref.selectComponent,
      readOnly = _ref.readOnly,
      appointmentData = _ref.appointmentData,
      formatDate = _ref.formatDate,
      onFieldChange = _ref.onFieldChange,
      firstDayOfWeek = _ref.firstDayOfWeek,
      restProps = _objectWithoutProperties(_ref, ["getMessage", "labelComponent", "textEditorComponent", "selectComponent", "readOnly", "appointmentData", "formatDate", "onFieldChange", "firstDayOfWeek"]);

  var _useState = useState(appointmentData.startDate.getDate()),
      _useState2 = _slicedToArray(_useState, 2),
      dayNumber = _useState2[0],
      setDayNumber = _useState2[1];

  var _useState3 = useState(Math.trunc((appointmentData.startDate.getDate() - 1) / 7)),
      _useState4 = _slicedToArray(_useState3, 2),
      stateWeekNumber = _useState4[0],
      setStateWeekNumber = _useState4[1];

  var _useState5 = useState(appointmentData.startDate.getDay()),
      _useState6 = _slicedToArray(_useState5, 2),
      stateDayOfWeek = _useState6[0],
      setStateDayOfWeek = _useState6[1];

  var rRule = appointmentData.rRule;
  var recurrenceOptions = React__default.useMemo(function () {
    return getRecurrenceOptions(rRule) || {};
  }, [rRule]);
  var changeByMonthDay = React__default.useCallback(function (nextByMonthDay) {
    return onFieldChange({
      rRule: handleStartDateChange(nextByMonthDay, recurrenceOptions)
    });
  }, [recurrenceOptions]);

  var _getRadioGroupDisplay = getRadioGroupDisplayData(recurrenceOptions, stateDayOfWeek, stateWeekNumber, dayNumber, 'onDayAndMonth', 'onDayOfWeek'),
      dayOfWeek = _getRadioGroupDisplay.dayOfWeek,
      weekNumber = _getRadioGroupDisplay.weekNumber,
      dayNumberTextField = _getRadioGroupDisplay.dayNumberTextField,
      value = _getRadioGroupDisplay.radioGroupValue;

  var month = getCurrentMonth(recurrenceOptions, appointmentData);
  var changeMonth = React__default.useCallback(function (nextMonth) {
    return onFieldChange({
      rRule: changeRecurrenceOptions(_objectSpread2({}, recurrenceOptions, {
        bymonth: nextMonth
      }))
    });
  }, [recurrenceOptions]);
  var months = React__default.useMemo(function () {
    return getMonths(formatDate);
  }, [formatDate]);
  var monthsWithOf = React__default.useMemo(function () {
    return getMonthsWithOf(getMessage, formatDate);
  }, [getMessage, formatDate]);
  var changeWeekNumber = React__default.useCallback(function (nextWeekNumber) {
    return onFieldChange({
      rRule: handleWeekNumberChange(nextWeekNumber, recurrenceOptions)
    });
  }, [recurrenceOptions]);
  var weekNumbers = React__default.useMemo(function () {
    return getWeekNumberLabels(getMessage);
  }, [getMessage]);
  var changeDayOfWeek = React__default.useCallback(function (nextDayOfWeek) {
    return onFieldChange({
      rRule: changeRecurrenceOptions(_objectSpread2({}, recurrenceOptions, {
        byweekday: nextDayOfWeek > 0 ? nextDayOfWeek - 1 : 6
      }))
    });
  }, [recurrenceOptions]);
  var daysOfWeek = React__default.useMemo(function () {
    return getDaysOfWeek(formatDate, firstDayOfWeek);
  }, [formatDate, firstDayOfWeek]);
  var onDayAndMonthReadOnly = readOnly || value !== 'onDayAndMonth';
  var onDayOfWeekReadOnly = readOnly || value !== 'onDayOfWeek';

  var onRadioGroupValueChange = function onRadioGroupValueChange(event) {
    switch (event.target.value) {
      case 'onDayAndMonth':
        setStateWeekNumber(weekNumber);
        setStateDayOfWeek(dayOfWeek);
        onFieldChange({
          rRule: changeRecurrenceOptions(_objectSpread2({}, recurrenceOptions, {
            bymonthday: dayNumber,
            byweekday: undefined
          }))
        });
        break;

      case 'onDayOfWeek':
        setDayNumber(recurrenceOptions.bymonthday || dayNumber);
        onFieldChange({
          rRule: handleToDayOfWeekChange(stateWeekNumber, stateDayOfWeek, recurrenceOptions)
        });
        break;
    }
  };

  return React__default.createElement(RadioGroup$1, _extends({
    onChange: onRadioGroupValueChange,
    value: value
  }, restProps), React__default.createElement(ChangeMonthEditor, {
    getMessage: getMessage,
    labelComponent: Label,
    textEditorComponent: TextEditor,
    selectComponent: Select,
    readOnly: onDayAndMonthReadOnly,
    month: month,
    changeMonth: changeMonth,
    months: months,
    dayNumber: dayNumberTextField,
    changeByMonthDay: changeByMonthDay
  }), React__default.createElement(ChangeWeekNumberEditor, {
    getMessage: getMessage,
    labelComponent: Label,
    selectComponent: Select,
    readOnly: onDayOfWeekReadOnly,
    month: month,
    changeMonth: changeMonth,
    months: monthsWithOf,
    weekNumber: weekNumber,
    weekNumbers: weekNumbers,
    changeWeekNumber: changeWeekNumber,
    dayOfWeek: dayOfWeek,
    daysOfWeek: daysOfWeek,
    changeDayOfWeek: changeDayOfWeek
  }));
};
process.env.NODE_ENV !== "production" ? YearlyEditor.propTypes = {
  getMessage: func,
  onFieldChange: func,
  labelComponent: oneOfType([func, object]).isRequired,
  textEditorComponent: oneOfType([func, object]).isRequired,
  selectComponent: oneOfType([func, object]).isRequired,
  appointmentData: shape({
    title: string,
    startDate: instanceOf(Date),
    endDate: instanceOf(Date),
    rRule: string,
    notes: string,
    additionalInformation: string,
    allDay: bool
  }).isRequired,
  formatDate: func.isRequired,
  readOnly: bool,
  firstDayOfWeek: number.isRequired
} : void 0;
YearlyEditor.defaultProps = {
  onFieldChange: function onFieldChange() {
    return undefined;
  },
  getMessage: function getMessage() {
    return undefined;
  },
  readOnly: false
};

var RadioGroup = function RadioGroup(_ref) {
  var dateEditorComponent = _ref.dateEditorComponent,
      textEditorComponent = _ref.textEditorComponent,
      selectComponent = _ref.selectComponent,
      labelComponent = _ref.labelComponent,
      getMessage = _ref.getMessage,
      readOnly = _ref.readOnly,
      appointmentData = _ref.appointmentData,
      formatDate = _ref.formatDate,
      onFieldChange = _ref.onFieldChange,
      type = _ref.type,
      locale = _ref.locale,
      firstDayOfWeek = _ref.firstDayOfWeek,
      restProps = _objectWithoutProperties(_ref, ["dateEditorComponent", "textEditorComponent", "selectComponent", "labelComponent", "getMessage", "readOnly", "appointmentData", "formatDate", "onFieldChange", "type", "locale", "firstDayOfWeek"]);

  var commonProps = {
    readOnly: readOnly,
    getMessage: getMessage,
    textEditorComponent: textEditorComponent,
    labelComponent: labelComponent,
    appointmentData: appointmentData,
    onFieldChange: onFieldChange
  };

  switch (type) {
    case END_REPEAT_RADIO_GROUP:
      return createElement(EndRepeatEditor, _extends({
        dateEditorComponent: dateEditorComponent,
        locale: locale
      }, commonProps, restProps));

    case MONTHLY_RADIO_GROUP:
      return createElement(MonthlyEditor, _extends({
        selectComponent: selectComponent,
        formatDate: formatDate,
        firstDayOfWeek: firstDayOfWeek
      }, commonProps, restProps));

    case YEARLY_RADIO_GROUP:
      return createElement(YearlyEditor, _extends({
        selectComponent: selectComponent,
        formatDate: formatDate,
        firstDayOfWeek: firstDayOfWeek
      }, commonProps, restProps));

    default:
      return function () {
        return null;
      };
  }
};
process.env.NODE_ENV !== "production" ? RadioGroup.propTypes = {
  getMessage: func.isRequired,
  labelComponent: oneOfType([func, object]).isRequired,
  textEditorComponent: oneOfType([func, object]).isRequired,
  dateEditorComponent: oneOfType([func, object]).isRequired,
  selectComponent: oneOfType([func, object]).isRequired,
  locale: oneOfType([string, arrayOf(string)]),
  readOnly: bool,
  type: string.isRequired,
  appointmentData: shape({
    title: string,
    startDate: instanceOf(Date),
    endDate: instanceOf(Date),
    rRule: string,
    notes: string,
    additionalInformation: string,
    allDay: bool
  }).isRequired,
  onFieldChange: func.isRequired,
  formatDate: func.isRequired,
  firstDayOfWeek: number.isRequired
} : void 0;
RadioGroup.defaultProps = {
  locale: undefined,
  readOnly: false
};

var styles$Y = function styles(_ref) {
  var palette = _ref.palette,
      spacing = _ref.spacing;
  return {
    selectedButton: {
      backgroundColor: setColor(400, palette.primary),
      '&:hover': {
        backgroundColor: setColor(500, palette.primary)
      },
      border: "1px solid ".concat(setColor(400, palette.primary), "!important"),
      borderLeft: "1px solid ".concat(setColor(50, palette.primary), "!important"),
      '&:first-child': {
        borderLeft: "1px solid ".concat(setColor(400, palette.primary), "!important")
      },
      color: setColor(50, palette.primary)
    },
    button: {
      minWidth: spacing(3)
    },
    buttonGroup: {
      marginBottom: spacing(2)
    }
  };
};

var isCurrentWeekDay = function isCurrentWeekDay(recurrenceOptions, weekDay) {
  return recurrenceOptions.byweekday && recurrenceOptions.byweekday.indexOf(weekDay) > -1;
};

var WeeklyRecurrenceSelectorBase = React__default.memo(function (_ref2) {
  var formatDate = _ref2.formatDate,
      rRule = _ref2.rRule,
      readOnly = _ref2.readOnly,
      classes = _ref2.classes,
      className = _ref2.className,
      onValueChange = _ref2.onValueChange,
      firstDayOfWeek = _ref2.firstDayOfWeek,
      restProps = _objectWithoutProperties(_ref2, ["formatDate", "rRule", "readOnly", "classes", "className", "onValueChange", "firstDayOfWeek"]);

  var recurrenceOptions = getRecurrenceOptions(rRule);
  var daysOfWeekArray = getDaysOfWeekArray(firstDayOfWeek);
  var daysOfWeekDates = getDaysOfWeekDates(firstDayOfWeek);
  return React__default.createElement(ButtonGroup, _extends({
    variant: "outlined",
    size: "small",
    disabled: readOnly,
    className: classNames(classes.buttonGroup, className),
    fullWidth: true
  }, restProps), daysOfWeekArray.map(function (dayOfWeek, index) {
    var _classNames;

    return React__default.createElement(Button$1, {
      className: classNames((_classNames = {}, _defineProperty(_classNames, classes.button, true), _defineProperty(_classNames, classes.selectedButton, isCurrentWeekDay(recurrenceOptions, dayOfWeek)), _classNames)),
      key: dayOfWeek,
      onClick: function onClick() {
        return onValueChange({
          rRule: changeRecurrenceOptions(handleWeekDaysChange(recurrenceOptions, dayOfWeek, onValueChange))
        });
      }
    }, formatDate(daysOfWeekDates[index], WEEK_DAY_OPTIONS));
  }));
});
process.env.NODE_ENV !== "production" ? WeeklyRecurrenceSelectorBase.propTypes = {
  formatDate: func.isRequired,
  classes: object.isRequired,
  rRule: string.isRequired,
  onValueChange: func,
  readOnly: bool,
  className: string,
  firstDayOfWeek: number.isRequired
} : void 0;
WeeklyRecurrenceSelectorBase.defaultProps = {
  onValueChange: function onValueChange() {
    return undefined;
  },
  readOnly: false,
  className: undefined
};
var WeeklyRecurrenceSelector = withStyles(styles$Y)(WeeklyRecurrenceSelectorBase, {
  name: 'WeeklyRecurrenceSelector'
});

var styles$Z = {
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
};
var OverlayContainerBase = forwardRef(function (_ref, ref) {
  var children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, ["children", "classes", "className"]);

  return createElement("div", _extends({
    ref: ref,
    className: classNames(classes.container, className)
  }, restProps), children);
});
OverlayContainerBase.propTypes = {
  classes: object.isRequired,
  children: node,
  className: string
};
OverlayContainerBase.defaultProps = {
  children: null,
  className: undefined
};
var OverlayContainer = withStyles(styles$Z, {
  name: 'OverlayContainer'
})(OverlayContainerBase);

var AppointmentForm = withComponents({
  Overlay: Overlay$1,
  Layout: Layout$6,
  TextEditor: TextEditor,
  BasicLayout: Layout$7,
  CommandLayout: Layout$8,
  CommandButton: CommandButton$1,
  DateEditor: DateEditor,
  Label: Label$1,
  BooleanEditor: BooleanEditor,
  Select: Select,
  RecurrenceLayout: Layout$9,
  RadioGroup: RadioGroup,
  WeeklyRecurrenceSelector: WeeklyRecurrenceSelector,
  Container: OverlayContainer
})(AppointmentForm$1);

var draftStyles = function draftStyles(theme) {
  return {
    appointment: {
      boxShadow: theme.shadows[3],
      cursor: 'move',
      overflow: 'hidden',
      backgroundColor: setColor(600, theme.palette.primary),
      border: 0
    }
  };
};

var sourceStyles = {
  appointment: {
    opacity: 0.5
  }
};

var DraftAppointmentBase = function DraftAppointmentBase(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      data = _ref.data,
      formatDate = _ref.formatDate,
      type = _ref.type,
      fromPrev = _ref.fromPrev,
      toNext = _ref.toNext,
      durationType = _ref.durationType,
      restProps = _objectWithoutProperties(_ref, ["classes", "className", "data", "formatDate", "type", "fromPrev", "toNext", "durationType"]);

  return createElement(Appointment, _extends({
    className: classNames(classes.appointment, className),
    type: type
  }, restProps), fromPrev && createElement(SplitIndicator, {
    position: POSITION_START,
    appointmentType: type
  }), createElement(AppointmentContent, {
    data: data,
    type: type,
    recurringIconComponent: Repeat,
    formatDate: formatDate,
    durationType: durationType
  }), toNext && createElement(SplitIndicator, {
    position: POSITION_END,
    appointmentType: type
  }));
};

process.env.NODE_ENV !== "production" ? DraftAppointmentBase.propTypes = {
  classes: object.isRequired,
  data: object.isRequired,
  fromPrev: bool.isRequired,
  toNext: bool.isRequired,
  formatDate: func.isRequired,
  durationType: string,
  className: string,
  type: string
} : void 0;
DraftAppointmentBase.defaultProps = {
  durationType: undefined,
  className: undefined,
  type: undefined
};
var DraftAppointment = withStyles(draftStyles, {
  name: 'DraftAppointment'
})(DraftAppointmentBase);
var SourceAppointment = withStyles(sourceStyles, {
  name: 'SourceAppointment'
})(DraftAppointmentBase);

var styles$_ = {
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
    cursor: 'move'
  }
};
var Container$2 = withStyles(styles$_, {
  name: 'DragDropContainer'
})(ContainerBase);

var verticalStyles$1 = function verticalStyles(spacing) {
  return {
    width: '100%',
    height: spacing(1),
    cursor: 'ns-resize'
  };
};

var horizontalStyles$1 = function horizontalStyles(spacing) {
  return {
    width: spacing(1),
    height: '100%',
    cursor: 'ew-resize'
  };
};

var styles$$ = function styles(_ref) {
  var spacing = _ref.spacing;
  var vertical = verticalStyles$1(spacing);
  var horizontal = horizontalStyles$1(spacing);
  return {
    resize: {
      position: 'absolute',
      zIndex: 100
    },
    verticalStart: _objectSpread2({}, vertical, {
      top: 0
    }),
    verticalEnd: _objectSpread2({}, vertical, {
      bottom: 0
    }),
    horizontalStart: _objectSpread2({}, horizontal, {
      left: 0
    }),
    horizontalEnd: _objectSpread2({}, horizontal, {
      right: 0
    })
  };
};

var ResizeBase = memo(function (_ref2) {
  var _classNames;

  var classes = _ref2.classes,
      className = _ref2.className,
      position = _ref2.position,
      appointmentType = _ref2.appointmentType,
      restProps = _objectWithoutProperties(_ref2, ["classes", "className", "position", "appointmentType"]);

  var vertical = appointmentType === VERTICAL_TYPE;
  var start = position === POSITION_START;
  return createElement("div", _extends({
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes.resize, true), _defineProperty(_classNames, classes.verticalStart, vertical && start), _defineProperty(_classNames, classes.verticalEnd, vertical && !start), _defineProperty(_classNames, classes.horizontalStart, !vertical && start), _defineProperty(_classNames, classes.horizontalEnd, !vertical && !start), _classNames), className)
  }, restProps));
});
process.env.NODE_ENV !== "production" ? ResizeBase.propTypes = {
  classes: object.isRequired,
  position: oneOf([POSITION_START, POSITION_END]).isRequired,
  appointmentType: oneOf([HORIZONTAL_TYPE, VERTICAL_TYPE]).isRequired,
  className: string
} : void 0;
ResizeBase.defaultProps = {
  className: undefined
};
var Resize = withStyles(styles$$, {
  name: 'Resize'
})(ResizeBase);

var DragDropProvider = withComponents({
  DraftAppointment: DraftAppointment,
  SourceAppointment: SourceAppointment,
  Container: Container$2,
  Resize: Resize
})(DragDropProvider$1);

var styles$10 = function styles(_ref) {
  var spacing = _ref.spacing;
  return {
    button: {
      padding: spacing(0.8, 2),
      marginLeft: spacing(0.5),
      '&:first-child': {
        marginLeft: 0
      },
      '@media (max-width: 700px)': {
        fontSize: '0.75rem'
      }
    }
  };
};

var TodayButtonBase = function TodayButtonBase(_ref2) {
  var setCurrentDate = _ref2.setCurrentDate,
      classes = _ref2.classes,
      getMessage = _ref2.getMessage,
      className = _ref2.className,
      restProps = _objectWithoutProperties(_ref2, ["setCurrentDate", "classes", "getMessage", "className"]);

  var handleClick = function handleClick() {
    setCurrentDate(new Date());
  };

  return createElement(Button$1, _extends({
    className: classNames(classes.button, className),
    variant: "outlined",
    onClick: handleClick
  }, restProps), getMessage('today'));
};

process.env.NODE_ENV !== "production" ? TodayButtonBase.propTypes = {
  setCurrentDate: func.isRequired,
  classes: object.isRequired,
  className: string,
  getMessage: func.isRequired
} : void 0;
TodayButtonBase.defaultProps = {
  className: undefined
};
var TodayButton = withStyles(styles$10)(TodayButtonBase, {
  name: 'TodayButton'
});

var TodayButton$1 = withComponents({
  Button: TodayButton
})(TodayButton$2);

var styles$11 = {
  modal: {
    position: 'absolute!important'
  },
  paper: {
    zIndex: '1302!important'
  },
  root: {
    zIndex: '1301!important'
  }
};

var OverlayBase$1 = function OverlayBase(_ref) {
  var children = _ref.children,
      visible = _ref.visible,
      onHide = _ref.onHide,
      target = _ref.target,
      classes = _ref.classes,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, ["children", "visible", "onHide", "target", "classes", "className"]);

  return createElement(Dialog, _extends({
    open: visible,
    onClose: onHide,
    className: classNames(classes.modal, classes.root, className),
    BackdropProps: {
      className: classes.modal
    },
    PaperProps: {
      className: classes.paper
    },
    container: target.current,
    onBackdropClick: onHide
  }, restProps), children);
};

process.env.NODE_ENV !== "production" ? OverlayBase$1.propTypes = {
  children: node.isRequired,
  classes: object.isRequired,
  onHide: func.isRequired,
  target: object.isRequired,
  visible: bool,
  className: string
} : void 0;
OverlayBase$1.defaultProps = {
  className: undefined,
  visible: false
};
var Overlay$2 = withStyles(styles$11, {
  name: 'Overlay'
})(OverlayBase$1);

var styles$12 = function styles(_ref) {
  var typography = _ref.typography;
  return {
    title: typography.h6,
    content: {
      fontSize: '1rem'
    },
    '@media (max-width: 500px)': {
      title: {
        fontSize: '1.1rem'
      },
      content: {
        fontSize: '0.9rem'
      }
    }
  };
};

var LayoutBase$b = memo(function (_ref2) {
  var Button = _ref2.buttonComponent,
      handleClose = _ref2.handleClose,
      commit = _ref2.commit,
      availableOperations = _ref2.availableOperations,
      getMessage = _ref2.getMessage,
      isDeleting = _ref2.isDeleting,
      classes = _ref2.classes,
      restProps = _objectWithoutProperties(_ref2, ["buttonComponent", "handleClose", "commit", "availableOperations", "getMessage", "isDeleting", "classes"]);

  var _React$useState = useState(availableOperations[0].value),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      currentValue = _React$useState2[0],
      setCurrentValue = _React$useState2[1];

  var handleChange = useCallback(function (event) {
    setCurrentValue(event.target.value);
  });

  var onCommitButtonClick = function onCommitButtonClick() {
    commit(currentValue);
  };

  return createElement("div", restProps, createElement(DialogTitle, {
    className: classes.title,
    disableTypography: true
  }, getMessage(isDeleting ? 'menuDeleteTitle' : 'menuEditTitle')), createElement(DialogContent, null, createElement(RadioGroup$1, {
    value: currentValue,
    onChange: handleChange
  }, availableOperations.map(function (operation) {
    return createElement(FormControlLabel, {
      value: operation.value,
      control: createElement(Radio, null),
      label: operation.title,
      key: operation.value,
      classes: {
        label: classes.content
      }
    });
  }))), createElement(DialogActions, null, createElement(Button, {
    onClick: handleClose,
    title: getMessage('cancelButton')
  }), createElement(Button, {
    onClick: onCommitButtonClick,
    title: getMessage('commitButton'),
    color: "primary"
  })));
});
process.env.NODE_ENV !== "production" ? LayoutBase$b.propTypes = {
  buttonComponent: oneOfType([func, object]).isRequired,
  availableOperations: array.isRequired,
  handleClose: func,
  commit: func,
  getMessage: func,
  isDeleting: bool,
  classes: object.isRequired
} : void 0;
LayoutBase$b.defaultProps = {
  handleClose: function handleClose() {
    return undefined;
  },
  commit: function commit() {
    return undefined;
  },
  getMessage: function getMessage() {
    return undefined;
  },
  isDeleting: false
};
var Layout$a = withStyles(styles$12, {
  name: 'Layout'
})(LayoutBase$b);

var Button = function Button(_ref) {
  var onClick = _ref.onClick,
      title = _ref.title,
      restProps = _objectWithoutProperties(_ref, ["onClick", "title"]);

  return createElement(Button$1, _extends({
    onClick: onClick
  }, restProps), title);
};
process.env.NODE_ENV !== "production" ? Button.propTypes = {
  onClick: func.isRequired,
  title: string
} : void 0;
Button.defaultProps = {
  title: ''
};

var EditRecurrenceMenu = withComponents({
  Layout: Layout$a,
  Overlay: Overlay$2,
  Button: Button,
  Container: OverlayContainer
})(EditRecurrenceMenu$1);

var styles$13 = function styles(_ref) {
  var typography = _ref.typography;
  return {
    title: _objectSpread2({}, typography.h6),
    '@media (max-width: 500px)': {
      title: {
        fontSize: '1.1rem'
      }
    }
  };
};

var LayoutBase$c = memo(function (_ref2) {
  var Button = _ref2.buttonComponent,
      handleCancel = _ref2.handleCancel,
      handleConfirm = _ref2.handleConfirm,
      getMessage = _ref2.getMessage,
      isDeleting = _ref2.isDeleting,
      appointmentData = _ref2.appointmentData,
      classes = _ref2.classes,
      restProps = _objectWithoutProperties(_ref2, ["buttonComponent", "handleCancel", "handleConfirm", "getMessage", "isDeleting", "appointmentData", "classes"]);

  return createElement("div", restProps, createElement(DialogTitle, {
    className: classes.title,
    disableTypography: true
  }, getMessage(isDeleting ? 'confirmDeleteMessage' : 'confirmCancelMessage')), createElement(DialogActions, null, createElement(Button, {
    onClick: handleCancel,
    title: getMessage('cancelButton')
  }), createElement(Button, {
    onClick: handleConfirm,
    title: getMessage(isDeleting ? 'deleteButton' : 'discardButton'),
    color: "primary"
  })));
});
LayoutBase$c.propTypes = {
  buttonComponent: oneOfType([func, object]).isRequired,
  handleCancel: func,
  handleConfirm: func,
  getMessage: func,
  isDeleting: bool,
  appointmentData: shape({
    title: string,
    startDate: instanceOf(Date),
    endDate: instanceOf(Date),
    rRule: string,
    notes: string,
    additionalInformation: string,
    allDay: bool
  }),
  classes: object.isRequired
};
LayoutBase$c.defaultProps = {
  handleCancel: function handleCancel() {
    return undefined;
  },
  handleConfirm: function handleConfirm() {
    return undefined;
  },
  getMessage: function getMessage() {
    return undefined;
  },
  isDeleting: false,
  appointmentData: {
    startDate: new Date(),
    endDate: new Date()
  }
};
var Layout$b = withStyles(styles$13, {
  name: 'Layout'
})(LayoutBase$c);

var ConfirmationDialog = withComponents({
  Overlay: Overlay$2,
  Layout: Layout$b,
  Container: OverlayContainer,
  Button: Button
})(ConfirmationDialog$1);

export { AllDayPanel, AppointmentForm, AppointmentTooltip, Appointments, ConfirmationDialog, DateNavigator, DayView, DragDropProvider, EditRecurrenceMenu, MonthView, Scheduler, TodayButton$1 as TodayButton, Toolbar$1 as Toolbar, ViewSwitcher, WeekView };
//# sourceMappingURL=dx-react-scheduler-material-ui.es.js.map
