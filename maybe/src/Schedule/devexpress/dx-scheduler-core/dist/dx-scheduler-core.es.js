/**
 * Bundle of @devexpress/dx-scheduler-core
 * Generated: 2019-11-07
 * Version: 2.2.1
 * License: https://js.devexpress.com/Licensing
 */

import moment from 'moment';
import { RRuleSet, RRule } from 'rrule';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var VERTICAL_TYPE = 'vertical';
var HORIZONTAL_TYPE = 'horizontal';
var SCROLL_OFFSET = 50;
var SCROLL_SPEED_PX = 30;
var SECONDS = 'seconds';
var MINUTES = 'minutes';
var HOURS = 'hours';
var RESIZE_TOP = 'resize-start';
var RESIZE_BOTTOM = 'resize-end';
var POSITION_START = 'start';
var POSITION_END = 'end';
var AUTO_HEIGHT = 'auto';
var DAY_OPTIONS = { day: 'numeric' };
var WEEK_DAY_OPTIONS = { weekday: 'short' };
var SHORT_MONTH_OPTIONS = { month: 'short' };
var HOUR_MINUTE_OPTIONS = { hour: 'numeric', minute: 'numeric' };
var MONTH_YEAR_OPTIONS = { month: 'long', year: 'numeric' };
var DAY_SHORT_MONTH_OPTIONS = { day: 'numeric', month: 'short' };
var SHORT_MONTH_LONG_YEAR_OPTIONS = { month: 'short', year: 'numeric' };
var SHORT_MONTH_SHORT_YEAR_OPTIONS = { month: 'short', year: '2-digit' };
var DAY_LONG_MONTH_LONG_YEAR_OPTIONS = { day: 'numeric', month: 'long', year: 'numeric' };
var DAY_SHORT_MONTH_LONG_YEAR_OPTIONS = {
    day: 'numeric', month: 'short', year: 'numeric',
};
var DAY_SHORT_MONTH_SHORT_YEAR_OPTIONS = {
    day: 'numeric', month: 'short', year: '2-digit',
};
var LONG_WEEK_DAY_OPTIONS = { weekday: 'long' };
var LONG_MONTH_OPTIONS = { month: 'long' };
var DAY_LONG_MONTH_OPTIONS = { day: 'numeric', month: 'long' };
var EMPTY_OPTIONS = {};
var RECURRENCE_EDIT_SCOPE = {
    ALL: 'all',
    CURRENT_AND_FOLLOWING: 'currentAndFollowing',
    CURRENT: 'current',
};
var TOGGLE_APPOINTMENT_FORM_VISIBILITY = 'toggleAppointmentFormVisibility';
var TOGGLE_APPOINTMENT_TOOLTIP_VISIBILITY = 'toggleAppointmentTooltipVisibility';
var WEEKDAY_INTERVAL = 'weekdayInterval';

var computed = function (getters, viewName, baseComputed, defaultValue) {
    if (getters.currentView.name !== viewName && !!defaultValue) {
        return defaultValue;
    }
    return baseComputed(getters, viewName);
};
var appointmentHeightType = function (appointment, cellDuration) {
    var durationRatio = appointment.end.clone().diff(appointment.start, 'minutes') / cellDuration;
    if (durationRatio === 1)
        return 'middle';
    if (durationRatio > 1)
        return 'long';
    return 'short';
};
var toPercentage = function (value, total) { return (value * 100) / total; };
var createExcludedInterval = function (day, start) {
    var leftBound = moment(start.day(day));
    return [
        leftBound,
        moment(leftBound).hour(start.hour()).endOf('day'),
    ];
};
var excludedIntervals = function (excludedDays, start) { return excludedDays
    .map(function (day) { return (day === 0 ? 7 : day); })
    .sort(function (a, b) { return a - b; })
    .reduce(function (acc, day, i, allDays) {
    if (i && day === allDays[i - 1] + 1) {
        acc[i - 1][1].day(day);
    }
    else {
        acc.push(createExcludedInterval(day, start));
    }
    return acc;
}, []); };
var byDayPredicate = function (boundary, date) { return (boundary.isSameOrAfter(date, 'day')
    && !boundary.isSame(boundary.clone().startOf('day'))); };
var inInterval = function (date, interval) { return date.isBetween(interval[0], interval[1], undefined, '[]'); };
var viewPredicate = function (appointment, left, right, excludedDays, removeAllDayAppointments) {
    if (excludedDays === void 0) { excludedDays = []; }
    if (removeAllDayAppointments === void 0) { removeAllDayAppointments = false; }
    var start = appointment.start, end = appointment.end;
    var isAppointmentInBoundary = end.isAfter(left)
        && start.isBefore(right);
    var isAppointmentInExcludedDays = !!excludedIntervals(excludedDays, moment(left))
        .find(function (interval) { return (inInterval(start, interval) && inInterval(end, interval)); });
    var considerAllDayAppointment = removeAllDayAppointments
        ? moment(end).diff(start, 'hours') < 24 && !appointment.allDay
        : true;
    return isAppointmentInBoundary && !isAppointmentInExcludedDays && considerAllDayAppointment;
};
var sortAppointments = function (appointments, byDay) {
    if (byDay === void 0) { byDay = false; }
    return appointments
        .slice().sort(function (a, b) {
        var compareValue = byDay ? 'day' : undefined;
        if (a.start.isBefore(b.start, compareValue))
            return -1;
        if (a.start.isAfter(b.start, compareValue))
            return 1;
        if (a.start.isSame(b.start, compareValue)) {
            if (a.end.isBefore(b.end))
                return 1;
            if (a.end.isAfter(b.end))
                return -1;
        }
        return 0;
    });
};
var findOverlappedAppointments = function (sortedAppointments, byDay) {
    if (byDay === void 0) { byDay = false; }
    var appointments = sortedAppointments.slice();
    var groups = [];
    var totalIndex = 0;
    while (totalIndex < appointments.length) {
        groups.push([]);
        var current = appointments[totalIndex];
        var currentGroup = groups[groups.length - 1];
        var next = appointments[totalIndex + 1];
        var maxBoundary = current.end;
        currentGroup.push(current);
        totalIndex += 1;
        while (next && (maxBoundary.isAfter(next.start)
            || (byDay && byDayPredicate(maxBoundary, next.start)))) {
            currentGroup.push(next);
            if (maxBoundary.isBefore(next.end))
                maxBoundary = next.end;
            totalIndex += 1;
            next = appointments[totalIndex];
        }
    }
    return groups;
};
var isMidnight = function (date) { return date.isSame(date.clone().startOf('day')); };
var maxBoundaryPredicate = function (maxBoundary, startDate) { return ((maxBoundary.isBefore(startDate, 'day'))
    || (isMidnight(maxBoundary) && maxBoundary.isSame(startDate, 'day'))); };
