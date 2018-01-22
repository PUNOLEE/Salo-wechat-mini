'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var signup = function (_wepy$page) {
  _inherits(signup, _wepy$page);

  function signup() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, signup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = signup.__proto__ || Object.getPrototypeOf(signup)).call.apply(_ref, [this].concat(args))), _this), _this.components = {
      toast: _wepyComToast2.default
    }, _this.methods = {
      formSubmit: function formSubmit(e) {}
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return signup;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(signup , 'pages/signup'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5qcyJdLCJuYW1lcyI6WyJzaWdudXAiLCJjb21wb25lbnRzIiwidG9hc3QiLCJtZXRob2RzIiwiZm9ybVN1Ym1pdCIsImUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLFUsR0FBYTtBQUNYQztBQURXLEssUUFHYkMsTyxHQUFVO0FBQ1JDLGtCQUFZLG9CQUFTQyxDQUFULEVBQVksQ0FFdkI7QUFITyxLOzs7O0VBSndCLGVBQUtDLEk7O2tCQUFwQk4sTSIsImZpbGUiOiJzaWdudXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2lnbnVwIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb21wb25lbnRzID0ge1xyXG4gICAgdG9hc3Q6IFRvYXN0XHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBmb3JtU3VibWl0OiBmdW5jdGlvbihlKSB7XHJcblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=