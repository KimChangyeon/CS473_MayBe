/**
 * Bundle of @devexpress/dx-react-core
 * Generated: 2019-11-07
 * Version: 2.2.1
 * License: https://js.devexpress.com/Licensing
 */

import { createContext, createElement, Children, PureComponent, Component, createRef } from 'react';
import { shallowEqual, PluginHost as PluginHost$1, EventEmitter } from '@devexpress/dx-core';
import { findDOMNode, unstable_batchedUpdates } from 'react-dom';
import { shape, instanceOf } from 'prop-types';

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
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

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

/** @internal */
var PluginHostContext = createContext(null);
/** @internal */
var PositionContext = createContext(function () { return []; });
/** @internal */
var TemplateHostContext = createContext(null);

/** @internal */
var PluginIndexer = /*#__PURE__*/ (function (_super) {
    __extends(PluginIndexer, _super);
    function PluginIndexer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.indexes = {};
        _this.memoize = function (index, positionContext) {
            if (_this.indexes[index])
                return _this.indexes[index];
            var fn = function () {
                var calculatedPosition = positionContext();
                return __spread(calculatedPosition, [index]);
            };
            _this.indexes[index] = fn;
            return fn;
        };
        return _this;
    }
    PluginIndexer.prototype.render = function () {
        var _this = this;
        var children = this.props.children;
        return (createElement(PositionContext.Consumer, null, function (positionContext) { return (Children.map(children, function (child, index) {
            if (!child || !child.type)
                return child;
            var childPosition = _this.memoize(index, positionContext);
            return (createElement(PositionContext.Provider, { key: String(index), value: childPosition }, child));
        })); }));
    };
    return PluginIndexer;
}(PureComponent));

/** @internal */
var PLUGIN_HOST_CONTEXT = 'dxcore_pluginHost_context';
/** @internal */
var POSITION_CONTEXT = 'dxcore_position_context';
/** @internal */
var TEMPLATE_HOST_CONTEXT = 'dxcore_templateHost_context';
/** @internal */
var RERENDER_TEMPLATE_EVENT = Symbol('rerenderTemplate');
/** @internal */
var RERENDER_TEMPLATE_SCOPE_EVENT = Symbol('rerenderTemplateScope');
/** @internal */
var UPDATE_CONNECTION_EVENT = Symbol('updateConnection');

/** @internal */
var withContext = function (Context, name) { return function (Component) { return function (props) { return (createElement(Context.Consumer, null, function (context) {
    var _a;
    return (createElement(Component, __assign({}, props, (_a = {}, _a[name] = context, _a))));
})); }; }; };
/** @internal */
var withHostAndPosition = function (Component) { return withContext(PluginHostContext, PLUGIN_HOST_CONTEXT)(withContext(PositionContext, POSITION_CONTEXT)(Component)); };

/** @internal */
var PluginBase = /*#__PURE__*/ (function (_super) {
    __extends(PluginBase, _super);
    function PluginBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PluginBase.prototype.componentDidMount = function () {
        var _a = this.props, _b = PLUGIN_HOST_CONTEXT, pluginHost = _a[_b], _c = POSITION_CONTEXT, position = _a[_c];
        var _d = this.props, name = _d.name, dependencies = _d.dependencies;
        this.plugin = {
            position: position,
            name: name,
            dependencies: dependencies,
            container: true,
        };
        pluginHost.registerPlugin(this.plugin);
    };
    PluginBase.prototype.componentDidUpdate = function () {
        var _a = PLUGIN_HOST_CONTEXT, pluginHost = this.props[_a];
        pluginHost.ensureDependencies();
    };
    PluginBase.prototype.componentWillUnmount = function () {
        var _a = PLUGIN_HOST_CONTEXT, pluginHost = this.props[_a];
        pluginHost.unregisterPlugin(this.plugin);
    };
    PluginBase.prototype.render = function () {
        var children = this.props.children;
        return (createElement(PluginIndexer, null, children));
    };
    return PluginBase;
}(PureComponent));
var Plugin = withHostAndPosition(PluginBase);