var adjustAppointments = function (groups, byDay) {
    if (byDay === void 0) { byDay = false; }
    return groups.map(function (items) {
        var offset = 0;
        var reduceValue = 1;
        var appointments = items.slice();
        var groupLength = appointments.length;
        for (var startIndex = 0; startIndex < groupLength; startIndex += 1) {
            var appointment = appointments[startIndex];
            if (appointment.offset === undefined) {
                var maxBoundary = appointment.end;
                appointment.offset = offset;
                for (var index = startIndex + 1; index < groupLength; index += 1) {
                    if (appointments[index].offset === undefined) {
                        if ((!byDay && maxBoundary.isSameOrBefore(appointments[index].start))
                            || (byDay && maxBoundaryPredicate(maxBoundary, appointments[index].start))) {
                            maxBoundary = appointments[index].end;
                            appointments[index].offset = offset;
                        }
                    }
                }
                offset += 1;
                if (reduceValue < offset)
                    reduceValue = offset;
            }
        }
        return { items: appointments, reduceValue: reduceValue };
    });
};
var calculateFirstDateOfWeek = function (currentDate, firstDayOfWeek, excludedDays) {
    if (excludedDays === void 0) { excludedDays = []; }
    var currentLocale = moment.locale();
    moment.updateLocale('tmp-locale', {
        week: { dow: firstDayOfWeek, doy: 1 },
    });
    var firstDateOfWeek = moment(currentDate).startOf('week');
    if (excludedDays.indexOf(firstDayOfWeek) !== -1) {
        excludedDays.slice().sort().forEach(function (day) {
            if (day === firstDateOfWeek.day()) {
                firstDateOfWeek.add(1, 'days');
            }
        });
    }
    moment.locale(currentLocale);
    return firstDateOfWeek.toDate();
};
var unwrapGroups = function (groups) { return groups.reduce(function (acc, _a) {
    var items = _a.items, reduceValue = _a.reduceValue;
    acc.push.apply(acc, __spread(items.map(function (appointment) { return ({
        start: appointment.start,
        end: appointment.end,
        dataItem: appointment.dataItem,
        offset: appointment.offset,
        reduceValue: reduceValue,
        fromPrev: moment(appointment.start).diff(appointment.dataItem.startDate, 'minutes') > 1,
        toNext: moment(appointment.dataItem.endDate).diff(appointment.end, 'minutes') > 1,
    }); })));
    return acc;
}, []); };
var getAppointmentStyle = function (_a) {
    var top = _a.top, left = _a.left, width = _a.width, height = _a.height;
    return ({
        height: height,
        width: width + "%",
        transform: "translateY(" + top + "px)",
        msTransform: "translateY(" + top + "px)",
        left: left + "%",
        position: 'absolute',
    });
};
var rectCalculatorBase = function (appointment, getRectByDates, options) { return getRectByDates(appointment.start, appointment.end, options); };
var horizontalRectCalculator = function (appointment, _a) {
    var rectByDates = _a.rectByDates, multiline = _a.multiline, _b = _a.rectByDatesMeta, cellElementsMeta = _b.cellElementsMeta, viewCellsData = _b.viewCellsData;
    var _c = rectCalculatorBase(appointment, rectByDates, {
        multiline: multiline,
        cellElementsMeta: cellElementsMeta,
        viewCellsData: viewCellsData,
    }), top = _c.top, left = _c.left, width = _c.width, height = _c.height, parentWidth = _c.parentWidth;
    return {
        top: top + ((height / appointment.reduceValue) * appointment.offset),
        height: height / appointment.reduceValue,
        left: toPercentage(left, parentWidth),
        width: toPercentage(width, parentWidth),
        dataItem: appointment.dataItem,
        fromPrev: appointment.fromPrev,
        toNext: appointment.toNext,
        type: HORIZONTAL_TYPE,
    };
};
var verticalRectCalculator = function (appointment, _a) {
    var rectByDates = _a.rectByDates, multiline = _a.multiline, _b = _a.rectByDatesMeta, viewCellsData = _b.viewCellsData, cellDuration = _b.cellDuration, cellElementsMeta = _b.cellElementsMeta, excludedDays = _b.excludedDays;
    var _c = rectCalculatorBase(appointment, rectByDates, {
        multiline: multiline,
        viewCellsData: viewCellsData,
        cellDuration: cellDuration,
        excludedDays: excludedDays,
        cellElementsMeta: cellElementsMeta,
    }), top = _c.top, left = _c.left, width = _c.width, height = _c.height, parentWidth = _c.parentWidth;
    var widthInPx = width / appointment.reduceValue;
    return {
        top: top,
        height: height,
        left: toPercentage(left + (widthInPx * appointment.offset), parentWidth),
        width: toPercentage(widthInPx, parentWidth),
        dataItem: appointment.dataItem,
        fromPrev: appointment.fromPrev,
        toNext: appointment.toNext,
        durationType: appointmentHeightType(appointment, cellDuration),
        type: VERTICAL_TYPE,
    };
};
var calculateRectByDateIntervals = function (type, intervals, rectByDates, rectByDatesMeta) {
    var growDirection = type.growDirection, multiline = type.multiline;
    var sorted = sortAppointments(intervals, multiline);
    var grouped = findOverlappedAppointments(sorted, multiline);
    var rectCalculator = growDirection === HORIZONTAL_TYPE
        ? horizontalRectCalculator
        : verticalRectCalculator;
    return unwrapGroups(adjustAppointments(grouped, multiline))
        .map(function (appointment) { return rectCalculator(appointment, { rectByDates: rectByDates, multiline: multiline, rectByDatesMeta: rectByDatesMeta }); });
};
var expandRecurrenceAppointment = function (appointment, leftBound, rightBound) {
    var rightBoundUTC = moment(getUTCDate(rightBound)).toDate();
    var leftBoundUTC = moment(getUTCDate(leftBound)).toDate();
    var appointmentStartDate = moment(appointment.start).toDate();
    var options = __assign(__assign({}, RRule.parseString(appointment.rRule)), { dtstart: moment(getUTCDate(appointmentStartDate)).toDate() });
    var correctedOptions = options.until
        ? __assign(__assign({}, options), { until: moment(getUTCDate(options.until)).toDate() }) : options;
    var rruleSet = getRRuleSetWithExDates(appointment.exDate);
    rruleSet.rrule(new RRule(correctedOptions));
    // According to https://github.com/jakubroztocil/rrule#important-use-utc-dates
    // we have to format the dates we get from RRuleSet to get local dates
    var datesInBoundaries = rruleSet.between(leftBoundUTC, rightBoundUTC, true)
        .map(formatDateToString);
    if (datesInBoundaries.length === 0)
        return [];
    var appointmentDuration = moment(appointment.end)
        .diff(appointment.start, 'minutes');
    return datesInBoundaries.map(function (startDate, index) { return (__assign(__assign({}, appointment), { dataItem: __assign(__assign({}, appointment.dataItem), { startDate: moment(startDate).toDate(), endDate: moment(startDate).add(appointmentDuration, 'minutes').toDate(), parentData: appointment.dataItem }), start: moment(startDate), end: moment(startDate).add(appointmentDuration, 'minutes') })); });
};
var filterByViewBoundaries = function (appointment, leftBound, rightBound, excludedDays, removeAllDay) {
    var appointments = [appointment];
    if (appointment.rRule) {
        appointments = expandRecurrenceAppointment(appointment, leftBound, rightBound);
    }
    return appointments.filter(function (appt) { return viewPredicate(appt, leftBound, rightBound, excludedDays, removeAllDay); });
};
var getUTCDate = function (date) {
    return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes());
};
var getRRuleSetWithExDates = function (exDate) {
    var rruleSet = new RRuleSet();
    if (exDate) {
        exDate.split(',').map(function (date) {
            var currentExDate = moment(date).toDate();
            rruleSet.exdate(moment(getUTCDate(currentExDate)).toDate());
        });
    }
    return rruleSet;
};
var formatDateToString = function (date) { return moment.utc(date).format('YYYY-MM-DDTHH:mm'); };

var MONTH_TYPE = 'month';
var getViewType = function (currentViewType) {
    if (currentViewType === MONTH_TYPE)
        return HORIZONTAL_TYPE;
    return VERTICAL_TYPE;
};
var isMidnight$1 = function (date) {
    var momentDate = moment(date);
    return momentDate.hours() === 0 && momentDate.minutes() === 0 && momentDate.seconds() === 0;
};
var calculateTextByDays = function (startViewDate, endViewDate, formatDate, additionalOptions) {
    var momentStartViewDate = moment(startViewDate);
    var momentEndViewDate = moment(endViewDate);
    if (momentStartViewDate.isSame(momentEndViewDate, 'day')) {
        return formatDate(momentStartViewDate.toDate(), __assign(__assign({}, DAY_LONG_MONTH_LONG_YEAR_OPTIONS), additionalOptions));
    }
    if (momentStartViewDate.isSame(momentEndViewDate, 'year')) {
        if (momentStartViewDate.isSame(momentEndViewDate, 'month')) {
            return formatDate(momentStartViewDate.toDate(), DAY_OPTIONS) + "-" + formatDate(momentEndViewDate.toDate(), DAY_OPTIONS) + " " + formatDate(momentEndViewDate.toDate(), MONTH_YEAR_OPTIONS);
        }
        return formatDate(momentStartViewDate.toDate(), DAY_SHORT_MONTH_OPTIONS) + " - " + formatDate(momentEndViewDate.toDate(), DAY_SHORT_MONTH_LONG_YEAR_OPTIONS);
    }
    return formatDate(momentStartViewDate.toDate(), DAY_SHORT_MONTH_SHORT_YEAR_OPTIONS) + " - " + formatDate(momentEndViewDate.toDate(), DAY_SHORT_MONTH_SHORT_YEAR_OPTIONS);
};
var calculateTextByMonths = function (currentDate, intervalCount, formatDate) {
    var momentCurrentDate = moment(currentDate);
    if (intervalCount === 1) {
        return formatDate(momentCurrentDate.toDate(), MONTH_YEAR_OPTIONS);
    }
    var lastMonth = momentCurrentDate.clone().add(intervalCount - 1, 'month');
    if (momentCurrentDate.isSame(lastMonth, 'year')) {
        return formatDate(momentCurrentDate.toDate(), SHORT_MONTH_OPTIONS) + "-" + formatDate(lastMonth.toDate(), SHORT_MONTH_LONG_YEAR_OPTIONS);
    }
    return formatDate(momentCurrentDate.toDate(), SHORT_MONTH_SHORT_YEAR_OPTIONS) + " - " + formatDate(lastMonth.toDate(), SHORT_MONTH_SHORT_YEAR_OPTIONS);
};
var viewBoundText = function (startViewDate, endViewDate, type, currentDate, intervalCount, formatDate) { return (type !== 'month'
    ? calculateTextByDays(startViewDate, endViewDate, formatDate, type === WEEKDAY_INTERVAL ? LONG_WEEK_DAY_OPTIONS : EMPTY_OPTIONS)
    : calculateTextByMonths(currentDate, intervalCount, formatDate)); };

