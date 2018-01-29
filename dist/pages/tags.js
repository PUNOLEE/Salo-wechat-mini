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
          this.redirectTo({
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(tags , 'pages/tags'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhZ3MuanMiXSwibmFtZXMiOlsidGFncyIsImRhdGEiLCJ0YWciLCJzdG9yZSIsImFjY291bnRfbmFtZSIsIm1ldGhvZHMiLCJjb2xvclNlbGVjdCIsImUiLCJpbmQiLCJwYXJzZUludCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidHlwZSIsInNldERhdGEiLCJpIiwibGVuZ3RoIiwicHVzaCIsIm5hbWUiLCJyZWRpcmVjdFRvIiwidXJsIiwiY29tcHV0ZWQiLCJjb3VudGVyIiwib3B0aW9ucyIsImFjYyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsSSxHQUFPO0FBQ0xDLFdBQUssQ0FDRCxFQUFDLE1BQU0sQ0FBUCxFQUFVLFFBQVEsSUFBbEIsRUFBd0IsT0FBTyxtQ0FBL0IsRUFBb0UsUUFBUSxZQUE1RSxFQURDLEVBRUQsRUFBQyxNQUFNLENBQVAsRUFBVSxRQUFRLElBQWxCLEVBQXdCLE9BQU8sbUNBQS9CLEVBQW9FLFFBQVEsWUFBNUUsRUFGQyxFQUdELEVBQUMsTUFBTSxDQUFQLEVBQVUsUUFBUSxJQUFsQixFQUF3QixPQUFPLG1DQUEvQixFQUFvRSxRQUFRLFlBQTVFLEVBSEMsRUFJRCxFQUFDLE1BQU0sQ0FBUCxFQUFVLFFBQVEsSUFBbEIsRUFBd0IsT0FBTyxtQ0FBL0IsRUFBb0UsUUFBUSxZQUE1RSxFQUpDLEVBS0QsRUFBQyxNQUFNLENBQVAsRUFBVSxRQUFRLElBQWxCLEVBQXdCLE9BQU8sbUNBQS9CLEVBQW9FLFFBQVEsWUFBNUUsRUFMQyxFQU1ELEVBQUMsTUFBTSxDQUFQLEVBQVUsUUFBUSxJQUFsQixFQUF3QixPQUFPLG1DQUEvQixFQUFvRSxRQUFRLFlBQTVFLEVBTkMsRUFPRCxFQUFDLE1BQU0sQ0FBUCxFQUFVLFFBQVEsSUFBbEIsRUFBd0IsT0FBTyxtQ0FBL0IsRUFBb0UsUUFBUSxZQUE1RSxFQVBDLEVBUUQsRUFBQyxNQUFNLENBQVAsRUFBVSxRQUFRLElBQWxCLEVBQXdCLE9BQU8sbUNBQS9CLEVBQW9FLFFBQVEsWUFBNUUsRUFSQyxFQVNELEVBQUMsTUFBTSxDQUFQLEVBQVUsUUFBUSxJQUFsQixFQUF3QixPQUFPLG9DQUEvQixFQUFxRSxRQUFRLFlBQTdFLEVBVEMsRUFVRCxFQUFDLE1BQU0sRUFBUCxFQUFXLFFBQVEsSUFBbkIsRUFBeUIsT0FBTyxtQ0FBaEMsRUFBcUUsUUFBUSxZQUE3RSxFQVZDLEVBV0QsRUFBQyxNQUFNLEVBQVAsRUFBVyxRQUFRLElBQW5CLEVBQXlCLE9BQU8sb0NBQWhDLEVBQXNFLFFBQVEsWUFBOUUsRUFYQyxFQVlELEVBQUMsTUFBTSxFQUFQLEVBQVcsUUFBUSxJQUFuQixFQUF5QixPQUFPLG9DQUFoQyxFQUFzRSxRQUFRLFlBQTlFLEVBWkMsQ0FEQTtBQWVMQyxhQUFPLEVBZkY7QUFnQkxDLG9CQUFjO0FBaEJULEssUUFrQlBDLE8sR0FBVTtBQUNSQyxtQkFBYSxxQkFBVUMsQ0FBVixFQUFhO0FBQ3hCLFlBQUlDLE1BQU1DLFNBQVNGLEVBQUVHLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCSCxHQUFqQyxDQUFWO0FBQ0EsWUFBSUksT0FBTyxLQUFLWCxJQUFMLENBQVVDLEdBQVYsQ0FBY00sR0FBZCxFQUFtQkksSUFBOUI7QUFDQSxZQUFJVixNQUFNLEtBQUtELElBQUwsQ0FBVUMsR0FBcEI7O0FBRUEsWUFBSVUsU0FBUyxZQUFiLEVBQTJCO0FBQ3pCVixjQUFJTSxHQUFKLEVBQVNJLElBQVQsR0FBZ0IsVUFBaEI7QUFDRCxTQUZELE1BRU87QUFDTFYsY0FBSU0sR0FBSixFQUFTSSxJQUFULEdBQWdCLFlBQWhCO0FBQ0Q7O0FBRUQsYUFBS0MsT0FBTCxDQUFhO0FBQ1hYLGVBQUtBO0FBRE0sU0FBYjtBQUdBLFlBQUlDLFFBQVEsRUFBWjtBQUNBLGFBQUssSUFBSVcsSUFBSSxDQUFiLEVBQWdCQSxJQUFJWixJQUFJYSxNQUF4QixFQUFnQ0QsR0FBaEMsRUFBcUM7QUFDbkMsY0FBSVosSUFBSVksQ0FBSixFQUFPRixJQUFQLEtBQWdCLFVBQXBCLEVBQWdDO0FBQzlCVCxrQkFBTWEsSUFBTixDQUFXZCxJQUFJWSxDQUFKLEVBQU9HLElBQWxCO0FBQ0Q7QUFDRjtBQUNELGFBQUtkLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFlBQUksS0FBS0EsS0FBTCxDQUFXWSxNQUFYLEtBQXNCLENBQTFCLEVBQTZCO0FBQzNCO0FBQ0EsZUFBS0csVUFBTCxDQUFnQjtBQUNkQyxpQkFBSztBQURTLFdBQWhCO0FBR0Q7QUFDRjtBQTVCTyxLLFFBaUNWQyxRLEdBQVc7QUFDVEMsYUFEUyxxQkFDQztBQUNSLGVBQU8sS0FBS2xCLEtBQUwsQ0FBV1ksTUFBWCxLQUFzQixDQUF0QixHQUEwQixDQUExQixHQUE4QixLQUFLWixLQUFMLENBQVdZLE1BQWhEO0FBQ0Q7QUFIUSxLOzs7OzsyQkFISk8sTyxFQUFTO0FBQ2QsV0FBS2xCLFlBQUwsR0FBb0JrQixRQUFRQyxHQUE1QjtBQUNEOzs7O0VBbkQrQixlQUFLQyxJOztrQkFBbEJ4QixJIiwiZmlsZSI6InRhZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRhZ3MgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGRhdGEgPSB7XHJcbiAgICB0YWc6IFtcclxuICAgICAgICB7J2lkJzogMSwgJ25hbWUnOiAn5p2C5b+XJywgJ2FkZCc6ICdodHRwOi8vcHVub2xlZS5jbi9pbWFnZXMvdy9UMy5qcGcnLCAndHlwZSc6ICd1bnNlbGVjdGVkJ30sXHJcbiAgICAgICAgeydpZCc6IDIsICduYW1lJzogJ+a3mOWunScsICdhZGQnOiAnaHR0cDovL3B1bm9sZWUuY24vaW1hZ2VzL3cvVDQuanBnJywgJ3R5cGUnOiAndW5zZWxlY3RlZCd9LFxyXG4gICAgICAgIHsnaWQnOiAzLCAnbmFtZSc6ICfml6Xns7snLCAnYWRkJzogJ2h0dHA6Ly9wdW5vbGVlLmNuL2ltYWdlcy93L1QyLmpwZycsICd0eXBlJzogJ3Vuc2VsZWN0ZWQnfSxcclxuICAgICAgICB7J2lkJzogNCwgJ25hbWUnOiAn5aaG6Z2iJywgJ2FkZCc6ICdodHRwOi8vcHVub2xlZS5jbi9pbWFnZXMvdy9UNy5qcGcnLCAndHlwZSc6ICd1bnNlbGVjdGVkJ30sXHJcbiAgICAgICAgeydpZCc6IDUsICduYW1lJzogJ+WkjeWPpCcsICdhZGQnOiAnaHR0cDovL3B1bm9sZWUuY24vaW1hZ2VzL3cvVDEuanBnJywgJ3R5cGUnOiAndW5zZWxlY3RlZCd9LFxyXG4gICAgICAgIHsnaWQnOiA2LCAnbmFtZSc6ICfliJvmhI8nLCAnYWRkJzogJ2h0dHA6Ly9wdW5vbGVlLmNuL2ltYWdlcy93L1Q2LmpwZycsICd0eXBlJzogJ3Vuc2VsZWN0ZWQnfSxcclxuICAgICAgICB7J2lkJzogNywgJ25hbWUnOiAn56eB5oi/JywgJ2FkZCc6ICdodHRwOi8vcHVub2xlZS5jbi9pbWFnZXMvdy9UOC5qcGcnLCAndHlwZSc6ICd1bnNlbGVjdGVkJ30sXHJcbiAgICAgICAgeydpZCc6IDgsICduYW1lJzogJ+m7keeZvScsICdhZGQnOiAnaHR0cDovL3B1bm9sZWUuY24vaW1hZ2VzL3cvVDUuanBnJywgJ3R5cGUnOiAndW5zZWxlY3RlZCd9LFxyXG4gICAgICAgIHsnaWQnOiA5LCAnbmFtZSc6ICfog7bniYcnLCAnYWRkJzogJ2h0dHA6Ly9wdW5vbGVlLmNuL2ltYWdlcy93L1QxMy5qcGcnLCAndHlwZSc6ICd1bnNlbGVjdGVkJ30sXHJcbiAgICAgICAgeydpZCc6IDEwLCAnbmFtZSc6ICfkurrniaknLCAnYWRkJzogJ2h0dHA6Ly9wdW5vbGVlLmNuL2ltYWdlcy93L1Q5LmpwZycsICd0eXBlJzogJ3Vuc2VsZWN0ZWQnfSxcclxuICAgICAgICB7J2lkJzogMTEsICduYW1lJzogJ+aXheaLjScsICdhZGQnOiAnaHR0cDovL3B1bm9sZWUuY24vaW1hZ2VzL3cvVDEwLmpwZycsICd0eXBlJzogJ3Vuc2VsZWN0ZWQnfSxcclxuICAgICAgICB7J2lkJzogMTIsICduYW1lJzogJ+ihl+aLjScsICdhZGQnOiAnaHR0cDovL3B1bm9sZWUuY24vaW1hZ2VzL3cvVDExLmpwZycsICd0eXBlJzogJ3Vuc2VsZWN0ZWQnfVxyXG4gICAgXSxcclxuICAgIHN0b3JlOiBbXSxcclxuICAgIGFjY291bnRfbmFtZTogJydcclxuICB9XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGNvbG9yU2VsZWN0OiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICB2YXIgaW5kID0gcGFyc2VJbnQoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kKVxyXG4gICAgICB2YXIgdHlwZSA9IHRoaXMuZGF0YS50YWdbaW5kXS50eXBlXHJcbiAgICAgIHZhciB0YWcgPSB0aGlzLmRhdGEudGFnXHJcblxyXG4gICAgICBpZiAodHlwZSA9PT0gJ3Vuc2VsZWN0ZWQnKSB7XHJcbiAgICAgICAgdGFnW2luZF0udHlwZSA9ICdzZWxlY3RlZCdcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0YWdbaW5kXS50eXBlID0gJ3Vuc2VsZWN0ZWQnXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdGFnOiB0YWdcclxuICAgICAgfSlcclxuICAgICAgdmFyIHN0b3JlID0gW11cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodGFnW2ldLnR5cGUgPT09ICdzZWxlY3RlZCcpIHtcclxuICAgICAgICAgIHN0b3JlLnB1c2godGFnW2ldLm5hbWUpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc3RvcmUgPSBzdG9yZVxyXG4gICAgICBpZiAodGhpcy5zdG9yZS5sZW5ndGggPT09IDQpIHtcclxuICAgICAgICAvLyBzdWJtaXQgZm9ybSAsIG5lZWQgaWRcclxuICAgICAgICB0aGlzLnJlZGlyZWN0VG8oe1xyXG4gICAgICAgICAgdXJsOiAnaG9tZSdcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICB0aGlzLmFjY291bnRfbmFtZSA9IG9wdGlvbnMuYWNjXHJcbiAgfVxyXG4gIGNvbXB1dGVkID0ge1xyXG4gICAgY291bnRlcigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc3RvcmUubGVuZ3RoID09PSAwID8gMCA6IHRoaXMuc3RvcmUubGVuZ3RoXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==