var getRenderingData = function (props) {
    var name = props.name, params = props.params;
    if (name) {
        var _a = PLUGIN_HOST_CONTEXT, pluginHost = props[_a];
        return {
            params: params,
            templates: pluginHost.collect(name + "Template")
                .filter(function (template) { return template.predicate(params); })
                .reverse(),
        };
    }
    var _b = TEMPLATE_HOST_CONTEXT, templateHost = props[_b];
    return {
        params: params || templateHost.params(),
        templates: templateHost.templates(),
    };
};
var TemplatePlaceholderBase = /*#__PURE__*/ (function (_super) {
    __extends(TemplatePlaceholderBase, _super);
    function TemplatePlaceholderBase() {
        var _a;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.subscription = (_a = {},
            _a[RERENDER_TEMPLATE_EVENT] = function (id) {
                if (_this.template && _this.template.id === id) {
                    _this.forceUpdate();
                }
            },
            _a[RERENDER_TEMPLATE_SCOPE_EVENT] = function (name) {
                var propsName = _this.props.name;
                if (propsName === name) {
                    _this.forceUpdate();
                }
            },
            _a);
        _this.template = null;
        _this.params = {};
        return _this;
    }
    TemplatePlaceholderBase.prototype.componentDidMount = function () {
        var _a = PLUGIN_HOST_CONTEXT, pluginHost = this.props[_a];
        pluginHost.registerSubscription(this.subscription);
    };
    TemplatePlaceholderBase.prototype.shouldComponentUpdate = function (nextProps) {
        var _a = getRenderingData(nextProps), params = _a.params, templates = _a.templates;
        var children = this.props.children;
        var _b = __read(templates, 1), template = _b[0];
        return children !== nextProps.children || this.template !== template
            || !shallowEqual(this.params, params);
    };
    TemplatePlaceholderBase.prototype.componentWillUnmount = function () {
        var _a = PLUGIN_HOST_CONTEXT, pluginHost = this.props[_a];
        pluginHost.unregisterSubscription(this.subscription);
    };
    TemplatePlaceholderBase.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = getRenderingData(this.props), params = _b.params, templates = _b.templates;
        this.params = params;
        _a = __read(templates, 1), this.template = _a[0];
        var restTemplates = templates.slice(1);
        var content = null;
        if (this.template) {
            var templateContent = this.template.children;
            content = templateContent() || null;
            if (content && typeof content === 'function') {
                content = content(params);
            }
        }
        var templatePlaceholder = this.props.children;
        return (createElement(TemplateHostContext.Provider, { value: {
                templates: function () { return restTemplates; },
                params: function () { return _this.params; },
            } }, templatePlaceholder ? templatePlaceholder(content) : content));
    };
    return TemplatePlaceholderBase;
}(Component));
/** A React component to which a related Template is rendered. */
var TemplatePlaceholder = withContext(PluginHostContext, PLUGIN_HOST_CONTEXT)(withContext(TemplateHostContext, TEMPLATE_HOST_CONTEXT)(TemplatePlaceholderBase));

/** @internal */
var PluginHostBase = /*#__PURE__*/ (function (_super) {
    __extends(PluginHostBase, _super);
    function PluginHostBase(props) {
        var _this = _super.call(this, props) || this;
        _this.host = new PluginHost$1();
        return _this;
    }
    PluginHostBase.prototype.render = function () {
        var children = this.props.children;
        return (createElement(PluginHostContext.Provider, { value: this.host },
            createElement(PluginIndexer, null, children),
            createElement(TemplatePlaceholder, { name: "root" })));
    };
    return PluginHostBase;
}(PureComponent));
var PluginHost = PluginHostBase;

/** @internal */
var getAvailableGetters = function (pluginHost, getGetterValue) {
    if (getGetterValue === void 0) { getGetterValue = function (getterName) { return pluginHost.get(getterName + "Getter"); }; }
    var trackedDependencies = {};
    var getters;
    if (typeof Proxy !== 'undefined') {
        getters = new Proxy({}, {
            get: function (target, prop) {
                if (typeof prop !== 'string')
                    return undefined;
                var result = getGetterValue(prop);
                trackedDependencies[prop] = result;
                return result;
            },
            getOwnPropertyDescriptor: function (target, prop) {
                return {
                    configurable: true,
                    enumerable: true,
                    value: this.get(target, prop, undefined),
                };
            },
            ownKeys: function () {
                return pluginHost.knownKeys('Getter');
            },
        });
    }
    else {
        getters = pluginHost.knownKeys('Getter')
            .reduce(function (acc, getterName) {
            Object.defineProperty(acc, getterName, {
                get: function () {
                    var result = getGetterValue(getterName);
                    trackedDependencies[getterName] = result;
                    return result;
                },
            });
            return acc;
        }, {});
    }
    return { getters: getters, trackedDependencies: trackedDependencies };
};
/** @internal */
var isTrackedDependenciesChanged = function (pluginHost, prevTrackedDependencies, getGetterValue) {
    if (getGetterValue === void 0) { getGetterValue = function (getterName) { return pluginHost.get(getterName + "Getter"); }; }
    var trackedDependencies = Object.keys(prevTrackedDependencies)
        // tslint:disable-next-line: prefer-object-spread
        .reduce(function (acc, getterName) {
        var _a;
        return Object.assign(acc, (_a = {},
            _a[getterName] = getGetterValue(getterName),
            _a));
    }, {});
    return !shallowEqual(prevTrackedDependencies, trackedDependencies);
};
/** @internal */
var getAvailableActions = function (pluginHost, getAction) {
    if (getAction === void 0) { getAction = function (actionName) { return pluginHost.collect(actionName + "Action").slice().reverse()[0]; }; }
    var actions;
    if (typeof Proxy !== 'undefined') {
        actions = new Proxy({}, {
            get: function (target, prop) {
                if (typeof prop !== 'string')
                    return undefined;
                return getAction(prop);
            },
            getOwnPropertyDescriptor: function (target, prop) {
                return {
                    configurable: true,
                    enumerable: true,
                    value: this.get(target, prop, undefined),
                };
            },
            ownKeys: function () {
                return pluginHost.knownKeys('Action');
            },
        });
    }
    else {
        actions = pluginHost.knownKeys('Action')
            .reduce(function (acc, actionName) {
            Object.defineProperty(acc, actionName, {
                get: function () { return getAction(actionName); },
            });
            return acc;
        }, {});
    }
    return actions;
};