var subtractSecond = function (date) { return moment(date).subtract(1, 'second').toDate(); };
var dayScale = function (currentDate, firstDayOfWeek, dayCount, excluded) {
    if (excluded === void 0) { excluded = []; }
    var result = [];
    var date = firstDayOfWeek !== undefined
        ? moment(calculateFirstDateOfWeek(currentDate, firstDayOfWeek, excluded))
        : moment(currentDate);
    for (var index = 0; index < dayCount; index += 1) {
        if (excluded.findIndex(function (item) { return item === date.day(); }) === -1) {
            result.push(date.toDate());
        }
        date.add(1, 'days');
    }
    return result;
};
var timeScale = function (currentDate, firstDayOfWeek, startDayHour, endDayHour, cellDuration, excludedDays) {
    var result = [];
    var startDateOfView = firstDayOfWeek !== undefined
        ? calculateFirstDateOfWeek(currentDate, firstDayOfWeek, excludedDays)
        : currentDate;
    var left = moment(startDateOfView)
        .startOf('day')
        .add(startDayHour, 'hour');
    var right = moment(startDateOfView)
        .startOf('day')
        .add(endDayHour, 'hour');
    while (left.isBefore(right)) {
        var startDate = left.toDate();
        left.add(cellDuration, 'minutes');
        result.push({ start: startDate, end: left.toDate() });
    }
    var timeScaleLastIndex = result.length - 1;
    if (isMidnight$1(result[timeScaleLastIndex].end)) {
        result[timeScaleLastIndex].end = subtractSecond(result[timeScaleLastIndex].end);
    }
    return result;
};
var availableViews = function (views, viewName, viewDisplayName) {
    if (!views)
        return [{ name: viewName, displayName: viewDisplayName }];
    if (views.findIndex(function (view) { return viewName === view.name; }) === -1) {
        var nextViews = views.slice();
        nextViews.push({ name: viewName, displayName: viewDisplayName });
        return nextViews;
    }
    return views;
};
var viewCellsData = function (currentDate, firstDayOfWeek, dayCount, excludedDays, startDayHour, endDayHour, cellDuration, currTime) {
    var days = dayScale(currentDate, firstDayOfWeek, dayCount, excludedDays);
    var times = timeScale(currentDate, firstDayOfWeek, startDayHour, endDayHour, cellDuration, excludedDays);
    var currentTime = moment(currTime);
    return times.reduce(function (cellsAcc, time) {
        var start = moment(time.start);
        var end = moment(time.end);
        var rowCells = days.reduce(function (rowAcc, day) {
            var startDate = moment(day).hours(start.hours()).minutes(start.minutes()).toDate();
            var endDate = moment(day).hours(end.hours()).minutes(end.minutes()).toDate();
            var today = currentTime.isSame(startDate, 'day');
            rowAcc.push({ startDate: startDate, endDate: endDate, today: today });
            return rowAcc;
        }, []);
        cellsAcc.push(rowCells);
        return cellsAcc;
    }, []);
};
var allDayCells = function (viewCells) { return viewCells[0].map(function (cell) { return ({
    startDate: moment(cell.startDate).startOf('day').toDate(),
    endDate: moment(cell.startDate).add(1, 'day').startOf('day').toDate(),
}); }); };
var startViewDate = function (viewCells) { return moment(viewCells[0][0].startDate).toDate(); };
var endViewDate = function (viewCells) {
    var lastRowIndex = viewCells.length - 1;
    var lastCellIndex = viewCells[lastRowIndex].length - 1;
    return subtractSecond(viewCells[lastRowIndex][lastCellIndex].endDate);
};

var sliceAppointmentByDay = function (appointment, cellDuration) {
    var start = appointment.start, end = appointment.end, dataItem = appointment.dataItem;
    if (start.isSame(end, 'day'))
        return [appointment];
    var minDuration = cellDuration / 2;
    var isShortOnFirstDay = start.clone().endOf('day').diff(start, 'minutes') < minDuration;
    var isShortOnSecondDay = end.clone().diff(end.clone().startOf('day'), 'minutes') < minDuration;
    return [
        isShortOnFirstDay ? {
            start: start.clone().endOf('day').add(-minDuration, 'minutes'),
            end: start.clone().endOf('day'),
            dataItem: dataItem,
        } : {
            start: start, end: start.clone().endOf('day'), dataItem: dataItem,
        },
        isShortOnSecondDay ? {
            start: end.clone().startOf('day'),
            end: end.clone().startOf('day').add(minDuration, 'minutes'),
            dataItem: dataItem,
        } : {
            start: end.clone().startOf('day'), end: end, dataItem: dataItem,
        },
    ];
};
var dayBoundaryPredicate = function (appointment, leftBound, rightBound, excludedDays) {
    if (excludedDays === void 0) { excludedDays = []; }
    var dayStart = moment(leftBound);
    var dayEnd = moment(rightBound);
    var startDayTime = moment(appointment.start)
        .hour(dayStart.hour())
        .minutes(dayStart.minutes());
    var endDayTime = moment(appointment.start)
        .hour(dayEnd.hour())
        .minutes(dayEnd.minutes());
    if (appointment.end.isBefore(dayStart) || appointment.start.isAfter(dayEnd))
        return false;
    if (excludedDays.findIndex(function (day) { return day === moment(appointment.start).day(); }) !== -1)
        return false;
    return (appointment.end.isAfter(startDayTime)
        && appointment.start.isBefore(endDayTime));
};
var reduceAppointmentByDayBounds = function (appointment, leftBound, rightBound, cellDuration) {
    var dayStart = moment(leftBound);
    var dayEnd = moment(rightBound);
    var startDayTime = moment(appointment.start)
        .hour(dayStart.hour())
        .minutes(dayStart.minutes())
        .seconds(dayStart.seconds());
    var endDayTime = moment(appointment.start)
        .hour(dayEnd.hour())
        .minutes(dayEnd.minutes())
        .seconds(dayEnd.seconds());
    var minDuration = cellDuration / 2;
    var isShortOnFirstDay = endDayTime.clone().diff(appointment.start, 'minutes') < minDuration;
    var isShortOnSecondDay = appointment.end.clone().diff(startDayTime, 'minutes') < minDuration;
    if (isShortOnFirstDay) {
        return __assign(__assign({}, appointment), { start: endDayTime.clone().add(-minDuration, 'minutes'), end: endDayTime });
    }
    if (isShortOnSecondDay) {
        return __assign(__assign({}, appointment), { start: startDayTime, end: startDayTime.clone().add(minDuration, 'minutes') });
    }
    return __assign(__assign(__assign({}, appointment), (appointment.start.isSameOrBefore(startDayTime) ? { start: startDayTime } : null)), (appointment.end.isSameOrAfter(endDayTime) ? { end: endDayTime } : null));
};
var normalizeAppointmentDuration = function (appointment, cellDuration) {
    var minDuration = cellDuration / 2;
    var start = moment(appointment.start);
    var end = moment(appointment.end);
    if (end.diff(start, 'minutes') > minDuration) {
        return __assign(__assign({}, appointment), { start: start, end: end });
    }
    if (end.isSame(start.clone().add(minDuration, 'minutes'), 'day')) {
        return __assign(__assign({}, appointment), { start: start, end: start.clone().add(minDuration, 'minutes') });
    }
    return __assign(__assign({}, appointment), { start: start.clone().endOf('day').add(-minDuration, 'minutes'), end: start.clone().endOf('day') });
};

var calculateWeekDateIntervals = function (appointments, leftBound, rightBound, // startViewDate, endViewDate
excludedDays, cellDuration) { return appointments
    .map(function (appointment) { return normalizeAppointmentDuration(appointment, cellDuration); })
    .reduce(function (acc, appointment) {
    return __spread(acc, filterByViewBoundaries(appointment, leftBound, rightBound, excludedDays, true));
}, [])
    .reduce(function (acc, appointment) { return (__spread(acc, sliceAppointmentByDay(appointment, cellDuration))); }, [])
    .filter(function (appointment) { return dayBoundaryPredicate(appointment, leftBound, rightBound, excludedDays); })
    .map(function (appointment) { return reduceAppointmentByDayBounds(appointment, leftBound, rightBound, cellDuration); }); };

var CELL_GAP_PX = 10;
var CELL_BOUND_HORIZONTAL_OFFSET_PX = 1;
var CELL_BOUND_VERTICAL_OFFSET_PX = 4;
var getCellByDate = function (viewCellsData, date, takePrev) {
    if (takePrev === void 0) { takePrev = false; }
    var cellIndex = viewCellsData[0].findIndex(function (timeCell) { return moment(date)
        .isSame(timeCell.startDate, 'date'); });
    var rowIndex = viewCellsData.findIndex(function (timeCell) { return moment(date)
        .isBetween(timeCell[cellIndex].startDate, timeCell[cellIndex].endDate, 'seconds', takePrev ? '(]' : '[)'); });
    var totalCellIndex = (rowIndex * viewCellsData[0].length) + cellIndex;
    return {
        index: totalCellIndex,
        startDate: viewCellsData[rowIndex][cellIndex].startDate,
    };
};
var getCellRect = function (date, viewCellsData, cellDuration, cellElementsMeta, takePrev) {
    var _a = getCellByDate(viewCellsData, date, takePrev), cellIndex = _a.index, cellStartDate = _a.startDate;
    var _b = cellElementsMeta.getCellRects[cellIndex](), top = _b.top, left = _b.left, width = _b.width, cellHeight = _b.height;
    var timeOffset = moment(date).diff(cellStartDate, 'minutes');
    var topOffset = cellHeight * (timeOffset / cellDuration);
    var parentRect = cellElementsMeta.parentRect();
    return {
        top: top,
        left: left,
        width: width,
        topOffset: topOffset,
        parentRect: parentRect,
    };
};
var getVerticalRectByDates = function (startDate, endDate, _a) {
    var viewCellsData = _a.viewCellsData, cellDuration = _a.cellDuration, cellElementsMeta = _a.cellElementsMeta;
    var firstCellRect = getCellRect(startDate, viewCellsData, cellDuration, cellElementsMeta, false);
    var lastCellRect = getCellRect(endDate, viewCellsData, cellDuration, cellElementsMeta, true);
    var top = firstCellRect.top + firstCellRect.topOffset;
    var height = (lastCellRect.top + lastCellRect.topOffset) - top;
    return {
        width: firstCellRect.width - CELL_GAP_PX - CELL_BOUND_HORIZONTAL_OFFSET_PX,
        top: top - firstCellRect.parentRect.top + CELL_BOUND_HORIZONTAL_OFFSET_PX,
        left: firstCellRect.left - firstCellRect.parentRect.left + CELL_BOUND_HORIZONTAL_OFFSET_PX,
        parentWidth: firstCellRect.parentRect.width,
        height: height - CELL_BOUND_VERTICAL_OFFSET_PX,
    };
};

var allDayPredicate = function (appointment) { return (appointment.end.diff(appointment.start, 'hours') > 23
    || !!appointment.allDay); };
