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
      accountName: '',
      IDKEY: '',
      phoneCode: '',
      phoneNum: '',
      tip: '',
      userInfo: '',
      type: 0,
      text: '获取',
      count: 60,
      disabled: false,
      hidden: true
    }, _this.components = {}, _this.computed = {}, _this.methods = {
      getUserIn: function getUserIn() {},
      getPhoneNum: function getPhoneNum(e) {
        this.phoneNum = e.detail.value;
        if (!/^1[34578]\d{9}$/.test(this.phoneNum)) {
          this.tip = '手机号码有误，请重填';
        } else {
          this.tip = '';
        }
      },
      formSubmit: function formSubmit(e) {
        var header = this.$parent.globalData.header;
        console.log(header.Cookie);
        this.accountName = e.detail.value.account_id;
        this.IDKEY = e.detail.value.idkey;
        this.phoneCode = e.detail.value.code;

        console.log(this.accountName, this.IDKEY, this.phoneCode);

        if (this.accountName.length === 0 || this.IDKEY.length === 0) {
          this.tip = '账号名、邀请码不能为空！';
        } else if (this.phoneNum.length === 0 || this.phoneCode.length === 0) {
          this.tip = '手机号、验证码不能为空！';
        } else if (!/^1[34578]\d{9}$/.test(this.phoneNum)) {
          this.tip = '手机号码有误，请重填';
        } else {
          wx.request({
            url: 'http://localhost:8080/register',
            header: {
              'content-type': 'application/x-www-form-urlencoded',
              'Cookie': header.Cookie
            },
            data: {
              accountName: this.accountName,
              IDKEY: this.IDKEY,
              phoneNum: this.phoneNum,
              phoneCode: this.phoneCode,
              userType: this.type,
              session: header.Cookie
            },
            method: 'POST',
            success: function success(res) {
              console.log(res.data.msg);
              if (res.data.success) {
                wx.redirectTo({
                  url: 'tags?acc=' + e.detail.value.account_id
                });
              } else {
                wx.showModal({
                  title: '提示',
                  content: res.data.msg,
                  success: function success(d) {
                    if (d.confirm) {
                      console.log('用户点击确定');
                    } else if (d.cancel) {
                      console.log('用户点击取消');
                    }
                  }
                });
              }
            }
          });
          // wepy.request('http://localhost:8080/register', this.phoneNum).then((d) => console.log(d))
          this.tip = '';
          // console.log('成功')
          // request + idkey 验证
        }
      },
      getPhoneCode: function getPhoneCode() {
        var self = this;
        self.disabled = true;
        var ticktock = setInterval(function () {
          var str = '剩' + (self.count -= 1) + '秒';
          self.text = str;
          console.log(self.text);
          if (self.count === 0) {
            clearInterval(ticktock);
            self.disabled = false;
          }
        }, 1000);
        self.count = 60;
        self.text = '获取';
        // this.disabled = true
        // this.seconds = 60
        // var interval = setInterval(() => {
        //   var seconds = this.seconds
        //   console.log(seconds)
        //   if (seconds < 1) {
        //     seconds = 60
        //     this.disabled = false
        //   } else {
        //     seconds = seconds - 1
        //   }
        //   this.seconds = seconds
        // }, 1000)
        // setTimeout(function() {
        //   clearInterval(interval)
        // }, 60 * 1000)

        // wx.request({
        //   url: 'http://localhost:8080/code',
        //   data: {
        //     phoneNum: this.phoneNum
        //   },
        //   success: function(res) {
        //     console.log(res)
        //   }
        // })
      },

      question: function question() {
        this.hidden = !this.hidden;
      },
      close: function close() {
        this.hidden = true;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(signup, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.hidden = true;
      this.type = options.ty;
    }
  }]);

  return signup;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(signup , 'pages/signup'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5qcyJdLCJuYW1lcyI6WyJzaWdudXAiLCJkYXRhIiwiYWNjb3VudE5hbWUiLCJJREtFWSIsInBob25lQ29kZSIsInBob25lTnVtIiwidGlwIiwidXNlckluZm8iLCJ0eXBlIiwidGV4dCIsImNvdW50IiwiZGlzYWJsZWQiLCJoaWRkZW4iLCJjb21wb25lbnRzIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZ2V0VXNlckluIiwiZ2V0UGhvbmVOdW0iLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJ0ZXN0IiwiZm9ybVN1Ym1pdCIsImhlYWRlciIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwiY29uc29sZSIsImxvZyIsIkNvb2tpZSIsImFjY291bnRfaWQiLCJpZGtleSIsImNvZGUiLCJsZW5ndGgiLCJ3eCIsInJlcXVlc3QiLCJ1cmwiLCJ1c2VyVHlwZSIsInNlc3Npb24iLCJtZXRob2QiLCJzdWNjZXNzIiwicmVzIiwibXNnIiwicmVkaXJlY3RUbyIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsImQiLCJjb25maXJtIiwiY2FuY2VsIiwiZ2V0UGhvbmVDb2RlIiwic2VsZiIsInRpY2t0b2NrIiwic2V0SW50ZXJ2YWwiLCJzdHIiLCJjbGVhckludGVydmFsIiwicXVlc3Rpb24iLCJjbG9zZSIsIm9wdGlvbnMiLCJ0eSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsSSxHQUFPO0FBQ0xDLG1CQUFhLEVBRFI7QUFFTEMsYUFBTyxFQUZGO0FBR0xDLGlCQUFXLEVBSE47QUFJTEMsZ0JBQVUsRUFKTDtBQUtMQyxXQUFLLEVBTEE7QUFNTEMsZ0JBQVUsRUFOTDtBQU9MQyxZQUFNLENBUEQ7QUFRTEMsWUFBTSxJQVJEO0FBU0xDLGFBQU8sRUFURjtBQVVMQyxnQkFBVSxLQVZMO0FBV0xDLGNBQVE7QUFYSCxLLFFBYVBDLFUsR0FBYSxFLFFBRWJDLFEsR0FBVyxFLFFB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QTtBQUNEO0FBQ0YsT0FyRU87QUFzRVIyQyxvQkFBYyx3QkFBVztBQUN2QixZQUFJQyxPQUFPLElBQVg7QUFDQUEsYUFBS3ZDLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxZQUFJd0MsV0FBV0MsWUFBWSxZQUFXO0FBQ3BDLGNBQUlDLE1BQU0sT0FBT0gsS0FBS3hDLEtBQUwsSUFBYyxDQUFyQixJQUEwQixHQUFwQztBQUNBd0MsZUFBS3pDLElBQUwsR0FBWTRDLEdBQVo7QUFDQTNCLGtCQUFRQyxHQUFSLENBQVl1QixLQUFLekMsSUFBakI7QUFDQSxjQUFJeUMsS0FBS3hDLEtBQUwsS0FBZSxDQUFuQixFQUFzQjtBQUNwQjRDLDBCQUFjSCxRQUFkO0FBQ0FELGlCQUFLdkMsUUFBTCxHQUFnQixLQUFoQjtBQUNEO0FBQ0YsU0FSYyxFQVFaLElBUlksQ0FBZjtBQVNBdUMsYUFBS3hDLEtBQUwsR0FBYSxFQUFiO0FBQ0F3QyxhQUFLekMsSUFBTCxHQUFZLElBQVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxPQTlHTzs7QUFnSFI4QyxnQkFBVSxvQkFBVztBQUNuQixhQUFLM0MsTUFBTCxHQUFjLENBQUMsS0FBS0EsTUFBcEI7QUFDRCxPQWxITztBQW1IUjRDLGFBQU8saUJBQVc7QUFDaEIsYUFBSzVDLE1BQUwsR0FBYyxJQUFkO0FBQ0Q7QUFySE8sSzs7Ozs7MkJBd0hINkMsTyxFQUFTO0FBQ2QsV0FBSzdDLE1BQUwsR0FBYyxJQUFkO0FBQ0EsV0FBS0osSUFBTCxHQUFZaUQsUUFBUUMsRUFBcEI7QUFDRDs7OztFQTdJaUMsZUFBS0MsSTs7a0JBQXBCM0QsTSIsImZpbGUiOiJzaWdudXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNpZ251cCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGRhdGEgPSB7XG4gICAgYWNjb3VudE5hbWU6ICcnLFxuICAgIElES0VZOiAnJyxcbiAgICBwaG9uZUNvZGU6ICcnLFxuICAgIHBob25lTnVtOiAnJyxcbiAgICB0aXA6ICcnLFxuICAgIHVzZXJJbmZvOiAnJyxcbiAgICB0eXBlOiAwLFxuICAgIHRleHQ6ICfojrflj5YnLFxuICAgIGNvdW50OiA2MCxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgaGlkZGVuOiB0cnVlXG4gIH1cbiAgY29tcG9uZW50cyA9IHtcbiAgfVxuICBjb21wdXRlZCA9IHtcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGdldFVzZXJJbjogZnVuY3Rpb24oKSB7XG5cbiAgICB9LFxuICAgIGdldFBob25lTnVtOiBmdW5jdGlvbihlKSB7XG4gICAgICB0aGlzLnBob25lTnVtID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIGlmICghKC9eMVszNDU3OF1cXGR7OX0kLy50ZXN0KHRoaXMucGhvbmVOdW0pKSkge1xuICAgICAgICB0aGlzLnRpcCA9ICfmiYvmnLrlj7fnoIHmnInor6/vvIzor7fph43loasnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRpcCA9ICcnXG4gICAgICB9XG4gICAgfSxcbiAgICBmb3JtU3VibWl0OiBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgaGVhZGVyID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuaGVhZGVyXG4gICAgICBjb25zb2xlLmxvZyhoZWFkZXIuQ29va2llKVxuICAgICAgdGhpcy5hY2NvdW50TmFtZSA9IGUuZGV0YWlsLnZhbHVlLmFjY291bnRfaWRcbiAgICAgIHRoaXMuSURLRVkgPSBlLmRldGFpbC52YWx1ZS5pZGtleVxuICAgICAgdGhpcy5waG9uZUNvZGUgPSBlLmRldGFpbC52YWx1ZS5jb2RlXG5cbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuYWNjb3VudE5hbWUsIHRoaXMuSURLRVksIHRoaXMucGhvbmVDb2RlKVxuXG4gICAgICBpZiAodGhpcy5hY2NvdW50TmFtZS5sZW5ndGggPT09IDAgfHwgdGhpcy5JREtFWS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy50aXAgPSAn6LSm5Y+35ZCN44CB6YKA6K+356CB5LiN6IO95Li656m677yBJ1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnBob25lTnVtLmxlbmd0aCA9PT0gMCB8fCB0aGlzLnBob25lQ29kZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy50aXAgPSAn5omL5py65Y+344CB6aqM6K+B56CB5LiN6IO95Li656m677yBJ1xuICAgICAgfSBlbHNlIGlmICghKC9eMVszNDU3OF1cXGR7OX0kLy50ZXN0KHRoaXMucGhvbmVOdW0pKSkge1xuICAgICAgICB0aGlzLnRpcCA9ICfmiYvmnLrlj7fnoIHmnInor6/vvIzor7fph43loasnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjgwODAvcmVnaXN0ZXInLFxuICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgICAgICAgJ0Nvb2tpZSc6IGhlYWRlci5Db29raWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGFjY291bnROYW1lOiB0aGlzLmFjY291bnROYW1lLFxuICAgICAgICAgICAgSURLRVk6IHRoaXMuSURLRVksXG4gICAgICAgICAgICBwaG9uZU51bTogdGhpcy5waG9uZU51bSxcbiAgICAgICAgICAgIHBob25lQ29kZTogdGhpcy5waG9uZUNvZGUsXG4gICAgICAgICAgICB1c2VyVHlwZTogdGhpcy50eXBlLFxuICAgICAgICAgICAgc2Vzc2lvbjogaGVhZGVyLkNvb2tpZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS5tc2cpXG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICB3eC5yZWRpcmVjdFRvKHtcbiAgICAgICAgICAgICAgICB1cmw6ICd0YWdzP2FjYz0nICsgZS5kZXRhaWwudmFsdWUuYWNjb3VudF9pZFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICAgICAgY29udGVudDogcmVzLmRhdGEubXNnLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChkLmNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+ehruWumicpXG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGQuY2FuY2VsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vlj5bmtognKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC8vIHdlcHkucmVxdWVzdCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlZ2lzdGVyJywgdGhpcy5waG9uZU51bSkudGhlbigoZCkgPT4gY29uc29sZS5sb2coZCkpXG4gICAgICAgIHRoaXMudGlwID0gJydcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ+aIkOWKnycpXG4gICAgICAgIC8vIHJlcXVlc3QgKyBpZGtleSDpqozor4FcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldFBob25lQ29kZTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuZGlzYWJsZWQgPSB0cnVlXG4gICAgICB2YXIgdGlja3RvY2sgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHN0ciA9ICfliaknICsgKHNlbGYuY291bnQgLT0gMSkgKyAn56eSJ1xuICAgICAgICBzZWxmLnRleHQgPSBzdHJcbiAgICAgICAgY29uc29sZS5sb2coc2VsZi50ZXh0KVxuICAgICAgICBpZiAoc2VsZi5jb3VudCA9PT0gMCkge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGlja3RvY2spXG4gICAgICAgICAgc2VsZi5kaXNhYmxlZCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0sIDEwMDApXG4gICAgICBzZWxmLmNvdW50ID0gNjBcbiAgICAgIHNlbGYudGV4dCA9ICfojrflj5YnXG4gICAgICAvLyB0aGlzLmRpc2FibGVkID0gdHJ1ZVxuICAgICAgLy8gdGhpcy5zZWNvbmRzID0gNjBcbiAgICAgIC8vIHZhciBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIC8vICAgdmFyIHNlY29uZHMgPSB0aGlzLnNlY29uZHNcbiAgICAgIC8vICAgY29uc29sZS5sb2coc2Vjb25kcylcbiAgICAgIC8vICAgaWYgKHNlY29uZHMgPCAxKSB7XG4gICAgICAvLyAgICAgc2Vjb25kcyA9IDYwXG4gICAgICAvLyAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgICAvLyAgIH0gZWxzZSB7XG4gICAgICAvLyAgICAgc2Vjb25kcyA9IHNlY29uZHMgLSAxXG4gICAgICAvLyAgIH1cbiAgICAgIC8vICAgdGhpcy5zZWNvbmRzID0gc2Vjb25kc1xuICAgICAgLy8gfSwgMTAwMClcbiAgICAgIC8vIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAvLyAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXG4gICAgICAvLyB9LCA2MCAqIDEwMDApXG5cbiAgICAgIC8vIHd4LnJlcXVlc3Qoe1xuICAgICAgLy8gICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjgwODAvY29kZScsXG4gICAgICAvLyAgIGRhdGE6IHtcbiAgICAgIC8vICAgICBwaG9uZU51bTogdGhpcy5waG9uZU51bVxuICAgICAgLy8gICB9LFxuICAgICAgLy8gICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH0pXG4gICAgfSxcblxuICAgIHF1ZXN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuaGlkZGVuID0gIXRoaXMuaGlkZGVuXG4gICAgfSxcbiAgICBjbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmhpZGRlbiA9IHRydWVcbiAgICB9XG4gIH1cblxuICBvbkxvYWQob3B0aW9ucykge1xuICAgIHRoaXMuaGlkZGVuID0gdHJ1ZVxuICAgIHRoaXMudHlwZSA9IG9wdGlvbnMudHlcbiAgfVxufVxuIl19