var ActionBase = /*#__PURE__*/ (function (_super) {
    __extends(ActionBase, _super);
    function ActionBase(props) {
        var _a;
        var _this = _super.call(this, props) || this;
        var _b = PLUGIN_HOST_CONTEXT, pluginHost = props[_b], _c = POSITION_CONTEXT, positionContext = props[_c];
        var name = props.name;
        _this.plugin = (_a = {
                position: function () { return positionContext(); }
            },
            _a[name + "Action"] = function (params) {
                var action = _this.props.action;
                var getters = getAvailableGetters(pluginHost, function (getterName) { return pluginHost.get(getterName + "Getter", _this.plugin); }).getters;
                var nextParams = params;
                var actions = getAvailableActions(pluginHost, function (actionName) { return (actionName === name
                    ? function (newParams) { nextParams = newParams; }
                    : pluginHost.collect(actionName + "Action", _this.plugin).slice().reverse()[0]); });
                action(params, getters, actions);
                var nextAction = pluginHost.collect(name + "Action", _this.plugin).slice().reverse()[0];
                if (nextAction) {
                    nextAction(nextParams);
                }
            },
            _a);
        pluginHost.registerPlugin(_this.plugin);
        return _this;
    }
    ActionBase.prototype.componentWillUnmount = function () {
        var _a = PLUGIN_HOST_CONTEXT, pluginHost = this.props[_a];
        pluginHost.unregisterPlugin(this.plugin);
    };
    ActionBase.prototype.render = function () {
        return null;
    };
    return ActionBase;
}(PureComponent));
var Action = withHostAndPosition(ActionBase);

var GetterBase = /*#__PURE__*/ (function (_super) {
    __extends(GetterBase, _super);
    function GetterBase(props) {
        var _a;
        var _this = _super.call(this, props) || this;
        var _b = PLUGIN_HOST_CONTEXT, pluginHost = props[_b], _c = POSITION_CONTEXT, positionContext = props[_c];
        var name = props.name;
        var lastComputed;
        var lastTrackedDependencies = {};
        var lastResult;
        _this.plugin = (_a = {
                position: function () { return positionContext(); }
            },
            _a[name + "Getter"] = function (original) {
                var _a = _this.props, value = _a.value, computed = _a.computed;
                if (computed === undefined)
                    return value;
                var getGetterValue = function (getterName) { return ((getterName === name)
                    ? original
                    : pluginHost.get(getterName + "Getter", _this.plugin)); };
                if (computed === lastComputed
                    && !isTrackedDependenciesChanged(pluginHost, lastTrackedDependencies, getGetterValue)) {
                    return lastResult;
                }
                var _b = getAvailableGetters(pluginHost, getGetterValue), getters = _b.getters, trackedDependencies = _b.trackedDependencies;
                var actions = getAvailableActions(pluginHost);
                lastComputed = computed;
                lastTrackedDependencies = trackedDependencies;
                lastResult = computed(getters, actions);
                return lastResult;
            },
            _a);
        pluginHost.registerPlugin(_this.plugin);
        return _this;
    }
    GetterBase.prototype.componentDidUpdate = function () {
        var _a = PLUGIN_HOST_CONTEXT, pluginHost = this.props[_a];
        pluginHost.broadcast(UPDATE_CONNECTION_EVENT);
    };
    GetterBase.prototype.componentWillUnmount = function () {
        var _a = PLUGIN_HOST_CONTEXT, pluginHost = this.props[_a];
        pluginHost.unregisterPlugin(this.plugin);
    };
    GetterBase.prototype.render = function () {
        return null;
    };
    return GetterBase;
}(PureComponent));
var Getter = withHostAndPosition(GetterBase);