var getAllDayCellIndexByDate = function (viewCellsData, date, takePrev) {
    var currentDate = moment(date);
    var cellIndex = viewCellsData[0]
        .findIndex(function (day) { return moment(day.startDate).day() === currentDate.day(); });
    if (takePrev && currentDate.format() === currentDate.startOf('day').format()) {
        cellIndex -= 1;
    }
    return cellIndex;
};
var sliceAppointmentsByBoundaries = function (appointment, left, right, excludedDays) {
    if (excludedDays === void 0) { excludedDays = []; }
    var startDate = appointment.start.clone();
    var endDate = appointment.end.clone();
    var nextStart = startDate.clone();
    var nextEnd = endDate.clone();
    if (startDate.isBefore(left)) {
        nextStart = moment(left);
        nextStart.startOf('day');
    }
    if (endDate.isAfter(right)) {
        nextEnd = moment(right);
        nextEnd.endOf('day');
    }
    if (excludedDays.findIndex(function (day) { return day === startDate.day(); }) !== -1) {
        while (excludedDays.findIndex(function (day) { return day === nextStart.day(); }) !== -1
            && nextStart.isSameOrBefore(endDate, 'day')) {
            nextStart.add(1, 'days').startOf('day');
        }
    }
    if (excludedDays.findIndex(function (day) { return day === endDate.day(); }) !== -1) {
        while (excludedDays.findIndex(function (day) { return day === nextEnd.day(); }) !== -1
            && nextStart.isSameOrAfter(startDate, 'day')) {
            nextEnd.add(-1, 'days').endOf('day');
        }
    }
    return [__assign(__assign({}, appointment), { start: nextStart, end: nextEnd })];
};

var sliceAppointmentByWeek = function (timeBounds, appointment, step) {
    var left = timeBounds.left, right = timeBounds.right;
    var pieces = [];
    var start = appointment.start, end = appointment.end, restFields = __rest(appointment, ["start", "end"]);
    var apptStart = start;
    var apptEnd = end;
    if (apptStart.isBefore(left))
        apptStart = left.clone();
    if (apptEnd.isAfter(right))
        apptEnd = right.clone();
    var pieceFrom = apptStart.clone();
    var pieceTo = apptStart.clone();
    var i = 0;
    while (pieceTo.isBefore(apptEnd)) {
        var currentRightBound = left.clone().add(step * i, 'days').subtract(1, 'second');
        if (currentRightBound.isAfter(apptStart)) {
            pieceTo = apptStart.clone().add(step * i, 'days');
            if (pieceTo.isAfter(currentRightBound)) {
                pieceTo = currentRightBound.clone();
            }
            if (pieceTo.isAfter(apptEnd)) {
                pieceTo = apptEnd.clone();
            }
            if (!pieceFrom.isSameOrAfter(pieceTo)) {
                pieces.push(__assign({ start: pieceFrom, end: pieceTo }, restFields));
                pieceFrom = pieceTo.clone().add(1, 'second');
            }
        }
        i += 1;
    }
    return pieces;
};
var getMonthCellIndexByDate = function (viewCellsData, date, takePrev) {
    if (takePrev === void 0) { takePrev = false; }
    var startViewDate = moment(viewCellsData[0][0].startDate);
    var currentDate = moment(date);
    var cellIndex = currentDate.diff(startViewDate, 'days');
    if (takePrev && currentDate.format() === currentDate.startOf('day').format()) {
        cellIndex -= 1;
    }
    return cellIndex;
};

var TOP_CELL_OFFSET = 0.32;
var CELL_BOUND_OFFSET_PX = 1;
var getCellRect$1 = function (date, viewCellsData, cellElementsMeta, takePrev, multiline) {
    var cellIndex = multiline
        ? getMonthCellIndexByDate(viewCellsData, date, takePrev)
        : getAllDayCellIndexByDate(viewCellsData, date, takePrev);
    var _a = cellElementsMeta.getCellRects[cellIndex](), top = _a.top, left = _a.left, width = _a.width, height = _a.height;
    var parentRect = cellElementsMeta.parentRect();
    return {
        top: top,
        left: left,
        width: width,
        height: height,
        parentRect: parentRect,
    };
};
var getHorizontalRectByDates = function (startDate, endDate, _a) {
    var multiline = _a.multiline, viewCellsData = _a.viewCellsData, cellElementsMeta = _a.cellElementsMeta;
    var firstCellRect = getCellRect$1(startDate, viewCellsData, cellElementsMeta, false, multiline);
    var lastCellRect = getCellRect$1(endDate, viewCellsData, cellElementsMeta, true, multiline);
    var top = firstCellRect.top + (firstCellRect.height * TOP_CELL_OFFSET);
    var height = firstCellRect.height - (firstCellRect.height * TOP_CELL_OFFSET);
    return {
        top: top - firstCellRect.parentRect.top,
        left: (firstCellRect.left - firstCellRect.parentRect.left) + CELL_BOUND_OFFSET_PX,
        width: ((lastCellRect.left - firstCellRect.left) + firstCellRect.width) - CELL_BOUND_OFFSET_PX,
        height: height,
        parentWidth: firstCellRect.parentRect.width,
    };
};

var DAY_COUNT = 7;
var MONTH_LENGTH = 31;
var monthCellsData = function (currentDate, firstDayOfWeek, intervalCount, today) {
    if (intervalCount === void 0) { intervalCount = 1; }
    var targetDate = moment(currentDate);
    var currentMonths = [targetDate.month()];
    while (currentMonths.length < intervalCount) {
        currentMonths.push(targetDate.add(1, 'months').month());
    }
    var firstMonthDate = moment(currentDate).date(1);
    var firstMonthDay = firstMonthDate.day() - firstDayOfWeek;
    var prevMonthDayCount = firstMonthDate.day(firstMonthDay).day() || DAY_COUNT;
    var prevMonth = moment(currentDate).subtract(1, 'months');
    var prevMonthStartDay = prevMonth.daysInMonth() - (prevMonthDayCount - 1);
    var from = moment()
        .year(prevMonth.year())
        .month(prevMonth.month())
        .date(prevMonthStartDay)
        .startOf('day');
    var result = [];
    while (result.length < (Math.trunc((MONTH_LENGTH * intervalCount) / DAY_COUNT) + 2)) {
        var week = [];
        while (week.length < DAY_COUNT) {
            week.push({
                startDate: from.toDate(),
                endDate: from.clone().add(1, 'day').toDate(),
                otherMonth: currentMonths.findIndex(function (month) { return month === from.month(); }) === -1,
                today: today ? moment(today).isSame(from, 'date') : false,
            });
            from.add(1, 'day');
        }
        result.push(week);
    }
    return result;
};
var calculateMonthDateIntervals = function (appointments, leftBound, rightBound) { return appointments
    .map(function (_a) {
    var start = _a.start, end = _a.end, restArgs = __rest(_a, ["start", "end"]);
    return (__assign({ start: moment(start), end: moment(end) }, restArgs));
})
    .reduce(function (acc, appointment) {
    return __spread(acc, filterByViewBoundaries(appointment, leftBound, rightBound, [], false));
}, [])
    .reduce(function (acc, appointment) { return (__spread(acc, sliceAppointmentByWeek({ left: moment(leftBound), right: moment(rightBound) }, appointment, DAY_COUNT))); }, []); };

var calculateAllDayDateIntervals = function (appointments, leftBound, rightBound, excludedDays) { return appointments
    .map(function (_a) {
    var start = _a.start, end = _a.end, restArgs = __rest(_a, ["start", "end"]);
    return (__assign({ start: moment(start), end: moment(end) }, restArgs));
})
    .reduce(function (acc, appointment) {
    return __spread(acc, filterByViewBoundaries(appointment, leftBound, rightBound, excludedDays, false));
}, [])
    .filter(function (appointment) { return allDayPredicate(appointment); })
    .reduce(function (acc, appointment) { return (__spread(acc, sliceAppointmentsByBoundaries(appointment, leftBound, rightBound, excludedDays))); }, []); };

var allDayRects = function (appointments, startViewDate, endViewDate, excludedDays, viewCellsData, cellElementsMeta) {
    var intervals = calculateAllDayDateIntervals(appointments, startViewDate, endViewDate, excludedDays);
    return calculateRectByDateIntervals({
        growDirection: HORIZONTAL_TYPE,
        multiline: false,
    }, intervals, getHorizontalRectByDates, {
        startViewDate: startViewDate,
        endViewDate: endViewDate,
        viewCellsData: viewCellsData,
        cellElementsMeta: cellElementsMeta,
        excludedDays: excludedDays,
    });
};
var verticalTimeTableRects = function (appointments, startViewDate, endViewDate, excludedDays, viewCellsData, cellDuration, cellElementsMeta) {
    var intervals = calculateWeekDateIntervals(appointments, startViewDate, endViewDate, excludedDays, cellDuration);
    return calculateRectByDateIntervals({
        growDirection: VERTICAL_TYPE,
        multiline: false,
    }, intervals, getVerticalRectByDates, {
        startViewDate: startViewDate,
        endViewDate: endViewDate,
        viewCellsData: viewCellsData,
        cellDuration: cellDuration,
        cellElementsMeta: cellElementsMeta,
    });
};
var horizontalTimeTableRects = function (appointments, startViewDate, endViewDate, viewCellsData, cellElementsMeta) {
    var intervals = calculateMonthDateIntervals(appointments, startViewDate, endViewDate);
    return calculateRectByDateIntervals({
        growDirection: HORIZONTAL_TYPE,
        multiline: true,
    }, intervals, getHorizontalRectByDates, {
        startViewDate: startViewDate,
        endViewDate: endViewDate,
        viewCellsData: viewCellsData,
        cellElementsMeta: cellElementsMeta,
    });
};

var dateTimeFormatInstance = function (locale, formatOptions) { return new Intl.DateTimeFormat(locale, formatOptions); };

