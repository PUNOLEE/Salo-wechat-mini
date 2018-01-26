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

var tags = function (_wepy$page) {
  _inherits(tags, _wepy$page);

  function tags() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, tags);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = tags.__proto__ || Object.getPrototypeOf(tags)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      tag: [{ 'id': 1, 'name': '杂志', 'add': 'http://punolee.cn/images/w/T3.jpg', 'type': 'unselected' }, { 'id': 2, 'name': '淘宝', 'add': 'http://punolee.cn/images/w/T4.jpg', 'type': 'unselected' }, { 'id': 3, 'name': '日系', 'add': 'http://punolee.cn/images/w/T2.jpg', 'type': 'unselected' }, { 'id': 4, 'name': '妆面', 'add': 'http://punolee.cn/images/w/T7.jpg', 'type': 'unselected' }, { 'id': 5, 'name': '复古', 'add': 'http://punolee.cn/images/w/T1.jpg', 'type': 'unselected' }, { 'id': 6, 'name': '创意', 'add': 'http://punolee.cn/images/w/T6.jpg', 'type': 'unselected' }, { 'id': 7, 'name': '私房', 'add': 'http://punolee.cn/images/w/T8.jpg', 'type': 'unselected' }, { 'id': 8, 'name': '黑白', 'add': 'http://punolee.cn/images/w/T5.jpg', 'type': 'unselected' }, { 'id': 9, 'name': '胶片', 'add': 'http://punolee.cn/images/w/T13.jpg', 'type': 'unselected' }, { 'id': 10, 'name': '人物', 'add': 'http://punolee.cn/images/w/T9.jpg', 'type': 'unselected' }, { 'id': 11, 'name': '旅拍', 'add': 'http://punolee.cn/images/w/T10.jpg', 'type': 'unselected' }, { 'id': 12, 'name': '街拍', 'add': 'http://punolee.cn/images/w/T11.jpg', 'type': 'unselected' }],
      store: [],
      account_name: ''
    }, _this.methods = {
      colorSelect: function colorSelect(e) {
        var ind = parseInt(e.currentTarget.dataset.ind);
        var type = this.data.tag[ind].type;
        var tag = this.data.tag;

        if (type === 'unselected') {
          tag[ind].type = 'selected';
        } else {
          tag[ind].type = 'unselected';
        }

        this.setData({
          tag: tag
        });
        var store = [];
        for (var i = 0; i < tag.length; i++) {
          if (tag[i].type === 'selected') {
            store.push(tag[i].name);
          }
        }
        this.store = store;
        if (this.store.length === 4) {
          // submit form , need id
          wx.redirectTo({
            url: 'home'
          });
        }
      }
    }, _this.computed = {
      counter: function counter() {
        return this.store.length === 0 ? 0 : this.store.length;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(tags, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.account_name = options.acc;
    }
  }]);

  return tags;
}(_wepy2.default.page);

