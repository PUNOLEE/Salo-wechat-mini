'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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
      animationData: {}
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Salo, [{
    key: 'onLoad',
    value: function onLoad() {
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

exports.default = Salo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlNhbG8iLCJkYXRhIiwiYW5pbWF0aW9uRGF0YSIsImFuaW1hdGlvbiIsInd4IiwiY3JlYXRlQW5pbWF0aW9uIiwiZHVyYXRpb24iLCJ0aW1pbmdGdW5jdGlvbiIsInNldERhdGEiLCJleHBvcnQiLCJzZXRUaW1lb3V0IiwiYmluZCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFDbUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNqQkMsSSxHQUFPO0FBQ0xDLHFCQUFlO0FBRFYsSzs7Ozs7NkJBR0U7QUFDUCxVQUFJQyxZQUFZQyxHQUFHQyxlQUFILENBQW1CO0FBQ2pDQyxrQkFBVSxJQUR1QjtBQUVqQ0Msd0JBQWdCO0FBRmlCLE9BQW5CLENBQWhCO0FBSUEsV0FBS0osU0FBTCxHQUFpQkEsU0FBakI7O0FBRUE7O0FBRUEsV0FBS0ssT0FBTCxDQUFhO0FBQ1hOLHVCQUFlQyxVQUFVTSxNQUFWO0FBREosT0FBYjs7QUFJQUMsaUJBQVcsWUFBVztBQUNwQjtBQUNBLGFBQUtGLE9BQUwsQ0FBYTtBQUNYTix5QkFBZUMsVUFBVU0sTUFBVjtBQURKLFNBQWI7QUFHRCxPQUxVLENBS1RFLElBTFMsQ0FLSixJQUxJLENBQVgsRUFLYyxJQUxkO0FBTUQ7Ozs7RUF2QjZCLGVBQUtDLEk7O2tCQUFsQlosSSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhbG8gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgYW5pbWF0aW9uRGF0YToge31cclxuICAgIH1cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgdmFyIGFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XHJcbiAgICAgICAgZHVyYXRpb246IDEwMDAsXHJcbiAgICAgICAgdGltaW5nRnVuY3Rpb246ICdlYXNlLWluJ1xyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLmFuaW1hdGlvbiA9IGFuaW1hdGlvblxyXG5cclxuICAgICAgLy8gYW5pbWF0aW9uLnNjYWxlKDIsIDIpLnJvdGF0ZSg0NSkuc3RlcCgpXHJcblxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGFuaW1hdGlvbkRhdGE6IGFuaW1hdGlvbi5leHBvcnQoKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBhbmltYXRpb24udHJhbnNsYXRlKDMwKS5zdGVwKClcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgYW5pbWF0aW9uRGF0YTogYW5pbWF0aW9uLmV4cG9ydCgpXHJcbiAgICAgICAgfSlcclxuICAgICAgfS5iaW5kKHRoaXMpLCAxMDAwKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==