var appointments = function (data) { return data.map(function (appointment) { return (__assign(__assign(__assign(__assign({ dataItem: appointment, start: appointment.startDate }, appointment.endDate !== undefined ? {
    end: appointment.endDate,
} : {
    end: appointment.startDate,
    dataItem: __assign(__assign({}, appointment), { endDate: appointment.startDate }),
}), appointment.allDay !== undefined && {
    allDay: appointment.allDay,
}), appointment.rRule !== undefined && {
    rRule: appointment.rRule,
}), appointment.exDate !== undefined && {
    exDate: appointment.exDate,
})); }); };
var formatDateTimeGetter = function (locale) {
    var cache = new Map(); // any -> type
    var formatter = function (nextDate, nextOptions) {
        if (nextDate === undefined)
            return '';
        var date = new Date(nextDate);
        var formatInstance = cache.get(nextOptions);
        if (!formatInstance) {
            formatInstance = dateTimeFormatInstance(locale, nextOptions);
            cache.set(nextOptions, formatInstance);
        }
        return formatInstance.format(date);
    };
    return formatter;
};

var changeCurrentDate = function (currentDate, _a) {
    var nextDate = _a.nextDate, step = _a.step, amount = _a.amount, direction = _a.direction;
    return (nextDate
        || moment(currentDate)[direction === 'back' ? 'subtract' : 'add'](amount, step)
            .toDate()
        || moment().subtract(amount, step));
};
var setCurrentViewName = function (currentViewName, nextViewName) { return nextViewName; };

var setAppointmentMeta = function (prevAppointmentMeta, _a) {
    var target = _a.target, data = _a.data;
    return ({ target: target, data: data });
};

var OPEN_COMMAND_BUTTON = 'open';
var CLOSE_COMMAND_BUTTON = 'close';
var DELETE_COMMAND_BUTTON = 'delete';
var CANCEL_COMMAND_BUTTON = 'cancel';
var COMMIT_COMMAND_BUTTON = 'commit';

var setAppointmentData = function (prevAppointmentData, _a) {
    var appointmentData = _a.appointmentData;
    return appointmentData;
};

var DEFAULT_RULE_OBJECT = {
    interval: 1,
};
var DAYS_OF_WEEK = {
    MONDAY: 0,
    TUESDAY: 1,
    WEDNESDAY: 2,
    THURSDAY: 3,
    FRIDAY: 4,
    SATURDAY: 5,
    SUNDAY: 6,
};
var DAYS_IN_WEEK = 7;
var DAYS_OF_WEEK_ARRAY = [
    DAYS_OF_WEEK.SUNDAY, DAYS_OF_WEEK.MONDAY, DAYS_OF_WEEK.TUESDAY, DAYS_OF_WEEK.WEDNESDAY,
    DAYS_OF_WEEK.THURSDAY, DAYS_OF_WEEK.FRIDAY, DAYS_OF_WEEK.SATURDAY,
];
var MONTHS = {
    JANUARY: 1,
    FEBRUARY: 2,
    MARCH: 3,
    APRIL: 4,
    MAY: 5,
    JUNE: 6,
    JULY: 7,
    AUGUST: 8,
    SEPTEMBER: 9,
    OCTOBER: 10,
    NOVEMBER: 11,
    DECEMBER: 12,
};
var RRULE_REPEAT_TYPES = {
    YEARLY: RRule.YEARLY,
    MONTHLY: RRule.MONTHLY,
    WEEKLY: RRule.WEEKLY,
    DAILY: RRule.DAILY,
    HOURLY: RRule.HOURLY,
    MINUTELY: RRule.MINUTELY,
};
var REPEAT_TYPES = {
    DAILY: 'daily',
    WEEKLY: 'weekly',
    MONTHLY: 'monthly',
    YEARLY: 'yearly',
    NEVER: 'never',
};
var REPEAT_TYPES_ARRAY = [
    REPEAT_TYPES.DAILY, REPEAT_TYPES.WEEKLY, REPEAT_TYPES.MONTHLY, REPEAT_TYPES.YEARLY,
];
var WEEK_NUMBER_LABELS = [
    'firstLabel', 'secondLabel', 'thirdLabel', 'fourthLabel', 'lastLabel',
];
var END_REPEAT_RADIO_GROUP = 'endRepeat';
var MONTHLY_RADIO_GROUP = 'monthlyRadioGroup';
var YEARLY_RADIO_GROUP = 'yearlyRadioGroup';
var TITLE_TEXT_EDITOR = 'titleTextEditor';
var MULTILINE_TEXT_EDITOR = 'multilineTextEditor';
var ORDINARY_TEXT_EDITOR = 'ordinaryTextEditor';
var NUMBER_EDITOR = 'numberEditor';
var TITLE = 'title';
var ORDINARY_LABEL = 'ordinaryLabel';
var SAVE_BUTTON = 'saveButton';
var DELETE_BUTTON = 'deleteButton';
var CANCEL_BUTTON = 'cancelButton';
var OUTLINED_SELECT = 'outlinedSelect';
var STANDARD_SELECT = 'standardSelect';
var SUNDAY_DATE = new Date(2019, 7, 11);
var MONDAY_DATE = new Date(2019, 7, 12);
var TUESDAY_DATE = new Date(2019, 7, 13);
var WEDNESDAY_DATE = new Date(2019, 7, 14);
var THURSDAY_DATE = new Date(2019, 7, 15);
var FRIDAY_DATE = new Date(2019, 7, 16);
var SATURDAY_DATE = new Date(2019, 7, 17);
var DAYS_OF_WEEK_DATES = [
    SUNDAY_DATE, MONDAY_DATE, TUESDAY_DATE, WEDNESDAY_DATE,
    THURSDAY_DATE, FRIDAY_DATE, SATURDAY_DATE,
];
var JANUARY_DATE = new Date(2019, 0, 1);
var FEBRUARY_DATE = new Date(2019, 1, 1);
var MARCH_DATE = new Date(2019, 2, 1);
var APRIL_DATE = new Date(2019, 3, 1);
var MAY_DATE = new Date(2019, 4, 1);
var JUNE_DATE = new Date(2019, 5, 1);
var JULY_DATE = new Date(2019, 6, 1);
var AUGUST_DATE = new Date(2019, 7, 1);
var SEPTEMBER_DATE = new Date(2019, 8, 1);
var OCTOBER_DATE = new Date(2019, 9, 1);
var NOVEMBER_DATE = new Date(2019, 10, 1);
var DECEMBER_DATE = new Date(2019, 11, 1);
var MONTHS_DATES = [
    JANUARY_DATE, FEBRUARY_DATE, MARCH_DATE, APRIL_DATE, MAY_DATE, JUNE_DATE,
    JULY_DATE, AUGUST_DATE, SEPTEMBER_DATE, OCTOBER_DATE, NOVEMBER_DATE, DECEMBER_DATE,
];
var FIRST_WEEK = 0;
var SECOND_WEEK = 1;
var THIRD_WEEK = 2;
var FOURTH_WEEK = 3;
var LAST_WEEK = 4;
var BASIC_YEALY_COUNT = 5;
var BASIC_MONTHLY_COUNT = 12;
var BASIC_WEEKLY_COUNT = 13;
var BASIC_DAILY_COUNT = 30;

var addAppointment = function (addedAppointmentData, _a) {
    var appointmentData = (_a === void 0 ? { appointmentData: {} } : _a).appointmentData;
    return appointmentData;
};
var cancelAddedAppointment = function () { return ({}); };
var startEditAppointment = function (prevEditingAppointment, appointmentData) { return appointmentData; };
var stopEditAppointment = function () { return undefined; };
var changeAppointment = function (appointment, _a) {
    var change = _a.change;
    return (__assign(__assign({}, appointment), change));
};
var cancelChanges = function () { return ({}); };

var changedAppointmentById = function (changes, appointmentId) {
    var _a;
    return (_a = {}, _a[appointmentId] = changes, _a);
};

