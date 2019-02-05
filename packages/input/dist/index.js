"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _label = _interopRequireDefault(require("@lerna-test/label"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Input = function Input(_ref) {
  var className = _ref.className,
      type = _ref.type;
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_label.default, null, "My Input"), _react.default.createElement("input", {
    className: "gz-input ".concat(className),
    type: type
  }));
};

var _default = Input;
exports.default = _default;