var globalTemplateId = 0;
/** @internal */
var TemplateBase = /*#__PURE__*/ (function (_super) {
    __extends(TemplateBase, _super);
    function TemplateBase(props) {
        var _a;
        var _this = _super.call(this, props) || this;
        _this.children = function () { return void 0; };
        globalTemplateId += 1;
        _this.id = globalTemplateId;
        var _b = PLUGIN_HOST_CONTEXT, pluginHost = props[_b], _c = POSITION_CONTEXT, positionContext = props[_c];
        var name = props.name, predicate = props.predicate;
        _this.plugin = (_a = {
                position: function () { return positionContext(); }
            },
            _a[name + "Template"] = {
                id: _this.id,
                predicate: function (params) { return (predicate ? predicate(params) : true); },
                children: function () {
                    var children = _this.props.children;
                    return children;
                },
            },
            _a);
        pluginHost.registerPlugin(_this.plugin);
        pluginHost.broadcast(RERENDER_TEMPLATE_SCOPE_EVENT, name);
        return _this;
    }
    TemplateBase.prototype.componentDidUpdate = function () {
        var _a = PLUGIN_HOST_CONTEXT, pluginHost = this.props[_a];
        pluginHost.broadcast(RERENDER_TEMPLATE_EVENT, this.id);
    };
    TemplateBase.prototype.componentWillUnmount = function () {
        var _a = PLUGIN_HOST_CONTEXT, pluginHost = this.props[_a];
        var name = this.props.name;
        pluginHost.unregisterPlugin(this.plugin);
        pluginHost.broadcast(RERENDER_TEMPLATE_SCOPE_EVENT, name);
    };
    TemplateBase.prototype.render = function () {
        return null;
    };
    return TemplateBase;
}(PureComponent));
/*** A React component that defines a markup that is rendered
 * as the corresponding TemplatePlaceholder.
 */
var Template = withHostAndPosition(TemplateBase);

/** @internal */
var TemplateConnectorBase = /*#__PURE__*/ (function (_super) {
    __extends(TemplateConnectorBase, _super);
    function TemplateConnectorBase(props, context) {
        var _a;
        var _this = _super.call(this, props, context) || this;
        _this.trackedDependencies = {};
        _this.subscription = (_a = {},
            _a[UPDATE_CONNECTION_EVENT] = function () { return _this.updateConnection(); },
            _a);
        return _this;
    }
    TemplateConnectorBase.prototype.componentDidMount = function () {
        var pluginHost = this.context;
        pluginHost.registerSubscription(this.subscription);
    };
    TemplateConnectorBase.prototype.componentWillUnmount = function () {
        var pluginHost = this.context;
        pluginHost.unregisterSubscription(this.subscription);
    };
    TemplateConnectorBase.prototype.updateConnection = function () {
        var pluginHost = this.context;
        if (isTrackedDependenciesChanged(pluginHost, this.trackedDependencies)) {
            this.forceUpdate();
        }
    };
    TemplateConnectorBase.prototype.render = function () {
        var pluginHost = this.context;
        var children = this.props.children;
        var _a = getAvailableGetters(pluginHost), getters = _a.getters, trackedDependencies = _a.trackedDependencies;
        this.trackedDependencies = trackedDependencies;
        var actions = getAvailableActions(pluginHost);
        return children(getters, actions);
    };
    return TemplateConnectorBase;
}(Component));
TemplateConnectorBase.contextType = PluginHostContext;
/** A React component that provides access to Getters and Actions within a Template. */
var TemplateConnector = TemplateConnectorBase;

var TIMEOUT = 180;
/** @internal */
var TouchStrategy = /*#__PURE__*/ (function () {
    function TouchStrategy(delegate) {
        this.delegate = delegate;
        this.touchStartTimeout = null;
        this.dragging = false;
    }
    TouchStrategy.prototype.isDragging = function () {
        return this.dragging;
    };
    TouchStrategy.prototype.isWaiting = function () {
        return !!this.touchStartTimeout;
    };
    TouchStrategy.prototype.cancelWaiting = function () {
        clearTimeout(this.touchStartTimeout);
        this.touchStartTimeout = undefined;
    };
    TouchStrategy.prototype.start = function (e) {
        var _this = this;
        var _a = e.touches[0], x = _a.clientX, y = _a.clientY;
        this.touchStartTimeout = setTimeout(function () {
            _this.delegate.onStart({ x: x, y: y });
            _this.dragging = true;
        }, TIMEOUT);
    };
    TouchStrategy.prototype.move = function (e) {
        this.cancelWaiting();
        if (this.dragging) {
            var _a = e.touches[0], clientX = _a.clientX, clientY = _a.clientY;
            e.preventDefault();
            this.delegate.onMove({ x: clientX, y: clientY });
        }
    };
    TouchStrategy.prototype.end = function (e) {
        this.cancelWaiting();
        if (this.dragging) {
            var _a = e.changedTouches[0], clientX = _a.clientX, clientY = _a.clientY;
            this.delegate.onEnd({ x: clientX, y: clientY });
        }
        this.mouseInitialOffset = null;
        this.dragging = false;
    };
    return TouchStrategy;
}());

/* globals document:true */
var gestureCover;
/** @internal */
var toggleGestureCover = function (toggle, cursor) {
    var style = {
        pointerEvents: toggle ? 'all' : 'none',
    };
    if (toggle && cursor) {
        style = __assign(__assign({}, style), { cursor: cursor });
    }
    if (!gestureCover) {
        style = __assign(__assign({}, style), { position: 'fixed', top: 0, right: 0, left: 0, bottom: 0, opacity: 0, zIndex: 2147483647 });
        gestureCover = document.createElement('div');
        document.body.appendChild(gestureCover);
    }
    Object.keys(style).forEach(function (key) { gestureCover.style[key] = style[key]; });
};

