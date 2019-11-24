/**
 * Bundle of @devexpress/dx-react-scheduler-material-ui
 * Generated: 2019-11-07
 * Version: 2.2.1
 * License: https://js.devexpress.com/Licensing
 */

'use strict';

if (typeof process === "undefined") { var process = { env: {} }; }

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = require('prop-types');
var dxReactScheduler = require('@devexpress/dx-react-scheduler');
var styles$14 = require('@material-ui/core/styles');
var dxSchedulerCore = require('@devexpress/dx-scheduler-core');
var classNames = _interopDefault(require('clsx'));
var dxReactCore = require('@devexpress/dx-react-core');
var Grid = _interopDefault(require('@material-ui/core/Grid'));
var colorManipulator = require('@material-ui/core/styles/colorManipulator');
var colors = require('@material-ui/core/colors');
var TableRow = _interopDefault(require('@material-ui/core/TableRow'));
var TableMUI = _interopDefault(require('@material-ui/core/Table'));
var TableBody = _interopDefault(require('@material-ui/core/TableBody'));
var TableCell = _interopDefault(require('@material-ui/core/TableCell'));
var Repeat = _interopDefault(require('@material-ui/icons/Repeat'));
var ToolbarMUI = _interopDefault(require('@material-ui/core/Toolbar'));
var Popover = _interopDefault(require('@material-ui/core/Popover'));
var Button$1 = _interopDefault(require('@material-ui/core/Button'));
var CalendarToday = _interopDefault(require('@material-ui/icons/CalendarToday'));
var IconButton = _interopDefault(require('@material-ui/core/IconButton'));
var ChevronLeft = _interopDefault(require('@material-ui/icons/ChevronLeft'));
var ChevronRight = _interopDefault(require('@material-ui/icons/ChevronRight'));
var moment = _interopDefault(require('moment'));
var TableHead = _interopDefault(require('@material-ui/core/TableHead'));
var Typography = _interopDefault(require('@material-ui/core/Typography'));
var AccessTime = _interopDefault(require('@material-ui/icons/AccessTime'));
var Lens = _interopDefault(require('@material-ui/icons/Lens'));
var EditIcon = _interopDefault(require('@material-ui/icons/Edit'));
var CloseIcon = _interopDefault(require('@material-ui/icons/Close'));
var DeleteIcon = _interopDefault(require('@material-ui/icons/Delete'));
var Select$1 = _interopDefault(require('@material-ui/core/Select'));
var MenuItem = _interopDefault(require('@material-ui/core/MenuItem'));
var OutlinedInput = _interopDefault(require('@material-ui/core/OutlinedInput'));
var TextField = _interopDefault(require('@material-ui/core/TextField'));
var Drawer = _interopDefault(require('@material-ui/core/Drawer'));
var MomentUtils = _interopDefault(require('@date-io/moment'));
var pickers = require('@material-ui/pickers');
var Checkbox = _interopDefault(require('@material-ui/core/Checkbox'));
var FormControlLabel = _interopDefault(require('@material-ui/core/FormControlLabel'));
var RadioGroup$1 = _interopDefault(require('@material-ui/core/RadioGroup'));
var Radio = _interopDefault(require('@material-ui/core/Radio'));
var InputAdornment = _interopDefault(require('@material-ui/core/InputAdornment'));
var ButtonGroup = _interopDefault(require('@material-ui/core/ButtonGroup'));
var Dialog = _interopDefault(require('@material-ui/core/Dialog'));
var DialogActions = _interopDefault(require('@material-ui/core/DialogActions'));
var DialogContent = _interopDefault(require('@material-ui/core/DialogContent'));
var DialogTitle = _interopDefault(require('@material-ui/core/DialogTitle'));

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

  return React.createElement("div", _extends({
    className: classNames(classes.container, className)
  }, restProps), children);
};
process.env.NODE_ENV !== "production" ? ContainerBase.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
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

  var containerStyle = height === dxSchedulerCore.AUTO_HEIGHT ? {
    height: '100%'
  } : {
    height: "".concat(height, "px")
  };
  return React.createElement(ContainerBase, _extends({
    style: _objectSpread2({}, containerStyle, {}, style)
  }, restProps));
};
process.env.NODE_ENV !== "production" ? LayoutBase.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  style: PropTypes.object
} : void 0;
LayoutBase.defaultProps = {
  style: null
};
var Root = styles$14.withStyles(styles, {
  name: 'Root'
})(LayoutBase);

var Scheduler = function Scheduler(_ref) {
  var children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(dxReactScheduler.Scheduler, _extends({
    rootComponent: Root
  }, restProps), children);
};
Scheduler.Root = Root;
process.env.NODE_ENV !== "production" ? Scheduler.propTypes = {
  children: PropTypes.node.isRequired
} : void 0;

var PRIMARY_COLOR = colors.blue;
var TRANSITIONS_TIME = 400;

var getBorder = function getBorder(theme) {
  return "1px solid ".concat(theme.palette.type === 'light' ? colorManipulator.lighten(colorManipulator.fade(theme.palette.divider, 1), 0.88) : colorManipulator.darken(colorManipulator.fade(theme.palette.divider, 1), 0.68));
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
    _this.layout = React.createRef();
    _this.layoutHeader = React.createRef();
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

      return React.createElement(Grid, _extends({
        ref: this.layout,
        container: true,
        className: classNames(classes.container, className),
        direction: "column",
        wrap: "nowrap"
      }, restProps), React.createElement("div", null, React.createElement(Grid, {
        item: true,
        xs: "auto",
        className: classes.stickyHeader
      }, React.createElement(Grid, {
        ref: this.layoutHeader,
        container: true,
        direction: "row"
      }, React.createElement("div", {
        className: classes.fixedWidth
      }, React.createElement(DayScaleEmptyCell, null)), React.createElement("div", {
        className: classes.mainTable
      }, React.createElement(DayScale, null)))), React.createElement(Grid, {
        item: true,
        xs: "auto"
      }, React.createElement(Grid, {
        container: true,
        direction: "row"
      }, React.createElement("div", {
        className: classes.fixedWidth
      }, React.createElement(TimeScale, null)), React.createElement("div", {
        className: classNames(classes.timeTable, classes.mainTable)
      }, React.createElement(TimeTable, null))))));
    }
  }]);

  return VerticalViewLayoutBase;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? VerticalViewLayoutBase.propTypes = {
  // oneOfType is a workaround because withStyles returns react object
  timeScaleComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  dayScaleComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  timeTableComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  dayScaleEmptyCellComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  setScrollingStrategy: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
} : void 0;
VerticalViewLayoutBase.defaultProps = {
  className: undefined
};
var VerticalViewLayout = styles$14.withStyles(styles$1, {
  name: 'VerticalViewLayout'
})(VerticalViewLayoutBase);

