import {
  require_jsx_runtime
} from "./chunk-FT54CQ4H.js";
import {
  ACESFilmicToneMapping,
  BasicShadowMap,
  Clock,
  Color,
  ColorManagement,
  Layers,
  LinearSRGBColorSpace,
  NoToneMapping,
  OrthographicCamera,
  PCFShadowMap,
  PCFSoftShadowMap,
  PerspectiveCamera,
  RGBAFormat,
  Raycaster,
  SRGBColorSpace,
  Scene,
  UnsignedByteType,
  VSMShadowMap,
  Vector2,
  Vector3,
  WebGLRenderer,
  three_module_exports
} from "./chunk-JTRL6DIZ.js";
import {
  require_react
} from "./chunk-TVFQMRVC.js";
import {
  __commonJS,
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/react-reconciler/cjs/react-reconciler-constants.development.js
var require_react_reconciler_constants_development = __commonJS({
  "node_modules/react-reconciler/cjs/react-reconciler-constants.development.js"(exports) {
    "use strict";
    exports.ConcurrentRoot = 1, exports.ContinuousEventPriority = 8, exports.DefaultEventPriority = 32, exports.DiscreteEventPriority = 2, exports.IdleEventPriority = 268435456, exports.LegacyRoot = 0, exports.NoEventPriority = 0;
  }
});

// node_modules/react-reconciler/constants.js
var require_constants = __commonJS({
  "node_modules/react-reconciler/constants.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_reconciler_constants_development();
    }
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
    "use strict";
    (function() {
      function is2(x2, y) {
        return x2 === y && (0 !== x2 || 1 / x2 === 1 / y) || x2 !== x2 && y !== y;
      }
      function useSyncExternalStore$2(subscribe, getSnapshot) {
        didWarnOld18Alpha || void 0 === React4.startTransition || (didWarnOld18Alpha = true, console.error(
          "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
        ));
        var value = getSnapshot();
        if (!didWarnUncachedGetSnapshot) {
          var cachedValue = getSnapshot();
          objectIs(value, cachedValue) || (console.error(
            "The result of getSnapshot should be cached to avoid an infinite loop"
          ), didWarnUncachedGetSnapshot = true);
        }
        cachedValue = useState4({
          inst: { value, getSnapshot }
        });
        var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
        useLayoutEffect3(
          function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
          },
          [subscribe, value, getSnapshot]
        );
        useEffect4(
          function() {
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
            return subscribe(function() {
              checkIfSnapshotChanged(inst) && forceUpdate({ inst });
            });
          },
          [subscribe]
        );
        useDebugValue(value);
        return value;
      }
      function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
          var nextValue = latestGetSnapshot();
          return !objectIs(inst, nextValue);
        } catch (error) {
          return true;
        }
      }
      function useSyncExternalStore$1(subscribe, getSnapshot) {
        return getSnapshot();
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React4 = require_react(), objectIs = "function" === typeof Object.is ? Object.is : is2, useState4 = React4.useState, useEffect4 = React4.useEffect, useLayoutEffect3 = React4.useLayoutEffect, useDebugValue = React4.useDebugValue, didWarnOld18Alpha = false, didWarnUncachedGetSnapshot = false, shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
      exports.useSyncExternalStore = void 0 !== React4.useSyncExternalStore ? React4.useSyncExternalStore : shim;
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({
  "node_modules/use-sync-external-store/shim/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_use_sync_external_store_shim_development();
    }
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js
var require_with_selector_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js"(exports) {
    "use strict";
    (function() {
      function is2(x2, y) {
        return x2 === y && (0 !== x2 || 1 / x2 === 1 / y) || x2 !== x2 && y !== y;
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React4 = require_react(), shim = require_shim(), objectIs = "function" === typeof Object.is ? Object.is : is2, useSyncExternalStore = shim.useSyncExternalStore, useRef4 = React4.useRef, useEffect4 = React4.useEffect, useMemo4 = React4.useMemo, useDebugValue = React4.useDebugValue;
      exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
        var instRef = useRef4(null);
        if (null === instRef.current) {
          var inst = { hasValue: false, value: null };
          instRef.current = inst;
        } else inst = instRef.current;
        instRef = useMemo4(
          function() {
            function memoizedSelector(nextSnapshot) {
              if (!hasMemo) {
                hasMemo = true;
                memoizedSnapshot = nextSnapshot;
                nextSnapshot = selector(nextSnapshot);
                if (void 0 !== isEqual && inst.hasValue) {
                  var currentSelection = inst.value;
                  if (isEqual(currentSelection, nextSnapshot))
                    return memoizedSelection = currentSelection;
                }
                return memoizedSelection = nextSnapshot;
              }
              currentSelection = memoizedSelection;
              if (objectIs(memoizedSnapshot, nextSnapshot))
                return currentSelection;
              var nextSelection = selector(nextSnapshot);
              if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
                return memoizedSnapshot = nextSnapshot, currentSelection;
              memoizedSnapshot = nextSnapshot;
              return memoizedSelection = nextSelection;
            }
            var hasMemo = false, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
            return [
              function() {
                return memoizedSelector(getSnapshot());
              },
              null === maybeGetServerSnapshot ? void 0 : function() {
                return memoizedSelector(maybeGetServerSnapshot());
              }
            ];
          },
          [getSnapshot, getServerSnapshot, selector, isEqual]
        );
        var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
        useEffect4(
          function() {
            inst.hasValue = true;
            inst.value = value;
          },
          [value]
        );
        useDebugValue(value);
        return value;
      };
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/use-sync-external-store/shim/with-selector.js
var require_with_selector = __commonJS({
  "node_modules/use-sync-external-store/shim/with-selector.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_with_selector_development();
    }
  }
});

// node_modules/react-reconciler/node_modules/scheduler/cjs/scheduler.development.js
var require_scheduler_development = __commonJS({
  "node_modules/react-reconciler/node_modules/scheduler/cjs/scheduler.development.js"(exports) {
    "use strict";
    (function() {
      function performWorkUntilDeadline() {
        if (isMessageLoopRunning) {
          var currentTime = exports.unstable_now();
          startTime = currentTime;
          var hasMoreWork = true;
          try {
            a: {
              isHostCallbackScheduled = false;
              isHostTimeoutScheduled && (isHostTimeoutScheduled = false, localClearTimeout(taskTimeoutID), taskTimeoutID = -1);
              isPerformingWork = true;
              var previousPriorityLevel = currentPriorityLevel;
              try {
                b: {
                  advanceTimers(currentTime);
                  for (currentTask = peek(taskQueue); null !== currentTask && !(currentTask.expirationTime > currentTime && shouldYieldToHost()); ) {
                    var callback = currentTask.callback;
                    if ("function" === typeof callback) {
                      currentTask.callback = null;
                      currentPriorityLevel = currentTask.priorityLevel;
                      var continuationCallback = callback(
                        currentTask.expirationTime <= currentTime
                      );
                      currentTime = exports.unstable_now();
                      if ("function" === typeof continuationCallback) {
                        currentTask.callback = continuationCallback;
                        advanceTimers(currentTime);
                        hasMoreWork = true;
                        break b;
                      }
                      currentTask === peek(taskQueue) && pop(taskQueue);
                      advanceTimers(currentTime);
                    } else pop(taskQueue);
                    currentTask = peek(taskQueue);
                  }
                  if (null !== currentTask) hasMoreWork = true;
                  else {
                    var firstTimer = peek(timerQueue);
                    null !== firstTimer && requestHostTimeout(
                      handleTimeout,
                      firstTimer.startTime - currentTime
                    );
                    hasMoreWork = false;
                  }
                }
                break a;
              } finally {
                currentTask = null, currentPriorityLevel = previousPriorityLevel, isPerformingWork = false;
              }
              hasMoreWork = void 0;
            }
          } finally {
            hasMoreWork ? schedulePerformWorkUntilDeadline() : isMessageLoopRunning = false;
          }
        }
      }
      function push(heap, node) {
        var index = heap.length;
        heap.push(node);
        a: for (; 0 < index; ) {
          var parentIndex = index - 1 >>> 1, parent = heap[parentIndex];
          if (0 < compare(parent, node))
            heap[parentIndex] = node, heap[index] = parent, index = parentIndex;
          else break a;
        }
      }
      function peek(heap) {
        return 0 === heap.length ? null : heap[0];
      }
      function pop(heap) {
        if (0 === heap.length) return null;
        var first = heap[0], last = heap.pop();
        if (last !== first) {
          heap[0] = last;
          a: for (var index = 0, length = heap.length, halfLength = length >>> 1; index < halfLength; ) {
            var leftIndex = 2 * (index + 1) - 1, left = heap[leftIndex], rightIndex = leftIndex + 1, right = heap[rightIndex];
            if (0 > compare(left, last))
              rightIndex < length && 0 > compare(right, left) ? (heap[index] = right, heap[rightIndex] = last, index = rightIndex) : (heap[index] = left, heap[leftIndex] = last, index = leftIndex);
            else if (rightIndex < length && 0 > compare(right, last))
              heap[index] = right, heap[rightIndex] = last, index = rightIndex;
            else break a;
          }
        }
        return first;
      }
      function compare(a2, b2) {
        var diff = a2.sortIndex - b2.sortIndex;
        return 0 !== diff ? diff : a2.id - b2.id;
      }
      function advanceTimers(currentTime) {
        for (var timer = peek(timerQueue); null !== timer; ) {
          if (null === timer.callback) pop(timerQueue);
          else if (timer.startTime <= currentTime)
            pop(timerQueue), timer.sortIndex = timer.expirationTime, push(taskQueue, timer);
          else break;
          timer = peek(timerQueue);
        }
      }
      function handleTimeout(currentTime) {
        isHostTimeoutScheduled = false;
        advanceTimers(currentTime);
        if (!isHostCallbackScheduled)
          if (null !== peek(taskQueue))
            isHostCallbackScheduled = true, requestHostCallback();
          else {
            var firstTimer = peek(timerQueue);
            null !== firstTimer && requestHostTimeout(
              handleTimeout,
              firstTimer.startTime - currentTime
            );
          }
      }
      function shouldYieldToHost() {
        return exports.unstable_now() - startTime < frameInterval ? false : true;
      }
      function requestHostCallback() {
        isMessageLoopRunning || (isMessageLoopRunning = true, schedulePerformWorkUntilDeadline());
      }
      function requestHostTimeout(callback, ms) {
        taskTimeoutID = localSetTimeout(function() {
          callback(exports.unstable_now());
        }, ms);
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      exports.unstable_now = void 0;
      if ("object" === typeof performance && "function" === typeof performance.now) {
        var localPerformance = performance;
        exports.unstable_now = function() {
          return localPerformance.now();
        };
      } else {
        var localDate = Date, initialTime = localDate.now();
        exports.unstable_now = function() {
          return localDate.now() - initialTime;
        };
      }
      var taskQueue = [], timerQueue = [], taskIdCounter = 1, currentTask = null, currentPriorityLevel = 3, isPerformingWork = false, isHostCallbackScheduled = false, isHostTimeoutScheduled = false, localSetTimeout = "function" === typeof setTimeout ? setTimeout : null, localClearTimeout = "function" === typeof clearTimeout ? clearTimeout : null, localSetImmediate = "undefined" !== typeof setImmediate ? setImmediate : null, isMessageLoopRunning = false, taskTimeoutID = -1, frameInterval = 5, startTime = -1;
      if ("function" === typeof localSetImmediate)
        var schedulePerformWorkUntilDeadline = function() {
          localSetImmediate(performWorkUntilDeadline);
        };
      else if ("undefined" !== typeof MessageChannel) {
        var channel = new MessageChannel(), port = channel.port2;
        channel.port1.onmessage = performWorkUntilDeadline;
        schedulePerformWorkUntilDeadline = function() {
          port.postMessage(null);
        };
      } else
        schedulePerformWorkUntilDeadline = function() {
          localSetTimeout(performWorkUntilDeadline, 0);
        };
      exports.unstable_IdlePriority = 5;
      exports.unstable_ImmediatePriority = 1;
      exports.unstable_LowPriority = 4;
      exports.unstable_NormalPriority = 3;
      exports.unstable_Profiling = null;
      exports.unstable_UserBlockingPriority = 2;
      exports.unstable_cancelCallback = function(task) {
        task.callback = null;
      };
      exports.unstable_continueExecution = function() {
        isHostCallbackScheduled || isPerformingWork || (isHostCallbackScheduled = true, requestHostCallback());
      };
      exports.unstable_forceFrameRate = function(fps) {
        0 > fps || 125 < fps ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : frameInterval = 0 < fps ? Math.floor(1e3 / fps) : 5;
      };
      exports.unstable_getCurrentPriorityLevel = function() {
        return currentPriorityLevel;
      };
      exports.unstable_getFirstCallbackNode = function() {
        return peek(taskQueue);
      };
      exports.unstable_next = function(eventHandler) {
        switch (currentPriorityLevel) {
          case 1:
          case 2:
          case 3:
            var priorityLevel = 3;
            break;
          default:
            priorityLevel = currentPriorityLevel;
        }
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
          return eventHandler();
        } finally {
          currentPriorityLevel = previousPriorityLevel;
        }
      };
      exports.unstable_pauseExecution = function() {
      };
      exports.unstable_requestPaint = function() {
      };
      exports.unstable_runWithPriority = function(priorityLevel, eventHandler) {
        switch (priorityLevel) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            priorityLevel = 3;
        }
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
          return eventHandler();
        } finally {
          currentPriorityLevel = previousPriorityLevel;
        }
      };
      exports.unstable_scheduleCallback = function(priorityLevel, callback, options) {
        var currentTime = exports.unstable_now();
        "object" === typeof options && null !== options ? (options = options.delay, options = "number" === typeof options && 0 < options ? currentTime + options : currentTime) : options = currentTime;
        switch (priorityLevel) {
          case 1:
            var timeout = -1;
            break;
          case 2:
            timeout = 250;
            break;
          case 5:
            timeout = 1073741823;
            break;
          case 4:
            timeout = 1e4;
            break;
          default:
            timeout = 5e3;
        }
        timeout = options + timeout;
        priorityLevel = {
          id: taskIdCounter++,
          callback,
          priorityLevel,
          startTime: options,
          expirationTime: timeout,
          sortIndex: -1
        };
        options > currentTime ? (priorityLevel.sortIndex = options, push(timerQueue, priorityLevel), null === peek(taskQueue) && priorityLevel === peek(timerQueue) && (isHostTimeoutScheduled ? (localClearTimeout(taskTimeoutID), taskTimeoutID = -1) : isHostTimeoutScheduled = true, requestHostTimeout(handleTimeout, options - currentTime))) : (priorityLevel.sortIndex = timeout, push(taskQueue, priorityLevel), isHostCallbackScheduled || isPerformingWork || (isHostCallbackScheduled = true, requestHostCallback()));
        return priorityLevel;
      };
      exports.unstable_shouldYield = shouldYieldToHost;
      exports.unstable_wrapCallback = function(callback) {
        var parentPriorityLevel = currentPriorityLevel;
        return function() {
          var previousPriorityLevel = currentPriorityLevel;
          currentPriorityLevel = parentPriorityLevel;
          try {
            return callback.apply(this, arguments);
          } finally {
            currentPriorityLevel = previousPriorityLevel;
          }
        };
      };
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/react-reconciler/node_modules/scheduler/index.js
var require_scheduler = __commonJS({
  "node_modules/react-reconciler/node_modules/scheduler/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_scheduler_development();
    }
  }
});

// node_modules/react-reconciler/cjs/react-reconciler.development.js
var require_react_reconciler_development = __commonJS({
  "node_modules/react-reconciler/cjs/react-reconciler.development.js"(exports, module) {
    "use strict";
    module.exports = function($$$config) {
      function findHook(fiber, id) {
        for (fiber = fiber.memoizedState; null !== fiber && 0 < id; )
          fiber = fiber.next, id--;
        return fiber;
      }
      function copyWithSetImpl(obj, path, index, value) {
        if (index >= path.length) return value;
        var key = path[index], updated = isArrayImpl(obj) ? obj.slice() : assign({}, obj);
        updated[key] = copyWithSetImpl(obj[key], path, index + 1, value);
        return updated;
      }
      function copyWithRename(obj, oldPath, newPath) {
        if (oldPath.length !== newPath.length)
          console.warn("copyWithRename() expects paths of the same length");
        else {
          for (var i3 = 0; i3 < newPath.length - 1; i3++)
            if (oldPath[i3] !== newPath[i3]) {
              console.warn(
                "copyWithRename() expects paths to be the same except for the deepest key"
              );
              return;
            }
          return copyWithRenameImpl(obj, oldPath, newPath, 0);
        }
      }
      function copyWithRenameImpl(obj, oldPath, newPath, index) {
        var oldKey = oldPath[index], updated = isArrayImpl(obj) ? obj.slice() : assign({}, obj);
        index + 1 === oldPath.length ? (updated[newPath[index]] = updated[oldKey], isArrayImpl(updated) ? updated.splice(oldKey, 1) : delete updated[oldKey]) : updated[oldKey] = copyWithRenameImpl(
          obj[oldKey],
          oldPath,
          newPath,
          index + 1
        );
        return updated;
      }
      function copyWithDeleteImpl(obj, path, index) {
        var key = path[index], updated = isArrayImpl(obj) ? obj.slice() : assign({}, obj);
        if (index + 1 === path.length)
          return isArrayImpl(updated) ? updated.splice(key, 1) : delete updated[key], updated;
        updated[key] = copyWithDeleteImpl(obj[key], path, index + 1);
        return updated;
      }
      function shouldSuspendImpl() {
        return false;
      }
      function shouldErrorImpl() {
        return null;
      }
      function createFiber(tag, pendingProps, key, mode) {
        return new FiberNode(tag, pendingProps, key, mode);
      }
      function scheduleRoot(root, element) {
        root.context === emptyContextObject && (updateContainerSync(element, root, null, null), flushSyncWork());
      }
      function scheduleRefresh(root, update2) {
        if (null !== resolveFamily) {
          var staleFamilies = update2.staleFamilies;
          update2 = update2.updatedFamilies;
          flushPassiveEffects();
          scheduleFibersWithFamiliesRecursively(
            root.current,
            update2,
            staleFamilies
          );
          flushSyncWork();
        }
      }
      function setRefreshHandler(handler) {
        resolveFamily = handler;
      }
      function warnInvalidHookAccess() {
        console.error(
          "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
        );
      }
      function warnInvalidContextAccess() {
        console.error(
          "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
        );
      }
      function noop() {
      }
      function warnForMissingKey() {
      }
      function setToSortedString(set) {
        var array = [];
        set.forEach(function(value) {
          array.push(value);
        });
        return array.sort().join(", ");
      }
      function getIteratorFn(maybeIterable) {
        if (null === maybeIterable || "object" !== typeof maybeIterable)
          return null;
        maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
        return "function" === typeof maybeIterable ? maybeIterable : null;
      }
      function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type)
          return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
        }
        if ("object" === typeof type)
          switch ("number" === typeof type.tag && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
              return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
              var innerType = type.render;
              type = type.displayName;
              type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
              return type;
            case REACT_MEMO_TYPE:
              return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
              innerType = type._payload;
              type = type._init;
              try {
                return getComponentNameFromType(type(innerType));
              } catch (x2) {
              }
          }
        return null;
      }
      function getComponentNameFromFiber(fiber) {
        var type = fiber.type;
        switch (fiber.tag) {
          case 24:
            return "Cache";
          case 9:
            return (type._context.displayName || "Context") + ".Consumer";
          case 10:
            return (type.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return fiber = type.render, fiber = fiber.displayName || fiber.name || "", type.displayName || ("" !== fiber ? "ForwardRef(" + fiber + ")" : "ForwardRef");
          case 7:
            return "Fragment";
          case 26:
          case 27:
          case 5:
            return type;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return getComponentNameFromType(type);
          case 8:
            return type === REACT_STRICT_MODE_TYPE ? "StrictMode" : "Mode";
          case 22:
            return "Offscreen";
          case 12:
            return "Profiler";
          case 21:
            return "Scope";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 25:
            return "TracingMarker";
          case 1:
          case 0:
          case 14:
          case 15:
            if ("function" === typeof type)
              return type.displayName || type.name || null;
            if ("string" === typeof type) return type;
            break;
          case 29:
            type = fiber._debugInfo;
            if (null != type) {
              for (var i3 = type.length - 1; 0 <= i3; i3--)
                if ("string" === typeof type[i3].name) return type[i3].name;
            }
            if (null !== fiber.return)
              return getComponentNameFromFiber(fiber.return);
        }
        return null;
      }
      function disabledLog() {
      }
      function disableLogs() {
        if (0 === disabledDepth) {
          prevLog = console.log;
          prevInfo = console.info;
          prevWarn = console.warn;
          prevError = console.error;
          prevGroup = console.group;
          prevGroupCollapsed = console.groupCollapsed;
          prevGroupEnd = console.groupEnd;
          var props = {
            configurable: true,
            enumerable: true,
            value: disabledLog,
            writable: true
          };
          Object.defineProperties(console, {
            info: props,
            log: props,
            warn: props,
            error: props,
            group: props,
            groupCollapsed: props,
            groupEnd: props
          });
        }
        disabledDepth++;
      }
      function reenableLogs() {
        disabledDepth--;
        if (0 === disabledDepth) {
          var props = { configurable: true, enumerable: true, writable: true };
          Object.defineProperties(console, {
            log: assign({}, props, { value: prevLog }),
            info: assign({}, props, { value: prevInfo }),
            warn: assign({}, props, { value: prevWarn }),
            error: assign({}, props, { value: prevError }),
            group: assign({}, props, { value: prevGroup }),
            groupCollapsed: assign({}, props, { value: prevGroupCollapsed }),
            groupEnd: assign({}, props, { value: prevGroupEnd })
          });
        }
        0 > disabledDepth && console.error(
          "disabledDepth fell below zero. This is a bug in React. Please file an issue."
        );
      }
      function describeBuiltInComponentFrame(name) {
        if (void 0 === prefix)
          try {
            throw Error();
          } catch (x2) {
            var match = x2.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || "";
            suffix = -1 < x2.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x2.stack.indexOf("@") ? "@unknown:0:0" : "";
          }
        return "\n" + prefix + name + suffix;
      }
      function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry) return "";
        var frame2 = componentFrameCache.get(fn);
        if (void 0 !== frame2) return frame2;
        reentry = true;
        frame2 = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher = null;
        previousDispatcher = ReactSharedInternals.H;
        ReactSharedInternals.H = null;
        disableLogs();
        try {
          var RunInRootFrame = {
            DetermineComponentFrameRoot: function() {
              try {
                if (construct) {
                  var Fake = function() {
                    throw Error();
                  };
                  Object.defineProperty(Fake.prototype, "props", {
                    set: function() {
                      throw Error();
                    }
                  });
                  if ("object" === typeof Reflect && Reflect.construct) {
                    try {
                      Reflect.construct(Fake, []);
                    } catch (x2) {
                      var control = x2;
                    }
                    Reflect.construct(fn, [], Fake);
                  } else {
                    try {
                      Fake.call();
                    } catch (x$0) {
                      control = x$0;
                    }
                    fn.call(Fake.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (x$1) {
                    control = x$1;
                  }
                  (Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {
                  });
                }
              } catch (sample) {
                if (sample && control && "string" === typeof sample.stack)
                  return [sample.stack, control.stack];
              }
              return [null, null];
            }
          };
          RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
          var namePropDescriptor = Object.getOwnPropertyDescriptor(
            RunInRootFrame.DetermineComponentFrameRoot,
            "name"
          );
          namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(
            RunInRootFrame.DetermineComponentFrameRoot,
            "name",
            { value: "DetermineComponentFrameRoot" }
          );
          var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
          if (sampleStack && controlStack) {
            var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
            for (_RunInRootFrame$Deter = namePropDescriptor = 0; namePropDescriptor < sampleLines.length && !sampleLines[namePropDescriptor].includes(
              "DetermineComponentFrameRoot"
            ); )
              namePropDescriptor++;
            for (; _RunInRootFrame$Deter < controlLines.length && !controlLines[_RunInRootFrame$Deter].includes(
              "DetermineComponentFrameRoot"
            ); )
              _RunInRootFrame$Deter++;
            if (namePropDescriptor === sampleLines.length || _RunInRootFrame$Deter === controlLines.length)
              for (namePropDescriptor = sampleLines.length - 1, _RunInRootFrame$Deter = controlLines.length - 1; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter && sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]; )
                _RunInRootFrame$Deter--;
            for (; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter; namePropDescriptor--, _RunInRootFrame$Deter--)
              if (sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {
                  do
                    if (namePropDescriptor--, _RunInRootFrame$Deter--, 0 > _RunInRootFrame$Deter || sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                      var _frame = "\n" + sampleLines[namePropDescriptor].replace(
                        " at new ",
                        " at "
                      );
                      fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName));
                      "function" === typeof fn && componentFrameCache.set(fn, _frame);
                      return _frame;
                    }
                  while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);
                }
                break;
              }
          }
        } finally {
          reentry = false, ReactSharedInternals.H = previousDispatcher, reenableLogs(), Error.prepareStackTrace = frame2;
        }
        sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(sampleLines) : "";
        "function" === typeof fn && componentFrameCache.set(fn, sampleLines);
        return sampleLines;
      }
      function describeFiber(fiber) {
        switch (fiber.tag) {
          case 26:
          case 27:
          case 5:
            return describeBuiltInComponentFrame(fiber.type);
          case 16:
            return describeBuiltInComponentFrame("Lazy");
          case 13:
            return describeBuiltInComponentFrame("Suspense");
          case 19:
            return describeBuiltInComponentFrame("SuspenseList");
          case 0:
          case 15:
            return fiber = describeNativeComponentFrame(fiber.type, false), fiber;
          case 11:
            return fiber = describeNativeComponentFrame(fiber.type.render, false), fiber;
          case 1:
            return fiber = describeNativeComponentFrame(fiber.type, true), fiber;
          default:
            return "";
        }
      }
      function getStackByFiberInDevAndProd(workInProgress2) {
        try {
          var info = "";
          do {
            info += describeFiber(workInProgress2);
            var debugInfo = workInProgress2._debugInfo;
            if (debugInfo)
              for (var i3 = debugInfo.length - 1; 0 <= i3; i3--) {
                var entry = debugInfo[i3];
                if ("string" === typeof entry.name) {
                  var JSCompiler_temp_const = info, env = entry.env;
                  var JSCompiler_inline_result = describeBuiltInComponentFrame(
                    entry.name + (env ? " [" + env + "]" : "")
                  );
                  info = JSCompiler_temp_const + JSCompiler_inline_result;
                }
              }
            workInProgress2 = workInProgress2.return;
          } while (workInProgress2);
          return info;
        } catch (x2) {
          return "\nError generating stack: " + x2.message + "\n" + x2.stack;
        }
      }
      function getCurrentFiberStackInDev() {
        return null === current ? "" : getStackByFiberInDevAndProd(current);
      }
      function runWithFiberInDEV(fiber, callback, arg0, arg1, arg2, arg3, arg4) {
        var previousFiber = current;
        ReactSharedInternals.getCurrentStack = null === fiber ? null : getCurrentFiberStackInDev;
        isRendering = false;
        current = fiber;
        try {
          return callback(arg0, arg1, arg2, arg3, arg4);
        } finally {
          current = previousFiber;
        }
        throw Error(
          "runWithFiberInDEV should never be called in production. This is a bug in React."
        );
      }
      function getNearestMountedFiber(fiber) {
        var node = fiber, nearestMounted = fiber;
        if (fiber.alternate) for (; node.return; ) node = node.return;
        else {
          fiber = node;
          do
            node = fiber, 0 !== (node.flags & 4098) && (nearestMounted = node.return), fiber = node.return;
          while (fiber);
        }
        return 3 === node.tag ? nearestMounted : null;
      }
      function assertIsMounted(fiber) {
        if (getNearestMountedFiber(fiber) !== fiber)
          throw Error("Unable to find node on an unmounted component.");
      }
      function findCurrentFiberUsingSlowPath(fiber) {
        var alternate = fiber.alternate;
        if (!alternate) {
          alternate = getNearestMountedFiber(fiber);
          if (null === alternate)
            throw Error("Unable to find node on an unmounted component.");
          return alternate !== fiber ? null : fiber;
        }
        for (var a2 = fiber, b2 = alternate; ; ) {
          var parentA = a2.return;
          if (null === parentA) break;
          var parentB = parentA.alternate;
          if (null === parentB) {
            b2 = parentA.return;
            if (null !== b2) {
              a2 = b2;
              continue;
            }
            break;
          }
          if (parentA.child === parentB.child) {
            for (parentB = parentA.child; parentB; ) {
              if (parentB === a2) return assertIsMounted(parentA), fiber;
              if (parentB === b2) return assertIsMounted(parentA), alternate;
              parentB = parentB.sibling;
            }
            throw Error("Unable to find node on an unmounted component.");
          }
          if (a2.return !== b2.return) a2 = parentA, b2 = parentB;
          else {
            for (var didFindChild = false, _child = parentA.child; _child; ) {
              if (_child === a2) {
                didFindChild = true;
                a2 = parentA;
                b2 = parentB;
                break;
              }
              if (_child === b2) {
                didFindChild = true;
                b2 = parentA;
                a2 = parentB;
                break;
              }
              _child = _child.sibling;
            }
            if (!didFindChild) {
              for (_child = parentB.child; _child; ) {
                if (_child === a2) {
                  didFindChild = true;
                  a2 = parentB;
                  b2 = parentA;
                  break;
                }
                if (_child === b2) {
                  didFindChild = true;
                  b2 = parentB;
                  a2 = parentA;
                  break;
                }
                _child = _child.sibling;
              }
              if (!didFindChild)
                throw Error(
                  "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
                );
            }
          }
          if (a2.alternate !== b2)
            throw Error(
              "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
            );
        }
        if (3 !== a2.tag)
          throw Error("Unable to find node on an unmounted component.");
        return a2.stateNode.current === a2 ? fiber : alternate;
      }
      function findCurrentHostFiber(parent) {
        parent = findCurrentFiberUsingSlowPath(parent);
        return null !== parent ? findCurrentHostFiberImpl(parent) : null;
      }
      function findCurrentHostFiberImpl(node) {
        var tag = node.tag;
        if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return node;
        for (node = node.child; null !== node; ) {
          tag = findCurrentHostFiberImpl(node);
          if (null !== tag) return tag;
          node = node.sibling;
        }
        return null;
      }
      function findCurrentHostFiberWithNoPortalsImpl(node) {
        var tag = node.tag;
        if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return node;
        for (node = node.child; null !== node; ) {
          if (4 !== node.tag && (tag = findCurrentHostFiberWithNoPortalsImpl(node), null !== tag))
            return tag;
          node = node.sibling;
        }
        return null;
      }
      function createCursor(defaultValue) {
        return { current: defaultValue };
      }
      function pop(cursor, fiber) {
        0 > index$jscomp$0 ? console.error("Unexpected pop.") : (fiber !== fiberStack[index$jscomp$0] && console.error("Unexpected Fiber popped."), cursor.current = valueStack[index$jscomp$0], valueStack[index$jscomp$0] = null, fiberStack[index$jscomp$0] = null, index$jscomp$0--);
      }
      function push(cursor, value, fiber) {
        index$jscomp$0++;
        valueStack[index$jscomp$0] = cursor.current;
        fiberStack[index$jscomp$0] = fiber;
        cursor.current = value;
      }
      function clz32Fallback(x2) {
        x2 >>>= 0;
        return 0 === x2 ? 32 : 31 - (log$1(x2) / LN2 | 0) | 0;
      }
      function getLabelForLane(lane) {
        if (lane & 1) return "SyncHydrationLane";
        if (lane & 2) return "Sync";
        if (lane & 4) return "InputContinuousHydration";
        if (lane & 8) return "InputContinuous";
        if (lane & 16) return "DefaultHydration";
        if (lane & 32) return "Default";
        if (lane & 64) return "TransitionHydration";
        if (lane & 4194176) return "Transition";
        if (lane & 62914560) return "Retry";
        if (lane & 67108864) return "SelectiveHydration";
        if (lane & 134217728) return "IdleHydration";
        if (lane & 268435456) return "Idle";
        if (lane & 536870912) return "Offscreen";
        if (lane & 1073741824) return "Deferred";
      }
      function getHighestPriorityLanes(lanes) {
        var pendingSyncLanes = lanes & 42;
        if (0 !== pendingSyncLanes) return pendingSyncLanes;
        switch (lanes & -lanes) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
            return 64;
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return lanes & 4194176;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            return lanes & 62914560;
          case 67108864:
            return 67108864;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 0;
          default:
            return console.error(
              "Should have found matching lanes. This is a bug in React."
            ), lanes;
        }
      }
      function getNextLanes(root, wipLanes) {
        var pendingLanes = root.pendingLanes;
        if (0 === pendingLanes) return 0;
        var nextLanes = 0, suspendedLanes = root.suspendedLanes, pingedLanes = root.pingedLanes, warmLanes = root.warmLanes;
        root = 0 !== root.finishedLanes;
        var nonIdlePendingLanes = pendingLanes & 134217727;
        0 !== nonIdlePendingLanes ? (pendingLanes = nonIdlePendingLanes & ~suspendedLanes, 0 !== pendingLanes ? nextLanes = getHighestPriorityLanes(pendingLanes) : (pingedLanes &= nonIdlePendingLanes, 0 !== pingedLanes ? nextLanes = getHighestPriorityLanes(pingedLanes) : root || (warmLanes = nonIdlePendingLanes & ~warmLanes, 0 !== warmLanes && (nextLanes = getHighestPriorityLanes(warmLanes))))) : (nonIdlePendingLanes = pendingLanes & ~suspendedLanes, 0 !== nonIdlePendingLanes ? nextLanes = getHighestPriorityLanes(nonIdlePendingLanes) : 0 !== pingedLanes ? nextLanes = getHighestPriorityLanes(pingedLanes) : root || (warmLanes = pendingLanes & ~warmLanes, 0 !== warmLanes && (nextLanes = getHighestPriorityLanes(warmLanes))));
        return 0 === nextLanes ? 0 : 0 !== wipLanes && wipLanes !== nextLanes && 0 === (wipLanes & suspendedLanes) && (suspendedLanes = nextLanes & -nextLanes, warmLanes = wipLanes & -wipLanes, suspendedLanes >= warmLanes || 32 === suspendedLanes && 0 !== (warmLanes & 4194176)) ? wipLanes : nextLanes;
      }
      function checkIfRootIsPrerendering(root, renderLanes2) {
        return 0 === (root.pendingLanes & ~(root.suspendedLanes & ~root.pingedLanes) & renderLanes2);
      }
      function computeExpirationTime(lane, currentTime) {
        switch (lane) {
          case 1:
          case 2:
          case 4:
          case 8:
            return currentTime + 250;
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return currentTime + 5e3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            return -1;
          case 67108864:
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return console.error(
              "Should have found matching lanes. This is a bug in React."
            ), -1;
        }
      }
      function claimNextTransitionLane() {
        var lane = nextTransitionLane;
        nextTransitionLane <<= 1;
        0 === (nextTransitionLane & 4194176) && (nextTransitionLane = 128);
        return lane;
      }
      function claimNextRetryLane() {
        var lane = nextRetryLane;
        nextRetryLane <<= 1;
        0 === (nextRetryLane & 62914560) && (nextRetryLane = 4194304);
        return lane;
      }
      function createLaneMap(initial) {
        for (var laneMap = [], i3 = 0; 31 > i3; i3++) laneMap.push(initial);
        return laneMap;
      }
      function markRootUpdated$1(root, updateLane) {
        root.pendingLanes |= updateLane;
        268435456 !== updateLane && (root.suspendedLanes = 0, root.pingedLanes = 0, root.warmLanes = 0);
      }
      function markRootFinished(root, finishedLanes, remainingLanes, spawnedLane, updatedLanes, suspendedRetryLanes) {
        var previouslyPendingLanes = root.pendingLanes;
        root.pendingLanes = remainingLanes;
        root.suspendedLanes = 0;
        root.pingedLanes = 0;
        root.warmLanes = 0;
        root.expiredLanes &= remainingLanes;
        root.entangledLanes &= remainingLanes;
        root.errorRecoveryDisabledLanes &= remainingLanes;
        root.shellSuspendCounter = 0;
        var entanglements = root.entanglements, expirationTimes = root.expirationTimes, hiddenUpdates = root.hiddenUpdates;
        for (remainingLanes = previouslyPendingLanes & ~remainingLanes; 0 < remainingLanes; ) {
          var index = 31 - clz32(remainingLanes), lane = 1 << index;
          entanglements[index] = 0;
          expirationTimes[index] = -1;
          var hiddenUpdatesForLane = hiddenUpdates[index];
          if (null !== hiddenUpdatesForLane)
            for (hiddenUpdates[index] = null, index = 0; index < hiddenUpdatesForLane.length; index++) {
              var update2 = hiddenUpdatesForLane[index];
              null !== update2 && (update2.lane &= -536870913);
            }
          remainingLanes &= ~lane;
        }
        0 !== spawnedLane && markSpawnedDeferredLane(root, spawnedLane, 0);
        0 !== suspendedRetryLanes && 0 === updatedLanes && 0 !== root.tag && (root.suspendedLanes |= suspendedRetryLanes & ~(previouslyPendingLanes & ~finishedLanes));
      }
      function markSpawnedDeferredLane(root, spawnedLane, entangledLanes) {
        root.pendingLanes |= spawnedLane;
        root.suspendedLanes &= ~spawnedLane;
        var spawnedLaneIndex = 31 - clz32(spawnedLane);
        root.entangledLanes |= spawnedLane;
        root.entanglements[spawnedLaneIndex] = root.entanglements[spawnedLaneIndex] | 1073741824 | entangledLanes & 4194218;
      }
      function markRootEntangled(root, entangledLanes) {
        var rootEntangledLanes = root.entangledLanes |= entangledLanes;
        for (root = root.entanglements; rootEntangledLanes; ) {
          var index = 31 - clz32(rootEntangledLanes), lane = 1 << index;
          lane & entangledLanes | root[index] & entangledLanes && (root[index] |= entangledLanes);
          rootEntangledLanes &= ~lane;
        }
      }
      function addFiberToLanesMap(root, fiber, lanes) {
        if (isDevToolsPresent)
          for (root = root.pendingUpdatersLaneMap; 0 < lanes; ) {
            var index = 31 - clz32(lanes), lane = 1 << index;
            root[index].add(fiber);
            lanes &= ~lane;
          }
      }
      function movePendingFibersToMemoized(root, lanes) {
        if (isDevToolsPresent)
          for (var pendingUpdatersLaneMap = root.pendingUpdatersLaneMap, memoizedUpdaters = root.memoizedUpdaters; 0 < lanes; ) {
            var index = 31 - clz32(lanes);
            root = 1 << index;
            index = pendingUpdatersLaneMap[index];
            0 < index.size && (index.forEach(function(fiber) {
              var alternate = fiber.alternate;
              null !== alternate && memoizedUpdaters.has(alternate) || memoizedUpdaters.add(fiber);
            }), index.clear());
            lanes &= ~root;
          }
      }
      function lanesToEventPriority(lanes) {
        lanes &= -lanes;
        return 2 < lanes ? 8 < lanes ? 0 !== (lanes & 134217727) ? 32 : 268435456 : 8 : 2;
      }
      function injectInternals(internals) {
        if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return false;
        var hook = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (hook.isDisabled) return true;
        if (!hook.supportsFiber)
          return console.error(
            "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
          ), true;
        try {
          rendererID = hook.inject(internals), injectedHook = hook;
        } catch (err) {
          console.error("React instrumentation encountered an error: %s.", err);
        }
        return hook.checkDCE ? true : false;
      }
      function onCommitRoot$1(root, eventPriority) {
        if (injectedHook && "function" === typeof injectedHook.onCommitFiberRoot)
          try {
            var didError = 128 === (root.current.flags & 128);
            switch (eventPriority) {
              case 2:
                var schedulerPriority = ImmediatePriority;
                break;
              case 8:
                schedulerPriority = UserBlockingPriority;
                break;
              case 32:
                schedulerPriority = NormalPriority$1;
                break;
              case 268435456:
                schedulerPriority = IdlePriority;
                break;
              default:
                schedulerPriority = NormalPriority$1;
            }
            injectedHook.onCommitFiberRoot(
              rendererID,
              root,
              schedulerPriority,
              didError
            );
          } catch (err) {
            hasLoggedError || (hasLoggedError = true, console.error(
              "React instrumentation encountered an error: %s",
              err
            ));
          }
      }
      function setIsStrictModeForDevtools(newIsStrictMode) {
        "function" === typeof log && unstable_setDisableYieldValue(newIsStrictMode);
        if (injectedHook && "function" === typeof injectedHook.setStrictMode)
          try {
            injectedHook.setStrictMode(rendererID, newIsStrictMode);
          } catch (err) {
            hasLoggedError || (hasLoggedError = true, console.error(
              "React instrumentation encountered an error: %s",
              err
            ));
          }
      }
      function injectProfilingHooks(profilingHooks) {
        injectedProfilingHooks = profilingHooks;
      }
      function markCommitStopped() {
        null !== injectedProfilingHooks && "function" === typeof injectedProfilingHooks.markCommitStopped && injectedProfilingHooks.markCommitStopped();
      }
      function markComponentRenderStarted(fiber) {
        null !== injectedProfilingHooks && "function" === typeof injectedProfilingHooks.markComponentRenderStarted && injectedProfilingHooks.markComponentRenderStarted(fiber);
      }
      function markComponentRenderStopped() {
        null !== injectedProfilingHooks && "function" === typeof injectedProfilingHooks.markComponentRenderStopped && injectedProfilingHooks.markComponentRenderStopped();
      }
      function markRenderStarted(lanes) {
        null !== injectedProfilingHooks && "function" === typeof injectedProfilingHooks.markRenderStarted && injectedProfilingHooks.markRenderStarted(lanes);
      }
      function markRenderStopped() {
        null !== injectedProfilingHooks && "function" === typeof injectedProfilingHooks.markRenderStopped && injectedProfilingHooks.markRenderStopped();
      }
      function markStateUpdateScheduled(fiber, lane) {
        null !== injectedProfilingHooks && "function" === typeof injectedProfilingHooks.markStateUpdateScheduled && injectedProfilingHooks.markStateUpdateScheduled(fiber, lane);
      }
      function is2(x2, y) {
        return x2 === y && (0 !== x2 || 1 / x2 === 1 / y) || x2 !== x2 && y !== y;
      }
      function createCapturedValueAtFiber(value, source) {
        if ("object" === typeof value && null !== value) {
          var existing = CapturedStacks.get(value);
          if (void 0 !== existing) return existing;
          source = {
            value,
            source,
            stack: getStackByFiberInDevAndProd(source)
          };
          CapturedStacks.set(value, source);
          return source;
        }
        return {
          value,
          source,
          stack: getStackByFiberInDevAndProd(source)
        };
      }
      function pushTreeFork(workInProgress2, totalChildren) {
        warnIfNotHydrating();
        forkStack[forkStackIndex++] = treeForkCount;
        forkStack[forkStackIndex++] = treeForkProvider;
        treeForkProvider = workInProgress2;
        treeForkCount = totalChildren;
      }
      function pushTreeId(workInProgress2, totalChildren, index) {
        warnIfNotHydrating();
        idStack[idStackIndex++] = treeContextId;
        idStack[idStackIndex++] = treeContextOverflow;
        idStack[idStackIndex++] = treeContextProvider;
        treeContextProvider = workInProgress2;
        var baseIdWithLeadingBit = treeContextId;
        workInProgress2 = treeContextOverflow;
        var baseLength = 32 - clz32(baseIdWithLeadingBit) - 1;
        baseIdWithLeadingBit &= ~(1 << baseLength);
        index += 1;
        var length = 32 - clz32(totalChildren) + baseLength;
        if (30 < length) {
          var numberOfOverflowBits = baseLength - baseLength % 5;
          length = (baseIdWithLeadingBit & (1 << numberOfOverflowBits) - 1).toString(32);
          baseIdWithLeadingBit >>= numberOfOverflowBits;
          baseLength -= numberOfOverflowBits;
          treeContextId = 1 << 32 - clz32(totalChildren) + baseLength | index << baseLength | baseIdWithLeadingBit;
          treeContextOverflow = length + workInProgress2;
        } else
          treeContextId = 1 << length | index << baseLength | baseIdWithLeadingBit, treeContextOverflow = workInProgress2;
      }
      function pushMaterializedTreeId(workInProgress2) {
        warnIfNotHydrating();
        null !== workInProgress2.return && (pushTreeFork(workInProgress2, 1), pushTreeId(workInProgress2, 1, 0));
      }
      function popTreeContext(workInProgress2) {
        for (; workInProgress2 === treeForkProvider; )
          treeForkProvider = forkStack[--forkStackIndex], forkStack[forkStackIndex] = null, treeForkCount = forkStack[--forkStackIndex], forkStack[forkStackIndex] = null;
        for (; workInProgress2 === treeContextProvider; )
          treeContextProvider = idStack[--idStackIndex], idStack[idStackIndex] = null, treeContextOverflow = idStack[--idStackIndex], idStack[idStackIndex] = null, treeContextId = idStack[--idStackIndex], idStack[idStackIndex] = null;
      }
      function warnIfNotHydrating() {
        isHydrating || console.error(
          "Expected to be hydrating. This is a bug in React. Please file an issue."
        );
      }
      function requiredContext(c2) {
        null === c2 && console.error(
          "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
        );
        return c2;
      }
      function pushHostContainer(fiber, nextRootInstance) {
        push(rootInstanceStackCursor, nextRootInstance, fiber);
        push(contextFiberStackCursor, fiber, fiber);
        push(contextStackCursor, null, fiber);
        nextRootInstance = getRootHostContext(nextRootInstance);
        pop(contextStackCursor, fiber);
        push(contextStackCursor, nextRootInstance, fiber);
      }
      function popHostContainer(fiber) {
        pop(contextStackCursor, fiber);
        pop(contextFiberStackCursor, fiber);
        pop(rootInstanceStackCursor, fiber);
      }
      function getHostContext() {
        return requiredContext(contextStackCursor.current);
      }
      function pushHostContext(fiber) {
        null !== fiber.memoizedState && push(hostTransitionProviderCursor, fiber, fiber);
        var context2 = requiredContext(contextStackCursor.current), nextContext = getChildHostContext(context2, fiber.type);
        context2 !== nextContext && (push(contextFiberStackCursor, fiber, fiber), push(contextStackCursor, nextContext, fiber));
      }
      function popHostContext(fiber) {
        contextFiberStackCursor.current === fiber && (pop(contextStackCursor, fiber), pop(contextFiberStackCursor, fiber));
        hostTransitionProviderCursor.current === fiber && (pop(hostTransitionProviderCursor, fiber), isPrimaryRenderer ? HostTransitionContext._currentValue = NotPendingTransition : HostTransitionContext._currentValue2 = NotPendingTransition);
      }
      function findNotableNode(node, indent) {
        return void 0 === node.serverProps && 0 === node.serverTail.length && 1 === node.children.length && 3 < node.distanceFromLeaf && node.distanceFromLeaf > 15 - indent ? findNotableNode(node.children[0], indent) : node;
      }
      function indentation(indent) {
        return "  " + "  ".repeat(indent);
      }
      function added(indent) {
        return "+ " + "  ".repeat(indent);
      }
      function removed(indent) {
        return "- " + "  ".repeat(indent);
      }
      function describeFiberType(fiber) {
        switch (fiber.tag) {
          case 26:
          case 27:
          case 5:
            return fiber.type;
          case 16:
            return "Lazy";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 0:
          case 15:
            return fiber = fiber.type, fiber.displayName || fiber.name || null;
          case 11:
            return fiber = fiber.type.render, fiber.displayName || fiber.name || null;
          case 1:
            return fiber = fiber.type, fiber.displayName || fiber.name || null;
          default:
            return null;
        }
      }
      function describeTextNode(content, maxLength) {
        return needsEscaping.test(content) ? (content = JSON.stringify(content), content.length > maxLength - 2 ? 8 > maxLength ? '{"..."}' : "{" + content.slice(0, maxLength - 7) + '..."}' : "{" + content + "}") : content.length > maxLength ? 5 > maxLength ? '{"..."}' : content.slice(0, maxLength - 3) + "..." : content;
      }
      function describeTextDiff(clientText, serverProps, indent) {
        var maxLength = 120 - 2 * indent;
        if (null === serverProps)
          return added(indent) + describeTextNode(clientText, maxLength) + "\n";
        if ("string" === typeof serverProps) {
          for (var firstDiff = 0; firstDiff < serverProps.length && firstDiff < clientText.length && serverProps.charCodeAt(firstDiff) === clientText.charCodeAt(firstDiff); firstDiff++) ;
          firstDiff > maxLength - 8 && 10 < firstDiff && (clientText = "..." + clientText.slice(firstDiff - 8), serverProps = "..." + serverProps.slice(firstDiff - 8));
          return added(indent) + describeTextNode(clientText, maxLength) + "\n" + removed(indent) + describeTextNode(serverProps, maxLength) + "\n";
        }
        return indentation(indent) + describeTextNode(clientText, maxLength) + "\n";
      }
      function objectName(object) {
        return Object.prototype.toString.call(object).replace(/^\[object (.*)\]$/, function(m2, p0) {
          return p0;
        });
      }
      function describeValue(value, maxLength) {
        switch (typeof value) {
          case "string":
            return value = JSON.stringify(value), value.length > maxLength ? 5 > maxLength ? '"..."' : value.slice(0, maxLength - 4) + '..."' : value;
          case "object":
            if (null === value) return "null";
            if (isArrayImpl(value)) return "[...]";
            if (value.$$typeof === REACT_ELEMENT_TYPE)
              return (maxLength = getComponentNameFromType(value.type)) ? "<" + maxLength + ">" : "<...>";
            var name = objectName(value);
            if ("Object" === name) {
              name = "";
              maxLength -= 2;
              for (var propName in value)
                if (value.hasOwnProperty(propName)) {
                  var jsonPropName = JSON.stringify(propName);
                  jsonPropName !== '"' + propName + '"' && (propName = jsonPropName);
                  maxLength -= propName.length - 2;
                  jsonPropName = describeValue(
                    value[propName],
                    15 > maxLength ? maxLength : 15
                  );
                  maxLength -= jsonPropName.length;
                  if (0 > maxLength) {
                    name += "" === name ? "..." : ", ...";
                    break;
                  }
                  name += ("" === name ? "" : ",") + propName + ":" + jsonPropName;
                }
              return "{" + name + "}";
            }
            return name;
          case "function":
            return (maxLength = value.displayName || value.name) ? "function " + maxLength : "function";
          default:
            return String(value);
        }
      }
      function describePropValue(value, maxLength) {
        return "string" !== typeof value || needsEscaping.test(value) ? "{" + describeValue(value, maxLength - 2) + "}" : value.length > maxLength - 2 ? 5 > maxLength ? '"..."' : '"' + value.slice(0, maxLength - 5) + '..."' : '"' + value + '"';
      }
      function describeExpandedElement(type, props, rowPrefix) {
        var remainingRowLength = 120 - rowPrefix.length - type.length, properties = [], propName;
        for (propName in props)
          if (props.hasOwnProperty(propName) && "children" !== propName) {
            var propValue = describePropValue(
              props[propName],
              120 - rowPrefix.length - propName.length - 1
            );
            remainingRowLength -= propName.length + propValue.length + 2;
            properties.push(propName + "=" + propValue);
          }
        return 0 === properties.length ? rowPrefix + "<" + type + ">\n" : 0 < remainingRowLength ? rowPrefix + "<" + type + " " + properties.join(" ") + ">\n" : rowPrefix + "<" + type + "\n" + rowPrefix + "  " + properties.join("\n" + rowPrefix + "  ") + "\n" + rowPrefix + ">\n";
      }
      function describePropertiesDiff(clientObject, serverObject, indent) {
        var properties = "", remainingServerProperties = assign({}, serverObject), propName;
        for (propName in clientObject)
          if (clientObject.hasOwnProperty(propName)) {
            delete remainingServerProperties[propName];
            var maxLength = 120 - 2 * indent - propName.length - 2, clientPropValue = describeValue(clientObject[propName], maxLength);
            serverObject.hasOwnProperty(propName) ? (maxLength = describeValue(serverObject[propName], maxLength), properties += added(indent) + propName + ": " + clientPropValue + "\n", properties += removed(indent) + propName + ": " + maxLength + "\n") : properties += added(indent) + propName + ": " + clientPropValue + "\n";
          }
        for (var _propName in remainingServerProperties)
          remainingServerProperties.hasOwnProperty(_propName) && (clientObject = describeValue(
            remainingServerProperties[_propName],
            120 - 2 * indent - _propName.length - 2
          ), properties += removed(indent) + _propName + ": " + clientObject + "\n");
        return properties;
      }
      function describeElementDiff(type, clientProps, serverProps, indent) {
        var content = "", serverPropNames = /* @__PURE__ */ new Map();
        for (propName$jscomp$0 in serverProps)
          serverProps.hasOwnProperty(propName$jscomp$0) && serverPropNames.set(
            propName$jscomp$0.toLowerCase(),
            propName$jscomp$0
          );
        if (1 === serverPropNames.size && serverPropNames.has("children"))
          content += describeExpandedElement(
            type,
            clientProps,
            indentation(indent)
          );
        else {
          for (var _propName2 in clientProps)
            if (clientProps.hasOwnProperty(_propName2) && "children" !== _propName2) {
              var maxLength$jscomp$0 = 120 - 2 * (indent + 1) - _propName2.length - 1, serverPropName = serverPropNames.get(_propName2.toLowerCase());
              if (void 0 !== serverPropName) {
                serverPropNames.delete(_propName2.toLowerCase());
                var propName$jscomp$0 = clientProps[_propName2];
                serverPropName = serverProps[serverPropName];
                var clientPropValue = describePropValue(
                  propName$jscomp$0,
                  maxLength$jscomp$0
                );
                maxLength$jscomp$0 = describePropValue(
                  serverPropName,
                  maxLength$jscomp$0
                );
                "object" === typeof propName$jscomp$0 && null !== propName$jscomp$0 && "object" === typeof serverPropName && null !== serverPropName && "Object" === objectName(propName$jscomp$0) && "Object" === objectName(serverPropName) && (2 < Object.keys(propName$jscomp$0).length || 2 < Object.keys(serverPropName).length || -1 < clientPropValue.indexOf("...") || -1 < maxLength$jscomp$0.indexOf("...")) ? content += indentation(indent + 1) + _propName2 + "={{\n" + describePropertiesDiff(
                  propName$jscomp$0,
                  serverPropName,
                  indent + 2
                ) + indentation(indent + 1) + "}}\n" : (content += added(indent + 1) + _propName2 + "=" + clientPropValue + "\n", content += removed(indent + 1) + _propName2 + "=" + maxLength$jscomp$0 + "\n");
              } else
                content += indentation(indent + 1) + _propName2 + "=" + describePropValue(clientProps[_propName2], maxLength$jscomp$0) + "\n";
            }
          serverPropNames.forEach(function(propName) {
            if ("children" !== propName) {
              var maxLength = 120 - 2 * (indent + 1) - propName.length - 1;
              content += removed(indent + 1) + propName + "=" + describePropValue(serverProps[propName], maxLength) + "\n";
            }
          });
          content = "" === content ? indentation(indent) + "<" + type + ">\n" : indentation(indent) + "<" + type + "\n" + content + indentation(indent) + ">\n";
        }
        type = serverProps.children;
        clientProps = clientProps.children;
        if ("string" === typeof type || "number" === typeof type || "bigint" === typeof type) {
          serverPropNames = "";
          if ("string" === typeof clientProps || "number" === typeof clientProps || "bigint" === typeof clientProps)
            serverPropNames = "" + clientProps;
          content += describeTextDiff(serverPropNames, "" + type, indent + 1);
        } else if ("string" === typeof clientProps || "number" === typeof clientProps || "bigint" === typeof clientProps)
          content = null == type ? content + describeTextDiff("" + clientProps, null, indent + 1) : content + describeTextDiff("" + clientProps, void 0, indent + 1);
        return content;
      }
      function describeSiblingFiber(fiber, indent) {
        var type = describeFiberType(fiber);
        if (null === type) {
          type = "";
          for (fiber = fiber.child; fiber; )
            type += describeSiblingFiber(fiber, indent), fiber = fiber.sibling;
          return type;
        }
        return indentation(indent) + "<" + type + ">\n";
      }
      function describeNode(node, indent) {
        var skipToNode = findNotableNode(node, indent);
        if (skipToNode !== node && (1 !== node.children.length || node.children[0] !== skipToNode))
          return indentation(indent) + "...\n" + describeNode(skipToNode, indent + 1);
        skipToNode = "";
        var debugInfo = node.fiber._debugInfo;
        if (debugInfo)
          for (var i3 = 0; i3 < debugInfo.length; i3++) {
            var serverComponentName = debugInfo[i3].name;
            "string" === typeof serverComponentName && (skipToNode += indentation(indent) + "<" + serverComponentName + ">\n", indent++);
          }
        debugInfo = "";
        i3 = node.fiber.pendingProps;
        if (6 === node.fiber.tag)
          debugInfo = describeTextDiff(i3, node.serverProps, indent), indent++;
        else if (serverComponentName = describeFiberType(node.fiber), null !== serverComponentName)
          if (void 0 === node.serverProps) {
            debugInfo = indent;
            var maxLength = 120 - 2 * debugInfo - serverComponentName.length - 2, content = "";
            for (propName in i3)
              if (i3.hasOwnProperty(propName) && "children" !== propName) {
                var propValue = describePropValue(i3[propName], 15);
                maxLength -= propName.length + propValue.length + 2;
                if (0 > maxLength) {
                  content += " ...";
                  break;
                }
                content += " " + propName + "=" + propValue;
              }
            debugInfo = indentation(debugInfo) + "<" + serverComponentName + content + ">\n";
            indent++;
          } else
            null === node.serverProps ? (debugInfo = describeExpandedElement(
              serverComponentName,
              i3,
              added(indent)
            ), indent++) : "string" === typeof node.serverProps ? console.error(
              "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
            ) : (debugInfo = describeElementDiff(
              serverComponentName,
              i3,
              node.serverProps,
              indent
            ), indent++);
        var propName = "";
        i3 = node.fiber.child;
        for (serverComponentName = 0; i3 && serverComponentName < node.children.length; )
          maxLength = node.children[serverComponentName], maxLength.fiber === i3 ? (propName += describeNode(maxLength, indent), serverComponentName++) : propName += describeSiblingFiber(i3, indent), i3 = i3.sibling;
        i3 && 0 < node.children.length && (propName += indentation(indent) + "...\n");
        i3 = node.serverTail;
        null === node.serverProps && indent--;
        for (node = 0; node < i3.length; node++)
          serverComponentName = i3[node], propName = "string" === typeof serverComponentName ? propName + (removed(indent) + describeTextNode(serverComponentName, 120 - 2 * indent) + "\n") : propName + describeExpandedElement(
            serverComponentName.type,
            serverComponentName.props,
            removed(indent)
          );
        return skipToNode + debugInfo + propName;
      }
      function describeDiff(rootNode) {
        try {
          return "\n\n" + describeNode(rootNode, 0);
        } catch (x2) {
          return "";
        }
      }
      function buildHydrationDiffNode(fiber, distanceFromLeaf) {
        if (null === fiber.return) {
          if (null === hydrationDiffRootDEV)
            hydrationDiffRootDEV = {
              fiber,
              children: [],
              serverProps: void 0,
              serverTail: [],
              distanceFromLeaf
            };
          else {
            if (hydrationDiffRootDEV.fiber !== fiber)
              throw Error(
                "Saw multiple hydration diff roots in a pass. This is a bug in React."
              );
            hydrationDiffRootDEV.distanceFromLeaf > distanceFromLeaf && (hydrationDiffRootDEV.distanceFromLeaf = distanceFromLeaf);
          }
          return hydrationDiffRootDEV;
        }
        var siblings = buildHydrationDiffNode(
          fiber.return,
          distanceFromLeaf + 1
        ).children;
        if (0 < siblings.length && siblings[siblings.length - 1].fiber === fiber)
          return siblings = siblings[siblings.length - 1], siblings.distanceFromLeaf > distanceFromLeaf && (siblings.distanceFromLeaf = distanceFromLeaf), siblings;
        distanceFromLeaf = {
          fiber,
          children: [],
          serverProps: void 0,
          serverTail: [],
          distanceFromLeaf
        };
        siblings.push(distanceFromLeaf);
        return distanceFromLeaf;
      }
      function warnNonHydratedInstance(fiber, rejectedCandidate) {
        didSuspendOrErrorDEV || (fiber = buildHydrationDiffNode(fiber, 0), fiber.serverProps = null, null !== rejectedCandidate && (rejectedCandidate = describeHydratableInstanceForDevWarnings(rejectedCandidate), fiber.serverTail.push(rejectedCandidate)));
      }
      function throwOnHydrationMismatch(fiber) {
        var diff = "", diffRoot = hydrationDiffRootDEV;
        null !== diffRoot && (hydrationDiffRootDEV = null, diff = describeDiff(diffRoot));
        queueHydrationError(
          createCapturedValueAtFiber(
            Error(
              "Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:\n\n- A server/client branch `if (typeof window !== 'undefined')`.\n- Variable input such as `Date.now()` or `Math.random()` which changes each time it's called.\n- Date formatting in a user's locale which doesn't match the server.\n- External changing data without sending a snapshot of it along with the HTML.\n- Invalid HTML tag nesting.\n\nIt can also happen if the client has a browser extension installed which messes with the HTML before React loaded.\n\nhttps://react.dev/link/hydration-mismatch" + diff
            ),
            fiber
          )
        );
        throw HydrationMismatchException;
      }
      function prepareToHydrateHostInstance(fiber, hostContext) {
        if (!supportsHydration)
          throw Error(
            "Expected prepareToHydrateHostInstance() to never be called. This error is likely caused by a bug in React. Please file an issue."
          );
        hydrateInstance(
          fiber.stateNode,
          fiber.type,
          fiber.memoizedProps,
          hostContext,
          fiber
        ) || throwOnHydrationMismatch(fiber);
      }
      function popToNextHostParent(fiber) {
        for (hydrationParentFiber = fiber.return; hydrationParentFiber; )
          switch (hydrationParentFiber.tag) {
            case 3:
            case 27:
              rootOrSingletonContext = true;
              return;
            case 5:
            case 13:
              rootOrSingletonContext = false;
              return;
            default:
              hydrationParentFiber = hydrationParentFiber.return;
          }
      }
      function popHydrationState(fiber) {
        if (!supportsHydration || fiber !== hydrationParentFiber) return false;
        if (!isHydrating)
          return popToNextHostParent(fiber), isHydrating = true, false;
        var shouldClear = false;
        supportsSingletons ? 3 !== fiber.tag && 27 !== fiber.tag && (5 !== fiber.tag || shouldDeleteUnhydratedTailInstances(fiber.type) && !shouldSetTextContent(fiber.type, fiber.memoizedProps)) && (shouldClear = true) : 3 !== fiber.tag && (5 !== fiber.tag || shouldDeleteUnhydratedTailInstances(fiber.type) && !shouldSetTextContent(fiber.type, fiber.memoizedProps)) && (shouldClear = true);
        if (shouldClear && nextHydratableInstance) {
          for (shouldClear = nextHydratableInstance; shouldClear; ) {
            var diffNode = buildHydrationDiffNode(fiber, 0), description = describeHydratableInstanceForDevWarnings(shouldClear);
            diffNode.serverTail.push(description);
            shouldClear = "Suspense" === description.type ? getNextHydratableInstanceAfterSuspenseInstance(shouldClear) : getNextHydratableSibling(shouldClear);
          }
          throwOnHydrationMismatch(fiber);
        }
        popToNextHostParent(fiber);
        if (13 === fiber.tag) {
          if (!supportsHydration)
            throw Error(
              "Expected skipPastDehydratedSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue."
            );
          fiber = fiber.memoizedState;
          fiber = null !== fiber ? fiber.dehydrated : null;
          if (!fiber)
            throw Error(
              "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
            );
          nextHydratableInstance = getNextHydratableInstanceAfterSuspenseInstance(fiber);
        } else
          nextHydratableInstance = hydrationParentFiber ? getNextHydratableSibling(fiber.stateNode) : null;
        return true;
      }
      function resetHydrationState() {
        supportsHydration && (nextHydratableInstance = hydrationParentFiber = null, didSuspendOrErrorDEV = isHydrating = false);
      }
      function queueHydrationError(error) {
        null === hydrationErrors ? hydrationErrors = [error] : hydrationErrors.push(error);
      }
      function emitPendingHydrationWarnings() {
        var diffRoot = hydrationDiffRootDEV;
        null !== diffRoot && (hydrationDiffRootDEV = null, diffRoot = describeDiff(diffRoot), console.error(
          "A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:\n\n- A server/client branch `if (typeof window !== 'undefined')`.\n- Variable input such as `Date.now()` or `Math.random()` which changes each time it's called.\n- Date formatting in a user's locale which doesn't match the server.\n- External changing data without sending a snapshot of it along with the HTML.\n- Invalid HTML tag nesting.\n\nIt can also happen if the client has a browser extension installed which messes with the HTML before React loaded.\n\n%s%s",
          "https://react.dev/link/hydration-mismatch",
          diffRoot
        ));
      }
      function finishQueueingConcurrentUpdates() {
        for (var endIndex = concurrentQueuesIndex, i3 = concurrentlyUpdatedLanes = concurrentQueuesIndex = 0; i3 < endIndex; ) {
          var fiber = concurrentQueues[i3];
          concurrentQueues[i3++] = null;
          var queue = concurrentQueues[i3];
          concurrentQueues[i3++] = null;
          var update2 = concurrentQueues[i3];
          concurrentQueues[i3++] = null;
          var lane = concurrentQueues[i3];
          concurrentQueues[i3++] = null;
          if (null !== queue && null !== update2) {
            var pending = queue.pending;
            null === pending ? update2.next = update2 : (update2.next = pending.next, pending.next = update2);
            queue.pending = update2;
          }
          0 !== lane && markUpdateLaneFromFiberToRoot(fiber, update2, lane);
        }
      }
      function enqueueUpdate$1(fiber, queue, update2, lane) {
        concurrentQueues[concurrentQueuesIndex++] = fiber;
        concurrentQueues[concurrentQueuesIndex++] = queue;
        concurrentQueues[concurrentQueuesIndex++] = update2;
        concurrentQueues[concurrentQueuesIndex++] = lane;
        concurrentlyUpdatedLanes |= lane;
        fiber.lanes |= lane;
        fiber = fiber.alternate;
        null !== fiber && (fiber.lanes |= lane);
      }
      function enqueueConcurrentHookUpdate(fiber, queue, update2, lane) {
        enqueueUpdate$1(fiber, queue, update2, lane);
        return getRootForUpdatedFiber(fiber);
      }
      function enqueueConcurrentRenderForLane(fiber, lane) {
        enqueueUpdate$1(fiber, null, null, lane);
        return getRootForUpdatedFiber(fiber);
      }
      function markUpdateLaneFromFiberToRoot(sourceFiber, update2, lane) {
        sourceFiber.lanes |= lane;
        var alternate = sourceFiber.alternate;
        null !== alternate && (alternate.lanes |= lane);
        for (var isHidden = false, parent = sourceFiber.return; null !== parent; )
          parent.childLanes |= lane, alternate = parent.alternate, null !== alternate && (alternate.childLanes |= lane), 22 === parent.tag && (sourceFiber = parent.stateNode, null === sourceFiber || sourceFiber._visibility & 1 || (isHidden = true)), sourceFiber = parent, parent = parent.return;
        isHidden && null !== update2 && 3 === sourceFiber.tag && (parent = sourceFiber.stateNode, isHidden = 31 - clz32(lane), parent = parent.hiddenUpdates, sourceFiber = parent[isHidden], null === sourceFiber ? parent[isHidden] = [update2] : sourceFiber.push(update2), update2.lane = lane | 536870912);
      }
      function getRootForUpdatedFiber(sourceFiber) {
        if (nestedUpdateCount > NESTED_UPDATE_LIMIT)
          throw nestedPassiveUpdateCount = nestedUpdateCount = 0, rootWithPassiveNestedUpdates = rootWithNestedUpdates = null, Error(
            "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
          );
        nestedPassiveUpdateCount > NESTED_PASSIVE_UPDATE_LIMIT && (nestedPassiveUpdateCount = 0, rootWithPassiveNestedUpdates = null, console.error(
          "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
        ));
        null === sourceFiber.alternate && 0 !== (sourceFiber.flags & 4098) && warnAboutUpdateOnNotYetMountedFiberInDEV(sourceFiber);
        for (var node = sourceFiber, parent = node.return; null !== parent; )
          null === node.alternate && 0 !== (node.flags & 4098) && warnAboutUpdateOnNotYetMountedFiberInDEV(sourceFiber), node = parent, parent = node.return;
        return 3 === node.tag ? node.stateNode : null;
      }
      function pushNestedEffectDurations() {
        var prevEffectDuration = profilerEffectDuration;
        profilerEffectDuration = 0;
        return prevEffectDuration;
      }
      function popNestedEffectDurations(prevEffectDuration) {
        var elapsedTime = profilerEffectDuration;
        profilerEffectDuration = prevEffectDuration;
        return elapsedTime;
      }
      function bubbleNestedEffectDurations(prevEffectDuration) {
        var elapsedTime = profilerEffectDuration;
        profilerEffectDuration += prevEffectDuration;
        return elapsedTime;
      }
      function startProfilerTimer(fiber) {
        profilerStartTime = now();
        0 > fiber.actualStartTime && (fiber.actualStartTime = profilerStartTime);
      }
      function stopProfilerTimerIfRunningAndRecordDuration(fiber) {
        if (0 <= profilerStartTime) {
          var elapsedTime = now() - profilerStartTime;
          fiber.actualDuration += elapsedTime;
          fiber.selfBaseDuration = elapsedTime;
          profilerStartTime = -1;
        }
      }
      function stopProfilerTimerIfRunningAndRecordIncompleteDuration(fiber) {
        if (0 <= profilerStartTime) {
          var elapsedTime = now() - profilerStartTime;
          fiber.actualDuration += elapsedTime;
          profilerStartTime = -1;
        }
      }
      function recordEffectDuration() {
        if (0 <= profilerStartTime) {
          var elapsedTime = now() - profilerStartTime;
          profilerStartTime = -1;
          profilerEffectDuration += elapsedTime;
        }
      }
      function startEffectTimer() {
        profilerStartTime = now();
      }
      function transferActualDuration(fiber) {
        for (var child = fiber.child; child; )
          fiber.actualDuration += child.actualDuration, child = child.sibling;
      }
      function ensureRootIsScheduled(root) {
        root !== lastScheduledRoot && null === root.next && (null === lastScheduledRoot ? firstScheduledRoot = lastScheduledRoot = root : lastScheduledRoot = lastScheduledRoot.next = root);
        mightHavePendingSyncWork = true;
        null !== ReactSharedInternals.actQueue ? didScheduleMicrotask_act || (didScheduleMicrotask_act = true, scheduleImmediateTask(processRootScheduleInMicrotask)) : didScheduleMicrotask || (didScheduleMicrotask = true, scheduleImmediateTask(processRootScheduleInMicrotask));
      }
      function flushSyncWorkAcrossRoots_impl(syncTransitionLanes, onlyLegacy) {
        if (!isFlushingWork && mightHavePendingSyncWork) {
          isFlushingWork = true;
          do {
            var didPerformSomeWork = false;
            for (var root = firstScheduledRoot; null !== root; ) {
              if (!onlyLegacy)
                if (0 !== syncTransitionLanes) {
                  var pendingLanes = root.pendingLanes;
                  if (0 === pendingLanes) var nextLanes = 0;
                  else {
                    var suspendedLanes = root.suspendedLanes, pingedLanes = root.pingedLanes;
                    nextLanes = (1 << 31 - clz32(42 | syncTransitionLanes) + 1) - 1;
                    nextLanes &= pendingLanes & ~(suspendedLanes & ~pingedLanes);
                    nextLanes = nextLanes & 201326677 ? nextLanes & 201326677 | 1 : nextLanes ? nextLanes | 2 : 0;
                  }
                  0 !== nextLanes && (didPerformSomeWork = true, performSyncWorkOnRoot(root, nextLanes));
                } else
                  nextLanes = workInProgressRootRenderLanes, nextLanes = getNextLanes(
                    root,
                    root === workInProgressRoot ? nextLanes : 0
                  ), 0 === (nextLanes & 3) || checkIfRootIsPrerendering(root, nextLanes) || (didPerformSomeWork = true, performSyncWorkOnRoot(root, nextLanes));
              root = root.next;
            }
          } while (didPerformSomeWork);
          isFlushingWork = false;
        }
      }
      function processRootScheduleInMicrotask() {
        mightHavePendingSyncWork = didScheduleMicrotask_act = didScheduleMicrotask = false;
        var syncTransitionLanes = 0;
        0 !== currentEventTransitionLane && (shouldAttemptEagerTransition() && (syncTransitionLanes = currentEventTransitionLane), currentEventTransitionLane = 0);
        for (var currentTime = now$1(), prev = null, root = firstScheduledRoot; null !== root; ) {
          var next = root.next, nextLanes = scheduleTaskForRootDuringMicrotask(root, currentTime);
          if (0 === nextLanes)
            root.next = null, null === prev ? firstScheduledRoot = next : prev.next = next, null === next && (lastScheduledRoot = prev);
          else if (prev = root, 0 !== syncTransitionLanes || 0 !== (nextLanes & 3))
            mightHavePendingSyncWork = true;
          root = next;
        }
        flushSyncWorkAcrossRoots_impl(syncTransitionLanes, false);
      }
      function scheduleTaskForRootDuringMicrotask(root, currentTime) {
        for (var suspendedLanes = root.suspendedLanes, pingedLanes = root.pingedLanes, expirationTimes = root.expirationTimes, lanes = root.pendingLanes & -62914561; 0 < lanes; ) {
          var index = 31 - clz32(lanes), lane = 1 << index, expirationTime = expirationTimes[index];
          if (-1 === expirationTime) {
            if (0 === (lane & suspendedLanes) || 0 !== (lane & pingedLanes))
              expirationTimes[index] = computeExpirationTime(lane, currentTime);
          } else expirationTime <= currentTime && (root.expiredLanes |= lane);
          lanes &= ~lane;
        }
        currentTime = workInProgressRoot;
        suspendedLanes = workInProgressRootRenderLanes;
        suspendedLanes = getNextLanes(
          root,
          root === currentTime ? suspendedLanes : 0
        );
        pingedLanes = root.callbackNode;
        if (0 === suspendedLanes || root === currentTime && workInProgressSuspendedReason === SuspendedOnData || null !== root.cancelPendingCommit)
          return null !== pingedLanes && cancelCallback(pingedLanes), root.callbackNode = null, root.callbackPriority = 0;
        if (0 === (suspendedLanes & 3) || checkIfRootIsPrerendering(root, suspendedLanes)) {
          currentTime = suspendedLanes & -suspendedLanes;
          if (currentTime !== root.callbackPriority || null !== ReactSharedInternals.actQueue && pingedLanes !== fakeActCallbackNode$1)
            cancelCallback(pingedLanes);
          else return currentTime;
          switch (lanesToEventPriority(suspendedLanes)) {
            case 2:
            case 8:
              suspendedLanes = UserBlockingPriority;
              break;
            case 32:
              suspendedLanes = NormalPriority$1;
              break;
            case 268435456:
              suspendedLanes = IdlePriority;
              break;
            default:
              suspendedLanes = NormalPriority$1;
          }
          pingedLanes = performWorkOnRootViaSchedulerTask.bind(null, root);
          null !== ReactSharedInternals.actQueue ? (ReactSharedInternals.actQueue.push(pingedLanes), suspendedLanes = fakeActCallbackNode$1) : suspendedLanes = scheduleCallback$3(suspendedLanes, pingedLanes);
          root.callbackPriority = currentTime;
          root.callbackNode = suspendedLanes;
          return currentTime;
        }
        null !== pingedLanes && cancelCallback(pingedLanes);
        root.callbackPriority = 2;
        root.callbackNode = null;
        return 2;
      }
      function performWorkOnRootViaSchedulerTask(root, didTimeout) {
        nestedUpdateScheduled = currentUpdateIsNested = false;
        var originalCallbackNode = root.callbackNode;
        if (flushPassiveEffects() && root.callbackNode !== originalCallbackNode)
          return null;
        var workInProgressRootRenderLanes$jscomp$0 = workInProgressRootRenderLanes;
        workInProgressRootRenderLanes$jscomp$0 = getNextLanes(
          root,
          root === workInProgressRoot ? workInProgressRootRenderLanes$jscomp$0 : 0
        );
        if (0 === workInProgressRootRenderLanes$jscomp$0) return null;
        performWorkOnRoot(
          root,
          workInProgressRootRenderLanes$jscomp$0,
          didTimeout
        );
        scheduleTaskForRootDuringMicrotask(root, now$1());
        return null != root.callbackNode && root.callbackNode === originalCallbackNode ? performWorkOnRootViaSchedulerTask.bind(null, root) : null;
      }
      function performSyncWorkOnRoot(root, lanes) {
        if (flushPassiveEffects()) return null;
        currentUpdateIsNested = nestedUpdateScheduled;
        nestedUpdateScheduled = false;
        performWorkOnRoot(root, lanes, true);
      }
      function cancelCallback(callbackNode) {
        callbackNode !== fakeActCallbackNode$1 && null !== callbackNode && cancelCallback$1(callbackNode);
      }
      function scheduleImmediateTask(cb) {
        null !== ReactSharedInternals.actQueue && ReactSharedInternals.actQueue.push(function() {
          cb();
          return null;
        });
        supportsMicrotasks ? scheduleMicrotask(function() {
          (executionContext & (RenderContext | CommitContext)) !== NoContext ? scheduleCallback$3(ImmediatePriority, cb) : cb();
        }) : scheduleCallback$3(ImmediatePriority, cb);
      }
      function requestTransitionLane() {
        0 === currentEventTransitionLane && (currentEventTransitionLane = claimNextTransitionLane());
        return currentEventTransitionLane;
      }
      function entangleAsyncAction(transition, thenable) {
        if (null === currentEntangledListeners) {
          var entangledListeners = currentEntangledListeners = [];
          currentEntangledPendingCount = 0;
          currentEntangledLane = requestTransitionLane();
          currentEntangledActionThenable = {
            status: "pending",
            value: void 0,
            then: function(resolve2) {
              entangledListeners.push(resolve2);
            }
          };
        }
        currentEntangledPendingCount++;
        thenable.then(pingEngtangledActionScope, pingEngtangledActionScope);
        return thenable;
      }
      function pingEngtangledActionScope() {
        if (0 === --currentEntangledPendingCount && null !== currentEntangledListeners) {
          null !== currentEntangledActionThenable && (currentEntangledActionThenable.status = "fulfilled");
          var listeners = currentEntangledListeners;
          currentEntangledListeners = null;
          currentEntangledLane = 0;
          currentEntangledActionThenable = null;
          for (var i3 = 0; i3 < listeners.length; i3++) (0, listeners[i3])();
        }
      }
      function chainThenableValue(thenable, result) {
        var listeners = [], thenableWithOverride = {
          status: "pending",
          value: null,
          reason: null,
          then: function(resolve2) {
            listeners.push(resolve2);
          }
        };
        thenable.then(
          function() {
            thenableWithOverride.status = "fulfilled";
            thenableWithOverride.value = result;
            for (var i3 = 0; i3 < listeners.length; i3++) (0, listeners[i3])(result);
          },
          function(error) {
            thenableWithOverride.status = "rejected";
            thenableWithOverride.reason = error;
            for (error = 0; error < listeners.length; error++)
              (0, listeners[error])(void 0);
          }
        );
        return thenableWithOverride;
      }
      function initializeUpdateQueue(fiber) {
        fiber.updateQueue = {
          baseState: fiber.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: { pending: null, lanes: 0, hiddenCallbacks: null },
          callbacks: null
        };
      }
      function cloneUpdateQueue(current2, workInProgress2) {
        current2 = current2.updateQueue;
        workInProgress2.updateQueue === current2 && (workInProgress2.updateQueue = {
          baseState: current2.baseState,
          firstBaseUpdate: current2.firstBaseUpdate,
          lastBaseUpdate: current2.lastBaseUpdate,
          shared: current2.shared,
          callbacks: null
        });
      }
      function createUpdate(lane) {
        return {
          lane,
          tag: UpdateState,
          payload: null,
          callback: null,
          next: null
        };
      }
      function enqueueUpdate(fiber, update2, lane) {
        var updateQueue = fiber.updateQueue;
        if (null === updateQueue) return null;
        updateQueue = updateQueue.shared;
        if (currentlyProcessingQueue === updateQueue && !didWarnUpdateInsideUpdate) {
          var componentName2 = getComponentNameFromFiber(fiber);
          console.error(
            "An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.\n\nPlease update the following component: %s",
            componentName2
          );
          didWarnUpdateInsideUpdate = true;
        }
        if ((executionContext & RenderContext) !== NoContext)
          return componentName2 = updateQueue.pending, null === componentName2 ? update2.next = update2 : (update2.next = componentName2.next, componentName2.next = update2), updateQueue.pending = update2, update2 = getRootForUpdatedFiber(fiber), markUpdateLaneFromFiberToRoot(fiber, null, lane), update2;
        enqueueUpdate$1(fiber, updateQueue, update2, lane);
        return getRootForUpdatedFiber(fiber);
      }
      function entangleTransitions(root, fiber, lane) {
        fiber = fiber.updateQueue;
        if (null !== fiber && (fiber = fiber.shared, 0 !== (lane & 4194176))) {
          var queueLanes = fiber.lanes;
          queueLanes &= root.pendingLanes;
          lane |= queueLanes;
          fiber.lanes = lane;
          markRootEntangled(root, lane);
        }
      }
      function enqueueCapturedUpdate(workInProgress2, capturedUpdate) {
        var queue = workInProgress2.updateQueue, current2 = workInProgress2.alternate;
        if (null !== current2 && (current2 = current2.updateQueue, queue === current2)) {
          var newFirst = null, newLast = null;
          queue = queue.firstBaseUpdate;
          if (null !== queue) {
            do {
              var clone = {
                lane: queue.lane,
                tag: queue.tag,
                payload: queue.payload,
                callback: null,
                next: null
              };
              null === newLast ? newFirst = newLast = clone : newLast = newLast.next = clone;
              queue = queue.next;
            } while (null !== queue);
            null === newLast ? newFirst = newLast = capturedUpdate : newLast = newLast.next = capturedUpdate;
          } else newFirst = newLast = capturedUpdate;
          queue = {
            baseState: current2.baseState,
            firstBaseUpdate: newFirst,
            lastBaseUpdate: newLast,
            shared: current2.shared,
            callbacks: current2.callbacks
          };
          workInProgress2.updateQueue = queue;
          return;
        }
        workInProgress2 = queue.lastBaseUpdate;
        null === workInProgress2 ? queue.firstBaseUpdate = capturedUpdate : workInProgress2.next = capturedUpdate;
        queue.lastBaseUpdate = capturedUpdate;
      }
      function suspendIfUpdateReadFromEntangledAsyncAction() {
        if (didReadFromEntangledAsyncAction) {
          var entangledActionThenable = currentEntangledActionThenable;
          if (null !== entangledActionThenable) throw entangledActionThenable;
        }
      }
      function processUpdateQueue(workInProgress2, props, instance$jscomp$0, renderLanes2) {
        didReadFromEntangledAsyncAction = false;
        var queue = workInProgress2.updateQueue;
        hasForceUpdate = false;
        currentlyProcessingQueue = queue.shared;
        var firstBaseUpdate = queue.firstBaseUpdate, lastBaseUpdate = queue.lastBaseUpdate, pendingQueue = queue.shared.pending;
        if (null !== pendingQueue) {
          queue.shared.pending = null;
          var lastPendingUpdate = pendingQueue, firstPendingUpdate = lastPendingUpdate.next;
          lastPendingUpdate.next = null;
          null === lastBaseUpdate ? firstBaseUpdate = firstPendingUpdate : lastBaseUpdate.next = firstPendingUpdate;
          lastBaseUpdate = lastPendingUpdate;
          var current2 = workInProgress2.alternate;
          null !== current2 && (current2 = current2.updateQueue, pendingQueue = current2.lastBaseUpdate, pendingQueue !== lastBaseUpdate && (null === pendingQueue ? current2.firstBaseUpdate = firstPendingUpdate : pendingQueue.next = firstPendingUpdate, current2.lastBaseUpdate = lastPendingUpdate));
        }
        if (null !== firstBaseUpdate) {
          var newState = queue.baseState;
          lastBaseUpdate = 0;
          current2 = firstPendingUpdate = lastPendingUpdate = null;
          pendingQueue = firstBaseUpdate;
          do {
            var updateLane = pendingQueue.lane & -536870913, isHiddenUpdate = updateLane !== pendingQueue.lane;
            if (isHiddenUpdate ? (workInProgressRootRenderLanes & updateLane) === updateLane : (renderLanes2 & updateLane) === updateLane) {
              0 !== updateLane && updateLane === currentEntangledLane && (didReadFromEntangledAsyncAction = true);
              null !== current2 && (current2 = current2.next = {
                lane: 0,
                tag: pendingQueue.tag,
                payload: pendingQueue.payload,
                callback: null,
                next: null
              });
              a: {
                updateLane = workInProgress2;
                var partialState = pendingQueue;
                var nextProps = props, instance = instance$jscomp$0;
                switch (partialState.tag) {
                  case ReplaceState:
                    partialState = partialState.payload;
                    if ("function" === typeof partialState) {
                      isDisallowedContextReadInDEV = true;
                      var nextState = partialState.call(
                        instance,
                        newState,
                        nextProps
                      );
                      if (updateLane.mode & 8) {
                        setIsStrictModeForDevtools(true);
                        try {
                          partialState.call(instance, newState, nextProps);
                        } finally {
                          setIsStrictModeForDevtools(false);
                        }
                      }
                      isDisallowedContextReadInDEV = false;
                      newState = nextState;
                      break a;
                    }
                    newState = partialState;
                    break a;
                  case CaptureUpdate:
                    updateLane.flags = updateLane.flags & -65537 | 128;
                  case UpdateState:
                    nextState = partialState.payload;
                    if ("function" === typeof nextState) {
                      isDisallowedContextReadInDEV = true;
                      partialState = nextState.call(
                        instance,
                        newState,
                        nextProps
                      );
                      if (updateLane.mode & 8) {
                        setIsStrictModeForDevtools(true);
                        try {
                          nextState.call(instance, newState, nextProps);
                        } finally {
                          setIsStrictModeForDevtools(false);
                        }
                      }
                      isDisallowedContextReadInDEV = false;
                    } else partialState = nextState;
                    if (null === partialState || void 0 === partialState) break a;
                    newState = assign({}, newState, partialState);
                    break a;
                  case ForceUpdate:
                    hasForceUpdate = true;
                }
              }
              updateLane = pendingQueue.callback;
              null !== updateLane && (workInProgress2.flags |= 64, isHiddenUpdate && (workInProgress2.flags |= 8192), isHiddenUpdate = queue.callbacks, null === isHiddenUpdate ? queue.callbacks = [updateLane] : isHiddenUpdate.push(updateLane));
            } else
              isHiddenUpdate = {
                lane: updateLane,
                tag: pendingQueue.tag,
                payload: pendingQueue.payload,
                callback: pendingQueue.callback,
                next: null
              }, null === current2 ? (firstPendingUpdate = current2 = isHiddenUpdate, lastPendingUpdate = newState) : current2 = current2.next = isHiddenUpdate, lastBaseUpdate |= updateLane;
            pendingQueue = pendingQueue.next;
            if (null === pendingQueue)
              if (pendingQueue = queue.shared.pending, null === pendingQueue)
                break;
              else
                isHiddenUpdate = pendingQueue, pendingQueue = isHiddenUpdate.next, isHiddenUpdate.next = null, queue.lastBaseUpdate = isHiddenUpdate, queue.shared.pending = null;
          } while (1);
          null === current2 && (lastPendingUpdate = newState);
          queue.baseState = lastPendingUpdate;
          queue.firstBaseUpdate = firstPendingUpdate;
          queue.lastBaseUpdate = current2;
          null === firstBaseUpdate && (queue.shared.lanes = 0);
          workInProgressRootSkippedLanes |= lastBaseUpdate;
          workInProgress2.lanes = lastBaseUpdate;
          workInProgress2.memoizedState = newState;
        }
        currentlyProcessingQueue = null;
      }
      function callCallback(callback, context2) {
        if ("function" !== typeof callback)
          throw Error(
            "Invalid argument passed as callback. Expected a function. Instead received: " + callback
          );
        callback.call(context2);
      }
      function commitHiddenCallbacks(updateQueue, context2) {
        var hiddenCallbacks = updateQueue.shared.hiddenCallbacks;
        if (null !== hiddenCallbacks)
          for (updateQueue.shared.hiddenCallbacks = null, updateQueue = 0; updateQueue < hiddenCallbacks.length; updateQueue++)
            callCallback(hiddenCallbacks[updateQueue], context2);
      }
      function commitCallbacks(updateQueue, context2) {
        var callbacks = updateQueue.callbacks;
        if (null !== callbacks)
          for (updateQueue.callbacks = null, updateQueue = 0; updateQueue < callbacks.length; updateQueue++)
            callCallback(callbacks[updateQueue], context2);
      }
      function shallowEqual(objA, objB) {
        if (objectIs(objA, objB)) return true;
        if ("object" !== typeof objA || null === objA || "object" !== typeof objB || null === objB)
          return false;
        var keysA = Object.keys(objA), keysB = Object.keys(objB);
        if (keysA.length !== keysB.length) return false;
        for (keysB = 0; keysB < keysA.length; keysB++) {
          var currentKey = keysA[keysB];
          if (!hasOwnProperty.call(objB, currentKey) || !objectIs(objA[currentKey], objB[currentKey]))
            return false;
        }
        return true;
      }
      function createThenableState() {
        return { didWarnAboutUncachedPromise: false, thenables: [] };
      }
      function isThenableResolved(thenable) {
        thenable = thenable.status;
        return "fulfilled" === thenable || "rejected" === thenable;
      }
      function noop$1() {
      }
      function trackUsedThenable(thenableState2, thenable, index) {
        null !== ReactSharedInternals.actQueue && (ReactSharedInternals.didUsePromise = true);
        var trackedThenables = thenableState2.thenables;
        index = trackedThenables[index];
        void 0 === index ? trackedThenables.push(thenable) : index !== thenable && (thenableState2.didWarnAboutUncachedPromise || (thenableState2.didWarnAboutUncachedPromise = true, console.error(
          "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
        )), thenable.then(noop$1, noop$1), thenable = index);
        switch (thenable.status) {
          case "fulfilled":
            return thenable.value;
          case "rejected":
            throw thenableState2 = thenable.reason, checkIfUseWrappedInAsyncCatch(thenableState2), thenableState2;
          default:
            if ("string" === typeof thenable.status)
              thenable.then(noop$1, noop$1);
            else {
              thenableState2 = workInProgressRoot;
              if (null !== thenableState2 && 100 < thenableState2.shellSuspendCounter)
                throw Error(
                  "async/await is not yet supported in Client Components, only Server Components. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
                );
              thenableState2 = thenable;
              thenableState2.status = "pending";
              thenableState2.then(
                function(fulfilledValue) {
                  if ("pending" === thenable.status) {
                    var fulfilledThenable = thenable;
                    fulfilledThenable.status = "fulfilled";
                    fulfilledThenable.value = fulfilledValue;
                  }
                },
                function(error) {
                  if ("pending" === thenable.status) {
                    var rejectedThenable = thenable;
                    rejectedThenable.status = "rejected";
                    rejectedThenable.reason = error;
                  }
                }
              );
            }
            switch (thenable.status) {
              case "fulfilled":
                return thenable.value;
              case "rejected":
                throw thenableState2 = thenable.reason, checkIfUseWrappedInAsyncCatch(thenableState2), thenableState2;
            }
            suspendedThenable = thenable;
            needsToResetSuspendedThenableDEV = true;
            throw SuspenseException;
        }
      }
      function getSuspendedThenable() {
        if (null === suspendedThenable)
          throw Error(
            "Expected a suspended thenable. This is a bug in React. Please file an issue."
          );
        var thenable = suspendedThenable;
        suspendedThenable = null;
        needsToResetSuspendedThenableDEV = false;
        return thenable;
      }
      function checkIfUseWrappedInAsyncCatch(rejectedReason) {
        if (rejectedReason === SuspenseException)
          throw Error(
            "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
          );
      }
      function pushDebugInfo(debugInfo) {
        var previousDebugInfo = currentDebugInfo;
        null != debugInfo && (currentDebugInfo = null === previousDebugInfo ? debugInfo : previousDebugInfo.concat(debugInfo));
        return previousDebugInfo;
      }
      function validateFragmentProps(element, fiber, returnFiber) {
        for (var keys = Object.keys(element.props), i3 = 0; i3 < keys.length; i3++) {
          var key = keys[i3];
          if ("children" !== key && "key" !== key) {
            null === fiber && (fiber = createFiberFromElement(element, returnFiber.mode, 0), fiber._debugInfo = currentDebugInfo, fiber.return = returnFiber);
            runWithFiberInDEV(
              fiber,
              function(erroredKey) {
                console.error(
                  "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                  erroredKey
                );
              },
              key
            );
            break;
          }
        }
      }
      function unwrapThenable(thenable) {
        var index = thenableIndexCounter$1;
        thenableIndexCounter$1 += 1;
        null === thenableState$1 && (thenableState$1 = createThenableState());
        return trackUsedThenable(thenableState$1, thenable, index);
      }
      function coerceRef(workInProgress2, element) {
        element = element.props.ref;
        workInProgress2.ref = void 0 !== element ? element : null;
      }
      function throwOnInvalidObjectType(returnFiber, newChild) {
        if (newChild.$$typeof === REACT_LEGACY_ELEMENT_TYPE)
          throw Error(
            'A React Element from an older version of React was rendered. This is not supported. It can happen if:\n- Multiple copies of the "react" package is used.\n- A library pre-bundled an old copy of "react" or "react/jsx-runtime".\n- A compiler tries to "inline" JSX instead of using the runtime.'
          );
        returnFiber = Object.prototype.toString.call(newChild);
        throw Error(
          "Objects are not valid as a React child (found: " + ("[object Object]" === returnFiber ? "object with keys {" + Object.keys(newChild).join(", ") + "}" : returnFiber) + "). If you meant to render a collection of children, use an array instead."
        );
      }
      function warnOnFunctionType(returnFiber, invalidChild) {
        var parentName = getComponentNameFromFiber(returnFiber) || "Component";
        ownerHasFunctionTypeWarning[parentName] || (ownerHasFunctionTypeWarning[parentName] = true, invalidChild = invalidChild.displayName || invalidChild.name || "Component", 3 === returnFiber.tag ? console.error(
          "Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.\n  root.render(%s)",
          invalidChild,
          invalidChild,
          invalidChild
        ) : console.error(
          "Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.\n  <%s>{%s}</%s>",
          invalidChild,
          invalidChild,
          parentName,
          invalidChild,
          parentName
        ));
      }
      function warnOnSymbolType(returnFiber, invalidChild) {
        var parentName = getComponentNameFromFiber(returnFiber) || "Component";
        ownerHasSymbolTypeWarning[parentName] || (ownerHasSymbolTypeWarning[parentName] = true, invalidChild = String(invalidChild), 3 === returnFiber.tag ? console.error(
          "Symbols are not valid as a React child.\n  root.render(%s)",
          invalidChild
        ) : console.error(
          "Symbols are not valid as a React child.\n  <%s>%s</%s>",
          parentName,
          invalidChild,
          parentName
        ));
      }
      function createChildReconciler(shouldTrackSideEffects) {
        function deleteChild(returnFiber, childToDelete) {
          if (shouldTrackSideEffects) {
            var deletions = returnFiber.deletions;
            null === deletions ? (returnFiber.deletions = [childToDelete], returnFiber.flags |= 16) : deletions.push(childToDelete);
          }
        }
        function deleteRemainingChildren(returnFiber, currentFirstChild) {
          if (!shouldTrackSideEffects) return null;
          for (; null !== currentFirstChild; )
            deleteChild(returnFiber, currentFirstChild), currentFirstChild = currentFirstChild.sibling;
          return null;
        }
        function mapRemainingChildren(currentFirstChild) {
          for (var existingChildren = /* @__PURE__ */ new Map(); null !== currentFirstChild; )
            null !== currentFirstChild.key ? existingChildren.set(currentFirstChild.key, currentFirstChild) : existingChildren.set(currentFirstChild.index, currentFirstChild), currentFirstChild = currentFirstChild.sibling;
          return existingChildren;
        }
        function useFiber(fiber, pendingProps) {
          fiber = createWorkInProgress(fiber, pendingProps);
          fiber.index = 0;
          fiber.sibling = null;
          return fiber;
        }
        function placeChild(newFiber, lastPlacedIndex, newIndex) {
          newFiber.index = newIndex;
          if (!shouldTrackSideEffects)
            return newFiber.flags |= 1048576, lastPlacedIndex;
          newIndex = newFiber.alternate;
          if (null !== newIndex)
            return newIndex = newIndex.index, newIndex < lastPlacedIndex ? (newFiber.flags |= 33554434, lastPlacedIndex) : newIndex;
          newFiber.flags |= 33554434;
          return lastPlacedIndex;
        }
        function placeSingleChild(newFiber) {
          shouldTrackSideEffects && null === newFiber.alternate && (newFiber.flags |= 33554434);
          return newFiber;
        }
        function updateTextNode(returnFiber, current2, textContent, lanes) {
          if (null === current2 || 6 !== current2.tag)
            return current2 = createFiberFromText(
              textContent,
              returnFiber.mode,
              lanes
            ), current2.return = returnFiber, current2._debugOwner = returnFiber, current2._debugInfo = currentDebugInfo, current2;
          current2 = useFiber(current2, textContent);
          current2.return = returnFiber;
          current2._debugInfo = currentDebugInfo;
          return current2;
        }
        function updateElement(returnFiber, current2, element, lanes) {
          var elementType = element.type;
          if (elementType === REACT_FRAGMENT_TYPE)
            return current2 = updateFragment(
              returnFiber,
              current2,
              element.props.children,
              lanes,
              element.key
            ), validateFragmentProps(element, current2, returnFiber), current2;
          if (null !== current2 && (current2.elementType === elementType || isCompatibleFamilyForHotReloading(current2, element) || "object" === typeof elementType && null !== elementType && elementType.$$typeof === REACT_LAZY_TYPE && callLazyInitInDEV(elementType) === current2.type))
            return current2 = useFiber(current2, element.props), coerceRef(current2, element), current2.return = returnFiber, current2._debugOwner = element._owner, current2._debugInfo = currentDebugInfo, current2;
          current2 = createFiberFromElement(element, returnFiber.mode, lanes);
          coerceRef(current2, element);
          current2.return = returnFiber;
          current2._debugInfo = currentDebugInfo;
          return current2;
        }
        function updatePortal(returnFiber, current2, portal, lanes) {
          if (null === current2 || 4 !== current2.tag || current2.stateNode.containerInfo !== portal.containerInfo || current2.stateNode.implementation !== portal.implementation)
            return current2 = createFiberFromPortal(portal, returnFiber.mode, lanes), current2.return = returnFiber, current2._debugInfo = currentDebugInfo, current2;
          current2 = useFiber(current2, portal.children || []);
          current2.return = returnFiber;
          current2._debugInfo = currentDebugInfo;
          return current2;
        }
        function updateFragment(returnFiber, current2, fragment, lanes, key) {
          if (null === current2 || 7 !== current2.tag)
            return current2 = createFiberFromFragment(
              fragment,
              returnFiber.mode,
              lanes,
              key
            ), current2.return = returnFiber, current2._debugOwner = returnFiber, current2._debugInfo = currentDebugInfo, current2;
          current2 = useFiber(current2, fragment);
          current2.return = returnFiber;
          current2._debugInfo = currentDebugInfo;
          return current2;
        }
        function createChild(returnFiber, newChild, lanes) {
          if ("string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild)
            return newChild = createFiberFromText(
              "" + newChild,
              returnFiber.mode,
              lanes
            ), newChild.return = returnFiber, newChild._debugOwner = returnFiber, newChild._debugInfo = currentDebugInfo, newChild;
          if ("object" === typeof newChild && null !== newChild) {
            switch (newChild.$$typeof) {
              case REACT_ELEMENT_TYPE:
                return lanes = createFiberFromElement(
                  newChild,
                  returnFiber.mode,
                  lanes
                ), coerceRef(lanes, newChild), lanes.return = returnFiber, returnFiber = pushDebugInfo(newChild._debugInfo), lanes._debugInfo = currentDebugInfo, currentDebugInfo = returnFiber, lanes;
              case REACT_PORTAL_TYPE:
                return newChild = createFiberFromPortal(
                  newChild,
                  returnFiber.mode,
                  lanes
                ), newChild.return = returnFiber, newChild._debugInfo = currentDebugInfo, newChild;
              case REACT_LAZY_TYPE:
                var _prevDebugInfo = pushDebugInfo(newChild._debugInfo);
                newChild = callLazyInitInDEV(newChild);
                returnFiber = createChild(returnFiber, newChild, lanes);
                currentDebugInfo = _prevDebugInfo;
                return returnFiber;
            }
            if (isArrayImpl(newChild) || getIteratorFn(newChild))
              return lanes = createFiberFromFragment(
                newChild,
                returnFiber.mode,
                lanes,
                null
              ), lanes.return = returnFiber, lanes._debugOwner = returnFiber, returnFiber = pushDebugInfo(newChild._debugInfo), lanes._debugInfo = currentDebugInfo, currentDebugInfo = returnFiber, lanes;
            if ("function" === typeof newChild.then)
              return _prevDebugInfo = pushDebugInfo(newChild._debugInfo), returnFiber = createChild(
                returnFiber,
                unwrapThenable(newChild),
                lanes
              ), currentDebugInfo = _prevDebugInfo, returnFiber;
            if (newChild.$$typeof === REACT_CONTEXT_TYPE)
              return createChild(
                returnFiber,
                readContextDuringReconciliation(returnFiber, newChild),
                lanes
              );
            throwOnInvalidObjectType(returnFiber, newChild);
          }
          "function" === typeof newChild && warnOnFunctionType(returnFiber, newChild);
          "symbol" === typeof newChild && warnOnSymbolType(returnFiber, newChild);
          return null;
        }
        function updateSlot(returnFiber, oldFiber, newChild, lanes) {
          var key = null !== oldFiber ? oldFiber.key : null;
          if ("string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild)
            return null !== key ? null : updateTextNode(returnFiber, oldFiber, "" + newChild, lanes);
          if ("object" === typeof newChild && null !== newChild) {
            switch (newChild.$$typeof) {
              case REACT_ELEMENT_TYPE:
                return newChild.key === key ? (key = pushDebugInfo(newChild._debugInfo), returnFiber = updateElement(
                  returnFiber,
                  oldFiber,
                  newChild,
                  lanes
                ), currentDebugInfo = key, returnFiber) : null;
              case REACT_PORTAL_TYPE:
                return newChild.key === key ? updatePortal(returnFiber, oldFiber, newChild, lanes) : null;
              case REACT_LAZY_TYPE:
                return key = pushDebugInfo(newChild._debugInfo), newChild = callLazyInitInDEV(newChild), returnFiber = updateSlot(
                  returnFiber,
                  oldFiber,
                  newChild,
                  lanes
                ), currentDebugInfo = key, returnFiber;
            }
            if (isArrayImpl(newChild) || getIteratorFn(newChild)) {
              if (null !== key) return null;
              key = pushDebugInfo(newChild._debugInfo);
              returnFiber = updateFragment(
                returnFiber,
                oldFiber,
                newChild,
                lanes,
                null
              );
              currentDebugInfo = key;
              return returnFiber;
            }
            if ("function" === typeof newChild.then)
              return key = pushDebugInfo(newChild._debugInfo), returnFiber = updateSlot(
                returnFiber,
                oldFiber,
                unwrapThenable(newChild),
                lanes
              ), currentDebugInfo = key, returnFiber;
            if (newChild.$$typeof === REACT_CONTEXT_TYPE)
              return updateSlot(
                returnFiber,
                oldFiber,
                readContextDuringReconciliation(returnFiber, newChild),
                lanes
              );
            throwOnInvalidObjectType(returnFiber, newChild);
          }
          "function" === typeof newChild && warnOnFunctionType(returnFiber, newChild);
          "symbol" === typeof newChild && warnOnSymbolType(returnFiber, newChild);
          return null;
        }
        function updateFromMap(existingChildren, returnFiber, newIdx, newChild, lanes) {
          if ("string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild)
            return existingChildren = existingChildren.get(newIdx) || null, updateTextNode(returnFiber, existingChildren, "" + newChild, lanes);
          if ("object" === typeof newChild && null !== newChild) {
            switch (newChild.$$typeof) {
              case REACT_ELEMENT_TYPE:
                return newIdx = existingChildren.get(
                  null === newChild.key ? newIdx : newChild.key
                ) || null, existingChildren = pushDebugInfo(newChild._debugInfo), returnFiber = updateElement(
                  returnFiber,
                  newIdx,
                  newChild,
                  lanes
                ), currentDebugInfo = existingChildren, returnFiber;
              case REACT_PORTAL_TYPE:
                return existingChildren = existingChildren.get(
                  null === newChild.key ? newIdx : newChild.key
                ) || null, updatePortal(returnFiber, existingChildren, newChild, lanes);
              case REACT_LAZY_TYPE:
                var _prevDebugInfo7 = pushDebugInfo(newChild._debugInfo);
                newChild = callLazyInitInDEV(newChild);
                returnFiber = updateFromMap(
                  existingChildren,
                  returnFiber,
                  newIdx,
                  newChild,
                  lanes
                );
                currentDebugInfo = _prevDebugInfo7;
                return returnFiber;
            }
            if (isArrayImpl(newChild) || getIteratorFn(newChild))
              return newIdx = existingChildren.get(newIdx) || null, existingChildren = pushDebugInfo(newChild._debugInfo), returnFiber = updateFragment(
                returnFiber,
                newIdx,
                newChild,
                lanes,
                null
              ), currentDebugInfo = existingChildren, returnFiber;
            if ("function" === typeof newChild.then)
              return _prevDebugInfo7 = pushDebugInfo(newChild._debugInfo), returnFiber = updateFromMap(
                existingChildren,
                returnFiber,
                newIdx,
                unwrapThenable(newChild),
                lanes
              ), currentDebugInfo = _prevDebugInfo7, returnFiber;
            if (newChild.$$typeof === REACT_CONTEXT_TYPE)
              return updateFromMap(
                existingChildren,
                returnFiber,
                newIdx,
                readContextDuringReconciliation(returnFiber, newChild),
                lanes
              );
            throwOnInvalidObjectType(returnFiber, newChild);
          }
          "function" === typeof newChild && warnOnFunctionType(returnFiber, newChild);
          "symbol" === typeof newChild && warnOnSymbolType(returnFiber, newChild);
          return null;
        }
        function warnOnInvalidKey(returnFiber, workInProgress2, child, knownKeys) {
          if ("object" !== typeof child || null === child) return knownKeys;
          switch (child.$$typeof) {
            case REACT_ELEMENT_TYPE:
            case REACT_PORTAL_TYPE:
              warnForMissingKey(returnFiber, workInProgress2, child);
              var key = child.key;
              if ("string" !== typeof key) break;
              if (null === knownKeys) {
                knownKeys = /* @__PURE__ */ new Set();
                knownKeys.add(key);
                break;
              }
              if (!knownKeys.has(key)) {
                knownKeys.add(key);
                break;
              }
              runWithFiberInDEV(workInProgress2, function() {
                console.error(
                  "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                  key
                );
              });
              break;
            case REACT_LAZY_TYPE:
              child = callLazyInitInDEV(child), warnOnInvalidKey(returnFiber, workInProgress2, child, knownKeys);
          }
          return knownKeys;
        }
        function reconcileChildrenArray(returnFiber, currentFirstChild, newChildren, lanes) {
          for (var knownKeys = null, resultingFirstChild = null, previousNewFiber = null, oldFiber = currentFirstChild, newIdx = currentFirstChild = 0, nextOldFiber = null; null !== oldFiber && newIdx < newChildren.length; newIdx++) {
            oldFiber.index > newIdx ? (nextOldFiber = oldFiber, oldFiber = null) : nextOldFiber = oldFiber.sibling;
            var newFiber = updateSlot(
              returnFiber,
              oldFiber,
              newChildren[newIdx],
              lanes
            );
            if (null === newFiber) {
              null === oldFiber && (oldFiber = nextOldFiber);
              break;
            }
            knownKeys = warnOnInvalidKey(
              returnFiber,
              newFiber,
              newChildren[newIdx],
              knownKeys
            );
            shouldTrackSideEffects && oldFiber && null === newFiber.alternate && deleteChild(returnFiber, oldFiber);
            currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
            null === previousNewFiber ? resultingFirstChild = newFiber : previousNewFiber.sibling = newFiber;
            previousNewFiber = newFiber;
            oldFiber = nextOldFiber;
          }
          if (newIdx === newChildren.length)
            return deleteRemainingChildren(returnFiber, oldFiber), isHydrating && pushTreeFork(returnFiber, newIdx), resultingFirstChild;
          if (null === oldFiber) {
            for (; newIdx < newChildren.length; newIdx++)
              oldFiber = createChild(returnFiber, newChildren[newIdx], lanes), null !== oldFiber && (knownKeys = warnOnInvalidKey(
                returnFiber,
                oldFiber,
                newChildren[newIdx],
                knownKeys
              ), currentFirstChild = placeChild(
                oldFiber,
                currentFirstChild,
                newIdx
              ), null === previousNewFiber ? resultingFirstChild = oldFiber : previousNewFiber.sibling = oldFiber, previousNewFiber = oldFiber);
            isHydrating && pushTreeFork(returnFiber, newIdx);
            return resultingFirstChild;
          }
          for (oldFiber = mapRemainingChildren(oldFiber); newIdx < newChildren.length; newIdx++)
            nextOldFiber = updateFromMap(
              oldFiber,
              returnFiber,
              newIdx,
              newChildren[newIdx],
              lanes
            ), null !== nextOldFiber && (knownKeys = warnOnInvalidKey(
              returnFiber,
              nextOldFiber,
              newChildren[newIdx],
              knownKeys
            ), shouldTrackSideEffects && null !== nextOldFiber.alternate && oldFiber.delete(
              null === nextOldFiber.key ? newIdx : nextOldFiber.key
            ), currentFirstChild = placeChild(
              nextOldFiber,
              currentFirstChild,
              newIdx
            ), null === previousNewFiber ? resultingFirstChild = nextOldFiber : previousNewFiber.sibling = nextOldFiber, previousNewFiber = nextOldFiber);
          shouldTrackSideEffects && oldFiber.forEach(function(child) {
            return deleteChild(returnFiber, child);
          });
          isHydrating && pushTreeFork(returnFiber, newIdx);
          return resultingFirstChild;
        }
        function reconcileChildrenIterator(returnFiber, currentFirstChild, newChildren, lanes) {
          if (null == newChildren)
            throw Error("An iterable object provided no iterator.");
          for (var resultingFirstChild = null, previousNewFiber = null, oldFiber = currentFirstChild, newIdx = currentFirstChild = 0, nextOldFiber = null, knownKeys = null, step = newChildren.next(); null !== oldFiber && !step.done; newIdx++, step = newChildren.next()) {
            oldFiber.index > newIdx ? (nextOldFiber = oldFiber, oldFiber = null) : nextOldFiber = oldFiber.sibling;
            var newFiber = updateSlot(returnFiber, oldFiber, step.value, lanes);
            if (null === newFiber) {
              null === oldFiber && (oldFiber = nextOldFiber);
              break;
            }
            knownKeys = warnOnInvalidKey(
              returnFiber,
              newFiber,
              step.value,
              knownKeys
            );
            shouldTrackSideEffects && oldFiber && null === newFiber.alternate && deleteChild(returnFiber, oldFiber);
            currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
            null === previousNewFiber ? resultingFirstChild = newFiber : previousNewFiber.sibling = newFiber;
            previousNewFiber = newFiber;
            oldFiber = nextOldFiber;
          }
          if (step.done)
            return deleteRemainingChildren(returnFiber, oldFiber), isHydrating && pushTreeFork(returnFiber, newIdx), resultingFirstChild;
          if (null === oldFiber) {
            for (; !step.done; newIdx++, step = newChildren.next())
              oldFiber = createChild(returnFiber, step.value, lanes), null !== oldFiber && (knownKeys = warnOnInvalidKey(
                returnFiber,
                oldFiber,
                step.value,
                knownKeys
              ), currentFirstChild = placeChild(
                oldFiber,
                currentFirstChild,
                newIdx
              ), null === previousNewFiber ? resultingFirstChild = oldFiber : previousNewFiber.sibling = oldFiber, previousNewFiber = oldFiber);
            isHydrating && pushTreeFork(returnFiber, newIdx);
            return resultingFirstChild;
          }
          for (oldFiber = mapRemainingChildren(oldFiber); !step.done; newIdx++, step = newChildren.next())
            nextOldFiber = updateFromMap(
              oldFiber,
              returnFiber,
              newIdx,
              step.value,
              lanes
            ), null !== nextOldFiber && (knownKeys = warnOnInvalidKey(
              returnFiber,
              nextOldFiber,
              step.value,
              knownKeys
            ), shouldTrackSideEffects && null !== nextOldFiber.alternate && oldFiber.delete(
              null === nextOldFiber.key ? newIdx : nextOldFiber.key
            ), currentFirstChild = placeChild(
              nextOldFiber,
              currentFirstChild,
              newIdx
            ), null === previousNewFiber ? resultingFirstChild = nextOldFiber : previousNewFiber.sibling = nextOldFiber, previousNewFiber = nextOldFiber);
          shouldTrackSideEffects && oldFiber.forEach(function(child) {
            return deleteChild(returnFiber, child);
          });
          isHydrating && pushTreeFork(returnFiber, newIdx);
          return resultingFirstChild;
        }
        function reconcileChildFibersImpl(returnFiber, currentFirstChild, newChild, lanes) {
          "object" === typeof newChild && null !== newChild && newChild.type === REACT_FRAGMENT_TYPE && null === newChild.key && (validateFragmentProps(newChild, null, returnFiber), newChild = newChild.props.children);
          if ("object" === typeof newChild && null !== newChild) {
            switch (newChild.$$typeof) {
              case REACT_ELEMENT_TYPE:
                var prevDebugInfo = pushDebugInfo(newChild._debugInfo);
                a: {
                  for (var key = newChild.key; null !== currentFirstChild; ) {
                    if (currentFirstChild.key === key) {
                      key = newChild.type;
                      if (key === REACT_FRAGMENT_TYPE) {
                        if (7 === currentFirstChild.tag) {
                          deleteRemainingChildren(
                            returnFiber,
                            currentFirstChild.sibling
                          );
                          lanes = useFiber(
                            currentFirstChild,
                            newChild.props.children
                          );
                          lanes.return = returnFiber;
                          lanes._debugOwner = newChild._owner;
                          lanes._debugInfo = currentDebugInfo;
                          validateFragmentProps(newChild, lanes, returnFiber);
                          returnFiber = lanes;
                          break a;
                        }
                      } else if (currentFirstChild.elementType === key || isCompatibleFamilyForHotReloading(
                        currentFirstChild,
                        newChild
                      ) || "object" === typeof key && null !== key && key.$$typeof === REACT_LAZY_TYPE && callLazyInitInDEV(key) === currentFirstChild.type) {
                        deleteRemainingChildren(
                          returnFiber,
                          currentFirstChild.sibling
                        );
                        lanes = useFiber(currentFirstChild, newChild.props);
                        coerceRef(lanes, newChild);
                        lanes.return = returnFiber;
                        lanes._debugOwner = newChild._owner;
                        lanes._debugInfo = currentDebugInfo;
                        returnFiber = lanes;
                        break a;
                      }
                      deleteRemainingChildren(returnFiber, currentFirstChild);
                      break;
                    } else deleteChild(returnFiber, currentFirstChild);
                    currentFirstChild = currentFirstChild.sibling;
                  }
                  newChild.type === REACT_FRAGMENT_TYPE ? (lanes = createFiberFromFragment(
                    newChild.props.children,
                    returnFiber.mode,
                    lanes,
                    newChild.key
                  ), lanes.return = returnFiber, lanes._debugOwner = returnFiber, lanes._debugInfo = currentDebugInfo, validateFragmentProps(newChild, lanes, returnFiber), returnFiber = lanes) : (lanes = createFiberFromElement(
                    newChild,
                    returnFiber.mode,
                    lanes
                  ), coerceRef(lanes, newChild), lanes.return = returnFiber, lanes._debugInfo = currentDebugInfo, returnFiber = lanes);
                }
                returnFiber = placeSingleChild(returnFiber);
                currentDebugInfo = prevDebugInfo;
                return returnFiber;
              case REACT_PORTAL_TYPE:
                a: {
                  prevDebugInfo = newChild;
                  for (newChild = prevDebugInfo.key; null !== currentFirstChild; ) {
                    if (currentFirstChild.key === newChild)
                      if (4 === currentFirstChild.tag && currentFirstChild.stateNode.containerInfo === prevDebugInfo.containerInfo && currentFirstChild.stateNode.implementation === prevDebugInfo.implementation) {
                        deleteRemainingChildren(
                          returnFiber,
                          currentFirstChild.sibling
                        );
                        lanes = useFiber(
                          currentFirstChild,
                          prevDebugInfo.children || []
                        );
                        lanes.return = returnFiber;
                        returnFiber = lanes;
                        break a;
                      } else {
                        deleteRemainingChildren(returnFiber, currentFirstChild);
                        break;
                      }
                    else deleteChild(returnFiber, currentFirstChild);
                    currentFirstChild = currentFirstChild.sibling;
                  }
                  lanes = createFiberFromPortal(
                    prevDebugInfo,
                    returnFiber.mode,
                    lanes
                  );
                  lanes.return = returnFiber;
                  returnFiber = lanes;
                }
                return placeSingleChild(returnFiber);
              case REACT_LAZY_TYPE:
                return prevDebugInfo = pushDebugInfo(newChild._debugInfo), newChild = callLazyInitInDEV(newChild), returnFiber = reconcileChildFibersImpl(
                  returnFiber,
                  currentFirstChild,
                  newChild,
                  lanes
                ), currentDebugInfo = prevDebugInfo, returnFiber;
            }
            if (isArrayImpl(newChild))
              return prevDebugInfo = pushDebugInfo(newChild._debugInfo), returnFiber = reconcileChildrenArray(
                returnFiber,
                currentFirstChild,
                newChild,
                lanes
              ), currentDebugInfo = prevDebugInfo, returnFiber;
            if (getIteratorFn(newChild)) {
              prevDebugInfo = pushDebugInfo(newChild._debugInfo);
              key = getIteratorFn(newChild);
              if ("function" !== typeof key)
                throw Error(
                  "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
                );
              var newChildren = key.call(newChild);
              if (newChildren === newChild) {
                if (0 !== returnFiber.tag || "[object GeneratorFunction]" !== Object.prototype.toString.call(returnFiber.type) || "[object Generator]" !== Object.prototype.toString.call(newChildren))
                  didWarnAboutGenerators || console.error(
                    "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
                  ), didWarnAboutGenerators = true;
              } else
                newChild.entries !== key || didWarnAboutMaps || (console.error(
                  "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
                ), didWarnAboutMaps = true);
              returnFiber = reconcileChildrenIterator(
                returnFiber,
                currentFirstChild,
                newChildren,
                lanes
              );
              currentDebugInfo = prevDebugInfo;
              return returnFiber;
            }
            if ("function" === typeof newChild.then)
              return prevDebugInfo = pushDebugInfo(newChild._debugInfo), returnFiber = reconcileChildFibersImpl(
                returnFiber,
                currentFirstChild,
                unwrapThenable(newChild),
                lanes
              ), currentDebugInfo = prevDebugInfo, returnFiber;
            if (newChild.$$typeof === REACT_CONTEXT_TYPE)
              return reconcileChildFibersImpl(
                returnFiber,
                currentFirstChild,
                readContextDuringReconciliation(returnFiber, newChild),
                lanes
              );
            throwOnInvalidObjectType(returnFiber, newChild);
          }
          if ("string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild)
            return prevDebugInfo = "" + newChild, null !== currentFirstChild && 6 === currentFirstChild.tag ? (deleteRemainingChildren(
              returnFiber,
              currentFirstChild.sibling
            ), lanes = useFiber(currentFirstChild, prevDebugInfo), lanes.return = returnFiber, returnFiber = lanes) : (deleteRemainingChildren(returnFiber, currentFirstChild), lanes = createFiberFromText(
              prevDebugInfo,
              returnFiber.mode,
              lanes
            ), lanes.return = returnFiber, lanes._debugOwner = returnFiber, lanes._debugInfo = currentDebugInfo, returnFiber = lanes), placeSingleChild(returnFiber);
          "function" === typeof newChild && warnOnFunctionType(returnFiber, newChild);
          "symbol" === typeof newChild && warnOnSymbolType(returnFiber, newChild);
          return deleteRemainingChildren(returnFiber, currentFirstChild);
        }
        return function(returnFiber, currentFirstChild, newChild, lanes) {
          var prevDebugInfo = currentDebugInfo;
          currentDebugInfo = null;
          try {
            thenableIndexCounter$1 = 0;
            var firstChildFiber = reconcileChildFibersImpl(
              returnFiber,
              currentFirstChild,
              newChild,
              lanes
            );
            thenableState$1 = null;
            return firstChildFiber;
          } catch (x2) {
            if (x2 === SuspenseException) throw x2;
            var fiber = createFiber(29, x2, null, returnFiber.mode);
            fiber.lanes = lanes;
            fiber.return = returnFiber;
            var debugInfo = fiber._debugInfo = currentDebugInfo;
            fiber._debugOwner = returnFiber._debugOwner;
            if (null != debugInfo) {
              for (var i3 = debugInfo.length - 1; 0 <= i3; i3--)
                if ("string" === typeof debugInfo[i3].stack) {
                  fiber._debugOwner = debugInfo[i3];
                  break;
                }
            }
            return fiber;
          } finally {
            currentDebugInfo = prevDebugInfo;
          }
        };
      }
      function pushHiddenContext(fiber, context2) {
        var prevEntangledRenderLanes = entangledRenderLanes;
        push(prevEntangledRenderLanesCursor, prevEntangledRenderLanes, fiber);
        push(currentTreeHiddenStackCursor, context2, fiber);
        entangledRenderLanes = prevEntangledRenderLanes | context2.baseLanes;
      }
      function reuseHiddenContextOnStack(fiber) {
        push(prevEntangledRenderLanesCursor, entangledRenderLanes, fiber);
        push(
          currentTreeHiddenStackCursor,
          currentTreeHiddenStackCursor.current,
          fiber
        );
      }
      function popHiddenContext(fiber) {
        entangledRenderLanes = prevEntangledRenderLanesCursor.current;
        pop(currentTreeHiddenStackCursor, fiber);
        pop(prevEntangledRenderLanesCursor, fiber);
      }
      function pushPrimaryTreeSuspenseHandler(handler) {
        var current2 = handler.alternate;
        push(
          suspenseStackCursor,
          suspenseStackCursor.current & SubtreeSuspenseContextMask,
          handler
        );
        push(suspenseHandlerStackCursor, handler, handler);
        null === shellBoundary && (null === current2 || null !== currentTreeHiddenStackCursor.current ? shellBoundary = handler : null !== current2.memoizedState && (shellBoundary = handler));
      }
      function pushOffscreenSuspenseHandler(fiber) {
        if (22 === fiber.tag) {
          if (push(suspenseStackCursor, suspenseStackCursor.current, fiber), push(suspenseHandlerStackCursor, fiber, fiber), null === shellBoundary) {
            var current2 = fiber.alternate;
            null !== current2 && null !== current2.memoizedState && (shellBoundary = fiber);
          }
        } else reuseSuspenseHandlerOnStack(fiber);
      }
      function reuseSuspenseHandlerOnStack(fiber) {
        push(suspenseStackCursor, suspenseStackCursor.current, fiber);
        push(
          suspenseHandlerStackCursor,
          suspenseHandlerStackCursor.current,
          fiber
        );
      }
      function popSuspenseHandler(fiber) {
        pop(suspenseHandlerStackCursor, fiber);
        shellBoundary === fiber && (shellBoundary = null);
        pop(suspenseStackCursor, fiber);
      }
      function findFirstSuspended(row) {
        for (var node = row; null !== node; ) {
          if (13 === node.tag) {
            var state2 = node.memoizedState;
            if (null !== state2 && (state2 = state2.dehydrated, null === state2 || isSuspenseInstancePending(state2) || isSuspenseInstanceFallback(state2)))
              return node;
          } else if (19 === node.tag && void 0 !== node.memoizedProps.revealOrder) {
            if (0 !== (node.flags & 128)) return node;
          } else if (null !== node.child) {
            node.child.return = node;
            node = node.child;
            continue;
          }
          if (node === row) break;
          for (; null === node.sibling; ) {
            if (null === node.return || node.return === row) return null;
            node = node.return;
          }
          node.sibling.return = node.return;
          node = node.sibling;
        }
        return null;
      }
      function mountHookTypesDev() {
        var hookName = currentHookNameInDev;
        null === hookTypesDev ? hookTypesDev = [hookName] : hookTypesDev.push(hookName);
      }
      function updateHookTypesDev() {
        var hookName = currentHookNameInDev;
        if (null !== hookTypesDev && (hookTypesUpdateIndexDev++, hookTypesDev[hookTypesUpdateIndexDev] !== hookName)) {
          var componentName2 = getComponentNameFromFiber(
            currentlyRenderingFiber$1
          );
          if (!didWarnAboutMismatchedHooksForComponent.has(componentName2) && (didWarnAboutMismatchedHooksForComponent.add(componentName2), null !== hookTypesDev)) {
            for (var table = "", i3 = 0; i3 <= hookTypesUpdateIndexDev; i3++) {
              var oldHookName = hookTypesDev[i3], newHookName = i3 === hookTypesUpdateIndexDev ? hookName : oldHookName;
              for (oldHookName = i3 + 1 + ". " + oldHookName; 30 > oldHookName.length; )
                oldHookName += " ";
              oldHookName += newHookName + "\n";
              table += oldHookName;
            }
            console.error(
              "React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks\n\n   Previous render            Next render\n   ------------------------------------------------------\n%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n",
              componentName2,
              table
            );
          }
        }
      }
      function checkDepsAreArrayDev(deps) {
        void 0 === deps || null === deps || isArrayImpl(deps) || console.error(
          "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
          currentHookNameInDev,
          typeof deps
        );
      }
      function warnOnUseFormStateInDev() {
        var componentName2 = getComponentNameFromFiber(currentlyRenderingFiber$1);
        didWarnAboutUseFormState.has(componentName2) || (didWarnAboutUseFormState.add(componentName2), console.error(
          "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
          componentName2
        ));
      }
      function throwInvalidHookError() {
        throw Error(
          "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
        );
      }
      function areHookInputsEqual(nextDeps, prevDeps) {
        if (ignorePreviousDependencies) return false;
        if (null === prevDeps)
          return console.error(
            "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
            currentHookNameInDev
          ), false;
        nextDeps.length !== prevDeps.length && console.error(
          "The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s",
          currentHookNameInDev,
          "[" + prevDeps.join(", ") + "]",
          "[" + nextDeps.join(", ") + "]"
        );
        for (var i3 = 0; i3 < prevDeps.length && i3 < nextDeps.length; i3++)
          if (!objectIs(nextDeps[i3], prevDeps[i3])) return false;
        return true;
      }
      function renderWithHooks(current2, workInProgress2, Component3, props, secondArg, nextRenderLanes) {
        renderLanes = nextRenderLanes;
        currentlyRenderingFiber$1 = workInProgress2;
        hookTypesDev = null !== current2 ? current2._debugHookTypes : null;
        hookTypesUpdateIndexDev = -1;
        ignorePreviousDependencies = null !== current2 && current2.type !== workInProgress2.type;
        if ("[object AsyncFunction]" === Object.prototype.toString.call(Component3) || "[object AsyncGeneratorFunction]" === Object.prototype.toString.call(Component3))
          nextRenderLanes = getComponentNameFromFiber(
            currentlyRenderingFiber$1
          ), didWarnAboutAsyncClientComponent.has(nextRenderLanes) || (didWarnAboutAsyncClientComponent.add(nextRenderLanes), console.error(
            "async/await is not yet supported in Client Components, only Server Components. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
          ));
        workInProgress2.memoizedState = null;
        workInProgress2.updateQueue = null;
        workInProgress2.lanes = 0;
        ReactSharedInternals.H = null !== current2 && null !== current2.memoizedState ? HooksDispatcherOnUpdateInDEV : null !== hookTypesDev ? HooksDispatcherOnMountWithHookTypesInDEV : HooksDispatcherOnMountInDEV;
        shouldDoubleInvokeUserFnsInHooksDEV = nextRenderLanes = (workInProgress2.mode & 8) !== NoMode;
        var children = callComponentInDEV(Component3, props, secondArg);
        shouldDoubleInvokeUserFnsInHooksDEV = false;
        didScheduleRenderPhaseUpdateDuringThisPass && (children = renderWithHooksAgain(
          workInProgress2,
          Component3,
          props,
          secondArg
        ));
        if (nextRenderLanes) {
          setIsStrictModeForDevtools(true);
          try {
            children = renderWithHooksAgain(
              workInProgress2,
              Component3,
              props,
              secondArg
            );
          } finally {
            setIsStrictModeForDevtools(false);
          }
        }
        finishRenderingHooks(current2, workInProgress2);
        return children;
      }
      function finishRenderingHooks(current2, workInProgress2) {
        workInProgress2._debugHookTypes = hookTypesDev;
        null === workInProgress2.dependencies ? null !== thenableState && (workInProgress2.dependencies = {
          lanes: 0,
          firstContext: null,
          _debugThenableState: thenableState
        }) : workInProgress2.dependencies._debugThenableState = thenableState;
        ReactSharedInternals.H = ContextOnlyDispatcher;
        var didRenderTooFewHooks = null !== currentHook && null !== currentHook.next;
        renderLanes = 0;
        hookTypesDev = currentHookNameInDev = workInProgressHook = currentHook = currentlyRenderingFiber$1 = null;
        hookTypesUpdateIndexDev = -1;
        null !== current2 && (current2.flags & 31457280) !== (workInProgress2.flags & 31457280) && console.error(
          "Internal React error: Expected static flag was missing. Please notify the React team."
        );
        didScheduleRenderPhaseUpdate = false;
        thenableIndexCounter = 0;
        thenableState = null;
        if (didRenderTooFewHooks)
          throw Error(
            "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
          );
        null === current2 || didReceiveUpdate || (current2 = current2.dependencies, null !== current2 && checkIfContextChanged(current2) && (didReceiveUpdate = true));
        needsToResetSuspendedThenableDEV ? (needsToResetSuspendedThenableDEV = false, current2 = true) : current2 = false;
        current2 && (workInProgress2 = getComponentNameFromFiber(workInProgress2) || "Unknown", didWarnAboutUseWrappedInTryCatch.has(workInProgress2) || didWarnAboutAsyncClientComponent.has(workInProgress2) || (didWarnAboutUseWrappedInTryCatch.add(workInProgress2), console.error(
          "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
        )));
      }
      function renderWithHooksAgain(workInProgress2, Component3, props, secondArg) {
        currentlyRenderingFiber$1 = workInProgress2;
        var numberOfReRenders = 0;
        do {
          didScheduleRenderPhaseUpdateDuringThisPass && (thenableState = null);
          thenableIndexCounter = 0;
          didScheduleRenderPhaseUpdateDuringThisPass = false;
          if (numberOfReRenders >= RE_RENDER_LIMIT)
            throw Error(
              "Too many re-renders. React limits the number of renders to prevent an infinite loop."
            );
          numberOfReRenders += 1;
          ignorePreviousDependencies = false;
          workInProgressHook = currentHook = null;
          if (null != workInProgress2.updateQueue) {
            var children = workInProgress2.updateQueue;
            children.lastEffect = null;
            children.events = null;
            children.stores = null;
            null != children.memoCache && (children.memoCache.index = 0);
          }
          hookTypesUpdateIndexDev = -1;
          ReactSharedInternals.H = HooksDispatcherOnRerenderInDEV;
          children = callComponentInDEV(Component3, props, secondArg);
        } while (didScheduleRenderPhaseUpdateDuringThisPass);
        return children;
      }
      function TransitionAwareHostComponent() {
        var dispatcher = ReactSharedInternals.H, maybeThenable = dispatcher.useState()[0];
        maybeThenable = "function" === typeof maybeThenable.then ? useThenable(maybeThenable) : maybeThenable;
        dispatcher = dispatcher.useState()[0];
        (null !== currentHook ? currentHook.memoizedState : null) !== dispatcher && (currentlyRenderingFiber$1.flags |= 1024);
        return maybeThenable;
      }
      function checkDidRenderIdHook() {
        var didRenderIdHook = 0 !== localIdCounter;
        localIdCounter = 0;
        return didRenderIdHook;
      }
      function bailoutHooks(current2, workInProgress2, lanes) {
        workInProgress2.updateQueue = current2.updateQueue;
        workInProgress2.flags = (workInProgress2.mode & 16) !== NoMode ? workInProgress2.flags & -201328645 : workInProgress2.flags & -2053;
        current2.lanes &= ~lanes;
      }
      function resetHooksOnUnwind(workInProgress2) {
        if (didScheduleRenderPhaseUpdate) {
          for (workInProgress2 = workInProgress2.memoizedState; null !== workInProgress2; ) {
            var queue = workInProgress2.queue;
            null !== queue && (queue.pending = null);
            workInProgress2 = workInProgress2.next;
          }
          didScheduleRenderPhaseUpdate = false;
        }
        renderLanes = 0;
        hookTypesDev = workInProgressHook = currentHook = currentlyRenderingFiber$1 = null;
        hookTypesUpdateIndexDev = -1;
        currentHookNameInDev = null;
        didScheduleRenderPhaseUpdateDuringThisPass = false;
        thenableIndexCounter = localIdCounter = 0;
        thenableState = null;
      }
      function mountWorkInProgressHook() {
        var hook = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null
        };
        null === workInProgressHook ? currentlyRenderingFiber$1.memoizedState = workInProgressHook = hook : workInProgressHook = workInProgressHook.next = hook;
        return workInProgressHook;
      }
      function updateWorkInProgressHook() {
        if (null === currentHook) {
          var nextCurrentHook = currentlyRenderingFiber$1.alternate;
          nextCurrentHook = null !== nextCurrentHook ? nextCurrentHook.memoizedState : null;
        } else nextCurrentHook = currentHook.next;
        var nextWorkInProgressHook = null === workInProgressHook ? currentlyRenderingFiber$1.memoizedState : workInProgressHook.next;
        if (null !== nextWorkInProgressHook)
          workInProgressHook = nextWorkInProgressHook, currentHook = nextCurrentHook;
        else {
          if (null === nextCurrentHook) {
            if (null === currentlyRenderingFiber$1.alternate)
              throw Error(
                "Update hook called on initial render. This is likely a bug in React. Please file an issue."
              );
            throw Error("Rendered more hooks than during the previous render.");
          }
          currentHook = nextCurrentHook;
          nextCurrentHook = {
            memoizedState: currentHook.memoizedState,
            baseState: currentHook.baseState,
            baseQueue: currentHook.baseQueue,
            queue: currentHook.queue,
            next: null
          };
          null === workInProgressHook ? currentlyRenderingFiber$1.memoizedState = workInProgressHook = nextCurrentHook : workInProgressHook = workInProgressHook.next = nextCurrentHook;
        }
        return workInProgressHook;
      }
      function useThenable(thenable) {
        var index = thenableIndexCounter;
        thenableIndexCounter += 1;
        null === thenableState && (thenableState = createThenableState());
        thenable = trackUsedThenable(thenableState, thenable, index);
        index = currentlyRenderingFiber$1;
        null === (null === workInProgressHook ? index.memoizedState : workInProgressHook.next) && (index = index.alternate, ReactSharedInternals.H = null !== index && null !== index.memoizedState ? HooksDispatcherOnUpdateInDEV : HooksDispatcherOnMountInDEV);
        return thenable;
      }
      function use2(usable) {
        if (null !== usable && "object" === typeof usable) {
          if ("function" === typeof usable.then) return useThenable(usable);
          if (usable.$$typeof === REACT_CONTEXT_TYPE) return readContext(usable);
        }
        throw Error("An unsupported type was passed to use(): " + String(usable));
      }
      function useMemoCache(size) {
        var memoCache = null, updateQueue = currentlyRenderingFiber$1.updateQueue;
        null !== updateQueue && (memoCache = updateQueue.memoCache);
        if (null == memoCache) {
          var current2 = currentlyRenderingFiber$1.alternate;
          null !== current2 && (current2 = current2.updateQueue, null !== current2 && (current2 = current2.memoCache, null != current2 && (memoCache = {
            data: current2.data.map(function(array) {
              return array.slice();
            }),
            index: 0
          })));
        }
        null == memoCache && (memoCache = { data: [], index: 0 });
        null === updateQueue && (updateQueue = createFunctionComponentUpdateQueue(), currentlyRenderingFiber$1.updateQueue = updateQueue);
        updateQueue.memoCache = memoCache;
        updateQueue = memoCache.data[memoCache.index];
        if (void 0 === updateQueue || ignorePreviousDependencies)
          for (updateQueue = memoCache.data[memoCache.index] = Array(size), current2 = 0; current2 < size; current2++)
            updateQueue[current2] = REACT_MEMO_CACHE_SENTINEL;
        else
          updateQueue.length !== size && console.error(
            "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
            updateQueue.length,
            size
          );
        memoCache.index++;
        return updateQueue;
      }
      function basicStateReducer(state2, action) {
        return "function" === typeof action ? action(state2) : action;
      }
      function mountReducer(reducer, initialArg, init) {
        var hook = mountWorkInProgressHook();
        if (void 0 !== init) {
          var initialState = init(initialArg);
          if (shouldDoubleInvokeUserFnsInHooksDEV) {
            setIsStrictModeForDevtools(true);
            try {
              init(initialArg);
            } finally {
              setIsStrictModeForDevtools(false);
            }
          }
        } else initialState = initialArg;
        hook.memoizedState = hook.baseState = initialState;
        reducer = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: reducer,
          lastRenderedState: initialState
        };
        hook.queue = reducer;
        reducer = reducer.dispatch = dispatchReducerAction.bind(
          null,
          currentlyRenderingFiber$1,
          reducer
        );
        return [hook.memoizedState, reducer];
      }
      function updateReducer(reducer) {
        var hook = updateWorkInProgressHook();
        return updateReducerImpl(hook, currentHook, reducer);
      }
      function updateReducerImpl(hook, current2, reducer) {
        var queue = hook.queue;
        if (null === queue)
          throw Error(
            "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
          );
        queue.lastRenderedReducer = reducer;
        var baseQueue = hook.baseQueue, pendingQueue = queue.pending;
        if (null !== pendingQueue) {
          if (null !== baseQueue) {
            var baseFirst = baseQueue.next;
            baseQueue.next = pendingQueue.next;
            pendingQueue.next = baseFirst;
          }
          current2.baseQueue !== baseQueue && console.error(
            "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
          );
          current2.baseQueue = baseQueue = pendingQueue;
          queue.pending = null;
        }
        pendingQueue = hook.baseState;
        if (null === baseQueue) hook.memoizedState = pendingQueue;
        else {
          current2 = baseQueue.next;
          var newBaseQueueFirst = baseFirst = null, newBaseQueueLast = null, update2 = current2, didReadFromEntangledAsyncAction2 = false;
          do {
            var updateLane = update2.lane & -536870913;
            if (updateLane !== update2.lane ? (workInProgressRootRenderLanes & updateLane) === updateLane : (renderLanes & updateLane) === updateLane) {
              var revertLane = update2.revertLane;
              if (0 === revertLane)
                null !== newBaseQueueLast && (newBaseQueueLast = newBaseQueueLast.next = {
                  lane: 0,
                  revertLane: 0,
                  action: update2.action,
                  hasEagerState: update2.hasEagerState,
                  eagerState: update2.eagerState,
                  next: null
                }), updateLane === currentEntangledLane && (didReadFromEntangledAsyncAction2 = true);
              else if ((renderLanes & revertLane) === revertLane) {
                update2 = update2.next;
                revertLane === currentEntangledLane && (didReadFromEntangledAsyncAction2 = true);
                continue;
              } else
                updateLane = {
                  lane: 0,
                  revertLane: update2.revertLane,
                  action: update2.action,
                  hasEagerState: update2.hasEagerState,
                  eagerState: update2.eagerState,
                  next: null
                }, null === newBaseQueueLast ? (newBaseQueueFirst = newBaseQueueLast = updateLane, baseFirst = pendingQueue) : newBaseQueueLast = newBaseQueueLast.next = updateLane, currentlyRenderingFiber$1.lanes |= revertLane, workInProgressRootSkippedLanes |= revertLane;
              updateLane = update2.action;
              shouldDoubleInvokeUserFnsInHooksDEV && reducer(pendingQueue, updateLane);
              pendingQueue = update2.hasEagerState ? update2.eagerState : reducer(pendingQueue, updateLane);
            } else
              revertLane = {
                lane: updateLane,
                revertLane: update2.revertLane,
                action: update2.action,
                hasEagerState: update2.hasEagerState,
                eagerState: update2.eagerState,
                next: null
              }, null === newBaseQueueLast ? (newBaseQueueFirst = newBaseQueueLast = revertLane, baseFirst = pendingQueue) : newBaseQueueLast = newBaseQueueLast.next = revertLane, currentlyRenderingFiber$1.lanes |= updateLane, workInProgressRootSkippedLanes |= updateLane;
            update2 = update2.next;
          } while (null !== update2 && update2 !== current2);
          null === newBaseQueueLast ? baseFirst = pendingQueue : newBaseQueueLast.next = newBaseQueueFirst;
          if (!objectIs(pendingQueue, hook.memoizedState) && (didReceiveUpdate = true, didReadFromEntangledAsyncAction2 && (reducer = currentEntangledActionThenable, null !== reducer)))
            throw reducer;
          hook.memoizedState = pendingQueue;
          hook.baseState = baseFirst;
          hook.baseQueue = newBaseQueueLast;
          queue.lastRenderedState = pendingQueue;
        }
        null === baseQueue && (queue.lanes = 0);
        return [hook.memoizedState, queue.dispatch];
      }
      function rerenderReducer(reducer) {
        var hook = updateWorkInProgressHook(), queue = hook.queue;
        if (null === queue)
          throw Error(
            "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
          );
        queue.lastRenderedReducer = reducer;
        var dispatch = queue.dispatch, lastRenderPhaseUpdate = queue.pending, newState = hook.memoizedState;
        if (null !== lastRenderPhaseUpdate) {
          queue.pending = null;
          var update2 = lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
          do
            newState = reducer(newState, update2.action), update2 = update2.next;
          while (update2 !== lastRenderPhaseUpdate);
          objectIs(newState, hook.memoizedState) || (didReceiveUpdate = true);
          hook.memoizedState = newState;
          null === hook.baseQueue && (hook.baseState = newState);
          queue.lastRenderedState = newState;
        }
        return [newState, dispatch];
      }
      function mountSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
        var fiber = currentlyRenderingFiber$1, hook = mountWorkInProgressHook();
        if (isHydrating) {
          if (void 0 === getServerSnapshot)
            throw Error(
              "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
            );
          var nextSnapshot = getServerSnapshot();
          didWarnUncachedGetSnapshot || nextSnapshot === getServerSnapshot() || (console.error(
            "The result of getServerSnapshot should be cached to avoid an infinite loop"
          ), didWarnUncachedGetSnapshot = true);
        } else {
          nextSnapshot = getSnapshot();
          didWarnUncachedGetSnapshot || (getServerSnapshot = getSnapshot(), objectIs(nextSnapshot, getServerSnapshot) || (console.error(
            "The result of getSnapshot should be cached to avoid an infinite loop"
          ), didWarnUncachedGetSnapshot = true));
          if (null === workInProgressRoot)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          0 !== (workInProgressRootRenderLanes & 60) || pushStoreConsistencyCheck(fiber, getSnapshot, nextSnapshot);
        }
        hook.memoizedState = nextSnapshot;
        getServerSnapshot = { value: nextSnapshot, getSnapshot };
        hook.queue = getServerSnapshot;
        mountEffect(
          subscribeToStore.bind(null, fiber, getServerSnapshot, subscribe),
          [subscribe]
        );
        fiber.flags |= 2048;
        pushEffect(
          HasEffect | Passive,
          updateStoreInstance.bind(
            null,
            fiber,
            getServerSnapshot,
            nextSnapshot,
            getSnapshot
          ),
          { destroy: void 0 },
          null
        );
        return nextSnapshot;
      }
      function updateSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
        var fiber = currentlyRenderingFiber$1, hook = updateWorkInProgressHook(), isHydrating$jscomp$0 = isHydrating;
        if (isHydrating$jscomp$0) {
          if (void 0 === getServerSnapshot)
            throw Error(
              "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
            );
          getServerSnapshot = getServerSnapshot();
        } else if (getServerSnapshot = getSnapshot(), !didWarnUncachedGetSnapshot) {
          var cachedSnapshot = getSnapshot();
          objectIs(getServerSnapshot, cachedSnapshot) || (console.error(
            "The result of getSnapshot should be cached to avoid an infinite loop"
          ), didWarnUncachedGetSnapshot = true);
        }
        if (cachedSnapshot = !objectIs(
          (currentHook || hook).memoizedState,
          getServerSnapshot
        ))
          hook.memoizedState = getServerSnapshot, didReceiveUpdate = true;
        hook = hook.queue;
        var create = subscribeToStore.bind(null, fiber, hook, subscribe);
        updateEffectImpl(2048, Passive, create, [subscribe]);
        if (hook.getSnapshot !== getSnapshot || cachedSnapshot || null !== workInProgressHook && workInProgressHook.memoizedState.tag & HasEffect) {
          fiber.flags |= 2048;
          pushEffect(
            HasEffect | Passive,
            updateStoreInstance.bind(
              null,
              fiber,
              hook,
              getServerSnapshot,
              getSnapshot
            ),
            { destroy: void 0 },
            null
          );
          if (null === workInProgressRoot)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          isHydrating$jscomp$0 || 0 !== (renderLanes & 60) || pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
        }
        return getServerSnapshot;
      }
      function pushStoreConsistencyCheck(fiber, getSnapshot, renderedSnapshot) {
        fiber.flags |= 16384;
        fiber = { getSnapshot, value: renderedSnapshot };
        getSnapshot = currentlyRenderingFiber$1.updateQueue;
        null === getSnapshot ? (getSnapshot = createFunctionComponentUpdateQueue(), currentlyRenderingFiber$1.updateQueue = getSnapshot, getSnapshot.stores = [fiber]) : (renderedSnapshot = getSnapshot.stores, null === renderedSnapshot ? getSnapshot.stores = [fiber] : renderedSnapshot.push(fiber));
      }
      function updateStoreInstance(fiber, inst, nextSnapshot, getSnapshot) {
        inst.value = nextSnapshot;
        inst.getSnapshot = getSnapshot;
        checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
      }
      function subscribeToStore(fiber, inst, subscribe) {
        return subscribe(function() {
          checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
        });
      }
      function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
          var nextValue = latestGetSnapshot();
          return !objectIs(inst, nextValue);
        } catch (error) {
          return true;
        }
      }
      function forceStoreRerender(fiber) {
        var root = enqueueConcurrentRenderForLane(fiber, 2);
        null !== root && scheduleUpdateOnFiber(root, fiber, 2);
      }
      function mountStateImpl(initialState) {
        var hook = mountWorkInProgressHook();
        if ("function" === typeof initialState) {
          var initialStateInitializer = initialState;
          initialState = initialStateInitializer();
          if (shouldDoubleInvokeUserFnsInHooksDEV) {
            setIsStrictModeForDevtools(true);
            try {
              initialStateInitializer();
            } finally {
              setIsStrictModeForDevtools(false);
            }
          }
        }
        hook.memoizedState = hook.baseState = initialState;
        hook.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: basicStateReducer,
          lastRenderedState: initialState
        };
        return hook;
      }
      function mountState(initialState) {
        initialState = mountStateImpl(initialState);
        var queue = initialState.queue, dispatch = dispatchSetState.bind(
          null,
          currentlyRenderingFiber$1,
          queue
        );
        queue.dispatch = dispatch;
        return [initialState.memoizedState, dispatch];
      }
      function mountOptimistic(passthrough) {
        var hook = mountWorkInProgressHook();
        hook.memoizedState = hook.baseState = passthrough;
        var queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        hook.queue = queue;
        hook = dispatchOptimisticSetState.bind(
          null,
          currentlyRenderingFiber$1,
          true,
          queue
        );
        queue.dispatch = hook;
        return [passthrough, hook];
      }
      function updateOptimistic(passthrough, reducer) {
        var hook = updateWorkInProgressHook();
        return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
      }
      function updateOptimisticImpl(hook, current2, passthrough, reducer) {
        hook.baseState = passthrough;
        return updateReducerImpl(
          hook,
          currentHook,
          "function" === typeof reducer ? reducer : basicStateReducer
        );
      }
      function rerenderOptimistic(passthrough, reducer) {
        var hook = updateWorkInProgressHook();
        if (null !== currentHook)
          return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
        hook.baseState = passthrough;
        return [passthrough, hook.queue.dispatch];
      }
      function dispatchActionState(fiber, actionQueue, setPendingState, setState, payload) {
        if (isRenderPhaseUpdate(fiber))
          throw Error("Cannot update form state while rendering.");
        fiber = actionQueue.action;
        if (null !== fiber) {
          var actionNode = {
            payload,
            action: fiber,
            next: null,
            isTransition: true,
            status: "pending",
            value: null,
            reason: null,
            listeners: [],
            then: function(listener) {
              actionNode.listeners.push(listener);
            }
          };
          null !== ReactSharedInternals.T ? setPendingState(true) : actionNode.isTransition = false;
          setState(actionNode);
          setPendingState = actionQueue.pending;
          null === setPendingState ? (actionNode.next = actionQueue.pending = actionNode, runActionStateAction(actionQueue, actionNode)) : (actionNode.next = setPendingState.next, actionQueue.pending = setPendingState.next = actionNode);
        }
      }
      function runActionStateAction(actionQueue, node) {
        var action = node.action, payload = node.payload, prevState = actionQueue.state;
        if (node.isTransition) {
          var prevTransition = ReactSharedInternals.T, currentTransition = {};
          ReactSharedInternals.T = currentTransition;
          ReactSharedInternals.T._updatedFibers = /* @__PURE__ */ new Set();
          try {
            var returnValue = action(prevState, payload), onStartTransitionFinish = ReactSharedInternals.S;
            null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
            handleActionReturnValue(actionQueue, node, returnValue);
          } catch (error) {
            onActionError(actionQueue, node, error);
          } finally {
            ReactSharedInternals.T = prevTransition, null === prevTransition && currentTransition._updatedFibers && (actionQueue = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < actionQueue && console.warn(
              "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
            ));
          }
        } else
          try {
            currentTransition = action(prevState, payload), handleActionReturnValue(actionQueue, node, currentTransition);
          } catch (error$2) {
            onActionError(actionQueue, node, error$2);
          }
      }
      function handleActionReturnValue(actionQueue, node, returnValue) {
        null !== returnValue && "object" === typeof returnValue && "function" === typeof returnValue.then ? (returnValue.then(
          function(nextState) {
            onActionSuccess(actionQueue, node, nextState);
          },
          function(error) {
            return onActionError(actionQueue, node, error);
          }
        ), node.isTransition || console.error(
          "An async function was passed to useActionState, but it was dispatched outside of an action context. This is likely not what you intended. Either pass the dispatch function to an `action` prop, or dispatch manually inside `startTransition`"
        )) : onActionSuccess(actionQueue, node, returnValue);
      }
      function onActionSuccess(actionQueue, actionNode, nextState) {
        actionNode.status = "fulfilled";
        actionNode.value = nextState;
        notifyActionListeners(actionNode);
        actionQueue.state = nextState;
        actionNode = actionQueue.pending;
        null !== actionNode && (nextState = actionNode.next, nextState === actionNode ? actionQueue.pending = null : (nextState = nextState.next, actionNode.next = nextState, runActionStateAction(actionQueue, nextState)));
      }
      function onActionError(actionQueue, actionNode, error) {
        var last = actionQueue.pending;
        actionQueue.pending = null;
        if (null !== last) {
          last = last.next;
          do
            actionNode.status = "rejected", actionNode.reason = error, notifyActionListeners(actionNode), actionNode = actionNode.next;
          while (actionNode !== last);
        }
        actionQueue.action = null;
      }
      function notifyActionListeners(actionNode) {
        actionNode = actionNode.listeners;
        for (var i3 = 0; i3 < actionNode.length; i3++) (0, actionNode[i3])();
      }
      function actionStateReducer(oldState, newState) {
        return newState;
      }
      function mountActionState(action, initialStateProp) {
        if (isHydrating) {
          var ssrFormState = workInProgressRoot.formState;
          if (null !== ssrFormState) {
            a: {
              var isMatching = currentlyRenderingFiber$1;
              if (isHydrating) {
                if (nextHydratableInstance) {
                  var markerInstance = canHydrateFormStateMarker(
                    nextHydratableInstance,
                    rootOrSingletonContext
                  );
                  if (markerInstance) {
                    nextHydratableInstance = getNextHydratableSibling(markerInstance);
                    isMatching = isFormStateMarkerMatching(markerInstance);
                    break a;
                  }
                }
                throwOnHydrationMismatch(isMatching);
              }
              isMatching = false;
            }
            isMatching && (initialStateProp = ssrFormState[0]);
          }
        }
        ssrFormState = mountWorkInProgressHook();
        ssrFormState.memoizedState = ssrFormState.baseState = initialStateProp;
        isMatching = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: actionStateReducer,
          lastRenderedState: initialStateProp
        };
        ssrFormState.queue = isMatching;
        ssrFormState = dispatchSetState.bind(
          null,
          currentlyRenderingFiber$1,
          isMatching
        );
        isMatching.dispatch = ssrFormState;
        isMatching = mountStateImpl(false);
        var setPendingState = dispatchOptimisticSetState.bind(
          null,
          currentlyRenderingFiber$1,
          false,
          isMatching.queue
        );
        isMatching = mountWorkInProgressHook();
        markerInstance = {
          state: initialStateProp,
          dispatch: null,
          action,
          pending: null
        };
        isMatching.queue = markerInstance;
        ssrFormState = dispatchActionState.bind(
          null,
          currentlyRenderingFiber$1,
          markerInstance,
          setPendingState,
          ssrFormState
        );
        markerInstance.dispatch = ssrFormState;
        isMatching.memoizedState = action;
        return [initialStateProp, ssrFormState, false];
      }
      function updateActionState(action) {
        var stateHook = updateWorkInProgressHook();
        return updateActionStateImpl(stateHook, currentHook, action);
      }
      function updateActionStateImpl(stateHook, currentStateHook, action) {
        currentStateHook = updateReducerImpl(
          stateHook,
          currentStateHook,
          actionStateReducer
        )[0];
        stateHook = updateReducer(basicStateReducer)[0];
        currentStateHook = "object" === typeof currentStateHook && null !== currentStateHook && "function" === typeof currentStateHook.then ? useThenable(currentStateHook) : currentStateHook;
        var actionQueueHook = updateWorkInProgressHook(), actionQueue = actionQueueHook.queue, dispatch = actionQueue.dispatch;
        action !== actionQueueHook.memoizedState && (currentlyRenderingFiber$1.flags |= 2048, pushEffect(
          HasEffect | Passive,
          actionStateActionEffect.bind(null, actionQueue, action),
          { destroy: void 0 },
          null
        ));
        return [currentStateHook, dispatch, stateHook];
      }
      function actionStateActionEffect(actionQueue, action) {
        actionQueue.action = action;
      }
      function rerenderActionState(action) {
        var stateHook = updateWorkInProgressHook(), currentStateHook = currentHook;
        if (null !== currentStateHook)
          return updateActionStateImpl(stateHook, currentStateHook, action);
        updateWorkInProgressHook();
        stateHook = stateHook.memoizedState;
        currentStateHook = updateWorkInProgressHook();
        var dispatch = currentStateHook.queue.dispatch;
        currentStateHook.memoizedState = action;
        return [stateHook, dispatch, false];
      }
      function pushEffect(tag, create, inst, deps) {
        tag = { tag, create, inst, deps, next: null };
        create = currentlyRenderingFiber$1.updateQueue;
        null === create && (create = createFunctionComponentUpdateQueue(), currentlyRenderingFiber$1.updateQueue = create);
        inst = create.lastEffect;
        null === inst ? create.lastEffect = tag.next = tag : (deps = inst.next, inst.next = tag, tag.next = deps, create.lastEffect = tag);
        return tag;
      }
      function mountRef(initialValue) {
        var hook = mountWorkInProgressHook();
        initialValue = { current: initialValue };
        return hook.memoizedState = initialValue;
      }
      function mountEffectImpl(fiberFlags, hookFlags, create, deps) {
        var hook = mountWorkInProgressHook();
        currentlyRenderingFiber$1.flags |= fiberFlags;
        hook.memoizedState = pushEffect(
          HasEffect | hookFlags,
          create,
          { destroy: void 0 },
          void 0 === deps ? null : deps
        );
      }
      function updateEffectImpl(fiberFlags, hookFlags, create, deps) {
        var hook = updateWorkInProgressHook();
        deps = void 0 === deps ? null : deps;
        var inst = hook.memoizedState.inst;
        null !== currentHook && null !== deps && areHookInputsEqual(deps, currentHook.memoizedState.deps) ? hook.memoizedState = pushEffect(hookFlags, create, inst, deps) : (currentlyRenderingFiber$1.flags |= fiberFlags, hook.memoizedState = pushEffect(
          HasEffect | hookFlags,
          create,
          inst,
          deps
        ));
      }
      function mountEffect(create, deps) {
        (currentlyRenderingFiber$1.mode & 16) !== NoMode && (currentlyRenderingFiber$1.mode & 64) === NoMode ? mountEffectImpl(142608384, Passive, create, deps) : mountEffectImpl(8390656, Passive, create, deps);
      }
      function mountLayoutEffect(create, deps) {
        var fiberFlags = 4194308;
        (currentlyRenderingFiber$1.mode & 16) !== NoMode && (fiberFlags |= 67108864);
        return mountEffectImpl(fiberFlags, Layout, create, deps);
      }
      function imperativeHandleEffect(create, ref) {
        if ("function" === typeof ref) {
          create = create();
          var refCleanup = ref(create);
          return function() {
            "function" === typeof refCleanup ? refCleanup() : ref(null);
          };
        }
        if (null !== ref && void 0 !== ref)
          return ref.hasOwnProperty("current") || console.error(
            "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
            "an object with keys {" + Object.keys(ref).join(", ") + "}"
          ), create = create(), ref.current = create, function() {
            ref.current = null;
          };
      }
      function mountImperativeHandle(ref, create, deps) {
        "function" !== typeof create && console.error(
          "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
          null !== create ? typeof create : "null"
        );
        deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
        var fiberFlags = 4194308;
        (currentlyRenderingFiber$1.mode & 16) !== NoMode && (fiberFlags |= 67108864);
        mountEffectImpl(
          fiberFlags,
          Layout,
          imperativeHandleEffect.bind(null, create, ref),
          deps
        );
      }
      function updateImperativeHandle(ref, create, deps) {
        "function" !== typeof create && console.error(
          "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
          null !== create ? typeof create : "null"
        );
        deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
        updateEffectImpl(
          4,
          Layout,
          imperativeHandleEffect.bind(null, create, ref),
          deps
        );
      }
      function mountCallback(callback, deps) {
        mountWorkInProgressHook().memoizedState = [
          callback,
          void 0 === deps ? null : deps
        ];
        return callback;
      }
      function updateCallback(callback, deps) {
        var hook = updateWorkInProgressHook();
        deps = void 0 === deps ? null : deps;
        var prevState = hook.memoizedState;
        if (null !== deps && areHookInputsEqual(deps, prevState[1]))
          return prevState[0];
        hook.memoizedState = [callback, deps];
        return callback;
      }
      function mountMemo(nextCreate, deps) {
        var hook = mountWorkInProgressHook();
        deps = void 0 === deps ? null : deps;
        var nextValue = nextCreate();
        if (shouldDoubleInvokeUserFnsInHooksDEV) {
          setIsStrictModeForDevtools(true);
          try {
            nextCreate();
          } finally {
            setIsStrictModeForDevtools(false);
          }
        }
        hook.memoizedState = [nextValue, deps];
        return nextValue;
      }
      function updateMemo(nextCreate, deps) {
        var hook = updateWorkInProgressHook();
        deps = void 0 === deps ? null : deps;
        var prevState = hook.memoizedState;
        if (null !== deps && areHookInputsEqual(deps, prevState[1]))
          return prevState[0];
        prevState = nextCreate();
        if (shouldDoubleInvokeUserFnsInHooksDEV) {
          setIsStrictModeForDevtools(true);
          try {
            nextCreate();
          } finally {
            setIsStrictModeForDevtools(false);
          }
        }
        hook.memoizedState = [prevState, deps];
        return prevState;
      }
      function mountDeferredValue(value, initialValue) {
        var hook = mountWorkInProgressHook();
        return mountDeferredValueImpl(hook, value, initialValue);
      }
      function updateDeferredValue(value, initialValue) {
        var hook = updateWorkInProgressHook();
        return updateDeferredValueImpl(
          hook,
          currentHook.memoizedState,
          value,
          initialValue
        );
      }
      function rerenderDeferredValue(value, initialValue) {
        var hook = updateWorkInProgressHook();
        return null === currentHook ? mountDeferredValueImpl(hook, value, initialValue) : updateDeferredValueImpl(
          hook,
          currentHook.memoizedState,
          value,
          initialValue
        );
      }
      function mountDeferredValueImpl(hook, value, initialValue) {
        if (void 0 === initialValue || 0 !== (renderLanes & 1073741824))
          return hook.memoizedState = value;
        hook.memoizedState = initialValue;
        hook = requestDeferredLane();
        currentlyRenderingFiber$1.lanes |= hook;
        workInProgressRootSkippedLanes |= hook;
        return initialValue;
      }
      function updateDeferredValueImpl(hook, prevValue, value, initialValue) {
        if (objectIs(value, prevValue)) return value;
        if (null !== currentTreeHiddenStackCursor.current)
          return hook = mountDeferredValueImpl(hook, value, initialValue), objectIs(hook, prevValue) || (didReceiveUpdate = true), hook;
        if (0 === (renderLanes & 42))
          return didReceiveUpdate = true, hook.memoizedState = value;
        hook = requestDeferredLane();
        currentlyRenderingFiber$1.lanes |= hook;
        workInProgressRootSkippedLanes |= hook;
        return prevValue;
      }
      function startTransition(fiber, queue, pendingState, finishedState, callback) {
        var previousPriority = getCurrentUpdatePriority();
        setCurrentUpdatePriority(
          0 !== previousPriority && 8 > previousPriority ? previousPriority : 8
        );
        var prevTransition = ReactSharedInternals.T, currentTransition = {};
        ReactSharedInternals.T = currentTransition;
        dispatchOptimisticSetState(fiber, false, queue, pendingState);
        currentTransition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var returnValue = callback(), onStartTransitionFinish = ReactSharedInternals.S;
          null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
          if (null !== returnValue && "object" === typeof returnValue && "function" === typeof returnValue.then) {
            var thenableForFinishedState = chainThenableValue(
              returnValue,
              finishedState
            );
            dispatchSetStateInternal(
              fiber,
              queue,
              thenableForFinishedState,
              requestUpdateLane(fiber)
            );
          } else
            dispatchSetStateInternal(
              fiber,
              queue,
              finishedState,
              requestUpdateLane(fiber)
            );
        } catch (error) {
          dispatchSetStateInternal(
            fiber,
            queue,
            { then: function() {
            }, status: "rejected", reason: error },
            requestUpdateLane(fiber)
          );
        } finally {
          setCurrentUpdatePriority(previousPriority), ReactSharedInternals.T = prevTransition, null === prevTransition && currentTransition._updatedFibers && (fiber = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < fiber && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      }
      function ensureFormComponentIsStateful(formFiber) {
        var existingStateHook = formFiber.memoizedState;
        if (null !== existingStateHook) return existingStateHook;
        existingStateHook = {
          memoizedState: NotPendingTransition,
          baseState: NotPendingTransition,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: basicStateReducer,
            lastRenderedState: NotPendingTransition
          },
          next: null
        };
        var initialResetState = {};
        existingStateHook.next = {
          memoizedState: initialResetState,
          baseState: initialResetState,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: basicStateReducer,
            lastRenderedState: initialResetState
          },
          next: null
        };
        formFiber.memoizedState = existingStateHook;
        formFiber = formFiber.alternate;
        null !== formFiber && (formFiber.memoizedState = existingStateHook);
        return existingStateHook;
      }
      function mountTransition() {
        var stateHook = mountStateImpl(false);
        stateHook = startTransition.bind(
          null,
          currentlyRenderingFiber$1,
          stateHook.queue,
          true,
          false
        );
        mountWorkInProgressHook().memoizedState = stateHook;
        return [false, stateHook];
      }
      function updateTransition() {
        var booleanOrThenable = updateReducer(basicStateReducer)[0], start = updateWorkInProgressHook().memoizedState;
        return [
          "boolean" === typeof booleanOrThenable ? booleanOrThenable : useThenable(booleanOrThenable),
          start
        ];
      }
      function rerenderTransition() {
        var booleanOrThenable = rerenderReducer(basicStateReducer)[0], start = updateWorkInProgressHook().memoizedState;
        return [
          "boolean" === typeof booleanOrThenable ? booleanOrThenable : useThenable(booleanOrThenable),
          start
        ];
      }
      function useHostTransitionStatus() {
        return readContext(HostTransitionContext);
      }
      function mountId() {
        var hook = mountWorkInProgressHook(), identifierPrefix = workInProgressRoot.identifierPrefix;
        if (isHydrating) {
          var treeId = treeContextOverflow;
          var idWithLeadingBit = treeContextId;
          treeId = (idWithLeadingBit & ~(1 << 32 - clz32(idWithLeadingBit) - 1)).toString(32) + treeId;
          identifierPrefix = ":" + identifierPrefix + "R" + treeId;
          treeId = localIdCounter++;
          0 < treeId && (identifierPrefix += "H" + treeId.toString(32));
          identifierPrefix += ":";
        } else
          treeId = globalClientIdCounter++, identifierPrefix = ":" + identifierPrefix + "r" + treeId.toString(32) + ":";
        return hook.memoizedState = identifierPrefix;
      }
      function mountRefresh() {
        return mountWorkInProgressHook().memoizedState = refreshCache.bind(
          null,
          currentlyRenderingFiber$1
        );
      }
      function refreshCache(fiber, seedKey) {
        for (var provider = fiber.return; null !== provider; ) {
          switch (provider.tag) {
            case 24:
            case 3:
              var lane = requestUpdateLane(provider);
              fiber = createUpdate(lane);
              var root = enqueueUpdate(provider, fiber, lane);
              null !== root && (scheduleUpdateOnFiber(root, provider, lane), entangleTransitions(root, provider, lane));
              provider = createCache();
              null !== seedKey && void 0 !== seedKey && null !== root && console.error(
                "The seed argument is not enabled outside experimental channels."
              );
              fiber.payload = { cache: provider };
              return;
          }
          provider = provider.return;
        }
      }
      function dispatchReducerAction(fiber, queue, action, JSCompiler_OptimizeArgumentsArray_p0) {
        "function" === typeof JSCompiler_OptimizeArgumentsArray_p0 && console.error(
          "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
        );
        JSCompiler_OptimizeArgumentsArray_p0 = requestUpdateLane(fiber);
        action = {
          lane: JSCompiler_OptimizeArgumentsArray_p0,
          revertLane: 0,
          action,
          hasEagerState: false,
          eagerState: null,
          next: null
        };
        isRenderPhaseUpdate(fiber) ? enqueueRenderPhaseUpdate(queue, action) : (action = enqueueConcurrentHookUpdate(
          fiber,
          queue,
          action,
          JSCompiler_OptimizeArgumentsArray_p0
        ), null !== action && (scheduleUpdateOnFiber(
          action,
          fiber,
          JSCompiler_OptimizeArgumentsArray_p0
        ), entangleTransitionUpdate(
          action,
          queue,
          JSCompiler_OptimizeArgumentsArray_p0
        )));
        markStateUpdateScheduled(fiber, JSCompiler_OptimizeArgumentsArray_p0);
      }
      function dispatchSetState(fiber, queue, action, JSCompiler_OptimizeArgumentsArray_p1) {
        "function" === typeof JSCompiler_OptimizeArgumentsArray_p1 && console.error(
          "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
        );
        JSCompiler_OptimizeArgumentsArray_p1 = requestUpdateLane(fiber);
        dispatchSetStateInternal(
          fiber,
          queue,
          action,
          JSCompiler_OptimizeArgumentsArray_p1
        );
        markStateUpdateScheduled(fiber, JSCompiler_OptimizeArgumentsArray_p1);
      }
      function dispatchSetStateInternal(fiber, queue, action, lane) {
        var update2 = {
          lane,
          revertLane: 0,
          action,
          hasEagerState: false,
          eagerState: null,
          next: null
        };
        if (isRenderPhaseUpdate(fiber)) enqueueRenderPhaseUpdate(queue, update2);
        else {
          var alternate = fiber.alternate;
          if (0 === fiber.lanes && (null === alternate || 0 === alternate.lanes) && (alternate = queue.lastRenderedReducer, null !== alternate)) {
            var prevDispatcher = ReactSharedInternals.H;
            ReactSharedInternals.H = InvalidNestedHooksDispatcherOnUpdateInDEV;
            try {
              var currentState = queue.lastRenderedState, eagerState = alternate(currentState, action);
              update2.hasEagerState = true;
              update2.eagerState = eagerState;
              if (objectIs(eagerState, currentState))
                return enqueueUpdate$1(fiber, queue, update2, 0), null === workInProgressRoot && finishQueueingConcurrentUpdates(), false;
            } catch (error) {
            } finally {
              ReactSharedInternals.H = prevDispatcher;
            }
          }
          action = enqueueConcurrentHookUpdate(fiber, queue, update2, lane);
          if (null !== action)
            return scheduleUpdateOnFiber(action, fiber, lane), entangleTransitionUpdate(action, queue, lane), true;
        }
        return false;
      }
      function dispatchOptimisticSetState(fiber, throwIfDuringRender, queue, action) {
        null === ReactSharedInternals.T && 0 === currentEntangledLane && console.error(
          "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
        );
        action = {
          lane: 2,
          revertLane: requestTransitionLane(),
          action,
          hasEagerState: false,
          eagerState: null,
          next: null
        };
        if (isRenderPhaseUpdate(fiber)) {
          if (throwIfDuringRender)
            throw Error("Cannot update optimistic state while rendering.");
          console.error("Cannot call startTransition while rendering.");
        } else
          throwIfDuringRender = enqueueConcurrentHookUpdate(
            fiber,
            queue,
            action,
            2
          ), null !== throwIfDuringRender && scheduleUpdateOnFiber(throwIfDuringRender, fiber, 2);
        markStateUpdateScheduled(fiber, 2);
      }
      function isRenderPhaseUpdate(fiber) {
        var alternate = fiber.alternate;
        return fiber === currentlyRenderingFiber$1 || null !== alternate && alternate === currentlyRenderingFiber$1;
      }
      function enqueueRenderPhaseUpdate(queue, update2) {
        didScheduleRenderPhaseUpdateDuringThisPass = didScheduleRenderPhaseUpdate = true;
        var pending = queue.pending;
        null === pending ? update2.next = update2 : (update2.next = pending.next, pending.next = update2);
        queue.pending = update2;
      }
      function entangleTransitionUpdate(root, queue, lane) {
        if (0 !== (lane & 4194176)) {
          var queueLanes = queue.lanes;
          queueLanes &= root.pendingLanes;
          lane |= queueLanes;
          queue.lanes = lane;
          markRootEntangled(root, lane);
        }
      }
      function warnOnInvalidCallback(callback) {
        if (null !== callback && "function" !== typeof callback) {
          var key = String(callback);
          didWarnOnInvalidCallback.has(key) || (didWarnOnInvalidCallback.add(key), console.error(
            "Expected the last optional `callback` argument to be a function. Instead received: %s.",
            callback
          ));
        }
      }
      function applyDerivedStateFromProps(workInProgress2, ctor, getDerivedStateFromProps, nextProps) {
        var prevState = workInProgress2.memoizedState, partialState = getDerivedStateFromProps(nextProps, prevState);
        if (workInProgress2.mode & 8) {
          setIsStrictModeForDevtools(true);
          try {
            partialState = getDerivedStateFromProps(nextProps, prevState);
          } finally {
            setIsStrictModeForDevtools(false);
          }
        }
        void 0 === partialState && (ctor = getComponentNameFromType(ctor) || "Component", didWarnAboutUndefinedDerivedState.has(ctor) || (didWarnAboutUndefinedDerivedState.add(ctor), console.error(
          "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
          ctor
        )));
        prevState = null === partialState || void 0 === partialState ? prevState : assign({}, prevState, partialState);
        workInProgress2.memoizedState = prevState;
        0 === workInProgress2.lanes && (workInProgress2.updateQueue.baseState = prevState);
      }
      function checkShouldComponentUpdate(workInProgress2, ctor, oldProps, newProps, oldState, newState, nextContext) {
        var instance = workInProgress2.stateNode;
        if ("function" === typeof instance.shouldComponentUpdate) {
          oldProps = instance.shouldComponentUpdate(
            newProps,
            newState,
            nextContext
          );
          if (workInProgress2.mode & 8) {
            setIsStrictModeForDevtools(true);
            try {
              oldProps = instance.shouldComponentUpdate(
                newProps,
                newState,
                nextContext
              );
            } finally {
              setIsStrictModeForDevtools(false);
            }
          }
          void 0 === oldProps && console.error(
            "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
            getComponentNameFromType(ctor) || "Component"
          );
          return oldProps;
        }
        return ctor.prototype && ctor.prototype.isPureReactComponent ? !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState) : true;
      }
      function callComponentWillReceiveProps(workInProgress2, instance, newProps, nextContext) {
        var oldState = instance.state;
        "function" === typeof instance.componentWillReceiveProps && instance.componentWillReceiveProps(newProps, nextContext);
        "function" === typeof instance.UNSAFE_componentWillReceiveProps && instance.UNSAFE_componentWillReceiveProps(newProps, nextContext);
        instance.state !== oldState && (workInProgress2 = getComponentNameFromFiber(workInProgress2) || "Component", didWarnAboutStateAssignmentForComponent.has(workInProgress2) || (didWarnAboutStateAssignmentForComponent.add(workInProgress2), console.error(
          "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          workInProgress2
        )), classComponentUpdater.enqueueReplaceState(
          instance,
          instance.state,
          null
        ));
      }
      function resolveClassComponentProps(Component3, baseProps) {
        var newProps = baseProps;
        if ("ref" in baseProps) {
          newProps = {};
          for (var propName in baseProps)
            "ref" !== propName && (newProps[propName] = baseProps[propName]);
        }
        if (Component3 = Component3.defaultProps) {
          newProps === baseProps && (newProps = assign({}, newProps));
          for (var _propName in Component3)
            void 0 === newProps[_propName] && (newProps[_propName] = Component3[_propName]);
        }
        return newProps;
      }
      function logUncaughtError(root, errorInfo) {
        try {
          componentName = errorInfo.source ? getComponentNameFromFiber(errorInfo.source) : null;
          errorBoundaryName = null;
          var error = errorInfo.value;
          if (null !== ReactSharedInternals.actQueue)
            ReactSharedInternals.thrownErrors.push(error);
          else {
            var onUncaughtError = root.onUncaughtError;
            onUncaughtError(error, { componentStack: errorInfo.stack });
          }
        } catch (e) {
          setTimeout(function() {
            throw e;
          });
        }
      }
      function logCaughtError(root, boundary, errorInfo) {
        try {
          componentName = errorInfo.source ? getComponentNameFromFiber(errorInfo.source) : null;
          errorBoundaryName = getComponentNameFromFiber(boundary);
          var onCaughtError = root.onCaughtError;
          onCaughtError(errorInfo.value, {
            componentStack: errorInfo.stack,
            errorBoundary: 1 === boundary.tag ? boundary.stateNode : null
          });
        } catch (e) {
          setTimeout(function() {
            throw e;
          });
        }
      }
      function createRootErrorUpdate(root, errorInfo, lane) {
        lane = createUpdate(lane);
        lane.tag = CaptureUpdate;
        lane.payload = { element: null };
        lane.callback = function() {
          runWithFiberInDEV(errorInfo.source, logUncaughtError, root, errorInfo);
        };
        return lane;
      }
      function createClassErrorUpdate(lane) {
        lane = createUpdate(lane);
        lane.tag = CaptureUpdate;
        return lane;
      }
      function initializeClassErrorUpdate(update2, root, fiber, errorInfo) {
        var getDerivedStateFromError = fiber.type.getDerivedStateFromError;
        if ("function" === typeof getDerivedStateFromError) {
          var error = errorInfo.value;
          update2.payload = function() {
            return getDerivedStateFromError(error);
          };
          update2.callback = function() {
            markFailedErrorBoundaryForHotReloading(fiber);
            runWithFiberInDEV(
              errorInfo.source,
              logCaughtError,
              root,
              fiber,
              errorInfo
            );
          };
        }
        var inst = fiber.stateNode;
        null !== inst && "function" === typeof inst.componentDidCatch && (update2.callback = function() {
          markFailedErrorBoundaryForHotReloading(fiber);
          runWithFiberInDEV(
            errorInfo.source,
            logCaughtError,
            root,
            fiber,
            errorInfo
          );
          "function" !== typeof getDerivedStateFromError && (null === legacyErrorBoundariesThatAlreadyFailed ? legacyErrorBoundariesThatAlreadyFailed = /* @__PURE__ */ new Set([this]) : legacyErrorBoundariesThatAlreadyFailed.add(this));
          callComponentDidCatchInDEV(this, errorInfo);
          "function" === typeof getDerivedStateFromError || 0 === (fiber.lanes & 2) && console.error(
            "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
            getComponentNameFromFiber(fiber) || "Unknown"
          );
        });
      }
      function throwException(root, returnFiber, sourceFiber, value, rootRenderLanes) {
        sourceFiber.flags |= 32768;
        isDevToolsPresent && restorePendingUpdaters(root, rootRenderLanes);
        if (null !== value && "object" === typeof value && "function" === typeof value.then) {
          returnFiber = sourceFiber.alternate;
          null !== returnFiber && propagateParentContextChanges(
            returnFiber,
            sourceFiber,
            rootRenderLanes,
            true
          );
          isHydrating && (didSuspendOrErrorDEV = true);
          sourceFiber = suspenseHandlerStackCursor.current;
          if (null !== sourceFiber) {
            switch (sourceFiber.tag) {
              case 13:
                return null === shellBoundary ? renderDidSuspendDelayIfPossible() : null === sourceFiber.alternate && workInProgressRootExitStatus === RootInProgress && (workInProgressRootExitStatus = RootSuspended), sourceFiber.flags &= -257, sourceFiber.flags |= 65536, sourceFiber.lanes = rootRenderLanes, value === noopSuspenseyCommitThenable ? sourceFiber.flags |= 16384 : (returnFiber = sourceFiber.updateQueue, null === returnFiber ? sourceFiber.updateQueue = /* @__PURE__ */ new Set([value]) : returnFiber.add(value), attachPingListener(root, value, rootRenderLanes)), false;
              case 22:
                return sourceFiber.flags |= 65536, value === noopSuspenseyCommitThenable ? sourceFiber.flags |= 16384 : (returnFiber = sourceFiber.updateQueue, null === returnFiber ? (returnFiber = {
                  transitions: null,
                  markerInstances: null,
                  retryQueue: /* @__PURE__ */ new Set([value])
                }, sourceFiber.updateQueue = returnFiber) : (sourceFiber = returnFiber.retryQueue, null === sourceFiber ? returnFiber.retryQueue = /* @__PURE__ */ new Set([value]) : sourceFiber.add(value)), attachPingListener(root, value, rootRenderLanes)), false;
            }
            throw Error(
              "Unexpected Suspense handler tag (" + sourceFiber.tag + "). This is a bug in React."
            );
          }
          attachPingListener(root, value, rootRenderLanes);
          renderDidSuspendDelayIfPossible();
          return false;
        }
        if (isHydrating)
          return didSuspendOrErrorDEV = true, returnFiber = suspenseHandlerStackCursor.current, null !== returnFiber ? (0 === (returnFiber.flags & 65536) && (returnFiber.flags |= 256), returnFiber.flags |= 65536, returnFiber.lanes = rootRenderLanes, value !== HydrationMismatchException && queueHydrationError(
            createCapturedValueAtFiber(
              Error(
                "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
                { cause: value }
              ),
              sourceFiber
            )
          )) : (value !== HydrationMismatchException && queueHydrationError(
            createCapturedValueAtFiber(
              Error(
                "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
                { cause: value }
              ),
              sourceFiber
            )
          ), root = root.current.alternate, root.flags |= 65536, rootRenderLanes &= -rootRenderLanes, root.lanes |= rootRenderLanes, value = createCapturedValueAtFiber(value, sourceFiber), rootRenderLanes = createRootErrorUpdate(
            root.stateNode,
            value,
            rootRenderLanes
          ), enqueueCapturedUpdate(root, rootRenderLanes), workInProgressRootExitStatus !== RootSuspendedWithDelay && (workInProgressRootExitStatus = RootErrored)), false;
        var error = createCapturedValueAtFiber(
          Error(
            "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
            { cause: value }
          ),
          sourceFiber
        );
        null === workInProgressRootConcurrentErrors ? workInProgressRootConcurrentErrors = [error] : workInProgressRootConcurrentErrors.push(error);
        workInProgressRootExitStatus !== RootSuspendedWithDelay && (workInProgressRootExitStatus = RootErrored);
        if (null === returnFiber) return true;
        value = createCapturedValueAtFiber(value, sourceFiber);
        sourceFiber = returnFiber;
        do {
          switch (sourceFiber.tag) {
            case 3:
              return sourceFiber.flags |= 65536, root = rootRenderLanes & -rootRenderLanes, sourceFiber.lanes |= root, root = createRootErrorUpdate(
                sourceFiber.stateNode,
                value,
                root
              ), enqueueCapturedUpdate(sourceFiber, root), false;
            case 1:
              if (returnFiber = sourceFiber.type, error = sourceFiber.stateNode, 0 === (sourceFiber.flags & 128) && ("function" === typeof returnFiber.getDerivedStateFromError || null !== error && "function" === typeof error.componentDidCatch && (null === legacyErrorBoundariesThatAlreadyFailed || !legacyErrorBoundariesThatAlreadyFailed.has(error))))
                return sourceFiber.flags |= 65536, rootRenderLanes &= -rootRenderLanes, sourceFiber.lanes |= rootRenderLanes, rootRenderLanes = createClassErrorUpdate(rootRenderLanes), initializeClassErrorUpdate(
                  rootRenderLanes,
                  root,
                  sourceFiber,
                  value
                ), enqueueCapturedUpdate(sourceFiber, rootRenderLanes), false;
          }
          sourceFiber = sourceFiber.return;
        } while (null !== sourceFiber);
        return false;
      }
      function reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2) {
        workInProgress2.child = null === current2 ? mountChildFibers(workInProgress2, null, nextChildren, renderLanes2) : reconcileChildFibers(
          workInProgress2,
          current2.child,
          nextChildren,
          renderLanes2
        );
      }
      function updateForwardRef(current2, workInProgress2, Component3, nextProps, renderLanes2) {
        Component3 = Component3.render;
        var ref = workInProgress2.ref;
        if ("ref" in nextProps) {
          var propsWithoutRef = {};
          for (var key in nextProps)
            "ref" !== key && (propsWithoutRef[key] = nextProps[key]);
        } else propsWithoutRef = nextProps;
        prepareToReadContext(workInProgress2);
        markComponentRenderStarted(workInProgress2);
        nextProps = renderWithHooks(
          current2,
          workInProgress2,
          Component3,
          propsWithoutRef,
          ref,
          renderLanes2
        );
        key = checkDidRenderIdHook();
        markComponentRenderStopped();
        if (null !== current2 && !didReceiveUpdate)
          return bailoutHooks(current2, workInProgress2, renderLanes2), bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
        isHydrating && key && pushMaterializedTreeId(workInProgress2);
        workInProgress2.flags |= 1;
        reconcileChildren(current2, workInProgress2, nextProps, renderLanes2);
        return workInProgress2.child;
      }
      function updateMemoComponent(current2, workInProgress2, Component3, nextProps, renderLanes2) {
        if (null === current2) {
          var type = Component3.type;
          if ("function" === typeof type && !shouldConstruct(type) && void 0 === type.defaultProps && null === Component3.compare)
            return Component3 = resolveFunctionForHotReloading(type), workInProgress2.tag = 15, workInProgress2.type = Component3, validateFunctionComponentInDev(workInProgress2, type), updateSimpleMemoComponent(
              current2,
              workInProgress2,
              Component3,
              nextProps,
              renderLanes2
            );
          current2 = createFiberFromTypeAndProps(
            Component3.type,
            null,
            nextProps,
            workInProgress2,
            workInProgress2.mode,
            renderLanes2
          );
          current2.ref = workInProgress2.ref;
          current2.return = workInProgress2;
          return workInProgress2.child = current2;
        }
        type = current2.child;
        if (!checkScheduledUpdateOrContext(current2, renderLanes2)) {
          var prevProps = type.memoizedProps;
          Component3 = Component3.compare;
          Component3 = null !== Component3 ? Component3 : shallowEqual;
          if (Component3(prevProps, nextProps) && current2.ref === workInProgress2.ref)
            return bailoutOnAlreadyFinishedWork(
              current2,
              workInProgress2,
              renderLanes2
            );
        }
        workInProgress2.flags |= 1;
        current2 = createWorkInProgress(type, nextProps);
        current2.ref = workInProgress2.ref;
        current2.return = workInProgress2;
        return workInProgress2.child = current2;
      }
      function updateSimpleMemoComponent(current2, workInProgress2, Component3, nextProps, renderLanes2) {
        if (null !== current2) {
          var prevProps = current2.memoizedProps;
          if (shallowEqual(prevProps, nextProps) && current2.ref === workInProgress2.ref && workInProgress2.type === current2.type)
            if (didReceiveUpdate = false, workInProgress2.pendingProps = nextProps = prevProps, checkScheduledUpdateOrContext(current2, renderLanes2))
              0 !== (current2.flags & 131072) && (didReceiveUpdate = true);
            else
              return workInProgress2.lanes = current2.lanes, bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
        }
        return updateFunctionComponent(
          current2,
          workInProgress2,
          Component3,
          nextProps,
          renderLanes2
        );
      }
      function updateOffscreenComponent(current2, workInProgress2, renderLanes2) {
        var nextProps = workInProgress2.pendingProps, nextChildren = nextProps.children, nextIsDetached = 0 !== (workInProgress2.stateNode._pendingVisibility & 2), prevState = null !== current2 ? current2.memoizedState : null;
        markRef(current2, workInProgress2);
        if ("hidden" === nextProps.mode || nextIsDetached) {
          if (0 !== (workInProgress2.flags & 128)) {
            nextProps = null !== prevState ? prevState.baseLanes | renderLanes2 : renderLanes2;
            if (null !== current2) {
              nextChildren = workInProgress2.child = current2.child;
              for (nextIsDetached = 0; null !== nextChildren; )
                nextIsDetached = nextIsDetached | nextChildren.lanes | nextChildren.childLanes, nextChildren = nextChildren.sibling;
              workInProgress2.childLanes = nextIsDetached & ~nextProps;
            } else workInProgress2.childLanes = 0, workInProgress2.child = null;
            return deferHiddenOffscreenComponent(
              current2,
              workInProgress2,
              nextProps,
              renderLanes2
            );
          }
          if (0 !== (renderLanes2 & 536870912))
            workInProgress2.memoizedState = { baseLanes: 0, cachePool: null }, null !== current2 && pushTransition(
              workInProgress2,
              null !== prevState ? prevState.cachePool : null
            ), null !== prevState ? pushHiddenContext(workInProgress2, prevState) : reuseHiddenContextOnStack(workInProgress2), pushOffscreenSuspenseHandler(workInProgress2);
          else
            return workInProgress2.lanes = workInProgress2.childLanes = 536870912, deferHiddenOffscreenComponent(
              current2,
              workInProgress2,
              null !== prevState ? prevState.baseLanes | renderLanes2 : renderLanes2,
              renderLanes2
            );
        } else
          null !== prevState ? (pushTransition(workInProgress2, prevState.cachePool), pushHiddenContext(workInProgress2, prevState), reuseSuspenseHandlerOnStack(workInProgress2), workInProgress2.memoizedState = null) : (null !== current2 && pushTransition(workInProgress2, null), reuseHiddenContextOnStack(workInProgress2), reuseSuspenseHandlerOnStack(workInProgress2));
        reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
        return workInProgress2.child;
      }
      function deferHiddenOffscreenComponent(current2, workInProgress2, nextBaseLanes, renderLanes2) {
        var JSCompiler_inline_result = peekCacheFromPool();
        JSCompiler_inline_result = null === JSCompiler_inline_result ? null : {
          parent: isPrimaryRenderer ? CacheContext._currentValue : CacheContext._currentValue2,
          pool: JSCompiler_inline_result
        };
        workInProgress2.memoizedState = {
          baseLanes: nextBaseLanes,
          cachePool: JSCompiler_inline_result
        };
        null !== current2 && pushTransition(workInProgress2, null);
        reuseHiddenContextOnStack(workInProgress2);
        pushOffscreenSuspenseHandler(workInProgress2);
        null !== current2 && propagateParentContextChanges(current2, workInProgress2, renderLanes2, true);
        return null;
      }
      function markRef(current2, workInProgress2) {
        var ref = workInProgress2.ref;
        if (null === ref)
          null !== current2 && null !== current2.ref && (workInProgress2.flags |= 2097664);
        else {
          if ("function" !== typeof ref && "object" !== typeof ref)
            throw Error(
              "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
            );
          if (null === current2 || current2.ref !== ref)
            workInProgress2.flags |= 2097664;
        }
      }
      function updateFunctionComponent(current2, workInProgress2, Component3, nextProps, renderLanes2) {
        if (Component3.prototype && "function" === typeof Component3.prototype.render) {
          var componentName2 = getComponentNameFromType(Component3) || "Unknown";
          didWarnAboutBadClass[componentName2] || (console.error(
            "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
            componentName2,
            componentName2
          ), didWarnAboutBadClass[componentName2] = true);
        }
        workInProgress2.mode & 8 && ReactStrictModeWarnings.recordLegacyContextWarning(
          workInProgress2,
          null
        );
        null === current2 && (validateFunctionComponentInDev(workInProgress2, workInProgress2.type), Component3.contextTypes && (componentName2 = getComponentNameFromType(Component3) || "Unknown", didWarnAboutContextTypes[componentName2] || (didWarnAboutContextTypes[componentName2] = true, console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
          componentName2
        ))));
        prepareToReadContext(workInProgress2);
        markComponentRenderStarted(workInProgress2);
        Component3 = renderWithHooks(
          current2,
          workInProgress2,
          Component3,
          nextProps,
          void 0,
          renderLanes2
        );
        nextProps = checkDidRenderIdHook();
        markComponentRenderStopped();
        if (null !== current2 && !didReceiveUpdate)
          return bailoutHooks(current2, workInProgress2, renderLanes2), bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
        isHydrating && nextProps && pushMaterializedTreeId(workInProgress2);
        workInProgress2.flags |= 1;
        reconcileChildren(current2, workInProgress2, Component3, renderLanes2);
        return workInProgress2.child;
      }
      function replayFunctionComponent(current2, workInProgress2, nextProps, Component3, secondArg, renderLanes2) {
        prepareToReadContext(workInProgress2);
        markComponentRenderStarted(workInProgress2);
        hookTypesUpdateIndexDev = -1;
        ignorePreviousDependencies = null !== current2 && current2.type !== workInProgress2.type;
        workInProgress2.updateQueue = null;
        nextProps = renderWithHooksAgain(
          workInProgress2,
          Component3,
          nextProps,
          secondArg
        );
        finishRenderingHooks(current2, workInProgress2);
        Component3 = checkDidRenderIdHook();
        markComponentRenderStopped();
        if (null !== current2 && !didReceiveUpdate)
          return bailoutHooks(current2, workInProgress2, renderLanes2), bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
        isHydrating && Component3 && pushMaterializedTreeId(workInProgress2);
        workInProgress2.flags |= 1;
        reconcileChildren(current2, workInProgress2, nextProps, renderLanes2);
        return workInProgress2.child;
      }
      function updateClassComponent(current$jscomp$0, workInProgress2, Component3, nextProps, renderLanes2) {
        switch (shouldErrorImpl(workInProgress2)) {
          case false:
            var _instance = workInProgress2.stateNode, state2 = new workInProgress2.type(
              workInProgress2.memoizedProps,
              _instance.context
            ).state;
            _instance.updater.enqueueSetState(_instance, state2, null);
            break;
          case true:
            workInProgress2.flags |= 128;
            workInProgress2.flags |= 65536;
            _instance = Error("Simulated error coming from DevTools");
            var lane = renderLanes2 & -renderLanes2;
            workInProgress2.lanes |= lane;
            state2 = workInProgressRoot;
            if (null === state2)
              throw Error(
                "Expected a work-in-progress root. This is a bug in React. Please file an issue."
              );
            lane = createClassErrorUpdate(lane);
            initializeClassErrorUpdate(
              lane,
              state2,
              workInProgress2,
              createCapturedValueAtFiber(_instance, workInProgress2)
            );
            enqueueCapturedUpdate(workInProgress2, lane);
        }
        prepareToReadContext(workInProgress2);
        if (null === workInProgress2.stateNode) {
          state2 = emptyContextObject;
          _instance = Component3.contextType;
          "contextType" in Component3 && null !== _instance && (void 0 === _instance || _instance.$$typeof !== REACT_CONTEXT_TYPE) && !didWarnAboutInvalidateContextType.has(Component3) && (didWarnAboutInvalidateContextType.add(Component3), lane = void 0 === _instance ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : "object" !== typeof _instance ? " However, it is set to a " + typeof _instance + "." : _instance.$$typeof === REACT_CONSUMER_TYPE ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(_instance).join(", ") + "}.", console.error(
            "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
            getComponentNameFromType(Component3) || "Component",
            lane
          ));
          "object" === typeof _instance && null !== _instance && (state2 = readContext(_instance));
          _instance = new Component3(nextProps, state2);
          if (workInProgress2.mode & 8) {
            setIsStrictModeForDevtools(true);
            try {
              _instance = new Component3(nextProps, state2);
            } finally {
              setIsStrictModeForDevtools(false);
            }
          }
          state2 = workInProgress2.memoizedState = null !== _instance.state && void 0 !== _instance.state ? _instance.state : null;
          _instance.updater = classComponentUpdater;
          workInProgress2.stateNode = _instance;
          _instance._reactInternals = workInProgress2;
          _instance._reactInternalInstance = fakeInternalInstance;
          "function" === typeof Component3.getDerivedStateFromProps && null === state2 && (state2 = getComponentNameFromType(Component3) || "Component", didWarnAboutUninitializedState.has(state2) || (didWarnAboutUninitializedState.add(state2), console.error(
            "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
            state2,
            null === _instance.state ? "null" : "undefined",
            state2
          )));
          if ("function" === typeof Component3.getDerivedStateFromProps || "function" === typeof _instance.getSnapshotBeforeUpdate) {
            var foundWillUpdateName = lane = state2 = null;
            "function" === typeof _instance.componentWillMount && true !== _instance.componentWillMount.__suppressDeprecationWarning ? state2 = "componentWillMount" : "function" === typeof _instance.UNSAFE_componentWillMount && (state2 = "UNSAFE_componentWillMount");
            "function" === typeof _instance.componentWillReceiveProps && true !== _instance.componentWillReceiveProps.__suppressDeprecationWarning ? lane = "componentWillReceiveProps" : "function" === typeof _instance.UNSAFE_componentWillReceiveProps && (lane = "UNSAFE_componentWillReceiveProps");
            "function" === typeof _instance.componentWillUpdate && true !== _instance.componentWillUpdate.__suppressDeprecationWarning ? foundWillUpdateName = "componentWillUpdate" : "function" === typeof _instance.UNSAFE_componentWillUpdate && (foundWillUpdateName = "UNSAFE_componentWillUpdate");
            if (null !== state2 || null !== lane || null !== foundWillUpdateName) {
              _instance = getComponentNameFromType(Component3) || "Component";
              var newApiName = "function" === typeof Component3.getDerivedStateFromProps ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
              didWarnAboutLegacyLifecyclesAndDerivedState.has(_instance) || (didWarnAboutLegacyLifecyclesAndDerivedState.add(_instance), console.error(
                "Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://react.dev/link/unsafe-component-lifecycles",
                _instance,
                newApiName,
                null !== state2 ? "\n  " + state2 : "",
                null !== lane ? "\n  " + lane : "",
                null !== foundWillUpdateName ? "\n  " + foundWillUpdateName : ""
              ));
            }
          }
          _instance = workInProgress2.stateNode;
          state2 = getComponentNameFromType(Component3) || "Component";
          _instance.render || (Component3.prototype && "function" === typeof Component3.prototype.render ? console.error(
            "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
            state2
          ) : console.error(
            "No `render` method found on the %s instance: you may have forgotten to define `render`.",
            state2
          ));
          !_instance.getInitialState || _instance.getInitialState.isReactClassApproved || _instance.state || console.error(
            "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
            state2
          );
          _instance.getDefaultProps && !_instance.getDefaultProps.isReactClassApproved && console.error(
            "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
            state2
          );
          _instance.contextType && console.error(
            "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
            state2
          );
          Component3.childContextTypes && !didWarnAboutChildContextTypes.has(Component3) && (didWarnAboutChildContextTypes.add(Component3), console.error(
            "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
            state2
          ));
          Component3.contextTypes && !didWarnAboutContextTypes$1.has(Component3) && (didWarnAboutContextTypes$1.add(Component3), console.error(
            "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
            state2
          ));
          "function" === typeof _instance.componentShouldUpdate && console.error(
            "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
            state2
          );
          Component3.prototype && Component3.prototype.isPureReactComponent && "undefined" !== typeof _instance.shouldComponentUpdate && console.error(
            "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
            getComponentNameFromType(Component3) || "A pure component"
          );
          "function" === typeof _instance.componentDidUnmount && console.error(
            "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
            state2
          );
          "function" === typeof _instance.componentDidReceiveProps && console.error(
            "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
            state2
          );
          "function" === typeof _instance.componentWillRecieveProps && console.error(
            "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
            state2
          );
          "function" === typeof _instance.UNSAFE_componentWillRecieveProps && console.error(
            "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
            state2
          );
          lane = _instance.props !== nextProps;
          void 0 !== _instance.props && lane && console.error(
            "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
            state2
          );
          _instance.defaultProps && console.error(
            "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
            state2,
            state2
          );
          "function" !== typeof _instance.getSnapshotBeforeUpdate || "function" === typeof _instance.componentDidUpdate || didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(Component3) || (didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(Component3), console.error(
            "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
            getComponentNameFromType(Component3)
          ));
          "function" === typeof _instance.getDerivedStateFromProps && console.error(
            "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
            state2
          );
          "function" === typeof _instance.getDerivedStateFromError && console.error(
            "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
            state2
          );
          "function" === typeof Component3.getSnapshotBeforeUpdate && console.error(
            "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
            state2
          );
          (lane = _instance.state) && ("object" !== typeof lane || isArrayImpl(lane)) && console.error("%s.state: must be set to an object or null", state2);
          "function" === typeof _instance.getChildContext && "object" !== typeof Component3.childContextTypes && console.error(
            "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
            state2
          );
          _instance = workInProgress2.stateNode;
          _instance.props = nextProps;
          _instance.state = workInProgress2.memoizedState;
          _instance.refs = {};
          initializeUpdateQueue(workInProgress2);
          state2 = Component3.contextType;
          _instance.context = "object" === typeof state2 && null !== state2 ? readContext(state2) : emptyContextObject;
          _instance.state === nextProps && (state2 = getComponentNameFromType(Component3) || "Component", didWarnAboutDirectlyAssigningPropsToState.has(state2) || (didWarnAboutDirectlyAssigningPropsToState.add(state2), console.error(
            "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
            state2
          )));
          workInProgress2.mode & 8 && ReactStrictModeWarnings.recordLegacyContextWarning(
            workInProgress2,
            _instance
          );
          ReactStrictModeWarnings.recordUnsafeLifecycleWarnings(
            workInProgress2,
            _instance
          );
          _instance.state = workInProgress2.memoizedState;
          state2 = Component3.getDerivedStateFromProps;
          "function" === typeof state2 && (applyDerivedStateFromProps(
            workInProgress2,
            Component3,
            state2,
            nextProps
          ), _instance.state = workInProgress2.memoizedState);
          "function" === typeof Component3.getDerivedStateFromProps || "function" === typeof _instance.getSnapshotBeforeUpdate || "function" !== typeof _instance.UNSAFE_componentWillMount && "function" !== typeof _instance.componentWillMount || (state2 = _instance.state, "function" === typeof _instance.componentWillMount && _instance.componentWillMount(), "function" === typeof _instance.UNSAFE_componentWillMount && _instance.UNSAFE_componentWillMount(), state2 !== _instance.state && (console.error(
            "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
            getComponentNameFromFiber(workInProgress2) || "Component"
          ), classComponentUpdater.enqueueReplaceState(
            _instance,
            _instance.state,
            null
          )), processUpdateQueue(workInProgress2, nextProps, _instance, renderLanes2), suspendIfUpdateReadFromEntangledAsyncAction(), _instance.state = workInProgress2.memoizedState);
          "function" === typeof _instance.componentDidMount && (workInProgress2.flags |= 4194308);
          (workInProgress2.mode & 16) !== NoMode && (workInProgress2.flags |= 67108864);
          _instance = true;
        } else if (null === current$jscomp$0) {
          _instance = workInProgress2.stateNode;
          var unresolvedOldProps = workInProgress2.memoizedProps;
          lane = resolveClassComponentProps(Component3, unresolvedOldProps);
          _instance.props = lane;
          var oldContext = _instance.context;
          foundWillUpdateName = Component3.contextType;
          state2 = emptyContextObject;
          "object" === typeof foundWillUpdateName && null !== foundWillUpdateName && (state2 = readContext(foundWillUpdateName));
          newApiName = Component3.getDerivedStateFromProps;
          foundWillUpdateName = "function" === typeof newApiName || "function" === typeof _instance.getSnapshotBeforeUpdate;
          unresolvedOldProps = workInProgress2.pendingProps !== unresolvedOldProps;
          foundWillUpdateName || "function" !== typeof _instance.UNSAFE_componentWillReceiveProps && "function" !== typeof _instance.componentWillReceiveProps || (unresolvedOldProps || oldContext !== state2) && callComponentWillReceiveProps(
            workInProgress2,
            _instance,
            nextProps,
            state2
          );
          hasForceUpdate = false;
          var oldState = workInProgress2.memoizedState;
          _instance.state = oldState;
          processUpdateQueue(workInProgress2, nextProps, _instance, renderLanes2);
          suspendIfUpdateReadFromEntangledAsyncAction();
          oldContext = workInProgress2.memoizedState;
          unresolvedOldProps || oldState !== oldContext || hasForceUpdate ? ("function" === typeof newApiName && (applyDerivedStateFromProps(
            workInProgress2,
            Component3,
            newApiName,
            nextProps
          ), oldContext = workInProgress2.memoizedState), (lane = hasForceUpdate || checkShouldComponentUpdate(
            workInProgress2,
            Component3,
            lane,
            nextProps,
            oldState,
            oldContext,
            state2
          )) ? (foundWillUpdateName || "function" !== typeof _instance.UNSAFE_componentWillMount && "function" !== typeof _instance.componentWillMount || ("function" === typeof _instance.componentWillMount && _instance.componentWillMount(), "function" === typeof _instance.UNSAFE_componentWillMount && _instance.UNSAFE_componentWillMount()), "function" === typeof _instance.componentDidMount && (workInProgress2.flags |= 4194308), (workInProgress2.mode & 16) !== NoMode && (workInProgress2.flags |= 67108864)) : ("function" === typeof _instance.componentDidMount && (workInProgress2.flags |= 4194308), (workInProgress2.mode & 16) !== NoMode && (workInProgress2.flags |= 67108864), workInProgress2.memoizedProps = nextProps, workInProgress2.memoizedState = oldContext), _instance.props = nextProps, _instance.state = oldContext, _instance.context = state2, _instance = lane) : ("function" === typeof _instance.componentDidMount && (workInProgress2.flags |= 4194308), (workInProgress2.mode & 16) !== NoMode && (workInProgress2.flags |= 67108864), _instance = false);
        } else {
          _instance = workInProgress2.stateNode;
          cloneUpdateQueue(current$jscomp$0, workInProgress2);
          state2 = workInProgress2.memoizedProps;
          foundWillUpdateName = resolveClassComponentProps(Component3, state2);
          _instance.props = foundWillUpdateName;
          newApiName = workInProgress2.pendingProps;
          oldState = _instance.context;
          oldContext = Component3.contextType;
          lane = emptyContextObject;
          "object" === typeof oldContext && null !== oldContext && (lane = readContext(oldContext));
          unresolvedOldProps = Component3.getDerivedStateFromProps;
          (oldContext = "function" === typeof unresolvedOldProps || "function" === typeof _instance.getSnapshotBeforeUpdate) || "function" !== typeof _instance.UNSAFE_componentWillReceiveProps && "function" !== typeof _instance.componentWillReceiveProps || (state2 !== newApiName || oldState !== lane) && callComponentWillReceiveProps(
            workInProgress2,
            _instance,
            nextProps,
            lane
          );
          hasForceUpdate = false;
          oldState = workInProgress2.memoizedState;
          _instance.state = oldState;
          processUpdateQueue(workInProgress2, nextProps, _instance, renderLanes2);
          suspendIfUpdateReadFromEntangledAsyncAction();
          var newState = workInProgress2.memoizedState;
          state2 !== newApiName || oldState !== newState || hasForceUpdate || null !== current$jscomp$0 && null !== current$jscomp$0.dependencies && checkIfContextChanged(current$jscomp$0.dependencies) ? ("function" === typeof unresolvedOldProps && (applyDerivedStateFromProps(
            workInProgress2,
            Component3,
            unresolvedOldProps,
            nextProps
          ), newState = workInProgress2.memoizedState), (foundWillUpdateName = hasForceUpdate || checkShouldComponentUpdate(
            workInProgress2,
            Component3,
            foundWillUpdateName,
            nextProps,
            oldState,
            newState,
            lane
          ) || null !== current$jscomp$0 && null !== current$jscomp$0.dependencies && checkIfContextChanged(current$jscomp$0.dependencies)) ? (oldContext || "function" !== typeof _instance.UNSAFE_componentWillUpdate && "function" !== typeof _instance.componentWillUpdate || ("function" === typeof _instance.componentWillUpdate && _instance.componentWillUpdate(nextProps, newState, lane), "function" === typeof _instance.UNSAFE_componentWillUpdate && _instance.UNSAFE_componentWillUpdate(
            nextProps,
            newState,
            lane
          )), "function" === typeof _instance.componentDidUpdate && (workInProgress2.flags |= 4), "function" === typeof _instance.getSnapshotBeforeUpdate && (workInProgress2.flags |= 1024)) : ("function" !== typeof _instance.componentDidUpdate || state2 === current$jscomp$0.memoizedProps && oldState === current$jscomp$0.memoizedState || (workInProgress2.flags |= 4), "function" !== typeof _instance.getSnapshotBeforeUpdate || state2 === current$jscomp$0.memoizedProps && oldState === current$jscomp$0.memoizedState || (workInProgress2.flags |= 1024), workInProgress2.memoizedProps = nextProps, workInProgress2.memoizedState = newState), _instance.props = nextProps, _instance.state = newState, _instance.context = lane, _instance = foundWillUpdateName) : ("function" !== typeof _instance.componentDidUpdate || state2 === current$jscomp$0.memoizedProps && oldState === current$jscomp$0.memoizedState || (workInProgress2.flags |= 4), "function" !== typeof _instance.getSnapshotBeforeUpdate || state2 === current$jscomp$0.memoizedProps && oldState === current$jscomp$0.memoizedState || (workInProgress2.flags |= 1024), _instance = false);
        }
        lane = _instance;
        markRef(current$jscomp$0, workInProgress2);
        state2 = 0 !== (workInProgress2.flags & 128);
        if (lane || state2) {
          lane = workInProgress2.stateNode;
          ReactSharedInternals.getCurrentStack = null === workInProgress2 ? null : getCurrentFiberStackInDev;
          isRendering = false;
          current = workInProgress2;
          if (state2 && "function" !== typeof Component3.getDerivedStateFromError)
            Component3 = null, profilerStartTime = -1;
          else {
            markComponentRenderStarted(workInProgress2);
            Component3 = callRenderInDEV(lane);
            if (workInProgress2.mode & 8) {
              setIsStrictModeForDevtools(true);
              try {
                callRenderInDEV(lane);
              } finally {
                setIsStrictModeForDevtools(false);
              }
            }
            markComponentRenderStopped();
          }
          workInProgress2.flags |= 1;
          null !== current$jscomp$0 && state2 ? (workInProgress2.child = reconcileChildFibers(
            workInProgress2,
            current$jscomp$0.child,
            null,
            renderLanes2
          ), workInProgress2.child = reconcileChildFibers(
            workInProgress2,
            null,
            Component3,
            renderLanes2
          )) : reconcileChildren(
            current$jscomp$0,
            workInProgress2,
            Component3,
            renderLanes2
          );
          workInProgress2.memoizedState = lane.state;
          current$jscomp$0 = workInProgress2.child;
        } else
          current$jscomp$0 = bailoutOnAlreadyFinishedWork(
            current$jscomp$0,
            workInProgress2,
            renderLanes2
          );
        renderLanes2 = workInProgress2.stateNode;
        _instance && renderLanes2.props !== nextProps && (didWarnAboutReassigningProps || console.error(
          "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
          getComponentNameFromFiber(workInProgress2) || "a component"
        ), didWarnAboutReassigningProps = true);
        return current$jscomp$0;
      }
      function mountHostRootWithoutHydrating(current2, workInProgress2, nextChildren, renderLanes2) {
        resetHydrationState();
        workInProgress2.flags |= 256;
        reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
        return workInProgress2.child;
      }
      function validateFunctionComponentInDev(workInProgress2, Component3) {
        Component3 && Component3.childContextTypes && console.error(
          "childContextTypes cannot be defined on a function component.\n  %s.childContextTypes = ...",
          Component3.displayName || Component3.name || "Component"
        );
        "function" === typeof Component3.getDerivedStateFromProps && (workInProgress2 = getComponentNameFromType(Component3) || "Unknown", didWarnAboutGetDerivedStateOnFunctionComponent[workInProgress2] || (console.error(
          "%s: Function components do not support getDerivedStateFromProps.",
          workInProgress2
        ), didWarnAboutGetDerivedStateOnFunctionComponent[workInProgress2] = true));
        "object" === typeof Component3.contextType && null !== Component3.contextType && (Component3 = getComponentNameFromType(Component3) || "Unknown", didWarnAboutContextTypeOnFunctionComponent[Component3] || (console.error(
          "%s: Function components do not support contextType.",
          Component3
        ), didWarnAboutContextTypeOnFunctionComponent[Component3] = true));
      }
      function mountSuspenseOffscreenState(renderLanes2) {
        return { baseLanes: renderLanes2, cachePool: getSuspendedCache() };
      }
      function getRemainingWorkInPrimaryTree(current2, primaryTreeDidDefer, renderLanes2) {
        current2 = null !== current2 ? current2.childLanes & ~renderLanes2 : 0;
        primaryTreeDidDefer && (current2 |= workInProgressDeferredLane);
        return current2;
      }
      function updateSuspenseComponent(current2, workInProgress2, renderLanes2) {
        var nextProps = workInProgress2.pendingProps;
        shouldSuspendImpl(workInProgress2) && (workInProgress2.flags |= 128);
        var showFallback = false, didSuspend = 0 !== (workInProgress2.flags & 128), JSCompiler_temp;
        (JSCompiler_temp = didSuspend) || (JSCompiler_temp = null !== current2 && null === current2.memoizedState ? false : 0 !== (suspenseStackCursor.current & ForceSuspenseFallback));
        JSCompiler_temp && (showFallback = true, workInProgress2.flags &= -129);
        JSCompiler_temp = 0 !== (workInProgress2.flags & 32);
        workInProgress2.flags &= -33;
        if (null === current2) {
          if (isHydrating) {
            showFallback ? pushPrimaryTreeSuspenseHandler(workInProgress2) : reuseSuspenseHandlerOnStack(workInProgress2);
            if (isHydrating) {
              var nextInstance = nextHydratableInstance, JSCompiler_temp$jscomp$0;
              (JSCompiler_temp$jscomp$0 = !nextInstance) || (JSCompiler_temp$jscomp$0 = canHydrateSuspenseInstance(
                nextInstance,
                rootOrSingletonContext
              ), null !== JSCompiler_temp$jscomp$0 ? (warnIfNotHydrating(), workInProgress2.memoizedState = {
                dehydrated: JSCompiler_temp$jscomp$0,
                treeContext: null !== treeContextProvider ? { id: treeContextId, overflow: treeContextOverflow } : null,
                retryLane: 536870912
              }, didSuspend = createFiber(18, null, null, NoMode), didSuspend.stateNode = JSCompiler_temp$jscomp$0, didSuspend.return = workInProgress2, workInProgress2.child = didSuspend, hydrationParentFiber = workInProgress2, nextHydratableInstance = null, JSCompiler_temp$jscomp$0 = true) : JSCompiler_temp$jscomp$0 = false, JSCompiler_temp$jscomp$0 = !JSCompiler_temp$jscomp$0);
              JSCompiler_temp$jscomp$0 && (warnNonHydratedInstance(workInProgress2, nextInstance), throwOnHydrationMismatch(workInProgress2));
            }
            nextInstance = workInProgress2.memoizedState;
            if (null !== nextInstance && (nextInstance = nextInstance.dehydrated, null !== nextInstance))
              return isSuspenseInstanceFallback(nextInstance) ? workInProgress2.lanes = 16 : workInProgress2.lanes = 536870912, null;
            popSuspenseHandler(workInProgress2);
          }
          nextInstance = nextProps.children;
          nextProps = nextProps.fallback;
          if (showFallback)
            return reuseSuspenseHandlerOnStack(workInProgress2), showFallback = workInProgress2.mode, nextInstance = mountWorkInProgressOffscreenFiber(
              { mode: "hidden", children: nextInstance },
              showFallback
            ), nextProps = createFiberFromFragment(
              nextProps,
              showFallback,
              renderLanes2,
              null
            ), nextInstance.return = workInProgress2, nextProps.return = workInProgress2, nextInstance.sibling = nextProps, workInProgress2.child = nextInstance, showFallback = workInProgress2.child, showFallback.memoizedState = mountSuspenseOffscreenState(renderLanes2), showFallback.childLanes = getRemainingWorkInPrimaryTree(
              current2,
              JSCompiler_temp,
              renderLanes2
            ), workInProgress2.memoizedState = SUSPENDED_MARKER, nextProps;
          pushPrimaryTreeSuspenseHandler(workInProgress2);
          return mountSuspensePrimaryChildren(workInProgress2, nextInstance);
        }
        JSCompiler_temp$jscomp$0 = current2.memoizedState;
        if (null !== JSCompiler_temp$jscomp$0 && (nextInstance = JSCompiler_temp$jscomp$0.dehydrated, null !== nextInstance)) {
          if (didSuspend)
            workInProgress2.flags & 256 ? (pushPrimaryTreeSuspenseHandler(workInProgress2), workInProgress2.flags &= -257, workInProgress2 = retrySuspenseComponentWithoutHydrating(
              current2,
              workInProgress2,
              renderLanes2
            )) : null !== workInProgress2.memoizedState ? (reuseSuspenseHandlerOnStack(workInProgress2), workInProgress2.child = current2.child, workInProgress2.flags |= 128, workInProgress2 = null) : (reuseSuspenseHandlerOnStack(workInProgress2), showFallback = nextProps.fallback, nextInstance = workInProgress2.mode, nextProps = mountWorkInProgressOffscreenFiber(
              { mode: "visible", children: nextProps.children },
              nextInstance
            ), showFallback = createFiberFromFragment(
              showFallback,
              nextInstance,
              renderLanes2,
              null
            ), showFallback.flags |= 2, nextProps.return = workInProgress2, showFallback.return = workInProgress2, nextProps.sibling = showFallback, workInProgress2.child = nextProps, reconcileChildFibers(
              workInProgress2,
              current2.child,
              null,
              renderLanes2
            ), nextProps = workInProgress2.child, nextProps.memoizedState = mountSuspenseOffscreenState(renderLanes2), nextProps.childLanes = getRemainingWorkInPrimaryTree(
              current2,
              JSCompiler_temp,
              renderLanes2
            ), workInProgress2.memoizedState = SUSPENDED_MARKER, workInProgress2 = showFallback);
          else if (pushPrimaryTreeSuspenseHandler(workInProgress2), isHydrating && console.error(
            "We should not be hydrating here. This is a bug in React. Please file a bug."
          ), isSuspenseInstanceFallback(nextInstance))
            nextInstance = getSuspenseInstanceFallbackErrorDetails(nextInstance), JSCompiler_temp = nextInstance.digest, showFallback = nextInstance.message, nextProps = nextInstance.stack, nextInstance = nextInstance.componentStack, showFallback = showFallback ? Error(showFallback) : Error(
              "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."
            ), showFallback.stack = nextProps || "", showFallback.digest = JSCompiler_temp, JSCompiler_temp = void 0 === nextInstance ? null : nextInstance, nextProps = {
              value: showFallback,
              source: null,
              stack: JSCompiler_temp
            }, "string" === typeof JSCompiler_temp && CapturedStacks.set(showFallback, nextProps), queueHydrationError(nextProps), workInProgress2 = retrySuspenseComponentWithoutHydrating(
              current2,
              workInProgress2,
              renderLanes2
            );
          else if (didReceiveUpdate || propagateParentContextChanges(
            current2,
            workInProgress2,
            renderLanes2,
            false
          ), JSCompiler_temp = 0 !== (renderLanes2 & current2.childLanes), didReceiveUpdate || JSCompiler_temp) {
            JSCompiler_temp = workInProgressRoot;
            if (null !== JSCompiler_temp) {
              nextProps = renderLanes2 & -renderLanes2;
              if (0 !== (nextProps & 42)) nextProps = 1;
              else
                switch (nextProps) {
                  case 2:
                    nextProps = 1;
                    break;
                  case 8:
                    nextProps = 4;
                    break;
                  case 32:
                    nextProps = 16;
                    break;
                  case 128:
                  case 256:
                  case 512:
                  case 1024:
                  case 2048:
                  case 4096:
                  case 8192:
                  case 16384:
                  case 32768:
                  case 65536:
                  case 131072:
                  case 262144:
                  case 524288:
                  case 1048576:
                  case 2097152:
                  case 4194304:
                  case 8388608:
                  case 16777216:
                  case 33554432:
                    nextProps = 64;
                    break;
                  case 268435456:
                    nextProps = 134217728;
                    break;
                  default:
                    nextProps = 0;
                }
              nextProps = 0 !== (nextProps & (JSCompiler_temp.suspendedLanes | renderLanes2)) ? 0 : nextProps;
              if (0 !== nextProps && nextProps !== JSCompiler_temp$jscomp$0.retryLane)
                throw JSCompiler_temp$jscomp$0.retryLane = nextProps, enqueueConcurrentRenderForLane(current2, nextProps), scheduleUpdateOnFiber(JSCompiler_temp, current2, nextProps), SelectiveHydrationException;
            }
            isSuspenseInstancePending(nextInstance) || renderDidSuspendDelayIfPossible();
            workInProgress2 = retrySuspenseComponentWithoutHydrating(
              current2,
              workInProgress2,
              renderLanes2
            );
          } else
            isSuspenseInstancePending(nextInstance) ? (workInProgress2.flags |= 128, workInProgress2.child = current2.child, workInProgress2 = retryDehydratedSuspenseBoundary.bind(
              null,
              current2
            ), registerSuspenseInstanceRetry(nextInstance, workInProgress2), workInProgress2 = null) : (current2 = JSCompiler_temp$jscomp$0.treeContext, supportsHydration && (nextHydratableInstance = getFirstHydratableChildWithinSuspenseInstance(nextInstance), hydrationParentFiber = workInProgress2, isHydrating = true, hydrationErrors = null, didSuspendOrErrorDEV = false, hydrationDiffRootDEV = null, rootOrSingletonContext = false, null !== current2 && (warnIfNotHydrating(), idStack[idStackIndex++] = treeContextId, idStack[idStackIndex++] = treeContextOverflow, idStack[idStackIndex++] = treeContextProvider, treeContextId = current2.id, treeContextOverflow = current2.overflow, treeContextProvider = workInProgress2)), workInProgress2 = mountSuspensePrimaryChildren(
              workInProgress2,
              nextProps.children
            ), workInProgress2.flags |= 4096);
          return workInProgress2;
        }
        if (showFallback)
          return reuseSuspenseHandlerOnStack(workInProgress2), showFallback = nextProps.fallback, nextInstance = workInProgress2.mode, JSCompiler_temp$jscomp$0 = current2.child, didSuspend = JSCompiler_temp$jscomp$0.sibling, nextProps = createWorkInProgress(JSCompiler_temp$jscomp$0, {
            mode: "hidden",
            children: nextProps.children
          }), nextProps.subtreeFlags = JSCompiler_temp$jscomp$0.subtreeFlags & 31457280, null !== didSuspend ? showFallback = createWorkInProgress(didSuspend, showFallback) : (showFallback = createFiberFromFragment(
            showFallback,
            nextInstance,
            renderLanes2,
            null
          ), showFallback.flags |= 2), showFallback.return = workInProgress2, nextProps.return = workInProgress2, nextProps.sibling = showFallback, workInProgress2.child = nextProps, nextProps = showFallback, showFallback = workInProgress2.child, nextInstance = current2.child.memoizedState, null === nextInstance ? nextInstance = mountSuspenseOffscreenState(renderLanes2) : (JSCompiler_temp$jscomp$0 = nextInstance.cachePool, null !== JSCompiler_temp$jscomp$0 ? (didSuspend = isPrimaryRenderer ? CacheContext._currentValue : CacheContext._currentValue2, JSCompiler_temp$jscomp$0 = JSCompiler_temp$jscomp$0.parent !== didSuspend ? { parent: didSuspend, pool: didSuspend } : JSCompiler_temp$jscomp$0) : JSCompiler_temp$jscomp$0 = getSuspendedCache(), nextInstance = {
            baseLanes: nextInstance.baseLanes | renderLanes2,
            cachePool: JSCompiler_temp$jscomp$0
          }), showFallback.memoizedState = nextInstance, showFallback.childLanes = getRemainingWorkInPrimaryTree(
            current2,
            JSCompiler_temp,
            renderLanes2
          ), workInProgress2.memoizedState = SUSPENDED_MARKER, nextProps;
        pushPrimaryTreeSuspenseHandler(workInProgress2);
        renderLanes2 = current2.child;
        current2 = renderLanes2.sibling;
        renderLanes2 = createWorkInProgress(renderLanes2, {
          mode: "visible",
          children: nextProps.children
        });
        renderLanes2.return = workInProgress2;
        renderLanes2.sibling = null;
        null !== current2 && (JSCompiler_temp = workInProgress2.deletions, null === JSCompiler_temp ? (workInProgress2.deletions = [current2], workInProgress2.flags |= 16) : JSCompiler_temp.push(current2));
        workInProgress2.child = renderLanes2;
        workInProgress2.memoizedState = null;
        return renderLanes2;
      }
      function mountSuspensePrimaryChildren(workInProgress2, primaryChildren) {
        primaryChildren = mountWorkInProgressOffscreenFiber(
          { mode: "visible", children: primaryChildren },
          workInProgress2.mode
        );
        primaryChildren.return = workInProgress2;
        return workInProgress2.child = primaryChildren;
      }
      function mountWorkInProgressOffscreenFiber(offscreenProps, mode) {
        return createFiberFromOffscreen(offscreenProps, mode, 0, null);
      }
      function retrySuspenseComponentWithoutHydrating(current2, workInProgress2, renderLanes2) {
        reconcileChildFibers(workInProgress2, current2.child, null, renderLanes2);
        current2 = mountSuspensePrimaryChildren(
          workInProgress2,
          workInProgress2.pendingProps.children
        );
        current2.flags |= 2;
        workInProgress2.memoizedState = null;
        return current2;
      }
      function scheduleSuspenseWorkOnFiber(fiber, renderLanes2, propagationRoot) {
        fiber.lanes |= renderLanes2;
        var alternate = fiber.alternate;
        null !== alternate && (alternate.lanes |= renderLanes2);
        scheduleContextWorkOnParentPath(
          fiber.return,
          renderLanes2,
          propagationRoot
        );
      }
      function validateSuspenseListNestedChild(childSlot, index) {
        var isAnArray = isArrayImpl(childSlot);
        childSlot = !isAnArray && "function" === typeof getIteratorFn(childSlot);
        return isAnArray || childSlot ? (isAnArray = isAnArray ? "array" : "iterable", console.error(
          "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
          isAnArray,
          index,
          isAnArray
        ), false) : true;
      }
      function initSuspenseListRenderState(workInProgress2, isBackwards, tail, lastContentRow, tailMode) {
        var renderState = workInProgress2.memoizedState;
        null === renderState ? workInProgress2.memoizedState = {
          isBackwards,
          rendering: null,
          renderingStartTime: 0,
          last: lastContentRow,
          tail,
          tailMode
        } : (renderState.isBackwards = isBackwards, renderState.rendering = null, renderState.renderingStartTime = 0, renderState.last = lastContentRow, renderState.tail = tail, renderState.tailMode = tailMode);
      }
      function updateSuspenseListComponent(current2, workInProgress2, renderLanes2) {
        var nextProps = workInProgress2.pendingProps, revealOrder = nextProps.revealOrder, tailMode = nextProps.tail;
        nextProps = nextProps.children;
        if (void 0 !== revealOrder && "forwards" !== revealOrder && "backwards" !== revealOrder && "together" !== revealOrder && !didWarnAboutRevealOrder[revealOrder])
          if (didWarnAboutRevealOrder[revealOrder] = true, "string" === typeof revealOrder)
            switch (revealOrder.toLowerCase()) {
              case "together":
              case "forwards":
              case "backwards":
                console.error(
                  '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                  revealOrder,
                  revealOrder.toLowerCase()
                );
                break;
              case "forward":
              case "backward":
                console.error(
                  '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                  revealOrder,
                  revealOrder.toLowerCase()
                );
                break;
              default:
                console.error(
                  '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
                  revealOrder
                );
            }
          else
            console.error(
              '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
              revealOrder
            );
        void 0 === tailMode || didWarnAboutTailOptions[tailMode] || ("collapsed" !== tailMode && "hidden" !== tailMode ? (didWarnAboutTailOptions[tailMode] = true, console.error(
          '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
          tailMode
        )) : "forwards" !== revealOrder && "backwards" !== revealOrder && (didWarnAboutTailOptions[tailMode] = true, console.error(
          '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
          tailMode
        )));
        a: if (("forwards" === revealOrder || "backwards" === revealOrder) && void 0 !== nextProps && null !== nextProps && false !== nextProps)
          if (isArrayImpl(nextProps))
            for (var i3 = 0; i3 < nextProps.length; i3++) {
              if (!validateSuspenseListNestedChild(nextProps[i3], i3)) break a;
            }
          else if (i3 = getIteratorFn(nextProps), "function" === typeof i3) {
            if (i3 = i3.call(nextProps))
              for (var step = i3.next(), _i = 0; !step.done; step = i3.next()) {
                if (!validateSuspenseListNestedChild(step.value, _i)) break a;
                _i++;
              }
          } else
            console.error(
              'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
              revealOrder
            );
        reconcileChildren(current2, workInProgress2, nextProps, renderLanes2);
        nextProps = suspenseStackCursor.current;
        if (0 !== (nextProps & ForceSuspenseFallback))
          nextProps = nextProps & SubtreeSuspenseContextMask | ForceSuspenseFallback, workInProgress2.flags |= 128;
        else {
          if (null !== current2 && 0 !== (current2.flags & 128))
            a: for (current2 = workInProgress2.child; null !== current2; ) {
              if (13 === current2.tag)
                null !== current2.memoizedState && scheduleSuspenseWorkOnFiber(
                  current2,
                  renderLanes2,
                  workInProgress2
                );
              else if (19 === current2.tag)
                scheduleSuspenseWorkOnFiber(current2, renderLanes2, workInProgress2);
              else if (null !== current2.child) {
                current2.child.return = current2;
                current2 = current2.child;
                continue;
              }
              if (current2 === workInProgress2) break a;
              for (; null === current2.sibling; ) {
                if (null === current2.return || current2.return === workInProgress2)
                  break a;
                current2 = current2.return;
              }
              current2.sibling.return = current2.return;
              current2 = current2.sibling;
            }
          nextProps &= SubtreeSuspenseContextMask;
        }
        push(suspenseStackCursor, nextProps, workInProgress2);
        switch (revealOrder) {
          case "forwards":
            renderLanes2 = workInProgress2.child;
            for (revealOrder = null; null !== renderLanes2; )
              current2 = renderLanes2.alternate, null !== current2 && null === findFirstSuspended(current2) && (revealOrder = renderLanes2), renderLanes2 = renderLanes2.sibling;
            renderLanes2 = revealOrder;
            null === renderLanes2 ? (revealOrder = workInProgress2.child, workInProgress2.child = null) : (revealOrder = renderLanes2.sibling, renderLanes2.sibling = null);
            initSuspenseListRenderState(
              workInProgress2,
              false,
              revealOrder,
              renderLanes2,
              tailMode
            );
            break;
          case "backwards":
            renderLanes2 = null;
            revealOrder = workInProgress2.child;
            for (workInProgress2.child = null; null !== revealOrder; ) {
              current2 = revealOrder.alternate;
              if (null !== current2 && null === findFirstSuspended(current2)) {
                workInProgress2.child = revealOrder;
                break;
              }
              current2 = revealOrder.sibling;
              revealOrder.sibling = renderLanes2;
              renderLanes2 = revealOrder;
              revealOrder = current2;
            }
            initSuspenseListRenderState(
              workInProgress2,
              true,
              renderLanes2,
              null,
              tailMode
            );
            break;
          case "together":
            initSuspenseListRenderState(workInProgress2, false, null, null, void 0);
            break;
          default:
            workInProgress2.memoizedState = null;
        }
        return workInProgress2.child;
      }
      function bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2) {
        null !== current2 && (workInProgress2.dependencies = current2.dependencies);
        profilerStartTime = -1;
        workInProgressRootSkippedLanes |= workInProgress2.lanes;
        if (0 === (renderLanes2 & workInProgress2.childLanes))
          if (null !== current2) {
            if (propagateParentContextChanges(
              current2,
              workInProgress2,
              renderLanes2,
              false
            ), 0 === (renderLanes2 & workInProgress2.childLanes))
              return null;
          } else return null;
        if (null !== current2 && workInProgress2.child !== current2.child)
          throw Error("Resuming work not yet implemented.");
        if (null !== workInProgress2.child) {
          current2 = workInProgress2.child;
          renderLanes2 = createWorkInProgress(current2, current2.pendingProps);
          workInProgress2.child = renderLanes2;
          for (renderLanes2.return = workInProgress2; null !== current2.sibling; )
            current2 = current2.sibling, renderLanes2 = renderLanes2.sibling = createWorkInProgress(current2, current2.pendingProps), renderLanes2.return = workInProgress2;
          renderLanes2.sibling = null;
        }
        return workInProgress2.child;
      }
      function checkScheduledUpdateOrContext(current2, renderLanes2) {
        if (0 !== (current2.lanes & renderLanes2)) return true;
        current2 = current2.dependencies;
        return null !== current2 && checkIfContextChanged(current2) ? true : false;
      }
      function attemptEarlyBailoutIfNoScheduledUpdate(current2, workInProgress2, renderLanes2) {
        switch (workInProgress2.tag) {
          case 3:
            pushHostContainer(
              workInProgress2,
              workInProgress2.stateNode.containerInfo
            );
            pushProvider(
              workInProgress2,
              CacheContext,
              current2.memoizedState.cache
            );
            resetHydrationState();
            break;
          case 27:
          case 5:
            pushHostContext(workInProgress2);
            break;
          case 4:
            pushHostContainer(
              workInProgress2,
              workInProgress2.stateNode.containerInfo
            );
            break;
          case 10:
            pushProvider(
              workInProgress2,
              workInProgress2.type,
              workInProgress2.memoizedProps.value
            );
            break;
          case 12:
            0 !== (renderLanes2 & workInProgress2.childLanes) && (workInProgress2.flags |= 4);
            workInProgress2.flags |= 2048;
            var stateNode = workInProgress2.stateNode;
            stateNode.effectDuration = -0;
            stateNode.passiveEffectDuration = -0;
            break;
          case 13:
            stateNode = workInProgress2.memoizedState;
            if (null !== stateNode) {
              if (null !== stateNode.dehydrated)
                return pushPrimaryTreeSuspenseHandler(workInProgress2), workInProgress2.flags |= 128, null;
              if (0 !== (renderLanes2 & workInProgress2.child.childLanes))
                return updateSuspenseComponent(
                  current2,
                  workInProgress2,
                  renderLanes2
                );
              pushPrimaryTreeSuspenseHandler(workInProgress2);
              current2 = bailoutOnAlreadyFinishedWork(
                current2,
                workInProgress2,
                renderLanes2
              );
              return null !== current2 ? current2.sibling : null;
            }
            pushPrimaryTreeSuspenseHandler(workInProgress2);
            break;
          case 19:
            var didSuspendBefore = 0 !== (current2.flags & 128);
            stateNode = 0 !== (renderLanes2 & workInProgress2.childLanes);
            stateNode || (propagateParentContextChanges(
              current2,
              workInProgress2,
              renderLanes2,
              false
            ), stateNode = 0 !== (renderLanes2 & workInProgress2.childLanes));
            if (didSuspendBefore) {
              if (stateNode)
                return updateSuspenseListComponent(
                  current2,
                  workInProgress2,
                  renderLanes2
                );
              workInProgress2.flags |= 128;
            }
            didSuspendBefore = workInProgress2.memoizedState;
            null !== didSuspendBefore && (didSuspendBefore.rendering = null, didSuspendBefore.tail = null, didSuspendBefore.lastEffect = null);
            push(
              suspenseStackCursor,
              suspenseStackCursor.current,
              workInProgress2
            );
            if (stateNode) break;
            else return null;
          case 22:
          case 23:
            return workInProgress2.lanes = 0, updateOffscreenComponent(current2, workInProgress2, renderLanes2);
          case 24:
            pushProvider(
              workInProgress2,
              CacheContext,
              current2.memoizedState.cache
            );
        }
        return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
      }
      function beginWork(current2, workInProgress2, renderLanes2) {
        if (workInProgress2._debugNeedsRemount && null !== current2) {
          renderLanes2 = createFiberFromTypeAndProps(
            workInProgress2.type,
            workInProgress2.key,
            workInProgress2.pendingProps,
            workInProgress2._debugOwner || null,
            workInProgress2.mode,
            workInProgress2.lanes
          );
          var returnFiber = workInProgress2.return;
          if (null === returnFiber) throw Error("Cannot swap the root fiber.");
          current2.alternate = null;
          workInProgress2.alternate = null;
          renderLanes2.index = workInProgress2.index;
          renderLanes2.sibling = workInProgress2.sibling;
          renderLanes2.return = workInProgress2.return;
          renderLanes2.ref = workInProgress2.ref;
          renderLanes2._debugInfo = workInProgress2._debugInfo;
          if (workInProgress2 === returnFiber.child)
            returnFiber.child = renderLanes2;
          else {
            var prevSibling = returnFiber.child;
            if (null === prevSibling)
              throw Error("Expected parent to have a child.");
            for (; prevSibling.sibling !== workInProgress2; )
              if (prevSibling = prevSibling.sibling, null === prevSibling)
                throw Error("Expected to find the previous sibling.");
            prevSibling.sibling = renderLanes2;
          }
          workInProgress2 = returnFiber.deletions;
          null === workInProgress2 ? (returnFiber.deletions = [current2], returnFiber.flags |= 16) : workInProgress2.push(current2);
          renderLanes2.flags |= 2;
          return renderLanes2;
        }
        if (null !== current2)
          if (current2.memoizedProps !== workInProgress2.pendingProps || workInProgress2.type !== current2.type)
            didReceiveUpdate = true;
          else {
            if (!checkScheduledUpdateOrContext(current2, renderLanes2) && 0 === (workInProgress2.flags & 128))
              return didReceiveUpdate = false, attemptEarlyBailoutIfNoScheduledUpdate(
                current2,
                workInProgress2,
                renderLanes2
              );
            didReceiveUpdate = 0 !== (current2.flags & 131072) ? true : false;
          }
        else {
          didReceiveUpdate = false;
          if (returnFiber = isHydrating)
            warnIfNotHydrating(), returnFiber = 0 !== (workInProgress2.flags & 1048576);
          returnFiber && (returnFiber = workInProgress2.index, warnIfNotHydrating(), pushTreeId(workInProgress2, treeForkCount, returnFiber));
        }
        workInProgress2.lanes = 0;
        switch (workInProgress2.tag) {
          case 16:
            a: if (returnFiber = workInProgress2.pendingProps, current2 = callLazyInitInDEV(workInProgress2.elementType), workInProgress2.type = current2, "function" === typeof current2)
              shouldConstruct(current2) ? (returnFiber = resolveClassComponentProps(
                current2,
                returnFiber
              ), workInProgress2.tag = 1, workInProgress2.type = current2 = resolveFunctionForHotReloading(current2), workInProgress2 = updateClassComponent(
                null,
                workInProgress2,
                current2,
                returnFiber,
                renderLanes2
              )) : (workInProgress2.tag = 0, validateFunctionComponentInDev(workInProgress2, current2), workInProgress2.type = current2 = resolveFunctionForHotReloading(current2), workInProgress2 = updateFunctionComponent(
                null,
                workInProgress2,
                current2,
                returnFiber,
                renderLanes2
              ));
            else {
              if (void 0 !== current2 && null !== current2) {
                if (prevSibling = current2.$$typeof, prevSibling === REACT_FORWARD_REF_TYPE) {
                  workInProgress2.tag = 11;
                  workInProgress2.type = current2 = resolveForwardRefForHotReloading(current2);
                  workInProgress2 = updateForwardRef(
                    null,
                    workInProgress2,
                    current2,
                    returnFiber,
                    renderLanes2
                  );
                  break a;
                } else if (prevSibling === REACT_MEMO_TYPE) {
                  workInProgress2.tag = 14;
                  workInProgress2 = updateMemoComponent(
                    null,
                    workInProgress2,
                    current2,
                    returnFiber,
                    renderLanes2
                  );
                  break a;
                }
              }
              workInProgress2 = "";
              null !== current2 && "object" === typeof current2 && current2.$$typeof === REACT_LAZY_TYPE && (workInProgress2 = " Did you wrap a component in React.lazy() more than once?");
              current2 = getComponentNameFromType(current2) || current2;
              throw Error(
                "Element type is invalid. Received a promise that resolves to: " + current2 + ". Lazy element type must resolve to a class or function." + workInProgress2
              );
            }
            return workInProgress2;
          case 0:
            return updateFunctionComponent(
              current2,
              workInProgress2,
              workInProgress2.type,
              workInProgress2.pendingProps,
              renderLanes2
            );
          case 1:
            return returnFiber = workInProgress2.type, prevSibling = resolveClassComponentProps(
              returnFiber,
              workInProgress2.pendingProps
            ), updateClassComponent(
              current2,
              workInProgress2,
              returnFiber,
              prevSibling,
              renderLanes2
            );
          case 3:
            a: {
              pushHostContainer(
                workInProgress2,
                workInProgress2.stateNode.containerInfo
              );
              if (null === current2)
                throw Error(
                  "Should have a current fiber. This is a bug in React."
                );
              var nextProps = workInProgress2.pendingProps;
              prevSibling = workInProgress2.memoizedState;
              returnFiber = prevSibling.element;
              cloneUpdateQueue(current2, workInProgress2);
              processUpdateQueue(workInProgress2, nextProps, null, renderLanes2);
              var nextState = workInProgress2.memoizedState;
              nextProps = nextState.cache;
              pushProvider(workInProgress2, CacheContext, nextProps);
              nextProps !== prevSibling.cache && propagateContextChanges(
                workInProgress2,
                [CacheContext],
                renderLanes2,
                true
              );
              suspendIfUpdateReadFromEntangledAsyncAction();
              nextProps = nextState.element;
              if (supportsHydration && prevSibling.isDehydrated)
                if (prevSibling = {
                  element: nextProps,
                  isDehydrated: false,
                  cache: nextState.cache
                }, workInProgress2.updateQueue.baseState = prevSibling, workInProgress2.memoizedState = prevSibling, workInProgress2.flags & 256) {
                  workInProgress2 = mountHostRootWithoutHydrating(
                    current2,
                    workInProgress2,
                    nextProps,
                    renderLanes2
                  );
                  break a;
                } else if (nextProps !== returnFiber) {
                  returnFiber = createCapturedValueAtFiber(
                    Error(
                      "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                    ),
                    workInProgress2
                  );
                  queueHydrationError(returnFiber);
                  workInProgress2 = mountHostRootWithoutHydrating(
                    current2,
                    workInProgress2,
                    nextProps,
                    renderLanes2
                  );
                  break a;
                } else
                  for (supportsHydration && (nextHydratableInstance = getFirstHydratableChildWithinContainer(
                    workInProgress2.stateNode.containerInfo
                  ), hydrationParentFiber = workInProgress2, isHydrating = true, hydrationErrors = null, didSuspendOrErrorDEV = false, hydrationDiffRootDEV = null, rootOrSingletonContext = true), current2 = mountChildFibers(
                    workInProgress2,
                    null,
                    nextProps,
                    renderLanes2
                  ), workInProgress2.child = current2; current2; )
                    current2.flags = current2.flags & -3 | 4096, current2 = current2.sibling;
              else {
                resetHydrationState();
                if (nextProps === returnFiber) {
                  workInProgress2 = bailoutOnAlreadyFinishedWork(
                    current2,
                    workInProgress2,
                    renderLanes2
                  );
                  break a;
                }
                reconcileChildren(
                  current2,
                  workInProgress2,
                  nextProps,
                  renderLanes2
                );
              }
              workInProgress2 = workInProgress2.child;
            }
            return workInProgress2;
          case 26:
            if (supportsResources)
              return markRef(current2, workInProgress2), null === current2 ? (current2 = getResource(
                workInProgress2.type,
                null,
                workInProgress2.pendingProps,
                null
              )) ? workInProgress2.memoizedState = current2 : isHydrating || (workInProgress2.stateNode = createHoistableInstance(
                workInProgress2.type,
                workInProgress2.pendingProps,
                requiredContext(rootInstanceStackCursor.current),
                workInProgress2
              )) : workInProgress2.memoizedState = getResource(
                workInProgress2.type,
                current2.memoizedProps,
                workInProgress2.pendingProps,
                current2.memoizedState
              ), null;
          case 27:
            if (supportsSingletons)
              return pushHostContext(workInProgress2), null === current2 && supportsSingletons && isHydrating && (prevSibling = requiredContext(
                rootInstanceStackCursor.current
              ), returnFiber = getHostContext(), prevSibling = workInProgress2.stateNode = resolveSingletonInstance(
                workInProgress2.type,
                workInProgress2.pendingProps,
                prevSibling,
                returnFiber,
                false
              ), didSuspendOrErrorDEV || (returnFiber = diffHydratedPropsForDevWarnings(
                prevSibling,
                workInProgress2.type,
                workInProgress2.pendingProps,
                returnFiber
              ), null !== returnFiber && (buildHydrationDiffNode(workInProgress2, 0).serverProps = returnFiber)), hydrationParentFiber = workInProgress2, rootOrSingletonContext = true, nextHydratableInstance = getFirstHydratableChild(prevSibling)), returnFiber = workInProgress2.pendingProps.children, null !== current2 || isHydrating ? reconcileChildren(
                current2,
                workInProgress2,
                returnFiber,
                renderLanes2
              ) : workInProgress2.child = reconcileChildFibers(
                workInProgress2,
                null,
                returnFiber,
                renderLanes2
              ), markRef(current2, workInProgress2), workInProgress2.child;
          case 5:
            return null === current2 && isHydrating && (nextProps = getHostContext(), returnFiber = validateHydratableInstance(
              workInProgress2.type,
              workInProgress2.pendingProps,
              nextProps
            ), prevSibling = nextHydratableInstance, (nextState = !prevSibling) || (nextState = canHydrateInstance(
              prevSibling,
              workInProgress2.type,
              workInProgress2.pendingProps,
              rootOrSingletonContext
            ), null !== nextState ? (workInProgress2.stateNode = nextState, didSuspendOrErrorDEV || (nextProps = diffHydratedPropsForDevWarnings(
              nextState,
              workInProgress2.type,
              workInProgress2.pendingProps,
              nextProps
            ), null !== nextProps && (buildHydrationDiffNode(workInProgress2, 0).serverProps = nextProps)), hydrationParentFiber = workInProgress2, nextHydratableInstance = getFirstHydratableChild(nextState), rootOrSingletonContext = false, nextProps = true) : nextProps = false, nextState = !nextProps), nextState && (returnFiber && warnNonHydratedInstance(workInProgress2, prevSibling), throwOnHydrationMismatch(workInProgress2))), pushHostContext(workInProgress2), prevSibling = workInProgress2.type, nextProps = workInProgress2.pendingProps, nextState = null !== current2 ? current2.memoizedProps : null, returnFiber = nextProps.children, shouldSetTextContent(prevSibling, nextProps) ? returnFiber = null : null !== nextState && shouldSetTextContent(prevSibling, nextState) && (workInProgress2.flags |= 32), null !== workInProgress2.memoizedState && (prevSibling = renderWithHooks(
              current2,
              workInProgress2,
              TransitionAwareHostComponent,
              null,
              null,
              renderLanes2
            ), isPrimaryRenderer ? HostTransitionContext._currentValue = prevSibling : HostTransitionContext._currentValue2 = prevSibling), markRef(current2, workInProgress2), reconcileChildren(
              current2,
              workInProgress2,
              returnFiber,
              renderLanes2
            ), workInProgress2.child;
          case 6:
            return null === current2 && isHydrating && (current2 = workInProgress2.pendingProps, renderLanes2 = getHostContext(), current2 = validateHydratableTextInstance(current2, renderLanes2), renderLanes2 = nextHydratableInstance, (returnFiber = !renderLanes2) || (returnFiber = canHydrateTextInstance(
              renderLanes2,
              workInProgress2.pendingProps,
              rootOrSingletonContext
            ), null !== returnFiber ? (workInProgress2.stateNode = returnFiber, hydrationParentFiber = workInProgress2, nextHydratableInstance = null, returnFiber = true) : returnFiber = false, returnFiber = !returnFiber), returnFiber && (current2 && warnNonHydratedInstance(workInProgress2, renderLanes2), throwOnHydrationMismatch(workInProgress2))), null;
          case 13:
            return updateSuspenseComponent(current2, workInProgress2, renderLanes2);
          case 4:
            return pushHostContainer(
              workInProgress2,
              workInProgress2.stateNode.containerInfo
            ), returnFiber = workInProgress2.pendingProps, null === current2 ? workInProgress2.child = reconcileChildFibers(
              workInProgress2,
              null,
              returnFiber,
              renderLanes2
            ) : reconcileChildren(
              current2,
              workInProgress2,
              returnFiber,
              renderLanes2
            ), workInProgress2.child;
          case 11:
            return updateForwardRef(
              current2,
              workInProgress2,
              workInProgress2.type,
              workInProgress2.pendingProps,
              renderLanes2
            );
          case 7:
            return reconcileChildren(
              current2,
              workInProgress2,
              workInProgress2.pendingProps,
              renderLanes2
            ), workInProgress2.child;
          case 8:
            return reconcileChildren(
              current2,
              workInProgress2,
              workInProgress2.pendingProps.children,
              renderLanes2
            ), workInProgress2.child;
          case 12:
            return workInProgress2.flags |= 4, workInProgress2.flags |= 2048, returnFiber = workInProgress2.stateNode, returnFiber.effectDuration = -0, returnFiber.passiveEffectDuration = -0, reconcileChildren(
              current2,
              workInProgress2,
              workInProgress2.pendingProps.children,
              renderLanes2
            ), workInProgress2.child;
          case 10:
            return returnFiber = workInProgress2.type, prevSibling = workInProgress2.pendingProps, nextProps = prevSibling.value, "value" in prevSibling || hasWarnedAboutUsingNoValuePropOnContextProvider || (hasWarnedAboutUsingNoValuePropOnContextProvider = true, console.error(
              "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
            )), pushProvider(workInProgress2, returnFiber, nextProps), reconcileChildren(
              current2,
              workInProgress2,
              prevSibling.children,
              renderLanes2
            ), workInProgress2.child;
          case 9:
            return prevSibling = workInProgress2.type._context, returnFiber = workInProgress2.pendingProps.children, "function" !== typeof returnFiber && console.error(
              "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
            ), prepareToReadContext(workInProgress2), prevSibling = readContext(prevSibling), markComponentRenderStarted(workInProgress2), returnFiber = callComponentInDEV(
              returnFiber,
              prevSibling,
              void 0
            ), markComponentRenderStopped(), workInProgress2.flags |= 1, reconcileChildren(
              current2,
              workInProgress2,
              returnFiber,
              renderLanes2
            ), workInProgress2.child;
          case 14:
            return updateMemoComponent(
              current2,
              workInProgress2,
              workInProgress2.type,
              workInProgress2.pendingProps,
              renderLanes2
            );
          case 15:
            return updateSimpleMemoComponent(
              current2,
              workInProgress2,
              workInProgress2.type,
              workInProgress2.pendingProps,
              renderLanes2
            );
          case 19:
            return updateSuspenseListComponent(
              current2,
              workInProgress2,
              renderLanes2
            );
          case 22:
            return updateOffscreenComponent(current2, workInProgress2, renderLanes2);
          case 24:
            return prepareToReadContext(workInProgress2), returnFiber = readContext(CacheContext), null === current2 ? (prevSibling = peekCacheFromPool(), null === prevSibling && (prevSibling = workInProgressRoot, nextProps = createCache(), prevSibling.pooledCache = nextProps, retainCache(nextProps), null !== nextProps && (prevSibling.pooledCacheLanes |= renderLanes2), prevSibling = nextProps), workInProgress2.memoizedState = {
              parent: returnFiber,
              cache: prevSibling
            }, initializeUpdateQueue(workInProgress2), pushProvider(workInProgress2, CacheContext, prevSibling)) : (0 !== (current2.lanes & renderLanes2) && (cloneUpdateQueue(current2, workInProgress2), processUpdateQueue(workInProgress2, null, null, renderLanes2), suspendIfUpdateReadFromEntangledAsyncAction()), prevSibling = current2.memoizedState, nextProps = workInProgress2.memoizedState, prevSibling.parent !== returnFiber ? (prevSibling = {
              parent: returnFiber,
              cache: returnFiber
            }, workInProgress2.memoizedState = prevSibling, 0 === workInProgress2.lanes && (workInProgress2.memoizedState = workInProgress2.updateQueue.baseState = prevSibling), pushProvider(workInProgress2, CacheContext, returnFiber)) : (returnFiber = nextProps.cache, pushProvider(workInProgress2, CacheContext, returnFiber), returnFiber !== prevSibling.cache && propagateContextChanges(
              workInProgress2,
              [CacheContext],
              renderLanes2,
              true
            ))), reconcileChildren(
              current2,
              workInProgress2,
              workInProgress2.pendingProps.children,
              renderLanes2
            ), workInProgress2.child;
          case 29:
            throw workInProgress2.pendingProps;
        }
        throw Error(
          "Unknown unit of work tag (" + workInProgress2.tag + "). This error is likely caused by a bug in React. Please file an issue."
        );
      }
      function resetContextDependencies() {
        lastContextDependency = currentlyRenderingFiber = null;
        isDisallowedContextReadInDEV = false;
      }
      function pushProvider(providerFiber, context2, nextValue) {
        isPrimaryRenderer ? (push(valueCursor, context2._currentValue, providerFiber), context2._currentValue = nextValue, push(rendererCursorDEV, context2._currentRenderer, providerFiber), void 0 !== context2._currentRenderer && null !== context2._currentRenderer && context2._currentRenderer !== rendererSigil && console.error(
          "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
        ), context2._currentRenderer = rendererSigil) : (push(valueCursor, context2._currentValue2, providerFiber), context2._currentValue2 = nextValue, push(renderer2CursorDEV, context2._currentRenderer2, providerFiber), void 0 !== context2._currentRenderer2 && null !== context2._currentRenderer2 && context2._currentRenderer2 !== rendererSigil && console.error(
          "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
        ), context2._currentRenderer2 = rendererSigil);
      }
      function popProvider(context2, providerFiber) {
        var currentValue = valueCursor.current;
        isPrimaryRenderer ? (context2._currentValue = currentValue, currentValue = rendererCursorDEV.current, pop(rendererCursorDEV, providerFiber), context2._currentRenderer = currentValue) : (context2._currentValue2 = currentValue, currentValue = renderer2CursorDEV.current, pop(renderer2CursorDEV, providerFiber), context2._currentRenderer2 = currentValue);
        pop(valueCursor, providerFiber);
      }
      function scheduleContextWorkOnParentPath(parent, renderLanes2, propagationRoot) {
        for (; null !== parent; ) {
          var alternate = parent.alternate;
          (parent.childLanes & renderLanes2) !== renderLanes2 ? (parent.childLanes |= renderLanes2, null !== alternate && (alternate.childLanes |= renderLanes2)) : null !== alternate && (alternate.childLanes & renderLanes2) !== renderLanes2 && (alternate.childLanes |= renderLanes2);
          if (parent === propagationRoot) break;
          parent = parent.return;
        }
        parent !== propagationRoot && console.error(
          "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
        );
      }
      function propagateContextChanges(workInProgress2, contexts, renderLanes2, forcePropagateEntireTree) {
        var fiber = workInProgress2.child;
        null !== fiber && (fiber.return = workInProgress2);
        for (; null !== fiber; ) {
          var list = fiber.dependencies;
          if (null !== list) {
            var nextFiber = fiber.child;
            list = list.firstContext;
            a: for (; null !== list; ) {
              var dependency = list;
              list = fiber;
              for (var i3 = 0; i3 < contexts.length; i3++)
                if (dependency.context === contexts[i3]) {
                  list.lanes |= renderLanes2;
                  dependency = list.alternate;
                  null !== dependency && (dependency.lanes |= renderLanes2);
                  scheduleContextWorkOnParentPath(
                    list.return,
                    renderLanes2,
                    workInProgress2
                  );
                  forcePropagateEntireTree || (nextFiber = null);
                  break a;
                }
              list = dependency.next;
            }
          } else if (18 === fiber.tag) {
            nextFiber = fiber.return;
            if (null === nextFiber)
              throw Error(
                "We just came from a parent so we must have had a parent. This is a bug in React."
              );
            nextFiber.lanes |= renderLanes2;
            list = nextFiber.alternate;
            null !== list && (list.lanes |= renderLanes2);
            scheduleContextWorkOnParentPath(
              nextFiber,
              renderLanes2,
              workInProgress2
            );
            nextFiber = null;
          } else nextFiber = fiber.child;
          if (null !== nextFiber) nextFiber.return = fiber;
          else
            for (nextFiber = fiber; null !== nextFiber; ) {
              if (nextFiber === workInProgress2) {
                nextFiber = null;
                break;
              }
              fiber = nextFiber.sibling;
              if (null !== fiber) {
                fiber.return = nextFiber.return;
                nextFiber = fiber;
                break;
              }
              nextFiber = nextFiber.return;
            }
          fiber = nextFiber;
        }
      }
      function propagateParentContextChanges(current2, workInProgress2, renderLanes2, forcePropagateEntireTree) {
        current2 = null;
        for (var parent = workInProgress2, isInsidePropagationBailout = false; null !== parent; ) {
          if (!isInsidePropagationBailout) {
            if (0 !== (parent.flags & 524288)) isInsidePropagationBailout = true;
            else if (0 !== (parent.flags & 262144)) break;
          }
          if (10 === parent.tag) {
            var currentParent = parent.alternate;
            if (null === currentParent)
              throw Error("Should have a current fiber. This is a bug in React.");
            currentParent = currentParent.memoizedProps;
            if (null !== currentParent) {
              var context2 = parent.type;
              objectIs(parent.pendingProps.value, currentParent.value) || (null !== current2 ? current2.push(context2) : current2 = [context2]);
            }
          } else if (parent === hostTransitionProviderCursor.current) {
            currentParent = parent.alternate;
            if (null === currentParent)
              throw Error("Should have a current fiber. This is a bug in React.");
            currentParent.memoizedState.memoizedState !== parent.memoizedState.memoizedState && (null !== current2 ? current2.push(HostTransitionContext) : current2 = [HostTransitionContext]);
          }
          parent = parent.return;
        }
        null !== current2 && propagateContextChanges(
          workInProgress2,
          current2,
          renderLanes2,
          forcePropagateEntireTree
        );
        workInProgress2.flags |= 262144;
      }
      function checkIfContextChanged(currentDependencies) {
        for (currentDependencies = currentDependencies.firstContext; null !== currentDependencies; ) {
          var context2 = currentDependencies.context;
          if (!objectIs(
            isPrimaryRenderer ? context2._currentValue : context2._currentValue2,
            currentDependencies.memoizedValue
          ))
            return true;
          currentDependencies = currentDependencies.next;
        }
        return false;
      }
      function prepareToReadContext(workInProgress2) {
        currentlyRenderingFiber = workInProgress2;
        lastContextDependency = null;
        workInProgress2 = workInProgress2.dependencies;
        null !== workInProgress2 && (workInProgress2.firstContext = null);
      }
      function readContext(context2) {
        isDisallowedContextReadInDEV && console.error(
          "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
        );
        return readContextForConsumer(currentlyRenderingFiber, context2);
      }
      function readContextDuringReconciliation(consumer, context2) {
        null === currentlyRenderingFiber && prepareToReadContext(consumer);
        return readContextForConsumer(consumer, context2);
      }
      function readContextForConsumer(consumer, context2) {
        var value = isPrimaryRenderer ? context2._currentValue : context2._currentValue2;
        context2 = { context: context2, memoizedValue: value, next: null };
        if (null === lastContextDependency) {
          if (null === consumer)
            throw Error(
              "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
            );
          lastContextDependency = context2;
          consumer.dependencies = {
            lanes: 0,
            firstContext: context2,
            _debugThenableState: null
          };
          consumer.flags |= 524288;
        } else lastContextDependency = lastContextDependency.next = context2;
        return value;
      }
      function createCache() {
        return {
          controller: new AbortControllerLocal(),
          data: /* @__PURE__ */ new Map(),
          refCount: 0
        };
      }
      function retainCache(cache) {
        cache.controller.signal.aborted && console.warn(
          "A cache instance was retained after it was already freed. This likely indicates a bug in React."
        );
        cache.refCount++;
      }
      function releaseCache(cache) {
        cache.refCount--;
        0 > cache.refCount && console.warn(
          "A cache instance was released after it was already freed. This likely indicates a bug in React."
        );
        0 === cache.refCount && scheduleCallback$1(NormalPriority, function() {
          cache.controller.abort();
        });
      }
      function peekCacheFromPool() {
        var cacheResumedFromPreviousRender = resumedCache.current;
        return null !== cacheResumedFromPreviousRender ? cacheResumedFromPreviousRender : workInProgressRoot.pooledCache;
      }
      function pushTransition(offscreenWorkInProgress, prevCachePool) {
        null === prevCachePool ? push(resumedCache, resumedCache.current, offscreenWorkInProgress) : push(resumedCache, prevCachePool.pool, offscreenWorkInProgress);
      }
      function getSuspendedCache() {
        var cacheFromPool = peekCacheFromPool();
        return null === cacheFromPool ? null : {
          parent: isPrimaryRenderer ? CacheContext._currentValue : CacheContext._currentValue2,
          pool: cacheFromPool
        };
      }
      function markUpdate(workInProgress2) {
        workInProgress2.flags |= 4;
      }
      function doesRequireClone(current2, completedWork) {
        if (null !== current2 && current2.child === completedWork.child) return false;
        if (0 !== (completedWork.flags & 16)) return true;
        for (current2 = completedWork.child; null !== current2; ) {
          if (0 !== (current2.flags & 13878) || 0 !== (current2.subtreeFlags & 13878))
            return true;
          current2 = current2.sibling;
        }
        return false;
      }
      function appendAllChildren(parent, workInProgress2, needsVisibilityToggle, isHidden) {
        if (supportsMutation)
          for (needsVisibilityToggle = workInProgress2.child; null !== needsVisibilityToggle; ) {
            if (5 === needsVisibilityToggle.tag || 6 === needsVisibilityToggle.tag)
              appendInitialChild(parent, needsVisibilityToggle.stateNode);
            else if (!(4 === needsVisibilityToggle.tag || supportsSingletons && 27 === needsVisibilityToggle.tag) && null !== needsVisibilityToggle.child) {
              needsVisibilityToggle.child.return = needsVisibilityToggle;
              needsVisibilityToggle = needsVisibilityToggle.child;
              continue;
            }
            if (needsVisibilityToggle === workInProgress2) break;
            for (; null === needsVisibilityToggle.sibling; ) {
              if (null === needsVisibilityToggle.return || needsVisibilityToggle.return === workInProgress2)
                return;
              needsVisibilityToggle = needsVisibilityToggle.return;
            }
            needsVisibilityToggle.sibling.return = needsVisibilityToggle.return;
            needsVisibilityToggle = needsVisibilityToggle.sibling;
          }
        else if (supportsPersistence)
          for (var _node = workInProgress2.child; null !== _node; ) {
            if (5 === _node.tag) {
              var instance = _node.stateNode;
              needsVisibilityToggle && isHidden && (instance = cloneHiddenInstance(
                instance,
                _node.type,
                _node.memoizedProps
              ));
              appendInitialChild(parent, instance);
            } else if (6 === _node.tag)
              instance = _node.stateNode, needsVisibilityToggle && isHidden && (instance = cloneHiddenTextInstance(
                instance,
                _node.memoizedProps
              )), appendInitialChild(parent, instance);
            else if (4 !== _node.tag) {
              if (22 === _node.tag && null !== _node.memoizedState)
                instance = _node.child, null !== instance && (instance.return = _node), appendAllChildren(parent, _node, true, true);
              else if (null !== _node.child) {
                _node.child.return = _node;
                _node = _node.child;
                continue;
              }
            }
            if (_node === workInProgress2) break;
            for (; null === _node.sibling; ) {
              if (null === _node.return || _node.return === workInProgress2)
                return;
              _node = _node.return;
            }
            _node.sibling.return = _node.return;
            _node = _node.sibling;
          }
      }
      function appendAllChildrenToContainer(containerChildSet, workInProgress2, needsVisibilityToggle, isHidden) {
        if (supportsPersistence)
          for (var node = workInProgress2.child; null !== node; ) {
            if (5 === node.tag) {
              var instance = node.stateNode;
              needsVisibilityToggle && isHidden && (instance = cloneHiddenInstance(
                instance,
                node.type,
                node.memoizedProps
              ));
              appendChildToContainerChildSet(containerChildSet, instance);
            } else if (6 === node.tag)
              instance = node.stateNode, needsVisibilityToggle && isHidden && (instance = cloneHiddenTextInstance(
                instance,
                node.memoizedProps
              )), appendChildToContainerChildSet(containerChildSet, instance);
            else if (4 !== node.tag) {
              if (22 === node.tag && null !== node.memoizedState)
                instance = node.child, null !== instance && (instance.return = node), appendAllChildrenToContainer(
                  containerChildSet,
                  node,
                  !(null !== node.memoizedProps && "manual" === node.memoizedProps.mode),
                  true
                );
              else if (null !== node.child) {
                node.child.return = node;
                node = node.child;
                continue;
              }
            }
            if (node === workInProgress2) break;
            for (; null === node.sibling; ) {
              if (null === node.return || node.return === workInProgress2) return;
              node = node.return;
            }
            node.sibling.return = node.return;
            node = node.sibling;
          }
      }
      function updateHostContainer(current2, workInProgress2) {
        if (supportsPersistence && doesRequireClone(current2, workInProgress2)) {
          current2 = workInProgress2.stateNode;
          var container = current2.containerInfo, newChildSet = createContainerChildSet();
          appendAllChildrenToContainer(newChildSet, workInProgress2, false, false);
          current2.pendingChildren = newChildSet;
          markUpdate(workInProgress2);
          finalizeContainerChildren(container, newChildSet);
        }
      }
      function updateHostComponent(current2, workInProgress2, type, newProps) {
        if (supportsMutation)
          current2.memoizedProps !== newProps && markUpdate(workInProgress2);
        else if (supportsPersistence) {
          var currentInstance = current2.stateNode, _oldProps = current2.memoizedProps;
          if ((current2 = doesRequireClone(current2, workInProgress2)) || _oldProps !== newProps) {
            var currentHostContext = getHostContext();
            _oldProps = cloneInstance(
              currentInstance,
              type,
              _oldProps,
              newProps,
              !current2,
              null
            );
            _oldProps === currentInstance ? workInProgress2.stateNode = currentInstance : (finalizeInitialChildren(
              _oldProps,
              type,
              newProps,
              currentHostContext
            ) && markUpdate(workInProgress2), workInProgress2.stateNode = _oldProps, current2 ? appendAllChildren(_oldProps, workInProgress2, false, false) : markUpdate(workInProgress2));
          } else workInProgress2.stateNode = currentInstance;
        }
      }
      function preloadInstanceAndSuspendIfNeeded(workInProgress2, type, props) {
        if (maySuspendCommit(type, props)) {
          if (workInProgress2.flags |= 16777216, !preloadInstance(type, props))
            if (shouldRemainOnPreviousScreen()) workInProgress2.flags |= 8192;
            else
              throw suspendedThenable = noopSuspenseyCommitThenable, SuspenseyCommitException;
        } else workInProgress2.flags &= -16777217;
      }
      function preloadResourceAndSuspendIfNeeded(workInProgress2, resource) {
        if (mayResourceSuspendCommit(resource)) {
          if (workInProgress2.flags |= 16777216, !preloadResource(resource))
            if (shouldRemainOnPreviousScreen()) workInProgress2.flags |= 8192;
            else
              throw suspendedThenable = noopSuspenseyCommitThenable, SuspenseyCommitException;
        } else workInProgress2.flags &= -16777217;
      }
      function scheduleRetryEffect(workInProgress2, retryQueue) {
        null !== retryQueue && (workInProgress2.flags |= 4);
        workInProgress2.flags & 16384 && (retryQueue = 22 !== workInProgress2.tag ? claimNextRetryLane() : 536870912, workInProgress2.lanes |= retryQueue, workInProgressSuspendedRetryLanes |= retryQueue);
      }
      function cutOffTailIfNeeded(renderState, hasRenderedATailFallback) {
        if (!isHydrating)
          switch (renderState.tailMode) {
            case "hidden":
              hasRenderedATailFallback = renderState.tail;
              for (var lastTailNode = null; null !== hasRenderedATailFallback; )
                null !== hasRenderedATailFallback.alternate && (lastTailNode = hasRenderedATailFallback), hasRenderedATailFallback = hasRenderedATailFallback.sibling;
              null === lastTailNode ? renderState.tail = null : lastTailNode.sibling = null;
              break;
            case "collapsed":
              lastTailNode = renderState.tail;
              for (var _lastTailNode = null; null !== lastTailNode; )
                null !== lastTailNode.alternate && (_lastTailNode = lastTailNode), lastTailNode = lastTailNode.sibling;
              null === _lastTailNode ? hasRenderedATailFallback || null === renderState.tail ? renderState.tail = null : renderState.tail.sibling = null : _lastTailNode.sibling = null;
          }
      }
      function bubbleProperties(completedWork) {
        var didBailout = null !== completedWork.alternate && completedWork.alternate.child === completedWork.child, newChildLanes = 0, subtreeFlags = 0;
        if (didBailout)
          if ((completedWork.mode & 2) !== NoMode) {
            for (var _treeBaseDuration = completedWork.selfBaseDuration, _child2 = completedWork.child; null !== _child2; )
              newChildLanes |= _child2.lanes | _child2.childLanes, subtreeFlags |= _child2.subtreeFlags & 31457280, subtreeFlags |= _child2.flags & 31457280, _treeBaseDuration += _child2.treeBaseDuration, _child2 = _child2.sibling;
            completedWork.treeBaseDuration = _treeBaseDuration;
          } else
            for (_treeBaseDuration = completedWork.child; null !== _treeBaseDuration; )
              newChildLanes |= _treeBaseDuration.lanes | _treeBaseDuration.childLanes, subtreeFlags |= _treeBaseDuration.subtreeFlags & 31457280, subtreeFlags |= _treeBaseDuration.flags & 31457280, _treeBaseDuration.return = completedWork, _treeBaseDuration = _treeBaseDuration.sibling;
        else if ((completedWork.mode & 2) !== NoMode) {
          _treeBaseDuration = completedWork.actualDuration;
          _child2 = completedWork.selfBaseDuration;
          for (var child = completedWork.child; null !== child; )
            newChildLanes |= child.lanes | child.childLanes, subtreeFlags |= child.subtreeFlags, subtreeFlags |= child.flags, _treeBaseDuration += child.actualDuration, _child2 += child.treeBaseDuration, child = child.sibling;
          completedWork.actualDuration = _treeBaseDuration;
          completedWork.treeBaseDuration = _child2;
        } else
          for (_treeBaseDuration = completedWork.child; null !== _treeBaseDuration; )
            newChildLanes |= _treeBaseDuration.lanes | _treeBaseDuration.childLanes, subtreeFlags |= _treeBaseDuration.subtreeFlags, subtreeFlags |= _treeBaseDuration.flags, _treeBaseDuration.return = completedWork, _treeBaseDuration = _treeBaseDuration.sibling;
        completedWork.subtreeFlags |= subtreeFlags;
        completedWork.childLanes = newChildLanes;
        return didBailout;
      }
      function completeWork(current2, workInProgress2, renderLanes2) {
        var newProps = workInProgress2.pendingProps;
        popTreeContext(workInProgress2);
        switch (workInProgress2.tag) {
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return bubbleProperties(workInProgress2), null;
          case 1:
            return bubbleProperties(workInProgress2), null;
          case 3:
            renderLanes2 = workInProgress2.stateNode;
            newProps = null;
            null !== current2 && (newProps = current2.memoizedState.cache);
            workInProgress2.memoizedState.cache !== newProps && (workInProgress2.flags |= 2048);
            popProvider(CacheContext, workInProgress2);
            popHostContainer(workInProgress2);
            renderLanes2.pendingContext && (renderLanes2.context = renderLanes2.pendingContext, renderLanes2.pendingContext = null);
            if (null === current2 || null === current2.child)
              popHydrationState(workInProgress2) ? (emitPendingHydrationWarnings(), markUpdate(workInProgress2)) : null === current2 || current2.memoizedState.isDehydrated && 0 === (workInProgress2.flags & 256) || (workInProgress2.flags |= 1024, null !== hydrationErrors && (queueRecoverableErrors(hydrationErrors), hydrationErrors = null));
            updateHostContainer(current2, workInProgress2);
            bubbleProperties(workInProgress2);
            return null;
          case 26:
            if (supportsResources) {
              renderLanes2 = workInProgress2.type;
              var nextResource = workInProgress2.memoizedState;
              null === current2 ? (markUpdate(workInProgress2), null !== nextResource ? (bubbleProperties(workInProgress2), preloadResourceAndSuspendIfNeeded(
                workInProgress2,
                nextResource
              )) : (bubbleProperties(workInProgress2), preloadInstanceAndSuspendIfNeeded(
                workInProgress2,
                renderLanes2,
                newProps
              ))) : nextResource ? nextResource !== current2.memoizedState ? (markUpdate(workInProgress2), bubbleProperties(workInProgress2), preloadResourceAndSuspendIfNeeded(
                workInProgress2,
                nextResource
              )) : (bubbleProperties(workInProgress2), workInProgress2.flags &= -16777217) : (supportsMutation ? current2.memoizedProps !== newProps && markUpdate(workInProgress2) : updateHostComponent(
                current2,
                workInProgress2,
                renderLanes2,
                newProps
              ), bubbleProperties(workInProgress2), preloadInstanceAndSuspendIfNeeded(
                workInProgress2,
                renderLanes2,
                newProps
              ));
              return null;
            }
          case 27:
            if (supportsSingletons) {
              popHostContext(workInProgress2);
              renderLanes2 = requiredContext(rootInstanceStackCursor.current);
              nextResource = workInProgress2.type;
              if (null !== current2 && null != workInProgress2.stateNode)
                supportsMutation ? current2.memoizedProps !== newProps && markUpdate(workInProgress2) : updateHostComponent(
                  current2,
                  workInProgress2,
                  nextResource,
                  newProps
                );
              else {
                if (!newProps) {
                  if (null === workInProgress2.stateNode)
                    throw Error(
                      "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                    );
                  bubbleProperties(workInProgress2);
                  return null;
                }
                current2 = getHostContext();
                popHydrationState(workInProgress2) ? prepareToHydrateHostInstance(workInProgress2, current2) : (current2 = resolveSingletonInstance(
                  nextResource,
                  newProps,
                  renderLanes2,
                  current2,
                  true
                ), workInProgress2.stateNode = current2, markUpdate(workInProgress2));
              }
              bubbleProperties(workInProgress2);
              return null;
            }
          case 5:
            popHostContext(workInProgress2);
            renderLanes2 = workInProgress2.type;
            if (null !== current2 && null != workInProgress2.stateNode)
              updateHostComponent(current2, workInProgress2, renderLanes2, newProps);
            else {
              if (!newProps) {
                if (null === workInProgress2.stateNode)
                  throw Error(
                    "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                  );
                bubbleProperties(workInProgress2);
                return null;
              }
              current2 = getHostContext();
              popHydrationState(workInProgress2) ? prepareToHydrateHostInstance(workInProgress2, current2) : (nextResource = requiredContext(
                rootInstanceStackCursor.current
              ), nextResource = createInstance2(
                renderLanes2,
                newProps,
                nextResource,
                current2,
                workInProgress2
              ), appendAllChildren(nextResource, workInProgress2, false, false), workInProgress2.stateNode = nextResource, finalizeInitialChildren(
                nextResource,
                renderLanes2,
                newProps,
                current2
              ) && markUpdate(workInProgress2));
            }
            bubbleProperties(workInProgress2);
            preloadInstanceAndSuspendIfNeeded(
              workInProgress2,
              workInProgress2.type,
              workInProgress2.pendingProps
            );
            return null;
          case 6:
            if (current2 && null != workInProgress2.stateNode)
              renderLanes2 = current2.memoizedProps, supportsMutation ? renderLanes2 !== newProps && markUpdate(workInProgress2) : supportsPersistence && (renderLanes2 !== newProps ? (current2 = requiredContext(
                rootInstanceStackCursor.current
              ), renderLanes2 = getHostContext(), workInProgress2.stateNode = createTextInstance(
                newProps,
                current2,
                renderLanes2,
                workInProgress2
              ), markUpdate(workInProgress2)) : workInProgress2.stateNode = current2.stateNode);
            else {
              if ("string" !== typeof newProps && null === workInProgress2.stateNode)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              current2 = requiredContext(rootInstanceStackCursor.current);
              renderLanes2 = getHostContext();
              if (popHydrationState(workInProgress2)) {
                if (!supportsHydration)
                  throw Error(
                    "Expected prepareToHydrateHostTextInstance() to never be called. This error is likely caused by a bug in React. Please file an issue."
                  );
                current2 = workInProgress2.stateNode;
                renderLanes2 = workInProgress2.memoizedProps;
                nextResource = !didSuspendOrErrorDEV;
                newProps = null;
                var returnFiber = hydrationParentFiber;
                if (null !== returnFiber)
                  switch (returnFiber.tag) {
                    case 3:
                      nextResource && (nextResource = diffHydratedTextForDevWarnings(
                        current2,
                        renderLanes2,
                        newProps
                      ), null !== nextResource && (buildHydrationDiffNode(workInProgress2, 0).serverProps = nextResource));
                      break;
                    case 27:
                    case 5:
                      newProps = returnFiber.memoizedProps, nextResource && (nextResource = diffHydratedTextForDevWarnings(
                        current2,
                        renderLanes2,
                        newProps
                      ), null !== nextResource && (buildHydrationDiffNode(
                        workInProgress2,
                        0
                      ).serverProps = nextResource));
                  }
                hydrateTextInstance(
                  current2,
                  renderLanes2,
                  workInProgress2,
                  newProps
                ) || throwOnHydrationMismatch(workInProgress2);
              } else
                workInProgress2.stateNode = createTextInstance(
                  newProps,
                  current2,
                  renderLanes2,
                  workInProgress2
                );
            }
            bubbleProperties(workInProgress2);
            return null;
          case 13:
            newProps = workInProgress2.memoizedState;
            if (null === current2 || null !== current2.memoizedState && null !== current2.memoizedState.dehydrated) {
              nextResource = popHydrationState(workInProgress2);
              if (null !== newProps && null !== newProps.dehydrated) {
                if (null === current2) {
                  if (!nextResource)
                    throw Error(
                      "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                    );
                  if (!supportsHydration)
                    throw Error(
                      "Expected prepareToHydrateHostSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue."
                    );
                  nextResource = workInProgress2.memoizedState;
                  nextResource = null !== nextResource ? nextResource.dehydrated : null;
                  if (!nextResource)
                    throw Error(
                      "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                    );
                  hydrateSuspenseInstance(nextResource, workInProgress2);
                  bubbleProperties(workInProgress2);
                  (workInProgress2.mode & 2) !== NoMode && null !== newProps && (nextResource = workInProgress2.child, null !== nextResource && (workInProgress2.treeBaseDuration -= nextResource.treeBaseDuration));
                } else
                  emitPendingHydrationWarnings(), resetHydrationState(), 0 === (workInProgress2.flags & 128) && (workInProgress2.memoizedState = null), workInProgress2.flags |= 4, bubbleProperties(workInProgress2), (workInProgress2.mode & 2) !== NoMode && null !== newProps && (nextResource = workInProgress2.child, null !== nextResource && (workInProgress2.treeBaseDuration -= nextResource.treeBaseDuration));
                nextResource = false;
              } else
                null !== hydrationErrors && (queueRecoverableErrors(hydrationErrors), hydrationErrors = null), nextResource = true;
              if (!nextResource) {
                if (workInProgress2.flags & 256)
                  return popSuspenseHandler(workInProgress2), workInProgress2;
                popSuspenseHandler(workInProgress2);
                return null;
              }
            }
            popSuspenseHandler(workInProgress2);
            if (0 !== (workInProgress2.flags & 128))
              return workInProgress2.lanes = renderLanes2, (workInProgress2.mode & 2) !== NoMode && transferActualDuration(workInProgress2), workInProgress2;
            renderLanes2 = null !== newProps;
            current2 = null !== current2 && null !== current2.memoizedState;
            renderLanes2 && (newProps = workInProgress2.child, nextResource = null, null !== newProps.alternate && null !== newProps.alternate.memoizedState && null !== newProps.alternate.memoizedState.cachePool && (nextResource = newProps.alternate.memoizedState.cachePool.pool), returnFiber = null, null !== newProps.memoizedState && null !== newProps.memoizedState.cachePool && (returnFiber = newProps.memoizedState.cachePool.pool), returnFiber !== nextResource && (newProps.flags |= 2048));
            renderLanes2 !== current2 && renderLanes2 && (workInProgress2.child.flags |= 8192);
            scheduleRetryEffect(workInProgress2, workInProgress2.updateQueue);
            bubbleProperties(workInProgress2);
            (workInProgress2.mode & 2) !== NoMode && renderLanes2 && (current2 = workInProgress2.child, null !== current2 && (workInProgress2.treeBaseDuration -= current2.treeBaseDuration));
            return null;
          case 4:
            return popHostContainer(workInProgress2), updateHostContainer(current2, workInProgress2), null === current2 && preparePortalMount(workInProgress2.stateNode.containerInfo), bubbleProperties(workInProgress2), null;
          case 10:
            return popProvider(workInProgress2.type, workInProgress2), bubbleProperties(workInProgress2), null;
          case 19:
            pop(suspenseStackCursor, workInProgress2);
            nextResource = workInProgress2.memoizedState;
            if (null === nextResource)
              return bubbleProperties(workInProgress2), null;
            newProps = 0 !== (workInProgress2.flags & 128);
            returnFiber = nextResource.rendering;
            if (null === returnFiber)
              if (newProps) cutOffTailIfNeeded(nextResource, false);
              else {
                if (workInProgressRootExitStatus !== RootInProgress || null !== current2 && 0 !== (current2.flags & 128))
                  for (current2 = workInProgress2.child; null !== current2; ) {
                    returnFiber = findFirstSuspended(current2);
                    if (null !== returnFiber) {
                      workInProgress2.flags |= 128;
                      cutOffTailIfNeeded(nextResource, false);
                      current2 = returnFiber.updateQueue;
                      workInProgress2.updateQueue = current2;
                      scheduleRetryEffect(workInProgress2, current2);
                      workInProgress2.subtreeFlags = 0;
                      current2 = renderLanes2;
                      for (renderLanes2 = workInProgress2.child; null !== renderLanes2; )
                        resetWorkInProgress(renderLanes2, current2), renderLanes2 = renderLanes2.sibling;
                      push(
                        suspenseStackCursor,
                        suspenseStackCursor.current & SubtreeSuspenseContextMask | ForceSuspenseFallback,
                        workInProgress2
                      );
                      return workInProgress2.child;
                    }
                    current2 = current2.sibling;
                  }
                null !== nextResource.tail && now$1() > workInProgressRootRenderTargetTime && (workInProgress2.flags |= 128, newProps = true, cutOffTailIfNeeded(nextResource, false), workInProgress2.lanes = 4194304);
              }
            else {
              if (!newProps)
                if (current2 = findFirstSuspended(returnFiber), null !== current2) {
                  if (workInProgress2.flags |= 128, newProps = true, current2 = current2.updateQueue, workInProgress2.updateQueue = current2, scheduleRetryEffect(workInProgress2, current2), cutOffTailIfNeeded(nextResource, true), null === nextResource.tail && "hidden" === nextResource.tailMode && !returnFiber.alternate && !isHydrating)
                    return bubbleProperties(workInProgress2), null;
                } else
                  2 * now$1() - nextResource.renderingStartTime > workInProgressRootRenderTargetTime && 536870912 !== renderLanes2 && (workInProgress2.flags |= 128, newProps = true, cutOffTailIfNeeded(nextResource, false), workInProgress2.lanes = 4194304);
              nextResource.isBackwards ? (returnFiber.sibling = workInProgress2.child, workInProgress2.child = returnFiber) : (current2 = nextResource.last, null !== current2 ? current2.sibling = returnFiber : workInProgress2.child = returnFiber, nextResource.last = returnFiber);
            }
            if (null !== nextResource.tail)
              return current2 = nextResource.tail, nextResource.rendering = current2, nextResource.tail = current2.sibling, nextResource.renderingStartTime = now$1(), current2.sibling = null, renderLanes2 = suspenseStackCursor.current, renderLanes2 = newProps ? renderLanes2 & SubtreeSuspenseContextMask | ForceSuspenseFallback : renderLanes2 & SubtreeSuspenseContextMask, push(suspenseStackCursor, renderLanes2, workInProgress2), current2;
            bubbleProperties(workInProgress2);
            return null;
          case 22:
          case 23:
            return popSuspenseHandler(workInProgress2), popHiddenContext(workInProgress2), newProps = null !== workInProgress2.memoizedState, null !== current2 ? null !== current2.memoizedState !== newProps && (workInProgress2.flags |= 8192) : newProps && (workInProgress2.flags |= 8192), newProps ? 0 !== (renderLanes2 & 536870912) && 0 === (workInProgress2.flags & 128) && (bubbleProperties(workInProgress2), workInProgress2.subtreeFlags & 6 && (workInProgress2.flags |= 8192)) : bubbleProperties(workInProgress2), renderLanes2 = workInProgress2.updateQueue, null !== renderLanes2 && scheduleRetryEffect(workInProgress2, renderLanes2.retryQueue), renderLanes2 = null, null !== current2 && null !== current2.memoizedState && null !== current2.memoizedState.cachePool && (renderLanes2 = current2.memoizedState.cachePool.pool), newProps = null, null !== workInProgress2.memoizedState && null !== workInProgress2.memoizedState.cachePool && (newProps = workInProgress2.memoizedState.cachePool.pool), newProps !== renderLanes2 && (workInProgress2.flags |= 2048), null !== current2 && pop(resumedCache, workInProgress2), null;
          case 24:
            return renderLanes2 = null, null !== current2 && (renderLanes2 = current2.memoizedState.cache), workInProgress2.memoizedState.cache !== renderLanes2 && (workInProgress2.flags |= 2048), popProvider(CacheContext, workInProgress2), bubbleProperties(workInProgress2), null;
          case 25:
            return null;
        }
        throw Error(
          "Unknown unit of work tag (" + workInProgress2.tag + "). This error is likely caused by a bug in React. Please file an issue."
        );
      }
      function unwindWork(current2, workInProgress2) {
        popTreeContext(workInProgress2);
        switch (workInProgress2.tag) {
          case 1:
            return current2 = workInProgress2.flags, current2 & 65536 ? (workInProgress2.flags = current2 & -65537 | 128, (workInProgress2.mode & 2) !== NoMode && transferActualDuration(workInProgress2), workInProgress2) : null;
          case 3:
            return popProvider(CacheContext, workInProgress2), popHostContainer(workInProgress2), current2 = workInProgress2.flags, 0 !== (current2 & 65536) && 0 === (current2 & 128) ? (workInProgress2.flags = current2 & -65537 | 128, workInProgress2) : null;
          case 26:
          case 27:
          case 5:
            return popHostContext(workInProgress2), null;
          case 13:
            popSuspenseHandler(workInProgress2);
            current2 = workInProgress2.memoizedState;
            if (null !== current2 && null !== current2.dehydrated) {
              if (null === workInProgress2.alternate)
                throw Error(
                  "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
                );
              resetHydrationState();
            }
            current2 = workInProgress2.flags;
            return current2 & 65536 ? (workInProgress2.flags = current2 & -65537 | 128, (workInProgress2.mode & 2) !== NoMode && transferActualDuration(workInProgress2), workInProgress2) : null;
          case 19:
            return pop(suspenseStackCursor, workInProgress2), null;
          case 4:
            return popHostContainer(workInProgress2), null;
          case 10:
            return popProvider(workInProgress2.type, workInProgress2), null;
          case 22:
          case 23:
            return popSuspenseHandler(workInProgress2), popHiddenContext(workInProgress2), null !== current2 && pop(resumedCache, workInProgress2), current2 = workInProgress2.flags, current2 & 65536 ? (workInProgress2.flags = current2 & -65537 | 128, (workInProgress2.mode & 2) !== NoMode && transferActualDuration(workInProgress2), workInProgress2) : null;
          case 24:
            return popProvider(CacheContext, workInProgress2), null;
          case 25:
            return null;
          default:
            return null;
        }
      }
      function unwindInterruptedWork(current2, interruptedWork) {
        popTreeContext(interruptedWork);
        switch (interruptedWork.tag) {
          case 3:
            popProvider(CacheContext, interruptedWork);
            popHostContainer(interruptedWork);
            break;
          case 26:
          case 27:
          case 5:
            popHostContext(interruptedWork);
            break;
          case 4:
            popHostContainer(interruptedWork);
            break;
          case 13:
            popSuspenseHandler(interruptedWork);
            break;
          case 19:
            pop(suspenseStackCursor, interruptedWork);
            break;
          case 10:
            popProvider(interruptedWork.type, interruptedWork);
            break;
          case 22:
          case 23:
            popSuspenseHandler(interruptedWork);
            popHiddenContext(interruptedWork);
            null !== current2 && pop(resumedCache, interruptedWork);
            break;
          case 24:
            popProvider(CacheContext, interruptedWork);
        }
      }
      function shouldProfile(current2) {
        return (current2.mode & 2) !== NoMode;
      }
      function commitHookLayoutEffects(finishedWork, hookFlags) {
        shouldProfile(finishedWork) ? (startEffectTimer(), commitHookEffectListMount(hookFlags, finishedWork), recordEffectDuration()) : commitHookEffectListMount(hookFlags, finishedWork);
      }
      function commitHookLayoutUnmountEffects(finishedWork, nearestMountedAncestor, hookFlags) {
        shouldProfile(finishedWork) ? (startEffectTimer(), commitHookEffectListUnmount(
          hookFlags,
          finishedWork,
          nearestMountedAncestor
        ), recordEffectDuration()) : commitHookEffectListUnmount(
          hookFlags,
          finishedWork,
          nearestMountedAncestor
        );
      }
      function commitHookEffectListMount(flags, finishedWork) {
        try {
          var updateQueue = finishedWork.updateQueue, lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
          if (null !== lastEffect) {
            var firstEffect = lastEffect.next;
            updateQueue = firstEffect;
            do {
              if ((updateQueue.tag & flags) === flags && ((flags & Passive) !== NoFlags2 ? null !== injectedProfilingHooks && "function" === typeof injectedProfilingHooks.markComponentPassiveEffectMountStarted && injectedProfilingHooks.markComponentPassiveEffectMountStarted(
                finishedWork
              ) : (flags & Layout) !== NoFlags2 && null !== injectedProfilingHooks && "function" === typeof injectedProfilingHooks.markComponentLayoutEffectMountStarted && injectedProfilingHooks.markComponentLayoutEffectMountStarted(
                finishedWork
              ), lastEffect = void 0, (flags & Insertion) !== NoFlags2 && (isRunningInsertionEffect = true), lastEffect = runWithFiberInDEV(
                finishedWork,
                callCreateInDEV,
                updateQueue
              ), (flags & Insertion) !== NoFlags2 && (isRunningInsertionEffect = false), (flags & Passive) !== NoFlags2 ? null !== injectedProfilingHooks && "function" === typeof injectedProfilingHooks.markComponentPassiveEffectMountStopped && injectedProfilingHooks.markComponentPassiveEffectMountStopped() : (flags & Layout) !== NoFlags2 && null !== injectedProfilingHooks && "function" === typeof injectedProfilingHooks.markComponentLayoutEffectMountStopped && injectedProfilingHooks.markComponentLayoutEffectMountStopped(), void 0 !== lastEffect && "function" !== typeof lastEffect)) {
                var hookName = void 0;
                hookName = 0 !== (updateQueue.tag & Layout) ? "useLayoutEffect" : 0 !== (updateQueue.tag & Insertion) ? "useInsertionEffect" : "useEffect";
                var addendum = void 0;
                addendum = null === lastEffect ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : "function" === typeof lastEffect.then ? "\n\nIt looks like you wrote " + hookName + "(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:\n\n" + hookName + "(() => {\n  async function fetchData() {\n    // You can await here\n    const response = await MyAPI.getData(someId);\n    // ...\n  }\n  fetchData();\n}, [someId]); // Or [] if effect doesn't need props or state\n\nLearn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching" : " You returned: " + lastEffect;
                runWithFiberInDEV(
                  finishedWork,
                  function(n, a2) {
                    console.error(
                      "%s must not return anything besides a function, which is used for clean-up.%s",
                      n,
                      a2
                    );
                  },
                  hookName,
                  addendum
                );
              }
              updateQueue = updateQueue.next;
            } while (updateQueue !== firstEffect);
          }
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      }
      function commitHookEffectListUnmount(flags, finishedWork, nearestMountedAncestor) {
        try {
          var updateQueue = finishedWork.updateQueue, lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
          if (null !== lastEffect) {
            var firstEffect = lastEffect.next;
            updateQueue = firstEffect;
            do {
              if ((updateQueue.tag & flags) === flags) {
                var inst = updateQueue.inst, destroy = inst.destroy;
                void 0 !== destroy && (inst.destroy = void 0, (flags & Passive) !== NoFlags2 ? null !== injectedProfilingHooks && "function" === typeof injectedProfilingHooks.markComponentPassiveEffectUnmountStarted && injectedProfilingHooks.markComponentPassiveEffectUnmountStarted(
                  finishedWork
                ) : (flags & Layout) !== NoFlags2 && null !== injectedProfilingHooks && "function" === typeof injectedProfilingHooks.markComponentLayoutEffectUnmountStarted && injectedProfilingHooks.markComponentLayoutEffectUnmountStarted(
                  finishedWork
                ), (flags & Insertion) !== NoFlags2 && (isRunningInsertionEffect = true), runWithFiberInDEV(
                  finishedWork,
                  callDestroyInDEV,
                  finishedWork,
                  nearestMountedAncestor,
                  destroy
                ), (flags & Insertion) !== NoFlags2 && (isRunningInsertionEffect = false), (flags & Passive) !== NoFlags2 ? null !== injectedProfilingHooks && "function" === typeof injectedProfilingHooks.markComponentPassiveEffectUnmountStopped && injectedProfilingHooks.markComponentPassiveEffectUnmountStopped() : (flags & Layout) !== NoFlags2 && null !== injectedProfilingHooks && "function" === typeof injectedProfilingHooks.markComponentLayoutEffectUnmountStopped && injectedProfilingHooks.markComponentLayoutEffectUnmountStopped());
              }
              updateQueue = updateQueue.next;
            } while (updateQueue !== firstEffect);
          }
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      }
      function commitHookPassiveMountEffects(finishedWork, hookFlags) {
        shouldProfile(finishedWork) ? (startEffectTimer(), commitHookEffectListMount(hookFlags, finishedWork), recordEffectDuration()) : commitHookEffectListMount(hookFlags, finishedWork);
      }
      function commitHookPassiveUnmountEffects(finishedWork, nearestMountedAncestor, hookFlags) {
        shouldProfile(finishedWork) ? (startEffectTimer(), commitHookEffectListUnmount(
          hookFlags,
          finishedWork,
          nearestMountedAncestor
        ), recordEffectDuration()) : commitHookEffectListUnmount(
          hookFlags,
          finishedWork,
          nearestMountedAncestor
        );
      }
      function commitClassCallbacks(finishedWork) {
        var updateQueue = finishedWork.updateQueue;
        if (null !== updateQueue) {
          var instance = finishedWork.stateNode;
          finishedWork.type.defaultProps || "ref" in finishedWork.memoizedProps || didWarnAboutReassigningProps || (instance.props !== finishedWork.memoizedProps && console.error(
            "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
            getComponentNameFromFiber(finishedWork) || "instance"
          ), instance.state !== finishedWork.memoizedState && console.error(
            "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
            getComponentNameFromFiber(finishedWork) || "instance"
          ));
          try {
            runWithFiberInDEV(
              finishedWork,
              commitCallbacks,
              updateQueue,
              instance
            );
          } catch (error) {
            captureCommitPhaseError(finishedWork, finishedWork.return, error);
          }
        }
      }
      function callGetSnapshotBeforeUpdates(instance, prevProps, prevState) {
        return instance.getSnapshotBeforeUpdate(prevProps, prevState);
      }
      function commitClassSnapshot(finishedWork, current2) {
        var prevProps = current2.memoizedProps, prevState = current2.memoizedState;
        current2 = finishedWork.stateNode;
        finishedWork.type.defaultProps || "ref" in finishedWork.memoizedProps || didWarnAboutReassigningProps || (current2.props !== finishedWork.memoizedProps && console.error(
          "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          getComponentNameFromFiber(finishedWork) || "instance"
        ), current2.state !== finishedWork.memoizedState && console.error(
          "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          getComponentNameFromFiber(finishedWork) || "instance"
        ));
        try {
          var resolvedPrevProps = resolveClassComponentProps(
            finishedWork.type,
            prevProps,
            finishedWork.elementType === finishedWork.type
          );
          var snapshot = runWithFiberInDEV(
            finishedWork,
            callGetSnapshotBeforeUpdates,
            current2,
            resolvedPrevProps,
            prevState
          );
          prevProps = didWarnAboutUndefinedSnapshotBeforeUpdate;
          void 0 !== snapshot || prevProps.has(finishedWork.type) || (prevProps.add(finishedWork.type), runWithFiberInDEV(finishedWork, function() {
            console.error(
              "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
              getComponentNameFromFiber(finishedWork)
            );
          }));
          current2.__reactInternalSnapshotBeforeUpdate = snapshot;
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      }
      function safelyCallComponentWillUnmount(current2, nearestMountedAncestor, instance) {
        instance.props = resolveClassComponentProps(
          current2.type,
          current2.memoizedProps
        );
        instance.state = current2.memoizedState;
        shouldProfile(current2) ? (startEffectTimer(), runWithFiberInDEV(
          current2,
          callComponentWillUnmountInDEV,
          current2,
          nearestMountedAncestor,
          instance
        ), recordEffectDuration()) : runWithFiberInDEV(
          current2,
          callComponentWillUnmountInDEV,
          current2,
          nearestMountedAncestor,
          instance
        );
      }
      function commitAttachRef(finishedWork) {
        var ref = finishedWork.ref;
        if (null !== ref) {
          var instance = finishedWork.stateNode;
          switch (finishedWork.tag) {
            case 26:
            case 27:
            case 5:
              instance = getPublicInstance(instance);
          }
          if ("function" === typeof ref)
            if (shouldProfile(finishedWork))
              try {
                startEffectTimer(), finishedWork.refCleanup = ref(instance);
              } finally {
                recordEffectDuration();
              }
            else finishedWork.refCleanup = ref(instance);
          else
            "string" === typeof ref ? console.error("String refs are no longer supported.") : ref.hasOwnProperty("current") || console.error(
              "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
              getComponentNameFromFiber(finishedWork)
            ), ref.current = instance;
        }
      }
      function safelyAttachRef(current2, nearestMountedAncestor) {
        try {
          runWithFiberInDEV(current2, commitAttachRef, current2);
        } catch (error) {
          captureCommitPhaseError(current2, nearestMountedAncestor, error);
        }
      }
      function safelyDetachRef(current2, nearestMountedAncestor) {
        var ref = current2.ref, refCleanup = current2.refCleanup;
        if (null !== ref)
          if ("function" === typeof refCleanup)
            try {
              if (shouldProfile(current2))
                try {
                  startEffectTimer(), runWithFiberInDEV(current2, refCleanup);
                } finally {
                  recordEffectDuration(current2);
                }
              else runWithFiberInDEV(current2, refCleanup);
            } catch (error) {
              captureCommitPhaseError(current2, nearestMountedAncestor, error);
            } finally {
              current2.refCleanup = null, current2 = current2.alternate, null != current2 && (current2.refCleanup = null);
            }
          else if ("function" === typeof ref)
            try {
              if (shouldProfile(current2))
                try {
                  startEffectTimer(), runWithFiberInDEV(current2, ref, null);
                } finally {
                  recordEffectDuration(current2);
                }
              else runWithFiberInDEV(current2, ref, null);
            } catch (error$3) {
              captureCommitPhaseError(current2, nearestMountedAncestor, error$3);
            }
          else ref.current = null;
      }
      function commitProfiler(finishedWork, current2, commitStartTime2, effectDuration) {
        var _finishedWork$memoize = finishedWork.memoizedProps, id = _finishedWork$memoize.id, onCommit = _finishedWork$memoize.onCommit;
        _finishedWork$memoize = _finishedWork$memoize.onRender;
        current2 = null === current2 ? "mount" : "update";
        currentUpdateIsNested && (current2 = "nested-update");
        "function" === typeof _finishedWork$memoize && _finishedWork$memoize(
          id,
          current2,
          finishedWork.actualDuration,
          finishedWork.treeBaseDuration,
          finishedWork.actualStartTime,
          commitStartTime2
        );
        "function" === typeof onCommit && onCommit(
          finishedWork.memoizedProps.id,
          current2,
          effectDuration,
          commitStartTime2
        );
      }
      function commitProfilerPostCommitImpl(finishedWork, current2, commitStartTime2, passiveEffectDuration) {
        var _finishedWork$memoize2 = finishedWork.memoizedProps;
        finishedWork = _finishedWork$memoize2.id;
        _finishedWork$memoize2 = _finishedWork$memoize2.onPostCommit;
        current2 = null === current2 ? "mount" : "update";
        currentUpdateIsNested && (current2 = "nested-update");
        "function" === typeof _finishedWork$memoize2 && _finishedWork$memoize2(
          finishedWork,
          current2,
          passiveEffectDuration,
          commitStartTime2
        );
      }
      function commitHostMount(finishedWork) {
        var type = finishedWork.type, props = finishedWork.memoizedProps, instance = finishedWork.stateNode;
        try {
          runWithFiberInDEV(
            finishedWork,
            commitMount,
            instance,
            type,
            props,
            finishedWork
          );
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      }
      function commitHostUpdate(finishedWork, newProps, oldProps) {
        try {
          runWithFiberInDEV(
            finishedWork,
            commitUpdate,
            finishedWork.stateNode,
            finishedWork.type,
            oldProps,
            newProps,
            finishedWork
          );
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      }
      function isHostParent(fiber) {
        return 5 === fiber.tag || 3 === fiber.tag || (supportsResources ? 26 === fiber.tag : false) || (supportsSingletons ? 27 === fiber.tag : false) || 4 === fiber.tag;
      }
      function getHostSibling(fiber) {
        a: for (; ; ) {
          for (; null === fiber.sibling; ) {
            if (null === fiber.return || isHostParent(fiber.return)) return null;
            fiber = fiber.return;
          }
          fiber.sibling.return = fiber.return;
          for (fiber = fiber.sibling; 5 !== fiber.tag && 6 !== fiber.tag && (supportsSingletons ? 27 !== fiber.tag : 1) && 18 !== fiber.tag; ) {
            if (fiber.flags & 2) continue a;
            if (null === fiber.child || 4 === fiber.tag) continue a;
            else fiber.child.return = fiber, fiber = fiber.child;
          }
          if (!(fiber.flags & 2)) return fiber.stateNode;
        }
      }
      function insertOrAppendPlacementNodeIntoContainer(node, before, parent) {
        var tag = node.tag;
        if (5 === tag || 6 === tag)
          node = node.stateNode, before ? insertInContainerBefore(parent, node, before) : appendChildToContainer(parent, node);
        else if (!(4 === tag || supportsSingletons && 27 === tag) && (node = node.child, null !== node))
          for (insertOrAppendPlacementNodeIntoContainer(node, before, parent), node = node.sibling; null !== node; )
            insertOrAppendPlacementNodeIntoContainer(node, before, parent), node = node.sibling;
      }
      function insertOrAppendPlacementNode(node, before, parent) {
        var tag = node.tag;
        if (5 === tag || 6 === tag)
          node = node.stateNode, before ? insertBefore2(parent, node, before) : appendChild2(parent, node);
        else if (!(4 === tag || supportsSingletons && 27 === tag) && (node = node.child, null !== node))
          for (insertOrAppendPlacementNode(node, before, parent), node = node.sibling; null !== node; )
            insertOrAppendPlacementNode(node, before, parent), node = node.sibling;
      }
      function commitPlacement(finishedWork) {
        if (supportsMutation && (!supportsSingletons || 27 !== finishedWork.tag)) {
          a: {
            for (var parent = finishedWork.return; null !== parent; ) {
              if (isHostParent(parent)) {
                var parentFiber = parent;
                break a;
              }
              parent = parent.return;
            }
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          }
          switch (parentFiber.tag) {
            case 27:
              if (supportsSingletons) {
                parent = parentFiber.stateNode;
                parentFiber = getHostSibling(finishedWork);
                insertOrAppendPlacementNode(finishedWork, parentFiber, parent);
                break;
              }
            case 5:
              parent = parentFiber.stateNode;
              parentFiber.flags & 32 && (resetTextContent(parent), parentFiber.flags &= -33);
              parentFiber = getHostSibling(finishedWork);
              insertOrAppendPlacementNode(finishedWork, parentFiber, parent);
              break;
            case 3:
            case 4:
              parent = parentFiber.stateNode.containerInfo;
              parentFiber = getHostSibling(finishedWork);
              insertOrAppendPlacementNodeIntoContainer(
                finishedWork,
                parentFiber,
                parent
              );
              break;
            default:
              throw Error(
                "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
              );
          }
        }
      }
      function commitHostPortalContainerChildren(portal, finishedWork, pendingChildren) {
        portal = portal.containerInfo;
        try {
          runWithFiberInDEV(
            finishedWork,
            replaceContainerChildren,
            portal,
            pendingChildren
          );
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      }
      function commitBeforeMutationEffects(root, firstChild) {
        prepareForCommit(root.containerInfo);
        for (nextEffect = firstChild; null !== nextEffect; )
          if (root = nextEffect, firstChild = root.child, 0 !== (root.subtreeFlags & 1028) && null !== firstChild)
            firstChild.return = root, nextEffect = firstChild;
          else
            for (; null !== nextEffect; ) {
              firstChild = root = nextEffect;
              var current2 = firstChild.alternate, flags = firstChild.flags;
              switch (firstChild.tag) {
                case 0:
                  break;
                case 11:
                case 15:
                  break;
                case 1:
                  0 !== (flags & 1024) && null !== current2 && commitClassSnapshot(firstChild, current2);
                  break;
                case 3:
                  0 !== (flags & 1024) && supportsMutation && clearContainer(firstChild.stateNode.containerInfo);
                  break;
                case 5:
                case 26:
                case 27:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  if (0 !== (flags & 1024))
                    throw Error(
                      "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                    );
              }
              firstChild = root.sibling;
              if (null !== firstChild) {
                firstChild.return = root.return;
                nextEffect = firstChild;
                break;
              }
              nextEffect = root.return;
            }
        root = shouldFireAfterActiveInstanceBlur;
        shouldFireAfterActiveInstanceBlur = false;
        return root;
      }
      function commitLayoutEffectOnFiber(finishedRoot, current2, finishedWork) {
        var flags = finishedWork.flags;
        switch (finishedWork.tag) {
          case 0:
          case 11:
          case 15:
            recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
            flags & 4 && commitHookLayoutEffects(finishedWork, Layout | HasEffect);
            break;
          case 1:
            recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
            if (flags & 4)
              if (finishedRoot = finishedWork.stateNode, null === current2)
                finishedWork.type.defaultProps || "ref" in finishedWork.memoizedProps || didWarnAboutReassigningProps || (finishedRoot.props !== finishedWork.memoizedProps && console.error(
                  "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                  getComponentNameFromFiber(finishedWork) || "instance"
                ), finishedRoot.state !== finishedWork.memoizedState && console.error(
                  "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                  getComponentNameFromFiber(finishedWork) || "instance"
                )), shouldProfile(finishedWork) ? (startEffectTimer(), runWithFiberInDEV(
                  finishedWork,
                  callComponentDidMountInDEV,
                  finishedWork,
                  finishedRoot
                ), recordEffectDuration()) : runWithFiberInDEV(
                  finishedWork,
                  callComponentDidMountInDEV,
                  finishedWork,
                  finishedRoot
                );
              else {
                var prevProps = resolveClassComponentProps(
                  finishedWork.type,
                  current2.memoizedProps
                );
                current2 = current2.memoizedState;
                finishedWork.type.defaultProps || "ref" in finishedWork.memoizedProps || didWarnAboutReassigningProps || (finishedRoot.props !== finishedWork.memoizedProps && console.error(
                  "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                  getComponentNameFromFiber(finishedWork) || "instance"
                ), finishedRoot.state !== finishedWork.memoizedState && console.error(
                  "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                  getComponentNameFromFiber(finishedWork) || "instance"
                ));
                shouldProfile(finishedWork) ? (startEffectTimer(), runWithFiberInDEV(
                  finishedWork,
                  callComponentDidUpdateInDEV,
                  finishedWork,
                  finishedRoot,
                  prevProps,
                  current2,
                  finishedRoot.__reactInternalSnapshotBeforeUpdate
                ), recordEffectDuration()) : runWithFiberInDEV(
                  finishedWork,
                  callComponentDidUpdateInDEV,
                  finishedWork,
                  finishedRoot,
                  prevProps,
                  current2,
                  finishedRoot.__reactInternalSnapshotBeforeUpdate
                );
              }
            flags & 64 && commitClassCallbacks(finishedWork);
            flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
            break;
          case 3:
            current2 = pushNestedEffectDurations();
            recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
            if (flags & 64 && (flags = finishedWork.updateQueue, null !== flags)) {
              prevProps = null;
              if (null !== finishedWork.child)
                switch (finishedWork.child.tag) {
                  case 27:
                  case 5:
                    prevProps = getPublicInstance(finishedWork.child.stateNode);
                    break;
                  case 1:
                    prevProps = finishedWork.child.stateNode;
                }
              try {
                runWithFiberInDEV(
                  finishedWork,
                  commitCallbacks,
                  flags,
                  prevProps
                );
              } catch (error) {
                captureCommitPhaseError(finishedWork, finishedWork.return, error);
              }
            }
            finishedRoot.effectDuration += popNestedEffectDurations(current2);
            break;
          case 26:
            if (supportsResources) {
              recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
              flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
              break;
            }
          case 27:
          case 5:
            recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
            null === current2 && flags & 4 && commitHostMount(finishedWork);
            flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
            break;
          case 12:
            if (flags & 4) {
              flags = pushNestedEffectDurations();
              recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
              finishedRoot = finishedWork.stateNode;
              finishedRoot.effectDuration += bubbleNestedEffectDurations(flags);
              try {
                runWithFiberInDEV(
                  finishedWork,
                  commitProfiler,
                  finishedWork,
                  current2,
                  commitStartTime,
                  finishedRoot.effectDuration
                );
              } catch (error) {
                captureCommitPhaseError(finishedWork, finishedWork.return, error);
              }
            } else recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
            break;
          case 13:
            recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
            flags & 4 && commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
            break;
          case 22:
            prevProps = null !== finishedWork.memoizedState || offscreenSubtreeIsHidden;
            if (!prevProps) {
              current2 = null !== current2 && null !== current2.memoizedState || offscreenSubtreeWasHidden;
              var prevOffscreenSubtreeIsHidden = offscreenSubtreeIsHidden, prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
              offscreenSubtreeIsHidden = prevProps;
              (offscreenSubtreeWasHidden = current2) && !prevOffscreenSubtreeWasHidden ? recursivelyTraverseReappearLayoutEffects(
                finishedRoot,
                finishedWork,
                0 !== (finishedWork.subtreeFlags & 8772)
              ) : recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
              offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden;
              offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
            }
            flags & 512 && ("manual" === finishedWork.memoizedProps.mode ? safelyAttachRef(finishedWork, finishedWork.return) : safelyDetachRef(finishedWork, finishedWork.return));
            break;
          default:
            recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
        }
      }
      function detachFiberAfterEffects(fiber) {
        var alternate = fiber.alternate;
        null !== alternate && (fiber.alternate = null, detachFiberAfterEffects(alternate));
        fiber.child = null;
        fiber.deletions = null;
        fiber.sibling = null;
        5 === fiber.tag && (alternate = fiber.stateNode, null !== alternate && detachDeletedInstance(alternate));
        fiber.stateNode = null;
        fiber._debugOwner = null;
        fiber.return = null;
        fiber.dependencies = null;
        fiber.memoizedProps = null;
        fiber.memoizedState = null;
        fiber.pendingProps = null;
        fiber.stateNode = null;
        fiber.updateQueue = null;
      }
      function recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, parent) {
        for (parent = parent.child; null !== parent; )
          commitDeletionEffectsOnFiber(
            finishedRoot,
            nearestMountedAncestor,
            parent
          ), parent = parent.sibling;
      }
      function commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, deletedFiber) {
        if (injectedHook && "function" === typeof injectedHook.onCommitFiberUnmount)
          try {
            injectedHook.onCommitFiberUnmount(rendererID, deletedFiber);
          } catch (err) {
            hasLoggedError || (hasLoggedError = true, console.error(
              "React instrumentation encountered an error: %s",
              err
            ));
          }
        switch (deletedFiber.tag) {
          case 26:
            if (supportsResources) {
              offscreenSubtreeWasHidden || safelyDetachRef(deletedFiber, nearestMountedAncestor);
              recursivelyTraverseDeletionEffects(
                finishedRoot,
                nearestMountedAncestor,
                deletedFiber
              );
              deletedFiber.memoizedState ? releaseResource(deletedFiber.memoizedState) : deletedFiber.stateNode && unmountHoistable(deletedFiber.stateNode);
              break;
            }
          case 27:
            if (supportsSingletons) {
              offscreenSubtreeWasHidden || safelyDetachRef(deletedFiber, nearestMountedAncestor);
              var prevHostParent = hostParent, prevHostParentIsContainer = hostParentIsContainer;
              hostParent = deletedFiber.stateNode;
              recursivelyTraverseDeletionEffects(
                finishedRoot,
                nearestMountedAncestor,
                deletedFiber
              );
              releaseSingletonInstance(deletedFiber.stateNode);
              hostParent = prevHostParent;
              hostParentIsContainer = prevHostParentIsContainer;
              break;
            }
          case 5:
            offscreenSubtreeWasHidden || safelyDetachRef(deletedFiber, nearestMountedAncestor);
          case 6:
            if (supportsMutation) {
              if (prevHostParent = hostParent, prevHostParentIsContainer = hostParentIsContainer, hostParent = null, recursivelyTraverseDeletionEffects(
                finishedRoot,
                nearestMountedAncestor,
                deletedFiber
              ), hostParent = prevHostParent, hostParentIsContainer = prevHostParentIsContainer, null !== hostParent)
                if (hostParentIsContainer)
                  try {
                    runWithFiberInDEV(
                      deletedFiber,
                      removeChildFromContainer,
                      hostParent,
                      deletedFiber.stateNode
                    );
                  } catch (error) {
                    captureCommitPhaseError(
                      deletedFiber,
                      nearestMountedAncestor,
                      error
                    );
                  }
                else
                  try {
                    runWithFiberInDEV(
                      deletedFiber,
                      removeChild2,
                      hostParent,
                      deletedFiber.stateNode
                    );
                  } catch (error) {
                    captureCommitPhaseError(
                      deletedFiber,
                      nearestMountedAncestor,
                      error
                    );
                  }
            } else
              recursivelyTraverseDeletionEffects(
                finishedRoot,
                nearestMountedAncestor,
                deletedFiber
              );
            break;
          case 18:
            supportsMutation && null !== hostParent && (hostParentIsContainer ? clearSuspenseBoundaryFromContainer(
              hostParent,
              deletedFiber.stateNode
            ) : clearSuspenseBoundary(hostParent, deletedFiber.stateNode));
            break;
          case 4:
            supportsMutation ? (prevHostParent = hostParent, prevHostParentIsContainer = hostParentIsContainer, hostParent = deletedFiber.stateNode.containerInfo, hostParentIsContainer = true, recursivelyTraverseDeletionEffects(
              finishedRoot,
              nearestMountedAncestor,
              deletedFiber
            ), hostParent = prevHostParent, hostParentIsContainer = prevHostParentIsContainer) : (supportsPersistence && commitHostPortalContainerChildren(
              deletedFiber.stateNode,
              deletedFiber,
              createContainerChildSet()
            ), recursivelyTraverseDeletionEffects(
              finishedRoot,
              nearestMountedAncestor,
              deletedFiber
            ));
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            offscreenSubtreeWasHidden || commitHookEffectListUnmount(
              Insertion,
              deletedFiber,
              nearestMountedAncestor
            );
            offscreenSubtreeWasHidden || commitHookLayoutUnmountEffects(
              deletedFiber,
              nearestMountedAncestor,
              Layout
            );
            recursivelyTraverseDeletionEffects(
              finishedRoot,
              nearestMountedAncestor,
              deletedFiber
            );
            break;
          case 1:
            offscreenSubtreeWasHidden || (safelyDetachRef(deletedFiber, nearestMountedAncestor), prevHostParent = deletedFiber.stateNode, "function" === typeof prevHostParent.componentWillUnmount && safelyCallComponentWillUnmount(
              deletedFiber,
              nearestMountedAncestor,
              prevHostParent
            ));
            recursivelyTraverseDeletionEffects(
              finishedRoot,
              nearestMountedAncestor,
              deletedFiber
            );
            break;
          case 21:
            recursivelyTraverseDeletionEffects(
              finishedRoot,
              nearestMountedAncestor,
              deletedFiber
            );
            break;
          case 22:
            offscreenSubtreeWasHidden || safelyDetachRef(deletedFiber, nearestMountedAncestor);
            offscreenSubtreeWasHidden = (prevHostParent = offscreenSubtreeWasHidden) || null !== deletedFiber.memoizedState;
            recursivelyTraverseDeletionEffects(
              finishedRoot,
              nearestMountedAncestor,
              deletedFiber
            );
            offscreenSubtreeWasHidden = prevHostParent;
            break;
          default:
            recursivelyTraverseDeletionEffects(
              finishedRoot,
              nearestMountedAncestor,
              deletedFiber
            );
        }
      }
      function commitSuspenseHydrationCallbacks(finishedRoot, finishedWork) {
        if (supportsHydration && null === finishedWork.memoizedState && (finishedRoot = finishedWork.alternate, null !== finishedRoot && (finishedRoot = finishedRoot.memoizedState, null !== finishedRoot && (finishedRoot = finishedRoot.dehydrated, null !== finishedRoot))))
          try {
            runWithFiberInDEV(
              finishedWork,
              commitHydratedSuspenseInstance,
              finishedRoot
            );
          } catch (error) {
            captureCommitPhaseError(finishedWork, finishedWork.return, error);
          }
      }
      function getRetryCache(finishedWork) {
        switch (finishedWork.tag) {
          case 13:
          case 19:
            var retryCache = finishedWork.stateNode;
            null === retryCache && (retryCache = finishedWork.stateNode = new PossiblyWeakSet());
            return retryCache;
          case 22:
            return finishedWork = finishedWork.stateNode, retryCache = finishedWork._retryCache, null === retryCache && (retryCache = finishedWork._retryCache = new PossiblyWeakSet()), retryCache;
          default:
            throw Error(
              "Unexpected Suspense handler tag (" + finishedWork.tag + "). This is a bug in React."
            );
        }
      }
      function attachSuspenseRetryListeners(finishedWork, wakeables) {
        var retryCache = getRetryCache(finishedWork);
        wakeables.forEach(function(wakeable) {
          var retry = resolveRetryWakeable.bind(null, finishedWork, wakeable);
          if (!retryCache.has(wakeable)) {
            retryCache.add(wakeable);
            if (isDevToolsPresent)
              if (null !== inProgressLanes && null !== inProgressRoot)
                restorePendingUpdaters(inProgressRoot, inProgressLanes);
              else
                throw Error(
                  "Expected finished root and lanes to be set. This is a bug in React."
                );
            wakeable.then(retry, retry);
          }
        });
      }
      function commitMutationEffects(root, finishedWork, committedLanes) {
        inProgressLanes = committedLanes;
        inProgressRoot = root;
        commitMutationEffectsOnFiber(finishedWork, root);
        inProgressRoot = inProgressLanes = null;
      }
      function recursivelyTraverseMutationEffects(root$jscomp$0, parentFiber) {
        var deletions = parentFiber.deletions;
        if (null !== deletions)
          for (var i3 = 0; i3 < deletions.length; i3++) {
            var root = root$jscomp$0, returnFiber = parentFiber, deletedFiber = deletions[i3];
            if (supportsMutation) {
              var parent = returnFiber;
              a: for (; null !== parent; ) {
                switch (parent.tag) {
                  case 27:
                  case 5:
                    hostParent = parent.stateNode;
                    hostParentIsContainer = false;
                    break a;
                  case 3:
                    hostParent = parent.stateNode.containerInfo;
                    hostParentIsContainer = true;
                    break a;
                  case 4:
                    hostParent = parent.stateNode.containerInfo;
                    hostParentIsContainer = true;
                    break a;
                }
                parent = parent.return;
              }
              if (null === hostParent)
                throw Error(
                  "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
                );
              commitDeletionEffectsOnFiber(root, returnFiber, deletedFiber);
              hostParent = null;
              hostParentIsContainer = false;
            } else commitDeletionEffectsOnFiber(root, returnFiber, deletedFiber);
            root = deletedFiber;
            returnFiber = root.alternate;
            null !== returnFiber && (returnFiber.return = null);
            root.return = null;
          }
        if (parentFiber.subtreeFlags & 13878)
          for (parentFiber = parentFiber.child; null !== parentFiber; )
            commitMutationEffectsOnFiber(parentFiber, root$jscomp$0), parentFiber = parentFiber.sibling;
      }
      function commitMutationEffectsOnFiber(finishedWork, root) {
        var current2 = finishedWork.alternate, flags = finishedWork.flags;
        switch (finishedWork.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            recursivelyTraverseMutationEffects(root, finishedWork);
            commitReconciliationEffects(finishedWork);
            flags & 4 && (commitHookEffectListUnmount(
              Insertion | HasEffect,
              finishedWork,
              finishedWork.return
            ), commitHookEffectListMount(Insertion | HasEffect, finishedWork), commitHookLayoutUnmountEffects(
              finishedWork,
              finishedWork.return,
              Layout | HasEffect
            ));
            break;
          case 1:
            recursivelyTraverseMutationEffects(root, finishedWork);
            commitReconciliationEffects(finishedWork);
            flags & 512 && (offscreenSubtreeWasHidden || null === current2 || safelyDetachRef(current2, current2.return));
            flags & 64 && offscreenSubtreeIsHidden && (finishedWork = finishedWork.updateQueue, null !== finishedWork && (flags = finishedWork.callbacks, null !== flags && (current2 = finishedWork.shared.hiddenCallbacks, finishedWork.shared.hiddenCallbacks = null === current2 ? flags : current2.concat(flags))));
            break;
          case 26:
            if (supportsResources) {
              var hoistableRoot = currentHoistableRoot;
              recursivelyTraverseMutationEffects(root, finishedWork);
              commitReconciliationEffects(finishedWork);
              flags & 512 && (offscreenSubtreeWasHidden || null === current2 || safelyDetachRef(current2, current2.return));
              flags & 4 && (flags = null !== current2 ? current2.memoizedState : null, root = finishedWork.memoizedState, null === current2 ? null === root ? null === finishedWork.stateNode ? finishedWork.stateNode = hydrateHoistable(
                hoistableRoot,
                finishedWork.type,
                finishedWork.memoizedProps,
                finishedWork
              ) : mountHoistable(
                hoistableRoot,
                finishedWork.type,
                finishedWork.stateNode
              ) : finishedWork.stateNode = acquireResource(
                hoistableRoot,
                root,
                finishedWork.memoizedProps
              ) : flags !== root ? (null === flags ? null !== current2.stateNode && unmountHoistable(current2.stateNode) : releaseResource(flags), null === root ? mountHoistable(
                hoistableRoot,
                finishedWork.type,
                finishedWork.stateNode
              ) : acquireResource(
                hoistableRoot,
                root,
                finishedWork.memoizedProps
              )) : null === root && null !== finishedWork.stateNode && commitHostUpdate(
                finishedWork,
                finishedWork.memoizedProps,
                current2.memoizedProps
              ));
              break;
            }
          case 27:
            if (supportsSingletons && flags & 4 && null === finishedWork.alternate) {
              hoistableRoot = finishedWork.stateNode;
              var props = finishedWork.memoizedProps;
              try {
                clearSingleton(hoistableRoot), runWithFiberInDEV(
                  finishedWork,
                  acquireSingletonInstance,
                  finishedWork.type,
                  props,
                  hoistableRoot,
                  finishedWork
                );
              } catch (error) {
                captureCommitPhaseError(finishedWork, finishedWork.return, error);
              }
            }
          case 5:
            recursivelyTraverseMutationEffects(root, finishedWork);
            commitReconciliationEffects(finishedWork);
            flags & 512 && (offscreenSubtreeWasHidden || null === current2 || safelyDetachRef(current2, current2.return));
            if (supportsMutation) {
              if (finishedWork.flags & 32) {
                root = finishedWork.stateNode;
                try {
                  runWithFiberInDEV(finishedWork, resetTextContent, root);
                } catch (error) {
                  captureCommitPhaseError(
                    finishedWork,
                    finishedWork.return,
                    error
                  );
                }
              }
              flags & 4 && null != finishedWork.stateNode && (root = finishedWork.memoizedProps, commitHostUpdate(
                finishedWork,
                root,
                null !== current2 ? current2.memoizedProps : root
              ));
              flags & 1024 && (needsFormReset = true, "form" !== finishedWork.type && console.error(
                "Unexpected host component type. Expected a form. This is a bug in React."
              ));
            }
            break;
          case 6:
            recursivelyTraverseMutationEffects(root, finishedWork);
            commitReconciliationEffects(finishedWork);
            if (flags & 4 && supportsMutation) {
              if (null === finishedWork.stateNode)
                throw Error(
                  "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
                );
              flags = finishedWork.memoizedProps;
              current2 = null !== current2 ? current2.memoizedProps : flags;
              root = finishedWork.stateNode;
              try {
                runWithFiberInDEV(
                  finishedWork,
                  commitTextUpdate,
                  root,
                  current2,
                  flags
                );
              } catch (error) {
                captureCommitPhaseError(finishedWork, finishedWork.return, error);
              }
            }
            break;
          case 3:
            hoistableRoot = pushNestedEffectDurations();
            supportsResources ? (prepareToCommitHoistables(), props = currentHoistableRoot, currentHoistableRoot = getHoistableRoot(root.containerInfo), recursivelyTraverseMutationEffects(root, finishedWork), currentHoistableRoot = props) : recursivelyTraverseMutationEffects(root, finishedWork);
            commitReconciliationEffects(finishedWork);
            if (flags & 4) {
              if (supportsMutation && supportsHydration && null !== current2 && current2.memoizedState.isDehydrated)
                try {
                  runWithFiberInDEV(
                    finishedWork,
                    commitHydratedContainer,
                    root.containerInfo
                  );
                } catch (error) {
                  captureCommitPhaseError(
                    finishedWork,
                    finishedWork.return,
                    error
                  );
                }
              if (supportsPersistence) {
                flags = root.containerInfo;
                current2 = root.pendingChildren;
                try {
                  runWithFiberInDEV(
                    finishedWork,
                    replaceContainerChildren,
                    flags,
                    current2
                  );
                } catch (error) {
                  captureCommitPhaseError(
                    finishedWork,
                    finishedWork.return,
                    error
                  );
                }
              }
            }
            needsFormReset && (needsFormReset = false, recursivelyResetForms(finishedWork));
            root.effectDuration += popNestedEffectDurations(hoistableRoot);
            break;
          case 4:
            supportsResources ? (current2 = currentHoistableRoot, currentHoistableRoot = getHoistableRoot(
              finishedWork.stateNode.containerInfo
            ), recursivelyTraverseMutationEffects(root, finishedWork), commitReconciliationEffects(finishedWork), currentHoistableRoot = current2) : (recursivelyTraverseMutationEffects(root, finishedWork), commitReconciliationEffects(finishedWork));
            flags & 4 && supportsPersistence && commitHostPortalContainerChildren(
              finishedWork.stateNode,
              finishedWork,
              finishedWork.stateNode.pendingChildren
            );
            break;
          case 12:
            flags = pushNestedEffectDurations();
            recursivelyTraverseMutationEffects(root, finishedWork);
            commitReconciliationEffects(finishedWork);
            finishedWork.stateNode.effectDuration += bubbleNestedEffectDurations(flags);
            break;
          case 13:
            recursivelyTraverseMutationEffects(root, finishedWork);
            commitReconciliationEffects(finishedWork);
            finishedWork.child.flags & 8192 && null !== finishedWork.memoizedState !== (null !== current2 && null !== current2.memoizedState) && (globalMostRecentFallbackTime = now$1());
            flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (finishedWork.updateQueue = null, attachSuspenseRetryListeners(finishedWork, flags)));
            break;
          case 22:
            flags & 512 && (offscreenSubtreeWasHidden || null === current2 || safelyDetachRef(current2, current2.return));
            hoistableRoot = null !== finishedWork.memoizedState;
            var wasHidden = null !== current2 && null !== current2.memoizedState, prevOffscreenSubtreeIsHidden = offscreenSubtreeIsHidden, prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
            offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden || hoistableRoot;
            offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden || wasHidden;
            recursivelyTraverseMutationEffects(root, finishedWork);
            offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
            offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden;
            commitReconciliationEffects(finishedWork);
            root = finishedWork.stateNode;
            root._current = finishedWork;
            root._visibility &= -3;
            root._visibility |= root._pendingVisibility & 2;
            if (flags & 8192 && (root._visibility = hoistableRoot ? root._visibility & -2 : root._visibility | 1, hoistableRoot && (root = offscreenSubtreeIsHidden || offscreenSubtreeWasHidden, null === current2 || wasHidden || root || recursivelyTraverseDisappearLayoutEffects(finishedWork)), supportsMutation && (null === finishedWork.memoizedProps || "manual" !== finishedWork.memoizedProps.mode))) {
              a: if (current2 = null, supportsMutation)
                for (root = finishedWork; ; ) {
                  if (5 === root.tag || supportsResources && 26 === root.tag || supportsSingletons && 27 === root.tag) {
                    if (null === current2) {
                      wasHidden = current2 = root;
                      try {
                        props = wasHidden.stateNode, hoistableRoot ? runWithFiberInDEV(wasHidden, hideInstance2, props) : runWithFiberInDEV(
                          wasHidden,
                          unhideInstance2,
                          wasHidden.stateNode,
                          wasHidden.memoizedProps
                        );
                      } catch (error) {
                        captureCommitPhaseError(
                          wasHidden,
                          wasHidden.return,
                          error
                        );
                      }
                    }
                  } else if (6 === root.tag) {
                    if (null === current2) {
                      wasHidden = root;
                      try {
                        var instance = wasHidden.stateNode;
                        hoistableRoot ? runWithFiberInDEV(
                          wasHidden,
                          hideTextInstance,
                          instance
                        ) : runWithFiberInDEV(
                          wasHidden,
                          unhideTextInstance,
                          instance,
                          wasHidden.memoizedProps
                        );
                      } catch (error) {
                        captureCommitPhaseError(
                          wasHidden,
                          wasHidden.return,
                          error
                        );
                      }
                    }
                  } else if ((22 !== root.tag && 23 !== root.tag || null === root.memoizedState || root === finishedWork) && null !== root.child) {
                    root.child.return = root;
                    root = root.child;
                    continue;
                  }
                  if (root === finishedWork) break a;
                  for (; null === root.sibling; ) {
                    if (null === root.return || root.return === finishedWork)
                      break a;
                    current2 === root && (current2 = null);
                    root = root.return;
                  }
                  current2 === root && (current2 = null);
                  root.sibling.return = root.return;
                  root = root.sibling;
                }
            }
            flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (current2 = flags.retryQueue, null !== current2 && (flags.retryQueue = null, attachSuspenseRetryListeners(finishedWork, current2))));
            break;
          case 19:
            recursivelyTraverseMutationEffects(root, finishedWork);
            commitReconciliationEffects(finishedWork);
            flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (finishedWork.updateQueue = null, attachSuspenseRetryListeners(finishedWork, flags)));
            break;
          case 21:
            break;
          default:
            recursivelyTraverseMutationEffects(root, finishedWork), commitReconciliationEffects(finishedWork);
        }
      }
      function commitReconciliationEffects(finishedWork) {
        var flags = finishedWork.flags;
        if (flags & 2) {
          try {
            runWithFiberInDEV(finishedWork, commitPlacement, finishedWork);
          } catch (error) {
            captureCommitPhaseError(finishedWork, finishedWork.return, error);
          }
          finishedWork.flags &= -3;
        }
        flags & 4096 && (finishedWork.flags &= -4097);
      }
      function recursivelyResetForms(parentFiber) {
        if (parentFiber.subtreeFlags & 1024)
          for (parentFiber = parentFiber.child; null !== parentFiber; ) {
            var fiber = parentFiber;
            recursivelyResetForms(fiber);
            5 === fiber.tag && fiber.flags & 1024 && resetFormInstance(fiber.stateNode);
            parentFiber = parentFiber.sibling;
          }
      }
      function commitLayoutEffects(finishedWork, root, committedLanes) {
        inProgressLanes = committedLanes;
        inProgressRoot = root;
        commitLayoutEffectOnFiber(root, finishedWork.alternate, finishedWork);
        inProgressRoot = inProgressLanes = null;
      }
      function recursivelyTraverseLayoutEffects(root, parentFiber) {
        if (parentFiber.subtreeFlags & 8772)
          for (parentFiber = parentFiber.child; null !== parentFiber; )
            commitLayoutEffectOnFiber(root, parentFiber.alternate, parentFiber), parentFiber = parentFiber.sibling;
      }
      function disappearLayoutEffects(finishedWork) {
        switch (finishedWork.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            commitHookLayoutUnmountEffects(
              finishedWork,
              finishedWork.return,
              Layout
            );
            recursivelyTraverseDisappearLayoutEffects(finishedWork);
            break;
          case 1:
            safelyDetachRef(finishedWork, finishedWork.return);
            var instance = finishedWork.stateNode;
            "function" === typeof instance.componentWillUnmount && safelyCallComponentWillUnmount(
              finishedWork,
              finishedWork.return,
              instance
            );
            recursivelyTraverseDisappearLayoutEffects(finishedWork);
            break;
          case 26:
          case 27:
          case 5:
            safelyDetachRef(finishedWork, finishedWork.return);
            recursivelyTraverseDisappearLayoutEffects(finishedWork);
            break;
          case 22:
            safelyDetachRef(finishedWork, finishedWork.return);
            null === finishedWork.memoizedState && recursivelyTraverseDisappearLayoutEffects(finishedWork);
            break;
          default:
            recursivelyTraverseDisappearLayoutEffects(finishedWork);
        }
      }
      function recursivelyTraverseDisappearLayoutEffects(parentFiber) {
        for (parentFiber = parentFiber.child; null !== parentFiber; )
          disappearLayoutEffects(parentFiber), parentFiber = parentFiber.sibling;
      }
      function reappearLayoutEffects(finishedRoot, current2, finishedWork, includeWorkInProgressEffects) {
        var flags = finishedWork.flags;
        switch (finishedWork.tag) {
          case 0:
          case 11:
          case 15:
            recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              includeWorkInProgressEffects
            );
            commitHookLayoutEffects(finishedWork, Layout);
            break;
          case 1:
            recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              includeWorkInProgressEffects
            );
            current2 = finishedWork.stateNode;
            "function" === typeof current2.componentDidMount && runWithFiberInDEV(
              finishedWork,
              callComponentDidMountInDEV,
              finishedWork,
              current2
            );
            current2 = finishedWork.updateQueue;
            if (null !== current2) {
              finishedRoot = finishedWork.stateNode;
              try {
                runWithFiberInDEV(
                  finishedWork,
                  commitHiddenCallbacks,
                  current2,
                  finishedRoot
                );
              } catch (error) {
                captureCommitPhaseError(finishedWork, finishedWork.return, error);
              }
            }
            includeWorkInProgressEffects && flags & 64 && commitClassCallbacks(finishedWork);
            safelyAttachRef(finishedWork, finishedWork.return);
            break;
          case 26:
          case 27:
          case 5:
            recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              includeWorkInProgressEffects
            );
            includeWorkInProgressEffects && null === current2 && flags & 4 && commitHostMount(finishedWork);
            safelyAttachRef(finishedWork, finishedWork.return);
            break;
          case 12:
            if (includeWorkInProgressEffects && flags & 4) {
              flags = pushNestedEffectDurations();
              recursivelyTraverseReappearLayoutEffects(
                finishedRoot,
                finishedWork,
                includeWorkInProgressEffects
              );
              includeWorkInProgressEffects = finishedWork.stateNode;
              includeWorkInProgressEffects.effectDuration += bubbleNestedEffectDurations(flags);
              try {
                runWithFiberInDEV(
                  finishedWork,
                  commitProfiler,
                  finishedWork,
                  current2,
                  commitStartTime,
                  includeWorkInProgressEffects.effectDuration
                );
              } catch (error) {
                captureCommitPhaseError(finishedWork, finishedWork.return, error);
              }
            } else
              recursivelyTraverseReappearLayoutEffects(
                finishedRoot,
                finishedWork,
                includeWorkInProgressEffects
              );
            break;
          case 13:
            recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              includeWorkInProgressEffects
            );
            includeWorkInProgressEffects && flags & 4 && commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
            break;
          case 22:
            null === finishedWork.memoizedState && recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              includeWorkInProgressEffects
            );
            safelyAttachRef(finishedWork, finishedWork.return);
            break;
          default:
            recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              includeWorkInProgressEffects
            );
        }
      }
      function recursivelyTraverseReappearLayoutEffects(finishedRoot, parentFiber, includeWorkInProgressEffects) {
        includeWorkInProgressEffects = includeWorkInProgressEffects && 0 !== (parentFiber.subtreeFlags & 8772);
        for (parentFiber = parentFiber.child; null !== parentFiber; )
          reappearLayoutEffects(
            finishedRoot,
            parentFiber.alternate,
            parentFiber,
            includeWorkInProgressEffects
          ), parentFiber = parentFiber.sibling;
      }
      function commitOffscreenPassiveMountEffects(current2, finishedWork) {
        var previousCache = null;
        null !== current2 && null !== current2.memoizedState && null !== current2.memoizedState.cachePool && (previousCache = current2.memoizedState.cachePool.pool);
        current2 = null;
        null !== finishedWork.memoizedState && null !== finishedWork.memoizedState.cachePool && (current2 = finishedWork.memoizedState.cachePool.pool);
        current2 !== previousCache && (null != current2 && retainCache(current2), null != previousCache && releaseCache(previousCache));
      }
      function commitCachePassiveMountEffect(current2, finishedWork) {
        current2 = null;
        null !== finishedWork.alternate && (current2 = finishedWork.alternate.memoizedState.cache);
        finishedWork = finishedWork.memoizedState.cache;
        finishedWork !== current2 && (retainCache(finishedWork), null != current2 && releaseCache(current2));
      }
      function recursivelyTraversePassiveMountEffects(root, parentFiber, committedLanes, committedTransitions) {
        if (parentFiber.subtreeFlags & 10256)
          for (parentFiber = parentFiber.child; null !== parentFiber; )
            commitPassiveMountOnFiber(
              root,
              parentFiber,
              committedLanes,
              committedTransitions
            ), parentFiber = parentFiber.sibling;
      }
      function commitPassiveMountOnFiber(finishedRoot, finishedWork, committedLanes, committedTransitions) {
        var flags = finishedWork.flags;
        switch (finishedWork.tag) {
          case 0:
          case 11:
          case 15:
            recursivelyTraversePassiveMountEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions
            );
            flags & 2048 && commitHookPassiveMountEffects(finishedWork, Passive | HasEffect);
            break;
          case 3:
            var prevEffectDuration = pushNestedEffectDurations();
            recursivelyTraversePassiveMountEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions
            );
            flags & 2048 && (committedLanes = null, null !== finishedWork.alternate && (committedLanes = finishedWork.alternate.memoizedState.cache), finishedWork = finishedWork.memoizedState.cache, finishedWork !== committedLanes && (retainCache(finishedWork), null != committedLanes && releaseCache(committedLanes)));
            finishedRoot.passiveEffectDuration += popNestedEffectDurations(prevEffectDuration);
            break;
          case 12:
            if (flags & 2048) {
              prevEffectDuration = pushNestedEffectDurations();
              recursivelyTraversePassiveMountEffects(
                finishedRoot,
                finishedWork,
                committedLanes,
                committedTransitions
              );
              finishedRoot = finishedWork.stateNode;
              finishedRoot.passiveEffectDuration += bubbleNestedEffectDurations(prevEffectDuration);
              try {
                runWithFiberInDEV(
                  finishedWork,
                  commitProfilerPostCommitImpl,
                  finishedWork,
                  finishedWork.alternate,
                  commitStartTime,
                  finishedRoot.passiveEffectDuration
                );
              } catch (error) {
                captureCommitPhaseError(finishedWork, finishedWork.return, error);
              }
            } else
              recursivelyTraversePassiveMountEffects(
                finishedRoot,
                finishedWork,
                committedLanes,
                committedTransitions
              );
            break;
          case 23:
            break;
          case 22:
            prevEffectDuration = finishedWork.stateNode;
            null !== finishedWork.memoizedState ? prevEffectDuration._visibility & 4 ? recursivelyTraversePassiveMountEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions
            ) : recursivelyTraverseAtomicPassiveEffects(
              finishedRoot,
              finishedWork
            ) : prevEffectDuration._visibility & 4 ? recursivelyTraversePassiveMountEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions
            ) : (prevEffectDuration._visibility |= 4, recursivelyTraverseReconnectPassiveEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions,
              0 !== (finishedWork.subtreeFlags & 10256)
            ));
            flags & 2048 && commitOffscreenPassiveMountEffects(
              finishedWork.alternate,
              finishedWork
            );
            break;
          case 24:
            recursivelyTraversePassiveMountEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions
            );
            flags & 2048 && commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
            break;
          default:
            recursivelyTraversePassiveMountEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions
            );
        }
      }
      function recursivelyTraverseReconnectPassiveEffects(finishedRoot, parentFiber, committedLanes, committedTransitions, includeWorkInProgressEffects) {
        includeWorkInProgressEffects = includeWorkInProgressEffects && 0 !== (parentFiber.subtreeFlags & 10256);
        for (parentFiber = parentFiber.child; null !== parentFiber; )
          reconnectPassiveEffects(
            finishedRoot,
            parentFiber,
            committedLanes,
            committedTransitions,
            includeWorkInProgressEffects
          ), parentFiber = parentFiber.sibling;
      }
      function reconnectPassiveEffects(finishedRoot, finishedWork, committedLanes, committedTransitions, includeWorkInProgressEffects) {
        var flags = finishedWork.flags;
        switch (finishedWork.tag) {
          case 0:
          case 11:
          case 15:
            recursivelyTraverseReconnectPassiveEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions,
              includeWorkInProgressEffects
            );
            commitHookPassiveMountEffects(finishedWork, Passive);
            break;
          case 23:
            break;
          case 22:
            var _instance2 = finishedWork.stateNode;
            null !== finishedWork.memoizedState ? _instance2._visibility & 4 ? recursivelyTraverseReconnectPassiveEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions,
              includeWorkInProgressEffects
            ) : recursivelyTraverseAtomicPassiveEffects(
              finishedRoot,
              finishedWork
            ) : (_instance2._visibility |= 4, recursivelyTraverseReconnectPassiveEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions,
              includeWorkInProgressEffects
            ));
            includeWorkInProgressEffects && flags & 2048 && commitOffscreenPassiveMountEffects(
              finishedWork.alternate,
              finishedWork
            );
            break;
          case 24:
            recursivelyTraverseReconnectPassiveEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions,
              includeWorkInProgressEffects
            );
            includeWorkInProgressEffects && flags & 2048 && commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
            break;
          default:
            recursivelyTraverseReconnectPassiveEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions,
              includeWorkInProgressEffects
            );
        }
      }
      function recursivelyTraverseAtomicPassiveEffects(finishedRoot$jscomp$0, parentFiber) {
        if (parentFiber.subtreeFlags & 10256)
          for (parentFiber = parentFiber.child; null !== parentFiber; ) {
            var finishedRoot = finishedRoot$jscomp$0, finishedWork = parentFiber, flags = finishedWork.flags;
            switch (finishedWork.tag) {
              case 22:
                recursivelyTraverseAtomicPassiveEffects(
                  finishedRoot,
                  finishedWork
                );
                flags & 2048 && commitOffscreenPassiveMountEffects(
                  finishedWork.alternate,
                  finishedWork
                );
                break;
              case 24:
                recursivelyTraverseAtomicPassiveEffects(
                  finishedRoot,
                  finishedWork
                );
                flags & 2048 && commitCachePassiveMountEffect(
                  finishedWork.alternate,
                  finishedWork
                );
                break;
              default:
                recursivelyTraverseAtomicPassiveEffects(
                  finishedRoot,
                  finishedWork
                );
            }
            parentFiber = parentFiber.sibling;
          }
      }
      function recursivelyAccumulateSuspenseyCommit(parentFiber) {
        if (parentFiber.subtreeFlags & suspenseyCommitFlag)
          for (parentFiber = parentFiber.child; null !== parentFiber; )
            accumulateSuspenseyCommitOnFiber(parentFiber), parentFiber = parentFiber.sibling;
      }
      function accumulateSuspenseyCommitOnFiber(fiber) {
        switch (fiber.tag) {
          case 26:
            recursivelyAccumulateSuspenseyCommit(fiber);
            fiber.flags & suspenseyCommitFlag && (null !== fiber.memoizedState ? suspendResource(
              currentHoistableRoot,
              fiber.memoizedState,
              fiber.memoizedProps
            ) : suspendInstance(fiber.type, fiber.memoizedProps));
            break;
          case 5:
            recursivelyAccumulateSuspenseyCommit(fiber);
            fiber.flags & suspenseyCommitFlag && suspendInstance(fiber.type, fiber.memoizedProps);
            break;
          case 3:
          case 4:
            if (supportsResources) {
              var previousHoistableRoot = currentHoistableRoot;
              currentHoistableRoot = getHoistableRoot(
                fiber.stateNode.containerInfo
              );
              recursivelyAccumulateSuspenseyCommit(fiber);
              currentHoistableRoot = previousHoistableRoot;
            } else recursivelyAccumulateSuspenseyCommit(fiber);
            break;
          case 22:
            null === fiber.memoizedState && (previousHoistableRoot = fiber.alternate, null !== previousHoistableRoot && null !== previousHoistableRoot.memoizedState ? (previousHoistableRoot = suspenseyCommitFlag, suspenseyCommitFlag = 16777216, recursivelyAccumulateSuspenseyCommit(fiber), suspenseyCommitFlag = previousHoistableRoot) : recursivelyAccumulateSuspenseyCommit(fiber));
            break;
          default:
            recursivelyAccumulateSuspenseyCommit(fiber);
        }
      }
      function detachAlternateSiblings(parentFiber) {
        var previousFiber = parentFiber.alternate;
        if (null !== previousFiber && (parentFiber = previousFiber.child, null !== parentFiber)) {
          previousFiber.child = null;
          do
            previousFiber = parentFiber.sibling, parentFiber.sibling = null, parentFiber = previousFiber;
          while (null !== parentFiber);
        }
      }
      function recursivelyTraversePassiveUnmountEffects(parentFiber) {
        var deletions = parentFiber.deletions;
        if (0 !== (parentFiber.flags & 16)) {
          if (null !== deletions)
            for (var i3 = 0; i3 < deletions.length; i3++) {
              var childToDelete = deletions[i3];
              nextEffect = childToDelete;
              commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
                childToDelete,
                parentFiber
              );
            }
          detachAlternateSiblings(parentFiber);
        }
        if (parentFiber.subtreeFlags & 10256)
          for (parentFiber = parentFiber.child; null !== parentFiber; )
            commitPassiveUnmountOnFiber(parentFiber), parentFiber = parentFiber.sibling;
      }
      function commitPassiveUnmountOnFiber(finishedWork) {
        switch (finishedWork.tag) {
          case 0:
          case 11:
          case 15:
            recursivelyTraversePassiveUnmountEffects(finishedWork);
            finishedWork.flags & 2048 && commitHookPassiveUnmountEffects(
              finishedWork,
              finishedWork.return,
              Passive | HasEffect
            );
            break;
          case 3:
            var prevEffectDuration = pushNestedEffectDurations();
            recursivelyTraversePassiveUnmountEffects(finishedWork);
            finishedWork.stateNode.passiveEffectDuration += popNestedEffectDurations(prevEffectDuration);
            break;
          case 12:
            prevEffectDuration = pushNestedEffectDurations();
            recursivelyTraversePassiveUnmountEffects(finishedWork);
            finishedWork.stateNode.passiveEffectDuration += bubbleNestedEffectDurations(prevEffectDuration);
            break;
          case 22:
            prevEffectDuration = finishedWork.stateNode;
            null !== finishedWork.memoizedState && prevEffectDuration._visibility & 4 && (null === finishedWork.return || 13 !== finishedWork.return.tag) ? (prevEffectDuration._visibility &= -5, recursivelyTraverseDisconnectPassiveEffects(finishedWork)) : recursivelyTraversePassiveUnmountEffects(finishedWork);
            break;
          default:
            recursivelyTraversePassiveUnmountEffects(finishedWork);
        }
      }
      function recursivelyTraverseDisconnectPassiveEffects(parentFiber) {
        var deletions = parentFiber.deletions;
        if (0 !== (parentFiber.flags & 16)) {
          if (null !== deletions)
            for (var i3 = 0; i3 < deletions.length; i3++) {
              var childToDelete = deletions[i3];
              nextEffect = childToDelete;
              commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
                childToDelete,
                parentFiber
              );
            }
          detachAlternateSiblings(parentFiber);
        }
        for (parentFiber = parentFiber.child; null !== parentFiber; )
          disconnectPassiveEffect(parentFiber), parentFiber = parentFiber.sibling;
      }
      function disconnectPassiveEffect(finishedWork) {
        switch (finishedWork.tag) {
          case 0:
          case 11:
          case 15:
            commitHookPassiveUnmountEffects(
              finishedWork,
              finishedWork.return,
              Passive
            );
            recursivelyTraverseDisconnectPassiveEffects(finishedWork);
            break;
          case 22:
            var instance = finishedWork.stateNode;
            instance._visibility & 4 && (instance._visibility &= -5, recursivelyTraverseDisconnectPassiveEffects(finishedWork));
            break;
          default:
            recursivelyTraverseDisconnectPassiveEffects(finishedWork);
        }
      }
      function commitPassiveUnmountEffectsInsideOfDeletedTree_begin(deletedSubtreeRoot, nearestMountedAncestor) {
        for (; null !== nextEffect; ) {
          var fiber = nextEffect, current2 = fiber;
          switch (current2.tag) {
            case 0:
            case 11:
            case 15:
              commitHookPassiveUnmountEffects(
                current2,
                nearestMountedAncestor,
                Passive
              );
              break;
            case 23:
            case 22:
              null !== current2.memoizedState && null !== current2.memoizedState.cachePool && (current2 = current2.memoizedState.cachePool.pool, null != current2 && retainCache(current2));
              break;
            case 24:
              releaseCache(current2.memoizedState.cache);
          }
          current2 = fiber.child;
          if (null !== current2) current2.return = fiber, nextEffect = current2;
          else
            a: for (fiber = deletedSubtreeRoot; null !== nextEffect; ) {
              current2 = nextEffect;
              var sibling = current2.sibling, returnFiber = current2.return;
              detachFiberAfterEffects(current2);
              if (current2 === fiber) {
                nextEffect = null;
                break a;
              }
              if (null !== sibling) {
                sibling.return = returnFiber;
                nextEffect = sibling;
                break a;
              }
              nextEffect = returnFiber;
            }
        }
      }
      function findFiberRootForHostRoot(hostRoot) {
        var maybeFiber = getInstanceFromNode(hostRoot);
        if (null != maybeFiber) {
          if ("string" !== typeof maybeFiber.memoizedProps["data-testname"])
            throw Error(
              "Invalid host root specified. Should be either a React container or a node with a testname attribute."
            );
          return maybeFiber;
        }
        hostRoot = findFiberRoot(hostRoot);
        if (null === hostRoot)
          throw Error(
            "Could not find React container within specified host subtree."
          );
        return hostRoot.stateNode.current;
      }
      function matchSelector(fiber$jscomp$0, selector) {
        var tag = fiber$jscomp$0.tag;
        switch (selector.$$typeof) {
          case COMPONENT_TYPE:
            if (fiber$jscomp$0.type === selector.value) return true;
            break;
          case HAS_PSEUDO_CLASS_TYPE:
            a: {
              selector = selector.value;
              fiber$jscomp$0 = [fiber$jscomp$0, 0];
              for (tag = 0; tag < fiber$jscomp$0.length; ) {
                var fiber = fiber$jscomp$0[tag++], tag$jscomp$0 = fiber.tag, selectorIndex = fiber$jscomp$0[tag++], selector$jscomp$0 = selector[selectorIndex];
                if (5 !== tag$jscomp$0 && 26 !== tag$jscomp$0 && 27 !== tag$jscomp$0 || !isHiddenSubtree(fiber)) {
                  for (; null != selector$jscomp$0 && matchSelector(fiber, selector$jscomp$0); )
                    selectorIndex++, selector$jscomp$0 = selector[selectorIndex];
                  if (selectorIndex === selector.length) {
                    selector = true;
                    break a;
                  } else
                    for (fiber = fiber.child; null !== fiber; )
                      fiber$jscomp$0.push(fiber, selectorIndex), fiber = fiber.sibling;
                }
              }
              selector = false;
            }
            return selector;
          case ROLE_TYPE:
            if ((5 === tag || 26 === tag || 27 === tag) && matchAccessibilityRole(fiber$jscomp$0.stateNode, selector.value))
              return true;
            break;
          case TEXT_TYPE:
            if (5 === tag || 6 === tag || 26 === tag || 27 === tag) {
              if (fiber$jscomp$0 = getTextContent(fiber$jscomp$0), null !== fiber$jscomp$0 && 0 <= fiber$jscomp$0.indexOf(selector.value))
                return true;
            }
            break;
          case TEST_NAME_TYPE:
            if (5 === tag || 26 === tag || 27 === tag) {
              if (fiber$jscomp$0 = fiber$jscomp$0.memoizedProps["data-testname"], "string" === typeof fiber$jscomp$0 && fiber$jscomp$0.toLowerCase() === selector.value.toLowerCase())
                return true;
            }
            break;
          default:
            throw Error("Invalid selector type specified.");
        }
        return false;
      }
      function selectorToString(selector) {
        switch (selector.$$typeof) {
          case COMPONENT_TYPE:
            return "<" + (getComponentNameFromType(selector.value) || "Unknown") + ">";
          case HAS_PSEUDO_CLASS_TYPE:
            return ":has(" + (selectorToString(selector) || "") + ")";
          case ROLE_TYPE:
            return '[role="' + selector.value + '"]';
          case TEXT_TYPE:
            return '"' + selector.value + '"';
          case TEST_NAME_TYPE:
            return '[data-testname="' + selector.value + '"]';
          default:
            throw Error("Invalid selector type specified.");
        }
      }
      function findPaths(root, selectors) {
        var matchingFibers = [];
        root = [root, 0];
        for (var index = 0; index < root.length; ) {
          var fiber = root[index++], tag = fiber.tag, selectorIndex = root[index++], selector = selectors[selectorIndex];
          if (5 !== tag && 26 !== tag && 27 !== tag || !isHiddenSubtree(fiber)) {
            for (; null != selector && matchSelector(fiber, selector); )
              selectorIndex++, selector = selectors[selectorIndex];
            if (selectorIndex === selectors.length) matchingFibers.push(fiber);
            else
              for (fiber = fiber.child; null !== fiber; )
                root.push(fiber, selectorIndex), fiber = fiber.sibling;
          }
        }
        return matchingFibers;
      }
      function findAllNodes(hostRoot, selectors) {
        if (!supportsTestSelectors)
          throw Error("Test selector API is not supported by this renderer.");
        hostRoot = findFiberRootForHostRoot(hostRoot);
        hostRoot = findPaths(hostRoot, selectors);
        selectors = [];
        hostRoot = Array.from(hostRoot);
        for (var index = 0; index < hostRoot.length; ) {
          var node = hostRoot[index++], tag = node.tag;
          if (5 === tag || 26 === tag || 27 === tag)
            isHiddenSubtree(node) || selectors.push(node.stateNode);
          else
            for (node = node.child; null !== node; )
              hostRoot.push(node), node = node.sibling;
        }
        return selectors;
      }
      function onCommitRoot() {
        supportsTestSelectors && commitHooks.forEach(function(commitHook) {
          return commitHook();
        });
      }
      function isConcurrentActEnvironment() {
        var isReactActEnvironmentGlobal = "undefined" !== typeof IS_REACT_ACT_ENVIRONMENT ? IS_REACT_ACT_ENVIRONMENT : void 0;
        isReactActEnvironmentGlobal || null === ReactSharedInternals.actQueue || console.error(
          "The current testing environment is not configured to support act(...)"
        );
        return isReactActEnvironmentGlobal;
      }
      function requestUpdateLane(fiber) {
        if ((executionContext & RenderContext) !== NoContext && 0 !== workInProgressRootRenderLanes)
          return workInProgressRootRenderLanes & -workInProgressRootRenderLanes;
        var transition = ReactSharedInternals.T;
        return null !== transition ? (transition._updatedFibers || (transition._updatedFibers = /* @__PURE__ */ new Set()), transition._updatedFibers.add(fiber), fiber = currentEntangledLane, 0 !== fiber ? fiber : requestTransitionLane()) : resolveUpdatePriority();
      }
      function requestDeferredLane() {
        0 === workInProgressDeferredLane && (workInProgressDeferredLane = 0 === (workInProgressRootRenderLanes & 536870912) || isHydrating ? claimNextTransitionLane() : 536870912);
        var suspenseHandler = suspenseHandlerStackCursor.current;
        null !== suspenseHandler && (suspenseHandler.flags |= 32);
        return workInProgressDeferredLane;
      }
      function scheduleUpdateOnFiber(root, fiber, lane) {
        isRunningInsertionEffect && console.error("useInsertionEffect must not schedule updates.");
        isFlushingPassiveEffects && (didScheduleUpdateDuringPassiveEffects = true);
        if (root === workInProgressRoot && workInProgressSuspendedReason === SuspendedOnData || null !== root.cancelPendingCommit)
          prepareFreshStack(root, 0), markRootSuspended(
            root,
            workInProgressRootRenderLanes,
            workInProgressDeferredLane,
            false
          );
        markRootUpdated$1(root, lane);
        if (0 !== (executionContext & RenderContext) && root === workInProgressRoot) {
          if (isRendering)
            switch (fiber.tag) {
              case 0:
              case 11:
              case 15:
                root = workInProgress && getComponentNameFromFiber(workInProgress) || "Unknown";
                didWarnAboutUpdateInRenderForAnotherComponent.has(root) || (didWarnAboutUpdateInRenderForAnotherComponent.add(root), fiber = getComponentNameFromFiber(fiber) || "Unknown", console.error(
                  "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                  fiber,
                  root,
                  root
                ));
                break;
              case 1:
                didWarnAboutUpdateInRender || (console.error(
                  "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
                ), didWarnAboutUpdateInRender = true);
            }
        } else
          isDevToolsPresent && addFiberToLanesMap(root, fiber, lane), warnIfUpdatesNotWrappedWithActDEV(fiber), root === workInProgressRoot && ((executionContext & RenderContext) === NoContext && (workInProgressRootInterleavedUpdatedLanes |= lane), workInProgressRootExitStatus === RootSuspendedWithDelay && markRootSuspended(
            root,
            workInProgressRootRenderLanes,
            workInProgressDeferredLane,
            false
          )), ensureRootIsScheduled(root);
      }
      function performWorkOnRoot(root, lanes, forceSync) {
        if ((executionContext & (RenderContext | CommitContext)) !== NoContext)
          throw Error("Should not already be working.");
        var shouldTimeSlice = !forceSync && 0 === (lanes & 60) && 0 === (lanes & root.expiredLanes) || checkIfRootIsPrerendering(root, lanes), exitStatus = shouldTimeSlice ? renderRootConcurrent(root, lanes) : renderRootSync(root, lanes, true), renderWasConcurrent = shouldTimeSlice;
        do {
          if (exitStatus === RootInProgress) {
            workInProgressRootIsPrerendering && !shouldTimeSlice && markRootSuspended(root, lanes, 0, false);
            break;
          } else if (exitStatus === RootDidNotComplete)
            markRootSuspended(
              root,
              lanes,
              0,
              !workInProgressRootDidSkipSuspendedSiblings
            );
          else {
            forceSync = root.current.alternate;
            if (renderWasConcurrent && !isRenderConsistentWithExternalStores(forceSync)) {
              exitStatus = renderRootSync(root, lanes, false);
              renderWasConcurrent = false;
              continue;
            }
            if (exitStatus === RootErrored) {
              renderWasConcurrent = lanes;
              if (root.errorRecoveryDisabledLanes & renderWasConcurrent)
                var errorRetryLanes = 0;
              else
                errorRetryLanes = root.pendingLanes & -536870913, errorRetryLanes = 0 !== errorRetryLanes ? errorRetryLanes : errorRetryLanes & 536870912 ? 536870912 : 0;
              if (0 !== errorRetryLanes) {
                lanes = errorRetryLanes;
                a: {
                  exitStatus = root;
                  var errorRetryLanes$jscomp$0 = errorRetryLanes;
                  errorRetryLanes = workInProgressRootConcurrentErrors;
                  var wasRootDehydrated = supportsHydration && exitStatus.current.memoizedState.isDehydrated;
                  wasRootDehydrated && (prepareFreshStack(
                    exitStatus,
                    errorRetryLanes$jscomp$0
                  ).flags |= 256);
                  errorRetryLanes$jscomp$0 = renderRootSync(
                    exitStatus,
                    errorRetryLanes$jscomp$0,
                    false
                  );
                  if (errorRetryLanes$jscomp$0 !== RootErrored) {
                    if (workInProgressRootDidAttachPingListener && !wasRootDehydrated) {
                      exitStatus.errorRecoveryDisabledLanes |= renderWasConcurrent;
                      workInProgressRootInterleavedUpdatedLanes |= renderWasConcurrent;
                      exitStatus = RootSuspendedWithDelay;
                      break a;
                    }
                    exitStatus = workInProgressRootRecoverableErrors;
                    workInProgressRootRecoverableErrors = errorRetryLanes;
                    null !== exitStatus && queueRecoverableErrors(exitStatus);
                  }
                  exitStatus = errorRetryLanes$jscomp$0;
                }
                renderWasConcurrent = false;
                if (exitStatus !== RootErrored) continue;
              }
            }
            if (exitStatus === RootFatalErrored) {
              prepareFreshStack(root, 0);
              markRootSuspended(root, lanes, 0, true);
              break;
            }
            a: {
              shouldTimeSlice = root;
              switch (exitStatus) {
                case RootInProgress:
                case RootFatalErrored:
                  throw Error("Root did not complete. This is a bug in React.");
                case RootSuspendedWithDelay:
                  if ((lanes & 4194176) === lanes) {
                    markRootSuspended(
                      shouldTimeSlice,
                      lanes,
                      workInProgressDeferredLane,
                      !workInProgressRootDidSkipSuspendedSiblings
                    );
                    break a;
                  }
                  break;
                case RootErrored:
                  workInProgressRootRecoverableErrors = null;
                  break;
                case RootSuspended:
                case RootCompleted:
                  break;
                default:
                  throw Error("Unknown root exit status.");
              }
              shouldTimeSlice.finishedWork = forceSync;
              shouldTimeSlice.finishedLanes = lanes;
              if (null !== ReactSharedInternals.actQueue)
                commitRoot(
                  shouldTimeSlice,
                  workInProgressRootRecoverableErrors,
                  workInProgressTransitions,
                  workInProgressRootDidIncludeRecursiveRenderUpdate,
                  workInProgressDeferredLane,
                  workInProgressRootInterleavedUpdatedLanes,
                  workInProgressSuspendedRetryLanes,
                  IMMEDIATE_COMMIT,
                  -0,
                  0
                );
              else {
                if ((lanes & 62914560) === lanes && (exitStatus = globalMostRecentFallbackTime + FALLBACK_THROTTLE_MS - now$1(), 10 < exitStatus)) {
                  markRootSuspended(
                    shouldTimeSlice,
                    lanes,
                    workInProgressDeferredLane,
                    !workInProgressRootDidSkipSuspendedSiblings
                  );
                  if (0 !== getNextLanes(shouldTimeSlice, 0)) break a;
                  shouldTimeSlice.timeoutHandle = scheduleTimeout(
                    commitRootWhenReady.bind(
                      null,
                      shouldTimeSlice,
                      forceSync,
                      workInProgressRootRecoverableErrors,
                      workInProgressTransitions,
                      workInProgressRootDidIncludeRecursiveRenderUpdate,
                      lanes,
                      workInProgressDeferredLane,
                      workInProgressRootInterleavedUpdatedLanes,
                      workInProgressSuspendedRetryLanes,
                      workInProgressRootDidSkipSuspendedSiblings,
                      THROTTLED_COMMIT,
                      -0,
                      0
                    ),
                    exitStatus
                  );
                  break a;
                }
                commitRootWhenReady(
                  shouldTimeSlice,
                  forceSync,
                  workInProgressRootRecoverableErrors,
                  workInProgressTransitions,
                  workInProgressRootDidIncludeRecursiveRenderUpdate,
                  lanes,
                  workInProgressDeferredLane,
                  workInProgressRootInterleavedUpdatedLanes,
                  workInProgressSuspendedRetryLanes,
                  workInProgressRootDidSkipSuspendedSiblings,
                  IMMEDIATE_COMMIT,
                  -0,
                  0
                );
              }
            }
          }
          break;
        } while (1);
        ensureRootIsScheduled(root);
      }
      function queueRecoverableErrors(errors) {
        null === workInProgressRootRecoverableErrors ? workInProgressRootRecoverableErrors = errors : workInProgressRootRecoverableErrors.push.apply(
          workInProgressRootRecoverableErrors,
          errors
        );
      }
      function commitRootWhenReady(root, finishedWork, recoverableErrors, transitions, didIncludeRenderPhaseUpdate, lanes, spawnedLane, updatedLanes, suspendedRetryLanes, didSkipSuspendedSiblings, suspendedCommitReason, completedRenderStartTime, completedRenderEndTime) {
        var subtreeFlags = finishedWork.subtreeFlags;
        if (subtreeFlags & 8192 || 16785408 === (subtreeFlags & 16785408)) {
          if (startSuspendingCommit(), accumulateSuspenseyCommitOnFiber(finishedWork), finishedWork = waitForCommitToBeReady(), null !== finishedWork) {
            root.cancelPendingCommit = finishedWork(
              commitRoot.bind(
                null,
                root,
                recoverableErrors,
                transitions,
                didIncludeRenderPhaseUpdate,
                spawnedLane,
                updatedLanes,
                suspendedRetryLanes,
                SUSPENDED_COMMIT,
                completedRenderStartTime,
                completedRenderEndTime
              )
            );
            markRootSuspended(
              root,
              lanes,
              spawnedLane,
              !didSkipSuspendedSiblings
            );
            return;
          }
        }
        commitRoot(
          root,
          recoverableErrors,
          transitions,
          didIncludeRenderPhaseUpdate,
          spawnedLane,
          updatedLanes,
          suspendedRetryLanes,
          suspendedCommitReason,
          completedRenderStartTime,
          completedRenderEndTime
        );
      }
      function isRenderConsistentWithExternalStores(finishedWork) {
        for (var node = finishedWork; ; ) {
          var tag = node.tag;
          if ((0 === tag || 11 === tag || 15 === tag) && node.flags & 16384 && (tag = node.updateQueue, null !== tag && (tag = tag.stores, null !== tag)))
            for (var i3 = 0; i3 < tag.length; i3++) {
              var check = tag[i3], getSnapshot = check.getSnapshot;
              check = check.value;
              try {
                if (!objectIs(getSnapshot(), check)) return false;
              } catch (error) {
                return false;
              }
            }
          tag = node.child;
          if (node.subtreeFlags & 16384 && null !== tag)
            tag.return = node, node = tag;
          else {
            if (node === finishedWork) break;
            for (; null === node.sibling; ) {
              if (null === node.return || node.return === finishedWork) return true;
              node = node.return;
            }
            node.sibling.return = node.return;
            node = node.sibling;
          }
        }
        return true;
      }
      function markRootSuspended(root, suspendedLanes, spawnedLane, didAttemptEntireTree) {
        suspendedLanes &= ~workInProgressRootPingedLanes;
        suspendedLanes &= ~workInProgressRootInterleavedUpdatedLanes;
        root.suspendedLanes |= suspendedLanes;
        root.pingedLanes &= ~suspendedLanes;
        didAttemptEntireTree && (root.warmLanes |= suspendedLanes);
        didAttemptEntireTree = root.expirationTimes;
        for (var lanes = suspendedLanes; 0 < lanes; ) {
          var index = 31 - clz32(lanes), lane = 1 << index;
          didAttemptEntireTree[index] = -1;
          lanes &= ~lane;
        }
        0 !== spawnedLane && markSpawnedDeferredLane(root, spawnedLane, suspendedLanes);
      }
      function flushSyncWork() {
        return (executionContext & (RenderContext | CommitContext)) === NoContext ? (flushSyncWorkAcrossRoots_impl(0, false), false) : true;
      }
      function resetWorkInProgressStack() {
        if (null !== workInProgress) {
          if (workInProgressSuspendedReason === NotSuspended)
            var interruptedWork = workInProgress.return;
          else
            interruptedWork = workInProgress, resetContextDependencies(), resetHooksOnUnwind(interruptedWork), thenableState$1 = null, thenableIndexCounter$1 = 0, interruptedWork = workInProgress;
          for (; null !== interruptedWork; )
            unwindInterruptedWork(interruptedWork.alternate, interruptedWork), interruptedWork = interruptedWork.return;
          workInProgress = null;
        }
      }
      function prepareFreshStack(root, lanes) {
        root.finishedWork = null;
        root.finishedLanes = 0;
        var timeoutHandle = root.timeoutHandle;
        timeoutHandle !== noTimeout && (root.timeoutHandle = noTimeout, cancelTimeout(timeoutHandle));
        timeoutHandle = root.cancelPendingCommit;
        null !== timeoutHandle && (root.cancelPendingCommit = null, timeoutHandle());
        resetWorkInProgressStack();
        workInProgressRoot = root;
        workInProgress = timeoutHandle = createWorkInProgress(root.current, null);
        workInProgressRootRenderLanes = lanes;
        workInProgressSuspendedReason = NotSuspended;
        workInProgressThrownValue = null;
        workInProgressRootDidSkipSuspendedSiblings = false;
        workInProgressRootIsPrerendering = checkIfRootIsPrerendering(root, lanes);
        workInProgressRootDidAttachPingListener = false;
        workInProgressRootExitStatus = RootInProgress;
        workInProgressSuspendedRetryLanes = workInProgressDeferredLane = workInProgressRootPingedLanes = workInProgressRootInterleavedUpdatedLanes = workInProgressRootSkippedLanes = 0;
        workInProgressRootRecoverableErrors = workInProgressRootConcurrentErrors = null;
        workInProgressRootDidIncludeRecursiveRenderUpdate = false;
        0 !== (lanes & 8) && (lanes |= lanes & 32);
        var allEntangledLanes = root.entangledLanes;
        if (0 !== allEntangledLanes)
          for (root = root.entanglements, allEntangledLanes &= lanes; 0 < allEntangledLanes; ) {
            var index = 31 - clz32(allEntangledLanes), lane = 1 << index;
            lanes |= root[index];
            allEntangledLanes &= ~lane;
          }
        entangledRenderLanes = lanes;
        finishQueueingConcurrentUpdates();
        ReactStrictModeWarnings.discardPendingWarnings();
        return timeoutHandle;
      }
      function handleThrow(root, thrownValue) {
        currentlyRenderingFiber$1 = null;
        ReactSharedInternals.H = ContextOnlyDispatcher;
        ReactSharedInternals.getCurrentStack = null;
        isRendering = false;
        current = null;
        thrownValue === SuspenseException ? (thrownValue = getSuspendedThenable(), workInProgressSuspendedReason = SuspendedOnImmediate) : thrownValue === SuspenseyCommitException ? (thrownValue = getSuspendedThenable(), workInProgressSuspendedReason = SuspendedOnInstance) : workInProgressSuspendedReason = thrownValue === SelectiveHydrationException ? SuspendedOnHydration : null !== thrownValue && "object" === typeof thrownValue && "function" === typeof thrownValue.then ? SuspendedOnDeprecatedThrowPromise : SuspendedOnError;
        workInProgressThrownValue = thrownValue;
        var erroredWork = workInProgress;
        if (null === erroredWork)
          workInProgressRootExitStatus = RootFatalErrored, logUncaughtError(
            root,
            createCapturedValueAtFiber(thrownValue, root.current)
          );
        else
          switch (erroredWork.mode & 2 && stopProfilerTimerIfRunningAndRecordDuration(erroredWork), markComponentRenderStopped(), workInProgressSuspendedReason) {
            case SuspendedOnError:
              null !== injectedProfilingHooks && "function" === typeof injectedProfilingHooks.markComponentErrored && injectedProfilingHooks.markComponentErrored(
                erroredWork,
                thrownValue,
                workInProgressRootRenderLanes
              );
              break;
            case SuspendedOnData:
            case SuspendedOnImmediate:
            case SuspendedOnDeprecatedThrowPromise:
            case SuspendedAndReadyToContinue:
              null !== injectedProfilingHooks && "function" === typeof injectedProfilingHooks.markComponentSuspended && injectedProfilingHooks.markComponentSuspended(
                erroredWork,
                thrownValue,
                workInProgressRootRenderLanes
              );
          }
      }
      function shouldRemainOnPreviousScreen() {
        var handler = suspenseHandlerStackCursor.current;
        return null === handler ? true : (workInProgressRootRenderLanes & 4194176) === workInProgressRootRenderLanes ? null === shellBoundary ? true : false : (workInProgressRootRenderLanes & 62914560) === workInProgressRootRenderLanes || 0 !== (workInProgressRootRenderLanes & 536870912) ? handler === shellBoundary : false;
      }
      function pushDispatcher() {
        var prevDispatcher = ReactSharedInternals.H;
        ReactSharedInternals.H = ContextOnlyDispatcher;
        return null === prevDispatcher ? ContextOnlyDispatcher : prevDispatcher;
      }
      function pushAsyncDispatcher() {
        var prevAsyncDispatcher = ReactSharedInternals.A;
        ReactSharedInternals.A = DefaultAsyncDispatcher;
        return prevAsyncDispatcher;
      }
      function renderDidSuspendDelayIfPossible() {
        workInProgressRootExitStatus = RootSuspendedWithDelay;
        workInProgressRootDidSkipSuspendedSiblings || (workInProgressRootRenderLanes & 4194176) !== workInProgressRootRenderLanes && null !== suspenseHandlerStackCursor.current || (workInProgressRootIsPrerendering = true);
        0 === (workInProgressRootSkippedLanes & 134217727) && 0 === (workInProgressRootInterleavedUpdatedLanes & 134217727) || null === workInProgressRoot || markRootSuspended(
          workInProgressRoot,
          workInProgressRootRenderLanes,
          workInProgressDeferredLane,
          false
        );
      }
      function renderRootSync(root, lanes, shouldYieldForPrerendering) {
        var prevExecutionContext = executionContext;
        executionContext |= RenderContext;
        var prevDispatcher = pushDispatcher(), prevAsyncDispatcher = pushAsyncDispatcher();
        if (workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes) {
          if (isDevToolsPresent) {
            var memoizedUpdaters = root.memoizedUpdaters;
            0 < memoizedUpdaters.size && (restorePendingUpdaters(root, workInProgressRootRenderLanes), memoizedUpdaters.clear());
            movePendingFibersToMemoized(root, lanes);
          }
          workInProgressTransitions = null;
          prepareFreshStack(root, lanes);
        }
        markRenderStarted(lanes);
        lanes = false;
        memoizedUpdaters = workInProgressRootExitStatus;
        a: do
          try {
            if (workInProgressSuspendedReason !== NotSuspended && null !== workInProgress) {
              var unitOfWork = workInProgress, thrownValue = workInProgressThrownValue;
              switch (workInProgressSuspendedReason) {
                case SuspendedOnHydration:
                  resetWorkInProgressStack();
                  memoizedUpdaters = RootDidNotComplete;
                  break a;
                case SuspendedOnImmediate:
                case SuspendedOnData:
                case SuspendedOnDeprecatedThrowPromise:
                  null === suspenseHandlerStackCursor.current && (lanes = true);
                  var reason = workInProgressSuspendedReason;
                  workInProgressSuspendedReason = NotSuspended;
                  workInProgressThrownValue = null;
                  throwAndUnwindWorkLoop(root, unitOfWork, thrownValue, reason);
                  if (shouldYieldForPrerendering && workInProgressRootIsPrerendering) {
                    memoizedUpdaters = RootInProgress;
                    break a;
                  }
                  break;
                default:
                  reason = workInProgressSuspendedReason, workInProgressSuspendedReason = NotSuspended, workInProgressThrownValue = null, throwAndUnwindWorkLoop(root, unitOfWork, thrownValue, reason);
              }
            }
            workLoopSync();
            memoizedUpdaters = workInProgressRootExitStatus;
            break;
          } catch (thrownValue$4) {
            handleThrow(root, thrownValue$4);
          }
        while (1);
        lanes && root.shellSuspendCounter++;
        resetContextDependencies();
        executionContext = prevExecutionContext;
        ReactSharedInternals.H = prevDispatcher;
        ReactSharedInternals.A = prevAsyncDispatcher;
        markRenderStopped();
        null === workInProgress && (workInProgressRoot = null, workInProgressRootRenderLanes = 0, finishQueueingConcurrentUpdates());
        return memoizedUpdaters;
      }
      function workLoopSync() {
        for (; null !== workInProgress; ) performUnitOfWork(workInProgress);
      }
      function renderRootConcurrent(root, lanes) {
        var prevExecutionContext = executionContext;
        executionContext |= RenderContext;
        var prevDispatcher = pushDispatcher(), prevAsyncDispatcher = pushAsyncDispatcher();
        if (workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes) {
          if (isDevToolsPresent) {
            var memoizedUpdaters = root.memoizedUpdaters;
            0 < memoizedUpdaters.size && (restorePendingUpdaters(root, workInProgressRootRenderLanes), memoizedUpdaters.clear());
            movePendingFibersToMemoized(root, lanes);
          }
          workInProgressTransitions = null;
          workInProgressRootRenderTargetTime = now$1() + RENDER_TIMEOUT_MS;
          prepareFreshStack(root, lanes);
        } else
          workInProgressRootIsPrerendering = checkIfRootIsPrerendering(
            root,
            lanes
          );
        markRenderStarted(lanes);
        a: do
          try {
            if (workInProgressSuspendedReason !== NotSuspended && null !== workInProgress)
              b: switch (lanes = workInProgress, memoizedUpdaters = workInProgressThrownValue, workInProgressSuspendedReason) {
                case SuspendedOnError:
                  workInProgressSuspendedReason = NotSuspended;
                  workInProgressThrownValue = null;
                  throwAndUnwindWorkLoop(
                    root,
                    lanes,
                    memoizedUpdaters,
                    SuspendedOnError
                  );
                  break;
                case SuspendedOnData:
                  if (isThenableResolved(memoizedUpdaters)) {
                    workInProgressSuspendedReason = NotSuspended;
                    workInProgressThrownValue = null;
                    replaySuspendedUnitOfWork(lanes);
                    break;
                  }
                  lanes = function() {
                    workInProgressSuspendedReason === SuspendedOnData && workInProgressRoot === root && (workInProgressSuspendedReason = SuspendedAndReadyToContinue);
                    ensureRootIsScheduled(root);
                  };
                  memoizedUpdaters.then(lanes, lanes);
                  break a;
                case SuspendedOnImmediate:
                  workInProgressSuspendedReason = SuspendedAndReadyToContinue;
                  break a;
                case SuspendedOnInstance:
                  workInProgressSuspendedReason = SuspendedOnInstanceAndReadyToContinue;
                  break a;
                case SuspendedAndReadyToContinue:
                  isThenableResolved(memoizedUpdaters) ? (workInProgressSuspendedReason = NotSuspended, workInProgressThrownValue = null, replaySuspendedUnitOfWork(lanes)) : (workInProgressSuspendedReason = NotSuspended, workInProgressThrownValue = null, throwAndUnwindWorkLoop(
                    root,
                    lanes,
                    memoizedUpdaters,
                    SuspendedAndReadyToContinue
                  ));
                  break;
                case SuspendedOnInstanceAndReadyToContinue:
                  var resource = null;
                  switch (workInProgress.tag) {
                    case 26:
                      resource = workInProgress.memoizedState;
                    case 5:
                    case 27:
                      var hostFiber = workInProgress, type = hostFiber.type, props = hostFiber.pendingProps;
                      if (resource ? preloadResource(resource) : preloadInstance(type, props)) {
                        workInProgressSuspendedReason = NotSuspended;
                        workInProgressThrownValue = null;
                        var sibling = hostFiber.sibling;
                        if (null !== sibling) workInProgress = sibling;
                        else {
                          var returnFiber = hostFiber.return;
                          null !== returnFiber ? (workInProgress = returnFiber, completeUnitOfWork(returnFiber)) : workInProgress = null;
                        }
                        break b;
                      }
                      break;
                    default:
                      console.error(
                        "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                      );
                  }
                  workInProgressSuspendedReason = NotSuspended;
                  workInProgressThrownValue = null;
                  throwAndUnwindWorkLoop(
                    root,
                    lanes,
                    memoizedUpdaters,
                    SuspendedOnInstanceAndReadyToContinue
                  );
                  break;
                case SuspendedOnDeprecatedThrowPromise:
                  workInProgressSuspendedReason = NotSuspended;
                  workInProgressThrownValue = null;
                  throwAndUnwindWorkLoop(
                    root,
                    lanes,
                    memoizedUpdaters,
                    SuspendedOnDeprecatedThrowPromise
                  );
                  break;
                case SuspendedOnHydration:
                  resetWorkInProgressStack();
                  workInProgressRootExitStatus = RootDidNotComplete;
                  break a;
                default:
                  throw Error(
                    "Unexpected SuspendedReason. This is a bug in React."
                  );
              }
            null !== ReactSharedInternals.actQueue ? workLoopSync() : workLoopConcurrent();
            break;
          } catch (thrownValue$5) {
            handleThrow(root, thrownValue$5);
          }
        while (1);
        resetContextDependencies();
        ReactSharedInternals.H = prevDispatcher;
        ReactSharedInternals.A = prevAsyncDispatcher;
        executionContext = prevExecutionContext;
        if (null !== workInProgress)
          return null !== injectedProfilingHooks && "function" === typeof injectedProfilingHooks.markRenderYielded && injectedProfilingHooks.markRenderYielded(), RootInProgress;
        markRenderStopped();
        workInProgressRoot = null;
        workInProgressRootRenderLanes = 0;
        finishQueueingConcurrentUpdates();
        return workInProgressRootExitStatus;
      }
      function workLoopConcurrent() {
        for (; null !== workInProgress && !shouldYield(); )
          performUnitOfWork(workInProgress);
      }
      function performUnitOfWork(unitOfWork) {
        var current2 = unitOfWork.alternate;
        (unitOfWork.mode & 2) !== NoMode ? (startProfilerTimer(unitOfWork), current2 = runWithFiberInDEV(
          unitOfWork,
          beginWork,
          current2,
          unitOfWork,
          entangledRenderLanes
        ), stopProfilerTimerIfRunningAndRecordDuration(unitOfWork)) : current2 = runWithFiberInDEV(
          unitOfWork,
          beginWork,
          current2,
          unitOfWork,
          entangledRenderLanes
        );
        unitOfWork.memoizedProps = unitOfWork.pendingProps;
        null === current2 ? completeUnitOfWork(unitOfWork) : workInProgress = current2;
      }
      function replaySuspendedUnitOfWork(unitOfWork) {
        var next = runWithFiberInDEV(unitOfWork, replayBeginWork, unitOfWork);
        unitOfWork.memoizedProps = unitOfWork.pendingProps;
        null === next ? completeUnitOfWork(unitOfWork) : workInProgress = next;
      }
      function replayBeginWork(unitOfWork) {
        var current2 = unitOfWork.alternate, isProfilingMode = (unitOfWork.mode & 2) !== NoMode;
        isProfilingMode && startProfilerTimer(unitOfWork);
        switch (unitOfWork.tag) {
          case 15:
          case 0:
            current2 = replayFunctionComponent(
              current2,
              unitOfWork,
              unitOfWork.pendingProps,
              unitOfWork.type,
              void 0,
              workInProgressRootRenderLanes
            );
            break;
          case 11:
            current2 = replayFunctionComponent(
              current2,
              unitOfWork,
              unitOfWork.pendingProps,
              unitOfWork.type.render,
              unitOfWork.ref,
              workInProgressRootRenderLanes
            );
            break;
          case 5:
            resetHooksOnUnwind(unitOfWork);
          default:
            unwindInterruptedWork(current2, unitOfWork), unitOfWork = workInProgress = resetWorkInProgress(unitOfWork, entangledRenderLanes), current2 = beginWork(current2, unitOfWork, entangledRenderLanes);
        }
        isProfilingMode && stopProfilerTimerIfRunningAndRecordDuration(unitOfWork);
        return current2;
      }
      function throwAndUnwindWorkLoop(root, unitOfWork, thrownValue, suspendedReason) {
        resetContextDependencies();
        resetHooksOnUnwind(unitOfWork);
        thenableState$1 = null;
        thenableIndexCounter$1 = 0;
        var returnFiber = unitOfWork.return;
        try {
          if (throwException(
            root,
            returnFiber,
            unitOfWork,
            thrownValue,
            workInProgressRootRenderLanes
          )) {
            workInProgressRootExitStatus = RootFatalErrored;
            logUncaughtError(
              root,
              createCapturedValueAtFiber(thrownValue, root.current)
            );
            workInProgress = null;
            return;
          }
        } catch (error) {
          if (null !== returnFiber) throw workInProgress = returnFiber, error;
          workInProgressRootExitStatus = RootFatalErrored;
          logUncaughtError(
            root,
            createCapturedValueAtFiber(thrownValue, root.current)
          );
          workInProgress = null;
          return;
        }
        if (unitOfWork.flags & 32768) {
          if (isHydrating || suspendedReason === SuspendedOnError) root = true;
          else if (workInProgressRootIsPrerendering || 0 !== (workInProgressRootRenderLanes & 536870912))
            root = false;
          else if (workInProgressRootDidSkipSuspendedSiblings = root = true, suspendedReason === SuspendedOnData || suspendedReason === SuspendedOnImmediate || suspendedReason === SuspendedOnDeprecatedThrowPromise)
            suspendedReason = suspenseHandlerStackCursor.current, null !== suspendedReason && 13 === suspendedReason.tag && (suspendedReason.flags |= 16384);
          unwindUnitOfWork(unitOfWork, root);
        } else completeUnitOfWork(unitOfWork);
      }
      function completeUnitOfWork(unitOfWork) {
        var completedWork = unitOfWork;
        do {
          if (0 !== (completedWork.flags & 32768)) {
            unwindUnitOfWork(
              completedWork,
              workInProgressRootDidSkipSuspendedSiblings
            );
            return;
          }
          var current2 = completedWork.alternate;
          unitOfWork = completedWork.return;
          startProfilerTimer(completedWork);
          current2 = runWithFiberInDEV(
            completedWork,
            completeWork,
            current2,
            completedWork,
            entangledRenderLanes
          );
          (completedWork.mode & 2) !== NoMode && stopProfilerTimerIfRunningAndRecordIncompleteDuration(completedWork);
          if (null !== current2) {
            workInProgress = current2;
            return;
          }
          completedWork = completedWork.sibling;
          if (null !== completedWork) {
            workInProgress = completedWork;
            return;
          }
          workInProgress = completedWork = unitOfWork;
        } while (null !== completedWork);
        workInProgressRootExitStatus === RootInProgress && (workInProgressRootExitStatus = RootCompleted);
      }
      function unwindUnitOfWork(unitOfWork, skipSiblings) {
        do {
          var next = unwindWork(unitOfWork.alternate, unitOfWork);
          if (null !== next) {
            next.flags &= 32767;
            workInProgress = next;
            return;
          }
          if ((unitOfWork.mode & 2) !== NoMode) {
            stopProfilerTimerIfRunningAndRecordIncompleteDuration(unitOfWork);
            next = unitOfWork.actualDuration;
            for (var child = unitOfWork.child; null !== child; )
              next += child.actualDuration, child = child.sibling;
            unitOfWork.actualDuration = next;
          }
          next = unitOfWork.return;
          null !== next && (next.flags |= 32768, next.subtreeFlags = 0, next.deletions = null);
          if (!skipSiblings && (unitOfWork = unitOfWork.sibling, null !== unitOfWork)) {
            workInProgress = unitOfWork;
            return;
          }
          workInProgress = unitOfWork = next;
        } while (null !== unitOfWork);
        workInProgressRootExitStatus = RootDidNotComplete;
        workInProgress = null;
      }
      function commitRoot(root, recoverableErrors, transitions, didIncludeRenderPhaseUpdate, spawnedLane, updatedLanes, suspendedRetryLanes, suspendedCommitReason, completedRenderStartTime, completedRenderEndTime) {
        var prevTransition = ReactSharedInternals.T, previousUpdateLanePriority = getCurrentUpdatePriority();
        try {
          setCurrentUpdatePriority(2), ReactSharedInternals.T = null, commitRootImpl(
            root,
            recoverableErrors,
            transitions,
            didIncludeRenderPhaseUpdate,
            previousUpdateLanePriority,
            spawnedLane,
            updatedLanes,
            suspendedRetryLanes,
            suspendedCommitReason,
            completedRenderStartTime,
            completedRenderEndTime
          );
        } finally {
          ReactSharedInternals.T = prevTransition, setCurrentUpdatePriority(previousUpdateLanePriority);
        }
      }
      function commitRootImpl(root, recoverableErrors, transitions, didIncludeRenderPhaseUpdate, renderPriorityLevel, spawnedLane, updatedLanes, suspendedRetryLanes) {
        do
          flushPassiveEffects();
        while (null !== rootWithPendingPassiveEffects);
        ReactStrictModeWarnings.flushLegacyContextWarning();
        ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings();
        if ((executionContext & (RenderContext | CommitContext)) !== NoContext)
          throw Error("Should not already be working.");
        var finishedWork = root.finishedWork;
        didIncludeRenderPhaseUpdate = root.finishedLanes;
        null !== injectedProfilingHooks && "function" === typeof injectedProfilingHooks.markCommitStarted && injectedProfilingHooks.markCommitStarted(didIncludeRenderPhaseUpdate);
        if (null === finishedWork) return markCommitStopped(), null;
        0 === didIncludeRenderPhaseUpdate && console.error(
          "root.finishedLanes should not be empty during a commit. This is a bug in React."
        );
        root.finishedWork = null;
        root.finishedLanes = 0;
        if (finishedWork === root.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        root.callbackNode = null;
        root.callbackPriority = 0;
        root.cancelPendingCommit = null;
        var remainingLanes = finishedWork.lanes | finishedWork.childLanes;
        remainingLanes |= concurrentlyUpdatedLanes;
        markRootFinished(
          root,
          didIncludeRenderPhaseUpdate,
          remainingLanes,
          spawnedLane,
          updatedLanes,
          suspendedRetryLanes
        );
        root === workInProgressRoot && (workInProgress = workInProgressRoot = null, workInProgressRootRenderLanes = 0);
        0 === (finishedWork.subtreeFlags & 10256) && 0 === (finishedWork.flags & 10256) || rootDoesHavePassiveEffects || (rootDoesHavePassiveEffects = true, pendingPassiveEffectsRemainingLanes = remainingLanes, pendingPassiveTransitions = transitions, scheduleCallback(NormalPriority$1, function() {
          flushPassiveEffects(true);
          return null;
        }));
        commitStartTime = now();
        transitions = 0 !== (finishedWork.flags & 15990);
        0 !== (finishedWork.subtreeFlags & 15990) || transitions ? (transitions = ReactSharedInternals.T, ReactSharedInternals.T = null, spawnedLane = getCurrentUpdatePriority(), setCurrentUpdatePriority(2), updatedLanes = executionContext, executionContext |= CommitContext, commitBeforeMutationEffects(root, finishedWork), commitMutationEffects(
          root,
          finishedWork,
          didIncludeRenderPhaseUpdate
        ), resetAfterCommit(root.containerInfo), root.current = finishedWork, null !== injectedProfilingHooks && "function" === typeof injectedProfilingHooks.markLayoutEffectsStarted && injectedProfilingHooks.markLayoutEffectsStarted(
          didIncludeRenderPhaseUpdate
        ), commitLayoutEffects(finishedWork, root, didIncludeRenderPhaseUpdate), null !== injectedProfilingHooks && "function" === typeof injectedProfilingHooks.markLayoutEffectsStopped && injectedProfilingHooks.markLayoutEffectsStopped(), requestPaint(), executionContext = updatedLanes, setCurrentUpdatePriority(spawnedLane), ReactSharedInternals.T = transitions) : root.current = finishedWork;
        (transitions = rootDoesHavePassiveEffects) ? (rootDoesHavePassiveEffects = false, rootWithPendingPassiveEffects = root, pendingPassiveEffectsLanes = didIncludeRenderPhaseUpdate) : (releaseRootPooledCache(root, remainingLanes), nestedPassiveUpdateCount = 0, rootWithPassiveNestedUpdates = null);
        remainingLanes = root.pendingLanes;
        0 === remainingLanes && (legacyErrorBoundariesThatAlreadyFailed = null);
        transitions || commitDoubleInvokeEffectsInDEV(root);
        onCommitRoot$1(finishedWork.stateNode, renderPriorityLevel);
        isDevToolsPresent && root.memoizedUpdaters.clear();
        onCommitRoot();
        ensureRootIsScheduled(root);
        if (null !== recoverableErrors)
          for (renderPriorityLevel = root.onRecoverableError, finishedWork = 0; finishedWork < recoverableErrors.length; finishedWork++)
            remainingLanes = recoverableErrors[finishedWork], transitions = makeErrorInfo(remainingLanes.stack), runWithFiberInDEV(
              remainingLanes.source,
              renderPriorityLevel,
              remainingLanes.value,
              transitions
            );
        0 !== (pendingPassiveEffectsLanes & 3) && flushPassiveEffects();
        remainingLanes = root.pendingLanes;
        0 !== (didIncludeRenderPhaseUpdate & 4194218) && 0 !== (remainingLanes & 42) ? (nestedUpdateScheduled = true, root === rootWithNestedUpdates ? nestedUpdateCount++ : (nestedUpdateCount = 0, rootWithNestedUpdates = root)) : nestedUpdateCount = 0;
        flushSyncWorkAcrossRoots_impl(0, false);
        markCommitStopped();
        return null;
      }
      function makeErrorInfo(componentStack) {
        componentStack = { componentStack };
        Object.defineProperty(componentStack, "digest", {
          get: function() {
            console.error(
              'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
            );
          }
        });
        return componentStack;
      }
      function releaseRootPooledCache(root, remainingLanes) {
        0 === (root.pooledCacheLanes &= remainingLanes) && (remainingLanes = root.pooledCache, null != remainingLanes && (root.pooledCache = null, releaseCache(remainingLanes)));
      }
      function flushPassiveEffects() {
        if (null !== rootWithPendingPassiveEffects) {
          var root = rootWithPendingPassiveEffects, remainingLanes = pendingPassiveEffectsRemainingLanes;
          pendingPassiveEffectsRemainingLanes = 0;
          var renderPriority = lanesToEventPriority(pendingPassiveEffectsLanes), priority = 32 > renderPriority ? 32 : renderPriority;
          renderPriority = ReactSharedInternals.T;
          var previousPriority = getCurrentUpdatePriority();
          try {
            setCurrentUpdatePriority(priority);
            ReactSharedInternals.T = null;
            if (null === rootWithPendingPassiveEffects)
              var JSCompiler_inline_result = false;
            else {
              priority = pendingPassiveTransitions;
              pendingPassiveTransitions = null;
              var root$jscomp$0 = rootWithPendingPassiveEffects, lanes = pendingPassiveEffectsLanes;
              rootWithPendingPassiveEffects = null;
              pendingPassiveEffectsLanes = 0;
              if ((executionContext & (RenderContext | CommitContext)) !== NoContext)
                throw Error(
                  "Cannot flush passive effects while already rendering."
                );
              isFlushingPassiveEffects = true;
              didScheduleUpdateDuringPassiveEffects = false;
              null !== injectedProfilingHooks && "function" === typeof injectedProfilingHooks.markPassiveEffectsStarted && injectedProfilingHooks.markPassiveEffectsStarted(lanes);
              var prevExecutionContext = executionContext;
              executionContext |= CommitContext;
              commitPassiveUnmountOnFiber(root$jscomp$0.current);
              commitPassiveMountOnFiber(
                root$jscomp$0,
                root$jscomp$0.current,
                lanes,
                priority
              );
              null !== injectedProfilingHooks && "function" === typeof injectedProfilingHooks.markPassiveEffectsStopped && injectedProfilingHooks.markPassiveEffectsStopped();
              commitDoubleInvokeEffectsInDEV(root$jscomp$0);
              executionContext = prevExecutionContext;
              flushSyncWorkAcrossRoots_impl(0, false);
              didScheduleUpdateDuringPassiveEffects ? root$jscomp$0 === rootWithPassiveNestedUpdates ? nestedPassiveUpdateCount++ : (nestedPassiveUpdateCount = 0, rootWithPassiveNestedUpdates = root$jscomp$0) : nestedPassiveUpdateCount = 0;
              didScheduleUpdateDuringPassiveEffects = isFlushingPassiveEffects = false;
              if (injectedHook && "function" === typeof injectedHook.onPostCommitFiberRoot)
                try {
                  injectedHook.onPostCommitFiberRoot(rendererID, root$jscomp$0);
                } catch (err) {
                  hasLoggedError || (hasLoggedError = true, console.error(
                    "React instrumentation encountered an error: %s",
                    err
                  ));
                }
              var stateNode = root$jscomp$0.current.stateNode;
              stateNode.effectDuration = 0;
              stateNode.passiveEffectDuration = 0;
              JSCompiler_inline_result = true;
            }
            return JSCompiler_inline_result;
          } finally {
            setCurrentUpdatePriority(previousPriority), ReactSharedInternals.T = renderPriority, releaseRootPooledCache(root, remainingLanes);
          }
        }
        return false;
      }
      function captureCommitPhaseErrorOnRoot(rootFiber, sourceFiber, error) {
        sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
        sourceFiber = createRootErrorUpdate(rootFiber.stateNode, sourceFiber, 2);
        rootFiber = enqueueUpdate(rootFiber, sourceFiber, 2);
        null !== rootFiber && (markRootUpdated$1(rootFiber, 2), ensureRootIsScheduled(rootFiber));
      }
      function captureCommitPhaseError(sourceFiber, nearestMountedAncestor, error) {
        isRunningInsertionEffect = false;
        if (3 === sourceFiber.tag)
          captureCommitPhaseErrorOnRoot(sourceFiber, sourceFiber, error);
        else {
          for (; null !== nearestMountedAncestor; ) {
            if (3 === nearestMountedAncestor.tag) {
              captureCommitPhaseErrorOnRoot(
                nearestMountedAncestor,
                sourceFiber,
                error
              );
              return;
            }
            if (1 === nearestMountedAncestor.tag) {
              var instance = nearestMountedAncestor.stateNode;
              if ("function" === typeof nearestMountedAncestor.type.getDerivedStateFromError || "function" === typeof instance.componentDidCatch && (null === legacyErrorBoundariesThatAlreadyFailed || !legacyErrorBoundariesThatAlreadyFailed.has(instance))) {
                sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
                error = createClassErrorUpdate(2);
                instance = enqueueUpdate(nearestMountedAncestor, error, 2);
                null !== instance && (initializeClassErrorUpdate(
                  error,
                  instance,
                  nearestMountedAncestor,
                  sourceFiber
                ), markRootUpdated$1(instance, 2), ensureRootIsScheduled(instance));
                return;
              }
            }
            nearestMountedAncestor = nearestMountedAncestor.return;
          }
          console.error(
            "Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.\n\nError message:\n\n%s",
            error
          );
        }
      }
      function attachPingListener(root, wakeable, lanes) {
        var pingCache = root.pingCache;
        if (null === pingCache) {
          pingCache = root.pingCache = new PossiblyWeakMap();
          var threadIDs = /* @__PURE__ */ new Set();
          pingCache.set(wakeable, threadIDs);
        } else
          threadIDs = pingCache.get(wakeable), void 0 === threadIDs && (threadIDs = /* @__PURE__ */ new Set(), pingCache.set(wakeable, threadIDs));
        threadIDs.has(lanes) || (workInProgressRootDidAttachPingListener = true, threadIDs.add(lanes), pingCache = pingSuspendedRoot.bind(null, root, wakeable, lanes), isDevToolsPresent && restorePendingUpdaters(root, lanes), wakeable.then(pingCache, pingCache));
      }
      function pingSuspendedRoot(root, wakeable, pingedLanes) {
        var pingCache = root.pingCache;
        null !== pingCache && pingCache.delete(wakeable);
        root.pingedLanes |= root.suspendedLanes & pingedLanes;
        root.warmLanes &= ~pingedLanes;
        isConcurrentActEnvironment() && null === ReactSharedInternals.actQueue && console.error(
          "A suspended resource finished loading inside a test, but the event was not wrapped in act(...).\n\nWhen testing, code that resolves suspended data should be wrapped into act(...):\n\nact(() => {\n  /* finish loading suspended data */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act"
        );
        workInProgressRoot === root && (workInProgressRootRenderLanes & pingedLanes) === pingedLanes && (workInProgressRootExitStatus === RootSuspendedWithDelay || workInProgressRootExitStatus === RootSuspended && (workInProgressRootRenderLanes & 62914560) === workInProgressRootRenderLanes && now$1() - globalMostRecentFallbackTime < FALLBACK_THROTTLE_MS ? (executionContext & RenderContext) === NoContext && prepareFreshStack(root, 0) : workInProgressRootPingedLanes |= pingedLanes, workInProgressSuspendedRetryLanes === workInProgressRootRenderLanes && (workInProgressSuspendedRetryLanes = 0));
        ensureRootIsScheduled(root);
      }
      function retryTimedOutBoundary(boundaryFiber, retryLane) {
        0 === retryLane && (retryLane = claimNextRetryLane());
        boundaryFiber = enqueueConcurrentRenderForLane(boundaryFiber, retryLane);
        null !== boundaryFiber && (markRootUpdated$1(boundaryFiber, retryLane), ensureRootIsScheduled(boundaryFiber));
      }
      function retryDehydratedSuspenseBoundary(boundaryFiber) {
        var suspenseState = boundaryFiber.memoizedState, retryLane = 0;
        null !== suspenseState && (retryLane = suspenseState.retryLane);
        retryTimedOutBoundary(boundaryFiber, retryLane);
      }
      function resolveRetryWakeable(boundaryFiber, wakeable) {
        var retryLane = 0;
        switch (boundaryFiber.tag) {
          case 13:
            var retryCache = boundaryFiber.stateNode;
            var suspenseState = boundaryFiber.memoizedState;
            null !== suspenseState && (retryLane = suspenseState.retryLane);
            break;
          case 19:
            retryCache = boundaryFiber.stateNode;
            break;
          case 22:
            retryCache = boundaryFiber.stateNode._retryCache;
            break;
          default:
            throw Error(
              "Pinged unknown suspense boundary type. This is probably a bug in React."
            );
        }
        null !== retryCache && retryCache.delete(wakeable);
        retryTimedOutBoundary(boundaryFiber, retryLane);
      }
      function recursivelyTraverseAndDoubleInvokeEffectsInDEV(root$jscomp$0, parentFiber, isInStrictMode) {
        if (0 !== (parentFiber.subtreeFlags & 33562624))
          for (parentFiber = parentFiber.child; null !== parentFiber; ) {
            var root = root$jscomp$0, fiber = parentFiber, isStrictModeFiber = fiber.type === REACT_STRICT_MODE_TYPE;
            isStrictModeFiber = isInStrictMode || isStrictModeFiber;
            22 !== fiber.tag ? fiber.flags & 33554432 ? isStrictModeFiber && runWithFiberInDEV(
              fiber,
              doubleInvokeEffectsOnFiber,
              root,
              fiber,
              (fiber.mode & 64) === NoMode
            ) : recursivelyTraverseAndDoubleInvokeEffectsInDEV(
              root,
              fiber,
              isStrictModeFiber
            ) : null === fiber.memoizedState && (isStrictModeFiber && fiber.flags & 8192 ? runWithFiberInDEV(
              fiber,
              doubleInvokeEffectsOnFiber,
              root,
              fiber
            ) : fiber.subtreeFlags & 33554432 && runWithFiberInDEV(
              fiber,
              recursivelyTraverseAndDoubleInvokeEffectsInDEV,
              root,
              fiber,
              isStrictModeFiber
            ));
            parentFiber = parentFiber.sibling;
          }
      }
      function doubleInvokeEffectsOnFiber(root, fiber) {
        var shouldDoubleInvokePassiveEffects = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : true;
        setIsStrictModeForDevtools(true);
        try {
          disappearLayoutEffects(fiber), shouldDoubleInvokePassiveEffects && disconnectPassiveEffect(fiber), reappearLayoutEffects(root, fiber.alternate, fiber, false), shouldDoubleInvokePassiveEffects && reconnectPassiveEffects(root, fiber, 0, null, false);
        } finally {
          setIsStrictModeForDevtools(false);
        }
      }
      function commitDoubleInvokeEffectsInDEV(root) {
        var doubleInvokeEffects = true;
        root.current.mode & 24 || (doubleInvokeEffects = false);
        recursivelyTraverseAndDoubleInvokeEffectsInDEV(
          root,
          root.current,
          doubleInvokeEffects
        );
      }
      function warnAboutUpdateOnNotYetMountedFiberInDEV(fiber) {
        if ((executionContext & RenderContext) === NoContext) {
          var tag = fiber.tag;
          if (3 === tag || 1 === tag || 0 === tag || 11 === tag || 14 === tag || 15 === tag) {
            tag = getComponentNameFromFiber(fiber) || "ReactComponent";
            if (null !== didWarnStateUpdateForNotYetMountedComponent) {
              if (didWarnStateUpdateForNotYetMountedComponent.has(tag)) return;
              didWarnStateUpdateForNotYetMountedComponent.add(tag);
            } else didWarnStateUpdateForNotYetMountedComponent = /* @__PURE__ */ new Set([tag]);
            runWithFiberInDEV(fiber, function() {
              console.error(
                "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
              );
            });
          }
        }
      }
      function restorePendingUpdaters(root, lanes) {
        isDevToolsPresent && root.memoizedUpdaters.forEach(function(schedulingFiber) {
          addFiberToLanesMap(root, schedulingFiber, lanes);
        });
      }
      function scheduleCallback(priorityLevel, callback) {
        var actQueue = ReactSharedInternals.actQueue;
        return null !== actQueue ? (actQueue.push(callback), fakeActCallbackNode) : scheduleCallback$3(priorityLevel, callback);
      }
      function warnIfUpdatesNotWrappedWithActDEV(fiber) {
        isConcurrentActEnvironment() && null === ReactSharedInternals.actQueue && runWithFiberInDEV(fiber, function() {
          console.error(
            "An update to %s inside a test was not wrapped in act(...).\n\nWhen testing, code that causes React state updates should be wrapped into act(...):\n\nact(() => {\n  /* fire events that update state */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act",
            getComponentNameFromFiber(fiber)
          );
        });
      }
      function resolveFunctionForHotReloading(type) {
        if (null === resolveFamily) return type;
        var family = resolveFamily(type);
        return void 0 === family ? type : family.current;
      }
      function resolveForwardRefForHotReloading(type) {
        if (null === resolveFamily) return type;
        var family = resolveFamily(type);
        return void 0 === family ? null !== type && void 0 !== type && "function" === typeof type.render && (family = resolveFunctionForHotReloading(type.render), type.render !== family) ? (family = { $$typeof: REACT_FORWARD_REF_TYPE, render: family }, void 0 !== type.displayName && (family.displayName = type.displayName), family) : type : family.current;
      }
      function isCompatibleFamilyForHotReloading(fiber, element) {
        if (null === resolveFamily) return false;
        var prevType = fiber.elementType;
        element = element.type;
        var needsCompareFamilies = false, $$typeofNextType = "object" === typeof element && null !== element ? element.$$typeof : null;
        switch (fiber.tag) {
          case 1:
            "function" === typeof element && (needsCompareFamilies = true);
            break;
          case 0:
            "function" === typeof element ? needsCompareFamilies = true : $$typeofNextType === REACT_LAZY_TYPE && (needsCompareFamilies = true);
            break;
          case 11:
            $$typeofNextType === REACT_FORWARD_REF_TYPE ? needsCompareFamilies = true : $$typeofNextType === REACT_LAZY_TYPE && (needsCompareFamilies = true);
            break;
          case 14:
          case 15:
            $$typeofNextType === REACT_MEMO_TYPE ? needsCompareFamilies = true : $$typeofNextType === REACT_LAZY_TYPE && (needsCompareFamilies = true);
            break;
          default:
            return false;
        }
        return needsCompareFamilies && (fiber = resolveFamily(prevType), void 0 !== fiber && fiber === resolveFamily(element)) ? true : false;
      }
      function markFailedErrorBoundaryForHotReloading(fiber) {
        null !== resolveFamily && "function" === typeof WeakSet && (null === failedBoundaries && (failedBoundaries = /* @__PURE__ */ new WeakSet()), failedBoundaries.add(fiber));
      }
      function scheduleFibersWithFamiliesRecursively(fiber, updatedFamilies, staleFamilies) {
        var alternate = fiber.alternate, child = fiber.child, sibling = fiber.sibling, tag = fiber.tag, type = fiber.type, candidateType = null;
        switch (tag) {
          case 0:
          case 15:
          case 1:
            candidateType = type;
            break;
          case 11:
            candidateType = type.render;
        }
        if (null === resolveFamily)
          throw Error("Expected resolveFamily to be set during hot reload.");
        var needsRender = false;
        type = false;
        null !== candidateType && (candidateType = resolveFamily(candidateType), void 0 !== candidateType && (staleFamilies.has(candidateType) ? type = true : updatedFamilies.has(candidateType) && (1 === tag ? type = true : needsRender = true)));
        null !== failedBoundaries && (failedBoundaries.has(fiber) || null !== alternate && failedBoundaries.has(alternate)) && (type = true);
        type && (fiber._debugNeedsRemount = true);
        if (type || needsRender)
          alternate = enqueueConcurrentRenderForLane(fiber, 2), null !== alternate && scheduleUpdateOnFiber(alternate, fiber, 2);
        null === child || type || scheduleFibersWithFamiliesRecursively(
          child,
          updatedFamilies,
          staleFamilies
        );
        null !== sibling && scheduleFibersWithFamiliesRecursively(
          sibling,
          updatedFamilies,
          staleFamilies
        );
      }
      function FiberNode(tag, pendingProps, key, mode) {
        this.tag = tag;
        this.key = key;
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
        this.index = 0;
        this.refCleanup = this.ref = null;
        this.pendingProps = pendingProps;
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
        this.mode = mode;
        this.subtreeFlags = this.flags = 0;
        this.deletions = null;
        this.childLanes = this.lanes = 0;
        this.alternate = null;
        this.actualDuration = -0;
        this.actualStartTime = -1.1;
        this.treeBaseDuration = this.selfBaseDuration = -0;
        this._debugOwner = this._debugInfo = null;
        this._debugNeedsRemount = false;
        this._debugHookTypes = null;
        hasBadMapPolyfill || "function" !== typeof Object.preventExtensions || Object.preventExtensions(this);
      }
      function shouldConstruct(Component3) {
        Component3 = Component3.prototype;
        return !(!Component3 || !Component3.isReactComponent);
      }
      function createWorkInProgress(current2, pendingProps) {
        var workInProgress2 = current2.alternate;
        null === workInProgress2 ? (workInProgress2 = createFiber(
          current2.tag,
          pendingProps,
          current2.key,
          current2.mode
        ), workInProgress2.elementType = current2.elementType, workInProgress2.type = current2.type, workInProgress2.stateNode = current2.stateNode, workInProgress2._debugOwner = current2._debugOwner, workInProgress2._debugHookTypes = current2._debugHookTypes, workInProgress2.alternate = current2, current2.alternate = workInProgress2) : (workInProgress2.pendingProps = pendingProps, workInProgress2.type = current2.type, workInProgress2.flags = 0, workInProgress2.subtreeFlags = 0, workInProgress2.deletions = null, workInProgress2.actualDuration = -0, workInProgress2.actualStartTime = -1.1);
        workInProgress2.flags = current2.flags & 31457280;
        workInProgress2.childLanes = current2.childLanes;
        workInProgress2.lanes = current2.lanes;
        workInProgress2.child = current2.child;
        workInProgress2.memoizedProps = current2.memoizedProps;
        workInProgress2.memoizedState = current2.memoizedState;
        workInProgress2.updateQueue = current2.updateQueue;
        pendingProps = current2.dependencies;
        workInProgress2.dependencies = null === pendingProps ? null : {
          lanes: pendingProps.lanes,
          firstContext: pendingProps.firstContext,
          _debugThenableState: pendingProps._debugThenableState
        };
        workInProgress2.sibling = current2.sibling;
        workInProgress2.index = current2.index;
        workInProgress2.ref = current2.ref;
        workInProgress2.refCleanup = current2.refCleanup;
        workInProgress2.selfBaseDuration = current2.selfBaseDuration;
        workInProgress2.treeBaseDuration = current2.treeBaseDuration;
        workInProgress2._debugInfo = current2._debugInfo;
        workInProgress2._debugNeedsRemount = current2._debugNeedsRemount;
        switch (workInProgress2.tag) {
          case 0:
          case 15:
            workInProgress2.type = resolveFunctionForHotReloading(current2.type);
            break;
          case 1:
            workInProgress2.type = resolveFunctionForHotReloading(current2.type);
            break;
          case 11:
            workInProgress2.type = resolveForwardRefForHotReloading(current2.type);
        }
        return workInProgress2;
      }
      function resetWorkInProgress(workInProgress2, renderLanes2) {
        workInProgress2.flags &= 31457282;
        var current2 = workInProgress2.alternate;
        null === current2 ? (workInProgress2.childLanes = 0, workInProgress2.lanes = renderLanes2, workInProgress2.child = null, workInProgress2.subtreeFlags = 0, workInProgress2.memoizedProps = null, workInProgress2.memoizedState = null, workInProgress2.updateQueue = null, workInProgress2.dependencies = null, workInProgress2.stateNode = null, workInProgress2.selfBaseDuration = 0, workInProgress2.treeBaseDuration = 0) : (workInProgress2.childLanes = current2.childLanes, workInProgress2.lanes = current2.lanes, workInProgress2.child = current2.child, workInProgress2.subtreeFlags = 0, workInProgress2.deletions = null, workInProgress2.memoizedProps = current2.memoizedProps, workInProgress2.memoizedState = current2.memoizedState, workInProgress2.updateQueue = current2.updateQueue, workInProgress2.type = current2.type, renderLanes2 = current2.dependencies, workInProgress2.dependencies = null === renderLanes2 ? null : {
          lanes: renderLanes2.lanes,
          firstContext: renderLanes2.firstContext,
          _debugThenableState: renderLanes2._debugThenableState
        }, workInProgress2.selfBaseDuration = current2.selfBaseDuration, workInProgress2.treeBaseDuration = current2.treeBaseDuration);
        return workInProgress2;
      }
      function createFiberFromTypeAndProps(type, key, pendingProps, owner, mode, lanes) {
        var fiberTag = 0, resolvedType = type;
        if ("function" === typeof type)
          shouldConstruct(type) && (fiberTag = 1), resolvedType = resolveFunctionForHotReloading(resolvedType);
        else if ("string" === typeof type)
          supportsResources && supportsSingletons ? (fiberTag = getHostContext(), fiberTag = isHostHoistableType(type, pendingProps, fiberTag) ? 26 : isHostSingletonType(type) ? 27 : 5) : supportsResources ? (fiberTag = getHostContext(), fiberTag = isHostHoistableType(type, pendingProps, fiberTag) ? 26 : 5) : fiberTag = supportsSingletons ? isHostSingletonType(type) ? 27 : 5 : 5;
        else
          a: switch (type) {
            case REACT_FRAGMENT_TYPE:
              return createFiberFromFragment(
                pendingProps.children,
                mode,
                lanes,
                key
              );
            case REACT_STRICT_MODE_TYPE:
              fiberTag = 8;
              mode |= 24;
              break;
            case REACT_PROFILER_TYPE:
              return type = pendingProps, owner = mode, "string" !== typeof type.id && console.error(
                'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
                typeof type.id
              ), key = createFiber(12, type, key, owner | 2), key.elementType = REACT_PROFILER_TYPE, key.lanes = lanes, key.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, key;
            case REACT_SUSPENSE_TYPE:
              return key = createFiber(13, pendingProps, key, mode), key.elementType = REACT_SUSPENSE_TYPE, key.lanes = lanes, key;
            case REACT_SUSPENSE_LIST_TYPE:
              return key = createFiber(19, pendingProps, key, mode), key.elementType = REACT_SUSPENSE_LIST_TYPE, key.lanes = lanes, key;
            case REACT_OFFSCREEN_TYPE:
              return createFiberFromOffscreen(pendingProps, mode, lanes, key);
            default:
              if ("object" === typeof type && null !== type)
                switch (type.$$typeof) {
                  case REACT_PROVIDER_TYPE:
                  case REACT_CONTEXT_TYPE:
                    fiberTag = 10;
                    break a;
                  case REACT_CONSUMER_TYPE:
                    fiberTag = 9;
                    break a;
                  case REACT_FORWARD_REF_TYPE:
                    fiberTag = 11;
                    resolvedType = resolveForwardRefForHotReloading(resolvedType);
                    break a;
                  case REACT_MEMO_TYPE:
                    fiberTag = 14;
                    break a;
                  case REACT_LAZY_TYPE:
                    fiberTag = 16;
                    resolvedType = null;
                    break a;
                }
              resolvedType = "";
              if (void 0 === type || "object" === typeof type && null !== type && 0 === Object.keys(type).length)
                resolvedType += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              null === type ? pendingProps = "null" : isArrayImpl(type) ? pendingProps = "array" : void 0 !== type && type.$$typeof === REACT_ELEMENT_TYPE ? (pendingProps = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />", resolvedType = " Did you accidentally export a JSX literal instead of a component?") : pendingProps = typeof type;
              fiberTag = owner ? "number" === typeof owner.tag ? getComponentNameFromFiber(owner) : "string" === typeof owner.name ? owner.name : null : null;
              fiberTag && (resolvedType += "\n\nCheck the render method of `" + fiberTag + "`.");
              fiberTag = 29;
              pendingProps = Error(
                "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (pendingProps + "." + resolvedType)
              );
              resolvedType = null;
          }
        key = createFiber(fiberTag, pendingProps, key, mode);
        key.elementType = type;
        key.type = resolvedType;
        key.lanes = lanes;
        key._debugOwner = owner;
        return key;
      }
      function createFiberFromElement(element, mode, lanes) {
        mode = createFiberFromTypeAndProps(
          element.type,
          element.key,
          element.props,
          element._owner,
          mode,
          lanes
        );
        mode._debugOwner = element._owner;
        return mode;
      }
      function createFiberFromFragment(elements, mode, lanes, key) {
        elements = createFiber(7, elements, key, mode);
        elements.lanes = lanes;
        return elements;
      }
      function createFiberFromOffscreen(pendingProps, mode, lanes, key) {
        pendingProps = createFiber(22, pendingProps, key, mode);
        pendingProps.elementType = REACT_OFFSCREEN_TYPE;
        pendingProps.lanes = lanes;
        var primaryChildInstance = {
          _visibility: 1,
          _pendingVisibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
          _current: null,
          detach: function() {
            var instance = primaryChildInstance, fiber = instance._current;
            if (null === fiber)
              throw Error(
                "Calling Offscreen.detach before instance handle has been set."
              );
            if (0 === (instance._pendingVisibility & 2)) {
              var root = enqueueConcurrentRenderForLane(fiber, 2);
              null !== root && (instance._pendingVisibility |= 2, scheduleUpdateOnFiber(root, fiber, 2));
            }
          },
          attach: function() {
            var instance = primaryChildInstance, fiber = instance._current;
            if (null === fiber)
              throw Error(
                "Calling Offscreen.detach before instance handle has been set."
              );
            if (0 !== (instance._pendingVisibility & 2)) {
              var root = enqueueConcurrentRenderForLane(fiber, 2);
              null !== root && (instance._pendingVisibility &= -3, scheduleUpdateOnFiber(root, fiber, 2));
            }
          }
        };
        pendingProps.stateNode = primaryChildInstance;
        return pendingProps;
      }
      function createFiberFromText(content, mode, lanes) {
        content = createFiber(6, content, null, mode);
        content.lanes = lanes;
        return content;
      }
      function createFiberFromPortal(portal, mode, lanes) {
        mode = createFiber(
          4,
          null !== portal.children ? portal.children : [],
          portal.key,
          mode
        );
        mode.lanes = lanes;
        mode.stateNode = {
          containerInfo: portal.containerInfo,
          pendingChildren: null,
          implementation: portal.implementation
        };
        return mode;
      }
      function FiberRootNode(containerInfo, tag, hydrate, identifierPrefix, onUncaughtError, onCaughtError, onRecoverableError, formState) {
        this.tag = 1;
        this.containerInfo = containerInfo;
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
        this.timeoutHandle = noTimeout;
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null;
        this.callbackPriority = 0;
        this.expirationTimes = createLaneMap(-1);
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
        this.entanglements = createLaneMap(0);
        this.hiddenUpdates = createLaneMap(null);
        this.identifierPrefix = identifierPrefix;
        this.onUncaughtError = onUncaughtError;
        this.onCaughtError = onCaughtError;
        this.onRecoverableError = onRecoverableError;
        this.pooledCache = null;
        this.pooledCacheLanes = 0;
        this.formState = formState;
        this.incompleteTransitions = /* @__PURE__ */ new Map();
        this.passiveEffectDuration = this.effectDuration = -0;
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        containerInfo = this.pendingUpdatersLaneMap = [];
        for (tag = 0; 31 > tag; tag++) containerInfo.push(/* @__PURE__ */ new Set());
        this._debugRootType = hydrate ? "hydrateRoot()" : "createRoot()";
      }
      function createFiberRoot(containerInfo, tag, hydrate, initialChildren, hydrationCallbacks, isStrictMode, identifierPrefix, onUncaughtError, onCaughtError, onRecoverableError, transitionCallbacks, formState) {
        containerInfo = new FiberRootNode(
          containerInfo,
          tag,
          hydrate,
          identifierPrefix,
          onUncaughtError,
          onCaughtError,
          onRecoverableError,
          formState
        );
        tag = 1;
        true === isStrictMode && (tag |= 24);
        isDevToolsPresent && (tag |= 2);
        isStrictMode = createFiber(3, null, null, tag);
        containerInfo.current = isStrictMode;
        isStrictMode.stateNode = containerInfo;
        tag = createCache();
        retainCache(tag);
        containerInfo.pooledCache = tag;
        retainCache(tag);
        isStrictMode.memoizedState = {
          element: initialChildren,
          isDehydrated: hydrate,
          cache: tag
        };
        initializeUpdateQueue(isStrictMode);
        return containerInfo;
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function getContextForSubtree(parentComponent) {
        if (!parentComponent) return emptyContextObject;
        parentComponent = emptyContextObject;
        return parentComponent;
      }
      function updateContainerSync(element, container, parentComponent, callback) {
        0 === container.tag && flushPassiveEffects();
        updateContainerImpl(
          container.current,
          2,
          element,
          container,
          parentComponent,
          callback
        );
        return 2;
      }
      function updateContainerImpl(rootFiber, lane, element, container, parentComponent, callback) {
        if (injectedHook && "function" === typeof injectedHook.onScheduleFiberRoot)
          try {
            injectedHook.onScheduleFiberRoot(rendererID, container, element);
          } catch (err) {
            hasLoggedError || (hasLoggedError = true, console.error(
              "React instrumentation encountered an error: %s",
              err
            ));
          }
        null !== injectedProfilingHooks && "function" === typeof injectedProfilingHooks.markRenderScheduled && injectedProfilingHooks.markRenderScheduled(lane);
        parentComponent = getContextForSubtree(parentComponent);
        null === container.context ? container.context = parentComponent : container.pendingContext = parentComponent;
        isRendering && null !== current && !didWarnAboutNestedUpdates && (didWarnAboutNestedUpdates = true, console.error(
          "Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.\n\nCheck the render method of %s.",
          getComponentNameFromFiber(current) || "Unknown"
        ));
        container = createUpdate(lane);
        container.payload = { element };
        callback = void 0 === callback ? null : callback;
        null !== callback && ("function" !== typeof callback && console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          callback
        ), container.callback = callback);
        element = enqueueUpdate(rootFiber, container, lane);
        null !== element && (scheduleUpdateOnFiber(element, rootFiber, lane), entangleTransitions(element, rootFiber, lane));
      }
      function markRetryLaneImpl(fiber, retryLane) {
        fiber = fiber.memoizedState;
        if (null !== fiber && null !== fiber.dehydrated) {
          var a2 = fiber.retryLane;
          fiber.retryLane = 0 !== a2 && a2 < retryLane ? a2 : retryLane;
        }
      }
      function markRetryLaneIfNotHydrated(fiber, retryLane) {
        markRetryLaneImpl(fiber, retryLane);
        (fiber = fiber.alternate) && markRetryLaneImpl(fiber, retryLane);
      }
      function getCurrentFiberForDevTools() {
        return current;
      }
      function getLaneLabelMap() {
        for (var map = /* @__PURE__ */ new Map(), lane = 1, index = 0; 31 > index; index++) {
          var label = getLabelForLane(lane);
          map.set(lane, label);
          lane *= 2;
        }
        return map;
      }
      var exports2 = {};
      "use strict";
      var React4 = require_react(), Scheduler = require_scheduler(), assign = Object.assign, REACT_LEGACY_ELEMENT_TYPE = Symbol.for("react.element"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_PROVIDER_TYPE = Symbol.for("react.provider"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy");
      Symbol.for("react.scope");
      Symbol.for("react.debug_trace_mode");
      var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
      Symbol.for("react.legacy_hidden");
      Symbol.for("react.tracing_marker");
      var REACT_MEMO_CACHE_SENTINEL = Symbol.for("react.memo_cache_sentinel"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React4.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd;
      disabledLog.__reactDisabledLog = true;
      var prefix, suffix, reentry = false;
      var componentFrameCache = new ("function" === typeof WeakMap ? WeakMap : Map)();
      var current = null, isRendering = false, isArrayImpl = Array.isArray, rendererVersion = $$$config.rendererVersion, rendererPackageName = $$$config.rendererPackageName, extraDevToolsConfig = $$$config.extraDevToolsConfig, getPublicInstance = $$$config.getPublicInstance, getRootHostContext = $$$config.getRootHostContext, getChildHostContext = $$$config.getChildHostContext, prepareForCommit = $$$config.prepareForCommit, resetAfterCommit = $$$config.resetAfterCommit, createInstance2 = $$$config.createInstance, appendInitialChild = $$$config.appendInitialChild, finalizeInitialChildren = $$$config.finalizeInitialChildren, shouldSetTextContent = $$$config.shouldSetTextContent, createTextInstance = $$$config.createTextInstance, scheduleTimeout = $$$config.scheduleTimeout, cancelTimeout = $$$config.cancelTimeout, noTimeout = $$$config.noTimeout, isPrimaryRenderer = $$$config.isPrimaryRenderer;
      $$$config.warnsIfNotActing;
      var supportsMutation = $$$config.supportsMutation, supportsPersistence = $$$config.supportsPersistence, supportsHydration = $$$config.supportsHydration, getInstanceFromNode = $$$config.getInstanceFromNode;
      $$$config.beforeActiveInstanceBlur;
      $$$config.afterActiveInstanceBlur;
      var preparePortalMount = $$$config.preparePortalMount;
      $$$config.prepareScopeUpdate;
      $$$config.getInstanceFromScope;
      var setCurrentUpdatePriority = $$$config.setCurrentUpdatePriority, getCurrentUpdatePriority = $$$config.getCurrentUpdatePriority, resolveUpdatePriority = $$$config.resolveUpdatePriority;
      $$$config.resolveEventType;
      $$$config.resolveEventTimeStamp;
      var shouldAttemptEagerTransition = $$$config.shouldAttemptEagerTransition, detachDeletedInstance = $$$config.detachDeletedInstance;
      $$$config.requestPostPaintCallback;
      var maySuspendCommit = $$$config.maySuspendCommit, preloadInstance = $$$config.preloadInstance, startSuspendingCommit = $$$config.startSuspendingCommit, suspendInstance = $$$config.suspendInstance, waitForCommitToBeReady = $$$config.waitForCommitToBeReady, NotPendingTransition = $$$config.NotPendingTransition, HostTransitionContext = $$$config.HostTransitionContext, resetFormInstance = $$$config.resetFormInstance, bindToConsole = $$$config.bindToConsole, supportsMicrotasks = $$$config.supportsMicrotasks, scheduleMicrotask = $$$config.scheduleMicrotask, supportsTestSelectors = $$$config.supportsTestSelectors, findFiberRoot = $$$config.findFiberRoot, getBoundingRect = $$$config.getBoundingRect, getTextContent = $$$config.getTextContent, isHiddenSubtree = $$$config.isHiddenSubtree, matchAccessibilityRole = $$$config.matchAccessibilityRole, setFocusIfFocusable = $$$config.setFocusIfFocusable, setupIntersectionObserver = $$$config.setupIntersectionObserver, appendChild2 = $$$config.appendChild, appendChildToContainer = $$$config.appendChildToContainer, commitTextUpdate = $$$config.commitTextUpdate, commitMount = $$$config.commitMount, commitUpdate = $$$config.commitUpdate, insertBefore2 = $$$config.insertBefore, insertInContainerBefore = $$$config.insertInContainerBefore, removeChild2 = $$$config.removeChild, removeChildFromContainer = $$$config.removeChildFromContainer, resetTextContent = $$$config.resetTextContent, hideInstance2 = $$$config.hideInstance, hideTextInstance = $$$config.hideTextInstance, unhideInstance2 = $$$config.unhideInstance, unhideTextInstance = $$$config.unhideTextInstance, clearContainer = $$$config.clearContainer, cloneInstance = $$$config.cloneInstance, createContainerChildSet = $$$config.createContainerChildSet, appendChildToContainerChildSet = $$$config.appendChildToContainerChildSet, finalizeContainerChildren = $$$config.finalizeContainerChildren, replaceContainerChildren = $$$config.replaceContainerChildren, cloneHiddenInstance = $$$config.cloneHiddenInstance, cloneHiddenTextInstance = $$$config.cloneHiddenTextInstance, isSuspenseInstancePending = $$$config.isSuspenseInstancePending, isSuspenseInstanceFallback = $$$config.isSuspenseInstanceFallback, getSuspenseInstanceFallbackErrorDetails = $$$config.getSuspenseInstanceFallbackErrorDetails, registerSuspenseInstanceRetry = $$$config.registerSuspenseInstanceRetry, canHydrateFormStateMarker = $$$config.canHydrateFormStateMarker, isFormStateMarkerMatching = $$$config.isFormStateMarkerMatching, getNextHydratableSibling = $$$config.getNextHydratableSibling, getFirstHydratableChild = $$$config.getFirstHydratableChild, getFirstHydratableChildWithinContainer = $$$config.getFirstHydratableChildWithinContainer, getFirstHydratableChildWithinSuspenseInstance = $$$config.getFirstHydratableChildWithinSuspenseInstance, canHydrateInstance = $$$config.canHydrateInstance, canHydrateTextInstance = $$$config.canHydrateTextInstance, canHydrateSuspenseInstance = $$$config.canHydrateSuspenseInstance, hydrateInstance = $$$config.hydrateInstance, hydrateTextInstance = $$$config.hydrateTextInstance, hydrateSuspenseInstance = $$$config.hydrateSuspenseInstance, getNextHydratableInstanceAfterSuspenseInstance = $$$config.getNextHydratableInstanceAfterSuspenseInstance, commitHydratedContainer = $$$config.commitHydratedContainer, commitHydratedSuspenseInstance = $$$config.commitHydratedSuspenseInstance, clearSuspenseBoundary = $$$config.clearSuspenseBoundary, clearSuspenseBoundaryFromContainer = $$$config.clearSuspenseBoundaryFromContainer, shouldDeleteUnhydratedTailInstances = $$$config.shouldDeleteUnhydratedTailInstances, diffHydratedPropsForDevWarnings = $$$config.diffHydratedPropsForDevWarnings, diffHydratedTextForDevWarnings = $$$config.diffHydratedTextForDevWarnings, describeHydratableInstanceForDevWarnings = $$$config.describeHydratableInstanceForDevWarnings, validateHydratableInstance = $$$config.validateHydratableInstance, validateHydratableTextInstance = $$$config.validateHydratableTextInstance, supportsResources = $$$config.supportsResources, isHostHoistableType = $$$config.isHostHoistableType, getHoistableRoot = $$$config.getHoistableRoot, getResource = $$$config.getResource, acquireResource = $$$config.acquireResource, releaseResource = $$$config.releaseResource, hydrateHoistable = $$$config.hydrateHoistable, mountHoistable = $$$config.mountHoistable, unmountHoistable = $$$config.unmountHoistable, createHoistableInstance = $$$config.createHoistableInstance, prepareToCommitHoistables = $$$config.prepareToCommitHoistables, mayResourceSuspendCommit = $$$config.mayResourceSuspendCommit, preloadResource = $$$config.preloadResource, suspendResource = $$$config.suspendResource, supportsSingletons = $$$config.supportsSingletons, resolveSingletonInstance = $$$config.resolveSingletonInstance, clearSingleton = $$$config.clearSingleton, acquireSingletonInstance = $$$config.acquireSingletonInstance, releaseSingletonInstance = $$$config.releaseSingletonInstance, isHostSingletonType = $$$config.isHostSingletonType, valueStack = [];
      var fiberStack = [];
      var index$jscomp$0 = -1, emptyContextObject = {};
      Object.freeze(emptyContextObject);
      var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback, log$1 = Math.log, LN2 = Math.LN2, nextTransitionLane = 128, nextRetryLane = 4194304, scheduleCallback$3 = Scheduler.unstable_scheduleCallback, cancelCallback$1 = Scheduler.unstable_cancelCallback, shouldYield = Scheduler.unstable_shouldYield, requestPaint = Scheduler.unstable_requestPaint, now$1 = Scheduler.unstable_now, ImmediatePriority = Scheduler.unstable_ImmediatePriority, UserBlockingPriority = Scheduler.unstable_UserBlockingPriority, NormalPriority$1 = Scheduler.unstable_NormalPriority, IdlePriority = Scheduler.unstable_IdlePriority, log = Scheduler.log, unstable_setDisableYieldValue = Scheduler.unstable_setDisableYieldValue, rendererID = null, injectedHook = null, injectedProfilingHooks = null, hasLoggedError = false, isDevToolsPresent = "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__, objectIs = "function" === typeof Object.is ? Object.is : is2, CapturedStacks = /* @__PURE__ */ new WeakMap(), forkStack = [], forkStackIndex = 0, treeForkProvider = null, treeForkCount = 0, idStack = [], idStackIndex = 0, treeContextProvider = null, treeContextId = 1, treeContextOverflow = "", contextStackCursor = createCursor(null), contextFiberStackCursor = createCursor(null), rootInstanceStackCursor = createCursor(null), hostTransitionProviderCursor = createCursor(null), needsEscaping = /["'&<>\n\t]|^\s|\s$/, hydrationParentFiber = null, nextHydratableInstance = null, isHydrating = false, didSuspendOrErrorDEV = false, hydrationDiffRootDEV = null, hydrationErrors = null, rootOrSingletonContext = false, HydrationMismatchException = Error(
        "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
      ), NoMode = 0, concurrentQueues = [], concurrentQueuesIndex = 0, concurrentlyUpdatedLanes = 0, now = Scheduler.unstable_now, commitStartTime = -0, profilerStartTime = -1.1, profilerEffectDuration = -0, currentUpdateIsNested = false, nestedUpdateScheduled = false, firstScheduledRoot = null, lastScheduledRoot = null, didScheduleMicrotask = false, didScheduleMicrotask_act = false, mightHavePendingSyncWork = false, isFlushingWork = false, currentEventTransitionLane = 0, fakeActCallbackNode$1 = {}, currentEntangledListeners = null, currentEntangledPendingCount = 0, currentEntangledLane = 0, currentEntangledActionThenable = null, UpdateState = 0, ReplaceState = 1, ForceUpdate = 2, CaptureUpdate = 3, hasForceUpdate = false;
      var didWarnUpdateInsideUpdate = false;
      var currentlyProcessingQueue = null;
      var didReadFromEntangledAsyncAction = false, hasOwnProperty = Object.prototype.hasOwnProperty, ReactStrictModeWarnings = {
        recordUnsafeLifecycleWarnings: function() {
        },
        flushPendingUnsafeLifecycleWarnings: function() {
        },
        recordLegacyContextWarning: function() {
        },
        flushLegacyContextWarning: function() {
        },
        discardPendingWarnings: function() {
        }
      }, pendingComponentWillMountWarnings = [], pendingUNSAFE_ComponentWillMountWarnings = [], pendingComponentWillReceivePropsWarnings = [], pendingUNSAFE_ComponentWillReceivePropsWarnings = [], pendingComponentWillUpdateWarnings = [], pendingUNSAFE_ComponentWillUpdateWarnings = [], didWarnAboutUnsafeLifecycles = /* @__PURE__ */ new Set();
      ReactStrictModeWarnings.recordUnsafeLifecycleWarnings = function(fiber, instance) {
        didWarnAboutUnsafeLifecycles.has(fiber.type) || ("function" === typeof instance.componentWillMount && true !== instance.componentWillMount.__suppressDeprecationWarning && pendingComponentWillMountWarnings.push(fiber), fiber.mode & 8 && "function" === typeof instance.UNSAFE_componentWillMount && pendingUNSAFE_ComponentWillMountWarnings.push(fiber), "function" === typeof instance.componentWillReceiveProps && true !== instance.componentWillReceiveProps.__suppressDeprecationWarning && pendingComponentWillReceivePropsWarnings.push(fiber), fiber.mode & 8 && "function" === typeof instance.UNSAFE_componentWillReceiveProps && pendingUNSAFE_ComponentWillReceivePropsWarnings.push(fiber), "function" === typeof instance.componentWillUpdate && true !== instance.componentWillUpdate.__suppressDeprecationWarning && pendingComponentWillUpdateWarnings.push(fiber), fiber.mode & 8 && "function" === typeof instance.UNSAFE_componentWillUpdate && pendingUNSAFE_ComponentWillUpdateWarnings.push(fiber));
      };
      ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings = function() {
        var componentWillMountUniqueNames = /* @__PURE__ */ new Set();
        0 < pendingComponentWillMountWarnings.length && (pendingComponentWillMountWarnings.forEach(function(fiber) {
          componentWillMountUniqueNames.add(
            getComponentNameFromFiber(fiber) || "Component"
          );
          didWarnAboutUnsafeLifecycles.add(fiber.type);
        }), pendingComponentWillMountWarnings = []);
        var UNSAFE_componentWillMountUniqueNames = /* @__PURE__ */ new Set();
        0 < pendingUNSAFE_ComponentWillMountWarnings.length && (pendingUNSAFE_ComponentWillMountWarnings.forEach(function(fiber) {
          UNSAFE_componentWillMountUniqueNames.add(
            getComponentNameFromFiber(fiber) || "Component"
          );
          didWarnAboutUnsafeLifecycles.add(fiber.type);
        }), pendingUNSAFE_ComponentWillMountWarnings = []);
        var componentWillReceivePropsUniqueNames = /* @__PURE__ */ new Set();
        0 < pendingComponentWillReceivePropsWarnings.length && (pendingComponentWillReceivePropsWarnings.forEach(function(fiber) {
          componentWillReceivePropsUniqueNames.add(
            getComponentNameFromFiber(fiber) || "Component"
          );
          didWarnAboutUnsafeLifecycles.add(fiber.type);
        }), pendingComponentWillReceivePropsWarnings = []);
        var UNSAFE_componentWillReceivePropsUniqueNames = /* @__PURE__ */ new Set();
        0 < pendingUNSAFE_ComponentWillReceivePropsWarnings.length && (pendingUNSAFE_ComponentWillReceivePropsWarnings.forEach(
          function(fiber) {
            UNSAFE_componentWillReceivePropsUniqueNames.add(
              getComponentNameFromFiber(fiber) || "Component"
            );
            didWarnAboutUnsafeLifecycles.add(fiber.type);
          }
        ), pendingUNSAFE_ComponentWillReceivePropsWarnings = []);
        var componentWillUpdateUniqueNames = /* @__PURE__ */ new Set();
        0 < pendingComponentWillUpdateWarnings.length && (pendingComponentWillUpdateWarnings.forEach(function(fiber) {
          componentWillUpdateUniqueNames.add(
            getComponentNameFromFiber(fiber) || "Component"
          );
          didWarnAboutUnsafeLifecycles.add(fiber.type);
        }), pendingComponentWillUpdateWarnings = []);
        var UNSAFE_componentWillUpdateUniqueNames = /* @__PURE__ */ new Set();
        0 < pendingUNSAFE_ComponentWillUpdateWarnings.length && (pendingUNSAFE_ComponentWillUpdateWarnings.forEach(function(fiber) {
          UNSAFE_componentWillUpdateUniqueNames.add(
            getComponentNameFromFiber(fiber) || "Component"
          );
          didWarnAboutUnsafeLifecycles.add(fiber.type);
        }), pendingUNSAFE_ComponentWillUpdateWarnings = []);
        if (0 < UNSAFE_componentWillMountUniqueNames.size) {
          var sortedNames = setToSortedString(
            UNSAFE_componentWillMountUniqueNames
          );
          console.error(
            "Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n\nPlease update the following components: %s",
            sortedNames
          );
        }
        0 < UNSAFE_componentWillReceivePropsUniqueNames.size && (sortedNames = setToSortedString(
          UNSAFE_componentWillReceivePropsUniqueNames
        ), console.error(
          "Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state\n\nPlease update the following components: %s",
          sortedNames
        ));
        0 < UNSAFE_componentWillUpdateUniqueNames.size && (sortedNames = setToSortedString(
          UNSAFE_componentWillUpdateUniqueNames
        ), console.error(
          "Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n\nPlease update the following components: %s",
          sortedNames
        ));
        0 < componentWillMountUniqueNames.size && (sortedNames = setToSortedString(componentWillMountUniqueNames), console.warn(
          "componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s",
          sortedNames
        ));
        0 < componentWillReceivePropsUniqueNames.size && (sortedNames = setToSortedString(
          componentWillReceivePropsUniqueNames
        ), console.warn(
          "componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state\n* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s",
          sortedNames
        ));
        0 < componentWillUpdateUniqueNames.size && (sortedNames = setToSortedString(componentWillUpdateUniqueNames), console.warn(
          "componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s",
          sortedNames
        ));
      };
      var pendingLegacyContextWarning = /* @__PURE__ */ new Map(), didWarnAboutLegacyContext = /* @__PURE__ */ new Set();
      ReactStrictModeWarnings.recordLegacyContextWarning = function(fiber, instance) {
        var strictRoot = null;
        for (var node = fiber; null !== node; )
          node.mode & 8 && (strictRoot = node), node = node.return;
        null === strictRoot ? console.error(
          "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
        ) : !didWarnAboutLegacyContext.has(fiber.type) && (node = pendingLegacyContextWarning.get(strictRoot), null != fiber.type.contextTypes || null != fiber.type.childContextTypes || null !== instance && "function" === typeof instance.getChildContext) && (void 0 === node && (node = [], pendingLegacyContextWarning.set(strictRoot, node)), node.push(fiber));
      };
      ReactStrictModeWarnings.flushLegacyContextWarning = function() {
        pendingLegacyContextWarning.forEach(function(fiberArray) {
          if (0 !== fiberArray.length) {
            var firstFiber = fiberArray[0], uniqueNames = /* @__PURE__ */ new Set();
            fiberArray.forEach(function(fiber) {
              uniqueNames.add(getComponentNameFromFiber(fiber) || "Component");
              didWarnAboutLegacyContext.add(fiber.type);
            });
            var sortedNames = setToSortedString(uniqueNames);
            runWithFiberInDEV(firstFiber, function() {
              console.error(
                "Legacy context API has been detected within a strict-mode tree.\n\nThe old API will be supported in all 16.x releases, but applications using it should migrate to the new version.\n\nPlease update the following components: %s\n\nLearn more about this warning here: https://react.dev/link/legacy-context",
                sortedNames
              );
            });
          }
        });
      };
      ReactStrictModeWarnings.discardPendingWarnings = function() {
        pendingComponentWillMountWarnings = [];
        pendingUNSAFE_ComponentWillMountWarnings = [];
        pendingComponentWillReceivePropsWarnings = [];
        pendingUNSAFE_ComponentWillReceivePropsWarnings = [];
        pendingComponentWillUpdateWarnings = [];
        pendingUNSAFE_ComponentWillUpdateWarnings = [];
        pendingLegacyContextWarning = /* @__PURE__ */ new Map();
      };
      var SuspenseException = Error(
        "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`"
      ), SuspenseyCommitException = Error(
        "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
      ), noopSuspenseyCommitThenable = {
        then: function() {
          console.error(
            'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
          );
        }
      }, suspendedThenable = null, needsToResetSuspendedThenableDEV = false, callComponent = {
        "react-stack-bottom-frame": function(Component3, props, secondArg) {
          var wasRendering = isRendering;
          isRendering = true;
          try {
            return Component3(props, secondArg);
          } finally {
            isRendering = wasRendering;
          }
        }
      }, callComponentInDEV = callComponent["react-stack-bottom-frame"].bind(callComponent), callRender = {
        "react-stack-bottom-frame": function(instance) {
          var wasRendering = isRendering;
          isRendering = true;
          try {
            return instance.render();
          } finally {
            isRendering = wasRendering;
          }
        }
      }, callRenderInDEV = callRender["react-stack-bottom-frame"].bind(callRender), callComponentDidMount = {
        "react-stack-bottom-frame": function(finishedWork, instance) {
          try {
            instance.componentDidMount();
          } catch (error) {
            captureCommitPhaseError(finishedWork, finishedWork.return, error);
          }
        }
      }, callComponentDidMountInDEV = callComponentDidMount["react-stack-bottom-frame"].bind(callComponentDidMount), callComponentDidUpdate = {
        "react-stack-bottom-frame": function(finishedWork, instance, prevProps, prevState, snapshot) {
          try {
            instance.componentDidUpdate(prevProps, prevState, snapshot);
          } catch (error) {
            captureCommitPhaseError(finishedWork, finishedWork.return, error);
          }
        }
      }, callComponentDidUpdateInDEV = callComponentDidUpdate["react-stack-bottom-frame"].bind(callComponentDidUpdate), callComponentDidCatch = {
        "react-stack-bottom-frame": function(instance, errorInfo) {
          var stack = errorInfo.stack;
          instance.componentDidCatch(errorInfo.value, {
            componentStack: null !== stack ? stack : ""
          });
        }
      }, callComponentDidCatchInDEV = callComponentDidCatch["react-stack-bottom-frame"].bind(callComponentDidCatch), callComponentWillUnmount = {
        "react-stack-bottom-frame": function(current2, nearestMountedAncestor, instance) {
          try {
            instance.componentWillUnmount();
          } catch (error) {
            captureCommitPhaseError(current2, nearestMountedAncestor, error);
          }
        }
      }, callComponentWillUnmountInDEV = callComponentWillUnmount["react-stack-bottom-frame"].bind(callComponentWillUnmount), callCreate = {
        "react-stack-bottom-frame": function(effect) {
          var create = effect.create;
          effect = effect.inst;
          create = create();
          return effect.destroy = create;
        }
      }, callCreateInDEV = callCreate["react-stack-bottom-frame"].bind(callCreate), callDestroy = {
        "react-stack-bottom-frame": function(current2, nearestMountedAncestor, destroy) {
          try {
            destroy();
          } catch (error) {
            captureCommitPhaseError(current2, nearestMountedAncestor, error);
          }
        }
      }, callDestroyInDEV = callDestroy["react-stack-bottom-frame"].bind(callDestroy), callLazyInit = {
        "react-stack-bottom-frame": function(lazy) {
          var init = lazy._init;
          return init(lazy._payload);
        }
      }, callLazyInitInDEV = callLazyInit["react-stack-bottom-frame"].bind(callLazyInit), thenableState$1 = null, thenableIndexCounter$1 = 0, currentDebugInfo = null, didWarnAboutMaps;
      var didWarnAboutGenerators = didWarnAboutMaps = false;
      var ownerHasKeyUseWarning = {};
      var ownerHasFunctionTypeWarning = {};
      var ownerHasSymbolTypeWarning = {};
      warnForMissingKey = function(returnFiber, workInProgress2, child) {
        if (null !== child && "object" === typeof child && child._store && (!child._store.validated && null == child.key || 2 === child._store.validated)) {
          if ("object" !== typeof child._store)
            throw Error(
              "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
            );
          child._store.validated = 1;
          var componentName2 = getComponentNameFromFiber(returnFiber), componentKey = componentName2 || "null";
          if (!ownerHasKeyUseWarning[componentKey]) {
            ownerHasKeyUseWarning[componentKey] = true;
            child = child._owner;
            returnFiber = returnFiber._debugOwner;
            var currentComponentErrorInfo = "";
            returnFiber && "number" === typeof returnFiber.tag && (componentKey = getComponentNameFromFiber(returnFiber)) && (currentComponentErrorInfo = "\n\nCheck the render method of `" + componentKey + "`.");
            currentComponentErrorInfo || componentName2 && (currentComponentErrorInfo = "\n\nCheck the top-level render call using <" + componentName2 + ">.");
            var childOwnerAppendix = "";
            null != child && returnFiber !== child && (componentName2 = null, "number" === typeof child.tag ? componentName2 = getComponentNameFromFiber(child) : "string" === typeof child.name && (componentName2 = child.name), componentName2 && (childOwnerAppendix = " It was passed a child from " + componentName2 + "."));
            runWithFiberInDEV(workInProgress2, function() {
              console.error(
                'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
                currentComponentErrorInfo,
                childOwnerAppendix
              );
            });
          }
        }
      };
      var reconcileChildFibers = createChildReconciler(true), mountChildFibers = createChildReconciler(false), currentTreeHiddenStackCursor = createCursor(null), prevEntangledRenderLanesCursor = createCursor(0), suspenseHandlerStackCursor = createCursor(null), shellBoundary = null, SubtreeSuspenseContextMask = 1, ForceSuspenseFallback = 2, suspenseStackCursor = createCursor(0), NoFlags2 = 0, HasEffect = 1, Insertion = 2, Layout = 4, Passive = 8, didWarnUncachedGetSnapshot;
      var didWarnAboutMismatchedHooksForComponent = /* @__PURE__ */ new Set();
      var didWarnAboutUseWrappedInTryCatch = /* @__PURE__ */ new Set();
      var didWarnAboutAsyncClientComponent = /* @__PURE__ */ new Set();
      var didWarnAboutUseFormState = /* @__PURE__ */ new Set();
      var renderLanes = 0, currentlyRenderingFiber$1 = null, currentHook = null, workInProgressHook = null, didScheduleRenderPhaseUpdate = false, didScheduleRenderPhaseUpdateDuringThisPass = false, shouldDoubleInvokeUserFnsInHooksDEV = false, localIdCounter = 0, thenableIndexCounter = 0, thenableState = null, globalClientIdCounter = 0, RE_RENDER_LIMIT = 25, currentHookNameInDev = null, hookTypesDev = null, hookTypesUpdateIndexDev = -1, ignorePreviousDependencies = false;
      var createFunctionComponentUpdateQueue = function() {
        return { lastEffect: null, events: null, stores: null, memoCache: null };
      };
      var ContextOnlyDispatcher = {
        readContext,
        use: use2,
        useCallback: throwInvalidHookError,
        useContext: throwInvalidHookError,
        useEffect: throwInvalidHookError,
        useImperativeHandle: throwInvalidHookError,
        useLayoutEffect: throwInvalidHookError,
        useInsertionEffect: throwInvalidHookError,
        useMemo: throwInvalidHookError,
        useReducer: throwInvalidHookError,
        useRef: throwInvalidHookError,
        useState: throwInvalidHookError,
        useDebugValue: throwInvalidHookError,
        useDeferredValue: throwInvalidHookError,
        useTransition: throwInvalidHookError,
        useSyncExternalStore: throwInvalidHookError,
        useId: throwInvalidHookError
      };
      ContextOnlyDispatcher.useCacheRefresh = throwInvalidHookError;
      ContextOnlyDispatcher.useMemoCache = throwInvalidHookError;
      ContextOnlyDispatcher.useHostTransitionStatus = throwInvalidHookError;
      ContextOnlyDispatcher.useFormState = throwInvalidHookError;
      ContextOnlyDispatcher.useActionState = throwInvalidHookError;
      ContextOnlyDispatcher.useOptimistic = throwInvalidHookError;
      var HooksDispatcherOnMountInDEV = null, HooksDispatcherOnMountWithHookTypesInDEV = null, HooksDispatcherOnUpdateInDEV = null, HooksDispatcherOnRerenderInDEV = null, InvalidNestedHooksDispatcherOnMountInDEV = null, InvalidNestedHooksDispatcherOnUpdateInDEV = null, InvalidNestedHooksDispatcherOnRerenderInDEV = null;
      HooksDispatcherOnMountInDEV = {
        readContext: function(context2) {
          return readContext(context2);
        },
        use: use2,
        useCallback: function(callback, deps) {
          currentHookNameInDev = "useCallback";
          mountHookTypesDev();
          checkDepsAreArrayDev(deps);
          return mountCallback(callback, deps);
        },
        useContext: function(context2) {
          currentHookNameInDev = "useContext";
          mountHookTypesDev();
          return readContext(context2);
        },
        useEffect: function(create, deps) {
          currentHookNameInDev = "useEffect";
          mountHookTypesDev();
          checkDepsAreArrayDev(deps);
          return mountEffect(create, deps);
        },
        useImperativeHandle: function(ref, create, deps) {
          currentHookNameInDev = "useImperativeHandle";
          mountHookTypesDev();
          checkDepsAreArrayDev(deps);
          return mountImperativeHandle(ref, create, deps);
        },
        useInsertionEffect: function(create, deps) {
          currentHookNameInDev = "useInsertionEffect";
          mountHookTypesDev();
          checkDepsAreArrayDev(deps);
          mountEffectImpl(4, Insertion, create, deps);
        },
        useLayoutEffect: function(create, deps) {
          currentHookNameInDev = "useLayoutEffect";
          mountHookTypesDev();
          checkDepsAreArrayDev(deps);
          return mountLayoutEffect(create, deps);
        },
        useMemo: function(create, deps) {
          currentHookNameInDev = "useMemo";
          mountHookTypesDev();
          checkDepsAreArrayDev(deps);
          var prevDispatcher = ReactSharedInternals.H;
          ReactSharedInternals.H = InvalidNestedHooksDispatcherOnMountInDEV;
          try {
            return mountMemo(create, deps);
          } finally {
            ReactSharedInternals.H = prevDispatcher;
          }
        },
        useReducer: function(reducer, initialArg, init) {
          currentHookNameInDev = "useReducer";
          mountHookTypesDev();
          var prevDispatcher = ReactSharedInternals.H;
          ReactSharedInternals.H = InvalidNestedHooksDispatcherOnMountInDEV;
          try {
            return mountReducer(reducer, initialArg, init);
          } finally {
            ReactSharedInternals.H = prevDispatcher;
          }
        },
        useRef: function(initialValue) {
          currentHookNameInDev = "useRef";
          mountHookTypesDev();
          return mountRef(initialValue);
        },
        useState: function(initialState) {
          currentHookNameInDev = "useState";
          mountHookTypesDev();
          var prevDispatcher = ReactSharedInternals.H;
          ReactSharedInternals.H = InvalidNestedHooksDispatcherOnMountInDEV;
          try {
            return mountState(initialState);
          } finally {
            ReactSharedInternals.H = prevDispatcher;
          }
        },
        useDebugValue: function() {
          currentHookNameInDev = "useDebugValue";
          mountHookTypesDev();
        },
        useDeferredValue: function(value, initialValue) {
          currentHookNameInDev = "useDeferredValue";
          mountHookTypesDev();
          return mountDeferredValue(value, initialValue);
        },
        useTransition: function() {
          currentHookNameInDev = "useTransition";
          mountHookTypesDev();
          return mountTransition();
        },
        useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
          currentHookNameInDev = "useSyncExternalStore";
          mountHookTypesDev();
          return mountSyncExternalStore(
            subscribe,
            getSnapshot,
            getServerSnapshot
          );
        },
        useId: function() {
          currentHookNameInDev = "useId";
          mountHookTypesDev();
          return mountId();
        },
        useCacheRefresh: function() {
          currentHookNameInDev = "useCacheRefresh";
          mountHookTypesDev();
          return mountRefresh();
        }
      };
      HooksDispatcherOnMountInDEV.useMemoCache = useMemoCache;
      HooksDispatcherOnMountInDEV.useHostTransitionStatus = useHostTransitionStatus;
      HooksDispatcherOnMountInDEV.useFormState = function(action, initialState) {
        currentHookNameInDev = "useFormState";
        mountHookTypesDev();
        warnOnUseFormStateInDev();
        return mountActionState(action, initialState);
      };
      HooksDispatcherOnMountInDEV.useActionState = function(action, initialState) {
        currentHookNameInDev = "useActionState";
        mountHookTypesDev();
        return mountActionState(action, initialState);
      };
      HooksDispatcherOnMountInDEV.useOptimistic = function(passthrough) {
        currentHookNameInDev = "useOptimistic";
        mountHookTypesDev();
        return mountOptimistic(passthrough);
      };
      HooksDispatcherOnMountWithHookTypesInDEV = {
        readContext: function(context2) {
          return readContext(context2);
        },
        use: use2,
        useCallback: function(callback, deps) {
          currentHookNameInDev = "useCallback";
          updateHookTypesDev();
          return mountCallback(callback, deps);
        },
        useContext: function(context2) {
          currentHookNameInDev = "useContext";
          updateHookTypesDev();
          return readContext(context2);
        },
        useEffect: function(create, deps) {
          currentHookNameInDev = "useEffect";
          updateHookTypesDev();
          return mountEffect(create, deps);
        },
        useImperativeHandle: function(ref, create, deps) {
          currentHookNameInDev = "useImperativeHandle";
          updateHookTypesDev();
          return mountImperativeHandle(ref, create, deps);
        },
        useInsertionEffect: function(create, deps) {
          currentHookNameInDev = "useInsertionEffect";
          updateHookTypesDev();
          mountEffectImpl(4, Insertion, create, deps);
        },
        useLayoutEffect: function(create, deps) {
          currentHookNameInDev = "useLayoutEffect";
          updateHookTypesDev();
          return mountLayoutEffect(create, deps);
        },
        useMemo: function(create, deps) {
          currentHookNameInDev = "useMemo";
          updateHookTypesDev();
          var prevDispatcher = ReactSharedInternals.H;
          ReactSharedInternals.H = InvalidNestedHooksDispatcherOnMountInDEV;
          try {
            return mountMemo(create, deps);
          } finally {
            ReactSharedInternals.H = prevDispatcher;
          }
        },
        useReducer: function(reducer, initialArg, init) {
          currentHookNameInDev = "useReducer";
          updateHookTypesDev();
          var prevDispatcher = ReactSharedInternals.H;
          ReactSharedInternals.H = InvalidNestedHooksDispatcherOnMountInDEV;
          try {
            return mountReducer(reducer, initialArg, init);
          } finally {
            ReactSharedInternals.H = prevDispatcher;
          }
        },
        useRef: function(initialValue) {
          currentHookNameInDev = "useRef";
          updateHookTypesDev();
          return mountRef(initialValue);
        },
        useState: function(initialState) {
          currentHookNameInDev = "useState";
          updateHookTypesDev();
          var prevDispatcher = ReactSharedInternals.H;
          ReactSharedInternals.H = InvalidNestedHooksDispatcherOnMountInDEV;
          try {
            return mountState(initialState);
          } finally {
            ReactSharedInternals.H = prevDispatcher;
          }
        },
        useDebugValue: function() {
          currentHookNameInDev = "useDebugValue";
          updateHookTypesDev();
        },
        useDeferredValue: function(value, initialValue) {
          currentHookNameInDev = "useDeferredValue";
          updateHookTypesDev();
          return mountDeferredValue(value, initialValue);
        },
        useTransition: function() {
          currentHookNameInDev = "useTransition";
          updateHookTypesDev();
          return mountTransition();
        },
        useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
          currentHookNameInDev = "useSyncExternalStore";
          updateHookTypesDev();
          return mountSyncExternalStore(
            subscribe,
            getSnapshot,
            getServerSnapshot
          );
        },
        useId: function() {
          currentHookNameInDev = "useId";
          updateHookTypesDev();
          return mountId();
        },
        useCacheRefresh: function() {
          currentHookNameInDev = "useCacheRefresh";
          updateHookTypesDev();
          return mountRefresh();
        }
      };
      HooksDispatcherOnMountWithHookTypesInDEV.useMemoCache = useMemoCache;
      HooksDispatcherOnMountWithHookTypesInDEV.useHostTransitionStatus = useHostTransitionStatus;
      HooksDispatcherOnMountWithHookTypesInDEV.useFormState = function(action, initialState) {
        currentHookNameInDev = "useFormState";
        updateHookTypesDev();
        warnOnUseFormStateInDev();
        return mountActionState(action, initialState);
      };
      HooksDispatcherOnMountWithHookTypesInDEV.useActionState = function(action, initialState) {
        currentHookNameInDev = "useActionState";
        updateHookTypesDev();
        return mountActionState(action, initialState);
      };
      HooksDispatcherOnMountWithHookTypesInDEV.useOptimistic = function(passthrough) {
        currentHookNameInDev = "useOptimistic";
        updateHookTypesDev();
        return mountOptimistic(passthrough);
      };
      HooksDispatcherOnUpdateInDEV = {
        readContext: function(context2) {
          return readContext(context2);
        },
        use: use2,
        useCallback: function(callback, deps) {
          currentHookNameInDev = "useCallback";
          updateHookTypesDev();
          return updateCallback(callback, deps);
        },
        useContext: function(context2) {
          currentHookNameInDev = "useContext";
          updateHookTypesDev();
          return readContext(context2);
        },
        useEffect: function(create, deps) {
          currentHookNameInDev = "useEffect";
          updateHookTypesDev();
          updateEffectImpl(2048, Passive, create, deps);
        },
        useImperativeHandle: function(ref, create, deps) {
          currentHookNameInDev = "useImperativeHandle";
          updateHookTypesDev();
          return updateImperativeHandle(ref, create, deps);
        },
        useInsertionEffect: function(create, deps) {
          currentHookNameInDev = "useInsertionEffect";
          updateHookTypesDev();
          return updateEffectImpl(4, Insertion, create, deps);
        },
        useLayoutEffect: function(create, deps) {
          currentHookNameInDev = "useLayoutEffect";
          updateHookTypesDev();
          return updateEffectImpl(4, Layout, create, deps);
        },
        useMemo: function(create, deps) {
          currentHookNameInDev = "useMemo";
          updateHookTypesDev();
          var prevDispatcher = ReactSharedInternals.H;
          ReactSharedInternals.H = InvalidNestedHooksDispatcherOnUpdateInDEV;
          try {
            return updateMemo(create, deps);
          } finally {
            ReactSharedInternals.H = prevDispatcher;
          }
        },
        useReducer: function(reducer, initialArg, init) {
          currentHookNameInDev = "useReducer";
          updateHookTypesDev();
          var prevDispatcher = ReactSharedInternals.H;
          ReactSharedInternals.H = InvalidNestedHooksDispatcherOnUpdateInDEV;
          try {
            return updateReducer(reducer, initialArg, init);
          } finally {
            ReactSharedInternals.H = prevDispatcher;
          }
        },
        useRef: function() {
          currentHookNameInDev = "useRef";
          updateHookTypesDev();
          return updateWorkInProgressHook().memoizedState;
        },
        useState: function() {
          currentHookNameInDev = "useState";
          updateHookTypesDev();
          var prevDispatcher = ReactSharedInternals.H;
          ReactSharedInternals.H = InvalidNestedHooksDispatcherOnUpdateInDEV;
          try {
            return updateReducer(basicStateReducer);
          } finally {
            ReactSharedInternals.H = prevDispatcher;
          }
        },
        useDebugValue: function() {
          currentHookNameInDev = "useDebugValue";
          updateHookTypesDev();
        },
        useDeferredValue: function(value, initialValue) {
          currentHookNameInDev = "useDeferredValue";
          updateHookTypesDev();
          return updateDeferredValue(value, initialValue);
        },
        useTransition: function() {
          currentHookNameInDev = "useTransition";
          updateHookTypesDev();
          return updateTransition();
        },
        useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
          currentHookNameInDev = "useSyncExternalStore";
          updateHookTypesDev();
          return updateSyncExternalStore(
            subscribe,
            getSnapshot,
            getServerSnapshot
          );
        },
        useId: function() {
          currentHookNameInDev = "useId";
          updateHookTypesDev();
          return updateWorkInProgressHook().memoizedState;
        },
        useCacheRefresh: function() {
          currentHookNameInDev = "useCacheRefresh";
          updateHookTypesDev();
          return updateWorkInProgressHook().memoizedState;
        }
      };
      HooksDispatcherOnUpdateInDEV.useMemoCache = useMemoCache;
      HooksDispatcherOnUpdateInDEV.useHostTransitionStatus = useHostTransitionStatus;
      HooksDispatcherOnUpdateInDEV.useFormState = function(action) {
        currentHookNameInDev = "useFormState";
        updateHookTypesDev();
        warnOnUseFormStateInDev();
        return updateActionState(action);
      };
      HooksDispatcherOnUpdateInDEV.useActionState = function(action) {
        currentHookNameInDev = "useActionState";
        updateHookTypesDev();
        return updateActionState(action);
      };
      HooksDispatcherOnUpdateInDEV.useOptimistic = function(passthrough, reducer) {
        currentHookNameInDev = "useOptimistic";
        updateHookTypesDev();
        return updateOptimistic(passthrough, reducer);
      };
      HooksDispatcherOnRerenderInDEV = {
        readContext: function(context2) {
          return readContext(context2);
        },
        use: use2,
        useCallback: function(callback, deps) {
          currentHookNameInDev = "useCallback";
          updateHookTypesDev();
          return updateCallback(callback, deps);
        },
        useContext: function(context2) {
          currentHookNameInDev = "useContext";
          updateHookTypesDev();
          return readContext(context2);
        },
        useEffect: function(create, deps) {
          currentHookNameInDev = "useEffect";
          updateHookTypesDev();
          updateEffectImpl(2048, Passive, create, deps);
        },
        useImperativeHandle: function(ref, create, deps) {
          currentHookNameInDev = "useImperativeHandle";
          updateHookTypesDev();
          return updateImperativeHandle(ref, create, deps);
        },
        useInsertionEffect: function(create, deps) {
          currentHookNameInDev = "useInsertionEffect";
          updateHookTypesDev();
          return updateEffectImpl(4, Insertion, create, deps);
        },
        useLayoutEffect: function(create, deps) {
          currentHookNameInDev = "useLayoutEffect";
          updateHookTypesDev();
          return updateEffectImpl(4, Layout, create, deps);
        },
        useMemo: function(create, deps) {
          currentHookNameInDev = "useMemo";
          updateHookTypesDev();
          var prevDispatcher = ReactSharedInternals.H;
          ReactSharedInternals.H = InvalidNestedHooksDispatcherOnRerenderInDEV;
          try {
            return updateMemo(create, deps);
          } finally {
            ReactSharedInternals.H = prevDispatcher;
          }
        },
        useReducer: function(reducer, initialArg, init) {
          currentHookNameInDev = "useReducer";
          updateHookTypesDev();
          var prevDispatcher = ReactSharedInternals.H;
          ReactSharedInternals.H = InvalidNestedHooksDispatcherOnRerenderInDEV;
          try {
            return rerenderReducer(reducer, initialArg, init);
          } finally {
            ReactSharedInternals.H = prevDispatcher;
          }
        },
        useRef: function() {
          currentHookNameInDev = "useRef";
          updateHookTypesDev();
          return updateWorkInProgressHook().memoizedState;
        },
        useState: function() {
          currentHookNameInDev = "useState";
          updateHookTypesDev();
          var prevDispatcher = ReactSharedInternals.H;
          ReactSharedInternals.H = InvalidNestedHooksDispatcherOnRerenderInDEV;
          try {
            return rerenderReducer(basicStateReducer);
          } finally {
            ReactSharedInternals.H = prevDispatcher;
          }
        },
        useDebugValue: function() {
          currentHookNameInDev = "useDebugValue";
          updateHookTypesDev();
        },
        useDeferredValue: function(value, initialValue) {
          currentHookNameInDev = "useDeferredValue";
          updateHookTypesDev();
          return rerenderDeferredValue(value, initialValue);
        },
        useTransition: function() {
          currentHookNameInDev = "useTransition";
          updateHookTypesDev();
          return rerenderTransition();
        },
        useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
          currentHookNameInDev = "useSyncExternalStore";
          updateHookTypesDev();
          return updateSyncExternalStore(
            subscribe,
            getSnapshot,
            getServerSnapshot
          );
        },
        useId: function() {
          currentHookNameInDev = "useId";
          updateHookTypesDev();
          return updateWorkInProgressHook().memoizedState;
        },
        useCacheRefresh: function() {
          currentHookNameInDev = "useCacheRefresh";
          updateHookTypesDev();
          return updateWorkInProgressHook().memoizedState;
        }
      };
      HooksDispatcherOnRerenderInDEV.useMemoCache = useMemoCache;
      HooksDispatcherOnRerenderInDEV.useHostTransitionStatus = useHostTransitionStatus;
      HooksDispatcherOnRerenderInDEV.useFormState = function(action) {
        currentHookNameInDev = "useFormState";
        updateHookTypesDev();
        warnOnUseFormStateInDev();
        return rerenderActionState(action);
      };
      HooksDispatcherOnRerenderInDEV.useActionState = function(action) {
        currentHookNameInDev = "useActionState";
        updateHookTypesDev();
        return rerenderActionState(action);
      };
      HooksDispatcherOnRerenderInDEV.useOptimistic = function(passthrough, reducer) {
        currentHookNameInDev = "useOptimistic";
        updateHookTypesDev();
        return rerenderOptimistic(passthrough, reducer);
      };
      InvalidNestedHooksDispatcherOnMountInDEV = {
        readContext: function(context2) {
          warnInvalidContextAccess();
          return readContext(context2);
        },
        use: function(usable) {
          warnInvalidHookAccess();
          return use2(usable);
        },
        useCallback: function(callback, deps) {
          currentHookNameInDev = "useCallback";
          warnInvalidHookAccess();
          mountHookTypesDev();
          return mountCallback(callback, deps);
        },
        useContext: function(context2) {
          currentHookNameInDev = "useContext";
          warnInvalidHookAccess();
          mountHookTypesDev();
          return readContext(context2);
        },
        useEffect: function(create, deps) {
          currentHookNameInDev = "useEffect";
          warnInvalidHookAccess();
          mountHookTypesDev();
          return mountEffect(create, deps);
        },
        useImperativeHandle: function(ref, create, deps) {
          currentHookNameInDev = "useImperativeHandle";
          warnInvalidHookAccess();
          mountHookTypesDev();
          return mountImperativeHandle(ref, create, deps);
        },
        useInsertionEffect: function(create, deps) {
          currentHookNameInDev = "useInsertionEffect";
          warnInvalidHookAccess();
          mountHookTypesDev();
          mountEffectImpl(4, Insertion, create, deps);
        },
        useLayoutEffect: function(create, deps) {
          currentHookNameInDev = "useLayoutEffect";
          warnInvalidHookAccess();
          mountHookTypesDev();
          return mountLayoutEffect(create, deps);
        },
        useMemo: function(create, deps) {
          currentHookNameInDev = "useMemo";
          warnInvalidHookAccess();
          mountHookTypesDev();
          var prevDispatcher = ReactSharedInternals.H;
          ReactSharedInternals.H = InvalidNestedHooksDispatcherOnMountInDEV;
          try {
            return mountMemo(create, deps);
          } finally {
            ReactSharedInternals.H = prevDispatcher;
          }
        },
        useReducer: function(reducer, initialArg, init) {
          currentHookNameInDev = "useReducer";
          warnInvalidHookAccess();
          mountHookTypesDev();
          var prevDispatcher = ReactSharedInternals.H;
          ReactSharedInternals.H = InvalidNestedHooksDispatcherOnMountInDEV;
          try {
            return mountReducer(reducer, initialArg, init);
          } finally {
            ReactSharedInternals.H = prevDispatcher;
          }
        },
        useRef: function(initialValue) {
          currentHookNameInDev = "useRef";
          warnInvalidHookAccess();
          mountHookTypesDev();
          return mountRef(initialValue);
        },
        useState: function(initialState) {
          currentHookNameInDev = "useState";
          warnInvalidHookAccess();
          mountHookTypesDev();
          var prevDispatcher = ReactSharedInternals.H;
          ReactSharedInternals.H = InvalidNestedHooksDispatcherOnMountInDEV;
          try {
            return mountState(initialState);
          } finally {
            ReactSharedInternals.H = prevDispatcher;
          }
        },
        useDebugValue: function() {
          currentHookNameInDev = "useDebugValue";
          warnInvalidHookAccess();
          mountHookTypesDev();
        },
        useDeferredValue: function(value, initialValue) {
          currentHookNameInDev = "useDeferredValue";
          warnInvalidHookAccess();
          mountHookTypesDev();
          return mountDeferredValue(value, initialValue);
        },
        useTransition: function() {
          currentHookNameInDev = "useTransition";
          warnInvalidHookAccess();
          mountHookTypesDev();
          return mountTransition();
        },
        useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
          currentHookNameInDev = "useSyncExternalStore";
          warnInvalidHookAccess();
          mountHookTypesDev();
          return mountSyncExternalStore(
            subscribe,
            getSnapshot,
            getServerSnapshot
          );
        },
        useId: function() {
          currentHookNameInDev = "useId";
          warnInvalidHookAccess();
          mountHookTypesDev();
          return mountId();
        },
        useCacheRefresh: function() {
          currentHookNameInDev = "useCacheRefresh";
          mountHookTypesDev();
          return mountRefresh();
        },
        useMemoCache: function(size) {
          warnInvalidHookAccess();
          return useMemoCache(size);
        }
      };
      InvalidNestedHooksDispatcherOnMountInDEV.useHostTransitionStatus = useHostTransitionStatus;
      InvalidNestedHooksDispatcherOnMountInDEV.useFormState = function(action, initialState) {
        currentHookNameInDev = "useFormState";
        warnInvalidHookAccess();
        mountHookTypesDev();
        return mountActionState(action, initialState);
      };
      InvalidNestedHooksDispatcherOnMountInDEV.useActionState = function(action, initialState) {
        currentHookNameInDev = "useActionState";
        warnInvalidHookAccess();
        mountHookTypesDev();
        return mountActionState(action, initialState);
      };
      InvalidNestedHooksDispatcherOnMountInDEV.useOptimistic = function(passthrough) {
        currentHookNameInDev = "useOptimistic";
        warnInvalidHookAccess();
        mountHookTypesDev();
        return mountOptimistic(passthrough);
      };
      InvalidNestedHooksDispatcherOnUpdateInDEV = {
        readContext: function(context2) {
          warnInvalidContextAccess();
          return readContext(context2);
        },
        use: function(usable) {
          warnInvalidHookAccess();
          return use2(usable);
        },
        useCallback: function(callback, deps) {
          currentHookNameInDev = "useCallback";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateCallback(callback, deps);
        },
        useContext: function(context2) {
          currentHookNameInDev = "useContext";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return readContext(context2);
        },
        useEffect: function(create, deps) {
          currentHookNameInDev = "useEffect";
          warnInvalidHookAccess();
          updateHookTypesDev();
          updateEffectImpl(2048, Passive, create, deps);
        },
        useImperativeHandle: function(ref, create, deps) {
          currentHookNameInDev = "useImperativeHandle";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateImperativeHandle(ref, create, deps);
        },
        useInsertionEffect: function(create, deps) {
          currentHookNameInDev = "useInsertionEffect";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateEffectImpl(4, Insertion, create, deps);
        },
        useLayoutEffect: function(create, deps) {
          currentHookNameInDev = "useLayoutEffect";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateEffectImpl(4, Layout, create, deps);
        },
        useMemo: function(create, deps) {
          currentHookNameInDev = "useMemo";
          warnInvalidHookAccess();
          updateHookTypesDev();
          var prevDispatcher = ReactSharedInternals.H;
          ReactSharedInternals.H = InvalidNestedHooksDispatcherOnUpdateInDEV;
          try {
            return updateMemo(create, deps);
          } finally {
            ReactSharedInternals.H = prevDispatcher;
          }
        },
        useReducer: function(reducer, initialArg, init) {
          currentHookNameInDev = "useReducer";
          warnInvalidHookAccess();
          updateHookTypesDev();
          var prevDispatcher = ReactSharedInternals.H;
          ReactSharedInternals.H = InvalidNestedHooksDispatcherOnUpdateInDEV;
          try {
            return updateReducer(reducer, initialArg, init);
          } finally {
            ReactSharedInternals.H = prevDispatcher;
          }
        },
        useRef: function() {
          currentHookNameInDev = "useRef";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateWorkInProgressHook().memoizedState;
        },
        useState: function() {
          currentHookNameInDev = "useState";
          warnInvalidHookAccess();
          updateHookTypesDev();
          var prevDispatcher = ReactSharedInternals.H;
          ReactSharedInternals.H = InvalidNestedHooksDispatcherOnUpdateInDEV;
          try {
            return updateReducer(basicStateReducer);
          } finally {
            ReactSharedInternals.H = prevDispatcher;
          }
        },
        useDebugValue: function() {
          currentHookNameInDev = "useDebugValue";
          warnInvalidHookAccess();
          updateHookTypesDev();
        },
        useDeferredValue: function(value, initialValue) {
          currentHookNameInDev = "useDeferredValue";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateDeferredValue(value, initialValue);
        },
        useTransition: function() {
          currentHookNameInDev = "useTransition";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateTransition();
        },
        useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
          currentHookNameInDev = "useSyncExternalStore";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateSyncExternalStore(
            subscribe,
            getSnapshot,
            getServerSnapshot
          );
        },
        useId: function() {
          currentHookNameInDev = "useId";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateWorkInProgressHook().memoizedState;
        },
        useCacheRefresh: function() {
          currentHookNameInDev = "useCacheRefresh";
          updateHookTypesDev();
          return updateWorkInProgressHook().memoizedState;
        },
        useMemoCache: function(size) {
          warnInvalidHookAccess();
          return useMemoCache(size);
        }
      };
      InvalidNestedHooksDispatcherOnUpdateInDEV.useHostTransitionStatus = useHostTransitionStatus;
      InvalidNestedHooksDispatcherOnUpdateInDEV.useFormState = function(action) {
        currentHookNameInDev = "useFormState";
        warnInvalidHookAccess();
        updateHookTypesDev();
        return updateActionState(action);
      };
      InvalidNestedHooksDispatcherOnUpdateInDEV.useActionState = function(action) {
        currentHookNameInDev = "useActionState";
        warnInvalidHookAccess();
        updateHookTypesDev();
        return updateActionState(action);
      };
      InvalidNestedHooksDispatcherOnUpdateInDEV.useOptimistic = function(passthrough, reducer) {
        currentHookNameInDev = "useOptimistic";
        warnInvalidHookAccess();
        updateHookTypesDev();
        return updateOptimistic(passthrough, reducer);
      };
      InvalidNestedHooksDispatcherOnRerenderInDEV = {
        readContext: function(context2) {
          warnInvalidContextAccess();
          return readContext(context2);
        },
        use: function(usable) {
          warnInvalidHookAccess();
          return use2(usable);
        },
        useCallback: function(callback, deps) {
          currentHookNameInDev = "useCallback";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateCallback(callback, deps);
        },
        useContext: function(context2) {
          currentHookNameInDev = "useContext";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return readContext(context2);
        },
        useEffect: function(create, deps) {
          currentHookNameInDev = "useEffect";
          warnInvalidHookAccess();
          updateHookTypesDev();
          updateEffectImpl(2048, Passive, create, deps);
        },
        useImperativeHandle: function(ref, create, deps) {
          currentHookNameInDev = "useImperativeHandle";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateImperativeHandle(ref, create, deps);
        },
        useInsertionEffect: function(create, deps) {
          currentHookNameInDev = "useInsertionEffect";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateEffectImpl(4, Insertion, create, deps);
        },
        useLayoutEffect: function(create, deps) {
          currentHookNameInDev = "useLayoutEffect";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateEffectImpl(4, Layout, create, deps);
        },
        useMemo: function(create, deps) {
          currentHookNameInDev = "useMemo";
          warnInvalidHookAccess();
          updateHookTypesDev();
          var prevDispatcher = ReactSharedInternals.H;
          ReactSharedInternals.H = InvalidNestedHooksDispatcherOnUpdateInDEV;
          try {
            return updateMemo(create, deps);
          } finally {
            ReactSharedInternals.H = prevDispatcher;
          }
        },
        useReducer: function(reducer, initialArg, init) {
          currentHookNameInDev = "useReducer";
          warnInvalidHookAccess();
          updateHookTypesDev();
          var prevDispatcher = ReactSharedInternals.H;
          ReactSharedInternals.H = InvalidNestedHooksDispatcherOnUpdateInDEV;
          try {
            return rerenderReducer(reducer, initialArg, init);
          } finally {
            ReactSharedInternals.H = prevDispatcher;
          }
        },
        useRef: function() {
          currentHookNameInDev = "useRef";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateWorkInProgressHook().memoizedState;
        },
        useState: function() {
          currentHookNameInDev = "useState";
          warnInvalidHookAccess();
          updateHookTypesDev();
          var prevDispatcher = ReactSharedInternals.H;
          ReactSharedInternals.H = InvalidNestedHooksDispatcherOnUpdateInDEV;
          try {
            return rerenderReducer(basicStateReducer);
          } finally {
            ReactSharedInternals.H = prevDispatcher;
          }
        },
        useDebugValue: function() {
          currentHookNameInDev = "useDebugValue";
          warnInvalidHookAccess();
          updateHookTypesDev();
        },
        useDeferredValue: function(value, initialValue) {
          currentHookNameInDev = "useDeferredValue";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return rerenderDeferredValue(value, initialValue);
        },
        useTransition: function() {
          currentHookNameInDev = "useTransition";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return rerenderTransition();
        },
        useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
          currentHookNameInDev = "useSyncExternalStore";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateSyncExternalStore(
            subscribe,
            getSnapshot,
            getServerSnapshot
          );
        },
        useId: function() {
          currentHookNameInDev = "useId";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateWorkInProgressHook().memoizedState;
        },
        useCacheRefresh: function() {
          currentHookNameInDev = "useCacheRefresh";
          updateHookTypesDev();
          return updateWorkInProgressHook().memoizedState;
        },
        useMemoCache: function(size) {
          warnInvalidHookAccess();
          return useMemoCache(size);
        }
      };
      InvalidNestedHooksDispatcherOnRerenderInDEV.useHostTransitionStatus = useHostTransitionStatus;
      InvalidNestedHooksDispatcherOnRerenderInDEV.useFormState = function(action) {
        currentHookNameInDev = "useFormState";
        warnInvalidHookAccess();
        updateHookTypesDev();
        return rerenderActionState(action);
      };
      InvalidNestedHooksDispatcherOnRerenderInDEV.useActionState = function(action) {
        currentHookNameInDev = "useActionState";
        warnInvalidHookAccess();
        updateHookTypesDev();
        return rerenderActionState(action);
      };
      InvalidNestedHooksDispatcherOnRerenderInDEV.useOptimistic = function(passthrough, reducer) {
        currentHookNameInDev = "useOptimistic";
        warnInvalidHookAccess();
        updateHookTypesDev();
        return rerenderOptimistic(passthrough, reducer);
      };
      var fakeInternalInstance = {};
      var didWarnAboutStateAssignmentForComponent = /* @__PURE__ */ new Set();
      var didWarnAboutUninitializedState = /* @__PURE__ */ new Set();
      var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = /* @__PURE__ */ new Set();
      var didWarnAboutLegacyLifecyclesAndDerivedState = /* @__PURE__ */ new Set();
      var didWarnAboutDirectlyAssigningPropsToState = /* @__PURE__ */ new Set();
      var didWarnAboutUndefinedDerivedState = /* @__PURE__ */ new Set();
      var didWarnAboutContextTypes$1 = /* @__PURE__ */ new Set();
      var didWarnAboutChildContextTypes = /* @__PURE__ */ new Set();
      var didWarnAboutInvalidateContextType = /* @__PURE__ */ new Set();
      var didWarnOnInvalidCallback = /* @__PURE__ */ new Set();
      Object.freeze(fakeInternalInstance);
      var classComponentUpdater = {
        isMounted: function(component) {
          var owner = current;
          if (null !== owner && isRendering && 1 === owner.tag) {
            var instance = owner.stateNode;
            instance._warnedAboutRefsInRender || console.error(
              "%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",
              getComponentNameFromFiber(owner) || "A component"
            );
            instance._warnedAboutRefsInRender = true;
          }
          return (component = component._reactInternals) ? getNearestMountedFiber(component) === component : false;
        },
        enqueueSetState: function(inst, payload, callback) {
          inst = inst._reactInternals;
          var lane = requestUpdateLane(inst), update2 = createUpdate(lane);
          update2.payload = payload;
          void 0 !== callback && null !== callback && (warnOnInvalidCallback(callback), update2.callback = callback);
          payload = enqueueUpdate(inst, update2, lane);
          null !== payload && (scheduleUpdateOnFiber(payload, inst, lane), entangleTransitions(payload, inst, lane));
          markStateUpdateScheduled(inst, lane);
        },
        enqueueReplaceState: function(inst, payload, callback) {
          inst = inst._reactInternals;
          var lane = requestUpdateLane(inst), update2 = createUpdate(lane);
          update2.tag = ReplaceState;
          update2.payload = payload;
          void 0 !== callback && null !== callback && (warnOnInvalidCallback(callback), update2.callback = callback);
          payload = enqueueUpdate(inst, update2, lane);
          null !== payload && (scheduleUpdateOnFiber(payload, inst, lane), entangleTransitions(payload, inst, lane));
          markStateUpdateScheduled(inst, lane);
        },
        enqueueForceUpdate: function(inst, callback) {
          inst = inst._reactInternals;
          var lane = requestUpdateLane(inst), update2 = createUpdate(lane);
          update2.tag = ForceUpdate;
          void 0 !== callback && null !== callback && (warnOnInvalidCallback(callback), update2.callback = callback);
          callback = enqueueUpdate(inst, update2, lane);
          null !== callback && (scheduleUpdateOnFiber(callback, inst, lane), entangleTransitions(callback, inst, lane));
          null !== injectedProfilingHooks && "function" === typeof injectedProfilingHooks.markForceUpdateScheduled && injectedProfilingHooks.markForceUpdateScheduled(inst, lane);
        }
      }, reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
        if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
          var event = new window.ErrorEvent("error", {
            bubbles: true,
            cancelable: true,
            message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
            error
          });
          if (!window.dispatchEvent(event)) return;
        } else if ("object" === typeof process && "function" === typeof process.emit) {
          process.emit("uncaughtException", error);
          return;
        }
        console.error(error);
      }, componentName = null, errorBoundaryName = null, SelectiveHydrationException = Error(
        "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
      ), didReceiveUpdate = false;
      var didWarnAboutBadClass = {};
      var didWarnAboutContextTypeOnFunctionComponent = {};
      var didWarnAboutContextTypes = {};
      var didWarnAboutGetDerivedStateOnFunctionComponent = {};
      var didWarnAboutReassigningProps = false;
      var didWarnAboutRevealOrder = {};
      var didWarnAboutTailOptions = {};
      var SUSPENDED_MARKER = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
      }, hasWarnedAboutUsingNoValuePropOnContextProvider = false, valueCursor = createCursor(null);
      var rendererCursorDEV = createCursor(null);
      var renderer2CursorDEV = createCursor(null);
      var rendererSigil = {};
      var currentlyRenderingFiber = null, lastContextDependency = null, isDisallowedContextReadInDEV = false, AbortControllerLocal = "undefined" !== typeof AbortController ? AbortController : function() {
        var listeners = [], signal = this.signal = {
          aborted: false,
          addEventListener: function(type, listener) {
            listeners.push(listener);
          }
        };
        this.abort = function() {
          signal.aborted = true;
          listeners.forEach(function(listener) {
            return listener();
          });
        };
      }, scheduleCallback$1 = Scheduler.unstable_scheduleCallback, NormalPriority = Scheduler.unstable_NormalPriority, CacheContext = {
        $$typeof: REACT_CONTEXT_TYPE,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
        _currentRenderer: null,
        _currentRenderer2: null
      }, prevOnStartTransitionFinish = ReactSharedInternals.S;
      ReactSharedInternals.S = function(transition, returnValue) {
        "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && entangleAsyncAction(transition, returnValue);
        null !== prevOnStartTransitionFinish && prevOnStartTransitionFinish(transition, returnValue);
      };
      var resumedCache = createCursor(null), didWarnAboutUndefinedSnapshotBeforeUpdate = null;
      didWarnAboutUndefinedSnapshotBeforeUpdate = /* @__PURE__ */ new Set();
      var offscreenSubtreeIsHidden = false, offscreenSubtreeWasHidden = false, needsFormReset = false, PossiblyWeakSet = "function" === typeof WeakSet ? WeakSet : Set, nextEffect = null, inProgressLanes = null, inProgressRoot = null, shouldFireAfterActiveInstanceBlur = false, hostParent = null, hostParentIsContainer = false, currentHoistableRoot = null, suspenseyCommitFlag = 8192, DefaultAsyncDispatcher = {
        getCacheForType: function(resourceType) {
          var cache = readContext(CacheContext), cacheForType = cache.data.get(resourceType);
          void 0 === cacheForType && (cacheForType = resourceType(), cache.data.set(resourceType, cacheForType));
          return cacheForType;
        },
        getOwner: function() {
          return current;
        }
      }, COMPONENT_TYPE = 0, HAS_PSEUDO_CLASS_TYPE = 1, ROLE_TYPE = 2, TEST_NAME_TYPE = 3, TEXT_TYPE = 4;
      if ("function" === typeof Symbol && Symbol.for) {
        var symbolFor = Symbol.for;
        COMPONENT_TYPE = symbolFor("selector.component");
        HAS_PSEUDO_CLASS_TYPE = symbolFor("selector.has_pseudo_class");
        ROLE_TYPE = symbolFor("selector.role");
        TEST_NAME_TYPE = symbolFor("selector.test_id");
        TEXT_TYPE = symbolFor("selector.text");
      }
      var commitHooks = [], PossiblyWeakMap = "function" === typeof WeakMap ? WeakMap : Map, NoContext = 0, RenderContext = 2, CommitContext = 4, RootInProgress = 0, RootFatalErrored = 1, RootErrored = 2, RootSuspended = 3, RootSuspendedWithDelay = 4, RootCompleted = 5, RootDidNotComplete = 6, executionContext = NoContext, workInProgressRoot = null, workInProgress = null, workInProgressRootRenderLanes = 0, NotSuspended = 0, SuspendedOnError = 1, SuspendedOnData = 2, SuspendedOnImmediate = 3, SuspendedOnInstance = 4, SuspendedOnInstanceAndReadyToContinue = 5, SuspendedOnDeprecatedThrowPromise = 6, SuspendedAndReadyToContinue = 7, SuspendedOnHydration = 8, workInProgressSuspendedReason = NotSuspended, workInProgressThrownValue = null, workInProgressRootDidSkipSuspendedSiblings = false, workInProgressRootIsPrerendering = false, workInProgressRootDidAttachPingListener = false, entangledRenderLanes = 0, workInProgressRootExitStatus = RootInProgress, workInProgressRootSkippedLanes = 0, workInProgressRootInterleavedUpdatedLanes = 0, workInProgressRootPingedLanes = 0, workInProgressDeferredLane = 0, workInProgressSuspendedRetryLanes = 0, workInProgressRootConcurrentErrors = null, workInProgressRootRecoverableErrors = null, workInProgressRootDidIncludeRecursiveRenderUpdate = false, globalMostRecentFallbackTime = 0, FALLBACK_THROTTLE_MS = 300, workInProgressRootRenderTargetTime = Infinity, RENDER_TIMEOUT_MS = 500, workInProgressTransitions = null, legacyErrorBoundariesThatAlreadyFailed = null, rootDoesHavePassiveEffects = false, rootWithPendingPassiveEffects = null, pendingPassiveEffectsLanes = 0, pendingPassiveEffectsRemainingLanes = 0, pendingPassiveTransitions = null, NESTED_UPDATE_LIMIT = 50, nestedUpdateCount = 0, rootWithNestedUpdates = null, isFlushingPassiveEffects = false, didScheduleUpdateDuringPassiveEffects = false, NESTED_PASSIVE_UPDATE_LIMIT = 50, nestedPassiveUpdateCount = 0, rootWithPassiveNestedUpdates = null, isRunningInsertionEffect = false, IMMEDIATE_COMMIT = 0, SUSPENDED_COMMIT = 1, THROTTLED_COMMIT = 2, didWarnStateUpdateForNotYetMountedComponent = null, didWarnAboutUpdateInRender = false;
      var didWarnAboutUpdateInRenderForAnotherComponent = /* @__PURE__ */ new Set();
      var fakeActCallbackNode = {}, resolveFamily = null, failedBoundaries = null;
      var hasBadMapPolyfill = false;
      try {
        var nonExtensibleObject = Object.preventExtensions({});
        /* @__PURE__ */ new Map([[nonExtensibleObject, null]]);
        /* @__PURE__ */ new Set([nonExtensibleObject]);
      } catch (e) {
        hasBadMapPolyfill = true;
      }
      var didWarnAboutNestedUpdates = false;
      var didWarnAboutFindNodeInStrictMode = {};
      var overrideHookState = null, overrideHookStateDeletePath = null, overrideHookStateRenamePath = null, overrideProps = null, overridePropsDeletePath = null, overridePropsRenamePath = null, scheduleUpdate = null, setErrorHandler = null, setSuspenseHandler = null;
      overrideHookState = function(fiber, id, path, value) {
        id = findHook(fiber, id);
        null !== id && (path = copyWithSetImpl(id.memoizedState, path, 0, value), id.memoizedState = path, id.baseState = path, fiber.memoizedProps = assign({}, fiber.memoizedProps), path = enqueueConcurrentRenderForLane(fiber, 2), null !== path && scheduleUpdateOnFiber(path, fiber, 2));
      };
      overrideHookStateDeletePath = function(fiber, id, path) {
        id = findHook(fiber, id);
        null !== id && (path = copyWithDeleteImpl(id.memoizedState, path, 0), id.memoizedState = path, id.baseState = path, fiber.memoizedProps = assign({}, fiber.memoizedProps), path = enqueueConcurrentRenderForLane(fiber, 2), null !== path && scheduleUpdateOnFiber(path, fiber, 2));
      };
      overrideHookStateRenamePath = function(fiber, id, oldPath, newPath) {
        id = findHook(fiber, id);
        null !== id && (oldPath = copyWithRename(id.memoizedState, oldPath, newPath), id.memoizedState = oldPath, id.baseState = oldPath, fiber.memoizedProps = assign({}, fiber.memoizedProps), oldPath = enqueueConcurrentRenderForLane(fiber, 2), null !== oldPath && scheduleUpdateOnFiber(oldPath, fiber, 2));
      };
      overrideProps = function(fiber, path, value) {
        fiber.pendingProps = copyWithSetImpl(fiber.memoizedProps, path, 0, value);
        fiber.alternate && (fiber.alternate.pendingProps = fiber.pendingProps);
        path = enqueueConcurrentRenderForLane(fiber, 2);
        null !== path && scheduleUpdateOnFiber(path, fiber, 2);
      };
      overridePropsDeletePath = function(fiber, path) {
        fiber.pendingProps = copyWithDeleteImpl(fiber.memoizedProps, path, 0);
        fiber.alternate && (fiber.alternate.pendingProps = fiber.pendingProps);
        path = enqueueConcurrentRenderForLane(fiber, 2);
        null !== path && scheduleUpdateOnFiber(path, fiber, 2);
      };
      overridePropsRenamePath = function(fiber, oldPath, newPath) {
        fiber.pendingProps = copyWithRename(
          fiber.memoizedProps,
          oldPath,
          newPath
        );
        fiber.alternate && (fiber.alternate.pendingProps = fiber.pendingProps);
        oldPath = enqueueConcurrentRenderForLane(fiber, 2);
        null !== oldPath && scheduleUpdateOnFiber(oldPath, fiber, 2);
      };
      scheduleUpdate = function(fiber) {
        var root = enqueueConcurrentRenderForLane(fiber, 2);
        null !== root && scheduleUpdateOnFiber(root, fiber, 2);
      };
      setErrorHandler = function(newShouldErrorImpl) {
        shouldErrorImpl = newShouldErrorImpl;
      };
      setSuspenseHandler = function(newShouldSuspendImpl) {
        shouldSuspendImpl = newShouldSuspendImpl;
      };
      exports2.attemptContinuousHydration = function(fiber) {
        if (13 === fiber.tag) {
          var root = enqueueConcurrentRenderForLane(fiber, 67108864);
          null !== root && scheduleUpdateOnFiber(root, fiber, 67108864);
          markRetryLaneIfNotHydrated(fiber, 67108864);
        }
      };
      exports2.attemptHydrationAtCurrentPriority = function(fiber) {
        if (13 === fiber.tag) {
          var lane = requestUpdateLane(fiber), root = enqueueConcurrentRenderForLane(fiber, lane);
          null !== root && scheduleUpdateOnFiber(root, fiber, lane);
          markRetryLaneIfNotHydrated(fiber, lane);
        }
      };
      exports2.attemptSynchronousHydration = function(fiber) {
        switch (fiber.tag) {
          case 3:
            fiber = fiber.stateNode;
            if (fiber.current.memoizedState.isDehydrated) {
              var lanes = getHighestPriorityLanes(fiber.pendingLanes);
              if (0 !== lanes) {
                fiber.pendingLanes |= 2;
                for (fiber.entangledLanes |= 2; lanes; ) {
                  var lane = 1 << 31 - clz32(lanes);
                  fiber.entanglements[1] |= lane;
                  lanes &= ~lane;
                }
                ensureRootIsScheduled(fiber);
                (executionContext & (RenderContext | CommitContext)) === NoContext && (workInProgressRootRenderTargetTime = now$1() + RENDER_TIMEOUT_MS, flushSyncWorkAcrossRoots_impl(0, false));
              }
            }
            break;
          case 13:
            lanes = enqueueConcurrentRenderForLane(fiber, 2), null !== lanes && scheduleUpdateOnFiber(lanes, fiber, 2), flushSyncWork(), markRetryLaneIfNotHydrated(fiber, 2);
        }
      };
      exports2.batchedUpdates = function(fn, a2) {
        return fn(a2);
      };
      exports2.createComponentSelector = function(component) {
        return { $$typeof: COMPONENT_TYPE, value: component };
      };
      exports2.createContainer = function(containerInfo, tag, hydrationCallbacks, isStrictMode, concurrentUpdatesByDefaultOverride, identifierPrefix, onUncaughtError, onCaughtError, onRecoverableError, transitionCallbacks) {
        return createFiberRoot(
          containerInfo,
          tag,
          false,
          null,
          hydrationCallbacks,
          isStrictMode,
          identifierPrefix,
          onUncaughtError,
          onCaughtError,
          onRecoverableError,
          transitionCallbacks,
          null
        );
      };
      exports2.createHasPseudoClassSelector = function(selectors) {
        return { $$typeof: HAS_PSEUDO_CLASS_TYPE, value: selectors };
      };
      exports2.createHydrationContainer = function(initialChildren, callback, containerInfo, tag, hydrationCallbacks, isStrictMode, concurrentUpdatesByDefaultOverride, identifierPrefix, onUncaughtError, onCaughtError, onRecoverableError, transitionCallbacks, formState) {
        initialChildren = createFiberRoot(
          containerInfo,
          tag,
          true,
          initialChildren,
          hydrationCallbacks,
          isStrictMode,
          identifierPrefix,
          onUncaughtError,
          onCaughtError,
          onRecoverableError,
          transitionCallbacks,
          formState
        );
        initialChildren.context = getContextForSubtree(null);
        containerInfo = initialChildren.current;
        tag = requestUpdateLane(containerInfo);
        hydrationCallbacks = createUpdate(tag);
        hydrationCallbacks.callback = void 0 !== callback && null !== callback ? callback : null;
        enqueueUpdate(containerInfo, hydrationCallbacks, tag);
        initialChildren.current.lanes = tag;
        markRootUpdated$1(initialChildren, tag);
        ensureRootIsScheduled(initialChildren);
        return initialChildren;
      };
      exports2.createPortal = function(children, containerInfo, implementation) {
        var key = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        try {
          testStringCoercion(key);
          var JSCompiler_inline_result = false;
        } catch (e$6) {
          JSCompiler_inline_result = true;
        }
        JSCompiler_inline_result && (console.error(
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          "function" === typeof Symbol && Symbol.toStringTag && key[Symbol.toStringTag] || key.constructor.name || "Object"
        ), testStringCoercion(key));
        return {
          $$typeof: REACT_PORTAL_TYPE,
          key: null == key ? null : "" + key,
          children,
          containerInfo,
          implementation
        };
      };
      exports2.createRoleSelector = function(role) {
        return { $$typeof: ROLE_TYPE, value: role };
      };
      exports2.createTestNameSelector = function(id) {
        return { $$typeof: TEST_NAME_TYPE, value: id };
      };
      exports2.createTextSelector = function(text) {
        return { $$typeof: TEXT_TYPE, value: text };
      };
      exports2.defaultOnCaughtError = function(error, errorInfo) {
        var componentNameMessage = componentName ? "The above error occurred in the <" + componentName + "> component." : "The above error occurred in one of your React components.", recreateMessage = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((errorBoundaryName || "Anonymous") + "."), prevGetCurrentStack = ReactSharedInternals.getCurrentStack, componentStack = null != errorInfo.componentStack ? errorInfo.componentStack : "";
        ReactSharedInternals.getCurrentStack = function() {
          return componentStack;
        };
        try {
          "object" === typeof error && null !== error && "string" === typeof error.environmentName ? bindToConsole(
            "error",
            [
              "%o\n\n%s\n\n%s\n",
              error,
              componentNameMessage,
              recreateMessage
            ],
            error.environmentName
          )() : console.error(
            "%o\n\n%s\n\n%s\n",
            error,
            componentNameMessage,
            recreateMessage
          );
        } finally {
          ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
        }
      };
      exports2.defaultOnRecoverableError = function(error) {
        reportGlobalError(error);
      };
      exports2.defaultOnUncaughtError = function(error, errorInfo) {
        reportGlobalError(error);
        error = componentName ? "An error occurred in the <" + componentName + "> component." : "An error occurred in one of your React components.";
        var prevGetCurrentStack = ReactSharedInternals.getCurrentStack, componentStack = null != errorInfo.componentStack ? errorInfo.componentStack : "";
        ReactSharedInternals.getCurrentStack = function() {
          return componentStack;
        };
        try {
          console.warn(
            "%s\n\n%s\n",
            error,
            "Consider adding an error boundary to your tree to customize error handling behavior.\nVisit https://react.dev/link/error-boundaries to learn more about error boundaries."
          );
        } finally {
          ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
        }
      };
      exports2.deferredUpdates = function(fn) {
        var prevTransition = ReactSharedInternals.T, previousPriority = getCurrentUpdatePriority();
        try {
          return setCurrentUpdatePriority(32), ReactSharedInternals.T = null, fn();
        } finally {
          setCurrentUpdatePriority(previousPriority), ReactSharedInternals.T = prevTransition;
        }
      };
      exports2.discreteUpdates = function(fn, a2, b2, c2, d) {
        var prevTransition = ReactSharedInternals.T, previousPriority = getCurrentUpdatePriority();
        try {
          return setCurrentUpdatePriority(2), ReactSharedInternals.T = null, fn(a2, b2, c2, d);
        } finally {
          setCurrentUpdatePriority(previousPriority), ReactSharedInternals.T = prevTransition, executionContext === NoContext && (workInProgressRootRenderTargetTime = now$1() + RENDER_TIMEOUT_MS);
        }
      };
      exports2.findAllNodes = findAllNodes;
      exports2.findBoundingRects = function(hostRoot, selectors) {
        if (!supportsTestSelectors)
          throw Error("Test selector API is not supported by this renderer.");
        selectors = findAllNodes(hostRoot, selectors);
        hostRoot = [];
        for (var i3 = 0; i3 < selectors.length; i3++)
          hostRoot.push(getBoundingRect(selectors[i3]));
        for (selectors = hostRoot.length - 1; 0 < selectors; selectors--) {
          i3 = hostRoot[selectors];
          for (var targetLeft = i3.x, targetRight = targetLeft + i3.width, targetTop = i3.y, targetBottom = targetTop + i3.height, j2 = selectors - 1; 0 <= j2; j2--)
            if (selectors !== j2) {
              var otherRect = hostRoot[j2], otherLeft = otherRect.x, otherRight = otherLeft + otherRect.width, otherTop = otherRect.y, otherBottom = otherTop + otherRect.height;
              if (targetLeft >= otherLeft && targetTop >= otherTop && targetRight <= otherRight && targetBottom <= otherBottom) {
                hostRoot.splice(selectors, 1);
                break;
              } else if (!(targetLeft !== otherLeft || i3.width !== otherRect.width || otherBottom < targetTop || otherTop > targetBottom)) {
                otherTop > targetTop && (otherRect.height += otherTop - targetTop, otherRect.y = targetTop);
                otherBottom < targetBottom && (otherRect.height = targetBottom - otherTop);
                hostRoot.splice(selectors, 1);
                break;
              } else if (!(targetTop !== otherTop || i3.height !== otherRect.height || otherRight < targetLeft || otherLeft > targetRight)) {
                otherLeft > targetLeft && (otherRect.width += otherLeft - targetLeft, otherRect.x = targetLeft);
                otherRight < targetRight && (otherRect.width = targetRight - otherLeft);
                hostRoot.splice(selectors, 1);
                break;
              }
            }
        }
        return hostRoot;
      };
      exports2.findHostInstance = function(component) {
        var fiber = component._reactInternals;
        if (void 0 === fiber) {
          if ("function" === typeof component.render)
            throw Error("Unable to find node on an unmounted component.");
          component = Object.keys(component).join(",");
          throw Error(
            "Argument appears to not be a ReactComponent. Keys: " + component
          );
        }
        component = findCurrentHostFiber(fiber);
        return null === component ? null : getPublicInstance(component.stateNode);
      };
      exports2.findHostInstanceWithNoPortals = function(fiber) {
        fiber = findCurrentFiberUsingSlowPath(fiber);
        fiber = null !== fiber ? findCurrentHostFiberWithNoPortalsImpl(fiber) : null;
        return null === fiber ? null : getPublicInstance(fiber.stateNode);
      };
      exports2.findHostInstanceWithWarning = function(component, methodName) {
        var fiber = component._reactInternals;
        if (void 0 === fiber) {
          if ("function" === typeof component.render)
            throw Error("Unable to find node on an unmounted component.");
          component = Object.keys(component).join(",");
          throw Error(
            "Argument appears to not be a ReactComponent. Keys: " + component
          );
        }
        component = findCurrentHostFiber(fiber);
        if (null === component) return null;
        if (component.mode & 8) {
          var componentName2 = getComponentNameFromFiber(fiber) || "Component";
          didWarnAboutFindNodeInStrictMode[componentName2] || (didWarnAboutFindNodeInStrictMode[componentName2] = true, runWithFiberInDEV(component, function() {
            fiber.mode & 8 ? console.error(
              "%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://react.dev/link/strict-mode-find-node",
              methodName,
              methodName,
              componentName2
            ) : console.error(
              "%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://react.dev/link/strict-mode-find-node",
              methodName,
              methodName,
              componentName2
            );
          }));
        }
        return getPublicInstance(component.stateNode);
      };
      exports2.flushPassiveEffects = flushPassiveEffects;
      exports2.flushSyncFromReconciler = function(fn) {
        var prevExecutionContext = executionContext;
        executionContext |= 1;
        var prevTransition = ReactSharedInternals.T, previousPriority = getCurrentUpdatePriority();
        try {
          if (setCurrentUpdatePriority(2), ReactSharedInternals.T = null, fn)
            return fn();
        } finally {
          setCurrentUpdatePriority(previousPriority), ReactSharedInternals.T = prevTransition, executionContext = prevExecutionContext, (executionContext & (RenderContext | CommitContext)) === NoContext && flushSyncWorkAcrossRoots_impl(0, false);
        }
      };
      exports2.flushSyncWork = flushSyncWork;
      exports2.focusWithin = function(hostRoot, selectors) {
        if (!supportsTestSelectors)
          throw Error("Test selector API is not supported by this renderer.");
        hostRoot = findFiberRootForHostRoot(hostRoot);
        selectors = findPaths(hostRoot, selectors);
        selectors = Array.from(selectors);
        for (hostRoot = 0; hostRoot < selectors.length; ) {
          var fiber = selectors[hostRoot++], tag = fiber.tag;
          if (!isHiddenSubtree(fiber)) {
            if ((5 === tag || 26 === tag || 27 === tag) && setFocusIfFocusable(fiber.stateNode))
              return true;
            for (fiber = fiber.child; null !== fiber; )
              selectors.push(fiber), fiber = fiber.sibling;
          }
        }
        return false;
      };
      exports2.getFindAllNodesFailureDescription = function(hostRoot, selectors) {
        if (!supportsTestSelectors)
          throw Error("Test selector API is not supported by this renderer.");
        var maxSelectorIndex = 0, matchedNames = [];
        hostRoot = [findFiberRootForHostRoot(hostRoot), 0];
        for (var index = 0; index < hostRoot.length; ) {
          var fiber = hostRoot[index++], tag = fiber.tag, selectorIndex = hostRoot[index++], selector = selectors[selectorIndex];
          if (5 !== tag && 26 !== tag && 27 !== tag || !isHiddenSubtree(fiber)) {
            if (matchSelector(fiber, selector) && (matchedNames.push(selectorToString(selector)), selectorIndex++, selectorIndex > maxSelectorIndex && (maxSelectorIndex = selectorIndex)), selectorIndex < selectors.length)
              for (fiber = fiber.child; null !== fiber; )
                hostRoot.push(fiber, selectorIndex), fiber = fiber.sibling;
          }
        }
        if (maxSelectorIndex < selectors.length) {
          for (hostRoot = []; maxSelectorIndex < selectors.length; maxSelectorIndex++)
            hostRoot.push(selectorToString(selectors[maxSelectorIndex]));
          return "findAllNodes was able to match part of the selector:\n  " + (matchedNames.join(" > ") + "\n\nNo matching component was found for:\n  ") + hostRoot.join(" > ");
        }
        return null;
      };
      exports2.getPublicRootInstance = function(container) {
        container = container.current;
        if (!container.child) return null;
        switch (container.child.tag) {
          case 27:
          case 5:
            return getPublicInstance(container.child.stateNode);
          default:
            return container.child.stateNode;
        }
      };
      exports2.injectIntoDevTools = function() {
        var internals = {
          bundleType: 1,
          version: rendererVersion,
          rendererPackageName,
          currentDispatcherRef: ReactSharedInternals,
          findFiberByHostInstance: getInstanceFromNode,
          reconcilerVersion: "19.0.0"
        };
        null !== extraDevToolsConfig && (internals.rendererConfig = extraDevToolsConfig);
        internals.overrideHookState = overrideHookState;
        internals.overrideHookStateDeletePath = overrideHookStateDeletePath;
        internals.overrideHookStateRenamePath = overrideHookStateRenamePath;
        internals.overrideProps = overrideProps;
        internals.overridePropsDeletePath = overridePropsDeletePath;
        internals.overridePropsRenamePath = overridePropsRenamePath;
        internals.scheduleUpdate = scheduleUpdate;
        internals.setErrorHandler = setErrorHandler;
        internals.setSuspenseHandler = setSuspenseHandler;
        internals.scheduleRefresh = scheduleRefresh;
        internals.scheduleRoot = scheduleRoot;
        internals.setRefreshHandler = setRefreshHandler;
        internals.getCurrentFiber = getCurrentFiberForDevTools;
        internals.getLaneLabelMap = getLaneLabelMap;
        internals.injectProfilingHooks = injectProfilingHooks;
        return injectInternals(internals);
      };
      exports2.isAlreadyRendering = function() {
        return (executionContext & (RenderContext | CommitContext)) !== NoContext;
      };
      exports2.observeVisibleRects = function(hostRoot, selectors, callback, options) {
        function commitHook() {
          var nextInstanceRoots = findAllNodes(hostRoot, selectors);
          instanceRoots.forEach(function(target) {
            0 > nextInstanceRoots.indexOf(target) && unobserve(target);
          });
          nextInstanceRoots.forEach(function(target) {
            0 > instanceRoots.indexOf(target) && observe(target);
          });
        }
        if (!supportsTestSelectors)
          throw Error("Test selector API is not supported by this renderer.");
        var instanceRoots = findAllNodes(hostRoot, selectors);
        callback = setupIntersectionObserver(instanceRoots, callback, options);
        var disconnect = callback.disconnect, observe = callback.observe, unobserve = callback.unobserve;
        commitHooks.push(commitHook);
        return {
          disconnect: function() {
            var index = commitHooks.indexOf(commitHook);
            0 <= index && commitHooks.splice(index, 1);
            disconnect();
          }
        };
      };
      exports2.shouldError = function(fiber) {
        return shouldErrorImpl(fiber);
      };
      exports2.shouldSuspend = function(fiber) {
        return shouldSuspendImpl(fiber);
      };
      exports2.startHostTransition = function(formFiber, pendingState, action, formData) {
        if (5 !== formFiber.tag)
          throw Error(
            "Expected the form instance to be a HostComponent. This is a bug in React."
          );
        var queue = ensureFormComponentIsStateful(formFiber).queue;
        startTransition(
          formFiber,
          queue,
          pendingState,
          NotPendingTransition,
          null === action ? noop : function() {
            null === ReactSharedInternals.T && console.error(
              "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
            );
            var resetStateQueue = ensureFormComponentIsStateful(formFiber).next.queue;
            dispatchSetStateInternal(
              formFiber,
              resetStateQueue,
              {},
              requestUpdateLane(formFiber)
            );
            return action(formData);
          }
        );
      };
      exports2.updateContainer = function(element, container, parentComponent, callback) {
        var current2 = container.current, lane = requestUpdateLane(current2);
        updateContainerImpl(
          current2,
          lane,
          element,
          container,
          parentComponent,
          callback
        );
        return lane;
      };
      exports2.updateContainerSync = updateContainerSync;
      return exports2;
    }, module.exports.default = module.exports, Object.defineProperty(module.exports, "__esModule", { value: true });
  }
});

// node_modules/react-reconciler/index.js
var require_react_reconciler = __commonJS({
  "node_modules/react-reconciler/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_reconciler_development();
    }
  }
});

// node_modules/@react-three/fiber/node_modules/scheduler/cjs/scheduler.development.js
var require_scheduler_development2 = __commonJS({
  "node_modules/@react-three/fiber/node_modules/scheduler/cjs/scheduler.development.js"(exports) {
    "use strict";
    (function() {
      function performWorkUntilDeadline() {
        if (isMessageLoopRunning) {
          var currentTime = exports.unstable_now();
          startTime = currentTime;
          var hasMoreWork = true;
          try {
            a: {
              isHostCallbackScheduled = false;
              isHostTimeoutScheduled && (isHostTimeoutScheduled = false, localClearTimeout(taskTimeoutID), taskTimeoutID = -1);
              isPerformingWork = true;
              var previousPriorityLevel = currentPriorityLevel;
              try {
                b: {
                  advanceTimers(currentTime);
                  for (currentTask = peek(taskQueue); null !== currentTask && !(currentTask.expirationTime > currentTime && shouldYieldToHost()); ) {
                    var callback = currentTask.callback;
                    if ("function" === typeof callback) {
                      currentTask.callback = null;
                      currentPriorityLevel = currentTask.priorityLevel;
                      var continuationCallback = callback(
                        currentTask.expirationTime <= currentTime
                      );
                      currentTime = exports.unstable_now();
                      if ("function" === typeof continuationCallback) {
                        currentTask.callback = continuationCallback;
                        advanceTimers(currentTime);
                        hasMoreWork = true;
                        break b;
                      }
                      currentTask === peek(taskQueue) && pop(taskQueue);
                      advanceTimers(currentTime);
                    } else pop(taskQueue);
                    currentTask = peek(taskQueue);
                  }
                  if (null !== currentTask) hasMoreWork = true;
                  else {
                    var firstTimer = peek(timerQueue);
                    null !== firstTimer && requestHostTimeout(
                      handleTimeout,
                      firstTimer.startTime - currentTime
                    );
                    hasMoreWork = false;
                  }
                }
                break a;
              } finally {
                currentTask = null, currentPriorityLevel = previousPriorityLevel, isPerformingWork = false;
              }
              hasMoreWork = void 0;
            }
          } finally {
            hasMoreWork ? schedulePerformWorkUntilDeadline() : isMessageLoopRunning = false;
          }
        }
      }
      function push(heap, node) {
        var index = heap.length;
        heap.push(node);
        a: for (; 0 < index; ) {
          var parentIndex = index - 1 >>> 1, parent = heap[parentIndex];
          if (0 < compare(parent, node))
            heap[parentIndex] = node, heap[index] = parent, index = parentIndex;
          else break a;
        }
      }
      function peek(heap) {
        return 0 === heap.length ? null : heap[0];
      }
      function pop(heap) {
        if (0 === heap.length) return null;
        var first = heap[0], last = heap.pop();
        if (last !== first) {
          heap[0] = last;
          a: for (var index = 0, length = heap.length, halfLength = length >>> 1; index < halfLength; ) {
            var leftIndex = 2 * (index + 1) - 1, left = heap[leftIndex], rightIndex = leftIndex + 1, right = heap[rightIndex];
            if (0 > compare(left, last))
              rightIndex < length && 0 > compare(right, left) ? (heap[index] = right, heap[rightIndex] = last, index = rightIndex) : (heap[index] = left, heap[leftIndex] = last, index = leftIndex);
            else if (rightIndex < length && 0 > compare(right, last))
              heap[index] = right, heap[rightIndex] = last, index = rightIndex;
            else break a;
          }
        }
        return first;
      }
      function compare(a2, b2) {
        var diff = a2.sortIndex - b2.sortIndex;
        return 0 !== diff ? diff : a2.id - b2.id;
      }
      function advanceTimers(currentTime) {
        for (var timer = peek(timerQueue); null !== timer; ) {
          if (null === timer.callback) pop(timerQueue);
          else if (timer.startTime <= currentTime)
            pop(timerQueue), timer.sortIndex = timer.expirationTime, push(taskQueue, timer);
          else break;
          timer = peek(timerQueue);
        }
      }
      function handleTimeout(currentTime) {
        isHostTimeoutScheduled = false;
        advanceTimers(currentTime);
        if (!isHostCallbackScheduled)
          if (null !== peek(taskQueue))
            isHostCallbackScheduled = true, requestHostCallback();
          else {
            var firstTimer = peek(timerQueue);
            null !== firstTimer && requestHostTimeout(
              handleTimeout,
              firstTimer.startTime - currentTime
            );
          }
      }
      function shouldYieldToHost() {
        return exports.unstable_now() - startTime < frameInterval ? false : true;
      }
      function requestHostCallback() {
        isMessageLoopRunning || (isMessageLoopRunning = true, schedulePerformWorkUntilDeadline());
      }
      function requestHostTimeout(callback, ms) {
        taskTimeoutID = localSetTimeout(function() {
          callback(exports.unstable_now());
        }, ms);
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      exports.unstable_now = void 0;
      if ("object" === typeof performance && "function" === typeof performance.now) {
        var localPerformance = performance;
        exports.unstable_now = function() {
          return localPerformance.now();
        };
      } else {
        var localDate = Date, initialTime = localDate.now();
        exports.unstable_now = function() {
          return localDate.now() - initialTime;
        };
      }
      var taskQueue = [], timerQueue = [], taskIdCounter = 1, currentTask = null, currentPriorityLevel = 3, isPerformingWork = false, isHostCallbackScheduled = false, isHostTimeoutScheduled = false, localSetTimeout = "function" === typeof setTimeout ? setTimeout : null, localClearTimeout = "function" === typeof clearTimeout ? clearTimeout : null, localSetImmediate = "undefined" !== typeof setImmediate ? setImmediate : null, isMessageLoopRunning = false, taskTimeoutID = -1, frameInterval = 5, startTime = -1;
      if ("function" === typeof localSetImmediate)
        var schedulePerformWorkUntilDeadline = function() {
          localSetImmediate(performWorkUntilDeadline);
        };
      else if ("undefined" !== typeof MessageChannel) {
        var channel = new MessageChannel(), port = channel.port2;
        channel.port1.onmessage = performWorkUntilDeadline;
        schedulePerformWorkUntilDeadline = function() {
          port.postMessage(null);
        };
      } else
        schedulePerformWorkUntilDeadline = function() {
          localSetTimeout(performWorkUntilDeadline, 0);
        };
      exports.unstable_IdlePriority = 5;
      exports.unstable_ImmediatePriority = 1;
      exports.unstable_LowPriority = 4;
      exports.unstable_NormalPriority = 3;
      exports.unstable_Profiling = null;
      exports.unstable_UserBlockingPriority = 2;
      exports.unstable_cancelCallback = function(task) {
        task.callback = null;
      };
      exports.unstable_continueExecution = function() {
        isHostCallbackScheduled || isPerformingWork || (isHostCallbackScheduled = true, requestHostCallback());
      };
      exports.unstable_forceFrameRate = function(fps) {
        0 > fps || 125 < fps ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : frameInterval = 0 < fps ? Math.floor(1e3 / fps) : 5;
      };
      exports.unstable_getCurrentPriorityLevel = function() {
        return currentPriorityLevel;
      };
      exports.unstable_getFirstCallbackNode = function() {
        return peek(taskQueue);
      };
      exports.unstable_next = function(eventHandler) {
        switch (currentPriorityLevel) {
          case 1:
          case 2:
          case 3:
            var priorityLevel = 3;
            break;
          default:
            priorityLevel = currentPriorityLevel;
        }
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
          return eventHandler();
        } finally {
          currentPriorityLevel = previousPriorityLevel;
        }
      };
      exports.unstable_pauseExecution = function() {
      };
      exports.unstable_requestPaint = function() {
      };
      exports.unstable_runWithPriority = function(priorityLevel, eventHandler) {
        switch (priorityLevel) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            priorityLevel = 3;
        }
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
          return eventHandler();
        } finally {
          currentPriorityLevel = previousPriorityLevel;
        }
      };
      exports.unstable_scheduleCallback = function(priorityLevel, callback, options) {
        var currentTime = exports.unstable_now();
        "object" === typeof options && null !== options ? (options = options.delay, options = "number" === typeof options && 0 < options ? currentTime + options : currentTime) : options = currentTime;
        switch (priorityLevel) {
          case 1:
            var timeout = -1;
            break;
          case 2:
            timeout = 250;
            break;
          case 5:
            timeout = 1073741823;
            break;
          case 4:
            timeout = 1e4;
            break;
          default:
            timeout = 5e3;
        }
        timeout = options + timeout;
        priorityLevel = {
          id: taskIdCounter++,
          callback,
          priorityLevel,
          startTime: options,
          expirationTime: timeout,
          sortIndex: -1
        };
        options > currentTime ? (priorityLevel.sortIndex = options, push(timerQueue, priorityLevel), null === peek(taskQueue) && priorityLevel === peek(timerQueue) && (isHostTimeoutScheduled ? (localClearTimeout(taskTimeoutID), taskTimeoutID = -1) : isHostTimeoutScheduled = true, requestHostTimeout(handleTimeout, options - currentTime))) : (priorityLevel.sortIndex = timeout, push(taskQueue, priorityLevel), isHostCallbackScheduled || isPerformingWork || (isHostCallbackScheduled = true, requestHostCallback()));
        return priorityLevel;
      };
      exports.unstable_shouldYield = shouldYieldToHost;
      exports.unstable_wrapCallback = function(callback) {
        var parentPriorityLevel = currentPriorityLevel;
        return function() {
          var previousPriorityLevel = currentPriorityLevel;
          currentPriorityLevel = parentPriorityLevel;
          try {
            return callback.apply(this, arguments);
          } finally {
            currentPriorityLevel = previousPriorityLevel;
          }
        };
      };
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/@react-three/fiber/node_modules/scheduler/index.js
var require_scheduler2 = __commonJS({
  "node_modules/@react-three/fiber/node_modules/scheduler/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_scheduler_development2();
    }
  }
});

// node_modules/@react-three/fiber/dist/events-cf57b220.esm.js
var React2 = __toESM(require_react());
var import_constants = __toESM(require_constants());

// node_modules/zustand/esm/traditional.mjs
var import_react = __toESM(require_react(), 1);
var import_with_selector = __toESM(require_with_selector(), 1);

// node_modules/zustand/esm/vanilla.mjs
var createStoreImpl = (createState) => {
  let state2;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state2) : partial;
    if (!Object.is(nextState, state2)) {
      const previousState = state2;
      state2 = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state2, nextState);
      listeners.forEach((listener) => listener(state2, previousState));
    }
  };
  const getState = () => state2;
  const getInitialState = () => initialState;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const api = { setState, getState, getInitialState, subscribe };
  const initialState = state2 = createState(setState, getState, api);
  return api;
};
var createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;

// node_modules/zustand/esm/traditional.mjs
var { useSyncExternalStoreWithSelector } = import_with_selector.default;
var identity = (arg) => arg;
function useStoreWithEqualityFn(api, selector = identity, equalityFn) {
  const slice = useSyncExternalStoreWithSelector(
    api.subscribe,
    api.getState,
    api.getInitialState,
    selector,
    equalityFn
  );
  import_react.default.useDebugValue(slice);
  return slice;
}
var createWithEqualityFnImpl = (createState, defaultEqualityFn) => {
  const api = createStore(createState);
  const useBoundStoreWithEqualityFn = (selector, equalityFn = defaultEqualityFn) => useStoreWithEqualityFn(api, selector, equalityFn);
  Object.assign(useBoundStoreWithEqualityFn, api);
  return useBoundStoreWithEqualityFn;
};
var createWithEqualityFn = (createState, defaultEqualityFn) => createState ? createWithEqualityFnImpl(createState, defaultEqualityFn) : createWithEqualityFnImpl;

// node_modules/@react-three/fiber/dist/events-cf57b220.esm.js
var import_react_reconciler = __toESM(require_react_reconciler());
var import_scheduler = __toESM(require_scheduler2());

// node_modules/suspend-react/index.js
var isPromise = (promise) => typeof promise === "object" && typeof promise.then === "function";
var globalCache = [];
function shallowEqualArrays(arrA, arrB, equal = (a2, b2) => a2 === b2) {
  if (arrA === arrB) return true;
  if (!arrA || !arrB) return false;
  const len = arrA.length;
  if (arrB.length !== len) return false;
  for (let i3 = 0; i3 < len; i3++) if (!equal(arrA[i3], arrB[i3])) return false;
  return true;
}
function query(fn, keys = null, preload2 = false, config = {}) {
  if (keys === null) keys = [fn];
  for (const entry2 of globalCache) {
    if (shallowEqualArrays(keys, entry2.keys, entry2.equal)) {
      if (preload2) return void 0;
      if (Object.prototype.hasOwnProperty.call(entry2, "error")) throw entry2.error;
      if (Object.prototype.hasOwnProperty.call(entry2, "response")) {
        if (config.lifespan && config.lifespan > 0) {
          if (entry2.timeout) clearTimeout(entry2.timeout);
          entry2.timeout = setTimeout(entry2.remove, config.lifespan);
        }
        return entry2.response;
      }
      if (!preload2) throw entry2.promise;
    }
  }
  const entry = {
    keys,
    equal: config.equal,
    remove: () => {
      const index = globalCache.indexOf(entry);
      if (index !== -1) globalCache.splice(index, 1);
    },
    promise: (
      // Execute the promise
      (isPromise(fn) ? fn : fn(...keys)).then((response) => {
        entry.response = response;
        if (config.lifespan && config.lifespan > 0) {
          entry.timeout = setTimeout(entry.remove, config.lifespan);
        }
      }).catch((error) => entry.error = error)
    )
  };
  globalCache.push(entry);
  if (!preload2) throw entry.promise;
  return void 0;
}
var suspend = (fn, keys, config) => query(fn, keys, false, config);
var preload = (fn, keys, config) => void query(fn, keys, true, config);
var clear = (keys) => {
  if (keys === void 0 || keys.length === 0) globalCache.splice(0, globalCache.length);
  else {
    const entry = globalCache.find((entry2) => shallowEqualArrays(keys, entry2.keys, entry2.equal));
    if (entry) entry.remove();
  }
};

// node_modules/@react-three/fiber/dist/events-cf57b220.esm.js
var import_jsx_runtime = __toESM(require_jsx_runtime());

// node_modules/its-fine/dist/index.js
var o = __toESM(require_react());
var f = (() => {
  var e, t;
  return typeof window != "undefined" && (((e = window.document) == null ? void 0 : e.createElement) || ((t = window.navigator) == null ? void 0 : t.product) === "ReactNative");
})() ? o.useLayoutEffect : o.useEffect;
function i(e, t, r) {
  if (!e) return;
  if (r(e) === true) return e;
  let n = t ? e.return : e.child;
  for (; n; ) {
    const u2 = i(n, t, r);
    if (u2) return u2;
    n = t ? null : n.sibling;
  }
}
function l(e) {
  try {
    return Object.defineProperties(e, {
      _currentRenderer: {
        get() {
          return null;
        },
        set() {
        }
      },
      _currentRenderer2: {
        get() {
          return null;
        },
        set() {
        }
      }
    });
  } catch (t) {
    return e;
  }
}
var a = l(o.createContext(null));
var m = class extends o.Component {
  render() {
    return o.createElement(a.Provider, { value: this._reactInternals }, this.props.children);
  }
};
function c() {
  const e = o.useContext(a);
  if (e === null) throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
  const t = o.useId();
  return o.useMemo(() => {
    for (const n of [e, e == null ? void 0 : e.alternate]) {
      if (!n) continue;
      const u2 = i(n, false, (d) => {
        let s = d.memoizedState;
        for (; s; ) {
          if (s.memoizedState === t) return true;
          s = s.next;
        }
      });
      if (u2) return u2;
    }
  }, [e, t]);
}
var p = Symbol.for("react.context");
var b = (e) => e !== null && typeof e == "object" && "$$typeof" in e && e.$$typeof === p;
function h() {
  const e = c(), [t] = o.useState(() => /* @__PURE__ */ new Map());
  t.clear();
  let r = e;
  for (; r; ) {
    const n = r.type;
    b(n) && n !== a && !t.has(n) && t.set(n, o.use(l(n))), r = r.return;
  }
  return t;
}
function x() {
  const e = h();
  return o.useMemo(
    () => Array.from(e.keys()).reduce(
      (t, r) => (n) => o.createElement(t, null, o.createElement(r.Provider, { ...n, value: e.get(r) })),
      (t) => o.createElement(m, { ...t })
    ),
    [e]
  );
}

// node_modules/@react-three/fiber/dist/events-cf57b220.esm.js
var threeTypes = Object.freeze({
  __proto__: null
});
function findInitialRoot(instance) {
  let root = instance.root;
  while (root.getState().previousRoot) root = root.getState().previousRoot;
  return root;
}
var act2 = React2["act"];
var isOrthographicCamera = (def) => def && def.isOrthographicCamera;
var isRef = (obj) => obj && obj.hasOwnProperty("current");
var isColorRepresentation = (value) => value != null && (typeof value === "string" || typeof value === "number" || value.isColor);
var useIsomorphicLayoutEffect = ((_window$document, _window$navigator) => typeof window !== "undefined" && (((_window$document = window.document) == null ? void 0 : _window$document.createElement) || ((_window$navigator = window.navigator) == null ? void 0 : _window$navigator.product) === "ReactNative"))() ? React2.useLayoutEffect : React2.useEffect;
function useMutableCallback(fn) {
  const ref = React2.useRef(fn);
  useIsomorphicLayoutEffect(() => void (ref.current = fn), [fn]);
  return ref;
}
function useBridge() {
  const fiber = c();
  const ContextBridge = x();
  return React2.useMemo(() => ({
    children
  }) => {
    const strict = !!i(fiber, true, (node) => node.type === React2.StrictMode);
    const Root = strict ? React2.StrictMode : React2.Fragment;
    return (0, import_jsx_runtime.jsx)(Root, {
      children: (0, import_jsx_runtime.jsx)(ContextBridge, {
        children
      })
    });
  }, [fiber, ContextBridge]);
}
function Block({
  set
}) {
  useIsomorphicLayoutEffect(() => {
    set(new Promise(() => null));
    return () => set(false);
  }, [set]);
  return null;
}
var ErrorBoundary = ((_ErrorBoundary) => (_ErrorBoundary = class ErrorBoundary extends React2.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      error: false
    };
  }
  componentDidCatch(err) {
    this.props.set(err);
  }
  render() {
    return this.state.error ? null : this.props.children;
  }
}, _ErrorBoundary.getDerivedStateFromError = () => ({
  error: true
}), _ErrorBoundary))();
function calculateDpr(dpr) {
  var _window$devicePixelRa;
  const target = typeof window !== "undefined" ? (_window$devicePixelRa = window.devicePixelRatio) != null ? _window$devicePixelRa : 2 : 1;
  return Array.isArray(dpr) ? Math.min(Math.max(dpr[0], target), dpr[1]) : dpr;
}
function getRootState(obj) {
  var _r3f;
  return (_r3f = obj.__r3f) == null ? void 0 : _r3f.root.getState();
}
var is = {
  obj: (a2) => a2 === Object(a2) && !is.arr(a2) && typeof a2 !== "function",
  fun: (a2) => typeof a2 === "function",
  str: (a2) => typeof a2 === "string",
  num: (a2) => typeof a2 === "number",
  boo: (a2) => typeof a2 === "boolean",
  und: (a2) => a2 === void 0,
  nul: (a2) => a2 === null,
  arr: (a2) => Array.isArray(a2),
  equ(a2, b2, {
    arrays = "shallow",
    objects = "reference",
    strict = true
  } = {}) {
    if (typeof a2 !== typeof b2 || !!a2 !== !!b2) return false;
    if (is.str(a2) || is.num(a2) || is.boo(a2)) return a2 === b2;
    const isObj = is.obj(a2);
    if (isObj && objects === "reference") return a2 === b2;
    const isArr = is.arr(a2);
    if (isArr && arrays === "reference") return a2 === b2;
    if ((isArr || isObj) && a2 === b2) return true;
    let i3;
    for (i3 in a2) if (!(i3 in b2)) return false;
    if (isObj && arrays === "shallow" && objects === "shallow") {
      for (i3 in strict ? b2 : a2) if (!is.equ(a2[i3], b2[i3], {
        strict,
        objects: "reference"
      })) return false;
    } else {
      for (i3 in strict ? b2 : a2) if (a2[i3] !== b2[i3]) return false;
    }
    if (is.und(i3)) {
      if (isArr && a2.length === 0 && b2.length === 0) return true;
      if (isObj && Object.keys(a2).length === 0 && Object.keys(b2).length === 0) return true;
      if (a2 !== b2) return false;
    }
    return true;
  }
};
function buildGraph(object) {
  const data = {
    nodes: {},
    materials: {},
    meshes: {}
  };
  if (object) {
    object.traverse((obj) => {
      if (obj.name) data.nodes[obj.name] = obj;
      if (obj.material && !data.materials[obj.material.name]) data.materials[obj.material.name] = obj.material;
      if (obj.isMesh && !data.meshes[obj.name]) data.meshes[obj.name] = obj;
    });
  }
  return data;
}
function dispose(obj) {
  if (obj.type !== "Scene") obj.dispose == null ? void 0 : obj.dispose();
  for (const p3 in obj) {
    const prop = obj[p3];
    if ((prop == null ? void 0 : prop.type) !== "Scene") prop == null ? void 0 : prop.dispose == null ? void 0 : prop.dispose();
  }
}
var REACT_INTERNAL_PROPS = ["children", "key", "ref"];
function getInstanceProps(queue) {
  const props = {};
  for (const key in queue) {
    if (!REACT_INTERNAL_PROPS.includes(key)) props[key] = queue[key];
  }
  return props;
}
function prepare(target, root, type, props) {
  const object = target;
  let instance = object == null ? void 0 : object.__r3f;
  if (!instance) {
    instance = {
      root,
      type,
      parent: null,
      children: [],
      props: getInstanceProps(props),
      object,
      eventCount: 0,
      handlers: {},
      isHidden: false
    };
    if (object) object.__r3f = instance;
  }
  return instance;
}
function resolve(root, key) {
  let target = root[key];
  if (!key.includes("-")) return {
    root,
    key,
    target
  };
  target = root;
  for (const part of key.split("-")) {
    var _target;
    key = part;
    root = target;
    target = (_target = target) == null ? void 0 : _target[key];
  }
  return {
    root,
    key,
    target
  };
}
var INDEX_REGEX = /-\d+$/;
function attach(parent, child) {
  if (is.str(child.props.attach)) {
    if (INDEX_REGEX.test(child.props.attach)) {
      const index = child.props.attach.replace(INDEX_REGEX, "");
      const {
        root: root2,
        key: key2
      } = resolve(parent.object, index);
      if (!Array.isArray(root2[key2])) root2[key2] = [];
    }
    const {
      root,
      key
    } = resolve(parent.object, child.props.attach);
    child.previousAttach = root[key];
    root[key] = child.object;
  } else if (is.fun(child.props.attach)) {
    child.previousAttach = child.props.attach(parent.object, child.object);
  }
}
function detach(parent, child) {
  if (is.str(child.props.attach)) {
    const {
      root,
      key
    } = resolve(parent.object, child.props.attach);
    const previous = child.previousAttach;
    if (previous === void 0) delete root[key];
    else root[key] = previous;
  } else {
    child.previousAttach == null ? void 0 : child.previousAttach(parent.object, child.object);
  }
  delete child.previousAttach;
}
var RESERVED_PROPS = [
  ...REACT_INTERNAL_PROPS,
  // Instance props
  "args",
  "dispose",
  "attach",
  "object",
  "onUpdate",
  // Behavior flags
  "dispose"
];
var MEMOIZED_PROTOTYPES = /* @__PURE__ */ new Map();
function getMemoizedPrototype(root) {
  let ctor = MEMOIZED_PROTOTYPES.get(root.constructor);
  try {
    if (!ctor) {
      ctor = new root.constructor();
      MEMOIZED_PROTOTYPES.set(root.constructor, ctor);
    }
  } catch (e) {
  }
  return ctor;
}
function diffProps(instance, newProps) {
  const changedProps = {};
  for (const prop in newProps) {
    if (RESERVED_PROPS.includes(prop)) continue;
    if (is.equ(newProps[prop], instance.props[prop])) continue;
    changedProps[prop] = newProps[prop];
    for (const other in newProps) {
      if (other.startsWith(`${prop}-`)) changedProps[other] = newProps[other];
    }
  }
  for (const prop in instance.props) {
    if (RESERVED_PROPS.includes(prop) || newProps.hasOwnProperty(prop)) continue;
    const {
      root,
      key
    } = resolve(instance.object, prop);
    if (root.constructor && root.constructor.length === 0) {
      const ctor = getMemoizedPrototype(root);
      if (!is.und(ctor)) changedProps[key] = ctor[key];
    } else {
      changedProps[key] = 0;
    }
  }
  return changedProps;
}
var colorMaps = ["map", "emissiveMap", "sheenColorMap", "specularColorMap", "envMap"];
var EVENT_REGEX = /^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;
function applyProps(object, props) {
  var _instance$object;
  const instance = object.__r3f;
  const rootState = instance && findInitialRoot(instance).getState();
  const prevHandlers = instance == null ? void 0 : instance.eventCount;
  for (const prop in props) {
    let value = props[prop];
    if (RESERVED_PROPS.includes(prop)) continue;
    if (instance && EVENT_REGEX.test(prop)) {
      if (typeof value === "function") instance.handlers[prop] = value;
      else delete instance.handlers[prop];
      instance.eventCount = Object.keys(instance.handlers).length;
      continue;
    }
    if (value === void 0) continue;
    let {
      root,
      key,
      target
    } = resolve(object, prop);
    if (target instanceof Layers && value instanceof Layers) {
      target.mask = value.mask;
    } else if (target instanceof Color && isColorRepresentation(value)) {
      target.set(value);
    } else if (target !== null && typeof target === "object" && typeof target.set === "function" && typeof target.copy === "function" && value != null && value.constructor && target.constructor === value.constructor) {
      target.copy(value);
    } else if (target !== null && typeof target === "object" && typeof target.set === "function" && Array.isArray(value)) {
      if (typeof target.fromArray === "function") target.fromArray(value);
      else target.set(...value);
    } else if (target !== null && typeof target === "object" && typeof target.set === "function" && typeof value === "number") {
      if (typeof target.setScalar === "function") target.setScalar(value);
      else target.set(value);
    } else {
      var _root$key;
      root[key] = value;
      if (rootState && !rootState.linear && colorMaps.includes(key) && (_root$key = root[key]) != null && _root$key.isTexture && // sRGB textures must be RGBA8 since r137 https://github.com/mrdoob/three.js/pull/23129
      root[key].format === RGBAFormat && root[key].type === UnsignedByteType) {
        root[key].colorSpace = SRGBColorSpace;
      }
    }
  }
  if (instance != null && instance.parent && rootState != null && rootState.internal && (_instance$object = instance.object) != null && _instance$object.isObject3D && prevHandlers !== instance.eventCount) {
    const object2 = instance.object;
    const index = rootState.internal.interaction.indexOf(object2);
    if (index > -1) rootState.internal.interaction.splice(index, 1);
    if (instance.eventCount && object2.raycast !== null) {
      rootState.internal.interaction.push(object2);
    }
  }
  if (instance && instance.props.attach === void 0) {
    if (instance.object.isBufferGeometry) instance.props.attach = "geometry";
    else if (instance.object.isMaterial) instance.props.attach = "material";
  }
  if (instance) invalidateInstance(instance);
  return object;
}
function invalidateInstance(instance) {
  var _instance$root;
  if (!instance.parent) return;
  instance.props.onUpdate == null ? void 0 : instance.props.onUpdate(instance.object);
  const state2 = (_instance$root = instance.root) == null ? void 0 : _instance$root.getState == null ? void 0 : _instance$root.getState();
  if (state2 && state2.internal.frames === 0) state2.invalidate();
}
function updateCamera(camera, size) {
  if (camera.manual) return;
  if (isOrthographicCamera(camera)) {
    camera.left = size.width / -2;
    camera.right = size.width / 2;
    camera.top = size.height / 2;
    camera.bottom = size.height / -2;
  } else {
    camera.aspect = size.width / size.height;
  }
  camera.updateProjectionMatrix();
}
var isObject3D = (object) => object == null ? void 0 : object.isObject3D;
function makeId(event) {
  return (event.eventObject || event.object).uuid + "/" + event.index + event.instanceId;
}
function releaseInternalPointerCapture(capturedMap, obj, captures, pointerId) {
  const captureData = captures.get(obj);
  if (captureData) {
    captures.delete(obj);
    if (captures.size === 0) {
      capturedMap.delete(pointerId);
      captureData.target.releasePointerCapture(pointerId);
    }
  }
}
function removeInteractivity(store, object) {
  const {
    internal
  } = store.getState();
  internal.interaction = internal.interaction.filter((o2) => o2 !== object);
  internal.initialHits = internal.initialHits.filter((o2) => o2 !== object);
  internal.hovered.forEach((value, key) => {
    if (value.eventObject === object || value.object === object) {
      internal.hovered.delete(key);
    }
  });
  internal.capturedMap.forEach((captures, pointerId) => {
    releaseInternalPointerCapture(internal.capturedMap, object, captures, pointerId);
  });
}
function createEvents(store) {
  function calculateDistance(event) {
    const {
      internal
    } = store.getState();
    const dx = event.offsetX - internal.initialClick[0];
    const dy = event.offsetY - internal.initialClick[1];
    return Math.round(Math.sqrt(dx * dx + dy * dy));
  }
  function filterPointerEvents(objects) {
    return objects.filter((obj) => ["Move", "Over", "Enter", "Out", "Leave"].some((name) => {
      var _r3f;
      return (_r3f = obj.__r3f) == null ? void 0 : _r3f.handlers["onPointer" + name];
    }));
  }
  function intersect(event, filter) {
    const state2 = store.getState();
    const duplicates = /* @__PURE__ */ new Set();
    const intersections = [];
    const eventsObjects = filter ? filter(state2.internal.interaction) : state2.internal.interaction;
    for (let i3 = 0; i3 < eventsObjects.length; i3++) {
      const state3 = getRootState(eventsObjects[i3]);
      if (state3) {
        state3.raycaster.camera = void 0;
      }
    }
    if (!state2.previousRoot) {
      state2.events.compute == null ? void 0 : state2.events.compute(event, state2);
    }
    function handleRaycast(obj) {
      const state3 = getRootState(obj);
      if (!state3 || !state3.events.enabled || state3.raycaster.camera === null) return [];
      if (state3.raycaster.camera === void 0) {
        var _state$previousRoot;
        state3.events.compute == null ? void 0 : state3.events.compute(event, state3, (_state$previousRoot = state3.previousRoot) == null ? void 0 : _state$previousRoot.getState());
        if (state3.raycaster.camera === void 0) state3.raycaster.camera = null;
      }
      return state3.raycaster.camera ? state3.raycaster.intersectObject(obj, true) : [];
    }
    let hits = eventsObjects.flatMap(handleRaycast).sort((a2, b2) => {
      const aState = getRootState(a2.object);
      const bState = getRootState(b2.object);
      if (!aState || !bState) return a2.distance - b2.distance;
      return bState.events.priority - aState.events.priority || a2.distance - b2.distance;
    }).filter((item) => {
      const id = makeId(item);
      if (duplicates.has(id)) return false;
      duplicates.add(id);
      return true;
    });
    if (state2.events.filter) hits = state2.events.filter(hits, state2);
    for (const hit of hits) {
      let eventObject = hit.object;
      while (eventObject) {
        var _r3f2;
        if ((_r3f2 = eventObject.__r3f) != null && _r3f2.eventCount) intersections.push({
          ...hit,
          eventObject
        });
        eventObject = eventObject.parent;
      }
    }
    if ("pointerId" in event && state2.internal.capturedMap.has(event.pointerId)) {
      for (let captureData of state2.internal.capturedMap.get(event.pointerId).values()) {
        if (!duplicates.has(makeId(captureData.intersection))) intersections.push(captureData.intersection);
      }
    }
    return intersections;
  }
  function handleIntersects(intersections, event, delta, callback) {
    if (intersections.length) {
      const localState = {
        stopped: false
      };
      for (const hit of intersections) {
        let state2 = getRootState(hit.object);
        if (!state2) {
          hit.object.traverseAncestors((obj) => {
            const parentState = getRootState(obj);
            if (parentState) {
              state2 = parentState;
              return false;
            }
          });
        }
        if (state2) {
          const {
            raycaster,
            pointer,
            camera,
            internal
          } = state2;
          const unprojectedPoint = new Vector3(pointer.x, pointer.y, 0).unproject(camera);
          const hasPointerCapture = (id) => {
            var _internal$capturedMap, _internal$capturedMap2;
            return (_internal$capturedMap = (_internal$capturedMap2 = internal.capturedMap.get(id)) == null ? void 0 : _internal$capturedMap2.has(hit.eventObject)) != null ? _internal$capturedMap : false;
          };
          const setPointerCapture = (id) => {
            const captureData = {
              intersection: hit,
              target: event.target
            };
            if (internal.capturedMap.has(id)) {
              internal.capturedMap.get(id).set(hit.eventObject, captureData);
            } else {
              internal.capturedMap.set(id, /* @__PURE__ */ new Map([[hit.eventObject, captureData]]));
            }
            event.target.setPointerCapture(id);
          };
          const releasePointerCapture = (id) => {
            const captures = internal.capturedMap.get(id);
            if (captures) {
              releaseInternalPointerCapture(internal.capturedMap, hit.eventObject, captures, id);
            }
          };
          let extractEventProps = {};
          for (let prop in event) {
            let property = event[prop];
            if (typeof property !== "function") extractEventProps[prop] = property;
          }
          let raycastEvent = {
            ...hit,
            ...extractEventProps,
            pointer,
            intersections,
            stopped: localState.stopped,
            delta,
            unprojectedPoint,
            ray: raycaster.ray,
            camera,
            // Hijack stopPropagation, which just sets a flag
            stopPropagation() {
              const capturesForPointer = "pointerId" in event && internal.capturedMap.get(event.pointerId);
              if (
                // ...if this pointer hasn't been captured
                !capturesForPointer || // ... or if the hit object is capturing the pointer
                capturesForPointer.has(hit.eventObject)
              ) {
                raycastEvent.stopped = localState.stopped = true;
                if (internal.hovered.size && Array.from(internal.hovered.values()).find((i3) => i3.eventObject === hit.eventObject)) {
                  const higher = intersections.slice(0, intersections.indexOf(hit));
                  cancelPointer([...higher, hit]);
                }
              }
            },
            // there should be a distinction between target and currentTarget
            target: {
              hasPointerCapture,
              setPointerCapture,
              releasePointerCapture
            },
            currentTarget: {
              hasPointerCapture,
              setPointerCapture,
              releasePointerCapture
            },
            nativeEvent: event
          };
          callback(raycastEvent);
          if (localState.stopped === true) break;
        }
      }
    }
    return intersections;
  }
  function cancelPointer(intersections) {
    const {
      internal
    } = store.getState();
    for (const hoveredObj of internal.hovered.values()) {
      if (!intersections.length || !intersections.find((hit) => hit.object === hoveredObj.object && hit.index === hoveredObj.index && hit.instanceId === hoveredObj.instanceId)) {
        const eventObject = hoveredObj.eventObject;
        const instance = eventObject.__r3f;
        internal.hovered.delete(makeId(hoveredObj));
        if (instance != null && instance.eventCount) {
          const handlers = instance.handlers;
          const data = {
            ...hoveredObj,
            intersections
          };
          handlers.onPointerOut == null ? void 0 : handlers.onPointerOut(data);
          handlers.onPointerLeave == null ? void 0 : handlers.onPointerLeave(data);
        }
      }
    }
  }
  function pointerMissed(event, objects) {
    for (let i3 = 0; i3 < objects.length; i3++) {
      const instance = objects[i3].__r3f;
      instance == null ? void 0 : instance.handlers.onPointerMissed == null ? void 0 : instance.handlers.onPointerMissed(event);
    }
  }
  function handlePointer(name) {
    switch (name) {
      case "onPointerLeave":
      case "onPointerCancel":
        return () => cancelPointer([]);
      case "onLostPointerCapture":
        return (event) => {
          const {
            internal
          } = store.getState();
          if ("pointerId" in event && internal.capturedMap.has(event.pointerId)) {
            requestAnimationFrame(() => {
              if (internal.capturedMap.has(event.pointerId)) {
                internal.capturedMap.delete(event.pointerId);
                cancelPointer([]);
              }
            });
          }
        };
    }
    return function handleEvent(event) {
      const {
        onPointerMissed,
        internal
      } = store.getState();
      internal.lastEvent.current = event;
      const isPointerMove = name === "onPointerMove";
      const isClickEvent = name === "onClick" || name === "onContextMenu" || name === "onDoubleClick";
      const filter = isPointerMove ? filterPointerEvents : void 0;
      const hits = intersect(event, filter);
      const delta = isClickEvent ? calculateDistance(event) : 0;
      if (name === "onPointerDown") {
        internal.initialClick = [event.offsetX, event.offsetY];
        internal.initialHits = hits.map((hit) => hit.eventObject);
      }
      if (isClickEvent && !hits.length) {
        if (delta <= 2) {
          pointerMissed(event, internal.interaction);
          if (onPointerMissed) onPointerMissed(event);
        }
      }
      if (isPointerMove) cancelPointer(hits);
      function onIntersect(data) {
        const eventObject = data.eventObject;
        const instance = eventObject.__r3f;
        if (!(instance != null && instance.eventCount)) return;
        const handlers = instance.handlers;
        if (isPointerMove) {
          if (handlers.onPointerOver || handlers.onPointerEnter || handlers.onPointerOut || handlers.onPointerLeave) {
            const id = makeId(data);
            const hoveredItem = internal.hovered.get(id);
            if (!hoveredItem) {
              internal.hovered.set(id, data);
              handlers.onPointerOver == null ? void 0 : handlers.onPointerOver(data);
              handlers.onPointerEnter == null ? void 0 : handlers.onPointerEnter(data);
            } else if (hoveredItem.stopped) {
              data.stopPropagation();
            }
          }
          handlers.onPointerMove == null ? void 0 : handlers.onPointerMove(data);
        } else {
          const handler = handlers[name];
          if (handler) {
            if (!isClickEvent || internal.initialHits.includes(eventObject)) {
              pointerMissed(event, internal.interaction.filter((object) => !internal.initialHits.includes(object)));
              handler(data);
            }
          } else {
            if (isClickEvent && internal.initialHits.includes(eventObject)) {
              pointerMissed(event, internal.interaction.filter((object) => !internal.initialHits.includes(object)));
            }
          }
        }
      }
      handleIntersects(hits, event, delta, onIntersect);
    };
  }
  return {
    handlePointer
  };
}
var isRenderer = (def) => !!(def != null && def.render);
var context = React2.createContext(null);
var createStore2 = (invalidate2, advance2) => {
  const rootStore = createWithEqualityFn((set, get) => {
    const position = new Vector3();
    const defaultTarget = new Vector3();
    const tempTarget = new Vector3();
    function getCurrentViewport(camera = get().camera, target = defaultTarget, size = get().size) {
      const {
        width,
        height,
        top,
        left
      } = size;
      const aspect = width / height;
      if (target.isVector3) tempTarget.copy(target);
      else tempTarget.set(...target);
      const distance = camera.getWorldPosition(position).distanceTo(tempTarget);
      if (isOrthographicCamera(camera)) {
        return {
          width: width / camera.zoom,
          height: height / camera.zoom,
          top,
          left,
          factor: 1,
          distance,
          aspect
        };
      } else {
        const fov = camera.fov * Math.PI / 180;
        const h2 = 2 * Math.tan(fov / 2) * distance;
        const w = h2 * (width / height);
        return {
          width: w,
          height: h2,
          top,
          left,
          factor: width / w,
          distance,
          aspect
        };
      }
    }
    let performanceTimeout = void 0;
    const setPerformanceCurrent = (current) => set((state3) => ({
      performance: {
        ...state3.performance,
        current
      }
    }));
    const pointer = new Vector2();
    const rootState = {
      set,
      get,
      // Mock objects that have to be configured
      gl: null,
      camera: null,
      raycaster: null,
      events: {
        priority: 1,
        enabled: true,
        connected: false
      },
      scene: null,
      xr: null,
      invalidate: (frames = 1) => invalidate2(get(), frames),
      advance: (timestamp, runGlobalEffects) => advance2(timestamp, runGlobalEffects, get()),
      legacy: false,
      linear: false,
      flat: false,
      controls: null,
      clock: new Clock(),
      pointer,
      mouse: pointer,
      frameloop: "always",
      onPointerMissed: void 0,
      performance: {
        current: 1,
        min: 0.5,
        max: 1,
        debounce: 200,
        regress: () => {
          const state3 = get();
          if (performanceTimeout) clearTimeout(performanceTimeout);
          if (state3.performance.current !== state3.performance.min) setPerformanceCurrent(state3.performance.min);
          performanceTimeout = setTimeout(() => setPerformanceCurrent(get().performance.max), state3.performance.debounce);
        }
      },
      size: {
        width: 0,
        height: 0,
        top: 0,
        left: 0
      },
      viewport: {
        initialDpr: 0,
        dpr: 0,
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        aspect: 0,
        distance: 0,
        factor: 0,
        getCurrentViewport
      },
      setEvents: (events) => set((state3) => ({
        ...state3,
        events: {
          ...state3.events,
          ...events
        }
      })),
      setSize: (width, height, top = 0, left = 0) => {
        const camera = get().camera;
        const size = {
          width,
          height,
          top,
          left
        };
        set((state3) => ({
          size,
          viewport: {
            ...state3.viewport,
            ...getCurrentViewport(camera, defaultTarget, size)
          }
        }));
      },
      setDpr: (dpr) => set((state3) => {
        const resolved = calculateDpr(dpr);
        return {
          viewport: {
            ...state3.viewport,
            dpr: resolved,
            initialDpr: state3.viewport.initialDpr || resolved
          }
        };
      }),
      setFrameloop: (frameloop = "always") => {
        const clock = get().clock;
        clock.stop();
        clock.elapsedTime = 0;
        if (frameloop !== "never") {
          clock.start();
          clock.elapsedTime = 0;
        }
        set(() => ({
          frameloop
        }));
      },
      previousRoot: void 0,
      internal: {
        // Events
        interaction: [],
        hovered: /* @__PURE__ */ new Map(),
        subscribers: [],
        initialClick: [0, 0],
        initialHits: [],
        capturedMap: /* @__PURE__ */ new Map(),
        lastEvent: React2.createRef(),
        // Updates
        active: false,
        frames: 0,
        priority: 0,
        subscribe: (ref, priority, store) => {
          const internal = get().internal;
          internal.priority = internal.priority + (priority > 0 ? 1 : 0);
          internal.subscribers.push({
            ref,
            priority,
            store
          });
          internal.subscribers = internal.subscribers.sort((a2, b2) => a2.priority - b2.priority);
          return () => {
            const internal2 = get().internal;
            if (internal2 != null && internal2.subscribers) {
              internal2.priority = internal2.priority - (priority > 0 ? 1 : 0);
              internal2.subscribers = internal2.subscribers.filter((s) => s.ref !== ref);
            }
          };
        }
      }
    };
    return rootState;
  });
  const state2 = rootStore.getState();
  let oldSize = state2.size;
  let oldDpr = state2.viewport.dpr;
  let oldCamera = state2.camera;
  rootStore.subscribe(() => {
    const {
      camera,
      size,
      viewport,
      gl,
      set
    } = rootStore.getState();
    if (size.width !== oldSize.width || size.height !== oldSize.height || viewport.dpr !== oldDpr) {
      oldSize = size;
      oldDpr = viewport.dpr;
      updateCamera(camera, size);
      if (viewport.dpr > 0) gl.setPixelRatio(viewport.dpr);
      const updateStyle = typeof HTMLCanvasElement !== "undefined" && gl.domElement instanceof HTMLCanvasElement;
      gl.setSize(size.width, size.height, updateStyle);
    }
    if (camera !== oldCamera) {
      oldCamera = camera;
      set((state3) => ({
        viewport: {
          ...state3.viewport,
          ...state3.viewport.getCurrentViewport(camera)
        }
      }));
    }
  });
  rootStore.subscribe((state3) => invalidate2(state3));
  return rootStore;
};
function useInstanceHandle(ref) {
  const instance = React2.useRef(null);
  React2.useImperativeHandle(instance, () => ref.current.__r3f, [ref]);
  return instance;
}
function useStore() {
  const store = React2.useContext(context);
  if (!store) throw new Error("R3F: Hooks can only be used within the Canvas component!");
  return store;
}
function useThree(selector = (state2) => state2, equalityFn) {
  return useStore()(selector, equalityFn);
}
function useFrame(callback, renderPriority = 0) {
  const store = useStore();
  const subscribe = store.getState().internal.subscribe;
  const ref = useMutableCallback(callback);
  useIsomorphicLayoutEffect(() => subscribe(ref, renderPriority, store), [renderPriority, subscribe, store]);
  return null;
}
function useGraph(object) {
  return React2.useMemo(() => buildGraph(object), [object]);
}
var memoizedLoaders = /* @__PURE__ */ new WeakMap();
var isConstructor$1 = (value) => {
  var _value$prototype;
  return typeof value === "function" && (value == null ? void 0 : (_value$prototype = value.prototype) == null ? void 0 : _value$prototype.constructor) === value;
};
function loadingFn(extensions, onProgress) {
  return function(Proto, ...input) {
    let loader;
    if (isConstructor$1(Proto)) {
      loader = memoizedLoaders.get(Proto);
      if (!loader) {
        loader = new Proto();
        memoizedLoaders.set(Proto, loader);
      }
    } else {
      loader = Proto;
    }
    if (extensions) extensions(loader);
    return Promise.all(input.map((input2) => new Promise((res, reject) => loader.load(input2, (data) => {
      if (isObject3D(data == null ? void 0 : data.scene)) Object.assign(data, buildGraph(data.scene));
      res(data);
    }, onProgress, (error) => reject(new Error(`Could not load ${input2}: ${error == null ? void 0 : error.message}`))))));
  };
}
function useLoader(loader, input, extensions, onProgress) {
  const keys = Array.isArray(input) ? input : [input];
  const results = suspend(loadingFn(extensions, onProgress), [loader, ...keys], {
    equal: is.equ
  });
  return Array.isArray(input) ? results : results[0];
}
useLoader.preload = function(loader, input, extensions) {
  const keys = Array.isArray(input) ? input : [input];
  return preload(loadingFn(extensions), [loader, ...keys]);
};
useLoader.clear = function(loader, input) {
  const keys = Array.isArray(input) ? input : [input];
  return clear([loader, ...keys]);
};
function createReconciler(config) {
  const reconciler2 = (0, import_react_reconciler.default)(config);
  reconciler2.injectIntoDevTools({
    bundleType: typeof process !== "undefined" && true ? 1 : 0,
    rendererPackageName: "@react-three/fiber",
    version: React2.version
  });
  return reconciler2;
}
var NoEventPriority = 0;
var catalogue = {};
var PREFIX_REGEX = /^three(?=[A-Z])/;
var toPascalCase = (type) => `${type[0].toUpperCase()}${type.slice(1)}`;
var i2 = 0;
var isConstructor = (object) => typeof object === "function";
function extend(objects) {
  if (isConstructor(objects)) {
    const Component3 = `${i2++}`;
    catalogue[Component3] = objects;
    return Component3;
  } else {
    Object.assign(catalogue, objects);
  }
}
function validateInstance(type, props) {
  const name = toPascalCase(type);
  const target = catalogue[name];
  if (type !== "primitive" && !target) throw new Error(`R3F: ${name} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);
  if (type === "primitive" && !props.object) throw new Error(`R3F: Primitives without 'object' are invalid!`);
  if (props.args !== void 0 && !Array.isArray(props.args)) throw new Error("R3F: The args prop must be an array!");
}
function createInstance(type, props, root) {
  var _props$object;
  type = toPascalCase(type) in catalogue ? type : type.replace(PREFIX_REGEX, "");
  validateInstance(type, props);
  if (type === "primitive" && (_props$object = props.object) != null && _props$object.__r3f) delete props.object.__r3f;
  return prepare(props.object, root, type, props);
}
function hideInstance(instance) {
  if (!instance.isHidden) {
    var _instance$parent;
    if (instance.props.attach && (_instance$parent = instance.parent) != null && _instance$parent.object) {
      detach(instance.parent, instance);
    } else if (isObject3D(instance.object)) {
      instance.object.visible = false;
    }
    instance.isHidden = true;
    invalidateInstance(instance);
  }
}
function unhideInstance(instance) {
  if (instance.isHidden) {
    var _instance$parent2;
    if (instance.props.attach && (_instance$parent2 = instance.parent) != null && _instance$parent2.object) {
      attach(instance.parent, instance);
    } else if (isObject3D(instance.object) && instance.props.visible !== false) {
      instance.object.visible = true;
    }
    instance.isHidden = false;
    invalidateInstance(instance);
  }
}
function handleContainerEffects(parent, child, beforeChild) {
  const state2 = child.root.getState();
  if (!parent.parent && parent.object !== state2.scene) return;
  if (!child.object) {
    var _child$props$object, _child$props$args;
    const target = catalogue[toPascalCase(child.type)];
    child.object = (_child$props$object = child.props.object) != null ? _child$props$object : new target(...(_child$props$args = child.props.args) != null ? _child$props$args : []);
    child.object.__r3f = child;
  }
  applyProps(child.object, child.props);
  if (child.props.attach) {
    attach(parent, child);
  } else if (isObject3D(child.object) && isObject3D(parent.object)) {
    const childIndex = parent.object.children.indexOf(beforeChild == null ? void 0 : beforeChild.object);
    if (beforeChild && childIndex !== -1) {
      const existingIndex = parent.object.children.indexOf(child.object);
      if (existingIndex !== -1) {
        parent.object.children.splice(existingIndex, 1);
        const adjustedIndex = existingIndex < childIndex ? childIndex - 1 : childIndex;
        parent.object.children.splice(adjustedIndex, 0, child.object);
      } else {
        child.object.parent = parent.object;
        parent.object.children.splice(childIndex, 0, child.object);
        child.object.dispatchEvent({
          type: "added"
        });
        parent.object.dispatchEvent({
          type: "childadded",
          child: child.object
        });
      }
    } else {
      parent.object.add(child.object);
    }
  }
  for (const childInstance of child.children) handleContainerEffects(child, childInstance);
  invalidateInstance(child);
}
function appendChild(parent, child) {
  if (!child) return;
  child.parent = parent;
  parent.children.push(child);
  handleContainerEffects(parent, child);
}
function insertBefore(parent, child, beforeChild) {
  if (!child || !beforeChild) return;
  child.parent = parent;
  const childIndex = parent.children.indexOf(beforeChild);
  if (childIndex !== -1) parent.children.splice(childIndex, 0, child);
  else parent.children.push(child);
  handleContainerEffects(parent, child, beforeChild);
}
function disposeOnIdle(object) {
  if (typeof object.dispose === "function") {
    const handleDispose = () => {
      try {
        object.dispose();
      } catch {
      }
    };
    if (typeof IS_REACT_ACT_ENVIRONMENT !== "undefined") handleDispose();
    else (0, import_scheduler.unstable_scheduleCallback)(import_scheduler.unstable_IdlePriority, handleDispose);
  }
}
function removeChild(parent, child, dispose2) {
  if (!child) return;
  child.parent = null;
  const childIndex = parent.children.indexOf(child);
  if (childIndex !== -1) parent.children.splice(childIndex, 1);
  if (child.props.attach) {
    detach(parent, child);
  } else if (isObject3D(child.object) && isObject3D(parent.object)) {
    parent.object.remove(child.object);
    removeInteractivity(findInitialRoot(child), child.object);
  }
  const shouldDispose = child.props.dispose !== null && dispose2 !== false;
  for (let i3 = child.children.length - 1; i3 >= 0; i3--) {
    const node = child.children[i3];
    removeChild(child, node, shouldDispose);
  }
  child.children.length = 0;
  delete child.object.__r3f;
  if (shouldDispose && child.type !== "primitive" && child.object.type !== "Scene") {
    disposeOnIdle(child.object);
  }
  if (dispose2 === void 0) invalidateInstance(child);
}
function setFiberRef(fiber, publicInstance) {
  for (const _fiber of [fiber, fiber.alternate]) {
    if (_fiber !== null) {
      if (typeof _fiber.ref === "function") {
        _fiber.refCleanup == null ? void 0 : _fiber.refCleanup();
        const cleanup = _fiber.ref(publicInstance);
        if (typeof cleanup === "function") _fiber.refCleanup = cleanup;
      } else if (_fiber.ref) {
        _fiber.ref.current = publicInstance;
      }
    }
  }
}
var reconstructed = [];
function swapInstances() {
  for (const [instance] of reconstructed) {
    const parent = instance.parent;
    if (parent) {
      if (instance.props.attach) {
        detach(parent, instance);
      } else if (isObject3D(instance.object) && isObject3D(parent.object)) {
        parent.object.remove(instance.object);
      }
      for (const child of instance.children) {
        if (child.props.attach) {
          detach(instance, child);
        } else if (isObject3D(child.object) && isObject3D(instance.object)) {
          instance.object.remove(child.object);
        }
      }
    }
    if (instance.isHidden) unhideInstance(instance);
    if (instance.object.__r3f) delete instance.object.__r3f;
    if (instance.type !== "primitive") disposeOnIdle(instance.object);
  }
  for (const [instance, props, fiber] of reconstructed) {
    instance.props = props;
    const parent = instance.parent;
    if (parent) {
      var _instance$props$objec, _instance$props$args;
      const target = catalogue[toPascalCase(instance.type)];
      instance.object = (_instance$props$objec = instance.props.object) != null ? _instance$props$objec : new target(...(_instance$props$args = instance.props.args) != null ? _instance$props$args : []);
      instance.object.__r3f = instance;
      setFiberRef(fiber, instance.object);
      applyProps(instance.object, instance.props);
      if (instance.props.attach) {
        attach(parent, instance);
      } else if (isObject3D(instance.object) && isObject3D(parent.object)) {
        parent.object.add(instance.object);
      }
      for (const child of instance.children) {
        if (child.props.attach) {
          attach(instance, child);
        } else if (isObject3D(child.object) && isObject3D(instance.object)) {
          instance.object.add(child.object);
        }
      }
      invalidateInstance(instance);
    }
  }
  reconstructed.length = 0;
}
var handleTextInstance = () => {
};
var NO_CONTEXT = {};
var currentUpdatePriority = NoEventPriority;
var NoFlags = 0;
var Update = 4;
var reconciler = createReconciler({
  isPrimaryRenderer: false,
  warnsIfNotActing: false,
  supportsMutation: true,
  supportsPersistence: false,
  supportsHydration: false,
  createInstance,
  removeChild,
  appendChild,
  appendInitialChild: appendChild,
  insertBefore,
  appendChildToContainer(container, child) {
    const scene = container.getState().scene.__r3f;
    if (!child || !scene) return;
    appendChild(scene, child);
  },
  removeChildFromContainer(container, child) {
    const scene = container.getState().scene.__r3f;
    if (!child || !scene) return;
    removeChild(scene, child);
  },
  insertInContainerBefore(container, child, beforeChild) {
    const scene = container.getState().scene.__r3f;
    if (!child || !beforeChild || !scene) return;
    insertBefore(scene, child, beforeChild);
  },
  getRootHostContext: () => NO_CONTEXT,
  getChildHostContext: () => NO_CONTEXT,
  commitUpdate(instance, type, oldProps, newProps, fiber) {
    var _newProps$args, _oldProps$args, _newProps$args2;
    validateInstance(type, newProps);
    let reconstruct = false;
    if (instance.type === "primitive" && oldProps.object !== newProps.object) reconstruct = true;
    else if (((_newProps$args = newProps.args) == null ? void 0 : _newProps$args.length) !== ((_oldProps$args = oldProps.args) == null ? void 0 : _oldProps$args.length)) reconstruct = true;
    else if ((_newProps$args2 = newProps.args) != null && _newProps$args2.some((value, index) => {
      var _oldProps$args2;
      return value !== ((_oldProps$args2 = oldProps.args) == null ? void 0 : _oldProps$args2[index]);
    })) reconstruct = true;
    if (reconstruct) {
      reconstructed.push([instance, {
        ...newProps
      }, fiber]);
    } else {
      const changedProps = diffProps(instance, newProps);
      if (Object.keys(changedProps).length) {
        Object.assign(instance.props, changedProps);
        applyProps(instance.object, changedProps);
      }
    }
    const isTailSibling = fiber.sibling === null || (fiber.flags & Update) === NoFlags;
    if (isTailSibling) swapInstances();
  },
  finalizeInitialChildren: () => false,
  commitMount() {
  },
  getPublicInstance: (instance) => instance == null ? void 0 : instance.object,
  prepareForCommit: () => null,
  preparePortalMount: (container) => prepare(container.getState().scene, container, "", {}),
  resetAfterCommit: () => {
  },
  shouldSetTextContent: () => false,
  clearContainer: () => false,
  hideInstance,
  unhideInstance,
  createTextInstance: handleTextInstance,
  hideTextInstance: handleTextInstance,
  unhideTextInstance: handleTextInstance,
  scheduleTimeout: typeof setTimeout === "function" ? setTimeout : void 0,
  cancelTimeout: typeof clearTimeout === "function" ? clearTimeout : void 0,
  noTimeout: -1,
  getInstanceFromNode: () => null,
  beforeActiveInstanceBlur() {
  },
  afterActiveInstanceBlur() {
  },
  detachDeletedInstance() {
  },
  prepareScopeUpdate() {
  },
  getInstanceFromScope: () => null,
  shouldAttemptEagerTransition: () => false,
  trackSchedulerEvent: () => {
  },
  resolveEventType: () => null,
  resolveEventTimeStamp: () => -1.1,
  requestPostPaintCallback() {
  },
  maySuspendCommit: () => false,
  preloadInstance: () => true,
  // true indicates already loaded
  startSuspendingCommit() {
  },
  suspendInstance() {
  },
  waitForCommitToBeReady: () => null,
  NotPendingTransition: null,
  HostTransitionContext: React2.createContext(null),
  setCurrentUpdatePriority(newPriority) {
    currentUpdatePriority = newPriority;
  },
  getCurrentUpdatePriority() {
    return currentUpdatePriority;
  },
  resolveUpdatePriority() {
    var _window$event;
    if (currentUpdatePriority !== NoEventPriority) return currentUpdatePriority;
    switch (typeof window !== "undefined" && ((_window$event = window.event) == null ? void 0 : _window$event.type)) {
      case "click":
      case "contextmenu":
      case "dblclick":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
        return import_constants.DiscreteEventPriority;
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "pointerenter":
      case "pointerleave":
      case "wheel":
        return import_constants.ContinuousEventPriority;
      default:
        return import_constants.DefaultEventPriority;
    }
  },
  resetFormInstance() {
  }
});
var _roots = /* @__PURE__ */ new Map();
var shallowLoose = {
  objects: "shallow",
  strict: false
};
function computeInitialSize(canvas, size) {
  if (!size && typeof HTMLCanvasElement !== "undefined" && canvas instanceof HTMLCanvasElement && canvas.parentElement) {
    const {
      width,
      height,
      top,
      left
    } = canvas.parentElement.getBoundingClientRect();
    return {
      width,
      height,
      top,
      left
    };
  } else if (!size && typeof OffscreenCanvas !== "undefined" && canvas instanceof OffscreenCanvas) {
    return {
      width: canvas.width,
      height: canvas.height,
      top: 0,
      left: 0
    };
  }
  return {
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    ...size
  };
}
function createRoot(canvas) {
  const prevRoot = _roots.get(canvas);
  const prevFiber = prevRoot == null ? void 0 : prevRoot.fiber;
  const prevStore = prevRoot == null ? void 0 : prevRoot.store;
  if (prevRoot) console.warn("R3F.createRoot should only be called once!");
  const logRecoverableError = typeof reportError === "function" ? (
    // In modern browsers, reportError will dispatch an error event,
    // emulating an uncaught JavaScript error.
    reportError
  ) : (
    // In older browsers and test environments, fallback to console.error.
    console.error
  );
  const store = prevStore || createStore2(invalidate, advance);
  const fiber = prevFiber || reconciler.createContainer(
    store,
    // container
    import_constants.ConcurrentRoot,
    // tag
    null,
    // hydration callbacks
    false,
    // isStrictMode
    null,
    // concurrentUpdatesByDefaultOverride
    "",
    // identifierPrefix
    logRecoverableError,
    // onUncaughtError
    logRecoverableError,
    // onCaughtError
    logRecoverableError,
    // onRecoverableError
    null
    // transitionCallbacks
  );
  if (!prevRoot) _roots.set(canvas, {
    fiber,
    store
  });
  let onCreated;
  let lastCamera;
  let configured = false;
  let pending = null;
  return {
    async configure(props = {}) {
      let resolve2;
      pending = new Promise((_resolve) => resolve2 = _resolve);
      let {
        gl: glConfig,
        size: propsSize,
        scene: sceneOptions,
        events,
        onCreated: onCreatedCallback,
        shadows = false,
        linear = false,
        flat = false,
        legacy = false,
        orthographic = false,
        frameloop = "always",
        dpr = [1, 2],
        performance: performance2,
        raycaster: raycastOptions,
        camera: cameraOptions,
        onPointerMissed
      } = props;
      let state2 = store.getState();
      let gl = state2.gl;
      if (!state2.gl) {
        const defaultProps = {
          canvas,
          powerPreference: "high-performance",
          antialias: true,
          alpha: true
        };
        const customRenderer = typeof glConfig === "function" ? await glConfig(defaultProps) : glConfig;
        if (isRenderer(customRenderer)) {
          gl = customRenderer;
        } else {
          gl = new WebGLRenderer({
            ...defaultProps,
            ...glConfig
          });
        }
        state2.set({
          gl
        });
      }
      let raycaster = state2.raycaster;
      if (!raycaster) state2.set({
        raycaster: raycaster = new Raycaster()
      });
      const {
        params,
        ...options
      } = raycastOptions || {};
      if (!is.equ(options, raycaster, shallowLoose)) applyProps(raycaster, {
        ...options
      });
      if (!is.equ(params, raycaster.params, shallowLoose)) applyProps(raycaster, {
        params: {
          ...raycaster.params,
          ...params
        }
      });
      if (!state2.camera || state2.camera === lastCamera && !is.equ(lastCamera, cameraOptions, shallowLoose)) {
        lastCamera = cameraOptions;
        const isCamera = cameraOptions == null ? void 0 : cameraOptions.isCamera;
        const camera = isCamera ? cameraOptions : orthographic ? new OrthographicCamera(0, 0, 0, 0, 0.1, 1e3) : new PerspectiveCamera(75, 0, 0.1, 1e3);
        if (!isCamera) {
          camera.position.z = 5;
          if (cameraOptions) {
            applyProps(camera, cameraOptions);
            if (!camera.manual) {
              if ("aspect" in cameraOptions || "left" in cameraOptions || "right" in cameraOptions || "bottom" in cameraOptions || "top" in cameraOptions) {
                camera.manual = true;
                camera.updateProjectionMatrix();
              }
            }
          }
          if (!state2.camera && !(cameraOptions != null && cameraOptions.rotation)) camera.lookAt(0, 0, 0);
        }
        state2.set({
          camera
        });
        raycaster.camera = camera;
      }
      if (!state2.scene) {
        let scene;
        if (sceneOptions != null && sceneOptions.isScene) {
          scene = sceneOptions;
          prepare(scene, store, "", {});
        } else {
          scene = new Scene();
          prepare(scene, store, "", {});
          if (sceneOptions) applyProps(scene, sceneOptions);
        }
        state2.set({
          scene
        });
      }
      if (events && !state2.events.handlers) state2.set({
        events: events(store)
      });
      const size = computeInitialSize(canvas, propsSize);
      if (!is.equ(size, state2.size, shallowLoose)) {
        state2.setSize(size.width, size.height, size.top, size.left);
      }
      if (dpr && state2.viewport.dpr !== calculateDpr(dpr)) state2.setDpr(dpr);
      if (state2.frameloop !== frameloop) state2.setFrameloop(frameloop);
      if (!state2.onPointerMissed) state2.set({
        onPointerMissed
      });
      if (performance2 && !is.equ(performance2, state2.performance, shallowLoose)) state2.set((state3) => ({
        performance: {
          ...state3.performance,
          ...performance2
        }
      }));
      if (!state2.xr) {
        var _gl$xr;
        const handleXRFrame = (timestamp, frame2) => {
          const state3 = store.getState();
          if (state3.frameloop === "never") return;
          advance(timestamp, true, state3, frame2);
        };
        const handleSessionChange = () => {
          const state3 = store.getState();
          state3.gl.xr.enabled = state3.gl.xr.isPresenting;
          state3.gl.xr.setAnimationLoop(state3.gl.xr.isPresenting ? handleXRFrame : null);
          if (!state3.gl.xr.isPresenting) invalidate(state3);
        };
        const xr = {
          connect() {
            const gl2 = store.getState().gl;
            gl2.xr.addEventListener("sessionstart", handleSessionChange);
            gl2.xr.addEventListener("sessionend", handleSessionChange);
          },
          disconnect() {
            const gl2 = store.getState().gl;
            gl2.xr.removeEventListener("sessionstart", handleSessionChange);
            gl2.xr.removeEventListener("sessionend", handleSessionChange);
          }
        };
        if (typeof ((_gl$xr = gl.xr) == null ? void 0 : _gl$xr.addEventListener) === "function") xr.connect();
        state2.set({
          xr
        });
      }
      if (gl.shadowMap) {
        const oldEnabled = gl.shadowMap.enabled;
        const oldType = gl.shadowMap.type;
        gl.shadowMap.enabled = !!shadows;
        if (is.boo(shadows)) {
          gl.shadowMap.type = PCFSoftShadowMap;
        } else if (is.str(shadows)) {
          var _types$shadows;
          const types = {
            basic: BasicShadowMap,
            percentage: PCFShadowMap,
            soft: PCFSoftShadowMap,
            variance: VSMShadowMap
          };
          gl.shadowMap.type = (_types$shadows = types[shadows]) != null ? _types$shadows : PCFSoftShadowMap;
        } else if (is.obj(shadows)) {
          Object.assign(gl.shadowMap, shadows);
        }
        if (oldEnabled !== gl.shadowMap.enabled || oldType !== gl.shadowMap.type) gl.shadowMap.needsUpdate = true;
      }
      ColorManagement.enabled = !legacy;
      if (!configured) {
        gl.outputColorSpace = linear ? LinearSRGBColorSpace : SRGBColorSpace;
        gl.toneMapping = flat ? NoToneMapping : ACESFilmicToneMapping;
      }
      if (state2.legacy !== legacy) state2.set(() => ({
        legacy
      }));
      if (state2.linear !== linear) state2.set(() => ({
        linear
      }));
      if (state2.flat !== flat) state2.set(() => ({
        flat
      }));
      if (glConfig && !is.fun(glConfig) && !isRenderer(glConfig) && !is.equ(glConfig, gl, shallowLoose)) applyProps(gl, glConfig);
      onCreated = onCreatedCallback;
      configured = true;
      resolve2();
      return this;
    },
    render(children) {
      if (!configured && !pending) this.configure();
      pending.then(() => {
        reconciler.updateContainer((0, import_jsx_runtime.jsx)(Provider, {
          store,
          children,
          onCreated,
          rootElement: canvas
        }), fiber, null, () => void 0);
      });
      return store;
    },
    unmount() {
      unmountComponentAtNode(canvas);
    }
  };
}
function Provider({
  store,
  children,
  onCreated,
  rootElement
}) {
  useIsomorphicLayoutEffect(() => {
    const state2 = store.getState();
    state2.set((state3) => ({
      internal: {
        ...state3.internal,
        active: true
      }
    }));
    if (onCreated) onCreated(state2);
    if (!store.getState().events.connected) state2.events.connect == null ? void 0 : state2.events.connect(rootElement);
  }, []);
  return (0, import_jsx_runtime.jsx)(context.Provider, {
    value: store,
    children
  });
}
function unmountComponentAtNode(canvas, callback) {
  const root = _roots.get(canvas);
  const fiber = root == null ? void 0 : root.fiber;
  if (fiber) {
    const state2 = root == null ? void 0 : root.store.getState();
    if (state2) state2.internal.active = false;
    reconciler.updateContainer(null, fiber, null, () => {
      if (state2) {
        setTimeout(() => {
          try {
            var _state$gl, _state$gl$renderLists, _state$gl2, _state$gl3;
            state2.events.disconnect == null ? void 0 : state2.events.disconnect();
            (_state$gl = state2.gl) == null ? void 0 : (_state$gl$renderLists = _state$gl.renderLists) == null ? void 0 : _state$gl$renderLists.dispose == null ? void 0 : _state$gl$renderLists.dispose();
            (_state$gl2 = state2.gl) == null ? void 0 : _state$gl2.forceContextLoss == null ? void 0 : _state$gl2.forceContextLoss();
            if ((_state$gl3 = state2.gl) != null && _state$gl3.xr) state2.xr.disconnect();
            dispose(state2.scene);
            _roots.delete(canvas);
            if (callback) callback(canvas);
          } catch (e) {
          }
        }, 500);
      }
    });
  }
}
function createPortal(children, container, state2) {
  return (0, import_jsx_runtime.jsx)(Portal, {
    children,
    container,
    state: state2
  });
}
function Portal({
  state: state2 = {},
  children,
  container
}) {
  const {
    events,
    size,
    ...rest
  } = state2;
  const previousRoot = useStore();
  const [raycaster] = React2.useState(() => new Raycaster());
  const [pointer] = React2.useState(() => new Vector2());
  const inject = useMutableCallback((rootState, injectState) => {
    let viewport = void 0;
    if (injectState.camera && size) {
      const camera = injectState.camera;
      viewport = rootState.viewport.getCurrentViewport(camera, new Vector3(), size);
      if (camera !== rootState.camera) updateCamera(camera, size);
    }
    return {
      // The intersect consists of the previous root state
      ...rootState,
      ...injectState,
      // Portals have their own scene, which forms the root, a raycaster and a pointer
      scene: container,
      raycaster,
      pointer,
      mouse: pointer,
      // Their previous root is the layer before it
      previousRoot,
      // Events, size and viewport can be overridden by the inject layer
      events: {
        ...rootState.events,
        ...injectState.events,
        ...events
      },
      size: {
        ...rootState.size,
        ...size
      },
      viewport: {
        ...rootState.viewport,
        ...viewport
      },
      // Layers are allowed to override events
      setEvents: (events2) => injectState.set((state3) => ({
        ...state3,
        events: {
          ...state3.events,
          ...events2
        }
      }))
    };
  });
  const usePortalStore = React2.useMemo(() => {
    const store = createWithEqualityFn((set, get) => ({
      ...rest,
      set,
      get
    }));
    const onMutate = (prev) => store.setState((state3) => inject.current(prev, state3));
    onMutate(previousRoot.getState());
    previousRoot.subscribe(onMutate);
    return store;
  }, [previousRoot, container]);
  return (
    // @ts-ignore, reconciler types are not maintained
    (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
      children: reconciler.createPortal((0, import_jsx_runtime.jsx)(context.Provider, {
        value: usePortalStore,
        children
      }), usePortalStore, null)
    })
  );
}
function flushSync(fn) {
  return reconciler.flushSync(fn);
}
function createSubs(callback, subs) {
  const sub = {
    callback
  };
  subs.add(sub);
  return () => void subs.delete(sub);
}
var globalEffects = /* @__PURE__ */ new Set();
var globalAfterEffects = /* @__PURE__ */ new Set();
var globalTailEffects = /* @__PURE__ */ new Set();
var addEffect = (callback) => createSubs(callback, globalEffects);
var addAfterEffect = (callback) => createSubs(callback, globalAfterEffects);
var addTail = (callback) => createSubs(callback, globalTailEffects);
function run(effects, timestamp) {
  if (!effects.size) return;
  for (const {
    callback
  } of effects.values()) {
    callback(timestamp);
  }
}
function flushGlobalEffects(type, timestamp) {
  switch (type) {
    case "before":
      return run(globalEffects, timestamp);
    case "after":
      return run(globalAfterEffects, timestamp);
    case "tail":
      return run(globalTailEffects, timestamp);
  }
}
var subscribers;
var subscription;
function update(timestamp, state2, frame2) {
  let delta = state2.clock.getDelta();
  if (state2.frameloop === "never" && typeof timestamp === "number") {
    delta = timestamp - state2.clock.elapsedTime;
    state2.clock.oldTime = state2.clock.elapsedTime;
    state2.clock.elapsedTime = timestamp;
  }
  subscribers = state2.internal.subscribers;
  for (let i3 = 0; i3 < subscribers.length; i3++) {
    subscription = subscribers[i3];
    subscription.ref.current(subscription.store.getState(), delta, frame2);
  }
  if (!state2.internal.priority && state2.gl.render) state2.gl.render(state2.scene, state2.camera);
  state2.internal.frames = Math.max(0, state2.internal.frames - 1);
  return state2.frameloop === "always" ? 1 : state2.internal.frames;
}
var running = false;
var useFrameInProgress = false;
var repeat;
var frame;
var state;
function loop(timestamp) {
  frame = requestAnimationFrame(loop);
  running = true;
  repeat = 0;
  flushGlobalEffects("before", timestamp);
  useFrameInProgress = true;
  for (const root of _roots.values()) {
    var _state$gl$xr;
    state = root.store.getState();
    if (state.internal.active && (state.frameloop === "always" || state.internal.frames > 0) && !((_state$gl$xr = state.gl.xr) != null && _state$gl$xr.isPresenting)) {
      repeat += update(timestamp, state);
    }
  }
  useFrameInProgress = false;
  flushGlobalEffects("after", timestamp);
  if (repeat === 0) {
    flushGlobalEffects("tail", timestamp);
    running = false;
    return cancelAnimationFrame(frame);
  }
}
function invalidate(state2, frames = 1) {
  var _state$gl$xr2;
  if (!state2) return _roots.forEach((root) => invalidate(root.store.getState(), frames));
  if ((_state$gl$xr2 = state2.gl.xr) != null && _state$gl$xr2.isPresenting || !state2.internal.active || state2.frameloop === "never") return;
  if (frames > 1) {
    state2.internal.frames = Math.min(60, state2.internal.frames + frames);
  } else {
    if (useFrameInProgress) {
      state2.internal.frames = 2;
    } else {
      state2.internal.frames = 1;
    }
  }
  if (!running) {
    running = true;
    requestAnimationFrame(loop);
  }
}
function advance(timestamp, runGlobalEffects = true, state2, frame2) {
  if (runGlobalEffects) flushGlobalEffects("before", timestamp);
  if (!state2) for (const root of _roots.values()) update(timestamp, root.store.getState());
  else update(timestamp, state2, frame2);
  if (runGlobalEffects) flushGlobalEffects("after", timestamp);
}
var DOM_EVENTS = {
  onClick: ["click", false],
  onContextMenu: ["contextmenu", false],
  onDoubleClick: ["dblclick", false],
  onWheel: ["wheel", true],
  onPointerDown: ["pointerdown", true],
  onPointerUp: ["pointerup", true],
  onPointerLeave: ["pointerleave", true],
  onPointerMove: ["pointermove", true],
  onPointerCancel: ["pointercancel", true],
  onLostPointerCapture: ["lostpointercapture", true]
};
function createPointerEvents(store) {
  const {
    handlePointer
  } = createEvents(store);
  return {
    priority: 1,
    enabled: true,
    compute(event, state2, previous) {
      state2.pointer.set(event.offsetX / state2.size.width * 2 - 1, -(event.offsetY / state2.size.height) * 2 + 1);
      state2.raycaster.setFromCamera(state2.pointer, state2.camera);
    },
    connected: void 0,
    handlers: Object.keys(DOM_EVENTS).reduce((acc, key) => ({
      ...acc,
      [key]: handlePointer(key)
    }), {}),
    update: () => {
      var _internal$lastEvent;
      const {
        events,
        internal
      } = store.getState();
      if ((_internal$lastEvent = internal.lastEvent) != null && _internal$lastEvent.current && events.handlers) events.handlers.onPointerMove(internal.lastEvent.current);
    },
    connect: (target) => {
      const {
        set,
        events
      } = store.getState();
      events.disconnect == null ? void 0 : events.disconnect();
      set((state2) => ({
        events: {
          ...state2.events,
          connected: target
        }
      }));
      if (events.handlers) {
        for (const name in events.handlers) {
          const event = events.handlers[name];
          const [eventName, passive] = DOM_EVENTS[name];
          target.addEventListener(eventName, event, {
            passive
          });
        }
      }
    },
    disconnect: () => {
      const {
        set,
        events
      } = store.getState();
      if (events.connected) {
        if (events.handlers) {
          for (const name in events.handlers) {
            const event = events.handlers[name];
            const [eventName] = DOM_EVENTS[name];
            events.connected.removeEventListener(eventName, event);
          }
        }
        set((state2) => ({
          events: {
            ...state2.events,
            connected: void 0
          }
        }));
      }
    }
  };
}

// node_modules/@react-three/fiber/dist/react-three-fiber.esm.js
var React3 = __toESM(require_react());

// node_modules/react-use-measure/dist/index.js
var import_react2 = __toESM(require_react());
function g(n, t) {
  let o2;
  return (...i3) => {
    window.clearTimeout(o2), o2 = window.setTimeout(() => n(...i3), t);
  };
}
function j({ debounce: n, scroll: t, polyfill: o2, offsetSize: i3 } = { debounce: 0, scroll: false, offsetSize: false }) {
  const a2 = o2 || (typeof window == "undefined" ? class {
  } : window.ResizeObserver);
  if (!a2) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
  const [c2, h2] = (0, import_react2.useState)({ left: 0, top: 0, width: 0, height: 0, bottom: 0, right: 0, x: 0, y: 0 }), e = (0, import_react2.useRef)({ element: null, scrollContainers: null, resizeObserver: null, lastBounds: c2, orientationHandler: null }), d = n ? typeof n == "number" ? n : n.scroll : null, f2 = n ? typeof n == "number" ? n : n.resize : null, w = (0, import_react2.useRef)(false);
  (0, import_react2.useEffect)(() => (w.current = true, () => void (w.current = false)));
  const [z, m2, s] = (0, import_react2.useMemo)(() => {
    const r = () => {
      if (!e.current.element) return;
      const { left: y, top: C, width: H, height: O, bottom: S, right: x2, x: B, y: R } = e.current.element.getBoundingClientRect(), l2 = { left: y, top: C, width: H, height: O, bottom: S, right: x2, x: B, y: R };
      e.current.element instanceof HTMLElement && i3 && (l2.height = e.current.element.offsetHeight, l2.width = e.current.element.offsetWidth), Object.freeze(l2), w.current && !D(e.current.lastBounds, l2) && h2(e.current.lastBounds = l2);
    };
    return [r, f2 ? g(r, f2) : r, d ? g(r, d) : r];
  }, [h2, i3, d, f2]);
  function v() {
    e.current.scrollContainers && (e.current.scrollContainers.forEach((r) => r.removeEventListener("scroll", s, true)), e.current.scrollContainers = null), e.current.resizeObserver && (e.current.resizeObserver.disconnect(), e.current.resizeObserver = null), e.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", e.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", e.current.orientationHandler));
  }
  function b2() {
    e.current.element && (e.current.resizeObserver = new a2(s), e.current.resizeObserver.observe(e.current.element), t && e.current.scrollContainers && e.current.scrollContainers.forEach((r) => r.addEventListener("scroll", s, { capture: true, passive: true })), e.current.orientationHandler = () => {
      s();
    }, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", e.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", e.current.orientationHandler));
  }
  const L = (r) => {
    !r || r === e.current.element || (v(), e.current.element = r, e.current.scrollContainers = E(r), b2());
  };
  return X(s, !!t), W(m2), (0, import_react2.useEffect)(() => {
    v(), b2();
  }, [t, s, m2]), (0, import_react2.useEffect)(() => v, []), [L, c2, z];
}
function W(n) {
  (0, import_react2.useEffect)(() => {
    const t = n;
    return window.addEventListener("resize", t), () => void window.removeEventListener("resize", t);
  }, [n]);
}
function X(n, t) {
  (0, import_react2.useEffect)(() => {
    if (t) {
      const o2 = n;
      return window.addEventListener("scroll", o2, { capture: true, passive: true }), () => void window.removeEventListener("scroll", o2, true);
    }
  }, [n, t]);
}
function E(n) {
  const t = [];
  if (!n || n === document.body) return t;
  const { overflow: o2, overflowX: i3, overflowY: a2 } = window.getComputedStyle(n);
  return [o2, i3, a2].some((c2) => c2 === "auto" || c2 === "scroll") && t.push(n), [...t, ...E(n.parentElement)];
}
var k = ["x", "y", "top", "bottom", "left", "right", "width", "height"];
var D = (n, t) => k.every((o2) => n[o2] === t[o2]);

// node_modules/@react-three/fiber/dist/react-three-fiber.esm.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var import_constants2 = __toESM(require_constants());
var import_react_reconciler2 = __toESM(require_react_reconciler());
var import_scheduler2 = __toESM(require_scheduler2());
function CanvasImpl({
  ref,
  children,
  fallback,
  resize,
  style,
  gl,
  events = createPointerEvents,
  eventSource,
  eventPrefix,
  shadows,
  linear,
  flat,
  legacy,
  orthographic,
  frameloop,
  dpr,
  performance: performance2,
  raycaster,
  camera,
  scene,
  onPointerMissed,
  onCreated,
  ...props
}) {
  React3.useMemo(() => extend(three_module_exports), []);
  const Bridge = useBridge();
  const [containerRef, containerRect] = j({
    scroll: true,
    debounce: {
      scroll: 50,
      resize: 0
    },
    ...resize
  });
  const canvasRef = React3.useRef(null);
  const divRef = React3.useRef(null);
  React3.useImperativeHandle(ref, () => canvasRef.current);
  const handlePointerMissed = useMutableCallback(onPointerMissed);
  const [block, setBlock] = React3.useState(false);
  const [error, setError] = React3.useState(false);
  if (block) throw block;
  if (error) throw error;
  const root = React3.useRef(null);
  useIsomorphicLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (containerRect.width > 0 && containerRect.height > 0 && canvas) {
      if (!root.current) root.current = createRoot(canvas);
      async function run2() {
        await root.current.configure({
          gl,
          scene,
          events,
          shadows,
          linear,
          flat,
          legacy,
          orthographic,
          frameloop,
          dpr,
          performance: performance2,
          raycaster,
          camera,
          size: containerRect,
          // Pass mutable reference to onPointerMissed so it's free to update
          onPointerMissed: (...args) => handlePointerMissed.current == null ? void 0 : handlePointerMissed.current(...args),
          onCreated: (state2) => {
            state2.events.connect == null ? void 0 : state2.events.connect(eventSource ? isRef(eventSource) ? eventSource.current : eventSource : divRef.current);
            if (eventPrefix) {
              state2.setEvents({
                compute: (event, state3) => {
                  const x2 = event[eventPrefix + "X"];
                  const y = event[eventPrefix + "Y"];
                  state3.pointer.set(x2 / state3.size.width * 2 - 1, -(y / state3.size.height) * 2 + 1);
                  state3.raycaster.setFromCamera(state3.pointer, state3.camera);
                }
              });
            }
            onCreated == null ? void 0 : onCreated(state2);
          }
        });
        root.current.render((0, import_jsx_runtime2.jsx)(Bridge, {
          children: (0, import_jsx_runtime2.jsx)(ErrorBoundary, {
            set: setError,
            children: (0, import_jsx_runtime2.jsx)(React3.Suspense, {
              fallback: (0, import_jsx_runtime2.jsx)(Block, {
                set: setBlock
              }),
              children: children != null ? children : null
            })
          })
        }));
      }
      run2();
    }
  });
  React3.useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) return () => unmountComponentAtNode(canvas);
  }, []);
  const pointerEvents = eventSource ? "none" : "auto";
  return (0, import_jsx_runtime2.jsx)("div", {
    ref: divRef,
    style: {
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      pointerEvents,
      ...style
    },
    ...props,
    children: (0, import_jsx_runtime2.jsx)("div", {
      ref: containerRef,
      style: {
        width: "100%",
        height: "100%"
      },
      children: (0, import_jsx_runtime2.jsx)("canvas", {
        ref: canvasRef,
        style: {
          display: "block"
        },
        children: fallback
      })
    })
  });
}
function Canvas(props) {
  return (0, import_jsx_runtime2.jsx)(m, {
    children: (0, import_jsx_runtime2.jsx)(CanvasImpl, {
      ...props
    })
  });
}

export {
  require_with_selector,
  createStore,
  suspend,
  preload,
  clear,
  threeTypes,
  act2 as act,
  getRootState,
  buildGraph,
  dispose,
  applyProps,
  createEvents,
  context,
  useInstanceHandle,
  useStore,
  useThree,
  useFrame,
  useGraph,
  useLoader,
  extend,
  reconciler,
  _roots,
  createRoot,
  unmountComponentAtNode,
  createPortal,
  flushSync,
  addEffect,
  addAfterEffect,
  addTail,
  flushGlobalEffects,
  invalidate,
  advance,
  createPointerEvents,
  Canvas
};
/*! Bundled license information:

react-reconciler/cjs/react-reconciler-constants.development.js:
  (**
   * @license React
   * react-reconciler-constants.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim.development.js:
  (**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.development.js:
scheduler/cjs/scheduler.development.js:
  (**
   * @license React
   * scheduler.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-reconciler/cjs/react-reconciler.development.js:
  (**
   * @license React
   * react-reconciler.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=chunk-NCIMZQ56.js.map
