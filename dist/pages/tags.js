'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tag = require('./../components/tag.js');

var _tag2 = _interopRequireDefault(_tag);

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
      tags: [[{ 'name': '杂志', 'add': 'http://punolee.cn/images/w/T3.jpg' }, { 'name': '淘宝', 'add': 'http://punolee.cn/images/w/T4.jpg' }, { 'name': '日系', 'add': 'http://punolee.cn/images/w/T2.jpg' }], [{ 'name': '妆面', 'add': 'http://punolee.cn/images/w/T7.jpg' }, { 'name': '复古', 'add': 'http://punolee.cn/images/w/T1.jpg' }, { 'name': '创意', 'add': 'http://punolee.cn/images/w/T6.jpg' }], [{ 'name': '私房', 'add': 'http://punolee.cn/images/w/T8.jpg' }, { 'name': '黑白', 'add': 'http://punolee.cn/images/w/T5.jpg' }, { 'name': '胶片', 'add': 'http://punolee.cn/images/w/T13.jpg' }], [{ 'name': '人物', 'add': 'http://punolee.cn/images/w/T9.jpg' }, { 'name': '旅拍', 'add': 'http://punolee.cn/images/w/T10.jpg' }, { 'name': '街拍', 'add': 'http://punolee.cn/images/w/T11.jpg' }]]
    }, _this.$repeat = { "tags": { "com": "tag", "props": "tagr" } }, _this.$props = { "tag": { "xmlns:v-bind": { "value": "", "for": "tags", "item": "item", "index": "index", "key": "key" }, "v-bind:tagr.once": { "value": "item", "type": "item", "for": "tags", "item": "item", "index": "index", "key": "key" } } }, _this.$events = {}, _this.components = {
      tag: _tag2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(tags, [{
    key: 'onload',
    value: function onload() {}
  }]);

  return tags;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(tags , 'pages/tags'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhZ3MuanMiXSwibmFtZXMiOlsidGFncyIsImRhdGEiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJ0YWciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsSSxHQUFPO0FBQ0xELFlBQU0sQ0FDSixDQUFDLEVBQUMsUUFBUSxJQUFULEVBQWUsT0FBTyxtQ0FBdEIsRUFBRCxFQUNFLEVBQUMsUUFBUSxJQUFULEVBQWUsT0FBTyxtQ0FBdEIsRUFERixFQUVFLEVBQUMsUUFBUSxJQUFULEVBQWUsT0FBTyxtQ0FBdEIsRUFGRixDQURJLEVBSUosQ0FBQyxFQUFDLFFBQVEsSUFBVCxFQUFlLE9BQU8sbUNBQXRCLEVBQUQsRUFDRSxFQUFDLFFBQVEsSUFBVCxFQUFlLE9BQU8sbUNBQXRCLEVBREYsRUFFRSxFQUFDLFFBQVEsSUFBVCxFQUFlLE9BQU8sbUNBQXRCLEVBRkYsQ0FKSSxFQU9KLENBQUUsRUFBQyxRQUFRLElBQVQsRUFBZSxPQUFPLG1DQUF0QixFQUFGLEVBQ0UsRUFBQyxRQUFRLElBQVQsRUFBZSxPQUFPLG1DQUF0QixFQURGLEVBRUUsRUFBQyxRQUFRLElBQVQsRUFBZSxPQUFPLG9DQUF0QixFQUZGLENBUEksRUFVSixDQUFFLEVBQUMsUUFBUSxJQUFULEVBQWUsT0FBTyxtQ0FBdEIsRUFBRixFQUNFLEVBQUMsUUFBUSxJQUFULEVBQWUsT0FBTyxvQ0FBdEIsRUFERixFQUVFLEVBQUMsUUFBUSxJQUFULEVBQWUsT0FBTyxvQ0FBdEIsRUFGRixDQVZJO0FBREQsSyxRQWdCUkUsTyxHQUFVLEVBQUMsUUFBTyxFQUFDLE9BQU0sS0FBUCxFQUFhLFNBQVEsTUFBckIsRUFBUixFLFFBQ1hDLE0sR0FBUyxFQUFDLE9BQU0sRUFBQyxnQkFBZSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sTUFBbEIsRUFBeUIsUUFBTyxNQUFoQyxFQUF1QyxTQUFRLE9BQS9DLEVBQXVELE9BQU0sS0FBN0QsRUFBaEIsRUFBb0Ysb0JBQW1CLEVBQUMsU0FBUSxNQUFULEVBQWdCLFFBQU8sTUFBdkIsRUFBOEIsT0FBTSxNQUFwQyxFQUEyQyxRQUFPLE1BQWxELEVBQXlELFNBQVEsT0FBakUsRUFBeUUsT0FBTSxLQUEvRSxFQUF2RyxFQUFQLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFZO0FBQ1RDO0FBRFMsSzs7Ozs7NkJBR0YsQ0FDUjs7OztFQXhCK0IsZUFBS0MsSTs7a0JBQWxCUCxJIiwiZmlsZSI6InRhZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgVGFnIGZyb20gJy4uL2NvbXBvbmVudHMvdGFnJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0YWdzIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgZGF0YSA9IHtcbiAgICB0YWdzOiBbXG4gICAgICBbeyduYW1lJzogJ+adguW/lycsICdhZGQnOiAnaHR0cDovL3B1bm9sZWUuY24vaW1hZ2VzL3cvVDMuanBnJ30sXG4gICAgICAgIHsnbmFtZSc6ICfmt5jlrp0nLCAnYWRkJzogJ2h0dHA6Ly9wdW5vbGVlLmNuL2ltYWdlcy93L1Q0LmpwZyd9LFxuICAgICAgICB7J25hbWUnOiAn5pel57O7JywgJ2FkZCc6ICdodHRwOi8vcHVub2xlZS5jbi9pbWFnZXMvdy9UMi5qcGcnfV0sXG4gICAgICBbeyduYW1lJzogJ+WmhumdoicsICdhZGQnOiAnaHR0cDovL3B1bm9sZWUuY24vaW1hZ2VzL3cvVDcuanBnJ30sXG4gICAgICAgIHsnbmFtZSc6ICflpI3lj6QnLCAnYWRkJzogJ2h0dHA6Ly9wdW5vbGVlLmNuL2ltYWdlcy93L1QxLmpwZyd9LFxuICAgICAgICB7J25hbWUnOiAn5Yib5oSPJywgJ2FkZCc6ICdodHRwOi8vcHVub2xlZS5jbi9pbWFnZXMvdy9UNi5qcGcnfSBdLFxuICAgICAgWyB7J25hbWUnOiAn56eB5oi/JywgJ2FkZCc6ICdodHRwOi8vcHVub2xlZS5jbi9pbWFnZXMvdy9UOC5qcGcnfSxcbiAgICAgICAgeyduYW1lJzogJ+m7keeZvScsICdhZGQnOiAnaHR0cDovL3B1bm9sZWUuY24vaW1hZ2VzL3cvVDUuanBnJ30sXG4gICAgICAgIHsnbmFtZSc6ICfog7bniYcnLCAnYWRkJzogJ2h0dHA6Ly9wdW5vbGVlLmNuL2ltYWdlcy93L1QxMy5qcGcnfV0sXG4gICAgICBbIHsnbmFtZSc6ICfkurrniaknLCAnYWRkJzogJ2h0dHA6Ly9wdW5vbGVlLmNuL2ltYWdlcy93L1Q5LmpwZyd9LFxuICAgICAgICB7J25hbWUnOiAn5peF5ouNJywgJ2FkZCc6ICdodHRwOi8vcHVub2xlZS5jbi9pbWFnZXMvdy9UMTAuanBnJ30sXG4gICAgICAgIHsnbmFtZSc6ICfooZfmi40nLCAnYWRkJzogJ2h0dHA6Ly9wdW5vbGVlLmNuL2ltYWdlcy93L1QxMS5qcGcnfV1cbiAgICBdXG4gIH1cbiAkcmVwZWF0ID0ge1widGFnc1wiOntcImNvbVwiOlwidGFnXCIsXCJwcm9wc1wiOlwidGFnclwifX07XHJcbiRwcm9wcyA9IHtcInRhZ1wiOntcInhtbG5zOnYtYmluZFwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwidGFnc1wiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwifSxcInYtYmluZDp0YWdyLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJ0YWdzXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPXtcbiAgICB0YWc6IFRhZ1xuICB9XG4gIG9ubG9hZCgpIHtcbiAgfVxufVxuIl19