exports.default = tags;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhZ3MuanMiXSwibmFtZXMiOlsidGFncyIsImRhdGEiLCJ0YWciLCJzdG9yZSIsImFjY291bnRfbmFtZSIsIm1ldGhvZHMiLCJjb2xvclNlbGVjdCIsImUiLCJpbmQiLCJwYXJzZUludCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidHlwZSIsInNldERhdGEiLCJpIiwibGVuZ3RoIiwicHVzaCIsIm5hbWUiLCJ3eCIsInJlZGlyZWN0VG8iLCJ1cmwiLCJjb21wdXRlZCIsImNvdW50ZXIiLCJvcHRpb25zIiwiYWNjIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxJLEdBQU87QUFDTEMsV0FBSyxDQUNELEVBQUMsTUFBTSxDQUFQLEVBQVUsUUFBUSxJQUFsQixFQUF3QixPQUFPLG1DQUEvQixFQUFvRSxRQUFRLFlBQTVFLEVBREMsRUFFRCxFQUFDLE1BQU0sQ0FBUCxFQUFVLFFBQVEsSUFBbEIsRUFBd0IsT0FBTyxtQ0FBL0IsRUFBb0UsUUFBUSxZQUE1RSxFQUZDLEVBR0QsRUFBQyxNQUFNLENBQVAsRUFBVSxRQUFRLElBQWxCLEVBQXdCLE9BQU8sbUNBQS9CLEVBQW9FLFFBQVEsWUFBNUUsRUFIQyxFQUlELEVBQUMsTUFBTSxDQUFQLEVBQVUsUUFBUSxJQUFsQixFQUF3QixPQUFPLG1DQUEvQixFQUFvRSxRQUFRLFlBQTVFLEVBSkMsRUFLRCxFQUFDLE1BQU0sQ0FBUCxFQUFVLFFBQVEsSUFBbEIsRUFBd0IsT0FBTyxtQ0FBL0IsRUFBb0UsUUFBUSxZQUE1RSxFQUxDLEVBTUQsRUFBQyxNQUFNLENBQVAsRUFBVSxRQUFRLElBQWxCLEVBQXdCLE9BQU8sbUNBQS9CLEVBQW9FLFFBQVEsWUFBNUUsRUFOQyxFQU9ELEVBQUMsTUFBTSxDQUFQLEVBQVUsUUFBUSxJQUFsQixFQUF3QixPQUFPLG1DQUEvQixFQUFvRSxRQUFRLFlBQTVFLEVBUEMsRUFRRCxFQUFDLE1BQU0sQ0FBUCxFQUFVLFFBQVEsSUFBbEIsRUFBd0IsT0FBTyxtQ0FBL0IsRUFBb0UsUUFBUSxZQUE1RSxFQVJDLEVBU0QsRUFBQyxNQUFNLENBQVAsRUFBVSxRQUFRLElBQWxCLEVBQXdCLE9BQU8sb0NBQS9CLEVBQXFFLFFBQVEsWUFBN0UsRUFUQyxFQVVELEVBQUMsTUFBTSxFQUFQLEVBQVcsUUFBUSxJQUFuQixFQUF5QixPQUFPLG1DQUFoQyxFQUFxRSxRQUFRLFlBQTdFLEVBVkMsRUFXRCxFQUFDLE1BQU0sRUFBUCxFQUFXLFFBQVEsSUFBbkIsRUFBeUIsT0FBTyxvQ0FBaEMsRUFBc0UsUUFBUSxZQUE5RSxFQVhDLEVBWUQsRUFBQyxNQUFNLEVBQVAsRUFBVyxRQUFRLElBQW5CLEVBQXlCLE9BQU8sb0NBQWhDLEVBQXNFLFFBQVEsWUFBOUUsRUFaQyxDQURBO0FBZUxDLGFBQU8sRUFmRjtBQWdCTEMsb0JBQWM7QUFoQlQsSyxRQWtCUEMsTyxHQUFVO0FBQ1JDLG1CQUFhLHFCQUFVQyxDQUFWLEVBQWE7QUFDeEIsWUFBSUMsTUFBTUMsU0FBU0YsRUFBRUcsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JILEdBQWpDLENBQVY7QUFDQSxZQUFJSSxPQUFPLEtBQUtYLElBQUwsQ0FBVUMsR0FBVixDQUFjTSxHQUFkLEVBQW1CSSxJQUE5QjtBQUNBLFlBQUlWLE1BQU0sS0FBS0QsSUFBTCxDQUFVQyxHQUFwQjs7QUFFQSxZQUFJVSxTQUFTLFlBQWIsRUFBMkI7QUFDekJWLGNBQUlNLEdBQUosRUFBU0ksSUFBVCxHQUFnQixVQUFoQjtBQUNELFNBRkQsTUFFTztBQUNMVixjQUFJTSxHQUFKLEVBQVNJLElBQVQsR0FBZ0IsWUFBaEI7QUFDRDs7QUFFRCxhQUFLQyxPQUFMLENBQWE7QUFDWFgsZUFBS0E7QUFETSxTQUFiO0FBR0EsWUFBSUMsUUFBUSxFQUFaO0FBQ0EsYUFBSyxJQUFJVyxJQUFJLENBQWIsRUFBZ0JBLElBQUlaLElBQUlhLE1BQXhCLEVBQWdDRCxHQUFoQyxFQUFxQztBQUNuQyxjQUFJWixJQUFJWSxDQUFKLEVBQU9GLElBQVAsS0FBZ0IsVUFBcEIsRUFBZ0M7QUFDOUJULGtCQUFNYSxJQUFOLENBQVdkLElBQUlZLENBQUosRUFBT0csSUFBbEI7QUFDRDtBQUNGO0FBQ0QsYUFBS2QsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsWUFBSSxLQUFLQSxLQUFMLENBQVdZLE1BQVgsS0FBc0IsQ0FBMUIsRUFBNkI7QUFDM0I7QUFDQUcsYUFBR0MsVUFBSCxDQUFjO0FBQ1pDLGlCQUFLO0FBRE8sV0FBZDtBQUdEO0FBQ0Y7QUE1Qk8sSyxRQWlDVkMsUSxHQUFXO0FBQ1RDLGFBRFMscUJBQ0M7QUFDUixlQUFPLEtBQUtuQixLQUFMLENBQVdZLE1BQVgsS0FBc0IsQ0FBdEIsR0FBMEIsQ0FBMUIsR0FBOEIsS0FBS1osS0FBTCxDQUFXWSxNQUFoRDtBQUNEO0FBSFEsSzs7Ozs7MkJBSEpRLE8sRUFBUztBQUNkLFdBQUtuQixZQUFMLEdBQW9CbUIsUUFBUUMsR0FBNUI7QUFDRDs7OztFQW5EK0IsZUFBS0MsSTs7a0JBQWxCekIsSSIsImZpbGUiOiJ0YWdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0YWdzIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgZGF0YSA9IHtcbiAgICB0YWc6IFtcbiAgICAgICAgeydpZCc6IDEsICduYW1lJzogJ+adguW/lycsICdhZGQnOiAnaHR0cDovL3B1bm9sZWUuY24vaW1hZ2VzL3cvVDMuanBnJywgJ3R5cGUnOiAndW5zZWxlY3RlZCd9LFxuICAgICAgICB7J2lkJzogMiwgJ25hbWUnOiAn5reY5a6dJywgJ2FkZCc6ICdodHRwOi8vcHVub2xlZS5jbi9pbWFnZXMvdy9UNC5qcGcnLCAndHlwZSc6ICd1bnNlbGVjdGVkJ30sXG4gICAgICAgIHsnaWQnOiAzLCAnbmFtZSc6ICfml6Xns7snLCAnYWRkJzogJ2h0dHA6Ly9wdW5vbGVlLmNuL2ltYWdlcy93L1QyLmpwZycsICd0eXBlJzogJ3Vuc2VsZWN0ZWQnfSxcbiAgICAgICAgeydpZCc6IDQsICduYW1lJzogJ+WmhumdoicsICdhZGQnOiAnaHR0cDovL3B1bm9sZWUuY24vaW1hZ2VzL3cvVDcuanBnJywgJ3R5cGUnOiAndW5zZWxlY3RlZCd9LFxuICAgICAgICB7J2lkJzogNSwgJ25hbWUnOiAn5aSN5Y+kJywgJ2FkZCc6ICdodHRwOi8vcHVub2xlZS5jbi9pbWFnZXMvdy9UMS5qcGcnLCAndHlwZSc6ICd1bnNlbGVjdGVkJ30sXG4gICAgICAgIHsnaWQnOiA2LCAnbmFtZSc6ICfliJvmhI8nLCAnYWRkJzogJ2h0dHA6Ly9wdW5vbGVlLmNuL2ltYWdlcy93L1Q2LmpwZycsICd0eXBlJzogJ3Vuc2VsZWN0ZWQnfSxcbiAgICAgICAgeydpZCc6IDcsICduYW1lJzogJ+engeaIvycsICdhZGQnOiAnaHR0cDovL3B1bm9sZWUuY24vaW1hZ2VzL3cvVDguanBnJywgJ3R5cGUnOiAndW5zZWxlY3RlZCd9LFxuICAgICAgICB7J2lkJzogOCwgJ25hbWUnOiAn6buR55m9JywgJ2FkZCc6ICdodHRwOi8vcHVub2xlZS5jbi9pbWFnZXMvdy9UNS5qcGcnLCAndHlwZSc6ICd1bnNlbGVjdGVkJ30sXG4gICAgICAgIHsnaWQnOiA5LCAnbmFtZSc6ICfog7bniYcnLCAnYWRkJzogJ2h0dHA6Ly9wdW5vbGVlLmNuL2ltYWdlcy93L1QxMy5qcGcnLCAndHlwZSc6ICd1bnNlbGVjdGVkJ30sXG4gICAgICAgIHsnaWQnOiAxMCwgJ25hbWUnOiAn5Lq654mpJywgJ2FkZCc6ICdodHRwOi8vcHVub2xlZS5jbi9pbWFnZXMvdy9UOS5qcGcnLCAndHlwZSc6ICd1bnNlbGVjdGVkJ30sXG4gICAgICAgIHsnaWQnOiAxMSwgJ25hbWUnOiAn5peF5ouNJywgJ2FkZCc6ICdodHRwOi8vcHVub2xlZS5jbi9pbWFnZXMvdy9UMTAuanBnJywgJ3R5cGUnOiAndW5zZWxlY3RlZCd9LFxuICAgICAgICB7J2lkJzogMTIsICduYW1lJzogJ+ihl+aLjScsICdhZGQnOiAnaHR0cDovL3B1bm9sZWUuY24vaW1hZ2VzL3cvVDExLmpwZycsICd0eXBlJzogJ3Vuc2VsZWN0ZWQnfVxuICAgIF0sXG4gICAgc3RvcmU6IFtdLFxuICAgIGFjY291bnRfbmFtZTogJydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGNvbG9yU2VsZWN0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGluZCA9IHBhcnNlSW50KGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZClcbiAgICAgIHZhciB0eXBlID0gdGhpcy5kYXRhLnRhZ1tpbmRdLnR5cGVcbiAgICAgIHZhciB0YWcgPSB0aGlzLmRhdGEudGFnXG5cbiAgICAgIGlmICh0eXBlID09PSAndW5zZWxlY3RlZCcpIHtcbiAgICAgICAgdGFnW2luZF0udHlwZSA9ICdzZWxlY3RlZCdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhZ1tpbmRdLnR5cGUgPSAndW5zZWxlY3RlZCdcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgdGFnOiB0YWdcbiAgICAgIH0pXG4gICAgICB2YXIgc3RvcmUgPSBbXVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRhZ1tpXS50eXBlID09PSAnc2VsZWN0ZWQnKSB7XG4gICAgICAgICAgc3RvcmUucHVzaCh0YWdbaV0ubmFtZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5zdG9yZSA9IHN0b3JlXG4gICAgICBpZiAodGhpcy5zdG9yZS5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgLy8gc3VibWl0IGZvcm0gLCBuZWVkIGlkXG4gICAgICAgIHd4LnJlZGlyZWN0VG8oe1xuICAgICAgICAgIHVybDogJ2hvbWUnXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgdGhpcy5hY2NvdW50X25hbWUgPSBvcHRpb25zLmFjY1xuICB9XG4gIGNvbXB1dGVkID0ge1xuICAgIGNvdW50ZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdG9yZS5sZW5ndGggPT09IDAgPyAwIDogdGhpcy5zdG9yZS5sZW5ndGhcbiAgICB9XG4gIH1cbn1cbiJdfQ==