/* globals document:true window:true */
/** @internal */
var clear = function () {
    var selection = window.getSelection && window.getSelection();
    if (selection) {
        if (selection.empty) {
            selection.empty();
        }
        else if (selection.removeAllRanges) {
            selection.removeAllRanges();
        }
    }
};

/* globals window:true document:true */
var BOUNDARY = 10;
var clamp = function (value, min, max) { return Math.max(Math.min(value, max), min); };
var isBoundExceeded = function (_a, _b) {
    var initialX = _a.x, initialY = _a.y;
    var x = _b.x, y = _b.y;
    return clamp(x, initialX - BOUNDARY, initialX + BOUNDARY) !== x
        || clamp(y, initialY - BOUNDARY, initialY + BOUNDARY) !== y;
};
/** @internal */
var MouseStrategy = /*#__PURE__*/ (function () {
    function MouseStrategy(delegate) {
        this.delegate = delegate;
        this.mouseInitialOffset = null;
        this.dragging = false;
    }
    MouseStrategy.prototype.isDragging = function () {
        return this.dragging;
    };
    MouseStrategy.prototype.start = function (e) {
        var x = e.clientX, y = e.clientY;
        this.e = e;
        this.mouseInitialOffset = { x: x, y: y };
    };
    MouseStrategy.prototype.move = function (e) {
        var x = e.clientX, y = e.clientY;
        var dragStarted = false;
        if (!this.dragging && this.mouseInitialOffset) {
            if (isBoundExceeded(this.mouseInitialOffset, { x: x, y: y })) {
                this.delegate.onStart(this.mouseInitialOffset);
                clear();
                dragStarted = true;
                this.dragging = true;
            }
        }
        if (this.dragging) {
            e.preventDefault();
            this.delegate.onMove({ x: x, y: y });
        }
        if (dragStarted) {
            var cursor = window.getComputedStyle(document.elementFromPoint(x, y)).cursor;
            toggleGestureCover(true, cursor);
        }
    };
    MouseStrategy.prototype.end = function (e) {
        if (this.dragging) {
            var x = e.clientX, y = e.clientY;
            toggleGestureCover(false);
            this.delegate.onEnd({ x: x, y: y });
        }
        this.mouseInitialOffset = null;
        this.dragging = false;
    };
    return MouseStrategy;
}());

/* globals window:true */
var eventEmitter;
/** @internal */
var getSharedEventEmitter = function () {
    if (!eventEmitter) {
        eventEmitter = new EventEmitter();
        ['mousemove', 'mouseup', 'touchmove', 'touchend', 'touchcancel']
            .forEach(function (name) { return window.addEventListener(name, function (e) { return eventEmitter.emit([name, e]); }, { passive: false }); });
    }
    return eventEmitter;
};

var draggingHandled = Symbol('draggingHandled');
/** @internal */
var Draggable = /*#__PURE__*/ (function (_super) {
    __extends(Draggable, _super);
    function Draggable(props, context) {
        var _this = _super.call(this, props, context) || this;
        var delegate = {
            onStart: function (_a) {
                var x = _a.x, y = _a.y;
                var onStart = _this.props.onStart;
                if (!onStart)
                    return;
                unstable_batchedUpdates(function () {
                    onStart({ x: x, y: y });
                });
            },
            onMove: function (_a) {
                var x = _a.x, y = _a.y;
                var onUpdate = _this.props.onUpdate;
                if (!onUpdate)
                    return;
                unstable_batchedUpdates(function () {
                    onUpdate({ x: x, y: y });
                });
            },
            onEnd: function (_a) {
                var x = _a.x, y = _a.y;
                var onEnd = _this.props.onEnd;
                if (!onEnd)
                    return;
                unstable_batchedUpdates(function () {
                    onEnd({ x: x, y: y });
                });
            },
        };
        _this.mouseStrategy = new MouseStrategy(delegate);
        _this.touchStrategy = new TouchStrategy(delegate);
        _this.mouseDownListener = _this.mouseDownListener.bind(_this);
        _this.touchStartListener = _this.touchStartListener.bind(_this);
        _this.globalListener = _this.globalListener.bind(_this);
        return _this;
    }
    Draggable.prototype.componentDidMount = function () {
        getSharedEventEmitter().subscribe(this.globalListener);
        this.setupNodeSubscription();
    };
    Draggable.prototype.shouldComponentUpdate = function (nextProps) {
        var children = this.props.children;
        return nextProps.children !== children;
    };
    Draggable.prototype.componentDidUpdate = function () {
        this.setupNodeSubscription();
    };
    Draggable.prototype.componentWillUnmount = function () {
        getSharedEventEmitter().unsubscribe(this.globalListener);
    };
    Draggable.prototype.setupNodeSubscription = function () {
        var node = findDOMNode(this);
        if (!node)
            return;
        node.removeEventListener('mousedown', this.mouseDownListener);
        node.removeEventListener('touchstart', this.touchStartListener);
        node.addEventListener('mousedown', this.mouseDownListener, { passive: true });
        node.addEventListener('touchstart', this.touchStartListener, { passive: true });
    };
    Draggable.prototype.mouseDownListener = function (e) {
        if (this.touchStrategy.isWaiting() || e[draggingHandled])
            return;
        this.mouseStrategy.start(e);
        e[draggingHandled] = true;
    };
    Draggable.prototype.touchStartListener = function (e) {
        if (e[draggingHandled])
            return;
        this.touchStrategy.start(e);
        e[draggingHandled] = true;
    };
    Draggable.prototype.globalListener = function (_a) {
        var _b = __read(_a, 2), name = _b[0], e = _b[1];
        switch (name) {
            case 'mousemove':
                this.mouseStrategy.move(e);
                break;
            case 'mouseup':
                this.mouseStrategy.end(e);
                break;
            case 'touchmove': {
                this.touchStrategy.move(e);
                break;
            }
            case 'touchend':
            case 'touchcancel': {
                this.touchStrategy.end(e);
                break;
            }
        }
        if (this.mouseStrategy.isDragging() || this.touchStrategy.isDragging()) {
            clear();
        }
    };
    Draggable.prototype.render = function () {
        var children = this.props.children;
        return children;
    };
    return Draggable;
}(Component));