var mergeNewChanges = function (appointmentData, changes) {
    var appointment = __assign({}, appointmentData);
    delete appointment.id;
    delete appointment.rRule;
    delete appointment.exDate;
    delete appointment.parentData;
    return __assign(__assign({}, appointment), changes);
};
var reduceExDate = function (prevExDate, boundDate) {
    if (prevExDate.length > 0) {
        return prevExDate.split(',').reduce(function (acc, date) {
            var momentDate = moment.utc(date);
            if (momentDate.isBefore(boundDate)) {
                return __spread(acc, [date]);
            }
            return acc;
        }, []).join(',');
    }
    return undefined;
};
var configureExDate = function (exDate, date) {
    var currentExDate = moment.utc(date).format('YYYYMMDDTHHmmss') + "Z";
    return exDate
        ? exDate + "," + currentExDate
        : currentExDate;
};
var configureDateSequence = function (rRule, exDate, prevStartDate, nextStartDate) {
    var rruleSet = getRRuleSetWithExDates(exDate);
    var currentOptions = RRule.parseString(rRule);
    var correctedOptions = currentOptions.until
        ? __assign(__assign({}, currentOptions), { until: moment(getUTCDate(currentOptions.until)).toDate() }) : currentOptions;
    var prevStartDateUTC = moment(getUTCDate(prevStartDate)).toDate();
    rruleSet.rrule(new RRule(__assign(__assign({}, correctedOptions), { dtstart: prevStartDateUTC })));
    if (currentOptions.count || currentOptions.until) {
        return rruleSet.all()
            // we shouldn't use `new Date(string)` because this function has different results in Safari
            .map(function (nextDate) { return moment(formatDateToString(nextDate)).toDate(); });
    }
    var leftBound = prevStartDateUTC;
    var rightBound = moment(getUTCDate(nextStartDate)).toDate();
    return rruleSet.between(leftBound, rightBound, true)
        .map(function (nextDate) { return moment(formatDateToString(nextDate)).toDate(); });
};
var configureICalendarRules = function (rRule, options) {
    var rruleSet = new RRuleSet();
    rruleSet.rrule(new RRule(__assign(__assign({}, RRule.parseString(rRule)), options)));
    return rruleSet.valueOf();
};
var changeCurrentAndFollowing = function (appointmentData, changes, changeAllAction) {
    var _a;
    var rRule = appointmentData.rRule, startDate = appointmentData.startDate, parentData = appointmentData.parentData, _b = appointmentData.exDate, prevExDate = _b === void 0 ? '' : _b, id = appointmentData.id;
    var _c = getAppointmentSequenceData(parentData.startDate, moment.utc(startDate).toDate(), prevExDate, rRule), initialSequence = _c.initialSequence, currentChildIndex = _c.currentChildIndex;
    if (currentChildIndex === 0)
        return changeAllAction(appointmentData, changes);
    var changedRules = configureICalendarRules(rRule, {
        dtstart: moment.utc(parentData.startDate).toDate(),
        until: moment.utc(initialSequence[currentChildIndex - 1]).toDate(),
        count: null,
    });
    var nextExDate = reduceExDate(prevExDate, startDate);
    return {
        changed: (_a = {},
            _a[id] = __assign({ rRule: changedRules[1].slice(6) }, nextExDate && prevExDate !== nextExDate ? { exDate: nextExDate } : {}),
            _a),
    };
};
var getAppointmentSequenceData = function (prevStartDate, startDate, exDate, rRule) {
    var initialSequence = configureDateSequence(rRule, exDate, moment.utc(prevStartDate).toDate(), moment.utc(startDate).toDate());
    var currentChildIndex = initialSequence
        .findIndex(function (date) { return moment(date).isSame(startDate); });
    return { initialSequence: initialSequence, currentChildIndex: currentChildIndex };
};
var deleteCurrent = function (appointmentData) {
    var _a;
    var currentSequence = configureDateSequence(appointmentData.rRule, appointmentData.exDate, moment.utc(appointmentData.parentData.startDate).toDate(), moment.utc(appointmentData.startDate).toDate());
    if (currentSequence.length === 1) {
        return deleteAll(appointmentData);
    }
    var nextExDate = configureExDate(appointmentData.exDate, appointmentData.startDate);
    return { changed: (_a = {}, _a[appointmentData.id] = { exDate: nextExDate }, _a) };
};
var deleteAll = function (appointmentData) {
    return { deleted: appointmentData.id };
};
var deleteCurrentAndFollowing = function (appointmentData) { return changeCurrentAndFollowing(appointmentData, {}, deleteAll); };
var editAll = function (appointmentData, changes) {
    var _a, _b;
    var rRule = appointmentData.rRule, id = appointmentData.id;
    var initialRule = new RRule(RRule.parseString(rRule));
    if (changes.startDate
        && moment.utc(changes.startDate).isAfter(initialRule.options.until)) {
        return {
            changed: (_a = {},
                _a[id] = __assign(__assign({}, changes), { rRule: 'FREQ=DAILY;COUNT=1', exDate: '' }),
                _a),
        };
    }
    return { changed: (_b = {}, _b[appointmentData.id] = changes, _b) };
};
var editCurrent = function (appointmentData, changes) {
    var _a;
    return ({
        changed: (_a = {},
            _a[appointmentData.id] = {
                exDate: configureExDate(appointmentData.exDate, appointmentData.startDate),
            },
            _a),
        added: mergeNewChanges(appointmentData, changes),
    });
};
var editCurrentAndFollowing = function (appointmentData, changes) {
    var rRule = appointmentData.rRule, startDate = appointmentData.startDate, _a = appointmentData.exDate, prevExDate = _a === void 0 ? '' : _a, parentData = appointmentData.parentData;
    var initialRule = new RRule(RRule.parseString(rRule));
    var _b = getAppointmentSequenceData(parentData.startDate, moment.utc(startDate).toDate(), prevExDate, rRule), initialSequence = _b.initialSequence, currentChildIndex = _b.currentChildIndex;
    if (currentChildIndex === 0)
        return editAll(appointmentData, changes);
    var addedOptions = initialRule.options.count || initialRule.options.until
        ? { count: initialSequence.length - currentChildIndex }
        : {};
    var addedRules = configureICalendarRules(appointmentData.rRule, __assign({ dtstart: moment.utc(startDate).toDate() }, addedOptions));
    var addedAppointment = moment.utc(changes.startDate).isAfter(initialRule.options.until)
        ? { rRule: 'FREQ=DAILY;COUNT=1', exDate: '' } : { rRule: addedRules[1].slice(6) };
    return {
        changed: changeCurrentAndFollowing(appointmentData, changes, editAll).changed,
        added: __assign(__assign({}, addedAppointment), mergeNewChanges(appointmentData, changes)),
    };
};
var preCommitChanges = function (changes, appointmentData, editType) {
    if (changes === null) {
        switch (editType) {
            case RECURRENCE_EDIT_SCOPE.ALL: {
                return deleteAll(appointmentData);
            }
            case RECURRENCE_EDIT_SCOPE.CURRENT: {
                return deleteCurrent(appointmentData);
            }
            case RECURRENCE_EDIT_SCOPE.CURRENT_AND_FOLLOWING: {
                return deleteCurrentAndFollowing(appointmentData);
            }
        }
    }
    else {
        switch (editType) {
            case RECURRENCE_EDIT_SCOPE.ALL: {
                return editAll(appointmentData, changes);
            }
            case RECURRENCE_EDIT_SCOPE.CURRENT: {
                return editCurrent(appointmentData, changes);
            }
            case RECURRENCE_EDIT_SCOPE.CURRENT_AND_FOLLOWING: {
                return editCurrentAndFollowing(appointmentData, changes);
            }
        }
    }
    return {};
};

var clamp = function (value, min, max) { return Math.max(Math.min(value, max), min); };
var calculateInsideOffset = function (targetType, insidePart, cellDurationMinutes) { return targetType === VERTICAL_TYPE
    ? insidePart * cellDurationMinutes * 60 / 2 : 0; };
var cellType = function (data) { return moment(data.startDate)
    .isSame(data.endDate, 'day') ? VERTICAL_TYPE : HORIZONTAL_TYPE; };
var intervalDuration = function (data, type) { return moment(data.endDate).diff(data.startDate, type); };
var cellIndex = function (getCellRects, clientOffset) { return getCellRects.findIndex(function (getCellRect) {
    var _a = getCellRect(), left = _a.left, top = _a.top, right = _a.right, bottom = _a.bottom;
    var isOver = clientOffset
        && clamp(clientOffset.x, left, right) === clientOffset.x
        && clamp(clientOffset.y, top, bottom) === clientOffset.y;
    return isOver;
}); };
var cellData = function (timeTableIndex, allDayIndex, viewCellsData) {
    if (allDayIndex !== -1) {
        var allDayCellsData = allDayCells(viewCellsData);
        return allDayCellsData[allDayIndex];
    }
    var firstIndex = Math.floor(timeTableIndex / viewCellsData[0].length);
    var secondIndex = timeTableIndex % viewCellsData[0].length;
    return viewCellsData[firstIndex][secondIndex];
};
var autoScroll = function (clientOffset, scrollingStrategy) {
    if ((clientOffset.y < scrollingStrategy.topBoundary + SCROLL_OFFSET)
        && (clientOffset.y > scrollingStrategy.topBoundary)) {
        scrollingStrategy.changeVerticalScroll(-SCROLL_SPEED_PX);
    }
    if (scrollingStrategy.bottomBoundary - SCROLL_OFFSET < clientOffset.y) {
        scrollingStrategy.changeVerticalScroll(+SCROLL_SPEED_PX);
    }
};
var timeBoundariesByResize = function (payload, targetData, targetType, cellDurationMinutes, insidePart) {
    if (targetType !== payload.appointmentType) {
        return { appointmentStartTime: undefined, appointmentEndTime: undefined };
    }
    var appointmentStartTime;
    var appointmentEndTime;
    var sourceType = payload.type;
    if (sourceType === RESIZE_TOP) {
        var insideTopOffset = calculateInsideOffset(targetType, insidePart, cellDurationMinutes);
        appointmentStartTime = moment(targetData.startDate)
            .add(insideTopOffset, SECONDS).toDate();
        appointmentEndTime = moment(payload.endDate).toDate();
    }
    if (sourceType === RESIZE_BOTTOM) {
        var insideBottomOffset = insidePart === 0 && targetType === VERTICAL_TYPE
            ? cellDurationMinutes * 60 / 2 : 0;
        appointmentEndTime = moment(targetData.endDate)
            .add(-insideBottomOffset, SECONDS).toDate();
        appointmentStartTime = moment(payload.startDate).toDate();
    }
    // keep origin appointment duration if coordinates are wrong
    if (moment(appointmentEndTime).diff(appointmentStartTime, MINUTES) < 1) {
        appointmentStartTime = moment(payload.startDate).toDate();
        appointmentEndTime = moment(payload.endDate).toDate();
    }
    return { appointmentStartTime: appointmentStartTime, appointmentEndTime: appointmentEndTime };
};
var timeBoundariesByDrag = function (payload, targetData, targetType, cellDurationMinutes, insidePart, offsetTimeTopBase) {
    if (targetType === HORIZONTAL_TYPE
        && intervalDuration(payload, SECONDS) < intervalDuration(targetData, SECONDS)) {
        return {
            appointmentStartTime: targetData.startDate,
            appointmentEndTime: targetData.endDate,
            offsetTimeTop: 0,
        };
    }
    var offsetTimeTop;
    var appointmentStartTime;
    var appointmentEndTime;
    var insideOffset = calculateInsideOffset(targetType, insidePart, cellDurationMinutes);
    var start = moment(targetData.startDate).add(insideOffset, SECONDS);
    if (offsetTimeTopBase === null) {
        offsetTimeTop = moment(targetData.startDate)
            .diff(payload.startDate, SECONDS) + insideOffset;
    }
    else {
        offsetTimeTop = offsetTimeTopBase;
    }
    if (payload.type === targetType) {
        var appointmentDurationSeconds = intervalDuration(payload, SECONDS);
        appointmentStartTime = moment(start).add((offsetTimeTop) * (-1), SECONDS).toDate();
        appointmentEndTime = moment(start)
            .add((appointmentDurationSeconds - offsetTimeTop), SECONDS).toDate();
    }
    else {
        appointmentStartTime = moment(targetData.startDate)
            .add(insideOffset, SECONDS).toDate();
        appointmentEndTime = moment(targetData.endDate).add(insideOffset, SECONDS).toDate();
    }
    return { appointmentStartTime: appointmentStartTime, appointmentEndTime: appointmentEndTime, offsetTimeTop: offsetTimeTop };
};
var calculateAppointmentTimeBoundaries = function (payload, targetData, targetType, cellDurationMinutes, insidePart, offsetTimeTopBase) {
    var isDragging = (payload.type === VERTICAL_TYPE || payload.type === HORIZONTAL_TYPE);
    return (isDragging
        ? timeBoundariesByDrag(payload, targetData, targetType, cellDurationMinutes, insidePart, offsetTimeTopBase)
        : timeBoundariesByResize(payload, targetData, targetType, cellDurationMinutes, insidePart));
};
var calculateInsidePart = function (top, timeTableCellsRects, timeTableIndex) {
    if (timeTableIndex !== undefined && timeTableIndex !== -1) {
        var cellRect = timeTableCellsRects[timeTableIndex]();
        return top > cellRect.top + cellRect.height / 2 ? 1 : 0;
    }
    return 0;
};
var calculateDraftAppointments = function (allDayIndex, draftAppointments, startViewDate, endViewDate, excludedDays, viewCellsData, getAllDayCellsElementRects, targetType, cellDurationMinutes, getTableCellElementRects) {
    if (allDayIndex !== -1 || (targetType === VERTICAL_TYPE
        && getAllDayCellsElementRects.getCellRects.length
        && intervalDuration(draftAppointments[0].dataItem, HOURS) > 23)) {
        var allDayDrafts = draftAppointments.map(function (draftAppt) { return (__assign(__assign({}, draftAppt), { allDay: true })); });
        return {
            allDayDraftAppointments: allDayRects(allDayDrafts, startViewDate, endViewDate, excludedDays, viewCellsData, getAllDayCellsElementRects),
            timeTableDraftAppointments: [],
        };
    }
    if (targetType === VERTICAL_TYPE || allDayIndex !== -1) {
        return {
            allDayDraftAppointments: [],
            timeTableDraftAppointments: verticalTimeTableRects(draftAppointments, startViewDate, endViewDate, excludedDays, viewCellsData, cellDurationMinutes, getTableCellElementRects),
        };
    }
    return {
        allDayDraftAppointments: [],
        timeTableDraftAppointments: horizontalTimeTableRects(draftAppointments, startViewDate, endViewDate, viewCellsData, getTableCellElementRects),
    };
};

