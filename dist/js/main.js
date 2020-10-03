/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/components/components.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/components/components.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! choices.js */ "./node_modules/choices.js/public/assets/scripts/choices.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_0__);

document.addEventListener('DOMContentLoaded', function () {
  selectInit();
});

var selectInit = function selectInit() {
  var selects = document.querySelectorAll('.select-block');

  if (selects.length > 0) {
    selects.forEach(function (element) {
      var selectInstance = new choices_js__WEBPACK_IMPORTED_MODULE_0___default.a(element.querySelector('select'), {
        searchEnabled: false,
        itemSelectText: '',
        noResultsText: 'Результатов нет',
        noChoicesText: 'Нет опций для выбора',
        maxItemText: function maxItemText(maxItemCount) {
          return "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E ".concat(maxItemCount, " \u043E\u043F\u0446\u0438\u0438(-\u0438\u0439) \u0434\u043B\u044F \u0432\u044B\u0431\u043E\u0440\u0430.");
        }
      });
    });
  }
};

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var fixedHeader = document.querySelector('.header-fixed-bar');
  var body = document.body;

  if (fixedHeader) {
    window.addEventListener('scroll', function () {
      if (body.getBoundingClientRect().top < 0) {
        fixedHeader.classList.add('is-modified');
      } else {
        fixedHeader.classList.remove('is-modified');
      }
    });
  }

  var mobileMenuTriggers = document.querySelectorAll('.mobile-menu-trigger');

  if (mobileMenuTriggers.length > 0) {
    var wrapper = document.querySelector('.mobile-menu-wrapper');
    mobileMenuTriggers.forEach(function (each) {
      each.addEventListener('click', function () {
        wrapper.classList.toggle('is-opened');
      });
    });
    document.body.addEventListener('click', function (e) {
      if (e.target === wrapper) {
        wrapper.classList.remove('is-opened');
      }
    });
  }
});

/***/ }),

/***/ "./src/blocks/modules/main-reviews/main-reviews.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/main-reviews/main-reviews.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_0__["EffectFade"]]);
document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.main-reviews-aside') && window.innerWidth < 993 && !document.body.classList.contains('mobile-mode')) {
    sliderInit();
    document.body.classList.add('mobile-mode');
    console.log(1);
  } else {
    window.addEventListener('resize', function () {
      if (document.querySelector('.main-reviews-aside') && window.innerWidth < 993 && !document.body.classList.contains('mobile-mode')) {
        sliderInit();
        document.body.classList.add('mobile-mode');
      } else if (document.querySelector('.main-reviews-aside') && window.innerWidth > 992 && document.body.classList.contains('mobile-mode')) {
        sliderDestroy();
        document.body.classList.remove('mobile-mode');
      }
    });
  }
});

var sliderInit = function sliderInit() {
  var wrapper = document.querySelector('.main-reviews-aside');
  var sliderInner = wrapper.querySelector('.main-reviews-aside-list');
  var counterInner = wrapper.querySelector('.main-reviews-aside-controls__curr');
  var sliderWrapper = document.createElement('div');
  sliderWrapper.className = 'swiper-wrapper';
  var slides = sliderInner.querySelectorAll('.main-reviews-aside__company');
  slides.forEach(function (slide) {
    slide.classList.add('swiper-slide');
    sliderWrapper.appendChild(slide);
  });
  sliderInner.appendChild(sliderWrapper);
  var swiperSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](sliderInner, {
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      prevEl: '.main-reviews-aside__prev',
      nextEl: '.main-reviews-aside__next'
    },
    on: {
      slideChange: function slideChange() {
        counterInner.innerHTML = swiperSlider.activeIndex + 1;
      }
    }
  });
  window.swiperSlider = swiperSlider;
};

var sliderDestroy = function sliderDestroy() {
  swiperSlider.destroy();
  var wrapper = document.querySelector('.main-reviews-aside');
  var sliderInner = wrapper.querySelector('.main-reviews-aside-list');
  var sliderWrapper = wrapper.querySelector('.swiper-wrapper');
  var slides = sliderInner.querySelectorAll('.main-reviews-aside__company');
  var counterInner = wrapper.querySelector('.main-reviews-aside-controls__curr');
  slides.forEach(function (each) {
    each.classList.remove('swiper-slide');
    sliderInner.appendChild(each);
  });
  sliderWrapper.parentElement.removeChild(sliderWrapper);
  counterInner.innerHTML = '1';
};

/***/ }),

/***/ "./src/blocks/modules/modals/modals.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/modals/modals.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