/** @internal */
var DragDropContext = createContext(null);

/** @internal */
var DragDropProviderCore = /*#__PURE__*/ (function () {
    function DragDropProviderCore() {
        this.payload = null;
        this.dragEmitter = new EventEmitter();
    }
    DragDropProviderCore.prototype.start = function (payload, clientOffset) {
        this.payload = payload;
        this.dragEmitter.emit({ clientOffset: clientOffset, payload: this.payload });
    };
    DragDropProviderCore.prototype.update = function (clientOffset) {
        this.dragEmitter.emit({ clientOffset: clientOffset, payload: this.payload });
    };
    DragDropProviderCore.prototype.end = function (clientOffset) {
        this.dragEmitter.emit({ clientOffset: clientOffset, payload: this.payload, end: true });
        this.payload = null;
    };
    return DragDropProviderCore;
}());
var defaultProps = {
    onChange: function (_a) {
        var payload = _a.payload, clientOffset = _a.clientOffset;
    },
};
/** @internal */
// tslint:disable-next-line: max-classes-per-file
var DragDropProvider = /*#__PURE__*/ (function (_super) {
    __extends(DragDropProvider, _super);
    function DragDropProvider(props) {
        var _this = _super.call(this, props) || this;
        var onChange = _this.props.onChange;
        _this.dragDropProvider = new DragDropProviderCore();
        _this.dragDropProvider.dragEmitter.subscribe(function (_a) {
            var payload = _a.payload, clientOffset = _a.clientOffset, end = _a.end;
            onChange({
                payload: end ? null : payload,
                clientOffset: end ? null : clientOffset,
            });
        });
        return _this;
    }
    DragDropProvider.prototype.shouldComponentUpdate = function (nextProps) {
        var children = this.props.children;
        return nextProps.children !== children;
    };
    DragDropProvider.prototype.render = function () {
        var children = this.props.children;
        return (createElement(DragDropContext.Provider, { value: this.dragDropProvider }, children));
    };
    DragDropProvider.defaultProps = defaultProps;
    return DragDropProvider;
}(Component));

var defaultProps$1 = {
    onStart: function (_a) {
        var clientOffset = _a.clientOffset;
    },
    onUpdate: function (_a) {
        var clientOffset = _a.clientOffset;
    },
    onEnd: function (_a) {
        var clientOffset = _a.clientOffset;
    },
};
/** @internal */
var DragSource = /*#__PURE__*/ (function (_super) {
    __extends(DragSource, _super);
    function DragSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DragSource.prototype.shouldComponentUpdate = function (nextProps) {
        var children = this.props.children;
        return nextProps.children !== children;
    };
    DragSource.prototype.render = function () {
        var dragDropProvider = this.context;
        var _a = this.props, onStart = _a.onStart, onUpdate = _a.onUpdate, onEnd = _a.onEnd, payload = _a.payload, children = _a.children;
        return (createElement(Draggable, { onStart: function (_a) {
                var x = _a.x, y = _a.y;
                dragDropProvider.start(payload, { x: x, y: y });
                onStart({ clientOffset: { x: x, y: y } });
            }, onUpdate: function (_a) {
                var x = _a.x, y = _a.y;
                dragDropProvider.update({ x: x, y: y });
                onUpdate({ clientOffset: { x: x, y: y } });
            }, onEnd: function (_a) {
                var x = _a.x, y = _a.y;
                dragDropProvider.end({ x: x, y: y });
                onEnd({ clientOffset: { x: x, y: y } });
            } }, children));
    };
    DragSource.defaultProps = defaultProps$1;
    return DragSource;
}(Component));
DragSource.contextType = DragDropContext;

