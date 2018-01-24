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

var GroupItem = function (_wepy$component) {
  _inherits(GroupItem, _wepy$component);

  function GroupItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GroupItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GroupItem.__proto__ || Object.getPrototypeOf(GroupItem)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      x: {}
      // data = {
      // }
      // methods = {
      //   tap () {
      //     this.gitem.childname = `Child Random(${Math.random()})`
      //     console.log(`Clicked Group ${this.$parent.$index}. Item ${this.$index}, ID is ${this.gitem.childid}`)
      //   }
      // }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GroupItem, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log(this.gitem);
    }
  }]);

  return GroupItem;
}(_wepy2.default.component);

exports.default = GroupItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwaXRlbS5qcyJdLCJuYW1lcyI6WyJHcm91cEl0ZW0iLCJwcm9wcyIsIngiLCJjb25zb2xlIiwibG9nIiwiZ2l0ZW0iLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsSyxHQUFRO0FBQ05DLFNBQUc7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVlEsSzs7Ozs7NkJBV0M7QUFDUEMsY0FBUUMsR0FBUixDQUFZLEtBQUtDLEtBQWpCO0FBQ0Q7Ozs7RUFkb0MsZUFBS0MsUzs7a0JBQXZCTixTIiwiZmlsZSI6Imdyb3VwaXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyb3VwSXRlbSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIHByb3BzID0ge1xyXG4gICAgICB4OiB7fVxyXG4gICAgfVxyXG4gICAgLy8gZGF0YSA9IHtcclxuICAgIC8vIH1cclxuICAgIC8vIG1ldGhvZHMgPSB7XHJcbiAgICAvLyAgIHRhcCAoKSB7XHJcbiAgICAvLyAgICAgdGhpcy5naXRlbS5jaGlsZG5hbWUgPSBgQ2hpbGQgUmFuZG9tKCR7TWF0aC5yYW5kb20oKX0pYFxyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGBDbGlja2VkIEdyb3VwICR7dGhpcy4kcGFyZW50LiRpbmRleH0uIEl0ZW0gJHt0aGlzLiRpbmRleH0sIElEIGlzICR7dGhpcy5naXRlbS5jaGlsZGlkfWApXHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH1cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5naXRlbSlcclxuICAgIH1cclxufVxyXG4iXX0=