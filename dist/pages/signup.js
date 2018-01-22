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
      formSubmit: function formSubmit(e) {
        if (e.detail.value.phone.length === 0 || e.detail.value.password.length === 0) {
          var promise = this.$invoke('toast', 'show', {
            title: '手机号码或密码不得为空!',
            img: 'https://raw.githubusercontent.com/kiinlam/wetoast/master/images/star.png'
          });

          promise.then(function (d) {
            console.log('toast done');
          });
        } else if (e.detail.value.password !== e.detail.value.repassword) {
          var _promise = this.$invoke('toast', 'show', {
            title: '两次密码输入不一致!',
            img: 'https://raw.githubusercontent.com/kiinlam/wetoast/master/images/star.png'
          });

          _promise.then(function (d) {
            console.log('toast done');
          });
        } else {
          console.log('success');

          // wepy.request({

          // })
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return signup;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(signup , 'pages/signup'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5qcyJdLCJuYW1lcyI6WyJzaWdudXAiLCJjb21wb25lbnRzIiwidG9hc3QiLCJtZXRob2RzIiwiZm9ybVN1Ym1pdCIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsInBob25lIiwibGVuZ3RoIiwicGFzc3dvcmQiLCJwcm9taXNlIiwiJGludm9rZSIsInRpdGxlIiwiaW1nIiwidGhlbiIsImQiLCJjb25zb2xlIiwibG9nIiwicmVwYXNzd29yZCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsVSxHQUFhO0FBQ1hDO0FBRFcsSyxRQUdiQyxPLEdBQVU7QUFDUkMsa0JBQVksb0JBQVNDLENBQVQsRUFBWTtBQUN0QixZQUFJQSxFQUFFQyxNQUFGLENBQVNDLEtBQVQsQ0FBZUMsS0FBZixDQUFxQkMsTUFBckIsS0FBZ0MsQ0FBaEMsSUFBcUNKLEVBQUVDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlRyxRQUFmLENBQXdCRCxNQUF4QixLQUFtQyxDQUE1RSxFQUErRTtBQUM3RSxjQUFJRSxVQUFVLEtBQUtDLE9BQUwsQ0FBYSxPQUFiLEVBQXNCLE1BQXRCLEVBQThCO0FBQzFDQyxtQkFBTyxjQURtQztBQUUxQ0MsaUJBQUs7QUFGcUMsV0FBOUIsQ0FBZDs7QUFLQUgsa0JBQVFJLElBQVIsQ0FBYSxVQUFDQyxDQUFELEVBQU87QUFDbEJDLG9CQUFRQyxHQUFSLENBQVksWUFBWjtBQUNELFdBRkQ7QUFHRCxTQVRELE1BU08sSUFBSWIsRUFBRUMsTUFBRixDQUFTQyxLQUFULENBQWVHLFFBQWYsS0FBNEJMLEVBQUVDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlWSxVQUEvQyxFQUEyRDtBQUNoRSxjQUFJUixXQUFVLEtBQUtDLE9BQUwsQ0FBYSxPQUFiLEVBQXNCLE1BQXRCLEVBQThCO0FBQzFDQyxtQkFBTyxZQURtQztBQUUxQ0MsaUJBQUs7QUFGcUMsV0FBOUIsQ0FBZDs7QUFLQUgsbUJBQVFJLElBQVIsQ0FBYSxVQUFDQyxDQUFELEVBQU87QUFDbEJDLG9CQUFRQyxHQUFSLENBQVksWUFBWjtBQUNELFdBRkQ7QUFHRCxTQVRNLE1BU0E7QUFDTEQsa0JBQVFDLEdBQVIsQ0FBWSxTQUFaOztBQUVBOztBQUVBO0FBQ0Q7QUFDRjtBQTNCTyxLOzs7O0VBSndCLGVBQUtFLEk7O2tCQUFwQnBCLE0iLCJmaWxlIjoic2lnbnVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzaWdudXAgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb21wb25lbnRzID0ge1xuICAgIHRvYXN0OiBUb2FzdFxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgZm9ybVN1Ym1pdDogZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKGUuZGV0YWlsLnZhbHVlLnBob25lLmxlbmd0aCA9PT0gMCB8fCBlLmRldGFpbC52YWx1ZS5wYXNzd29yZC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbGV0IHByb21pc2UgPSB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3cnLCB7XG4gICAgICAgICAgdGl0bGU6ICfmiYvmnLrlj7fnoIHmiJblr4bnoIHkuI3lvpfkuLrnqbohJyxcbiAgICAgICAgICBpbWc6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20va2lpbmxhbS93ZXRvYXN0L21hc3Rlci9pbWFnZXMvc3Rhci5wbmcnXG4gICAgICAgIH0pXG5cbiAgICAgICAgcHJvbWlzZS50aGVuKChkKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3RvYXN0IGRvbmUnKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmIChlLmRldGFpbC52YWx1ZS5wYXNzd29yZCAhPT0gZS5kZXRhaWwudmFsdWUucmVwYXNzd29yZCkge1xuICAgICAgICBsZXQgcHJvbWlzZSA9IHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvdycsIHtcbiAgICAgICAgICB0aXRsZTogJ+S4pOasoeWvhueggei+k+WFpeS4jeS4gOiHtCEnLFxuICAgICAgICAgIGltZzogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9raWlubGFtL3dldG9hc3QvbWFzdGVyL2ltYWdlcy9zdGFyLnBuZydcbiAgICAgICAgfSlcblxuICAgICAgICBwcm9taXNlLnRoZW4oKGQpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygndG9hc3QgZG9uZScpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycpXG5cbiAgICAgICAgLy8gd2VweS5yZXF1ZXN0KHtcblxuICAgICAgICAvLyB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19