var clamp$1 = function (value, min, max) { return Math.max(Math.min(value, max), min); };
var defaultProps$2 = {
    onEnter: function (args) { },
    onOver: function (args) { },
    onLeave: function (args) { },
    onDrop: function (args) { },
};
/** @internal */
var DropTarget = /*#__PURE__*/ (function (_super) {
    __extends(DropTarget, _super);
    function DropTarget(props) {
        var _this = _super.call(this, props) || this;
        _this.isOver = false;
        _this.handleDrag = _this.handleDrag.bind(_this);
        return _this;
    }
    DropTarget.prototype.componentDidMount = function () {
        var dragEmitter = this.context.dragEmitter;
        dragEmitter.subscribe(this.handleDrag);
    };
    DropTarget.prototype.shouldComponentUpdate = function (nextProps) {
        var children = this.props.children;
        return nextProps.children !== children;
    };
    DropTarget.prototype.componentWillUnmount = function () {
        var dragEmitter = this.context.dragEmitter;
        dragEmitter.unsubscribe(this.handleDrag);
    };
    DropTarget.prototype.handleDrag = function (_a) {
        var payload = _a.payload, clientOffset = _a.clientOffset, end = _a.end;
        var _b = findDOMNode(this).getBoundingClientRect(), left = _b.left, top = _b.top, right = _b.right, bottom = _b.bottom;
        var _c = this.props, onDrop = _c.onDrop, onEnter = _c.onEnter, onLeave = _c.onLeave, onOver = _c.onOver;
        var isOver = clientOffset
            && clamp$1(clientOffset.x, left, right) === clientOffset.x
            && clamp$1(clientOffset.y, top, bottom) === clientOffset.y;
        if (!this.isOver && isOver)
            onEnter({ payload: payload, clientOffset: clientOffset });
        if (this.isOver && isOver)
            onOver({ payload: payload, clientOffset: clientOffset });
        if (this.isOver && !isOver)
            onLeave({ payload: payload, clientOffset: clientOffset });
        if (isOver && end)
            onDrop({ payload: payload, clientOffset: clientOffset });
        this.isOver = isOver && !end;
    };
    DropTarget.prototype.render = function () {
        var children = this.props.children;
        return Children.only(children);
    };
    DropTarget.defaultProps = defaultProps$2;
    return DropTarget;
}(Component));
DropTarget.contextType = DragDropContext;

/** @internal */
var RefHolder = /*#__PURE__*/ (function (_super) {
    __extends(RefHolder, _super);
    function RefHolder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RefHolder.prototype.render = function () {
        var children = this.props.children;
        return children;
    };
    return RefHolder;
}(PureComponent));

/* globals document:true */
var styles = {
    root: {
        position: 'relative',
    },
    triggersRoot: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        zIndex: -1,
        visibility: 'hidden',
        opacity: 0,
    },
    expandTrigger: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        overflow: 'auto',
    },
    contractTrigger: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        overflow: 'auto',
        minHeight: '1px',
        minWidth: '1px',
    },
    contractNotifier: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '200%',
        height: '200%',
        minHeight: '2px',
        minWidth: '2px',
    },
};
/** @internal */
var Sizer = /*#__PURE__*/ (function (_super) {
    __extends(Sizer, _super);
    function Sizer(props) {
        var _this = _super.call(this, props) || this;
        _this.setupListeners = _this.setupListeners.bind(_this);
        _this.rootRef = createRef();
        return _this;
    }
    Sizer.prototype.componentDidMount = function () {
        this.createListeners();
        this.setupListeners();
    };
    // There is no need to remove listeners as divs are removed from DOM when component is unmount.
    // But there is a little chance that component unmounting and 'scroll' event happen roughly
    // at the same time so that `setupListeners` is called after component is unmount.
    Sizer.prototype.componentWillUnmount = function () {
        this.expandTrigger.removeEventListener('scroll', this.setupListeners);
        this.contractTrigger.removeEventListener('scroll', this.setupListeners);
    };
    Sizer.prototype.setupListeners = function () {
        var size = { height: this.rootNode.clientHeight, width: this.rootNode.clientWidth };
        this.contractTrigger.scrollTop = size.height;
        this.contractTrigger.scrollLeft = size.width;
        var scrollOffset = 2;
        this.expandNotifier.style.width = size.width + scrollOffset + "px";
        this.expandNotifier.style.height = size.height + scrollOffset + "px";
        this.expandTrigger.scrollTop = scrollOffset;
        this.expandTrigger.scrollLeft = scrollOffset;
        var onSizeChange = this.props.onSizeChange;
        onSizeChange(size);
    };
    Sizer.prototype.createListeners = function () {
        this.rootNode = findDOMNode(this.rootRef.current);
        this.triggersRoot = document.createElement('div');
        Object.assign(this.triggersRoot.style, styles.triggersRoot);
        this.rootNode.appendChild(this.triggersRoot);
        this.expandTrigger = document.createElement('div');
        Object.assign(this.expandTrigger.style, styles.expandTrigger);
        this.expandTrigger.addEventListener('scroll', this.setupListeners);
        this.triggersRoot.appendChild(this.expandTrigger);
        this.expandNotifier = document.createElement('div');
        this.expandTrigger.appendChild(this.expandNotifier);
        this.contractTrigger = document.createElement('div');
        Object.assign(this.contractTrigger.style, styles.contractTrigger);
        this.contractTrigger.addEventListener('scroll', this.setupListeners);
        this.triggersRoot.appendChild(this.contractTrigger);
        this.contractNotifier = document.createElement('div');
        Object.assign(this.contractNotifier.style, styles.contractNotifier);
        this.contractTrigger.appendChild(this.contractNotifier);
    };
    Sizer.prototype.render = function () {
        var _a = this.props, onSizeChange = _a.onSizeChange, Container = _a.containerComponent, style = _a.style, restProps = __rest(_a, ["onSizeChange", "containerComponent", "style"]);
        return (createElement(RefHolder, { ref: this.rootRef },
            createElement(Container // NOTE: should have `position: relative`
            , __assign({ style: style ? __assign(__assign({}, styles.root), style) : styles.root }, restProps))));
    };
    Sizer.defaultProps = {
        containerComponent: 'div',
    };
    return Sizer;
}(PureComponent));