/** @internal */
var RecurrenceFrequency;
(function (RecurrenceFrequency) {
    RecurrenceFrequency[RecurrenceFrequency["Daily"] = RRULE_REPEAT_TYPES.DAILY] = "Daily";
    RecurrenceFrequency[RecurrenceFrequency["Weekly"] = RRULE_REPEAT_TYPES.WEEKLY] = "Weekly";
    RecurrenceFrequency[RecurrenceFrequency["Monthly"] = RRULE_REPEAT_TYPES.MONTHLY] = "Monthly";
    RecurrenceFrequency[RecurrenceFrequency["Yearly"] = RRULE_REPEAT_TYPES.YEARLY] = "Yearly";
})(RecurrenceFrequency || (RecurrenceFrequency = {}));

var getWeekNumberLabels = function (getMessage) {
    return WEEK_NUMBER_LABELS.map(function (weekNumberLabel, index) { return ({
        text: getMessage(weekNumberLabel),
        id: index,
    }); });
};
var getDaysOfWeek = function (formatDate, firstDayOfWeek) {
    var daysOfWeekArray = getDaysOfWeekArray(firstDayOfWeek);
    var daysOfWeekDates = getDaysOfWeekDates(firstDayOfWeek);
    return daysOfWeekDates.map(function (day, index) { return ({
        text: getDayOfWeek(day, formatDate),
        id: index + 1 < DAYS_IN_WEEK ? daysOfWeekArray[index + 1] : daysOfWeekArray[0],
    }); });
};
var getMonths = function (formatDate) { return MONTHS_DATES.map(function (month, index) { return ({
    text: getMonth(month, formatDate),
    id: getMonthId(index),
}); }); };
var getMonthsWithOf = function (getMessage, formatDate) { return MONTHS_DATES.map(function (month, index) { return ({
    text: getMonthWithOf(month, getMessage, formatDate),
    id: getMonthId(index),
}); }); };
var getMonthWithOf = function (date, getMessage, formatDate) { return getMessage('ofLabel')
    + formatDate(date, DAY_LONG_MONTH_OPTIONS).replace(/[\d.,]/g, '').toString(); };
var getMonth = function (date, formatDate) { return formatDate(date, LONG_MONTH_OPTIONS); };
var getDayOfWeek = function (date, formatDate) { return formatDate(date, LONG_WEEK_DAY_OPTIONS); };
var getMonthId = function (index) { return index + 1; };
var getAvailableRecurrenceOptions = function (getMessage) {
    return REPEAT_TYPES_ARRAY.map(function (type) { return ({
        text: getMessage(type),
        id: type,
    }); });
};
var getCountDependingOnRecurrenceType = function (frequency) {
    var count;
    switch (frequency) {
        case RRULE_REPEAT_TYPES.YEARLY:
            count = BASIC_YEALY_COUNT;
            break;
        case RRULE_REPEAT_TYPES.MONTHLY:
            count = BASIC_MONTHLY_COUNT;
            break;
        case RRULE_REPEAT_TYPES.WEEKLY:
            count = BASIC_WEEKLY_COUNT;
            break;
        case RRULE_REPEAT_TYPES.DAILY:
            count = BASIC_DAILY_COUNT;
            break;
    }
    return count;
};
var checkIsNaturalNumber = function (number) { return number > 0 && number <= Number.MAX_SAFE_INTEGER; };

