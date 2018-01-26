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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = signup.__proto__ || Object.getPrototypeOf(signup)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      tip: ''
    }, _this.components = {
      toast: _wepyComToast2.default
    }, _this.methods = {
      formSubmit: function formSubmit(e) {
        if (e.detail.value.account_id.length === 0 || e.detail.value.idkey.length === 0 || e.detail.value.password.length === 0) {
          this.tip = '账号名、IDKEY和密码不能为空！';
        } else if (e.detail.value.phone.length === 0) {
          this.tip = '手机号不能为空！';
        } else if (e.detail.value.password !== e.detail.value.repassword) {
          this.tip = '两次输入密码不同！';
        } else {
          // 验证码验证
          this.tip = '';
          console.log('成功');
          // request + idkey 验证
          wx.redirectTo({
            url: 'tags?acc=' + e.detail.value.account_id
          });
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return signup;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(signup , 'pages/signup'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5qcyJdLCJuYW1lcyI6WyJzaWdudXAiLCJkYXRhIiwidGlwIiwiY29tcG9uZW50cyIsInRvYXN0IiwibWV0aG9kcyIsImZvcm1TdWJtaXQiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJhY2NvdW50X2lkIiwibGVuZ3RoIiwiaWRrZXkiLCJwYXNzd29yZCIsInBob25lIiwicmVwYXNzd29yZCIsImNvbnNvbGUiLCJsb2ciLCJ3eCIsInJlZGlyZWN0VG8iLCJ1cmwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLEksR0FBTztBQUNMQyxXQUFLO0FBREEsSyxRQUdQQyxVLEdBQWE7QUFDWEM7QUFEVyxLLFFBR2JDLE8sR0FBVTtBQUNSQyxrQkFBWSxvQkFBU0MsQ0FBVCxFQUFZO0FBQ3RCLFlBQUlBLEVBQUVDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlQyxVQUFmLENBQTBCQyxNQUExQixLQUFxQyxDQUFyQyxJQUEwQ0osRUFBRUMsTUFBRixDQUFTQyxLQUFULENBQWVHLEtBQWYsQ0FBcUJELE1BQXJCLEtBQWdDLENBQTFFLElBQStFSixFQUFFQyxNQUFGLENBQVNDLEtBQVQsQ0FBZUksUUFBZixDQUF3QkYsTUFBeEIsS0FBbUMsQ0FBdEgsRUFBeUg7QUFDdkgsZUFBS1QsR0FBTCxHQUFXLG1CQUFYO0FBQ0QsU0FGRCxNQUVPLElBQUlLLEVBQUVDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlSyxLQUFmLENBQXFCSCxNQUFyQixLQUFnQyxDQUFwQyxFQUF1QztBQUM1QyxlQUFLVCxHQUFMLEdBQVcsVUFBWDtBQUNELFNBRk0sTUFFQSxJQUFJSyxFQUFFQyxNQUFGLENBQVNDLEtBQVQsQ0FBZUksUUFBZixLQUE0Qk4sRUFBRUMsTUFBRixDQUFTQyxLQUFULENBQWVNLFVBQS9DLEVBQTJEO0FBQ2hFLGVBQUtiLEdBQUwsR0FBVyxXQUFYO0FBQ0QsU0FGTSxNQUVBO0FBQ0w7QUFDQSxlQUFLQSxHQUFMLEdBQVcsRUFBWDtBQUNBYyxrQkFBUUMsR0FBUixDQUFZLElBQVo7QUFDQTtBQUNBQyxhQUFHQyxVQUFILENBQWM7QUFDWkMsaUJBQUssY0FBY2IsRUFBRUMsTUFBRixDQUFTQyxLQUFULENBQWVDO0FBRHRCLFdBQWQ7QUFHRDtBQUNGO0FBakJPLEs7Ozs7RUFQd0IsZUFBS1csSTs7a0JBQXBCckIsTSIsImZpbGUiOiJzaWdudXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNpZ251cCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGRhdGEgPSB7XG4gICAgdGlwOiAnJ1xuICB9XG4gIGNvbXBvbmVudHMgPSB7XG4gICAgdG9hc3Q6IFRvYXN0XG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBmb3JtU3VibWl0OiBmdW5jdGlvbihlKSB7XG4gICAgICBpZiAoZS5kZXRhaWwudmFsdWUuYWNjb3VudF9pZC5sZW5ndGggPT09IDAgfHwgZS5kZXRhaWwudmFsdWUuaWRrZXkubGVuZ3RoID09PSAwIHx8IGUuZGV0YWlsLnZhbHVlLnBhc3N3b3JkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLnRpcCA9ICfotKblj7flkI3jgIFJREtFWeWSjOWvhueggeS4jeiDveS4uuepuu+8gSdcbiAgICAgIH0gZWxzZSBpZiAoZS5kZXRhaWwudmFsdWUucGhvbmUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMudGlwID0gJ+aJi+acuuWPt+S4jeiDveS4uuepuu+8gSdcbiAgICAgIH0gZWxzZSBpZiAoZS5kZXRhaWwudmFsdWUucGFzc3dvcmQgIT09IGUuZGV0YWlsLnZhbHVlLnJlcGFzc3dvcmQpIHtcbiAgICAgICAgdGhpcy50aXAgPSAn5Lik5qyh6L6T5YWl5a+G56CB5LiN5ZCM77yBJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g6aqM6K+B56CB6aqM6K+BXG4gICAgICAgIHRoaXMudGlwID0gJydcbiAgICAgICAgY29uc29sZS5sb2coJ+aIkOWKnycpXG4gICAgICAgIC8vIHJlcXVlc3QgKyBpZGtleSDpqozor4FcbiAgICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgICAgdXJsOiAndGFncz9hY2M9JyArIGUuZGV0YWlsLnZhbHVlLmFjY291bnRfaWRcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==