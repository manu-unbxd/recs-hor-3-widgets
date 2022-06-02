window.allHorizontal = true;
window.UnbxdSiteName = 'ss-unbxd-prod-bevilles-com-au13551623906010';
window.UnbxdApiKey = 'd59fddd93d4e871798731a7d2374ca13';

!(function (e) {
  var t = {};

  function r(n) {
    if (t[n]) return t[n].exports;
    var i = (t[n] = {
      i: n,
      l: !1,
      exports: {},
    });
    return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) ||
        Object.defineProperty(e, t, {
          enumerable: !0,
          get: n,
        });
    }),
    (r.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: 'Module',
        }),
        Object.defineProperty(e, '__esModule', {
          value: !0,
        });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, 'default', {
          enumerable: !0,
          value: e,
        }),
        2 & t && 'string' != typeof e)
      )
        for (var i in e)
          r.d(
            n,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, 'a', t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = 'build/'),
    r((r.s = 5));
})([
  function (e, t, r) {
    'use strict';
    r.d(t, 'a', function () {
      return n;
    }),
      r.d(t, 'b', function () {
        return i;
      }),
      r.d(t, 'e', function () {
        return o;
      }),
      r.d(t, 'd', function () {
        return s;
      }),
      r.d(t, 'c', function () {
        return a;
      });
    var n = 'mobile',
      i = 'small',
      o = function () {
        return window.matchMedia('(orientation: portrait)').matches
          ? window.screen.width <= 667
            ? n
            : 'desktop'
          : window.screen.height <= 667
          ? n
          : 'desktop';
      },
      s = function () {
        return window.innerWidth <= 667 ? i : 'large';
      },
      a = function (e, t, r) {
        var n = new XMLHttpRequest();
        (n.onreadystatechange = function () {
          var i;
          4 != this.readyState || (200 != this.status && 204 != this.status)
            ? 4 != this.readyState ||
              (200 == this.status && 204 == this.status) ||
              r('Invalid network request: ' + e)
            : (t && (i = this.getResponseHeader('x-request-id')),
              r(null, n.responseText, i));
        }),
          (n.onerror = function () {
            r('Failed network request: ' + e);
          }),
          n.open('GET', e, !0),
          t && n.setRequestHeader('unbxd-device-type', window.unbxdDeviceType),
          n.send();
      };
  },
  function (e, t) {
    e.exports = {
      development: {
        url: 'https://console-lohika.0126-int-use2.unbxd.io/v2.0/',
      },
      production: {
        url: 'https://anz-recommendations.unbxd.io/v2.0/',
      },
    };
  },
  function (e, t, r) {
    'use strict';
    (function (e) {
      r.d(t, 'a', function () {
        return l;
      });
      var n = r(0),
        i = r(1),
        o = r.n(i);

      function s(e) {
        return (s =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }

      function a(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      var l = (function () {
        function t(r) {
          var i = this;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this.horizontalTemplateHandler = function (e, t) {
              if (e) throw new Error('Failed to fetch templates');
              (i.horizontalTemplate = t), i.handleWidgetRendering();
            }),
            (this.verticalTemplateHandler = function (e, t) {
              if (e) throw new Error('Failed to fetch templates');
              (i.verticalTemplate = t), i.handleWidgetRenderingVertical();
            }),
            (this._unbxd_generateRexContent = function (t) {
              var r = t.template || missingValueError('template', t),
                o =
                  t.targetDOMElementId ||
                  missingValueError('targetDOMElementId', t),
                s =
                  t.recommendations || missingValueError('recommendations', t),
                a = t.heading || missingValueError('heading', t),
                l =
                  t.rexConsoleConfigs ||
                  missingValueError('rexConsoleConfigs', t),
                d =
                  l.products.visible ||
                  missingValueError('products.visible', l),
                c =
                  l.products.max ||
                  missingValueError('products.max', l.products),
                u = t.clickHandler,
                p = t.dataParser,
                f = t.eventQueue,
                m = t.isVertical || !1;
              i.compressedStyle = l.css || missingValueError('css', l);
              var g = null,
                _ =
                  l.widget.width ||
                  missingValueError('products.widget.width', l.widget),
                v = '';
              _.value && 0 != _.value && (v = _.value + _.unit);
              var h,
                x,
                b = doT.template(r),
                w = document.getElementById(o),
                y = Object(n.e)(),
                T = Object(n.d)();
              if (
                ('mobile-browser' === window.unbxdDeviceType ||
                'mobile-browser' === t.unbxdDeviceType ||
                y === n.a ||
                T === n.b
                  ? ((h =
                      (l.products &&
                        l.products.width &&
                        l.products.width.value) ||
                      0),
                    (x =
                      (l.products &&
                        l.products.width &&
                        l.products.width.unit) ||
                      'px'),
                    (d =
                      (l && l.products && l.products.visibleOn
                        ? l.products.visibleOn.mobile
                        : l.products.visible) || 2))
                  : (d =
                      (d =
                        l && l.products && l.products.visibleOn
                          ? l.products.visibleOn.desktop
                          : l.products.visible) || 2),
                !w)
              )
                return sendWarning(
                  'The target element id <' +
                    o +
                    '> is not present in DOM. Execution can not continue'
                );
              if ((c < s.length && (s = s.splice(0, c)), m)) {
                g = [];
                for (var S = 0; S < s.length; S++)
                  if (S % d == 0) {
                    var E = s.slice(S, S + d);
                    g.push(E);
                  }
              }
              var C = {
                recommendations: g || s,
                heading: a,
                analyticsData: {
                  widgetNum: 'WIDGET' + t.widgetNum,
                  pageType: t.pageType,
                  requestId: t.reqId,
                },
              };
              (p && 'function' == typeof p && (C = p(C)),
              f && 'function' == typeof f.beforeTemplateRender) &&
                (C = (0, f.beforeTemplateRender)(C));
              document.getElementById(o).innerHTML = b(C);
              var k = {
                rexConsoleConfigs: l,
                recommendations: s,
                recommendationsModified: g,
                clickHandler: u,
                itemsToShow: d,
                itemWidth: h,
                itemWidthUnit: x,
                maxProducts: c,
                assets: t.assets,
                sliderType:
                  m || 'mobile-browser' === !window.unbxdDeviceType
                    ? 'vertical'
                    : 'horizontal',
                sliderClass:
                  m || 'mobile-browser' === !window.unbxdDeviceType
                    ? '_unbxd_recs-vertical-slider'
                    : '_unbxd_recs-slider',
                widgetWidth: v,
              };
              m
                ? (e._unbxd_recsItemToScrollVt = d)
                : (window.unbxdDeviceType, (e._unbxd_recsItemToScrollHz = d));
              var I = document.createElement('style');
              ((I.type = 'text/css'),
              (I.innerHTML = i.compressedStyle),
              document.head.appendChild(I),
              handleSizeCalculations(o, k),
              f && 'function' == typeof f.afterTemplateRender) &&
                (C = (0, f.afterTemplateRender)(m));
            }),
            (this.HOME_PAGE = 'home'),
            (this.PRODUCT_PAGE = 'product'),
            (this.CATEGORY_PAGE = 'category'),
            (this.CART_PAGE = 'cart'),
            (this.allowedPageTypes = [
              this.HOME_PAGE,
              this.PRODUCT_PAGE,
              this.CATEGORY_PAGE,
              this.CART_PAGE,
            ]),
            (this.pageType = this.getPageDetails(r.pageInfo));
          var a = o.a.production.url;
          window.unbxdDeviceType = this.getTemplateDetails(r);
          var l = r.widgets;
          if (
            ((this.widget1 = this.getWidgetId(this.pageType, 'widget1', l)),
            (this.widget2 = this.getWidgetId(this.pageType, 'widget2', l)),
            (this.widget3 = this.getWidgetId(this.pageType, 'widget3', l)),
            !this.widget1 && !this.widget2 && !this.widget3)
          )
            throw new Error('No widget id provided');
          (this.itemClickHandler = this.getClickHandler(r)),
            (this.dataParser = this.getDataParserHandler(r)),
            (this.eventQueue = window.eventQueue);
          var d = r.userInfo,
            c = (d && d.userId) || this.getCookie('unbxd.userId'),
            u = (d && d.siteKey) || window.UnbxdSiteName,
            p = (d && d.apiKey) || window.UnbxdApiKey,
            f = a + p + '/' + u + '/items?&template=true&pageType=';
          if (!c) throw new Error('user id is missing');
          if (!u) throw new Error('site Key is missing');
          if (!p) throw new Error('api key is missing');
          f += encodeURIComponent(this.pageType);
          var m = r.pageInfo;
          switch (this.pageType.toLowerCase()) {
            case this.PRODUCT_PAGE:
            case this.CART_PAGE:
              m.productIds &&
                (f += this.getProductIdsAsUrlParams(m.productIds));
              break;
            case this.CATEGORY_PAGE:
              var g = '',
                _ = m.catlevel1Name,
                v = m.catlevel2Name,
                h = m.catlevel3Name,
                x = m.catlevel4Name;
              _ &&
                ((g = '&' + this.getUrlEncodedParam('catlevel1Name', _)),
                v &&
                  ((g += '&' + this.getUrlEncodedParam('catlevel2Name', v)),
                  h &&
                    ((g += '&' + this.getUrlEncodedParam('catlevel3Name', h)),
                    x &&
                      (g +=
                        '&' + this.getUrlEncodedParam('catlevel4Name', x))))),
                (f += g);
              break;
            case this.HOME_PAGE:
              break;
            default:
              throw new Error('Invalid page type: ' + this.pageType);
          }
          f += '&uid=' + c;
          var b = r.extraParams;
          if (b && 'object' === s(b) && Object.keys(b).length > 0) {
            var w = '';
            Object.keys(b).forEach(function (e, t) {
              t > 0 && (w += '&'),
                (w += ''.concat(e, '=').concat(encodeURIComponent(b[e])));
            }),
              (f += '&'.concat(w));
          }
          this.compressedStyleVertical = '';
          var y = this;
          Object(n.c)(f, !0, function (e, t, r) {
            if (e) throw new Error('Failed to fetch recommendations');
            if (
              ((y.recommendationsResponse = JSON.parse(t)),
              (y.horizontalTemplate =
                y.recommendationsResponse.template.horizontal),
              (y.reqId = r),
              y.horizontalTemplate)
            ) {
              (y.horizontalConfig = y.horizontalTemplate.conf),
                (y.horizontalAssets = y.horizontalConfig.assets);
              var i = y.horizontalTemplate.scriptUrl;
              i
                ? Object(n.c)(i, !1, y.horizontalTemplateHandler)
                : console.warn('script url not found for horizontal template');
            }
            if (
              ((y.verticalTemplate =
                y.recommendationsResponse.template.vertical),
              y.verticalTemplate)
            ) {
              (y.verticalConfig = y.verticalTemplate.conf),
                (y.verticalAssets = y.verticalConfig.assets);
              var o = y.verticalTemplate.scriptUrl;
              o
                ? Object(n.c)(o, !1, y.verticalTemplateHandler)
                : console.warn('script url not found for vertical template');
            }
          });
        }
        var r, i, l;
        return (
          (r = t),
          (i = [
            {
              key: 'getWidgetId',
              value: function (e, t, r) {
                var n;
                return r
                  ? r[t]
                    ? r[t].name
                    : null
                  : ((n = widgetIdMap[e.toLowerCase()][t]),
                    document.getElementById(n) ? n : null);
              },
            },
            {
              key: 'getPageDetails',
              value: function (e) {
                if (!e || !e.pageType)
                  throw new Error('Page type info missing');
                var t = e.pageType;
                if (-1 == this.allowedPageTypes.indexOf(t.toLowerCase()))
                  throw new Error('Invalid value for page type');
                return t;
              },
            },
            {
              key: 'getTemplateDetails',
              value: function (e) {
                var t = Object(n.e)(),
                  r = Object(n.d)();
                return e.unbxdDeviceType && e.unbxdDeviceType.mobileBrowser
                  ? 'mobile-browser'
                  : e.unbxdDeviceType && e.unbxdDeviceType.desktopBrowser
                  ? 'desktop-browser'
                  : t === n.a || r === n.b
                  ? 'mobile-browser'
                  : 'desktop-browser';
              },
            },
            {
              key: 'getClickHandler',
              value: function (e) {
                return e.itemClickHandler;
              },
            },
            {
              key: 'getDataParserHandler',
              value: function (e) {
                return e.dataParser;
              },
            },
            {
              key: 'getUrlEncodedParam',
              value: function (e, t) {
                return e + '=' + encodeURIComponent(t);
              },
            },
            {
              key: 'getProductIdsAsUrlParams',
              value: function (e) {
                var t = '',
                  r = this;
                return (
                  e instanceof Array
                    ? e.forEach(function (e) {
                        t += '&' + r.getUrlEncodedParam('id', e);
                      })
                    : (t += '&' + r.getUrlEncodedParam('id', e)),
                  t
                );
              },
            },
            {
              key: 'getCookie',
              value: function (e) {
                for (
                  var t, r, n = document.cookie.split(';'), i = 0;
                  i < n.length;
                  i++
                )
                  if (
                    ((t = n[i].split('=')[0]),
                    (r = n[i].split('=')[1]),
                    t.trim() === e)
                  )
                    return r;
              },
            },
            {
              key: 'renderWidgetDataHorizontal',
              value: function (e, t, r, n) {
                var i =
                    this.horizontalConfig.products.max ||
                    this.horizontalConfig.products.max_products,
                  o = e,
                  s = this.itemClickHandler;
                i < r.length && (r = r.splice(0, i));
                var a = {
                  template: this.horizontalTemplate,
                  targetDOMElementId: o,
                  recommendations: r,
                  heading: n,
                  rexConsoleConfigs: this.horizontalConfig,
                  assets: this.horizontalAssets,
                  maxProducts: i,
                  clickHandler: s,
                  dataParser: this.dataParser,
                  eventQueue: this.eventQueue,
                  widgetNum: t,
                  pageType: this.pageType,
                  reqId: this.reqId,
                  sliderClass: '_unbxd_recs-slider',
                  compressedStyle: this.compressedStyle,
                };
                _unbxd_generateRexContent(a);
              },
            },
            {
              key: 'renderWidgetDataVertical',
              value: function (e, t, r, n) {
                var i =
                    this.verticalConfig.products.max ||
                    this.verticalConfig.products.max_products,
                  o = e,
                  s = this.itemClickHandler;
                i < r.length && (r = r.splice(0, i));
                var a = {
                  template: this.verticalTemplate,
                  targetDOMElementId: o,
                  recommendations: r,
                  heading: n,
                  rexConsoleConfigs: this.verticalConfig,
                  assets: this.verticalAssets,
                  maxProducts: i,
                  clickHandler: s,
                  eventQueue: this.eventQueue,
                  dataParser: this.dataParser,
                  widgetNum: t,
                  pageType: this.pageType,
                  reqId: this.reqId,
                  isVertical: !0,
                  sliderClass: '_unbxd_recs-vertical-slider',
                  compressedStyle: this.compressedStyleVertical,
                };
                _unbxd_generateRexContent(a);
              },
            },
            {
              key: 'handleWidgetRenderingVertical',
              value: function () {
                if (this.widget3) {
                  var widget3Data = this.recommendationsResponse.widget3;
                  var widget3Heading = widget3Data.widgetTitle;
                  var widget3Recommendations = widget3Data.recommendations;
                  this.renderWidgetDataHorizontal(
                    this.widget3,
                    3,
                    widget3Recommendations,
                    widget3Heading
                  );
                }
              },
            },
            {
              key: 'handleWidgetRendering',
              value: function () {
                if (this.widget1) {
                  var e = this.recommendationsResponse.widget1,
                    t = e.widgetTitle,
                    r = e.recommendations;
                  this.renderWidgetDataHorizontal(this.widget1, 1, r, t);
                }
                if (this.widget2) {
                  var n = this.recommendationsResponse.widget2,
                    i = n.widgetTitle,
                    o = n.recommendations;
                  this.renderWidgetDataHorizontal(this.widget2, 2, o, i);
                }
              },
            },
          ]) && a(r.prototype, i),
          l && a(r, l),
          t
        );
      })();
    }.call(this, r(4)));
  },
  function (e, t, r) {
    var n;
    !(function (i) {
      'use strict';
      var o,
        s = {
          name: 'doT',
          version: '1.1.1',
          templateSettings: {
            evaluate: /\{\{([\s\S]+?(\}?)+)\}\}/g,
            interpolate: /\{\{=([\s\S]+?)\}\}/g,
            encode: /\{\{!([\s\S]+?)\}\}/g,
            use: /\{\{#([\s\S]+?)\}\}/g,
            useParams:
              /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
            define: /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
            defineParams: /^\s*([\w$]+):([\s\S]+)/,
            conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
            iterate:
              /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
            varname: 'it',
            strip: !0,
            append: !0,
            selfcontained: !1,
            doNotSkipEncoded: !1,
          },
          template: void 0,
          compile: void 0,
          log: !0,
        };
      (s.encodeHTMLSource = function (e) {
        var t = {
            '&': '&#38;',
            '<': '&#60;',
            '>': '&#62;',
            '"': '&#34;',
            "'": '&#39;',
            '/': '&#47;',
          },
          r = e ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
        return function (e) {
          return e
            ? e.toString().replace(r, function (e) {
                return t[e] || e;
              })
            : '';
        };
      }),
        (o = (function () {
          return this || (0, eval)('this');
        })()),
        e.exports
          ? (e.exports = s)
          : void 0 ===
              (n = function () {
                return s;
              }.call(t, r, t, e)) || (e.exports = n);
      var a = {
          append: {
            start: "'+(",
            end: ")+'",
            startencode: "'+encodeHTML(",
          },
          split: {
            start: "';out+=(",
            end: ");out+='",
            startencode: "';out+=encodeHTML(",
          },
        },
        l = /$^/;

      function d(e) {
        return e.replace(/\\('|\\)/g, '$1').replace(/[\r\t\n]/g, ' ');
      }
      (s.template = function (e, t, r) {
        var n,
          i,
          c = (t = t || s.templateSettings).append ? a.append : a.split,
          u = 0,
          p =
            t.use || t.define
              ? (function e(t, r, n) {
                  return ('string' == typeof r ? r : r.toString())
                    .replace(t.define || l, function (e, r, i, o) {
                      return (
                        0 === r.indexOf('def.') && (r = r.substring(4)),
                        r in n ||
                          (':' === i
                            ? (t.defineParams &&
                                o.replace(t.defineParams, function (e, t, i) {
                                  n[r] = {
                                    arg: t,
                                    text: i,
                                  };
                                }),
                              r in n || (n[r] = o))
                            : new Function('def', "def['" + r + "']=" + o)(n)),
                        ''
                      );
                    })
                    .replace(t.use || l, function (r, i) {
                      t.useParams &&
                        (i = i.replace(t.useParams, function (e, t, r, i) {
                          if (n[r] && n[r].arg && i) {
                            var o = (r + ':' + i).replace(/'|\\/g, '_');
                            return (
                              (n.__exp = n.__exp || {}),
                              (n.__exp[o] = n[r].text.replace(
                                new RegExp(
                                  '(^|[^\\w$])' + n[r].arg + '([^\\w$])',
                                  'g'
                                ),
                                '$1' + i + '$2'
                              )),
                              t + "def.__exp['" + o + "']"
                            );
                          }
                        }));
                      var o = new Function('def', 'return ' + i)(n);
                      return o ? e(t, o, n) : o;
                    });
                })(t, e, r || {})
              : e;
        (p = (
          "var out='" +
          (t.strip
            ? p
                .replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g, ' ')
                .replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g, '')
            : p
          )
            .replace(/'|\\/g, '\\$&')
            .replace(t.interpolate || l, function (e, t) {
              return c.start + d(t) + c.end;
            })
            .replace(t.encode || l, function (e, t) {
              return (n = !0), c.startencode + d(t) + c.end;
            })
            .replace(t.conditional || l, function (e, t, r) {
              return t
                ? r
                  ? "';}else if(" + d(r) + "){out+='"
                  : "';}else{out+='"
                : r
                ? "';if(" + d(r) + "){out+='"
                : "';}out+='";
            })
            .replace(t.iterate || l, function (e, t, r, n) {
              return t
                ? ((u += 1),
                  (i = n || 'i' + u),
                  (t = d(t)),
                  "';var arr" +
                    u +
                    '=' +
                    t +
                    ';if(arr' +
                    u +
                    '){var ' +
                    r +
                    ',' +
                    i +
                    '=-1,l' +
                    u +
                    '=arr' +
                    u +
                    '.length-1;while(' +
                    i +
                    '<l' +
                    u +
                    '){' +
                    r +
                    '=arr' +
                    u +
                    '[' +
                    i +
                    "+=1];out+='")
                : "';} } out+='";
            })
            .replace(t.evaluate || l, function (e, t) {
              return "';" + d(t) + "out+='";
            }) +
          "';return out;"
        )
          .replace(/\n/g, '\\n')
          .replace(/\t/g, '\\t')
          .replace(/\r/g, '\\r')
          .replace(/(\s|;|\}|^|\{)out\+='';/g, '$1')
          .replace(/\+''/g, '')),
          n &&
            (t.selfcontained ||
              !o ||
              o._encodeHTML ||
              (o._encodeHTML = s.encodeHTMLSource(t.doNotSkipEncoded)),
            (p =
              "var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : (" +
              s.encodeHTMLSource.toString() +
              '(' +
              (t.doNotSkipEncoded || '') +
              '));' +
              p));
        try {
          return new Function(t.varname, p);
        } catch (e) {
          throw e;
        }
      }),
        (s.compile = function (e, t) {
          return s.template(e, null, t);
        }),
        (i.doT = s);
    })(window);
  },
  function (e, t) {
    var r;
    r = (function () {
      return this;
    })();
    try {
      r = r || new Function('return this')();
    } catch (e) {
      'object' == typeof window && (r = window);
    }
    e.exports = r;
  },
  function (e, t, r) {
    'use strict';
    r.r(t);
    r(3);
    var n = function (e, t) {
        var r = 0,
          n = '#' + e + ' #_unbxd_recs-slider-container',
          i = document.querySelector(n);
        if (!i)
          return console.warn(
            'slider container id is missing. Execution can not continue'
          );
        var o = '#' + e + ' ._unbxd_recs-slider__item',
          s = document.querySelector(o);
        if (!s)
          return console.warn(
            'slider item tile class is missing. Execution can not continue'
          );
        var a = document.querySelector('#_unbxd_recs-slider'),
          l = window._unbxd_recsItemToScrollHz,
          d = 30 + 5 * l,
          c = s.clientWidth * l + 10 * l,
          u = setInterval(function () {
            var e;
            'left' == t
              ? ((e = r + d) > c && (d -= e - c), (i.scrollLeft -= d))
              : ((e = r + d) > c && (d -= e - c), (i.scrollLeft += d));
            if (
              ((r += d) >= c && window.clearInterval(u), 0 === i.scrollLeft)
            ) {
              var o = document.querySelector(n + ' ._unbxd_rex-slider--prev');
              if (!o)
                return console.warn('_unbxd_rex-slider--prev class missing');
              o.disabled = !0;
            }
            if (i.scrollLeft + i.clientWidth === a.clientWidth) {
              var s = document.querySelector(n + ' ._unbxd_rex-slider--next');
              if (!s)
                return console.warn('_unbxd_rex-slider--next class missing');
              s.disabled = !0;
            }
          }, 25);
      },
      i = function (e) {
        var t;
        try {
          t = e.currentTarget.parentElement.parentElement.parentElement;
        } catch (e) {
          console.warn(e);
        }
        if (t) {
          var r = t.id,
            n = '#' + r + ' ._unbxd_rex-slider--prev',
            i = document.querySelector(n);
          if (!i) return console.warn('_unbxd_rex-slider--prev class missing');
          i.disabled && (i.disabled = !1),
            _unbxd_recsSliderSideScroll(r, 'right');
        } else console.warn('target element not found. HTML was changed');
      },
      o = function () {
        var e;
        try {
          e = event.currentTarget.parentElement.parentElement.parentElement;
        } catch (e) {
          console.warn(e);
        }
        if (e) {
          var t = e.id,
            r = '#' + t + ' ._unbxd_rex-slider--next',
            n = document.querySelector(r);
          if (!n) return console.warn('_unbxd_rex-slider--next class missing');
          n.disabled && (n.disabled = !1),
            _unbxd_recsSliderSideScroll(t, 'left');
        } else console.warn('target element not found. HTML was changed');
      },
      s = function (e, t) {
        var r = 0,
          n = '#' + e + ' #_unbxd_recs-vertical-slider-container',
          i = document.querySelector(n);
        if (!i)
          return console.warn(
            'slider container id is missing. Execution can not continue'
          );
        var o = '#' + e + ' ._unbxd_recs-vertical-slider__item',
          s = document.querySelector(o);
        if (!s)
          return console.warn(
            'vertical slider item tile class is missing. Execution can not continue'
          );
        var a = 55,
          l = 1 * (s.clientWidth + 20),
          d = setInterval(function () {
            var n;
            'top' == t
              ? ((n = r + a) > l && (a -= n - l), (i.scrollLeft -= a))
              : ((n = r + a) > l && (a -= n - l), (i.scrollLeft += a));
            if (
              ((r += a) >= l && window.clearInterval(d), 0 === i.scrollLeft)
            ) {
              var o = document.querySelector(
                '#' + e + ' ._unbxd_rex-vertical-slider--top'
              );
              if (!o)
                return console.warn(
                  '#' + e + ' _unbxd_rex-vertical-slider--top class missing'
                );
              o.disabled = !0;
            }
            if (i.clientWidth + i.scrollLeft >= i.scrollWidth) {
              var s = document.querySelector(
                '#' + e + ' ._unbxd_rex-vertical-slider--bottom'
              );
              if (!s)
                return console.warn(
                  '#' + e + ' _unbxd_rex-vertical-slider--bottom class missing'
                );
              s.disabled = !0;
            }
          }, 40);
      },
      a = function () {
        var e;
        try {
          e = event.currentTarget.parentElement.parentElement.parentElement;
        } catch (e) {
          console.warn(e);
        }
        if (e) {
          var t = e.id,
            r = '#' + t + ' ._unbxd_rex-vertical-slider--top',
            n = document.querySelector(r);
          if (!n)
            return console.warn(
              '_unbxd_rex-vertical-slider--top class missing'
            );
          n.disabled && (n.disabled = !1),
            _unbxd_recsSliderVerticalScroll(t, 'bottom');
        } else console.warn('target element not found. HTML was changed');
      },
      l = function () {
        var e;
        try {
          e = event.currentTarget.parentElement.parentElement.parentElement;
        } catch (e) {
          console.warn(e);
        }
        if (e) {
          var t = e.id,
            r = '#' + t + ' ._unbxd_rex-vertical-slider--bottom',
            n = document.querySelector(r);
          if (!n)
            return console.warn(
              '_unbxd_rex-vertical-slider--bottom class missing'
            );
          n.disabled && (n.disabled = !1),
            _unbxd_recsSliderVerticalScroll(t, 'top');
        } else console.warn('target element not found. HTML was changed');
      },
      d = function (e) {
        return console.warn(e);
      },
      c = function (e, t, r, n) {
        for (
          var i = document.querySelectorAll('#' + n + ' .' + e), o = 0;
          o < i.length;
          o++
        ) {
          var s = document.createElement('img');
          (s.src = t), (s.alt = r), i[o].appendChild(s);
        }
      },
      u = function (e) {
        if (isNaN(e)) return console.warn('Invalid rating value provided'), '';
        var t,
          r,
          n = e / 0.5,
          i = 0,
          o = '';
        n % 2 != 0 && (i = 1), (r = 5 - ((t = Math.floor(n / 2)) + i));
        for (var s = 0; s < t; s++)
          o +=
            '<span class="_unbxd_rex-full-star recs-star _unbxd_rating-item"></span>';
        for (s = 0; s < i; s++)
          o +=
            '<span class="_unbxd_rex-half-star recs-star _unbxd_rating-item"></span>';
        for (s = 0; s < r; s++)
          o +=
            '<span class="_unbxd_rex-empty-star recs-star _unbxd_rating-item"></span>';
        return o;
      };

    function p(e, t, r) {
      return (
        "<span class='_unbxd-rating-value-container'><span class='_unbxd-rating-value-prefix _unbxd_rating-item'>" +
        t.prefix.text +
        "</span><span class='_unbxd-rating-value'>" +
        e[r] +
        '</span></span>'
      );
    }

    function f(e, t) {
      setTimeout(function () {
        for (
          var r = document.querySelectorAll(e + ' ._unbxd-rating-value-prefix'),
            n = document.querySelectorAll(e + ' ._unbxd-rating-value'),
            i = 0;
          i < r.length;
          i++
        )
          !(function (e) {
            for (var n = Object.keys(t.prefix.styles), i = 0; i < n.length; i++)
              r[e].style[n[i]] = t.prefix.styles[n[i]];
          })(i),
            (function (e) {
              for (
                var r = Object.keys(t.value.styles), i = 0;
                i < r.length;
                i++
              )
                n[e].style[r[i]] = t.value.styles[r[i]];
            })(i);
      }, 0);
    }
    var m = function (e, t, r, n) {
        if (e[n]) {
          var i = '';
          return (
            'value' === t.type
              ? ((i = p(e, t, n)), f(r, t))
              : 'image' === t.type
              ? (i = u(e[n]))
              : ((i =
                  'image' === t.sequence[0]
                    ? u(e[n]) + '<br>' + p(e, t, n)
                    : p(e, t, n) + '<br>' + u(e[n])),
                f(r, t)),
            i
          );
        }
      },
      g = function (e, t, r) {
        var n = t.products.strike_price_feature,
          i = n.new,
          o = n.old,
          s = n.discount,
          a = e[o.field],
          l = o.prefix,
          d = e[i.field],
          c = '';
        return (
          a && a > d
            ? ((c =
                "<p class='_unbxd_strike_through_container'><span class='_unbxd_strike_through_prefix'>" +
                l.text +
                "</span><span class='_unbxd_strike_through_text'>" +
                t.products.currency +
                a +
                '</span></p>'),
              (c +=
                "<p class='_unbxd_original_price_container'>" +
                (function (e) {
                  if (e.prefix.text)
                    return (
                      "<span class='_unbxd_item_display_text'>" +
                      e.prefix.text +
                      '</span>'
                    );
                  return '';
                })(i) +
                (function (e, t) {
                  return (
                    "<span class='_unbxd_original_price_value'>" +
                    e.products.currency +
                    t +
                    '</span>'
                  );
                })(t, d) +
                '</p>' +
                (function (e, t, r, n, i) {
                  var o = '';
                  if (e.enabled) {
                    var s = e.mode,
                      a = 0;
                    if ('percentage' == s) {
                      var l = ((t - r) / t) * 100;
                      (a = l % 1 == 0 ? l : parseFloat(l).toFixed(2)),
                        (a += '%');
                    } else {
                      var d = t - r;
                      (d = d % 1 == 0 ? d : parseFloat(d).toFixed(2)),
                        (a = n.products.currency + d);
                    }
                    e.prefix.text
                      ? ((o =
                          "<p class='_unbxd_item_discount_text'><span class='_unbxd_discount_text_label'>" +
                          e.prefix.text +
                          "</span><span class='_unbxd_discount_text_val'>" +
                          a +
                          '</span></p>'),
                        (function (e, t) {
                          setTimeout(function () {
                            for (
                              var r = document.querySelectorAll(
                                  t + ' ._unbxd_discount_text_val'
                                ),
                                n =
                                  e.products.strike_price_feature.discount.value
                                    .styles,
                                i = document.querySelectorAll(
                                  t + ' ._unbxd_discount_text_label'
                                ),
                                o =
                                  e.products.strike_price_feature.discount
                                    .prefix.styles,
                                s = 0;
                              s < r.length;
                              s++
                            )
                              !(function (e) {
                                for (
                                  var t = Object.keys(n), i = 0;
                                  i < t.length;
                                  i++
                                )
                                  r[e].style[t[i]] = n[t[i]];
                              })(s);
                            for (s = 0; s < i.length; s++)
                              !(function (e) {
                                for (
                                  var t = Object.keys(o), r = 0;
                                  r < t.length;
                                  r++
                                )
                                  i[e].style[t[r]] = o[t[r]];
                              })(s);
                          }, 0);
                        })(n, i))
                      : (o =
                          "<p class='_unbxd_discount_text_val'>" + a + '</p>');
                  }
                  return o;
                })(s, a, d, t, r)),
              (function (e, t) {
                setTimeout(function () {
                  for (
                    var r = document.querySelectorAll(
                        t + ' ._unbxd_strike_through_text'
                      ),
                      n = document.querySelectorAll(
                        t + ' ._unbxd_strike_through_prefix'
                      ),
                      i = e.products.strike_price_feature.old.value.styles,
                      o = e.products.strike_price_feature.old.prefix.styles,
                      s = 0;
                    s < r.length;
                    s++
                  )
                    !(function (e) {
                      for (var t = Object.keys(i), n = 0; n < t.length; n++)
                        r[e].style[t[n]] = i[t[n]];
                    })(s);
                  for (s = 0; s < n.length; s++)
                    !(function (e) {
                      for (var t = Object.keys(o), r = 0; r < t.length; r++)
                        n[e].style[t[r]] = o[t[r]];
                    })(s);
                }, 0),
                  setTimeout(function () {
                    for (
                      var r = document.querySelectorAll(
                          t + ' ._unbxd_original_price_value'
                        ),
                        n = e.products.strike_price_feature.new.value.styles,
                        i = document.querySelectorAll(
                          t + ' ._unbxd_item_display_text'
                        ),
                        o = e.products.strike_price_feature.new.prefix.styles,
                        s = 0;
                      s < r.length;
                      s++
                    )
                      !(function (e) {
                        for (var t = Object.keys(n), i = 0; i < t.length; i++)
                          r[e].style[t[i]] = n[t[i]];
                      })(s);
                    for (s = 0; s < i.length; s++)
                      !(function (e) {
                        for (var t = Object.keys(o), r = 0; r < t.length; r++)
                          i[e].style[t[r]] = o[t[r]];
                      })(s);
                  }, 0);
              })(t, r))
            : (c =
                "<p class='_unbxd_original_price_container'>" +
                t.products.currency +
                d +
                '</p>'),
          c
        );
      };
    var _ = r(1),
      v = r.n(_),
      h = r(2),
      x = r(0);
    !(function (e) {
      function t(e, t) {
        for (var r = t.charAt(0); e && e !== document; e = e.parentNode) {
          if ('.' === r && e.classList.contains(t.substr(1))) return e;
          if ('#' === r && e.id === t.substr(1)) return e;
          if ('[' === r && e.hasAttribute(t.substr(1, t.length - 2))) return e;
          if (e.tagName.toLowerCase() === t) return e;
        }
        return !1;
      }
      var r,
        u,
        p,
        f,
        _,
        b,
        w,
        y = v.a.production.url,
        T = ['home', 'product', 'category', 'cart'],
        S = {};
      (S.home = {
        widget1: 'unbxd_rex_home_w1',
        widget2: 'unbxd_rex_home_w2',
        widget3: 'unbxd_rex_home_w3',
      }),
        (S.product = {
          widget1: 'unbxd_rex_product_w1',
          widget2: 'unbxd_rex_product_w2',
          widget3: 'unbxd_rex_product_w3',
        }),
        (S.category = {
          widget1: 'unbxd_rex_category_w1',
          widget2: 'unbxd_rex_category_w2',
          widget3: 'unbxd_rex_category_w3',
        }),
        (S.cart = {
          widget1: 'unbxd_rex_cart_w1',
          widget2: 'unbxd_rex_cart_w2',
          widget3: 'unbxd_rex_cart_w3',
        });
      (e._unbxd_recsSliderScrollNext = i),
        (e._unbxd_recsSliderScrollPrev = o),
        (e._unbxd_recsSliderSideScroll = n),
        (e._unbxd_recsSliderScrollBottom = a),
        (e._unbxd_recsSliderScrollTop = l),
        (e._unbxd_recsSliderVerticalScroll = s);
      var E = {
        horizontal: {
          containerId: ' #_unbxd_recs-slider-container',
          sliderItemClassSelector: ' ._unbxd_recs-slider__item',
          dimension: 'width',
          offsetDimension: 'offsetWidth',
          buttonClassSelector: '._unbxd_recs-slider-btn',
          prevButtonClass: '_unbxd_rex-slider--prev',
          nextButtonClass: '_unbxd_rex-slider--next',
          headingContainerId: ' #_unbxd_recs-slider-heading',
          sliderContentClass: '_unbxd_recs-slider__content',
        },
        vertical: {
          containerId: ' #_unbxd_recs-vertical-slider-container',
          sliderItemClassSelector: ' ._unbxd_recs-vertical-slider__item',
          dimension: 'height',
          offsetDimension: 'offsetHeight',
          buttonClassSelector: '._unbxd_recs-vertical-slider-btn',
          prevButtonClass: '_unbxd_rex-vertical-slider--top',
          nextButtonClass: '_unbxd_rex-vertical-slider--bottom',
          headingContainerId: ' #_unbxd_recs-vertical-slider-heading',
          sliderContentClass: '_unbxd_recs-vertical-slider__content',
        },
      };

      function C(e, t) {
        throw new Error('Error: ' + e + ' not found in ' + JSON.stringify(t));
      }

      function k(e, t, r) {
        /hz-item/.test(e) && t(r[e.split('-')[2]]);
      }

      function I(e, t, r, n) {
        if (/[0-9]-vt-level2-/.test(e)) {
          var i = e.split('-')[3];
          r(n[t.split('-')[3]][i]);
        }
      }

      function P(e, r) {
        var n = r.rexConsoleConfigs,
          i = r.recommendations,
          o = r.clickHandler,
          s = r.itemsToShow,
          a = r.itemWidth,
          l = r.itemWidthUnit,
          u = r.maxProducts,
          p = r.assets,
          f = r.sliderType,
          _ = r.sliderClass,
          v = r.recommendationsModified,
          h = E[f],
          x = '#' + e + h.containerId,
          b = document.querySelector(x),
          w = r.widgetWidth,
          y = n.products.ratings_feature || n.products.ratingsFeature;
        if (!b)
          return d(
            'The slider container id was not found. Script can not continue'
          );
        var T = '#' + e + h.sliderItemClassSelector,
          S = document.querySelectorAll(T);
        if (!S.length)
          return d('Found 0 nodes with class : ' + h.sliderItemClassSelector);
        var P = n.products.fields || C('products.fields', n);
        P = P.sort(function (e, t) {
          return (
            (t.sequence = t.sequence || t.sequence_number),
            (e.sequence = e.sequence || e.sequence_number),
            t.sequence < e.sequence ? 1 : -1
          );
        });
        var O = h.dimension;
        o &&
          ('width' == h.dimension
            ? b.addEventListener('click', function (e) {
                '_unbxd_recs-slider__item' == e.target.className
                  ? k(e.target.id, o, i)
                  : k(t(e.target, '._unbxd_recs-slider__item').id, o, i);
              })
            : b.addEventListener('click', function (e) {
                if ('_unbxd_recs-vertical-slider__item' == e.target.className) {
                  var r = e.target.parentElement.id;
                  I(e.target.id, r, o, v);
                } else {
                  var n = t(e.target, '._unbxd_recs-vertical-slider__item');
                  r = n.parentElement.id;
                  I(n.id, r, o, v);
                }
              }));
        for (var H = 0; H < S.length; H++) {
          for (
            var D = document.createDocumentFragment(), q = 0;
            q < P.length;
            q++
          ) {
            var M = P[q].styles || C('styles', P[q]),
              L =
                P[q].unbxdDimensionKey ||
                P[q].catalogKey ||
                C('unbxdDimensionKey or catalogKey', P[q]),
              A = Object.keys(M);
            if ((i[H][L] || (L = P[q].catalogKey), 'imageUrl' != L)) {
              var R = document.createElement('p');
              O = i[H][L];
              if (
                ((R.className = h.sliderContentClass),
                (R.tabIndex = 0),
                R.setAttribute('role', 'button'),
                n.products.strike_price_feature &&
                  L == n.products.strike_price_feature.new.field)
              )
                n.products.strike_price_feature.enabled
                  ? (R.innerHTML = g(i[H], n, x))
                  : (R.innerHTML = n.products.currency + O);
              else if (
                y &&
                y.enabled &&
                P[q].unbxdDimensionKey &&
                'rating' == P[q].unbxdDimensionKey.toLowerCase()
              ) {
                var N = m(i[H], y, x, L);
                N && (R.innerHTML = N);
              } else
                R.innerHTML = O ? (O instanceof Array ? O.join(', ') : O) : '';
              if (R.innerHTML) {
                for (var W = 0; W < A.length; W++) R.style[A[W]] = M[A[W]];
                D.appendChild(R);
              }
            }
          }
          S[H].appendChild(D);
        }
        var j = '#' + e + ' .' + _,
          z = document.querySelector(j);
        if (!z) return d('Slider Parent id was not found in the DOM');
        var U = u;
        if (
          (i.length < u && (U = i.length),
          'width' == h.dimension
            ? setTimeout(function () {
                var t = document.querySelector('#' + e + ' .unbxd-recs-slider'),
                  r = t.parentElement;
                (t.style.width = w || 'initial'),
                  r.clientWidth < t.clientWidth &&
                    (t.style.width = r.clientWidth + 'px'),
                  (b.style.width = b[h.offsetDimension] + 'px');
                var n = (b[h.offsetDimension] - 10 * s) / s;
                if (a)
                  if ('%' === l)
                    for (
                      var i = 0.01 * a * b[h.offsetDimension], o = 0;
                      o < S.length;
                      o++
                    )
                      (S[o].style.width = i + 'px'),
                        (z.style.width = U * i + 10 * U + 'px');
                  else
                    for (o = 0; o < S.length; o++)
                      (S[o].style.width = a + l),
                        (z.style.width = U * a + 10 * U + l);
                else
                  for (o = 0; o < S.length; o++)
                    (S[o].style.width = n + 'px'),
                      (z.style.width = U * n + 10 * U + 'px');
                document
                  .querySelector('#' + e + ' ._unxbd_slider_hide')
                  .classList.remove('_unxbd_slider_hide');
              }, 0)
            : setTimeout(function () {
                var t = document.querySelector(
                    '#' + e + ' ._unbxd_vertical-recs-slider'
                  ),
                  r = t.parentElement;
                if (
                  ((t.style.width = w || 'initial'),
                  r.clientWidth < t.clientWidth &&
                    (t.style.width = r.clientWidth + 'px'),
                  a)
                )
                  for (var n = 0; n < S.length; n++) S[n].style.width = a + l;
                else
                  for (n = 0; n < S.length; n++)
                    S[n].style.width = t.clientWidth - 20 + 'px';
                (z.style.width = t.clientWidth * v.length + 'px'),
                  document
                    .querySelector('#' + e + ' ._unxbd_slider_hide')
                    .classList.remove('_unxbd_slider_hide');
              }, 0),
          i.length <= s)
        ) {
          var V = '#' + e + ' ' + h.buttonClassSelector,
            B = document.querySelectorAll(V);
          if (!B || !B.length)
            return d(
              h.buttonClassSelector + 'class not found on navigation buttons'
            );
          for (H = 0; H < B.length; H++) B[H].style.display = 'none';
        }
        var F = '#' + e + ' .' + h.prevButtonClass,
          G = document.querySelector(F);
        if (!G)
          return d(
            h.prevButtonClass + ' class was not found on the navigation buttons'
          );
        G.disabled = !0;
        var $ = [],
          K = {
            next_arrow: h.nextButtonClass,
            prev_arrow: h.prevButtonClass,
            empty_rating: '_unbxd_rex-empty-star',
            half_rating: '_unbxd_rex-half-star',
            full_rating: '_unbxd_rex-full-star',
          },
          Q = {
            next_arrow: 'Next Arrow',
            prev_arrow: 'Previous Arrow',
            empty_rating: 'Empty star',
            half_rating: 'half star',
            full_rating: 'full star',
          };
        for (H = 0; H < p.length; H++) {
          var J = p[H];
          $.push({
            classname: K[J.tag],
            altText: Q[J.tag],
            url: J.src,
          });
        }
        !(function (e, t) {
          for (var r = 0; r < e.length; r++)
            c(e[r].classname, e[r].url, e[r].altText, t);
        })($, e);
        var Y = '#' + e + h.headingContainerId,
          X = n.header,
          Z = document.querySelector(Y);
        'null' == Z.innerHTML || 'undefined' == Z.innerHTML
          ? (Z.style.display = 'none')
          : ((Z.style.textAlign = X.alignment),
            (Z.style.fontSize = X.text.size.value + X.text.size.unit),
            (Z.style.fontWeight = X.text.style),
            (Z.style.color = X.text.colour));
      }
      (e.eventQueue = {}),
        (e._unbxd_registerHook = function (t, r) {
          e.eventQueue[t] = r;
        }),
        (e._unbxd_generateRexContent = function (t) {
          var r = t.template || C('template', t),
            n = t.targetDOMElementId || C('targetDOMElementId', t),
            i = t.recommendations || C('recommendations', t),
            o = t.heading || C('heading', t),
            s = t.rexConsoleConfigs || C('rexConsoleConfigs', t),
            a = s.products.visible || C('products.visible', s),
            l = s.products.max || C('products.max', s.products),
            c = t.clickHandler,
            u = t.dataParser,
            p = t.eventQueue,
            f = t.isVertical || !1,
            m = s.css || C('css', s),
            g = null,
            _ = s.widget.width || C('products.widget.width', s.widget),
            v = '';
          _.value && 0 != _.value && (v = _.value + _.unit);
          var h,
            b,
            w = doT.template(r),
            y = document.getElementById(n),
            T = Object(x.e)(),
            S = Object(x.d)();
          if (
            ('mobile-browser' === window.unbxdDeviceType ||
            'mobile-browser' === t.unbxdDeviceType ||
            T === x.a ||
            S === x.b
              ? ((h =
                  (s.products && s.products.width && s.products.width.value) ||
                  0),
                (b =
                  (s.products && s.products.width && s.products.width.unit) ||
                  'px'),
                (a =
                  (s && s.products && s.products.visibleOn
                    ? s.products.visibleOn.mobile
                    : s.products.visible) || 2))
              : (a =
                  (a =
                    s && s.products && s.products.visibleOn
                      ? s.products.visibleOn.desktop
                      : s.products.visible) || 2),
            !y)
          )
            return d(
              'The target element id <' +
                n +
                '> is not present in DOM. Execution can not continue'
            );
          if ((l < i.length && (i = i.splice(0, l)), f)) {
            g = [];
            for (var E = 0; E < i.length; E++)
              if (E % a == 0) {
                var k = i.slice(E, E + a);
                g.push(k);
              }
          }
          var I = {
            recommendations: g || i,
            heading: o,
            analyticsData: {
              widgetNum: 'WIDGET' + t.widgetNum,
              pageType: t.pageType,
              requestId: t.reqId,
            },
          };
          (u && 'function' == typeof u && (I = u(I)),
          p && 'function' == typeof p.beforeTemplateRender) &&
            (I = (0, p.beforeTemplateRender)(I));
          document.getElementById(n).innerHTML = w(I);
          var O = {
            rexConsoleConfigs: s,
            recommendations: i,
            recommendationsModified: g,
            clickHandler: c,
            itemsToShow: a,
            itemWidth: h,
            itemWidthUnit: b,
            maxProducts: l,
            assets: t.assets,
            sliderType:
              f || 'mobile-browser' === !window.unbxdDeviceType
                ? 'vertical'
                : 'horizontal',
            sliderClass:
              f || 'mobile-browser' === !window.unbxdDeviceType
                ? '_unbxd_recs-vertical-slider'
                : '_unbxd_recs-slider',
            widgetWidth: v,
          };
          f
            ? (e._unbxd_recsItemToScrollVt = a)
            : (window.unbxdDeviceType, (e._unbxd_recsItemToScrollHz = a));
          var H = document.createElement('style');
          ((H.type = 'text/css'),
          (H.innerHTML = m),
          document.head.appendChild(H),
          P(n, O),
          p && 'function' == typeof p.afterTemplateRender) &&
            (I = (0, p.afterTemplateRender)(f));
        }),
        (e.getUnbxdRecommendations = h.a),
        (e._unbxd_getRecommendations = function (t) {
          function n(e, t, r) {
            var n;
            return r
              ? r[t]
                ? r[t].name
                : null
              : ((n = S[e.toLowerCase()][t]),
                document.getElementById(n) ? n : null);
          }

          function i(e, t) {
            return e + '=' + encodeURIComponent(t);
          }
          var o = (function (e) {
            if (!e || !e.pageType) throw new Error('Page type info missing');
            var t = e.pageType;
            if (-1 == T.indexOf(t.toLowerCase()))
              throw new Error('Invalid value for page type');
            return t;
          })(t.pageInfo);
          window.unbxdDeviceType = (function (e) {
            var t = Object(x.e)(),
              r = Object(x.d)();
            return e.unbxdDeviceType && e.unbxdDeviceType.mobileBrowser
              ? 'mobile-browser'
              : e.unbxdDeviceType && e.unbxdDeviceType.desktopBrowser
              ? 'desktop-browser'
              : t === x.a || r === x.b
              ? 'mobile-browser'
              : 'desktop-browser';
          })(t);
          var s = t.widgets;
          if (
            ((r = n(o, 'widget1', s)),
            (u = n(o, 'widget2', s)),
            (p = n(o, 'widget3', s)),
            !r && !u && !p)
          )
            throw new Error('No widget id provided');
          var a = (function (e) {
              return e.itemClickHandler;
            })(t),
            l = (function (e) {
              return e.dataParser;
            })(t),
            d = e.eventQueue,
            c = t.userInfo,
            m =
              (c && c.userId) ||
              (function (e) {
                for (
                  var t, r, n = document.cookie.split(';'), i = 0;
                  i < n.length;
                  i++
                )
                  if (
                    ((t = n[i].split('=')[0]),
                    (r = n[i].split('=')[1]),
                    t.trim() === e)
                  )
                    return r;
              })('unbxd.userId'),
            g = (c && c.siteKey) || e.UnbxdSiteName,
            v = (c && c.apiKey) || e.UnbxdApiKey,
            h = y + v + '/' + g + '/items?&template=true&pageType=';
          if (!m) throw new Error('user id is missing');
          if (!g) throw new Error('site Key is missing');
          if (!v) throw new Error('api key is missing');
          h += encodeURIComponent(o);
          var E,
            C,
            k,
            I,
            P,
            O,
            H = t.pageInfo;
          switch (o.toLowerCase()) {
            case 'product':
            case 'cart':
              H.productIds &&
                (h +=
                  ((E = H.productIds),
                  (C = ''),
                  E instanceof Array
                    ? E.forEach(function (e) {
                        C += '&' + i('id', e);
                      })
                    : (C += '&' + i('id', E)),
                  C));
              break;
            case 'category':
              var D = '',
                q = H.catlevel1Name,
                M = H.catlevel2Name,
                L = H.catlevel3Name,
                A = H.catlevel4Name;
              q &&
                ((D = '&' + i('catlevel1Name', q)),
                M &&
                  ((D += '&' + i('catlevel2Name', M)),
                  L &&
                    ((D += '&' + i('catlevel3Name', L)),
                    A && (D += '&' + i('catlevel4Name', A))))),
                (h += D);
              break;
            case 'home':
              break;
            default:
              throw new Error('Invalid page type: ' + o);
          }

          function R(e, t, r, n) {
            var i = f.products.max || f.products.max_products,
              s = e,
              c = a;
            r.length &&
              (i < r.length && (r = r.splice(0, i)),
              _unbxd_generateRexContent({
                template: I,
                targetDOMElementId: s,
                recommendations: r,
                heading: n,
                rexConsoleConfigs: f,
                assets: _,
                maxProducts: i,
                clickHandler: c,
                dataParser: l,
                eventQueue: d,
                widgetNum: t,
                pageType: o,
                reqId: O,
                sliderClass: '_unbxd_recs-slider',
                compressedStyle: void 0,
              }));
          }

          function N() {
            if (p) {
              var e = k.widget3,
                t = e.widgetTitle,
                r = e.recommendations;
              (n = p),
                (i = 3),
                (s = r),
                (c = t),
                (u = b.products.max || b.products.max_products),
                (f = n),
                (m = a),
                s.length &&
                  (u < s.length && (s = s.splice(0, u)),
                  _unbxd_generateRexContent({
                    template: P,
                    targetDOMElementId: f,
                    recommendations: s,
                    heading: c,
                    rexConsoleConfigs: b,
                    assets: w,
                    maxProducts: u,
                    clickHandler: m,
                    eventQueue: d,
                    dataParser: l,
                    widgetNum: i,
                    pageType: o,
                    reqId: O,
                    isVertical: !0,
                    sliderClass: '_unbxd_recs-vertical-slider',
                    compressedStyle: void 0,
                  }));
            }
            var n, i, s, c, u, f, m;
          }

          function W(e, t) {
            if (e) throw new Error('Failed to fetch templates');
            (I = t),
              (function () {
                if (r) {
                  var e = k.widget1,
                    t = e.widgetTitle,
                    n = e.recommendations;
                  R(r, 1, n, t);
                }
                if (u) {
                  var i = k.widget2,
                    o = i.widgetTitle,
                    s = i.recommendations;
                  R(u, 2, s, o);
                }
                if (p && window.allHorizontal) {
                  var ii = k.widget3,
                    o = ii.widgetTitle,
                    s = ii.recommendations;
                  R(p, 2, s, o);
                }
              })();
          }

          function j(e, t) {
            if (!window.allHorizontal) {
              if (e) throw new Error('Failed to fetch templates');
              (P = t), N();
            }
          }
          (h += '&uid=' + m),
            Object(x.c)(h, !0, function (e, t, r) {
              if (e) throw new Error('Failed to fetch recommendations');
              if (
                ((k = JSON.parse(t)), (I = k.template.horizontal), (O = r), I)
              ) {
                (f = I.conf), (_ = f.assets);
                var n = I.scriptUrl;
                n
                  ? Object(x.c)(n, !1, W)
                  : console.warn(
                      'script url not found for horizontal template'
                    );
              }
              if ((P = k.template.vertical)) {
                (b = P.conf), (w = b.assets);
                var i = P.scriptUrl;
                i
                  ? Object(x.c)(i, !1, j)
                  : console.warn('script url not found for vertical template');
              }
            });
        });
    })(window);
  },
]);
document.addEventListener('DOMContentLoaded', () => {
  window._unbxd_getRecommendations({
    widgets: {
      widget1: {
        name: 'widget1',
      },
      widget2: {
        name: 'widget2',
      },
      widget3: {
        name: 'widget3',
      },
    },
    userInfo: {
      userId: 'uid-1649143621080-36218',
      siteKey: window.UnbxdSiteName,
      apiKey: window.UnbxdApiKey,
    },
    pageInfo: {
      pageType: 'HOME',
    },
    itemClickHandler: function (product) {
      window.location = window.location.origin + product.productUrl;
      //  var pData = (JSON.stringify(product));
      //alert(product.productUrl);
    },
    dataParser: function (templateData) {
      if (templateData.recommendations) {
        for (i = 0; i < templateData.recommendations.length; i++) {
          if (templateData.recommendations[i].v_compareAtPrice) {
            var comparePrice = templateData.recommendations[i].v_compareAtPrice;
            templateData.recommendations[i].v_compareAtPrice =
              comparePrice.toFixed(2);
          }
          if (templateData.recommendations[i].price) {
            var price = templateData.recommendations[i].price;
            templateData.recommendations[i].price = price.toFixed(2);
          }
        }
      }
      return templateData;
    },
  });
});