if (document.querySelector('.overlay')) {
  // Основные/главные переменные.
  var $overlay = document.querySelector('.overlay');
  var $overlayCloseTrigger = document.querySelector('.overlay-trigger');
  var $modals = document.querySelectorAll('.modal'); // Закрытие открытых модалок при клике вне их области.

  document.addEventListener('click', function (e) {
    if (e.target.contains($overlayCloseTrigger) && $overlay.classList.contains('is-opened')) {
      $modals.forEach(function (each) {
        if (each.classList.contains('is-opened')) {
          closeModal(each);
        }
      });
    }
  }); // Открытие модального окна. Переменная - объект модалки.

  var openModal = function openModal(currModal) {
    if (currModal && _typeof(currModal) == 'object' && !currModal.classList.contains('is-opened')) {
      var currOpenModal = document.querySelector('.modal.is-opened') ? document.querySelector('.modal.is-opened') : null;
      var closeTrigger = currModal.querySelector('.modal-close');

      var animatingFunction = function animatingFunction(animatingModal) {
        animatingModal.style.display = 'block';
        setTimeout(function () {
          animatingModal.classList.add('is-opened');
        }, 50);
      };

      if (currOpenModal != null) {
        currOpenModal.classList.remove('is-opened');
        currOpenModal.style.display = 'none';
      }

      if (!$overlay.classList.contains('.is-opened')) {
        document.body.style.overflow = 'hidden';
        $overlay.classList.add('is-opened');
        animatingFunction(currModal);
      } else {
        animatingFunction(currModal);
      }

      closeTrigger.addEventListener('click', function (e) {
        e.preventDefault();
        closeModal(currModal);
      });
      return true;
    } else {
      console.warn('Cant find modal or its already opened!');
    }
  }; // Закрытие модального окна. Переменная - объект модалки.


  var closeModal = function closeModal(closingModal) {
    if (closingModal && _typeof(closingModal) == 'object' && closingModal.classList.contains('is-opened')) {
      closingModal.classList.remove('is-opened');
      $overlay.classList.remove('is-opened');
      setTimeout(function () {
        closingModal.style.display = 'none';
      }, 300);
      document.body.style.overflow = '';
      return true;
    } else {
      console.warn('Cant find modal or its already closed!');
    }
  }; // Бинд модалок на элемент. Первая и вторая переменная - классы элементов.


  var _bindModal = function _bindModal(modalClass, triggerClass) {
    if (document.querySelector(triggerClass) && document.querySelector(modalClass)) {
      var $triggers = document.querySelectorAll(triggerClass);
      var $modal = document.querySelector(modalClass);
      $triggers.forEach(function (trigger) {
        trigger.addEventListener('click', function (e) {
          e.preventDefault();

          if (!$modal.classList.contains('is-opened')) {
            openModal($modal);
          }
        });
      });
    } else {
      console.warn('Cant find modal or trigger element');
    }
  }; // Добавление методов к модалкам


  if ($modals) {
    $modals.forEach(function ($modal) {
      $modal.openModal = function () {
        openModal($modal);
      };

      $modal.closeModal = function () {
        closeModal($modal);
      };
    });
  } // Добавления функций управления модальными окнами в глобальную область видимости.


  window.bindModal = _bindModal;
  window.openModal = openModal;
  window.closeModal = closeModal;
}

document.addEventListener('DOMContentLoaded', function () {
  bindModal('.modal-login', '.trigger-login');
  bindModal('.modal-reg', '.trigger-reg');
});

/***/ }),

/***/ "./src/blocks/modules/search-input/search-input.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/search-input/search-input.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarekraafat_autocomplete_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarekraafat/autocomplete.js */ "./node_modules/@tarekraafat/autocomplete.js/dist/js/autoComplete.min.js");
/* harmony import */ var _tarekraafat_autocomplete_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarekraafat_autocomplete_js__WEBPACK_IMPORTED_MODULE_0__);

document.addEventListener('DOMContentLoaded', function () {
  autoCompleteInit();
});

var autoCompleteInit = function autoCompleteInit() {
  if (document.querySelector('.autocomplete-holder')) {
    var allHolders = document.querySelectorAll('.autocomplete-holder');
    allHolders.forEach(function (element) {
      var inputInner = element.querySelector('.autocomplete');
      var autoCompleteInstance = new _tarekraafat_autocomplete_js__WEBPACK_IMPORTED_MODULE_0___default.a({
        data: {
          src: ['Пример', 'Длинный пример', ' Пример 3', ' Пример 4']
        },
        placeHolder: element.querySelector('.autocomplete').getAttribute('data-placeholder'),
        selector: function selector() {
          return element.querySelector('.autocomplete');
        },
        threshold: 3,
        searchEngine: "strict",
        resultsList: {
          render: true,
          container: function container(source) {
            source.setAttribute("class", "unstyled res_list");
          },
          destination: element.querySelector(".autocomplete"),
          position: "afterend",
          element: "ul"
        },
        highlight: true,
        resultItem: {
          content: function content(data, source) {
            source.innerHTML = data.match;
            element.classList.add('is-opened');
          },
          element: "li"
        },
        noResults: function noResults() {
          var result = document.createElement("li");
          result.setAttribute("class", "no_result");
          result.setAttribute("tabindex", "1");
          result.innerHTML = "Такой компании не найдено :(";
          element.querySelector("#autoComplete_list").appendChild(result);
        },
        onSelection: function onSelection(feedback) {
          element.querySelector('.autocomplete').value = feedback.selection.value;
          element.classList.remove('is-opened');
        }
      });
      inputInner.addEventListener('input', function () {
        if (inputInner.value.length < 4) {
          element.classList.remove('is-opened');
        } else {
          element.classList.add('is-opened');
        }
      });
      document.body.addEventListener('click', function (e) {
        if (e.target != element && element.classList.contains('is-opened')) {
          element.classList.remove('is-opened');
        }
      });
    });
  }
};

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_components_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/components/components */ "./src/blocks/modules/components/components.js");
/* harmony import */ var _modules_modals_modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/modals/modals */ "./src/blocks/modules/modals/modals.js");
/* harmony import */ var _modules_modals_modals__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_modals_modals__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_search_input_search_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/search-input/search-input */ "./src/blocks/modules/search-input/search-input.js");
/* harmony import */ var _modules_main_reviews_main_reviews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/main-reviews/main-reviews */ "./src/blocks/modules/main-reviews/main-reviews.js");







/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map