var Row = function Row(_ref) {
  var children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(TableRow, restProps, children);
};
process.env.NODE_ENV !== "production" ? Row.propTypes = {
  children: PropTypes.node
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

  return React.createElement("div", _extends({}, restProps, {
    className: classNames(classes.emptyCell, className)
  }), children);
};
process.env.NODE_ENV !== "production" ? DayScaleEmptyCellBase.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.node
} : void 0;
DayScaleEmptyCellBase.defaultProps = {
  className: undefined,
  children: undefined
};
var DayScaleEmptyCell = styles$14.withStyles(styles$2, {
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
var Container = styles$14.withStyles(styles$3, {
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

  return React.createElement(TableMUI, _extends({}, restProps, {
    className: classNames(classes.table, className)
  }), React.createElement(TableBody, null, cellsData.map(function (days) {
    return React.createElement(Row, {
      key: days[0].startDate
    }, React.createElement(Cell, {
      key: days[0].endDate
    }));
  })));
};

process.env.NODE_ENV !== "production" ? TicksLayoutBase.propTypes = {
  cellsData: PropTypes.arrayOf(Array).isRequired,
  cellComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  rowComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
} : void 0;
TicksLayoutBase.defaultProps = {
  className: undefined
};
var TicksLayout = styles$14.withStyles(styles$4, {
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

  return React.createElement(Grid, _extends({
    container: true,
    direction: "row"
  }, restProps), React.createElement("div", {
    className: classes.timeScale
  }, React.createElement(Label, {
    key: cellsData[0][0].startDate
  }), cellsData.map(function (days, index) {
    return index !== cellsData.length - 1 && React.createElement(Label, {
      time: days[0].endDate,
      formatDate: formatDate,
      key: days[0].endDate
    });
  }), React.createElement(Label, {
    key: cellsData[cellsData.length - 1][0].endDate
  })), React.createElement(TicksLayout, {
    rowComponent: rowComponent,
    cellComponent: tickCellComponent,
    cellsData: cellsData,
    className: classes.ticks
  }));
};

process.env.NODE_ENV !== "production" ? LayoutBase$1.propTypes = {
  cellsData: PropTypes.arrayOf(Array).isRequired,
  labelComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  rowComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  tickCellComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  formatDate: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
} : void 0;
var Layout = styles$14.withStyles(styles$5, {
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

var LabelBase = React.memo(function (_ref) {
  var _classNames;

  var classes = _ref.classes,
      className = _ref.className,
      time = _ref.time,
      formatDate = _ref.formatDate,
      restProps = _objectWithoutProperties(_ref, ["classes", "className", "time", "formatDate"]);

  return React.createElement("div", _extends({
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes.label, true), _defineProperty(_classNames, classes.emptyLabel, !time), _classNames), className)
  }, restProps), time && React.createElement("span", {
    className: classes.text
  }, formatDate(time, dxSchedulerCore.HOUR_MINUTE_OPTIONS)));
});
LabelBase.propTypes = {
  formatDate: PropTypes.func,
  time: PropTypes.instanceOf(Date),
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};
LabelBase.defaultProps = {
  className: undefined,
  time: undefined,
  formatDate: function formatDate() {
    return undefined;
  }
};
var Label = styles$14.withStyles(styles$6, {
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

  return React.createElement(TableCell, _extends({
    className: classNames(classes.cell, className)
  }, restProps));
};

process.env.NODE_ENV !== "production" ? TickCellBase.propTypes = {
  classes: PropTypes.object.isRequired,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  className: PropTypes.string
} : void 0;
TickCellBase.defaultProps = {
  className: undefined,
  startDate: undefined,
  endDate: undefined
};
var TickCell = styles$14.withStyles(styles$7, {
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
    _this.table = React.createRef();
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

      return React.createElement(TableMUI, _extends({
        ref: this.table,
        className: classNames(classes.table, className)
      }, restProps), React.createElement(TableBody, null, cellsData.map(function (days, index) {
        return React.createElement(Row, {
          key: index.toString()
        }, days.map(function (_ref) {
          var startDate = _ref.startDate,
              endDate = _ref.endDate;
          return React.createElement(Cell, {
            key: startDate,
            startDate: startDate,
            endDate: endDate
          });
        }));
      })));
    }
  }]);

  return LayoutBase;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? LayoutBase$2.propTypes = {
  // oneOfType is a workaround because withStyles returns react object
  classes: PropTypes.object.isRequired,
  cellsData: PropTypes.arrayOf(Array).isRequired,
  cellComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  rowComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  formatDate: PropTypes.func.isRequired,
  setCellElementsMeta: PropTypes.func.isRequired,
  className: PropTypes.string
} : void 0;
LayoutBase$2.defaultProps = {
  className: undefined
};
var Layout$1 = styles$14.withStyles(styles$8, {
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
        backgroundColor: colorManipulator.fade(theme.palette.primary.main, 0.15),
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

  return React.createElement(TableCell, _extends({
    tabIndex: 0,
    className: classNames(classes.cell, className)
  }, restProps), children);
};

process.env.NODE_ENV !== "production" ? CellBase.propTypes = {
  classes: PropTypes.object.isRequired,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  children: PropTypes.node,
  className: PropTypes.string
} : void 0;
CellBase.defaultProps = {
  children: null,
  className: undefined,
  startDate: undefined,
  endDate: undefined
};
var Cell = styles$14.withStyles(styles$9, {
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

  return React.createElement(TableMUI, _extends({
    className: classNames(classes.table, className)
  }, restProps), React.createElement(TableBody, null, React.createElement(Row, null, cellsData[0].map(function (_ref2, index) {
    var startDate = _ref2.startDate,
        endDate = _ref2.endDate,
        today = _ref2.today;
    return React.createElement(Cell, {
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
  classes: PropTypes.object.isRequired,
  cellsData: PropTypes.arrayOf(Array).isRequired,
  cellComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  rowComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  formatDate: PropTypes.func.isRequired,
  className: PropTypes.string
} : void 0;
LayoutBase$3.defaultProps = {
  className: undefined
};
var Layout$2 = styles$14.withStyles(styles$a, {
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

var CellBase$1 = React.memo(function (_ref) {
  var _classNames, _classNames2;

  var classes = _ref.classes,
      className = _ref.className,
      startDate = _ref.startDate,
      endDate = _ref.endDate,
      today = _ref.today,
      formatDate = _ref.formatDate,
      restProps = _objectWithoutProperties(_ref, ["classes", "className", "startDate", "endDate", "today", "formatDate"]);

  return React.createElement(TableCell, _extends({
    className: classNames(classes.cell, className)
  }, restProps), React.createElement("div", {
    className: classes.dayView
  }, React.createElement("p", {
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes.dayOfWeek, true), _defineProperty(_classNames, classes.highlight, today), _classNames))
  }, formatDate(startDate, dxSchedulerCore.WEEK_DAY_OPTIONS)), React.createElement("div", {
    className: classNames((_classNames2 = {}, _defineProperty(_classNames2, classes.dayOfMonth, true), _defineProperty(_classNames2, classes.today, today), _classNames2))
  }, formatDate(startDate, dxSchedulerCore.DAY_OPTIONS))));
});
CellBase$1.propTypes = {
  classes: PropTypes.object.isRequired,
  formatDate: PropTypes.func.isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date),
  className: PropTypes.string,
  today: PropTypes.bool
};
CellBase$1.defaultProps = {
  className: undefined,
  endDate: undefined,
  today: false
};
var Cell$1 = styles$14.withStyles(styles$b, {
  name: 'Cell'
})(CellBase$1);

var DayView = dxReactCore.withComponents({
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
})(dxReactScheduler.DayView);

var WeekView = dxReactCore.withComponents({
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
})(dxReactScheduler.WeekView);

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
    _this.layout = React.createRef();
    _this.layoutHeader = React.createRef();
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

      return React.createElement(Grid, _extends({
        ref: this.layout,
        className: classNames(classes.container, className),
        container: true,
        direction: "column",
        wrap: "nowrap"
      }, restProps), React.createElement("div", null, React.createElement(Grid, {
        ref: this.layoutHeader,
        item: true,
        className: classes.stickyHeader
      }, React.createElement(DayScale, null)), React.createElement(Grid, {
        item: true,
        className: classes.timeTable
      }, React.createElement(TimeTable, null))));
    }
  }]);

  return HorizontalViewLayoutBase;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? HorizontalViewLayoutBase.propTypes = {
  // oneOfType is a workaround because withStyles returns react object
  dayScaleComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  timeTableComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  setScrollingStrategy: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
} : void 0;
HorizontalViewLayoutBase.defaultProps = {
  className: undefined
};
var HorizontalViewLayout = styles$14.withStyles(styles$c, {
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
    _this.table = React.createRef();
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

      return React.createElement(TableMUI, _extends({
        ref: this.table,
        className: classNames(classes.table, className)
      }, restProps), React.createElement(TableBody, null, cellsData.map(function (row) {
        return React.createElement(Row, {
          key: row[0].startDate.toString()
        }, row.map(function (_ref) {
          var startDate = _ref.startDate,
              endDate = _ref.endDate,
              today = _ref.today,
              otherMonth = _ref.otherMonth;
          return React.createElement(Cell, {
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
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? LayoutBase$4.propTypes = {
  // oneOfType is a workaround because withStyles returns react object
  cellsData: PropTypes.arrayOf(Array).isRequired,
  classes: PropTypes.object.isRequired,
  cellComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  rowComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  formatDate: PropTypes.func.isRequired,
  setCellElementsMeta: PropTypes.func.isRequired,
  className: PropTypes.string
} : void 0;
LayoutBase$4.defaultProps = {
  className: undefined
};
var Layout$3 = styles$14.withStyles(styles$d, {
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
        backgroundColor: colorManipulator.fade(theme.palette.primary.main, 0.15),
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

var CellBase$2 = React.memo(function (_ref) {
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
  var formatOptions = isFirstMonthDay && !today ? dxSchedulerCore.DAY_SHORT_MONTH_OPTIONS : dxSchedulerCore.DAY_OPTIONS;
  return React.createElement(TableCell, _extends({
    tabIndex: 0,
    className: classNames(classes.cell, className)
  }, restProps), React.createElement("div", {
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes.text, !today), _defineProperty(_classNames, classes.today, today), _defineProperty(_classNames, classes.otherMonth, otherMonth && !today), _classNames))
  }, formatDate(startDate, formatOptions)));
});
process.env.NODE_ENV !== "production" ? CellBase$2.propTypes = {
  classes: PropTypes.object.isRequired,
  formatDate: PropTypes.func.isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date),
  className: PropTypes.string,
  today: PropTypes.bool,
  otherMonth: PropTypes.bool
} : void 0;
CellBase$2.defaultProps = {
  endDate: undefined,
  className: undefined,
  today: false,
  otherMonth: false
};
var Cell$2 = styles$14.withStyles(styles$e, {
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

var CellBase$3 = React.memo(function (_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      startDate = _ref.startDate,
      endDate = _ref.endDate,
      today = _ref.today,
      formatDate = _ref.formatDate,
      restProps = _objectWithoutProperties(_ref, ["classes", "className", "startDate", "endDate", "today", "formatDate"]);

  return React.createElement(TableCell, _extends({
    className: classNames(classes.cell, className)
  }, restProps), React.createElement("div", {
    className: classes.dayOfWeek
  }, formatDate(startDate, dxSchedulerCore.WEEK_DAY_OPTIONS)));
});
CellBase$3.propTypes = {
  classes: PropTypes.object.isRequired,
  formatDate: PropTypes.func.isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date),
  className: PropTypes.string,
  today: PropTypes.bool
};
CellBase$3.defaultProps = {
  className: undefined,
  endDate: undefined,
  today: false
};
var Cell$3 = styles$14.withStyles(styles$f, {
  name: 'Cell'
})(CellBase$3);

var MonthView = dxReactCore.withComponents({
  Layout: HorizontalViewLayout,
  AppointmentLayer: Container,
  DayScaleLayout: Layout$2,
  DayScaleCell: Cell$3,
  DayScaleRow: Row,
  TimeTableLayout: Layout$3,
  TimeTableCell: Cell$2,
  TimeTableRow: Row
})(dxReactScheduler.MonthView);

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
  return React.createElement("div", _extends({
    className: classNames(classes.content, className)
  }, restProps), children || React.createElement(React.Fragment, null, React.createElement("div", {
    className: repeat ? classes.recurringContainer : classes.container
  }, React.createElement("div", {
    className: classes.title
  }, data.title)), repeat ? React.createElement("div", {
    className: classes.imageContainer
  }, React.createElement(RecurringIcon, {
    className: classes.image
  })) : undefined));
};

process.env.NODE_ENV !== "production" ? HorizontalAppointmentBase.propTypes = {
  // oneOfType is a workaround because withStyles returns react object
  recurringIconComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  durationType: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  formatDate: PropTypes.func
} : void 0;
HorizontalAppointmentBase.defaultProps = {
  formatDate: function formatDate() {
    return '';
  },
  children: undefined,
  className: undefined,
  durationType: undefined
};
var HorizontalAppointment = styles$14.withStyles(styles$g, {
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
  return React.createElement("div", _extends({
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes.content, true), _defineProperty(_classNames, classes.shortContent, isShortHeight || isMiddleHeight), _classNames), className)
  }, restProps), children || React.createElement(React.Fragment, null, React.createElement("div", {
    className: classNames((_classNames2 = {}, _defineProperty(_classNames2, classes.container, !repeat), _defineProperty(_classNames2, classes.recurringContainer, repeat), _classNames2))
  }, isShortHeight ? React.createElement("div", {
    className: classes.shortContainer
  }, React.createElement("div", {
    className: classNames(classes.title, classes.shortTitle)
  }, data.title, ", \xA0"), React.createElement("div", {
    className: classNames(classes.time, classes.shortTime)
  }, formatDate(data.startDate, dxSchedulerCore.HOUR_MINUTE_OPTIONS))) : React.createElement(React.Fragment, null, React.createElement("div", {
    className: classes.title
  }, data.title), React.createElement("div", {
    className: classNames((_classNames3 = {}, _defineProperty(_classNames3, classes.textContainer, true), _defineProperty(_classNames3, classes.middleContainer, isMiddleHeight), _classNames3))
  }, React.createElement("div", {
    className: classes.time
  }, formatDate(data.startDate, dxSchedulerCore.HOUR_MINUTE_OPTIONS)), React.createElement("div", {
    className: classes.time
  }, "\xA0 - \xA0"), React.createElement("div", {
    className: classes.time
  }, formatDate(data.endDate, dxSchedulerCore.HOUR_MINUTE_OPTIONS))))), repeat ? React.createElement("div", {
    className: classes.imageContainer
  }, React.createElement(RecurringIcon, {
    className: classes.image
  })) : undefined));
};

process.env.NODE_ENV !== "production" ? VerticalAppointmentBase.propTypes = {
  // oneOfType is a workaround because withStyles returns react object
  recurringIconComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  formatDate: PropTypes.func.isRequired,
  durationType: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string
} : void 0;
VerticalAppointmentBase.defaultProps = {
  children: undefined,
  className: undefined
};
var VerticalAppointment = styles$14.withStyles(styles$h, {
  name: 'VerticalAppointment'
})(VerticalAppointmentBase);

var AppointmentContent = function AppointmentContent(_ref) {
  var type = _ref.type,
      restProps = _objectWithoutProperties(_ref, ["type"]);

  return type === dxSchedulerCore.HORIZONTAL_TYPE ? React.createElement(HorizontalAppointment, restProps) : React.createElement(VerticalAppointment, restProps);
};
process.env.NODE_ENV !== "production" ? AppointmentContent.propTypes = {
  type: PropTypes.oneOf([dxSchedulerCore.HORIZONTAL_TYPE, dxSchedulerCore.VERTICAL_TYPE]).isRequired
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
  return React.createElement("div", _extends({
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes.appointment, true), _defineProperty(_classNames, classes.clickableAppointment, clickable), _classNames), className)
  }, onClick, restProps), children);
};

process.env.NODE_ENV !== "production" ? AppointmentBase.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  data: PropTypes.object,
  onClick: PropTypes.func,
  draggable: PropTypes.bool
} : void 0;
AppointmentBase.defaultProps = {
  onClick: undefined,
  className: undefined,
  data: {},
  draggable: false
};
var Appointment = styles$14.withStyles(styles$i, {
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
var SplitIndicatorBase = React.memo(function (_ref) {
  var _classNames;

  var position = _ref.position,
      appointmentType = _ref.appointmentType,
      classes = _ref.classes,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, ["position", "appointmentType", "classes", "className"]);

  var vertical = appointmentType === dxSchedulerCore.VERTICAL_TYPE;
  var start = position === dxSchedulerCore.POSITION_START;
  return React.createElement("div", _extends({
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes.slice, true), _defineProperty(_classNames, classes.verticalStart, vertical && start), _defineProperty(_classNames, classes.verticalEnd, vertical && !start), _defineProperty(_classNames, classes.horizontalStart, !vertical && start), _defineProperty(_classNames, classes.horizontalEnd, !vertical && !start), _classNames), className)
  }, restProps));
});
process.env.NODE_ENV !== "production" ? SplitIndicatorBase.propTypes = {
  classes: PropTypes.object.isRequired,
  appointmentType: PropTypes.oneOf([dxSchedulerCore.VERTICAL_TYPE, dxSchedulerCore.HORIZONTAL_TYPE]).isRequired,
  position: PropTypes.oneOf([dxSchedulerCore.POSITION_START, dxSchedulerCore.POSITION_END]).isRequired,
  className: PropTypes.string
} : void 0;
SplitIndicatorBase.defaultProps = {
  className: undefined
};
var SplitIndicator = styles$14.withStyles(styles$j, {
  name: 'AppointmentsContainer'
})(SplitIndicatorBase);

var AppointmentContainer = function AppointmentContainer(_ref) {
  var style = _ref.style,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["style", "children"]);

  return React.createElement("div", _extends({
    style: style
  }, restProps), children);
};
process.env.NODE_ENV !== "production" ? AppointmentContainer.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object.isRequired
} : void 0;

var Appointments = dxReactCore.withComponents({
  Appointment: Appointment,
  AppointmentContent: AppointmentContent,
  Container: AppointmentContainer,
  SplitIndicator: SplitIndicator,
  RecurringIcon: Repeat
})(dxReactScheduler.Appointments);

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

  return React.createElement(ToolbarMUI, _extends({
    className: classNames(classes.toolbar, className)
  }, restProps), children);
};

process.env.NODE_ENV !== "production" ? ToolbarBase.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
} : void 0;
ToolbarBase.defaultProps = {
  className: undefined
};
var Toolbar = styles$14.withStyles(styles$k, {
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

  return React.createElement("div", _extends({
    className: classNames(classes.flexibleSpace, className)
  }, restProps), children);
};
process.env.NODE_ENV !== "production" ? FlexibleSpaceBase.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  className: PropTypes.string
} : void 0;
FlexibleSpaceBase.defaultProps = {
  children: null,
  className: undefined
};
var FlexibleSpace = styles$14.withStyles(styles$l, {
  name: 'FlexibleSpace'
})(FlexibleSpaceBase);

var Toolbar$1 = dxReactCore.withComponents({
  Root: Toolbar,
  FlexibleSpace: FlexibleSpace
})(dxReactScheduler.Toolbar);

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

  var navigateBack = React.useCallback(function () {
    return onNavigate('back');
  }, [onNavigate]);
  var navigateForward = React.useCallback(function () {
    return onNavigate('forward');
  }, [onNavigate]);
  return React.createElement("div", _extends({
    className: classNames(classes.root, className),
    ref: rootRef
  }, restProps), React.createElement(NavigationButton, {
    type: "back",
    onClick: navigateBack
  }), React.createElement(NavigationButton, {
    type: "forward",
    onClick: navigateForward
  }), React.createElement(OpenButton, {
    onVisibilityToggle: onVisibilityToggle,
    text: navigatorText
  }));
};

process.env.NODE_ENV !== "production" ? RootBase.propTypes = {
  // oneOfType is a workaround because withStyles returns react object
  navigationButtonComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  openButtonComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  onVisibilityToggle: PropTypes.func.isRequired,
  onNavigate: PropTypes.func.isRequired,
  rootRef: PropTypes.func.isRequired,
  navigatorText: PropTypes.string,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
} : void 0;
RootBase.defaultProps = {
  navigatorText: '',
  className: undefined
};
var Root$1 = styles$14.withStyles(styles$m)(RootBase, {
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

  return React.createElement(Popover, _extends({
    open: visible,
    anchorEl: target,
    onClose: onHide,
    anchorOrigin: origin,
    transformOrigin: origin
  }, restProps), children);
};
process.env.NODE_ENV !== "production" ? Overlay.propTypes = {
  onHide: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool,
  target: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
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

var OpenButtonBase = React.memo(function (_ref2) {
  var text = _ref2.text,
      onVisibilityToggle = _ref2.onVisibilityToggle,
      classes = _ref2.classes,
      className = _ref2.className,
      restProps = _objectWithoutProperties(_ref2, ["text", "onVisibilityToggle", "classes", "className"]);

  return React.createElement(React.Fragment, null, React.createElement(Button$1, _extends({
    onClick: onVisibilityToggle,
    className: classNames(classes.textButton, className)
  }, restProps), text), React.createElement(IconButton, _extends({
    onClick: onVisibilityToggle,
    className: classNames(classes.iconButton, className)
  }, restProps), React.createElement(CalendarToday, null)));
});
OpenButtonBase.propTypes = {
  onVisibilityToggle: PropTypes.func.isRequired,
  text: PropTypes.string,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};
OpenButtonBase.defaultProps = {
  text: '',
  className: undefined
};
var OpenButton = styles$14.withStyles(styles$n, {
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

var NavigationButtonBase = React.memo(function (_ref2) {
  var type = _ref2.type,
      onClick = _ref2.onClick,
      classes = _ref2.classes,
      className = _ref2.className,
      restProps = _objectWithoutProperties(_ref2, ["type", "onClick", "classes", "className"]);

  return React.createElement(IconButton, _extends({
    onClick: onClick,
    className: classNames(classes.button, className)
  }, restProps), type === 'back' ? React.createElement(ChevronLeft, null) : React.createElement(ChevronRight, null));
});
NavigationButtonBase.propTypes = {
  type: PropTypes.oneOf(['forward', 'back']).isRequired,
  onClick: PropTypes.func,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};
NavigationButtonBase.defaultProps = {
  onClick: function onClick() {},
  className: undefined
};
var NavigationButton = styles$14.withStyles(styles$o, {
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
  return React.createElement(TableMUI, _extends({
    className: classNames(classes.table, className)
  }, restProps), React.createElement(TableHead, null, React.createElement(HeaderRow, null, headerCells.map(function (cell) {
    var key = formatDate(cell.startDate, dxSchedulerCore.WEEK_DAY_OPTIONS);
    return React.createElement(HeaderCell, {
      key: key
    }, key);
  }))), React.createElement(TableBody, null, cells.map(function (row) {
    return React.createElement(Row, {
      key: row[0].startDate.toString()
    }, row.map(function (_ref2) {
      var startDate = _ref2.startDate,
          otherMonth = _ref2.otherMonth,
          today = _ref2.today;
      var selected = comparableSelectedDate.isSame(moment(startDate), 'date');
      return React.createElement(Cell, {
        key: startDate.toString(),
        otherMonth: otherMonth,
        selected: selected,
        today: today,
        onClick: function onClick() {
          onCellClick(startDate);
        }
      }, formatDate(startDate, dxSchedulerCore.DAY_OPTIONS));
    }));
  })));
};

process.env.NODE_ENV !== "production" ? TableBase.propTypes = {
  // oneOfType is a workaround because withStyles returns react object
  rowComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  cellComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  headerRowComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  headerCellComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  cells: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  selectedDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string, PropTypes.number]),
  formatDate: PropTypes.func.isRequired,
  headerCells: PropTypes.array,
  className: PropTypes.string,
  onCellClick: PropTypes.func
} : void 0;
TableBase.defaultProps = {
  className: undefined,
  headerCells: [],
  onCellClick: function onCellClick() {},
  selectedDate: undefined
};
var Table = styles$14.withStyles(styles$p, {
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
      return React.createElement("div", restProps, React.createElement(Navigator, {
        currentDate: currentDate,
        textComponent: Text,
        navigationButtonComponent: NavigationButton,
        onNavigate: this.onNavigate,
        formatDate: formatDate
      }), React.createElement(Table, {
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
}(React.PureComponent);
process.env.NODE_ENV !== "production" ? Root$2.propTypes = {
  // oneOfType is a workaround because withStyles returns react object
  textComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  navigationButtonComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  headerRowComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  headerCellComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  navigatorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  rowComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  cellComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  getCells: PropTypes.func.isRequired,
  selectedDate: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
  formatDate: PropTypes.func.isRequired,
  firstDayOfWeek: PropTypes.number,
  onSelectedDateChange: PropTypes.func
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

  return React.createElement(TableCell, _extends({
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes.cell, true), _defineProperty(_classNames, classes.otherMonth, otherMonth), _classNames), className)
  }, restProps), React.createElement("span", {
    className: classNames((_classNames2 = {}, _defineProperty(_classNames2, classes.selected, selected), _defineProperty(_classNames2, classes.today, today && !selected), _classNames2))
  }, children));
};

process.env.NODE_ENV !== "production" ? CellBase$4.propTypes = {
  children: PropTypes.node,
  otherMonth: PropTypes.bool,
  selected: PropTypes.bool,
  today: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
} : void 0;
CellBase$4.defaultProps = {
  children: undefined,
  otherMonth: false,
  selected: false,
  today: false,
  className: undefined
};
var Cell$4 = styles$14.withStyles(styles$q, {
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

  return React.createElement(TableCell, _extends({
    className: classNames(_defineProperty({}, classes.cell, true), className)
  }, restProps), children);
};

process.env.NODE_ENV !== "production" ? HeaderCellBase.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
} : void 0;
HeaderCellBase.defaultProps = {
  children: undefined,
  className: undefined
};
var HeaderCell = styles$14.withStyles(styles$r, {
  name: 'HeaderCell'
})(HeaderCellBase);

var Row$1 = function Row(_ref) {
  var children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(TableRow, restProps, children);
};
process.env.NODE_ENV !== "production" ? Row$1.propTypes = {
  children: PropTypes.node.isRequired
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

  return React.createElement(ToolbarMUI, _extends({
    className: classNames(classes.navigator, className)
  }, restProps), React.createElement(NavigationButton, {
    type: "back",
    onClick: function onClick() {
      onNavigate({
        back: true
      });
    }
  }), React.createElement(Text, {
    currentDate: currentDate,
    formatDate: formatDate
  }), React.createElement(NavigationButton, {
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
  classes: PropTypes.object.isRequired,
  textComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  navigationButtonComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  currentDate: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
  formatDate: PropTypes.func.isRequired,
  className: PropTypes.string,
  onNavigate: PropTypes.func
} : void 0;
NavigatorBase.defaultProps = {
  className: undefined,
  onNavigate: function onNavigate() {}
};
var Navigator = styles$14.withStyles(styles$s, {
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

  return React.createElement(Typography, _extends({
    variant: "h6",
    className: classNames(_defineProperty({}, classes.text, true), className)
  }, restProps), formatDate(currentDate, dxSchedulerCore.MONTH_YEAR_OPTIONS));
};

process.env.NODE_ENV !== "production" ? TextBase.propTypes = {
  classes: PropTypes.object.isRequired,
  currentDate: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
  formatDate: PropTypes.func.isRequired,
  className: PropTypes.string
} : void 0;
TextBase.defaultProps = {
  className: undefined
};
var Text = styles$14.withStyles(styles$t, {
  name: 'Text'
})(TextBase);

var DateNavigator = dxReactCore.withComponents({
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
})(dxReactScheduler.DateNavigator);

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
  return React.createElement(Popover, _extends({
    open: visible,
    anchorEl: target,
    onClose: onHide,
    anchorOrigin: verticalTopHorizontalCenterOptions,
    transformOrigin: verticalTopHorizontalCenterOptions,
    PaperProps: {
      className: classes.popover
    }
  }, restProps), React.createElement(Header, {
    appointmentData: data,
    commandButtonComponent: commandButtonComponent,
    showOpenButton: showOpenButton,
    showCloseButton: showCloseButton,
    showDeleteButton: showDeleteButton,
    commandButtonIds: commandButtonIds,
    onOpenButtonClick: onOpenButtonClick,
    onDeleteButtonClick: onDeleteButtonClick,
    onHide: onHide
  }), React.createElement(Content, {
    appointmentData: data,
    formatDate: formatDate,
    recurringIconComponent: recurringIconComponent
  }));
};

process.env.NODE_ENV !== "production" ? LayoutBase$5.propTypes = {
  // oneOfType is a workaround because withStyles returns react object
  commandButtonComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  headerComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  contentComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  recurringIconComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  showOpenButton: PropTypes.bool.isRequired,
  showCloseButton: PropTypes.bool.isRequired,
  showDeleteButton: PropTypes.bool.isRequired,
  commandButtonIds: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  formatDate: PropTypes.func.isRequired,
  onOpenButtonClick: PropTypes.func,
  onDeleteButtonClick: PropTypes.func,
  appointmentMeta: PropTypes.shape({
    target: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    data: PropTypes.object
  }),
  visible: PropTypes.bool,
  onHide: PropTypes.func
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
var Layout$4 = styles$14.withStyles(styles$u, {
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

  return React.createElement("div", _extends({
    className: classNames(classes.head, classes.flexContainer, className)
  }, restProps), showOpenButton && React.createElement(CommandButton, {
    id: commandButtonIds.open,
    onExecute: handleOpenButtonClick
  }), showDeleteButton && React.createElement(CommandButton, {
    id: commandButtonIds.delete,
    onExecute: onDeleteButtonClick
  }), children, showCloseButton && React.createElement("div", {
    className: classes.flexContainer
  }, React.createElement("div", {
    className: classes.line
  }), React.createElement(CommandButton, {
    id: commandButtonIds.close,
    onExecute: onHide
  })));
};

process.env.NODE_ENV !== "production" ? HeaderBase.propTypes = {
  classes: PropTypes.object.isRequired,
  appointmentData: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string,
  commandButtonComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  showOpenButton: PropTypes.bool.isRequired,
  showCloseButton: PropTypes.bool.isRequired,
  showDeleteButton: PropTypes.bool.isRequired,
  commandButtonIds: PropTypes.object.isRequired,
  onOpenButtonClick: PropTypes.func,
  onDeleteButtonClick: PropTypes.func,
  onHide: PropTypes.func
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
var Header = styles$14.withStyles(styles$v, {
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

  var weekDays = dxSchedulerCore.viewBoundText(appointmentData.startDate, appointmentData.endDate, dxSchedulerCore.WEEKDAY_INTERVAL, appointmentData.startDate, 1, formatDate);
  return React.createElement("div", _extends({
    className: classNames(classes.content, className)
  }, restProps), React.createElement(Grid, {
    container: true,
    alignItems: "flex-start",
    className: classes.titleContainer
  }, React.createElement(Grid, {
    item: true,
    xs: 2
  }, React.createElement("div", {
    className: classes.relativeContainer
  }, React.createElement(Lens, {
    className: classes.lens
  }), !!appointmentData.rRule && React.createElement(RecurringIcon, {
    className: classes.recurringIcon
  }))), React.createElement(Grid, {
    item: true,
    xs: 10
  }, React.createElement("div", null, React.createElement("div", {
    className: classNames(classes.title, classes.dateAndTitle)
  }, appointmentData.title), React.createElement("div", {
    className: classNames(classes.text, classes.dateAndTitle)
  }, weekDays)))), React.createElement(Grid, {
    container: true,
    alignItems: "center",
    className: classes.contentContainer
  }, React.createElement(Grid, {
    item: true,
    xs: 2,
    className: classes.textCenter
  }, React.createElement(AccessTime, {
    className: classes.icon
  })), React.createElement(Grid, {
    item: true,
    xs: 10
  }, React.createElement("div", {
    className: classes.text
  }, "".concat(formatDate(appointmentData.startDate, dxSchedulerCore.HOUR_MINUTE_OPTIONS), "\n              - ").concat(formatDate(appointmentData.endDate, dxSchedulerCore.HOUR_MINUTE_OPTIONS))))), children);
};
process.env.NODE_ENV !== "production" ? ContentBase.propTypes = {
  classes: PropTypes.object.isRequired,
  appointmentData: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string,
  formatDate: PropTypes.func.isRequired,
  recurringIconComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
} : void 0;
ContentBase.defaultProps = {
  appointmentData: undefined,
  className: undefined,
  children: undefined
};
var Content = styles$14.withStyles(styles$w, {
  name: 'Content'
})(ContentBase);

var getIcon = function getIcon(id) {
  if (id === dxSchedulerCore.OPEN_COMMAND_BUTTON) {
    return React.createElement(EditIcon, null);
  }

  if (id === dxSchedulerCore.CLOSE_COMMAND_BUTTON) {
    return React.createElement(CloseIcon, null);
  }

  if (id === dxSchedulerCore.DELETE_COMMAND_BUTTON) {
    return React.createElement(DeleteIcon, null);
  }

  return null;
};

var CommandButton = function CommandButton(_ref) {
  var id = _ref.id,
      onExecute = _ref.onExecute,
      restProps = _objectWithoutProperties(_ref, ["id", "onExecute"]);

  return React.createElement(IconButton, _extends({
    onClick: onExecute
  }, restProps), getIcon(id));
};
process.env.NODE_ENV !== "production" ? CommandButton.propTypes = {
  id: PropTypes.string,
  onExecute: PropTypes.func
} : void 0;
CommandButton.defaultProps = {
  onExecute: function onExecute() {
    return undefined;
  },
  id: ''
};

var AppointmentTooltip = dxReactCore.withComponents({
  Layout: Layout$4,
  Header: Header,
  Content: Content,
  CommandButton: CommandButton,
  RecurringIcon: Repeat
})(dxReactScheduler.AppointmentTooltip);

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

var OutlinedSelectBase = React.memo(function (_ref2) {
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

  return React.createElement(Select$1, _extends({
    disabled: readOnly,
    classes: {
      root: classes.root
    },
    value: value,
    onChange: handleChange,
    input: React.createElement(OutlinedInput, {
      classes: inputClasses || {
        input: classes.input,
        root: classes.inputRoot
      },
      labelWidth: 0
    })
  }, restProps), availableOptions.map(function (option) {
    return React.createElement(MenuItem, {
      value: option.id,
      key: option.id,
      className: classes.menuItem
    }, option.text);
  }));
});
process.env.NODE_ENV !== "production" ? OutlinedSelectBase.propTypes = {
  onValueChange: PropTypes.func,
  classes: PropTypes.object.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  availableOptions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    text: PropTypes.string.isRequired
  })),
  readOnly: PropTypes.bool,
  inputClasses: PropTypes.object
} : void 0;
OutlinedSelectBase.defaultProps = {
  readOnly: false,
  onValueChange: function onValueChange() {
    return undefined;
  },
  availableOptions: [],
  inputClasses: null
};
var OutlinedSelect = styles$14.withStyles(styles$x)(OutlinedSelectBase, {
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

var SwitcherBase = React.memo(function (_ref2) {
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
  return React.createElement(OutlinedSelect, _extends({
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
  onChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  currentView: PropTypes.shape({
    name: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired
  }).isRequired,
  availableViews: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired
  }))
} : void 0;
SwitcherBase.defaultProps = {
  availableViews: []
};
var Switcher = styles$14.withStyles(styles$y)(SwitcherBase, {
  name: 'Switcher'
});

var ViewSwitcher = dxReactCore.withComponents({
  Switcher: Switcher
})(dxReactScheduler.ViewSwitcher);

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
    _this.table = React.createRef();
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

      return React.createElement(TableMUI, _extends({
        ref: this.table,
        className: classNames(classes.table, className)
      }, restProps), React.createElement(TableBody, null, React.createElement(Row, null, cellsData.map(function (_ref) {
        var startDate = _ref.startDate,
            endDate = _ref.endDate;
        return React.createElement(Cell, {
          key: startDate,
          startDate: startDate,
          endDate: endDate
        });
      }))));
    }
  }]);

  return LayoutBase;
}(React.PureComponent);

process.env.NODE_ENV !== "production" ? LayoutBase$6.propTypes = {
  classes: PropTypes.object.isRequired,
  formatDate: PropTypes.func.isRequired,
  cellsData: PropTypes.arrayOf(Array).isRequired,
  cellComponent: PropTypes.func.isRequired,
  rowComponent: PropTypes.func.isRequired,
  setCellElementsMeta: PropTypes.func.isRequired,
  className: PropTypes.string
} : void 0;
LayoutBase$6.defaultProps = {
  className: undefined
};
var Layout$5 = styles$14.withStyles(styles$z, {
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
        backgroundColor: colorManipulator.fade(theme.palette.primary.main, 0.15),
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

  return React.createElement(TableCell, _extends({
    tabIndex: 0,
    className: classNames(classes.cell, className)
  }, restProps), children);
};

process.env.NODE_ENV !== "production" ? CellBase$5.propTypes = {
  classes: PropTypes.object.isRequired,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  children: PropTypes.node,
  className: PropTypes.string
} : void 0;
CellBase$5.defaultProps = {
  children: null,
  startDate: undefined,
  endDate: undefined,
  className: undefined
};
var Cell$5 = styles$14.withStyles(styles$A, {
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

var TitleCellBase = React.memo(function (_ref) {
  var classes = _ref.classes,
      getMessage = _ref.getMessage,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, ["classes", "getMessage", "className"]);

  return React.createElement("div", _extends({
    className: classNames(classes.container, className)
  }, restProps), React.createElement("div", {
    className: classes.content
  }, React.createElement(Typography, {
    className: classes.title,
    variant: "body1"
  }, getMessage('allDay'))));
});
TitleCellBase.propTypes = {
  classes: PropTypes.object.isRequired,
  getMessage: PropTypes.func.isRequired,
  className: PropTypes.string
};
TitleCellBase.defaultProps = {
  className: undefined
};
var TitleCell = styles$14.withStyles(styles$B, {
  name: 'TitleCell'
})(TitleCellBase);

var styles$C = {
  container: {
    position: 'relative'
  }
};
var Container$1 = styles$14.withStyles(styles$C, {
  name: 'AllDayContainer'
})(ContainerBase);

var AllDayPanel = dxReactCore.withComponents({
  AppointmentLayer: Container,
  Layout: Layout$5,
  Cell: Cell$5,
  Row: Row,
  TitleCell: TitleCell,
  Container: Container$1
})(dxReactScheduler.AllDayPanel);

var styles$D = {
  root: {
    height: '100%',
    margin: '0 auto',
    overflowY: 'auto'
  },
  container: {
    display: 'flex',
    '@media (max-width: 700px)': {
      flexDirection: 'column'
    }
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

  return React.createElement("div", _extends({
    className: classNames(classes.root, className)
  }, restProps), React.createElement("div", {
    className: classes.stickyContainer
  }, React.createElement(CommandLayout, null)), React.createElement("div", {
    className: classes.container
  }, React.createElement(BasicLayout, null), React.createElement(RecurrenceLayout, null)), children);
};

process.env.NODE_ENV !== "production" ? LayoutBase$7.propTypes = {
  basicLayoutComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  commandLayoutComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  recurrenceLayoutComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  isRecurrence: PropTypes.bool
} : void 0;
LayoutBase$7.defaultProps = {
  className: undefined,
  isRecurrence: false,
  children: null
};
var Layout$6 = styles$14.withStyles(styles$D)(LayoutBase$7, {
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

var TextEditorBase = React.memo(function (_ref) {
  var classes = _ref.classes,
      value = _ref.value,
      placeholder = _ref.placeholder,
      className = _ref.className,
      readOnly = _ref.readOnly,
      onValueChange = _ref.onValueChange,
      type = _ref.type,
      restProps = _objectWithoutProperties(_ref, ["classes", "value", "placeholder", "className", "readOnly", "onValueChange", "type"]);

  var textFieldType = type === dxSchedulerCore.NUMBER_EDITOR ? 'number' : 'text';
  var notesTextEditor = type === dxSchedulerCore.MULTILINE_TEXT_EDITOR;
  return React.createElement(TextField, _extends({
    className: classNames(classes.editor, className),
    value: value,
    variant: notesTextEditor ? 'outlined' : 'filled',
    disabled: readOnly,
    onChange: function onChange(_ref2) {
      var target = _ref2.target;
      return onValueChange(target.value);
    },
    InputProps: {
      className: classNames(_defineProperty({}, classes.title, type === dxSchedulerCore.TITLE_TEXT_EDITOR))
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
  classes: PropTypes.object.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  className: PropTypes.string,
  readOnly: PropTypes.bool,
  onValueChange: PropTypes.func,
  type: PropTypes.string
} : void 0;
TextEditorBase.defaultProps = {
  value: '',
  placeholder: undefined,
  className: undefined,
  readOnly: false,
  onValueChange: function onValueChange() {
    return undefined;
  },
  type: dxSchedulerCore.ORDINARY_TEXT_EDITOR
};
var TextEditor = styles$14.withStyles(styles$E)(TextEditorBase, {
  name: 'TextEditor'
});

var styles$F = function styles(_ref) {
  var spacing = _ref.spacing,
      typography = _ref.typography;
  return {
    root: {
      width: '650px',
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
        width: '400px'
      },
      '@media (min-width: 850px) and (max-width: 1000px)': {
        width: '480px'
      },
      '@media (min-width: 1000px) and (max-width: 1150px)': {
        width: '560px'
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

  var changeTitle = React.useCallback(function (title) {
    return onFieldChange({
      title: title
    });
  }, [onFieldChange]);
  var changeNotes = React.useCallback(function (notes) {
    return onFieldChange({
      notes: notes
    });
  }, [onFieldChange]);
  var changeStartDate = React.useCallback(function (startDate) {
    return onFieldChange({
      startDate: startDate
    });
  }, [onFieldChange]);
  var changeEndDate = React.useCallback(function (endDate) {
    return onFieldChange({
      endDate: endDate
    });
  }, [onFieldChange]);
  var changeAllDay = React.useCallback(function (allDay) {
    return onFieldChange({
      allDay: allDay
    });
  }, [onFieldChange]);
  var rRule = appointmentData.rRule,
      startDate = appointmentData.startDate;
  var changeFrequency = React.useCallback(function (value) {
    return dxSchedulerCore.handleChangeFrequency(value ? dxSchedulerCore.REPEAT_TYPES.DAILY : dxSchedulerCore.REPEAT_TYPES.NEVER, rRule, startDate, onFieldChange);
  }, [rRule, startDate, onFieldChange]);
  return React.createElement("div", _extends({
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes.root, true), _defineProperty(_classNames, classes.fullSize, fullSize), _defineProperty(_classNames, classes.halfSize, !fullSize), _classNames), className)
  }, restProps), React.createElement(Label, {
    text: getMessage('detailsLabel'),
    type: dxSchedulerCore.TITLE
  }), React.createElement(TextEditor, {
    placeholder: getMessage('titleLabel'),
    readOnly: readOnly,
    type: dxSchedulerCore.TITLE_TEXT_EDITOR,
    value: appointmentData.title,
    onValueChange: changeTitle
  }), React.createElement(Grid, {
    container: true,
    alignItems: "center",
    className: classes.dateEditors
  }, React.createElement(DateEditor, {
    className: classes.dateEditor,
    readOnly: readOnly,
    value: appointmentData.startDate,
    onValueChange: changeStartDate,
    locale: locale,
    excludeTime: appointmentData.allDay
  }), React.createElement(Label, {
    text: "-",
    className: classes.dividerLabel
  }), React.createElement(DateEditor, {
    className: classes.dateEditor,
    readOnly: readOnly,
    value: appointmentData.endDate,
    onValueChange: changeEndDate,
    locale: locale,
    excludeTime: appointmentData.allDay
  })), React.createElement(Grid, {
    container: true,
    className: classes.booleanEditors
  }, React.createElement(BooleanEditor, {
    label: getMessage('allDayLabel'),
    readOnly: readOnly,
    value: appointmentData.allDay,
    onValueChange: changeAllDay
  }), React.createElement(BooleanEditor, {
    label: getMessage('repeatLabel'),
    readOnly: readOnly,
    value: !!appointmentData.rRule,
    onValueChange: changeFrequency
  })), React.createElement(Label, {
    text: getMessage('moreInformationLabel'),
    type: dxSchedulerCore.TITLE,
    className: classes.labelWithMargins
  }), React.createElement(TextEditor, {
    placeholder: getMessage('notesLabel'),
    readOnly: readOnly,
    type: dxSchedulerCore.MULTILINE_TEXT_EDITOR,
    value: appointmentData.notes,
    onValueChange: changeNotes,
    className: classes.notesEditor
  }), children);
};

process.env.NODE_ENV !== "production" ? LayoutBase$8.propTypes = {
  textEditorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  dateEditorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  selectComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  labelComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  booleanEditorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  locale: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  getMessage: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func,
  appointmentData: PropTypes.shape({
    title: PropTypes.string,
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
    rRule: PropTypes.string,
    notes: PropTypes.string,
    additionalInformation: PropTypes.string,
    allDay: PropTypes.bool
  }).isRequired,
  readOnly: PropTypes.bool,
  fullSize: PropTypes.bool.isRequired
} : void 0;
LayoutBase$8.defaultProps = {
  onFieldChange: function onFieldChange() {
    return undefined;
  },
  className: undefined,
  readOnly: false,
  children: null
};
var Layout$7 = styles$14.withStyles(styles$F)(LayoutBase$8, {
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
        width: '700px'
      },
      '@media (min-width: 850px) and (max-width: 1000px)': {
        width: '850px'
      },
      '@media (min-width: 1000px) and (max-width: 1150px)': {
        width: '1000px'
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

  return React.createElement(Grid, _extends({
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes.root, true), _defineProperty(_classNames, classes.basic, !fullSize), _defineProperty(_classNames, classes.fullSize, fullSize), _classNames), className),
    container: true,
    alignItems: "center"
  }, restProps), React.createElement(CommandButton, {
    onExecute: onCancelButtonClick,
    getMessage: getMessage,
    id: dxSchedulerCore.CANCEL_BUTTON
  }), !readOnly && React.createElement(React.Fragment, null, !hideDeleteButton && React.createElement(React.Fragment, null, React.createElement(CommandButton, {
    onExecute: onDeleteButtonClick,
    getMessage: getMessage,
    id: dxSchedulerCore.DELETE_BUTTON
  }), React.createElement("div", {
    className: classes.line
  })), React.createElement(CommandButton, {
    getMessage: getMessage,
    disabled: disableSaveButton,
    onExecute: onCommitButtonClick,
    id: dxSchedulerCore.SAVE_BUTTON
  })), children);
};

process.env.NODE_ENV !== "production" ? LayoutBase$9.propTypes = {
  commandButtonComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  classes: PropTypes.object.isRequired,
  onCommitButtonClick: PropTypes.func.isRequired,
  onCancelButtonClick: PropTypes.func.isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
  getMessage: PropTypes.func.isRequired,
  className: PropTypes.string,
  fullSize: PropTypes.bool,
  readOnly: PropTypes.bool,
  children: PropTypes.node,
  disableSaveButton: PropTypes.bool,
  hideDeleteButton: PropTypes.bool
} : void 0;
LayoutBase$9.defaultProps = {
  className: undefined,
  children: undefined,
  fullSize: false,
  readOnly: false,
  disableSaveButton: false,
  hideDeleteButton: false
};
var Layout$8 = styles$14.withStyles(styles$G)(LayoutBase$9, {
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

var SaveButtonBase = React.memo(function (_ref2) {
  var classes = _ref2.classes,
      getMessage = _ref2.getMessage,
      className = _ref2.className,
      onExecute = _ref2.onExecute,
      restProps = _objectWithoutProperties(_ref2, ["classes", "getMessage", "className", "onExecute"]);

  return React.createElement(Button$1, _extends({
    className: classNames(classes.button, className),
    onClick: onExecute
  }, restProps), getMessage('commitCommand'));
});
SaveButtonBase.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  getMessage: PropTypes.func.isRequired,
  onExecute: PropTypes.func.isRequired
};
SaveButtonBase.defaultProps = {
  className: undefined
};
var SaveButton = styles$14.withStyles(styles$H)(SaveButtonBase, {
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

var DeleteButtonBase = React.memo(function (_ref2) {
  var onExecute = _ref2.onExecute,
      className = _ref2.className,
      classes = _ref2.classes,
      restProps = _objectWithoutProperties(_ref2, ["onExecute", "className", "classes"]);

  return React.createElement(IconButton, _extends({
    className: classNames(classes.button, className),
    onClick: onExecute
  }, restProps), React.createElement(DeleteIcon, null));
});
DeleteButtonBase.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  onExecute: PropTypes.func.isRequired
};
DeleteButtonBase.defaultProps = {
  className: undefined
};
var DeleteButton = styles$14.withStyles(styles$I)(DeleteButtonBase, {
  name: 'DeleteButton'
});

var styles$J = function styles() {
  return {
    button: {
      marginRight: 'auto'
    }
  };
};

var CancelButtonBase = React.memo(function (_ref) {
  var onExecute = _ref.onExecute,
      className = _ref.className,
      classes = _ref.classes,
      restProps = _objectWithoutProperties(_ref, ["onExecute", "className", "classes"]);

  return React.createElement(IconButton, _extends({
    className: classNames(classes.button, className),
    onClick: onExecute
  }, restProps), React.createElement(CloseIcon, null));
});
CancelButtonBase.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  onExecute: PropTypes.func.isRequired
};
CancelButtonBase.defaultProps = {
  className: undefined
};
var CancelButton = styles$14.withStyles(styles$J)(CancelButtonBase, {
  name: 'CancelButton'
});

var CommandButton$1 = React.memo(function (_ref) {
  var id = _ref.id,
      getMessage = _ref.getMessage,
      onExecute = _ref.onExecute,
      restProps = _objectWithoutProperties(_ref, ["id", "getMessage", "onExecute"]);

  switch (id) {
    case dxSchedulerCore.SAVE_BUTTON:
      return React.createElement(SaveButton, _extends({
        getMessage: getMessage,
        onExecute: onExecute
      }, restProps));

    case dxSchedulerCore.DELETE_BUTTON:
      return React.createElement(DeleteButton, _extends({
        onExecute: onExecute
      }, restProps));

    case dxSchedulerCore.CANCEL_BUTTON:
      return React.createElement(CancelButton, _extends({
        onExecute: onExecute
      }, restProps));

    default:
      return null;
  }
});
process.env.NODE_ENV !== "production" ? CommandButton$1.propTypes = {
  id: PropTypes.string.isRequired,
  onExecute: PropTypes.func.isRequired,
  getMessage: PropTypes.func.isRequired
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
      width: '1150px',
      '@media (min-width: 700px) and (max-width: 850px)': {
        width: '700px'
      },
      '@media (min-width: 850px) and (max-width: 1000px)': {
        width: '850px'
      },
      '@media (min-width: 1000px) and (max-width: 1150px)': {
        width: '1000px'
      },
      '@media (max-width: 700px)': {
        width: '100%',
        maxWidth: '700px'
      }
    },
    halfSize: {
      height: '100%',
      width: '650px',
      '@media (max-width: 700px)': {
        width: '100%',
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

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      previouslyOpen = _React$useState2[0],
      setPreviouslyOpen = _React$useState2[1];

  var paperClasses = classNames((_classNames = {}, _defineProperty(_classNames, classes.absolutePosition, true), _defineProperty(_classNames, classes.paper, true), _defineProperty(_classNames, classes.fullSize, fullSize), _defineProperty(_classNames, classes.halfSize, !fullSize), _defineProperty(_classNames, classes.transition, visible && previouslyOpen), _classNames));
  return React.createElement(Drawer, _extends({
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
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  fullSize: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  visible: PropTypes.bool,
  className: PropTypes.string,
  target: PropTypes.object
} : void 0;
OverlayBase.defaultProps = {
  className: undefined,
  visible: false,
  target: null
};
var Overlay$1 = styles$14.withStyles(styles$K)(OverlayBase, {
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

var DateEditorBase = React.memo(function (_ref2) {
  var classes = _ref2.classes,
      onValueChange = _ref2.onValueChange,
      value = _ref2.value,
      readOnly = _ref2.readOnly,
      className = _ref2.className,
      locale = _ref2.locale,
      excludeTime = _ref2.excludeTime,
      restProps = _objectWithoutProperties(_ref2, ["classes", "onValueChange", "value", "readOnly", "className", "locale", "excludeTime"]);

  var memoizedChangeHandler = React.useCallback(function (nextDate) {
    return nextDate && onValueChange(nextDate.toDate());
  }, [onValueChange]);
  var dateFormat = excludeTime ? 'DD/MM/YYYY' : 'DD/MM/YYYY hh:mm A';
  return React.createElement(pickers.MuiPickersUtilsProvider, {
    utils: MomentUtils,
    locale: locale
  }, React.createElement(pickers.KeyboardDateTimePicker, _extends({
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
  classes: PropTypes.object.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)]),
  className: PropTypes.string,
  readOnly: PropTypes.bool,
  onValueChange: PropTypes.func.isRequired,
  locale: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  excludeTime: PropTypes.bool
} : void 0;
DateEditorBase.defaultProps = {
  locale: 'en-US',
  value: undefined,
  className: undefined,
  readOnly: false,
  excludeTime: false
};
var DateEditor = styles$14.withStyles(styles$L)(DateEditorBase, {
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

var LabelBase$1 = React.memo(function (_ref) {
  var _classNames;

  var classes = _ref.classes,
      text = _ref.text,
      className = _ref.className,
      type = _ref.type,
      restProps = _objectWithoutProperties(_ref, ["classes", "text", "className", "type"]);

  return React.createElement(Typography, _extends({
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes.label, true), _defineProperty(_classNames, classes.titleLabel, type === dxSchedulerCore.TITLE), _classNames), className)
  }, restProps), text);
});
LabelBase$1.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string
};
LabelBase$1.defaultProps = {
  text: undefined,
  className: undefined,
  type: dxSchedulerCore.ORDINARY_LABEL
};
var Label$1 = styles$14.withStyles(styles$M)(LabelBase$1, {
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
var BooleanEditorBase = React.memo(function (_ref) {
  var label = _ref.label,
      value = _ref.value,
      readOnly = _ref.readOnly,
      onValueChange = _ref.onValueChange,
      classes = _ref.classes,
      restProps = _objectWithoutProperties(_ref, ["label", "value", "readOnly", "onValueChange", "classes"]);

  return React.createElement(FormControlLabel, _extends({
    classes: {
      label: classes.label
    },
    control: React.createElement(Checkbox, {
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
  label: PropTypes.string,
  readOnly: PropTypes.bool,
  value: PropTypes.bool,
  onValueChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};
BooleanEditorBase.defaultProps = {
  label: undefined,
  readOnly: false,
  value: false
};
var BooleanEditor = styles$14.withStyles(styles$N)(BooleanEditorBase, {
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

var FilledSelectBase = React.memo(function (_ref2) {
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

  return React.createElement(TextField, _extends({
    select: true,
    className: classNames(classes.filledSelect, className),
    value: value,
    onChange: handleChange,
    margin: "normal",
    variant: "filled",
    hiddenLabel: true,
    disabled: readOnly
  }, restProps), availableOptions.map(function (option) {
    return React.createElement(MenuItem, {
      value: option.id,
      key: option.id,
      className: classes.menuItem
    }, option.text);
  }));
});
process.env.NODE_ENV !== "production" ? FilledSelectBase.propTypes = {
  onValueChange: PropTypes.func,
  classes: PropTypes.object.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  availableOptions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    text: PropTypes.string.isRequired
  })),
  readOnly: PropTypes.bool,
  className: PropTypes.string
} : void 0;
FilledSelectBase.defaultProps = {
  readOnly: false,
  onValueChange: function onValueChange() {
    return undefined;
  },
  availableOptions: [],
  className: undefined
};
var FilledSelect = styles$14.withStyles(styles$O)(FilledSelectBase, {
  name: 'FilledSelect'
});

var Select = React.memo(function (_ref) {
  var value = _ref.value,
      availableOptions = _ref.availableOptions,
      onValueChange = _ref.onValueChange,
      readOnly = _ref.readOnly,
      type = _ref.type,
      restProps = _objectWithoutProperties(_ref, ["value", "availableOptions", "onValueChange", "readOnly", "type"]);

  var ResultingSelect = type === dxSchedulerCore.STANDARD_SELECT ? FilledSelect : OutlinedSelect;
  return React.createElement(ResultingSelect, _extends({
    value: value,
    availableOptions: availableOptions,
    onValueChange: onValueChange,
    readOnly: readOnly
  }, restProps));
});
process.env.NODE_ENV !== "production" ? Select.propTypes = {
  onValueChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  availableOptions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    text: PropTypes.string.isRequired
  })),
  readOnly: PropTypes.bool,
  type: PropTypes.string
} : void 0;
Select.defaultProps = {
  readOnly: false,
  availableOptions: [],
  type: dxSchedulerCore.STANDARD_SELECT
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

  return React.createElement(Grid, _extends({
    container: true,
    direction: "row",
    justify: "flex-start",
    alignItems: "center",
    className: classNames(classes.grid, className)
  }, restProps), React.createElement(Label, {
    text: repeatEveryLabel,
    className: classes.label
  }), React.createElement(TextEditor, {
    readOnly: readOnly,
    value: interval,
    className: classes.textEditor,
    type: dxSchedulerCore.NUMBER_EDITOR,
    onValueChange: changeRecurrenceInterval
  }), React.createElement(Label, {
    text: repeatIntervalLabel,
    className: classes.labelWithMargin
  }));
};

process.env.NODE_ENV !== "production" ? IntervalEditorBase.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  repeatEveryLabel: PropTypes.string.isRequired,
  repeatIntervalLabel: PropTypes.string.isRequired,
  readOnly: PropTypes.bool.isRequired,
  interval: PropTypes.number,
  changeRecurrenceInterval: PropTypes.func.isRequired,
  labelComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  textEditorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
} : void 0;
IntervalEditorBase.defaultProps = {
  className: undefined,
  interval: 1
};
var IntervalEditor = styles$14.withStyles(styles$P)(IntervalEditorBase, {
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
  var recurrenceOptions = React.useMemo(function () {
    return dxSchedulerCore.getRecurrenceOptions(rRule) || {};
  }, [rRule]);
  var changeRecurrenceInterval = React.useCallback(function (interval) {
    return dxSchedulerCore.checkIsNaturalNumber(interval) && onFieldChange({
      rRule: dxSchedulerCore.changeRecurrenceOptions(_objectSpread2({}, recurrenceOptions, {
        interval: interval
      }))
    });
  }, [recurrenceOptions, onFieldChange]);
  return React.createElement(IntervalEditor, _extends({
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
  labelComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  radioGroupComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  textEditorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  selectComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  weeklyRecurrenceSelectorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  appointmentData: PropTypes.shape({
    title: PropTypes.string,
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
    rRule: PropTypes.string,
    notes: PropTypes.string,
    additionalInformation: PropTypes.string,
    allDay: PropTypes.bool
  }).isRequired,
  onFieldChange: PropTypes.func,
  getMessage: PropTypes.func.isRequired,
  readOnly: PropTypes.bool,
  formatDate: PropTypes.func.isRequired,
  firstDayOfWeek: PropTypes.number.isRequired
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
  var recurrenceOptions = React.useMemo(function () {
    return dxSchedulerCore.getRecurrenceOptions(rRule) || {};
  }, [rRule]);
  var changeRecurrenceInterval = React.useCallback(function (interval) {
    return dxSchedulerCore.checkIsNaturalNumber(interval) && onFieldChange({
      rRule: dxSchedulerCore.changeRecurrenceOptions(_objectSpread2({}, recurrenceOptions, {
        interval: interval
      }))
    });
  }, [recurrenceOptions, onFieldChange]);
  return React.createElement("div", restProps, React.createElement(IntervalEditor, _extends({
    className: classes.container,
    repeatEveryLabel: getMessage('repeatEveryLabel'),
    repeatIntervalLabel: getMessage('weeksOnLabel'),
    textEditorComponent: textEditorComponent,
    labelComponent: labelComponent,
    changeRecurrenceInterval: changeRecurrenceInterval,
    interval: recurrenceOptions.interval,
    readOnly: readOnly
  }, restProps)), React.createElement(WeeklyRecurrenceSelector, {
    rRule: appointmentData.rRule,
    onValueChange: onFieldChange,
    readOnly: readOnly,
    formatDate: formatDate,
    firstDayOfWeek: firstDayOfWeek
  }));
};

process.env.NODE_ENV !== "production" ? WeeklyBase.propTypes = {
  labelComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  radioGroupComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  textEditorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  selectComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  weeklyRecurrenceSelectorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  appointmentData: PropTypes.shape({
    title: PropTypes.string,
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
    rRule: PropTypes.string,
    notes: PropTypes.string,
    additionalInformation: PropTypes.string,
    allDay: PropTypes.bool
  }).isRequired,
  onFieldChange: PropTypes.func,
  classes: PropTypes.object.isRequired,
  getMessage: PropTypes.func.isRequired,
  readOnly: PropTypes.bool,
  formatDate: PropTypes.func.isRequired,
  firstDayOfWeek: PropTypes.number.isRequired
} : void 0;
WeeklyBase.defaultProps = {
  onFieldChange: function onFieldChange() {
    return undefined;
  },
  readOnly: false
};
var Weekly = styles$14.withStyles(styles$Q)(WeeklyBase, {
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
  var recurrenceOptions = React.useMemo(function () {
    return dxSchedulerCore.getRecurrenceOptions(rRule) || {};
  }, [rRule]);
  var changeRecurrenceInterval = React.useCallback(function (interval) {
    return dxSchedulerCore.checkIsNaturalNumber(interval) && onFieldChange({
      rRule: dxSchedulerCore.changeRecurrenceOptions(_objectSpread2({}, recurrenceOptions, {
        interval: interval
      }))
    });
  }, [recurrenceOptions, onFieldChange]);
  return React.createElement("div", restProps, React.createElement(IntervalEditor, _extends({
    className: classes.container,
    repeatEveryLabel: getMessage('repeatEveryLabel'),
    repeatIntervalLabel: getMessage('monthsLabel'),
    textEditorComponent: textEditorComponent,
    labelComponent: labelComponent,
    changeRecurrenceInterval: changeRecurrenceInterval,
    interval: recurrenceOptions.interval,
    readOnly: readOnly
  }, restProps)), React.createElement(RadioGroup, {
    type: dxSchedulerCore.MONTHLY_RADIO_GROUP,
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
  labelComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  radioGroupComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  textEditorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  selectComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  weeklyRecurrenceSelectorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  appointmentData: PropTypes.shape({
    title: PropTypes.string,
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
    rRule: PropTypes.string,
    notes: PropTypes.string,
    additionalInformation: PropTypes.string,
    allDay: PropTypes.bool
  }).isRequired,
  onFieldChange: PropTypes.func,
  classes: PropTypes.object.isRequired,
  getMessage: PropTypes.func.isRequired,
  readOnly: PropTypes.bool,
  formatDate: PropTypes.func.isRequired,
  firstDayOfWeek: PropTypes.number.isRequired
} : void 0;
MonthlyBase.defaultProps = {
  onFieldChange: function onFieldChange() {
    return undefined;
  },
  readOnly: false
};
var Monthly = styles$14.withStyles(styles$R)(MonthlyBase, {
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
  var recurrenceOptions = React.useMemo(function () {
    return dxSchedulerCore.getRecurrenceOptions(rRule) || {};
  }, [rRule]);
  var changeRecurrenceInterval = React.useCallback(function (interval) {
    return dxSchedulerCore.checkIsNaturalNumber(interval) && onFieldChange({
      rRule: dxSchedulerCore.changeRecurrenceOptions(_objectSpread2({}, recurrenceOptions, {
        interval: interval
      }))
    });
  }, [recurrenceOptions, onFieldChange]);
  return React.createElement("div", restProps, React.createElement(IntervalEditor, _extends({
    repeatEveryLabel: getMessage('repeatEveryLabel'),
    repeatIntervalLabel: getMessage('yearsLabel'),
    textEditorComponent: textEditorComponent,
    labelComponent: labelComponent,
    changeRecurrenceInterval: changeRecurrenceInterval,
    interval: recurrenceOptions.interval,
    readOnly: readOnly
  }, restProps)), React.createElement(RadioGroup, {
    type: dxSchedulerCore.YEARLY_RADIO_GROUP,
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
  labelComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  radioGroupComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  textEditorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  selectComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  weeklyRecurrenceSelectorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  appointmentData: PropTypes.shape({
    title: PropTypes.string,
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
    rRule: PropTypes.string,
    notes: PropTypes.string,
    additionalInformation: PropTypes.string,
    allDay: PropTypes.bool
  }).isRequired,
  onFieldChange: PropTypes.func,
  classes: PropTypes.object.isRequired,
  getMessage: PropTypes.func.isRequired,
  readOnly: PropTypes.bool,
  formatDate: PropTypes.func.isRequired,
  firstDayOfWeek: PropTypes.number.isRequired
} : void 0;
YearlyBase.defaultProps = {
  onFieldChange: function onFieldChange() {
    return undefined;
  },
  readOnly: false
};
var Yearly = styles$14.withStyles(styles$S)(YearlyBase, {
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
      paddingLeft: spacing(1),
      opacity: 1,
      '@media (max-width: 700px)': {
        width: '100%',
        maxWidth: '700px',
        paddingRight: spacing(2),
        paddingLeft: spacing(2),
        maxHeight: 1000
      },
      '@media (min-width: 700px) and (max-width: 850px)': {
        width: '300px'
      },
      '@media (min-width: 850px) and (max-width: 1000px)': {
        width: '370px'
      },
      '@media (min-width: 1000px) and (max-width: 1150px)': {
        width: '440px'
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
      case dxSchedulerCore.RRULE_REPEAT_TYPES.DAILY:
        return Daily;

      case dxSchedulerCore.RRULE_REPEAT_TYPES.WEEKLY:
        return Weekly;

      case dxSchedulerCore.RRULE_REPEAT_TYPES.MONTHLY:
        return Monthly;

      case dxSchedulerCore.RRULE_REPEAT_TYPES.YEARLY:
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

  var recurrenceOptions = dxSchedulerCore.getRecurrenceOptions(appointmentData.rRule) || {};
  var MainLayoutComponent = getLayoutComponent(recurrenceOptions);
  var frequency = dxSchedulerCore.getFrequencyString(recurrenceOptions.freq);
  var rRule = appointmentData.rRule,
      startDate = appointmentData.startDate;
  var changeFrequency = React.useCallback(function (repeatType) {
    return dxSchedulerCore.handleChangeFrequency(repeatType, rRule, startDate, onFieldChange);
  }, [rRule, startDate, onFieldChange]);
  var selectOptions = React.useMemo(function () {
    return dxSchedulerCore.getAvailableRecurrenceOptions(getMessage);
  }, [getMessage]);
  return React.createElement("div", _extends({
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes.root, true), _defineProperty(_classNames, classes.visible, visible), _defineProperty(_classNames, classes.invisible, !visible), _defineProperty(_classNames, "className", className), _classNames))
  }, restProps), React.createElement(Label, {
    text: getMessage('repeatLabel'),
    type: dxSchedulerCore.TITLE,
    className: classes.repeatLabel
  }), React.createElement(Select, {
    onValueChange: changeFrequency,
    availableOptions: selectOptions,
    value: frequency,
    type: dxSchedulerCore.OUTLINED_SELECT,
    className: classes.select,
    readOnly: readOnly
  }), React.createElement(MainLayoutComponent, {
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
  }), React.createElement(Label, {
    text: getMessage('endRepeatLabel'),
    className: classes.endRepeatLabel
  }), React.createElement(RadioGroup, {
    className: classes.radioGroup,
    type: dxSchedulerCore.END_REPEAT_RADIO_GROUP,
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
  locale: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  labelComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  radioGroupComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  textEditorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  dateEditorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  selectComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  weeklyRecurrenceSelectorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  onFieldChange: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  getMessage: PropTypes.func.isRequired,
  readOnly: PropTypes.bool,
  appointmentData: PropTypes.shape({
    title: PropTypes.string,
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
    rRule: PropTypes.string,
    notes: PropTypes.string,
    additionalInformation: PropTypes.string,
    allDay: PropTypes.bool
  }).isRequired,
  formatDate: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  firstDayOfWeek: PropTypes.number.isRequired
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
var Layout$9 = styles$14.withStyles(styles$T)(LayoutBase$a, {
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

  var _React$useState = React.useState(1),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      count = _React$useState2[0],
      setCount = _React$useState2[1];

  var _React$useState3 = React.useState(appointmentData.endDate),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      endDate = _React$useState4[0],
      setEndDate = _React$useState4[1];

  var rRule = appointmentData.rRule;
  var recurrenceOptions = React.useMemo(function () {
    return dxSchedulerCore.getRecurrenceOptions(rRule) || {};
  }, [rRule]);
  var changeRecurrenceCount = React.useCallback(function (nextCount) {
    return dxSchedulerCore.checkIsNaturalNumber(nextCount) && onFieldChange({
      rRule: dxSchedulerCore.changeRecurrenceOptions(_objectSpread2({}, recurrenceOptions, {
        count: nextCount
      }))
    });
  }, [recurrenceOptions, onFieldChange]);
  var changeRecurrenceEndDate = React.useCallback(function (date) {
    if (moment(date).isValid()) {
      onFieldChange({
        rRule: dxSchedulerCore.changeRecurrenceOptions(_objectSpread2({}, recurrenceOptions, {
          until: date
        }))
      });
    }
  }, [recurrenceOptions, onFieldChange]);
  var countEditorProps = React.useMemo(function () {
    return {
      endAdornment: React.createElement(InputAdornment, {
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
      rRule: dxSchedulerCore.changeRecurrenceOptions(_objectSpread2({}, recurrenceOptions, {}, change))
    });
  };

  return React.createElement(RadioGroup$1, _extends({
    onChange: onRadioGroupValueChange,
    value: value
  }, restProps), React.createElement(FormControlLabel, {
    value: "never",
    control: React.createElement(Radio, {
      color: "primary"
    }),
    label: getMessage('never'),
    classes: {
      label: classes.radioLabel
    },
    disabled: readOnly
  }), React.createElement(FormControlLabel, {
    className: classes.formControl,
    value: "endAfter",
    classes: {
      label: classes.controlLabel
    },
    control: React.createElement(Radio, {
      color: "primary"
    }),
    disabled: readOnly,
    label: React.createElement(Grid, {
      container: true,
      direction: "row",
      justify: "flex-start",
      alignItems: "center"
    }, React.createElement(Label, {
      className: classes.label,
      text: getMessage('onLabel')
    }), React.createElement(TextEditor, {
      readOnly: readOnly || value !== 'endAfter',
      className: classes.textEditor,
      value: recurrenceCount,
      type: dxSchedulerCore.NUMBER_EDITOR,
      onValueChange: changeRecurrenceCount,
      InputProps: countEditorProps
    }))
  }), React.createElement(FormControlLabel, {
    className: classes.formControl,
    classes: {
      label: classes.controlLabel
    },
    value: "endBy",
    disabled: readOnly,
    control: React.createElement(Radio, {
      color: "primary"
    }),
    label: React.createElement(Grid, {
      container: true,
      direction: "row",
      justify: "flex-start",
      alignItems: "center"
    }, React.createElement(Label, {
      className: classes.label,
      text: getMessage('afterLabel')
    }), React.createElement(DateEditor, {
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
  labelComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  textEditorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  dateEditorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  locale: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
  classes: PropTypes.object.isRequired,
  getMessage: PropTypes.func,
  onFieldChange: PropTypes.func,
  appointmentData: PropTypes.shape({
    title: PropTypes.string,
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
    rRule: PropTypes.string,
    notes: PropTypes.string,
    additionalInformation: PropTypes.string,
    allDay: PropTypes.bool
  }).isRequired,
  readOnly: PropTypes.bool
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
var EndRepeatEditor = styles$14.withStyles(styles$U)(EndRepeatEditorBase, {
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

  var _useState = React.useState(appointmentData.startDate.getDate()),
      _useState2 = _slicedToArray(_useState, 2),
      dayNumber = _useState2[0],
      setDayNumber = _useState2[1];

  var _useState3 = React.useState(Math.trunc((appointmentData.startDate.getDate() - 1) / 7)),
      _useState4 = _slicedToArray(_useState3, 2),
      stateWeekNumber = _useState4[0],
      setStateWeekNumber = _useState4[1];

  var _useState5 = React.useState(appointmentData.startDate.getDay()),
      _useState6 = _slicedToArray(_useState5, 2),
      stateDayOfWeek = _useState6[0],
      setStateDayOfWeek = _useState6[1];

  var rRule = appointmentData.rRule;
  var recurrenceOptions = React__default.useMemo(function () {
    return dxSchedulerCore.getRecurrenceOptions(rRule) || {};
  }, [rRule]);
  var changeByMonthDay = React__default.useCallback(function (nextByMonthDay) {
    return onFieldChange({
      rRule: dxSchedulerCore.handleStartDateChange(nextByMonthDay, recurrenceOptions)
    });
  }, [recurrenceOptions]);

  var _getRadioGroupDisplay = dxSchedulerCore.getRadioGroupDisplayData(recurrenceOptions, stateDayOfWeek, stateWeekNumber, dayNumber, 'onDayNumber', 'onDayOfWeek'),
      dayOfWeek = _getRadioGroupDisplay.dayOfWeek,
      weekNumber = _getRadioGroupDisplay.weekNumber,
      dayNumberTextField = _getRadioGroupDisplay.dayNumberTextField,
      value = _getRadioGroupDisplay.radioGroupValue;

  var changeWeekNumber = React__default.useCallback(function (nextWeekNumber) {
    return onFieldChange({
      rRule: dxSchedulerCore.handleWeekNumberChange(nextWeekNumber, recurrenceOptions)
    });
  }, [recurrenceOptions]);
  var weekNumbers = React__default.useMemo(function () {
    return dxSchedulerCore.getWeekNumberLabels(getMessage);
  }, [getMessage]);
  var changeDayOfWeek = React__default.useCallback(function (nextDayOfWeek) {
    return onFieldChange({
      rRule: dxSchedulerCore.changeRecurrenceOptions(_objectSpread2({}, recurrenceOptions, {
        byweekday: nextDayOfWeek > 0 ? nextDayOfWeek - 1 : 6
      }))
    });
  }, [recurrenceOptions]);
  var daysOfWeek = React__default.useMemo(function () {
    return dxSchedulerCore.getDaysOfWeek(formatDate, firstDayOfWeek);
  }, [formatDate, firstDayOfWeek]);
  var onDayNumberReadOnly = readOnly || value !== 'onDayNumber';
  var onDayOfWeekReadOnly = readOnly || value !== 'onDayOfWeek';

  var onRadioGroupValueChange = function onRadioGroupValueChange(event) {
    switch (event.target.value) {
      case 'onDayNumber':
        setStateWeekNumber(weekNumber);
        setStateDayOfWeek(dayOfWeek);
        onFieldChange({
          rRule: dxSchedulerCore.changeRecurrenceOptions(_objectSpread2({}, recurrenceOptions, {
            bymonthday: dayNumber,
            byweekday: undefined
          }))
        });
        break;

      case 'onDayOfWeek':
        setDayNumber(recurrenceOptions.bymonthday || dayNumber);
        onFieldChange({
          rRule: dxSchedulerCore.handleToDayOfWeekChange(stateWeekNumber, stateDayOfWeek, recurrenceOptions)
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
      type: dxSchedulerCore.NUMBER_EDITOR,
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
  classes: PropTypes.object.isRequired,
  getMessage: PropTypes.func,
  onFieldChange: PropTypes.func,
  labelComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  textEditorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  selectComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  appointmentData: PropTypes.shape({
    title: PropTypes.string,
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
    rRule: PropTypes.string,
    notes: PropTypes.string,
    additionalInformation: PropTypes.string,
    allDay: PropTypes.bool
  }).isRequired,
  readOnly: PropTypes.bool,
  formatDate: PropTypes.func.isRequired,
  firstDayOfWeek: PropTypes.number.isRequired
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
var MonthlyEditor = styles$14.withStyles(styles$V)(MonthlyEditorBase, {
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
      type: dxSchedulerCore.NUMBER_EDITOR,
      onValueChange: changeByMonthDay
    }))
  }));
});
ChangeMonthEditorBase.propTypes = {
  classes: PropTypes.object.isRequired,
  getMessage: PropTypes.func,
  labelComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  textEditorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  selectComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  readOnly: PropTypes.bool,
  month: PropTypes.number.isRequired,
  changeMonth: PropTypes.func.isRequired,
  months: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired,
  dayNumber: PropTypes.number.isRequired,
  changeByMonthDay: PropTypes.func.isRequired,
  className: PropTypes.string
};
ChangeMonthEditorBase.defaultProps = {
  getMessage: function getMessage() {
    return undefined;
  },
  readOnly: false,
  className: undefined
};
var ChangeMonthEditor = styles$14.withStyles(styles$W)(ChangeMonthEditorBase, {
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
  classes: PropTypes.object.isRequired,
  getMessage: PropTypes.func,
  labelComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  selectComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  readOnly: PropTypes.bool,
  month: PropTypes.number.isRequired,
  changeMonth: PropTypes.func.isRequired,
  months: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired,
  weekNumber: PropTypes.number.isRequired,
  changeWeekNumber: PropTypes.func.isRequired,
  weekNumbers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired,
  dayOfWeek: PropTypes.number.isRequired,
  changeDayOfWeek: PropTypes.func.isRequired,
  daysOfWeek: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired,
  className: PropTypes.string
};
ChangeWeekNumberEditorBase.defaultProps = {
  getMessage: function getMessage() {
    return undefined;
  },
  readOnly: false,
  className: undefined
};
var ChangeWeekNumberEditor = styles$14.withStyles(styles$X)(ChangeWeekNumberEditorBase, {
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

  var _useState = React.useState(appointmentData.startDate.getDate()),
      _useState2 = _slicedToArray(_useState, 2),
      dayNumber = _useState2[0],
      setDayNumber = _useState2[1];

  var _useState3 = React.useState(Math.trunc((appointmentData.startDate.getDate() - 1) / 7)),
      _useState4 = _slicedToArray(_useState3, 2),
      stateWeekNumber = _useState4[0],
      setStateWeekNumber = _useState4[1];

  var _useState5 = React.useState(appointmentData.startDate.getDay()),
      _useState6 = _slicedToArray(_useState5, 2),
      stateDayOfWeek = _useState6[0],
      setStateDayOfWeek = _useState6[1];

  var rRule = appointmentData.rRule;
  var recurrenceOptions = React__default.useMemo(function () {
    return dxSchedulerCore.getRecurrenceOptions(rRule) || {};
  }, [rRule]);
  var changeByMonthDay = React__default.useCallback(function (nextByMonthDay) {
    return onFieldChange({
      rRule: dxSchedulerCore.handleStartDateChange(nextByMonthDay, recurrenceOptions)
    });
  }, [recurrenceOptions]);

  var _getRadioGroupDisplay = dxSchedulerCore.getRadioGroupDisplayData(recurrenceOptions, stateDayOfWeek, stateWeekNumber, dayNumber, 'onDayAndMonth', 'onDayOfWeek'),
      dayOfWeek = _getRadioGroupDisplay.dayOfWeek,
      weekNumber = _getRadioGroupDisplay.weekNumber,
      dayNumberTextField = _getRadioGroupDisplay.dayNumberTextField,
      value = _getRadioGroupDisplay.radioGroupValue;

  var month = getCurrentMonth(recurrenceOptions, appointmentData);
  var changeMonth = React__default.useCallback(function (nextMonth) {
    return onFieldChange({
      rRule: dxSchedulerCore.changeRecurrenceOptions(_objectSpread2({}, recurrenceOptions, {
        bymonth: nextMonth
      }))
    });
  }, [recurrenceOptions]);
  var months = React__default.useMemo(function () {
    return dxSchedulerCore.getMonths(formatDate);
  }, [formatDate]);
  var monthsWithOf = React__default.useMemo(function () {
    return dxSchedulerCore.getMonthsWithOf(getMessage, formatDate);
  }, [getMessage, formatDate]);
  var changeWeekNumber = React__default.useCallback(function (nextWeekNumber) {
    return onFieldChange({
      rRule: dxSchedulerCore.handleWeekNumberChange(nextWeekNumber, recurrenceOptions)
    });
  }, [recurrenceOptions]);
  var weekNumbers = React__default.useMemo(function () {
    return dxSchedulerCore.getWeekNumberLabels(getMessage);
  }, [getMessage]);
  var changeDayOfWeek = React__default.useCallback(function (nextDayOfWeek) {
    return onFieldChange({
      rRule: dxSchedulerCore.changeRecurrenceOptions(_objectSpread2({}, recurrenceOptions, {
        byweekday: nextDayOfWeek > 0 ? nextDayOfWeek - 1 : 6
      }))
    });
  }, [recurrenceOptions]);
  var daysOfWeek = React__default.useMemo(function () {
    return dxSchedulerCore.getDaysOfWeek(formatDate, firstDayOfWeek);
  }, [formatDate, firstDayOfWeek]);
  var onDayAndMonthReadOnly = readOnly || value !== 'onDayAndMonth';
  var onDayOfWeekReadOnly = readOnly || value !== 'onDayOfWeek';

  var onRadioGroupValueChange = function onRadioGroupValueChange(event) {
    switch (event.target.value) {
      case 'onDayAndMonth':
        setStateWeekNumber(weekNumber);
        setStateDayOfWeek(dayOfWeek);
        onFieldChange({
          rRule: dxSchedulerCore.changeRecurrenceOptions(_objectSpread2({}, recurrenceOptions, {
            bymonthday: dayNumber,
            byweekday: undefined
          }))
        });
        break;

      case 'onDayOfWeek':
        setDayNumber(recurrenceOptions.bymonthday || dayNumber);
        onFieldChange({
          rRule: dxSchedulerCore.handleToDayOfWeekChange(stateWeekNumber, stateDayOfWeek, recurrenceOptions)
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
  getMessage: PropTypes.func,
  onFieldChange: PropTypes.func,
  labelComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  textEditorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  selectComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  appointmentData: PropTypes.shape({
    title: PropTypes.string,
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
    rRule: PropTypes.string,
    notes: PropTypes.string,
    additionalInformation: PropTypes.string,
    allDay: PropTypes.bool
  }).isRequired,
  formatDate: PropTypes.func.isRequired,
  readOnly: PropTypes.bool,
  firstDayOfWeek: PropTypes.number.isRequired
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
    case dxSchedulerCore.END_REPEAT_RADIO_GROUP:
      return React.createElement(EndRepeatEditor, _extends({
        dateEditorComponent: dateEditorComponent,
        locale: locale
      }, commonProps, restProps));

    case dxSchedulerCore.MONTHLY_RADIO_GROUP:
      return React.createElement(MonthlyEditor, _extends({
        selectComponent: selectComponent,
        formatDate: formatDate,
        firstDayOfWeek: firstDayOfWeek
      }, commonProps, restProps));

    case dxSchedulerCore.YEARLY_RADIO_GROUP:
      return React.createElement(YearlyEditor, _extends({
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
  getMessage: PropTypes.func.isRequired,
  labelComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  textEditorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  dateEditorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  selectComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  locale: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  readOnly: PropTypes.bool,
  type: PropTypes.string.isRequired,
  appointmentData: PropTypes.shape({
    title: PropTypes.string,
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
    rRule: PropTypes.string,
    notes: PropTypes.string,
    additionalInformation: PropTypes.string,
    allDay: PropTypes.bool
  }).isRequired,
  onFieldChange: PropTypes.func.isRequired,
  formatDate: PropTypes.func.isRequired,
  firstDayOfWeek: PropTypes.number.isRequired
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

  var recurrenceOptions = dxSchedulerCore.getRecurrenceOptions(rRule);
  var daysOfWeekArray = dxSchedulerCore.getDaysOfWeekArray(firstDayOfWeek);
  var daysOfWeekDates = dxSchedulerCore.getDaysOfWeekDates(firstDayOfWeek);
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
          rRule: dxSchedulerCore.changeRecurrenceOptions(dxSchedulerCore.handleWeekDaysChange(recurrenceOptions, dayOfWeek, onValueChange))
        });
      }
    }, formatDate(daysOfWeekDates[index], dxSchedulerCore.WEEK_DAY_OPTIONS));
  }));
});
process.env.NODE_ENV !== "production" ? WeeklyRecurrenceSelectorBase.propTypes = {
  formatDate: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  rRule: PropTypes.string.isRequired,
  onValueChange: PropTypes.func,
  readOnly: PropTypes.bool,
  className: PropTypes.string,
  firstDayOfWeek: PropTypes.number.isRequired
} : void 0;
WeeklyRecurrenceSelectorBase.defaultProps = {
  onValueChange: function onValueChange() {
    return undefined;
  },
  readOnly: false,
  className: undefined
};
var WeeklyRecurrenceSelector = styles$14.withStyles(styles$Y)(WeeklyRecurrenceSelectorBase, {
  name: 'WeeklyRecurrenceSelector'
});

var styles$Z = {
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
};
var OverlayContainerBase = React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, ["children", "classes", "className"]);

  return React.createElement("div", _extends({
    ref: ref,
    className: classNames(classes.container, className)
  }, restProps), children);
});
OverlayContainerBase.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  className: PropTypes.string
};
OverlayContainerBase.defaultProps = {
  children: null,
  className: undefined
};
var OverlayContainer = styles$14.withStyles(styles$Z, {
  name: 'OverlayContainer'
})(OverlayContainerBase);

var AppointmentForm = dxReactCore.withComponents({
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
})(dxReactScheduler.AppointmentForm);

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

  return React.createElement(Appointment, _extends({
    className: classNames(classes.appointment, className),
    type: type
  }, restProps), fromPrev && React.createElement(SplitIndicator, {
    position: dxSchedulerCore.POSITION_START,
    appointmentType: type
  }), React.createElement(AppointmentContent, {
    data: data,
    type: type,
    recurringIconComponent: Repeat,
    formatDate: formatDate,
    durationType: durationType
  }), toNext && React.createElement(SplitIndicator, {
    position: dxSchedulerCore.POSITION_END,
    appointmentType: type
  }));
};

process.env.NODE_ENV !== "production" ? DraftAppointmentBase.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  fromPrev: PropTypes.bool.isRequired,
  toNext: PropTypes.bool.isRequired,
  formatDate: PropTypes.func.isRequired,
  durationType: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string
} : void 0;
DraftAppointmentBase.defaultProps = {
  durationType: undefined,
  className: undefined,
  type: undefined
};
var DraftAppointment = styles$14.withStyles(draftStyles, {
  name: 'DraftAppointment'
})(DraftAppointmentBase);
var SourceAppointment = styles$14.withStyles(sourceStyles, {
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
var Container$2 = styles$14.withStyles(styles$_, {
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

var ResizeBase = React.memo(function (_ref2) {
  var _classNames;

  var classes = _ref2.classes,
      className = _ref2.className,
      position = _ref2.position,
      appointmentType = _ref2.appointmentType,
      restProps = _objectWithoutProperties(_ref2, ["classes", "className", "position", "appointmentType"]);

  var vertical = appointmentType === dxSchedulerCore.VERTICAL_TYPE;
  var start = position === dxSchedulerCore.POSITION_START;
  return React.createElement("div", _extends({
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes.resize, true), _defineProperty(_classNames, classes.verticalStart, vertical && start), _defineProperty(_classNames, classes.verticalEnd, vertical && !start), _defineProperty(_classNames, classes.horizontalStart, !vertical && start), _defineProperty(_classNames, classes.horizontalEnd, !vertical && !start), _classNames), className)
  }, restProps));
});
process.env.NODE_ENV !== "production" ? ResizeBase.propTypes = {
  classes: PropTypes.object.isRequired,
  position: PropTypes.oneOf([dxSchedulerCore.POSITION_START, dxSchedulerCore.POSITION_END]).isRequired,
  appointmentType: PropTypes.oneOf([dxSchedulerCore.HORIZONTAL_TYPE, dxSchedulerCore.VERTICAL_TYPE]).isRequired,
  className: PropTypes.string
} : void 0;
ResizeBase.defaultProps = {
  className: undefined
};
var Resize = styles$14.withStyles(styles$$, {
  name: 'Resize'
})(ResizeBase);

var DragDropProvider = dxReactCore.withComponents({
  DraftAppointment: DraftAppointment,
  SourceAppointment: SourceAppointment,
  Container: Container$2,
  Resize: Resize
})(dxReactScheduler.DragDropProvider);

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

  return React.createElement(Button$1, _extends({
    className: classNames(classes.button, className),
    variant: "outlined",
    onClick: handleClick
  }, restProps), getMessage('today'));
};

process.env.NODE_ENV !== "production" ? TodayButtonBase.propTypes = {
  setCurrentDate: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  getMessage: PropTypes.func.isRequired
} : void 0;
TodayButtonBase.defaultProps = {
  className: undefined
};
var TodayButton = styles$14.withStyles(styles$10)(TodayButtonBase, {
  name: 'TodayButton'
});

var TodayButton$1 = dxReactCore.withComponents({
  Button: TodayButton
})(dxReactScheduler.TodayButton);

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

  return React.createElement(Dialog, _extends({
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
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  onHide: PropTypes.func.isRequired,
  target: PropTypes.object.isRequired,
  visible: PropTypes.bool,
  className: PropTypes.string
} : void 0;
OverlayBase$1.defaultProps = {
  className: undefined,
  visible: false
};
var Overlay$2 = styles$14.withStyles(styles$11, {
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

var LayoutBase$b = React.memo(function (_ref2) {
  var Button = _ref2.buttonComponent,
      handleClose = _ref2.handleClose,
      commit = _ref2.commit,
      availableOperations = _ref2.availableOperations,
      getMessage = _ref2.getMessage,
      isDeleting = _ref2.isDeleting,
      classes = _ref2.classes,
      restProps = _objectWithoutProperties(_ref2, ["buttonComponent", "handleClose", "commit", "availableOperations", "getMessage", "isDeleting", "classes"]);

  var _React$useState = React.useState(availableOperations[0].value),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      currentValue = _React$useState2[0],
      setCurrentValue = _React$useState2[1];

  var handleChange = React.useCallback(function (event) {
    setCurrentValue(event.target.value);
  });

  var onCommitButtonClick = function onCommitButtonClick() {
    commit(currentValue);
  };

  return React.createElement("div", restProps, React.createElement(DialogTitle, {
    className: classes.title,
    disableTypography: true
  }, getMessage(isDeleting ? 'menuDeleteTitle' : 'menuEditTitle')), React.createElement(DialogContent, null, React.createElement(RadioGroup$1, {
    value: currentValue,
    onChange: handleChange
  }, availableOperations.map(function (operation) {
    return React.createElement(FormControlLabel, {
      value: operation.value,
      control: React.createElement(Radio, null),
      label: operation.title,
      key: operation.value,
      classes: {
        label: classes.content
      }
    });
  }))), React.createElement(DialogActions, null, React.createElement(Button, {
    onClick: handleClose,
    title: getMessage('cancelButton')
  }), React.createElement(Button, {
    onClick: onCommitButtonClick,
    title: getMessage('commitButton'),
    color: "primary"
  })));
});
process.env.NODE_ENV !== "production" ? LayoutBase$b.propTypes = {
  buttonComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  availableOperations: PropTypes.array.isRequired,
  handleClose: PropTypes.func,
  commit: PropTypes.func,
  getMessage: PropTypes.func,
  isDeleting: PropTypes.bool,
  classes: PropTypes.object.isRequired
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
var Layout$a = styles$14.withStyles(styles$12, {
  name: 'Layout'
})(LayoutBase$b);

var Button = function Button(_ref) {
  var onClick = _ref.onClick,
      title = _ref.title,
      restProps = _objectWithoutProperties(_ref, ["onClick", "title"]);

  return React.createElement(Button$1, _extends({
    onClick: onClick
  }, restProps), title);
};
process.env.NODE_ENV !== "production" ? Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string
} : void 0;
Button.defaultProps = {
  title: ''
};

var EditRecurrenceMenu = dxReactCore.withComponents({
  Layout: Layout$a,
  Overlay: Overlay$2,
  Button: Button,
  Container: OverlayContainer
})(dxReactScheduler.EditRecurrenceMenu);

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

var LayoutBase$c = React.memo(function (_ref2) {
  var Button = _ref2.buttonComponent,
      handleCancel = _ref2.handleCancel,
      handleConfirm = _ref2.handleConfirm,
      getMessage = _ref2.getMessage,
      isDeleting = _ref2.isDeleting,
      appointmentData = _ref2.appointmentData,
      classes = _ref2.classes,
      restProps = _objectWithoutProperties(_ref2, ["buttonComponent", "handleCancel", "handleConfirm", "getMessage", "isDeleting", "appointmentData", "classes"]);

  return React.createElement("div", restProps, React.createElement(DialogTitle, {
    className: classes.title,
    disableTypography: true
  }, getMessage(isDeleting ? 'confirmDeleteMessage' : 'confirmCancelMessage')), React.createElement(DialogActions, null, React.createElement(Button, {
    onClick: handleCancel,
    title: getMessage('cancelButton')
  }), React.createElement(Button, {
    onClick: handleConfirm,
    title: getMessage(isDeleting ? 'deleteButton' : 'discardButton'),
    color: "primary"
  })));
});
LayoutBase$c.propTypes = {
  buttonComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  handleCancel: PropTypes.func,
  handleConfirm: PropTypes.func,
  getMessage: PropTypes.func,
  isDeleting: PropTypes.bool,
  appointmentData: PropTypes.shape({
    title: PropTypes.string,
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
    rRule: PropTypes.string,
    notes: PropTypes.string,
    additionalInformation: PropTypes.string,
    allDay: PropTypes.bool
  }),
  classes: PropTypes.object.isRequired
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
var Layout$b = styles$14.withStyles(styles$13, {
  name: 'Layout'
})(LayoutBase$c);

var ConfirmationDialog = dxReactCore.withComponents({
  Overlay: Overlay$2,
  Layout: Layout$b,
  Container: OverlayContainer,
  Button: Button
})(dxReactScheduler.ConfirmationDialog);

exports.AllDayPanel = AllDayPanel;
exports.AppointmentForm = AppointmentForm;
exports.AppointmentTooltip = AppointmentTooltip;
exports.Appointments = Appointments;
exports.ConfirmationDialog = ConfirmationDialog;
exports.DateNavigator = DateNavigator;
exports.DayView = DayView;
exports.DragDropProvider = DragDropProvider;
exports.EditRecurrenceMenu = EditRecurrenceMenu;
exports.MonthView = MonthView;
exports.Scheduler = Scheduler;
exports.TodayButton = TodayButton$1;
exports.Toolbar = Toolbar$1;
exports.ViewSwitcher = ViewSwitcher;
exports.WeekView = WeekView;
//# sourceMappingURL=dx-react-scheduler-material-ui.cjs.js.map