var callActionIfExists = function (action, payload) {
    if (action) {
        action(payload);
    }
};
var isAllDayCell = function (startDate, endDate) { return moment(endDate).diff(moment(startDate), 'days') >= 1; };
var changeRecurrenceFrequency = function (rule, freq, startDate) {
    if (!rule) {
        if (freq === RRULE_REPEAT_TYPES.MONTHLY) {
            return (new RRule(__assign(__assign({}, DEFAULT_RULE_OBJECT), { freq: freq, bymonthday: [startDate.getDate()], count: getCountDependingOnRecurrenceType(freq) }))).toString();
        }
        if (freq === RRULE_REPEAT_TYPES.YEARLY) {
            return (new RRule(__assign(__assign({}, DEFAULT_RULE_OBJECT), { freq: freq, bymonthday: [startDate.getDate()], bymonth: startDate.getMonth() + 1, count: getCountDependingOnRecurrenceType(freq) }))).toString();
        }
        return (new RRule(__assign(__assign({}, DEFAULT_RULE_OBJECT), { freq: freq, count: getCountDependingOnRecurrenceType(freq) }))).toString();
    }
    var options = RRule.parseString(rule);
    if (options.freq === freq)
        return rule;
    options.freq = freq;
    options.count = getCountDependingOnRecurrenceType(freq);
    if (freq === RRULE_REPEAT_TYPES.MONTHLY || freq === RRULE_REPEAT_TYPES.YEARLY) {
        options.bymonthday = startDate.getDate();
    }
    if (freq === RRULE_REPEAT_TYPES.YEARLY) {
        options.bymonth = startDate.getMonth() + 1;
    }
    if (freq === RRULE_REPEAT_TYPES.DAILY || freq === RRULE_REPEAT_TYPES.WEEKLY) {
        options.bymonthday = undefined;
    }
    options.byweekday = undefined;
    var nextRule = new RRule(options);
    return nextRule.toString();
};
var getRecurrenceOptions = function (rule) {
    if (!rule)
        return null;
    var options = RRule.parseString(rule);
    if (options.byweekday) {
        var byweekday = options.byweekday.map(function (weekDay) { return weekDay.weekday; });
        options.byweekday = byweekday;
    }
    return options;
};
var changeRecurrenceOptions = function (options) {
    return options ? (new RRule(__assign({}, options))).toString() : undefined;
};
var handleStartDateChange = function (nextStartDay, options) {
    if (nextStartDay <= 31) {
        var nextOptions = __assign(__assign({}, options), { bymonthday: nextStartDay });
        return changeRecurrenceOptions(nextOptions);
    }
    return changeRecurrenceOptions(options);
};
var handleToDayOfWeekChange = function (weekNumber, dayOfWeek, options) {
    var nextOptions = setByMonthDay(weekNumber, options);
    nextOptions.byweekday = dayOfWeek > 0 ? dayOfWeek - 1 : 6;
    return changeRecurrenceOptions(nextOptions);
};
var handleWeekNumberChange = function (nextWeekNumber, options) {
    return changeRecurrenceOptions(setByMonthDay(nextWeekNumber, options));
};
var getRRuleFrequency = function (repeatType) { return RRULE_REPEAT_TYPES[repeatType.toUpperCase()]; };
var getFrequencyString = function (rRuleFrequency) {
    if (rRuleFrequency === RRULE_REPEAT_TYPES.DAILY)
        return REPEAT_TYPES.DAILY;
    if (rRuleFrequency === RRULE_REPEAT_TYPES.WEEKLY)
        return REPEAT_TYPES.WEEKLY;
    if (rRuleFrequency === RRULE_REPEAT_TYPES.MONTHLY)
        return REPEAT_TYPES.MONTHLY;
    if (rRuleFrequency === RRULE_REPEAT_TYPES.YEARLY)
        return REPEAT_TYPES.YEARLY;
    return REPEAT_TYPES.NEVER;
};
var setByMonthDay = function (nextWeekNumber, options) {
    if (nextWeekNumber < 4) {
        return __assign(__assign({}, options), { bymonthday: [
                nextWeekNumber * 7 + 1,
                nextWeekNumber * 7 + 2,
                nextWeekNumber * 7 + 3,
                nextWeekNumber * 7 + 4,
                nextWeekNumber * 7 + 5,
                nextWeekNumber * 7 + 6,
                nextWeekNumber * 7 + 7,
            ] });
    }
    return __assign(__assign({}, options), { bymonthday: [-1, -2, -3, -4, -5, -6, -7] });
};
var getRadioGroupDisplayData = function (recurrenceOptions, stateDayOfWeek, stateWeekNumber, stateDayNumber, firstOption, secondOption) {
    var weekNumber = LAST_WEEK;
    if (recurrenceOptions.bymonthday && !Array.isArray(recurrenceOptions.bymonthday)) {
        return {
            dayNumberTextField: recurrenceOptions.bymonthday,
            weekNumber: stateWeekNumber,
            dayOfWeek: stateDayOfWeek,
            radioGroupValue: firstOption,
        };
    }
    if (!recurrenceOptions.byweekday) {
        return {
            dayOfWeek: stateDayOfWeek,
            weekNumber: stateWeekNumber,
            radioGroupValue: secondOption,
            dayNumberTextField: stateDayNumber,
        };
    }
    var dayOfWeek = recurrenceOptions.byweekday[0] < 6
        ? recurrenceOptions.byweekday[0] + 1 : 0;
    if (recurrenceOptions.bymonthday && (recurrenceOptions.bymonthday[0] > 0)) {
        weekNumber = Math.trunc(recurrenceOptions.bymonthday[0] / 7);
    }
    return {
        dayOfWeek: dayOfWeek,
        weekNumber: weekNumber,
        radioGroupValue: secondOption,
        dayNumberTextField: stateDayNumber,
    };
};
var handleChangeFrequency = function (repeatType, rRule, startDate, action) {
    var rruleRepeatType = getRRuleFrequency(repeatType);
    var nextRRule;
    if (rruleRepeatType !== undefined) {
        nextRRule = changeRecurrenceFrequency(rRule, rruleRepeatType, startDate);
    }
    action({ rRule: nextRRule });
};
var handleWeekDaysChange = function (options, weekDay) {
    var byWeekDay = options.byweekday || [];
    var index = byWeekDay.indexOf(weekDay);
    var isAdded = !(index > -1);
    if (isAdded) {
        byWeekDay.push(weekDay);
    }
    else if (index > -1) {
        byWeekDay.splice(index, 1);
    }
    if (byWeekDay === 0)
        return __assign(__assign({}, options), { byweekday: undefined });
    return __assign(__assign({}, options), { byweekday: byWeekDay });
};
var getDaysOfWeekArray = function (firstDayOfWeek) {
    var firstPart = DAYS_OF_WEEK_ARRAY.filter(function (dayOfWeek) { return dayOfWeek >= firstDayOfWeek - 1 && dayOfWeek < DAYS_IN_WEEK - 1; });
    var secondPart = DAYS_OF_WEEK_ARRAY.filter(function (dayOfWeek) { return dayOfWeek < firstDayOfWeek - 1 || dayOfWeek >= DAYS_IN_WEEK - 1; });
    return firstDayOfWeek !== 0 ? __spread(firstPart, secondPart) : __spread(secondPart, firstPart);
};
var getDaysOfWeekDates = function (firstDayOfWeek) {
    var firstPart = DAYS_OF_WEEK_DATES.slice(firstDayOfWeek, DAYS_OF_WEEK_DATES.length);
    var secondPart = DAYS_OF_WEEK_DATES.slice(0, firstDayOfWeek);
    return __spread(firstPart, secondPart);
};

export { APRIL_DATE, AUGUST_DATE, AUTO_HEIGHT, BASIC_DAILY_COUNT, BASIC_MONTHLY_COUNT, BASIC_WEEKLY_COUNT, BASIC_YEALY_COUNT, CANCEL_BUTTON, CANCEL_COMMAND_BUTTON, CLOSE_COMMAND_BUTTON, COMMIT_COMMAND_BUTTON, DAYS_IN_WEEK, DAYS_OF_WEEK, DAYS_OF_WEEK_ARRAY, DAYS_OF_WEEK_DATES, DAY_LONG_MONTH_LONG_YEAR_OPTIONS, DAY_LONG_MONTH_OPTIONS, DAY_OPTIONS, DAY_SHORT_MONTH_LONG_YEAR_OPTIONS, DAY_SHORT_MONTH_OPTIONS, DAY_SHORT_MONTH_SHORT_YEAR_OPTIONS, DECEMBER_DATE, DEFAULT_RULE_OBJECT, DELETE_BUTTON, DELETE_COMMAND_BUTTON, EMPTY_OPTIONS, END_REPEAT_RADIO_GROUP, FEBRUARY_DATE, FIRST_WEEK, FOURTH_WEEK, FRIDAY_DATE, HORIZONTAL_TYPE, HOURS, HOUR_MINUTE_OPTIONS, JANUARY_DATE, JULY_DATE, JUNE_DATE, LAST_WEEK, LONG_MONTH_OPTIONS, LONG_WEEK_DAY_OPTIONS, MARCH_DATE, MAY_DATE, MINUTES, MONDAY_DATE, MONTHLY_RADIO_GROUP, MONTHS, MONTHS_DATES, MONTH_YEAR_OPTIONS, MULTILINE_TEXT_EDITOR, NOVEMBER_DATE, NUMBER_EDITOR, OCTOBER_DATE, OPEN_COMMAND_BUTTON, ORDINARY_LABEL, ORDINARY_TEXT_EDITOR, OUTLINED_SELECT, POSITION_END, POSITION_START, RECURRENCE_EDIT_SCOPE, REPEAT_TYPES, REPEAT_TYPES_ARRAY, RESIZE_BOTTOM, RESIZE_TOP, RRULE_REPEAT_TYPES, RecurrenceFrequency, SATURDAY_DATE, SAVE_BUTTON, SCROLL_OFFSET, SCROLL_SPEED_PX, SECONDS, SECOND_WEEK, SEPTEMBER_DATE, SHORT_MONTH_LONG_YEAR_OPTIONS, SHORT_MONTH_OPTIONS, SHORT_MONTH_SHORT_YEAR_OPTIONS, STANDARD_SELECT, SUNDAY_DATE, THIRD_WEEK, THURSDAY_DATE, TITLE, TITLE_TEXT_EDITOR, TOGGLE_APPOINTMENT_FORM_VISIBILITY, TOGGLE_APPOINTMENT_TOOLTIP_VISIBILITY, TUESDAY_DATE, VERTICAL_TYPE, WEDNESDAY_DATE, WEEKDAY_INTERVAL, WEEK_DAY_OPTIONS, WEEK_NUMBER_LABELS, YEARLY_RADIO_GROUP, addAppointment, adjustAppointments, allDayCells, allDayPredicate, allDayRects, appointments, autoScroll, availableViews, calculateAllDayDateIntervals, calculateAppointmentTimeBoundaries, calculateDraftAppointments, calculateFirstDateOfWeek, calculateInsidePart, calculateMonthDateIntervals, calculateRectByDateIntervals, calculateWeekDateIntervals, callActionIfExists, cancelAddedAppointment, cancelChanges, cellData, cellIndex, cellType, changeAppointment, changeCurrentDate, changeRecurrenceFrequency, changeRecurrenceOptions, changedAppointmentById, checkIsNaturalNumber, computed, dayBoundaryPredicate, dayScale, deleteAll, deleteCurrent, deleteCurrentAndFollowing, editAll, editCurrent, editCurrentAndFollowing, endViewDate, filterByViewBoundaries, findOverlappedAppointments, formatDateTimeGetter, formatDateToString, getAllDayCellIndexByDate, getAppointmentStyle, getAvailableRecurrenceOptions, getCellByDate, getCountDependingOnRecurrenceType, getDaysOfWeek, getDaysOfWeekArray, getDaysOfWeekDates, getFrequencyString, getHorizontalRectByDates, getMonthCellIndexByDate, getMonths, getMonthsWithOf, getRRuleFrequency, getRRuleSetWithExDates, getRadioGroupDisplayData, getRecurrenceOptions, getUTCDate, getVerticalRectByDates, getViewType, getWeekNumberLabels, handleChangeFrequency, handleStartDateChange, handleToDayOfWeekChange, handleWeekDaysChange, handleWeekNumberChange, horizontalTimeTableRects, intervalDuration, isAllDayCell, isMidnight$1 as isMidnight, monthCellsData, normalizeAppointmentDuration, preCommitChanges, reduceAppointmentByDayBounds, setAppointmentData, setAppointmentMeta, setCurrentViewName, sliceAppointmentByDay, sliceAppointmentByWeek, sliceAppointmentsByBoundaries, sortAppointments, startEditAppointment, startViewDate, stopEditAppointment, timeBoundariesByDrag, timeBoundariesByResize, timeScale, toPercentage, unwrapGroups, verticalTimeTableRects, viewBoundText, viewCellsData, viewPredicate };
//# sourceMappingURL=dx-scheduler-core.es.js.map
