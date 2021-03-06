/**
 * Bundle of @devexpress/dx-core
 * Generated: 2019-11-07
 * Version: 2.2.1
 * License: https://js.devexpress.com/Licensing
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory((global.DevExpress = global.DevExpress || {}, global.DevExpress.DXCore = {})));
}(this, (function (exports) { 'use strict';

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

    var DELAY = 200;
    var compare = function (a, b) {
        var aPosition = a.position();
        var bPosition = b.position();
        for (var i = 0; i < Math.min(aPosition.length, bPosition.length); i += 1) {
            if (aPosition[i] < bPosition[i])
                return -1;
            if (aPosition[i] > bPosition[i])
                return 1;
        }
        return aPosition.length - bPosition.length;
    };
    /** @internal */
    var insertPlugin = function (array, newItem) {
        var result = array.slice();
        var nextItemIndex = array.findIndex(function (item) { return compare(newItem, item) <= 0; });
        var targetIndex = nextItemIndex < 0 ? array.length : nextItemIndex;
        var alreadyExists = (targetIndex >= 0 && targetIndex < array.length)
            && compare(newItem, array[targetIndex]) === 0;
        result.splice(targetIndex, alreadyExists ? 1 : 0, newItem);
        return result;
    };
    /** @internal */
    var removePlugin = function (array, item) {
        var itemIndex = array.indexOf(item);
        return itemIndex >= 0 ? __spread(array.slice(0, itemIndex), array.slice(itemIndex + 1)) : array;
    };
    /** @internal */
    var createClickHandlers = function (click, dblClick) {
        var timeoutId;
        var events = {};
        if (click) {
            events.onClick = function (e) {
                if (!timeoutId) {
                    timeoutId = setTimeout(function () {
                        clearTimeout(timeoutId);
                        click(e);
                    }, DELAY);
                }
            };
        }
        if (dblClick) {
            events.onDoubleClick = function (e) {
                clearTimeout(timeoutId);
                dblClick(e);
            };
        }
        return events;
    };
    /** @internal */
    var slice = function (arr) { return Array.prototype.slice.call(arr); }; // slice can be renamed to copy as well

    var getDependencyError = function (pluginName, dependencyName) { return new Error("The '" + pluginName + "' plugin requires '" + dependencyName + "' to be defined before it."); };
    /** @internal */
    var PluginHost = /*#__PURE__*/ (function () {
        function PluginHost() {
            this.gettersCache = {};
            this.knownKeysCache = {};
            this.validationRequired = true;
            this.plugins = [];
            this.subscriptions = new Set();
        }
        PluginHost.prototype.ensureDependencies = function () {
            var defined = new Set();
            var knownOptionals = new Map();
            this.plugins
                .filter(function (plugin) { return plugin.container; })
                .forEach(function (plugin) {
                var pluginName = plugin.name || '';
                if (knownOptionals.has(pluginName)) {
                    throw (getDependencyError(knownOptionals.get(pluginName), pluginName));
                }
                (plugin.dependencies || [])
                    .forEach(function (dependency) {
                    if (defined.has(dependency.name))
                        return;
                    if (dependency.optional) {
                        if (!knownOptionals.has(dependency.name)) {
                            knownOptionals.set(dependency.name, pluginName);
                        }
                        return;
                    }
                    throw (getDependencyError(pluginName, dependency.name));
                });
                defined.add(pluginName);
            });
        };
        PluginHost.prototype.registerPlugin = function (plugin) {
            this.plugins = insertPlugin(this.plugins, plugin);
            this.cleanPluginsCache();
        };
        PluginHost.prototype.unregisterPlugin = function (plugin) {
            this.plugins = removePlugin(this.plugins, plugin);
            this.cleanPluginsCache();
        };
        PluginHost.prototype.knownKeys = function (postfix) {
            if (!this.knownKeysCache[postfix]) {
                this.knownKeysCache[postfix] = Array.from(this.plugins
                    .map(function (plugin) { return Object.keys(plugin); })
                    .map(function (keys) { return keys.filter(function (key) { return key.endsWith(postfix); })[0]; })
                    .filter(function (key) { return !!key; })
                    .reduce(function (acc, key) { return acc.add(key); }, new Set()))
                    .map(function (key) { return key.replace(postfix, ''); });
            }
            return this.knownKeysCache[postfix];
        };
        PluginHost.prototype.collect = function (key, upTo) {
            var _this = this;
            if (this.validationRequired) {
                this.ensureDependencies();
                this.validationRequired = false;
            }
            if (!this.gettersCache[key]) {
                this.gettersCache[key] = this.plugins.map(function (plugin) { return plugin[key]; }).filter(function (plugin) { return !!plugin; });
            }
            if (!upTo)
                return this.gettersCache[key];
            var upToIndex = this.plugins.indexOf(upTo);
            return this.gettersCache[key].filter(function (getter) {
                var pluginIndex = _this.plugins.findIndex(function (plugin) { return plugin[key] === getter; });
                return pluginIndex < upToIndex;
            });
        };
        PluginHost.prototype.get = function (key, upTo) {
            var plugins = this.collect(key, upTo);
            if (!plugins.length)
                return undefined;
            var result = plugins[0]();
            plugins.slice(1).forEach(function (plugin) {
                result = plugin(result);
            });
            return result;
        };
        PluginHost.prototype.registerSubscription = function (subscription) {
            this.subscriptions.add(subscription);
        };
        PluginHost.prototype.unregisterSubscription = function (subscription) {
            this.subscriptions.delete(subscription);
        };
        PluginHost.prototype.broadcast = function (event, message) {
            this.subscriptions.forEach(function (subscription) { return subscription[event] && subscription[event](message); });
        };
        PluginHost.prototype.cleanPluginsCache = function () {
            this.validationRequired = true;
            this.gettersCache = {};
            this.knownKeysCache = {};
        };
        return PluginHost;
    }());

    /** @internal */
    var EventEmitter = /*#__PURE__*/ (function () {
        function EventEmitter() {
            this.handlers = [];
        }
        EventEmitter.prototype.emit = function (e) {
            this.handlers.forEach(function (handler) { return handler(e); });
        };
        EventEmitter.prototype.subscribe = function (handler) {
            this.handlers.push(handler);
        };
        EventEmitter.prototype.unsubscribe = function (handler) {
            this.handlers.splice(this.handlers.indexOf(handler), 1);
        };
        return EventEmitter;
    }());

    /** @internal */
    var shallowEqual = function (objA, objB) {
        if (objA === objB) {
            return true;
        }
        var keysA = Object.keys(objA);
        var keysB = Object.keys(objB);
        if (keysA.length !== keysB.length) {
            return false;
        }
        // Test for A's keys different from B.
        var hasOwn = Object.prototype.hasOwnProperty;
        // tslint:disable-next-line: prefer-for-of
        for (var i = 0; i < keysA.length; i += 1) {
            if (!hasOwn.call(objB, keysA[i])
                || objA[keysA[i]] !== objB[keysA[i]]) {
                return false;
            }
            var valA = objA[keysA[i]];
            var valB = objB[keysA[i]];
            if (valA !== valB) {
                return false;
            }
        }
        return true;
    };
    /** @internal */
    var argumentsShallowEqual = function (prev, next) {
        if (prev === null || next === null || prev.length !== next.length) {
            return false;
        }
        for (var i = 0; i < prev.length; i += 1) {
            if (prev[i] !== next[i]) {
                return false;
            }
        }
        return true;
    };

    /** @internal */
    var memoize = function (func) {
        var lastArgs = null;
        var lastResult = null;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (lastArgs === null || !argumentsShallowEqual(lastArgs, args)) {
                lastResult = func.apply(void 0, __spread(args));
            }
            lastArgs = args;
            return lastResult;
        };
    };

    /** @internal */
    var easeInQuad = function (t) { return t * t; };
    /** @internal */
    var easeOutQuad = function (t) { return t * (2 - t); };
    /** @internal */
    var easeInOutQuad = function (t) { return (t < 0.5
        ? 2 * t * t
        : -1 + ((4 - (2 * t)) * t)); };
    /** @internal */
    var easeInCubic = function (t) { return t * t * t; };
    /** @internal */
    var easeOutCubic = function (t) { return ((t - 1) * (t - 1) * (t - 1)) + 1; };
    /** @internal */
    var easeInOutCubic = function (t) { return (t < 0.5
        ? 4 * t * t * t
        : ((t - 1) * ((2 * t) - 2) * ((2 * t) - 2)) + 1); };
    /** @internal */
    var easeInQuart = function (t) { return t * t * t * t; };
    /** @internal */
    var easeOutQuart = function (t) { return 1 - ((t - 1) * (t - 1) * (t - 1) * (t - 1)); };
    /** @internal */
    var easeInOutQuart = function (t) { return (t < 0.5
        ? 8 * t * t * t * t
        : 1 - (8 * (t - 1) * (t - 1) * (t - 1) * (t - 1))); };
    /** @internal */
    var easeInQuint = function (t) { return t * t * t * t * t; };
    /** @internal */
    var easeOutQuint = function (t) { return 1 + ((t - 1) * (t - 1) * (t - 1) * (t - 1) * (t - 1)); };
    /** @internal */
    var easeInOutQuint = function (t) { return (t < 0.5
        ? 16 * t * t * t * t * t
        : 1 + (16 * (t - 1) * (t - 1) * (t - 1) * (t - 1) * (t - 1))); };

    var processPattern = function (pattern, params) { return Object.keys(params).reduce(function (msg, key) { return msg.replace("{" + key + "}", params[key]); }, pattern); };
    /** @internal */
    var getMessagesFormatter = function (messages) { return function (key, params) {
        var message = messages[key];
        if (typeof message === 'function') {
            return message(params);
        }
        if (params) {
            return processPattern(message, params);
        }
        return message;
    }; };

    exports.EventEmitter = EventEmitter;
    exports.PluginHost = PluginHost;
    exports.argumentsShallowEqual = argumentsShallowEqual;
    exports.createClickHandlers = createClickHandlers;
    exports.easeInCubic = easeInCubic;
    exports.easeInOutCubic = easeInOutCubic;
    exports.easeInOutQuad = easeInOutQuad;
    exports.easeInOutQuart = easeInOutQuart;
    exports.easeInOutQuint = easeInOutQuint;
    exports.easeInQuad = easeInQuad;
    exports.easeInQuart = easeInQuart;
    exports.easeInQuint = easeInQuint;
    exports.easeOutCubic = easeOutCubic;
    exports.easeOutQuad = easeOutQuad;
    exports.easeOutQuart = easeOutQuart;
    exports.easeOutQuint = easeOutQuint;
    exports.getMessagesFormatter = getMessagesFormatter;
    exports.memoize = memoize;
    exports.shallowEqual = shallowEqual;
    exports.slice = slice;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=dx-core.umd.js.map