/*** A function that creates a new component that allows you to pass additional properties
 * to the wrapped component.
 */
var connectProps = function (WrappedComponent, getAdditionalProps) {
    var storedAdditionalProps = getAdditionalProps();
    var components = new Set();
    var RenderComponent = /*#__PURE__*/ (function (_super) {
        __extends(RenderComponent, _super);
        function RenderComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RenderComponent.prototype.componentDidMount = function () {
            components.add(this);
        };
        RenderComponent.prototype.componentWillUnmount = function () {
            components.delete(this);
        };
        RenderComponent.prototype.render = function () {
            return createElement(WrappedComponent, __assign({}, this.props, storedAdditionalProps));
        };
        return RenderComponent;
    }(PureComponent));
    RenderComponent.update = function () {
        storedAdditionalProps = getAdditionalProps();
        Array.from(components.values()).forEach(function (component) { return component.forceUpdate(); });
    };
    return RenderComponent;
};

/** @internal */
var createStateHelper = function (component, controlledStateProperties) {
    if (controlledStateProperties === void 0) { controlledStateProperties = {}; }
    var notifyStateChange = function (nextState, state) {
        Object.keys(controlledStateProperties).forEach(function (propertyName) {
            var changeEvent = controlledStateProperties[propertyName]();
            if (changeEvent && nextState[propertyName] !== state[propertyName]) {
                changeEvent(nextState[propertyName]);
            }
        });
    };
    var lastStateUpdater;
    var initialState = null;
    var lastInitialState = null;
    var applyReducer = function (reduce, payload, callback) {
        var stateUpdater = function (prevState) {
            if (initialState === null) {
                initialState = prevState;
            }
            var stateChange = reduce(__assign({}, prevState), payload);
            var state = __assign(__assign({}, prevState), stateChange);
            if (typeof callback === 'function') {
                callback(state, prevState);
            }
            if (stateUpdater === lastStateUpdater) {
                if (lastInitialState !== initialState) {
                    notifyStateChange(state, initialState);
                    lastInitialState = initialState;
                }
                initialState = null;
            }
            return stateChange;
        };
        lastStateUpdater = stateUpdater;
        component.setState(stateUpdater);
    };
    var applyFieldReducer = function (field, reduce, payload) {
        applyReducer(function (state) {
            var _a;
            return (_a = {},
                _a[field] = reduce(state[field], payload),
                _a);
        });
    };
    return {
        applyReducer: applyReducer,
        applyFieldReducer: applyFieldReducer,
    };
};

var makeBoundComponent = function (Target, components, exposed) {
    var Component = /*#__PURE__*/ (function (_super) {
        __extends(Component, _super);
        function Component() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Component.prototype.render = function () {
            return createElement(Target, __assign({}, components, this.props));
        };
        return Component;
    }(PureComponent));
    Component.components = Target.components;
    Object.assign(Component, exposed);
    return Component;
};
// type ITargetComponentStatic = new() => ITargetComponent;
/** @internal */
var withComponents = function (components) { return function (Target) {
    var props = {};
    var exposed = {};
    var targetComponents = Target.components;
    Object.entries(targetComponents).forEach(function (_a) {
        var _b = __read(_a, 2), fieldName = _b[0], componentName = _b[1];
        var component = components[componentName];
        if (component && component !== Target[componentName]) {
            props[fieldName] = component;
        }
        exposed[componentName] = component || Target[componentName];
    });
    return Object.keys(props).length > 0
        ? makeBoundComponent(Target, props, exposed) : Target;
}; };

/* globals Element */
/** @internal */
var RefType = shape({
    current: instanceOf((typeof Element !== 'undefined') ? Element : Object),
});

export { Action, DragDropProvider, DragSource, Draggable, DropTarget, Getter, Plugin, PluginHost, RefHolder, RefType, Sizer, Template, TemplateConnector, TemplatePlaceholder, clear as clearSelection, connectProps, createStateHelper, withComponents };
//# sourceMappingURL=dx-react-core.es.js.map
