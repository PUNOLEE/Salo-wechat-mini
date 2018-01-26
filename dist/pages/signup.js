'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

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
      tip: '',
      type: 0,
      hidden: true
    }, _this.components = {}, _this.methods = {
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
      },
      question: function question() {
        this.hidden = !this.hidden;
        console.log(this.hidden);
      },
      close: function close() {
        this.hidden = true;
        console.log(this.hidden);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(signup, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.hidden = true;
      this.type = options.ty;
      console.log(this.type);
    }
  }]);

  return signup;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(signup , 'pages/signup'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5qcyJdLCJuYW1lcyI6WyJzaWdudXAiLCJkYXRhIiwidGlwIiwidHlwZSIsImhpZGRlbiIsImNvbXBvbmVudHMiLCJtZXRob2RzIiwiZm9ybVN1Ym1pdCIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImFjY291bnRfaWQiLCJsZW5ndGgiLCJpZGtleSIsInBhc3N3b3JkIiwicGhvbmUiLCJyZXBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsInd4IiwicmVkaXJlY3RUbyIsInVybCIsInF1ZXN0aW9uIiwiY2xvc2UiLCJvcHRpb25zIiwidHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsWUFBTSxDQUZEO0FBR0xDLGNBQVE7QUFISCxLLFFBS1BDLFUsR0FBYSxFLFFBRWJDLE8sR0FBVTtBQUNSQyxrQkFBWSxvQkFBU0MsQ0FBVCxFQUFZO0FBQ3RCLFlBQUlBLEVBQUVDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlQyxVQUFmLENBQTBCQyxNQUExQixLQUFxQyxDQUFyQyxJQUEwQ0osRUFBRUMsTUFBRixDQUFTQyxLQUFULENBQWVHLEtBQWYsQ0FBcUJELE1BQXJCLEtBQWdDLENBQTFFLElBQStFSixFQUFFQyxNQUFGLENBQVNDLEtBQVQsQ0FBZUksUUFBZixDQUF3QkYsTUFBeEIsS0FBbUMsQ0FBdEgsRUFBeUg7QUFDdkgsZUFBS1YsR0FBTCxHQUFXLG1CQUFYO0FBQ0QsU0FGRCxNQUVPLElBQUlNLEVBQUVDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlSyxLQUFmLENBQXFCSCxNQUFyQixLQUFnQyxDQUFwQyxFQUF1QztBQUM1QyxlQUFLVixHQUFMLEdBQVcsVUFBWDtBQUNELFNBRk0sTUFFQSxJQUFJTSxFQUFFQyxNQUFGLENBQVNDLEtBQVQsQ0FBZUksUUFBZixLQUE0Qk4sRUFBRUMsTUFBRixDQUFTQyxLQUFULENBQWVNLFVBQS9DLEVBQTJEO0FBQ2hFLGVBQUtkLEdBQUwsR0FBVyxXQUFYO0FBQ0QsU0FGTSxNQUVBO0FBQ0w7QUFDQSxlQUFLQSxHQUFMLEdBQVcsRUFBWDtBQUNBZSxrQkFBUUMsR0FBUixDQUFZLElBQVo7QUFDQTtBQUNBQyxhQUFHQyxVQUFILENBQWM7QUFDWkMsaUJBQUssY0FBY2IsRUFBRUMsTUFBRixDQUFTQyxLQUFULENBQWVDO0FBRHRCLFdBQWQ7QUFHRDtBQUNGLE9BakJPO0FBa0JSVyxnQkFBVSxvQkFBVztBQUNuQixhQUFLbEIsTUFBTCxHQUFjLENBQUMsS0FBS0EsTUFBcEI7QUFDQWEsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFLZCxNQUFqQjtBQUNELE9BckJPO0FBc0JSbUIsYUFBTyxpQkFBVztBQUNoQixhQUFLbkIsTUFBTCxHQUFjLElBQWQ7QUFDQWEsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFLZCxNQUFqQjtBQUNEO0FBekJPLEs7Ozs7OzJCQTJCSG9CLE8sRUFBUztBQUNkLFdBQUtwQixNQUFMLEdBQWMsSUFBZDtBQUNBLFdBQUtELElBQUwsR0FBWXFCLFFBQVFDLEVBQXBCO0FBQ0FSLGNBQVFDLEdBQVIsQ0FBWSxLQUFLZixJQUFqQjtBQUNEOzs7O0VBdkNpQyxlQUFLdUIsSTs7a0JBQXBCMUIsTSIsImZpbGUiOiJzaWdudXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNpZ251cCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGRhdGEgPSB7XG4gICAgdGlwOiAnJyxcbiAgICB0eXBlOiAwLFxuICAgIGhpZGRlbjogdHJ1ZVxuICB9XG4gIGNvbXBvbmVudHMgPSB7XG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBmb3JtU3VibWl0OiBmdW5jdGlvbihlKSB7XG4gICAgICBpZiAoZS5kZXRhaWwudmFsdWUuYWNjb3VudF9pZC5sZW5ndGggPT09IDAgfHwgZS5kZXRhaWwudmFsdWUuaWRrZXkubGVuZ3RoID09PSAwIHx8IGUuZGV0YWlsLnZhbHVlLnBhc3N3b3JkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLnRpcCA9ICfotKblj7flkI3jgIFJREtFWeWSjOWvhueggeS4jeiDveS4uuepuu+8gSdcbiAgICAgIH0gZWxzZSBpZiAoZS5kZXRhaWwudmFsdWUucGhvbmUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMudGlwID0gJ+aJi+acuuWPt+S4jeiDveS4uuepuu+8gSdcbiAgICAgIH0gZWxzZSBpZiAoZS5kZXRhaWwudmFsdWUucGFzc3dvcmQgIT09IGUuZGV0YWlsLnZhbHVlLnJlcGFzc3dvcmQpIHtcbiAgICAgICAgdGhpcy50aXAgPSAn5Lik5qyh6L6T5YWl5a+G56CB5LiN5ZCM77yBJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g6aqM6K+B56CB6aqM6K+BXG4gICAgICAgIHRoaXMudGlwID0gJydcbiAgICAgICAgY29uc29sZS5sb2coJ+aIkOWKnycpXG4gICAgICAgIC8vIHJlcXVlc3QgKyBpZGtleSDpqozor4FcbiAgICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgICAgdXJsOiAndGFncz9hY2M9JyArIGUuZGV0YWlsLnZhbHVlLmFjY291bnRfaWRcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIHF1ZXN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuaGlkZGVuID0gIXRoaXMuaGlkZGVuXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmhpZGRlbilcbiAgICB9LFxuICAgIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuaGlkZGVuID0gdHJ1ZVxuICAgICAgY29uc29sZS5sb2codGhpcy5oaWRkZW4pXG4gICAgfVxuICB9XG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgdGhpcy5oaWRkZW4gPSB0cnVlXG4gICAgdGhpcy50eXBlID0gb3B0aW9ucy50eVxuICAgIGNvbnNvbGUubG9nKHRoaXMudHlwZSlcbiAgfVxufVxuIl19