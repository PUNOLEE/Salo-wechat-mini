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

var Salo = function (_wepy$page) {
  _inherits(Salo, _wepy$page);

  function Salo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Salo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Salo.__proto__ || Object.getPrototypeOf(Salo)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      animationData: {},
      code: ''
    }, _this.components = {}, _this.methods = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Salo, [{
    key: 'onLoad',
    value: function onLoad() {
      var header = this.$parent.globalData.header;
      wx.login({
        success: function success(res) {
          this.code = res.code;
          if (res.code) {
            wx.request({
              url: 'http://localhost:8080/login',
              header: header,
              data: {
                code: this.code
              },
              success: function success(res) {
                header.Cookie = res.data.payload;

                // getApp().globalData.header.Cookie = 'JSESSIONID=' + res.data
                // wx.getStorage({
                //   key: 'session',
                //   success: function(res) {
                //     console.log(res.data)
                //   }
                // })
              }
            });
          } else {
            // console.log('请注册！')
          }
        }
      });
      var animation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'ease-in'
      });
      this.animation = animation;

      // animation.scale(2, 2).rotate(45).step()

      this.setData({
        animationData: animation.export()
      });

      setTimeout(function () {
        // animation.translate(30).step()
        this.setData({
          animationData: animation.export()
        });
      }.bind(this), 1000);
    }
  }]);

  return Salo;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Salo , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlNhbG8iLCJkYXRhIiwiYW5pbWF0aW9uRGF0YSIsImNvZGUiLCJjb21wb25lbnRzIiwibWV0aG9kcyIsImNvbXB1dGVkIiwiaGVhZGVyIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ3eCIsImxvZ2luIiwic3VjY2VzcyIsInJlcyIsInJlcXVlc3QiLCJ1cmwiLCJDb29raWUiLCJwYXlsb2FkIiwiYW5pbWF0aW9uIiwiY3JlYXRlQW5pbWF0aW9uIiwiZHVyYXRpb24iLCJ0aW1pbmdGdW5jdGlvbiIsInNldERhdGEiLCJleHBvcnQiLCJzZXRUaW1lb3V0IiwiYmluZCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFbUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNqQkMsSSxHQUFPO0FBQ0xDLHFCQUFlLEVBRFY7QUFFTEMsWUFBTTtBQUZELEssUUFJUEMsVSxHQUFhLEUsUUFFYkMsTyxHQUFVLEUsUUFHVkMsUSxHQUFXLEU7Ozs7OzZCQUdGO0FBQ1AsVUFBSUMsU0FBUyxLQUFLQyxPQUFMLENBQWFDLFVBQWIsQ0FBd0JGLE1BQXJDO0FBQ0FHLFNBQUdDLEtBQUgsQ0FBUztBQUNQQyxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCLGVBQUtWLElBQUwsR0FBWVUsSUFBSVYsSUFBaEI7QUFDQSxjQUFJVSxJQUFJVixJQUFSLEVBQWM7QUFDWk8sZUFBR0ksT0FBSCxDQUFXO0FBQ1RDLG1CQUFLLDZCQURJO0FBRVRSLHNCQUFRQSxNQUZDO0FBR1ROLG9CQUFNO0FBQ0pFLHNCQUFNLEtBQUtBO0FBRFAsZUFIRztBQU1UUyx1QkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCTix1QkFBT1MsTUFBUCxHQUFnQkgsSUFBSVosSUFBSixDQUFTZ0IsT0FBekI7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQztBQWhCUSxhQUFYO0FBa0JELFdBbkJELE1BbUJPO0FBQ0w7QUFDRDtBQUNGO0FBekJNLE9BQVQ7QUEyQkEsVUFBSUMsWUFBWVIsR0FBR1MsZUFBSCxDQUFtQjtBQUNqQ0Msa0JBQVUsSUFEdUI7QUFFakNDLHdCQUFnQjtBQUZpQixPQUFuQixDQUFoQjtBQUlBLFdBQUtILFNBQUwsR0FBaUJBLFNBQWpCOztBQUVBOztBQUVBLFdBQUtJLE9BQUwsQ0FBYTtBQUNYcEIsdUJBQWVnQixVQUFVSyxNQUFWO0FBREosT0FBYjs7QUFJQUMsaUJBQVcsWUFBVztBQUNwQjtBQUNBLGFBQUtGLE9BQUwsQ0FBYTtBQUNYcEIseUJBQWVnQixVQUFVSyxNQUFWO0FBREosU0FBYjtBQUdELE9BTFUsQ0FLVEUsSUFMUyxDQUtKLElBTEksQ0FBWCxFQUtjLElBTGQ7QUFNRDs7OztFQTVENkIsZUFBS0MsSTs7a0JBQWxCMUIsSSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTYWxvIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBkYXRhID0ge1xuICAgICAgYW5pbWF0aW9uRGF0YToge30sXG4gICAgICBjb2RlOiAnJ1xuICAgIH1cbiAgICBjb21wb25lbnRzID0ge1xuICAgIH1cbiAgICBtZXRob2RzID0ge1xuXG4gICAgfVxuICAgIGNvbXB1dGVkID0ge1xuICBcbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgICAgdmFyIGhlYWRlciA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmhlYWRlclxuICAgICAgd3gubG9naW4oe1xuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICB0aGlzLmNvZGUgPSByZXMuY29kZVxuICAgICAgICAgIGlmIChyZXMuY29kZSkge1xuICAgICAgICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9sb2dpbicsXG4gICAgICAgICAgICAgIGhlYWRlcjogaGVhZGVyLFxuICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgY29kZTogdGhpcy5jb2RlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgIGhlYWRlci5Db29raWUgPSByZXMuZGF0YS5wYXlsb2FkXG4gIFxuICAgICAgICAgICAgICAvLyBnZXRBcHAoKS5nbG9iYWxEYXRhLmhlYWRlci5Db29raWUgPSAnSlNFU1NJT05JRD0nICsgcmVzLmRhdGFcbiAgICAgICAgICAgICAgLy8gd3guZ2V0U3RvcmFnZSh7XG4gICAgICAgICAgICAgIC8vICAga2V5OiAnc2Vzc2lvbicsXG4gICAgICAgICAgICAgIC8vICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcbiAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfor7fms6jlhozvvIEnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHZhciBhbmltYXRpb24gPSB3eC5jcmVhdGVBbmltYXRpb24oe1xuICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgdGltaW5nRnVuY3Rpb246ICdlYXNlLWluJ1xuICAgICAgfSlcbiAgICAgIHRoaXMuYW5pbWF0aW9uID0gYW5pbWF0aW9uXG5cbiAgICAgIC8vIGFuaW1hdGlvbi5zY2FsZSgyLCAyKS5yb3RhdGUoNDUpLnN0ZXAoKVxuXG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBhbmltYXRpb25EYXRhOiBhbmltYXRpb24uZXhwb3J0KClcbiAgICAgIH0pXG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGFuaW1hdGlvbi50cmFuc2xhdGUoMzApLnN0ZXAoKVxuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIGFuaW1hdGlvbkRhdGE6IGFuaW1hdGlvbi5leHBvcnQoKVxuICAgICAgICB9KVxuICAgICAgfS5iaW5kKHRoaXMpLCAxMDAwKVxuICAgIH1cbn1cbiJdfQ==