"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Wrapper = _styledComponents.default.div`
    display: flex;
    margin: 16px;
`;
const Label = (0, _styledComponents.default)('label')`
    margin-right: 10px;
    font-weight: bold;
    width: ${({
  labelWidth = 100
}) => labelWidth}px;
    color: blue;
`;
const NativeInput = _styledComponents.default.input`
    width: 100%;
    padding: 1rem;
`;

const Input = ({
  label,
  id,
  labelWidth,
  ...rest
}) => React.createElement(Wrapper, null, label && React.createElement(Label, {
  labelWidth: labelWidth,
  htmlFor: id
}, label, ":"), React.createElement(NativeInput, _extends({
  id: id
}, rest)));

exports.Input = Input;
Input.defaultProps = {
  type: 'text'
};
//# sourceMappingURL=Input.js.map