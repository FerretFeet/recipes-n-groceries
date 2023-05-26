"use strict";
(self["webpackChunkrecipes_n_groceries"] = self["webpackChunkrecipes_n_groceries"] || []).push([["src_recipeLibrary_recipeHTML_js-src_recipeLibrary_recipeLibrary_js"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "header {\n    min-height: 15vh;\n}\n\n.tp-lvl-nav {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    min-height: 15vh;\n}\n\n\n.tp-lvl-nav,\n.tp-lvl-nav > li > a,\n.secondary-lvl-nav,\n.secondary-lvl-nav > li > a  {\n    text-decoration: none;\n    list-style: none;\n    color: inherit;\n}\n\n.remove-selected-recipe {\n    width: 1rem;\n    height: 1rem;\n    display: relative;\n}\n/* .remove-selected-recipe::after {\n    display: absolute;\n    content: 'x'\n} */\n\n/* .container {\n    display: flex;\n    gap: 2rem;\n    justify-content: center;\n}\n\n.container button {\n    height: fit-content;\n    width: fit-content;\n    font-size: 24pt;\n    padding: auto;\n    font-weight: bold;\n    align-self: center;\n}\n\nform {\n    display: grid;\n    justify-content: space-around;\n    justify-items: center;\n    gap: 1rem;\n    width: 100%;\n    grid-template-columns: repeat(auto-fill, 300px);\n}\n\nform > * {\n    display: grid;\n    justify-content: center;\n    overflow-y: auto;\n    height: clamp(60px, 6rem, 400px);\n    margin: none;\n}\nform > * > textarea {\n    height: clamp(20px, 2rem, 100%);\n    overflow-y: auto;\n    word-wrap: break-word;\n\n} */\n\n.hide-block {\n    display: none;\n}\n\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,gBAAgB;AACpB;;;AAGA;;;;IAII,qBAAqB;IACrB,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;AACrB;AACA;;;GAGG;;AAEH;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GAoCG;;AAEH;IACI,aAAa;AACjB","sourcesContent":["header {\n    min-height: 15vh;\n}\n\n.tp-lvl-nav {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    min-height: 15vh;\n}\n\n\n.tp-lvl-nav,\n.tp-lvl-nav > li > a,\n.secondary-lvl-nav,\n.secondary-lvl-nav > li > a  {\n    text-decoration: none;\n    list-style: none;\n    color: inherit;\n}\n\n.remove-selected-recipe {\n    width: 1rem;\n    height: 1rem;\n    display: relative;\n}\n/* .remove-selected-recipe::after {\n    display: absolute;\n    content: 'x'\n} */\n\n/* .container {\n    display: flex;\n    gap: 2rem;\n    justify-content: center;\n}\n\n.container button {\n    height: fit-content;\n    width: fit-content;\n    font-size: 24pt;\n    padding: auto;\n    font-weight: bold;\n    align-self: center;\n}\n\nform {\n    display: grid;\n    justify-content: space-around;\n    justify-items: center;\n    gap: 1rem;\n    width: 100%;\n    grid-template-columns: repeat(auto-fill, 300px);\n}\n\nform > * {\n    display: grid;\n    justify-content: center;\n    overflow-y: auto;\n    height: clamp(60px, 6rem, 400px);\n    margin: none;\n}\nform > * > textarea {\n    height: clamp(20px, 2rem, 100%);\n    overflow-y: auto;\n    word-wrap: break-word;\n\n} */\n\n.hide-block {\n    display: none;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/recipeLibrary/createForm.js":
/*!*****************************************!*\
  !*** ./src/recipeLibrary/createForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createForm: () => (/* binding */ createForm)
/* harmony export */ });
const createForm = {
    //create form, input for Name, Ingredients([ingredient, amount, msrmnt]), Steps ([1,2,3])
    recipeForm: document.createElement('form'),
    ingrList: document.createElement('ul'),
    stepsList: document.createElement('ul'),



    createForm: function() {
        this.recipeForm.appendChild(this.addName())

        this.recipeForm.appendChild(this.ingrList)
        this.ingrList.appendChild(this.addIngredients())

        this.recipeForm.appendChild(this.stepsList)
        this.stepsList.appendChild(this.addSteps())

        this.recipeForm.appendChild(this.addSubmitBtn())

        return this.recipeForm


    //end function
    
    },

    addName: function() {
        let div = document.createElement('div')

        this.labelName = this.createFormLabel('name', 'Recipe Name')
        div.appendChild(this.labelName)

        this.nameInput = this.createNameInput()
        div.appendChild(this.nameInput)

        return div
    },

    addIngredients: function() {
        let li = document.createElement('li')

        this.labelIngr = this.createFormLabel('ingredients', 'Ingredients')
        li.appendChild(this.labelIngr)

        this.ingrInput = this.createIngrInput()
        li.appendChild(this.ingrInput)

        return li  
    },

    addSteps: function() {

        let li = document.createElement('li')
         
        this.stepsLabel = this.createFormLabel('steps', 'Steps')
        li.appendChild(this.stepsLabel)

        this.inputStep = this.createStepsInput()
        li.appendChild(this.inputStep)

        return li
    },

    addSubmitBtn: function() {

        this.submitButton = this.createSubmitBtn()
        return this.submitButton

    },

    
    createFormLabel: function(labelName, labelHTML) { 
        let label = document.createElement('label')
        label.setAttribute('for', labelName)
        label.textContent = labelHTML.toUpperCase()
        return label
    },


    createNameInput: () => {
        let _nameInput = document.createElement('input')
        _nameInput.setAttribute('type', 'text')
        _nameInput.setAttribute('id', 'inputName')
        _nameInput.setAttribute('name', 'name')
        _nameInput.setAttribute('maxLength', '32')
        _nameInput.required = true
        return _nameInput
    },
 

    createIngrInput: () => {
        let _ingrInput = document.createElement('input')
        _ingrInput.setAttribute('type', 'number')
        _ingrInput.setAttribute('class', 'inputIngredient')
        _ingrInput.setAttribute('name', 'ingredients')
        _ingrInput.setAttribute('maxValue', '99')
        _ingrInput.setAttribute('minValue', '1')
        _ingrInput.required = true
        return _ingrInput
    },


    
    createStepsInput: () => {
        let _inputStep = document.createElement('textarea')
        _inputStep.setAttribute('name', 'steps')
        _inputStep.setAttribute('class', 'steps')
        _inputStep.setAttribute('cols', '30')
        _inputStep.setAttribute('rows', '10')
        _inputStep.required = true
        return _inputStep
    },


    createSubmitBtn: () => {
        let _submitButton = document.createElement('button')
        _submitButton.textContent = 'Submit'
        _submitButton.setAttribute('type', 'submit')
        return _submitButton
    }

}

/***/ }),

/***/ "./src/recipeLibrary/recipeForm.js":
/*!*****************************************!*\
  !*** ./src/recipeLibrary/recipeForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   recipeForm: () => (/* binding */ recipeForm)
/* harmony export */ });
/* harmony import */ var _utils_createHTMLSkel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createHTMLSkel */ "./src/utils/createHTMLSkel.js");
/* harmony import */ var _createForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createForm */ "./src/recipeLibrary/createForm.js");

    


const recipeForm = {


    sectionForm: _utils_createHTMLSkel__WEBPACK_IMPORTED_MODULE_0__.HTMLSkeleton.addRecipe,

    init: function() {
        this.recipeForm.classList = 'hide-block',
        this.createContainer(),
        this.form = _createForm__WEBPACK_IMPORTED_MODULE_1__.createForm.createForm(),
        this.createToggleButton()
        // this.attaschFormSubmitListener('recipe-form')
    },

    createContainer: function() {
        this.container = document.createElement('div')
        this.container.classlist = 'container'
        console.log(this.sectionForm)
        console.log(this.container)
        this.sectionForm.appendChild(this.container)
    },





    createToggleButton: function () {
        //hide/show recipe form on button click
            this.formToggleButton = document.createElement('button');
            this.formToggleButton.textContent = '+'
            this.formToggleButton.addEventListener('click', () => {
                this.recipeForm.classList.toggle('hide-block')
            })
            this.container.prepend(this.formToggleButton)
    },

    // useFormSubmitNow: function (event) {
    //     event.preventDefault();
    //     return formData;
    // },

    // attachFormSubmitListener: function () {
    //     this.recipeForm.addEventListener('submit', this.useFormSubmitNow)
    // },

  
    
    
    
    
   //end form obj 
}

/***/ }),

/***/ "./src/recipeLibrary/recipeHTML.js":
/*!*****************************************!*\
  !*** ./src/recipeLibrary/recipeHTML.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   recipeHTML: () => (/* binding */ recipeHTML)
/* harmony export */ });
/* harmony import */ var _utils_createHTMLSkel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createHTMLSkel */ "./src/utils/createHTMLSkel.js");
/* harmony import */ var _utils_saveLoadLocStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/saveLoadLocStorage */ "./src/utils/saveLoadLocStorage.js");
/* harmony import */ var _recipeLibrary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipeLibrary */ "./src/recipeLibrary/recipeLibrary.js");


 //used in deletebutton
//FIX SO NOLONGER IMPORT RECIPE LIB

const recipeHTML = {



    sectionRecipes: _utils_createHTMLSkel__WEBPACK_IMPORTED_MODULE_0__.HTMLSkeleton.recipes,

    recipeIDCounter: 0,


    render: function (recipeLib) {
        this.createULParent()
        for (let i = 0; i < recipeLib.length; i++) {
            this.recipeListHTML.appendChild(this.createObjtoList(recipeLib[i]))
        }
    },

    // createInsetMultiPageList: function () {
    //     //sort and search
    
    //     //10 items at a time
    //     function create10RecipeList() {
            
    //     }
    
    
    //     //change page
    // },


    createULParent: function () {
        this.recipeListHTML = document.createElement('ul')
        this.sectionRecipes.appendChild(this.recipeListHTML)
        return this.recipeListHTML
    },

    createObjtoList: function (item) {
        let container = document.createElement('li')
        container.id = `recipe-${this.recipeIDCounter}` 

        let _deletebutton = this.createDeleteButton(this.recipeIDCounter, container);
        container.appendChild(_deletebutton)

        let objName = this.createNameDiv(item);
        container.appendChild(objName)

        // this.btn = createAddGroceryBtn(sectionClass);
        // container.appendChild(btn)

    //create ul for ingredients
        let objIngr = this.createEnumIngredientList(item);
        container.appendChild(objIngr)

        let objSteps = this.createEnumStepsList(item);
        container.appendChild(objSteps)

        return container
    },



        createNameDiv: function (item) {
            let objName = document.createElement('div');
            objName.classList = 'obj-name';
            objName.textContent = item.name;
            return objName;
        },


        createEnumStepsList: function (item) {
            let objSteps = document.createElement('ol');
            objSteps.classList = 'obj-steps';
            let stepsTitle = document.createElement('h4');
            stepsTitle.textContent = 'Steps';
            objSteps.appendChild(stepsTitle);
            for (let i = 0; i < item.steps.length; i++) {
                let _step = document.createElement('li');
                _step.classList = 'step';
                _step.textContent = item.steps[i];
                objSteps.appendChild(_step);
            }
            return objSteps;
        },

        createEnumIngredientList: function (item) {
            let objIngr = document.createElement('ul');
            objIngr.classList = 'obj-ingr';
            objIngr.name = 'ingredients';
            let ingrTitle = document.createElement('h4');
            ingrTitle.textContent = 'Ingredients';
            objIngr.appendChild(ingrTitle);
            for (let i = 0; i < item.ingredients.length; i++) {
                let _ingr = document.createElement('li');

                let _name = document.createElement('span');
                _name.textContent = item.ingredients[i].ingredient;

                let _amnt = document.createElement('span');
                _amnt.textContent = item.ingredients[i].amount;

                let _measure = document.createElement('span');
                _measure.textContent = item.ingredients[i].measurement;

                _ingr.appendChild(_amnt);
                _ingr.appendChild(_measure);
                _ingr.appendChild(_name);
                objIngr.appendChild(_ingr);

            }
            return objIngr;
        },

        createDeleteButton: function (recipeIDCounter, parent) {
            let _deletebutton = document.createElement('button');
            _deletebutton.textContent = 'X';
            _deletebutton.id = recipeIDCounter;
            recipeIDCounter++;
            _deletebutton.addEventListener('click', () => {
                let elemNameID = document.querySelector("#recipe-" + _deletebutton.id + ' > .obj-name');
                elemNameID = elemNameID.textContent;
                let elemIndex = _recipeLibrary__WEBPACK_IMPORTED_MODULE_2__.recipeLibrary.recipeLibrary.findIndex((el) => {
                    el.name == elemNameID;
                });
                _recipeLibrary__WEBPACK_IMPORTED_MODULE_2__.recipeLibrary.recipeLibrary.splice(elemIndex);
                _deletebutton.parentElement.remove();
                _utils_saveLoadLocStorage__WEBPACK_IMPORTED_MODULE_1__.saveLoadLocalStorage.saveTo(_recipeLibrary__WEBPACK_IMPORTED_MODULE_2__.recipeLibrary.recipeLibrary, 'JSONrecipeLibrary')

                // recipeLibrary.splice(this.previousElementSibling.textContent)
                // remove(this.parentElement)
            });
            return _deletebutton;
        }
}


/***/ }),

/***/ "./src/recipeLibrary/recipeLibrary.js":
/*!********************************************!*\
  !*** ./src/recipeLibrary/recipeLibrary.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   recipeLibrary: () => (/* binding */ recipeLibrary)
/* harmony export */ });
/* harmony import */ var _utils_recipeClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/recipeClass */ "./src/utils/recipeClass.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles.css */ "./src/styles.css");
/* harmony import */ var _utils_saveLoadLocStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/saveLoadLocStorage */ "./src/utils/saveLoadLocStorage.js");
/* harmony import */ var _recipeHTML__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipeHTML */ "./src/recipeLibrary/recipeHTML.js");
/* harmony import */ var _recipeForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipeForm */ "./src/recipeLibrary/recipeForm.js");
// import { HTMLSkeleton } from '../utils/createHTMLSkel';







function formHandler (e) {
    e.preventDefault();
    let formData = new FormData(this.recipeForm)

    formData = e.formData
    let _name = formData.get('name');
    let _ingredients = formData.get('ingredients') 
    let _steps = formData.get('steps')

    _ingredients = _ingredients.trim().split(';');
    for (let i = 0; i < _ingredients.length; i++) {
            _ingredients[i] = _ingredients[i].trim().split(',');
            for (let j = 0; j <  _ingredients[i].length; j++) {
                _ingredients[i][j] = _ingredients[i][j].trim();
            }
    }
    let _ingrObjList = []

    for (let i=0;i<_ingredients.length;i++) {
        let _ingrObj = { ingredient:undefined, amount:undefined, measurement:undefined}

        _ingrObj.ingredient = _ingredients[i][0]
        _ingrObj.amount = _ingredients[i][1]
        _ingrObj.measurement = _ingredients[i][2]
        _ingrObjList.push(_ingrObj)
    }

    _steps = _steps.trim().split(';');
    for (let i = 0; i < _steps.length; i++) {
        _steps[i] = _steps[i].trim()
    }
    const newRecipe = new _utils_recipeClass__WEBPACK_IMPORTED_MODULE_0__["default"](_name, _ingrObjList, _steps);


    //way to extract this? necessary before modularizing
    recipeLibrary.recipeLibrary.push(newRecipe)
    _utils_saveLoadLocStorage__WEBPACK_IMPORTED_MODULE_2__.saveLoadLocalStorage.saveTo(recipeLibrary.recipeLibrary, 'JSONrecipeLibrary')
    _recipeHTML__WEBPACK_IMPORTED_MODULE_3__.recipeHTML.render(recipeLibrary.recipeLibrary)


}


const recipeLibrary = {

    recipeLibrary: new Array,
        //import recipeForm
        //import recipeHTML
    init: function() {
        console.log(this.recipeLibrary)
        this.recipeLibrary = _utils_saveLoadLocStorage__WEBPACK_IMPORTED_MODULE_2__.saveLoadLocalStorage.load('JSONrecipeLibrary');
        console.log(this.recipeLibrary)
        if (this.recipeLibrary === undefined) this.recipeLibrary = this.defaultLibrary
        // recipeForm = recipeForm
        this.render() //create Recipes List HTML
        // recipeHTML = recipeHTML
        _recipeForm__WEBPACK_IMPORTED_MODULE_4__.recipeForm.recipeForm.addEventListener('formdata', formHandler) //add response to library and updateHTML on submit

    },

    findByName: function(name) {
        for (let i = 0; i < this.recipeLibrary.length; i++) {
            if (this.recipeLibrary[i].name == name) {
                return this.recipeLibrary[i]
            }
        }
    },




    render: function() {
        _recipeForm__WEBPACK_IMPORTED_MODULE_4__.recipeForm.init() //create RecipeForm HTML & Add to Doc
        _recipeHTML__WEBPACK_IMPORTED_MODULE_3__.recipeHTML.render(this.recipeLibrary)
    },


    defaultLibrary: [{
                    name: "scrambled eggs",
                    ingredients: [
                        {
                            ingredient: "eggs",
                            amount: "1",
                            measurement: "whole"
                        },
                        {
                            ingredient: "pepper",
                            amount: "1",
                            measurement: "tsp"
                        },
                        {
                            ingredient: "salt",
                            amount: "1",
                            measurement: "tsp"
                        },
                        {
                            ingredient: "oil",
                            amount: "1",
                            measurement: "tbsp"
                        }
                    ],
                    steps: [
                        "cook"
                    ]
                },
                {
                    name: "omellete",
                    ingredients: [
                        {
                            ingredient: "eggs",
                            amount: "5",
                            measurement: "whole"
                        },
                        {
                            ingredient: "pepper",
                            amount: "2",
                            measurement: "tsp"
                        },
                        {
                            ingredient: "salt",
                            amount: "3",
                            measurement: "tsp"
                        },
                        {
                            ingredient: "bacon",
                            amount: "4",
                            measurement: "strips"
                        }
                    ],
                    steps: [
                        "cook"
                    ]
                }]



}

 





     



/***/ }),

/***/ "./src/utils/createHTMLSkel.js":
/*!*************************************!*\
  !*** ./src/utils/createHTMLSkel.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HTMLSkeleton: () => (/* binding */ HTMLSkeleton)
/* harmony export */ });

const HTMLSkeleton = {

    docbody: document.querySelector('body'),


    init: function() {
        this.render()
    },
    render: function() {
        this.createHeader();
        this.createSections()
    },

    createHeader: function() {
        this.header = document.createElement('header')
        this.createNav()

    },

    nav: document.createElement('nav'),
    ulNav :document.createElement('ul'),

    createNav: function() {

        this.nav.appendChild(this.ulNav)

        this.ulNav.appendChild(this.homeNavLink())
        this.ulNav.appendChild(this.createNavLink('Recipes', ''))
        // this.ulNav.appendChild(this.createSearchBar())
    },

    homeNavLink: function() {

        let li = document.createElement('li')
        let link = document.createElement('a')
        link.href = ''
        let logo = document.createElement('img')
        logo.src = ''
        logo.alt = ''

        link.appendChild(logo)
        li.appendChild(link)

        return li
    },

    createNavLink: function(title, url) {
        let li = document.createElement('li')
        let link = document.createElement('a')
        link.href = url
        link.textContent = title

        li.appendChild(link)

        return li
    },

    createSearchBar() {
        console.log('wip')
    },

    selectedRecipes: document.createElement('section'),
    addRecipe: document.createElement('section'),
    recipes: document.createElement('section'),
    groceryList: document.createElement('section'),

    
    createSections: function() {
        


        this.docbody.appendChild(this.selectedRecipes)
        this.docbody.appendChild(this.addRecipe)
        this.docbody.appendChild(this.recipes)
        this.docbody.appendChild(this.groceryList)
    
    },

    // createSec: function(id) {
    //     let sec = document.createElement('section')
    //     sec.id = id
    //     return sec
    // },
}

/***/ }),

/***/ "./src/utils/recipeClass.js":
/*!**********************************!*\
  !*** ./src/utils/recipeClass.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Recipe)
/* harmony export */ });

class Recipe {
    constructor(name, ingredients, steps) {
        this.name = name;
        //ingredients is a double array,[[item, amount, measurement]]
        this.ingredients = ingredients;
        this.steps = steps;
    }
}


/***/ }),

/***/ "./src/utils/saveLoadLocStorage.js":
/*!*****************************************!*\
  !*** ./src/utils/saveLoadLocStorage.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   saveLoadLocalStorage: () => (/* binding */ saveLoadLocalStorage)
/* harmony export */ });
const saveLoadLocalStorage = {
    
    load: function (address) {
        let temp = localStorage.getItem(address)
        console.log(temp)
        console.log(address)
        if (temp === null) return;
        let el = JSON.parse(temp)
        return el
        
    },

    saveTo: function (el, address) {
        let temp = JSON.stringify(el)
        localStorage.setItem(address, temp)
    }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3JlY2lwZUxpYnJhcnlfcmVjaXBlSFRNTF9qcy1zcmNfcmVjaXBlTGlicmFyeV9yZWNpcGVMaWJyYXJ5X2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxrREFBa0QsdUJBQXVCLEdBQUcsaUJBQWlCLG9CQUFvQixvQ0FBb0MsMEJBQTBCLHVCQUF1QixHQUFHLDhGQUE4Riw0QkFBNEIsdUJBQXVCLHFCQUFxQixHQUFHLDZCQUE2QixrQkFBa0IsbUJBQW1CLHdCQUF3QixHQUFHLHFDQUFxQyx3QkFBd0Isc0JBQXNCLHFCQUFxQixvQkFBb0IsZ0JBQWdCLDhCQUE4QixHQUFHLHVCQUF1QiwwQkFBMEIseUJBQXlCLHNCQUFzQixvQkFBb0Isd0JBQXdCLHlCQUF5QixHQUFHLFVBQVUsb0JBQW9CLG9DQUFvQyw0QkFBNEIsZ0JBQWdCLGtCQUFrQixzREFBc0QsR0FBRyxjQUFjLG9CQUFvQiw4QkFBOEIsdUJBQXVCLHVDQUF1QyxtQkFBbUIsR0FBRyx1QkFBdUIsc0NBQXNDLHVCQUF1Qiw0QkFBNEIsTUFBTSxtQkFBbUIsb0JBQW9CLEdBQUcsV0FBVyxpRkFBaUYsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxRQUFRLFFBQVEsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sT0FBTyxNQUFNLHdDQUF3QyxPQUFPLEtBQUssVUFBVSxrQ0FBa0MsdUJBQXVCLEdBQUcsaUJBQWlCLG9CQUFvQixvQ0FBb0MsMEJBQTBCLHVCQUF1QixHQUFHLDhGQUE4Riw0QkFBNEIsdUJBQXVCLHFCQUFxQixHQUFHLDZCQUE2QixrQkFBa0IsbUJBQW1CLHdCQUF3QixHQUFHLHFDQUFxQyx3QkFBd0Isc0JBQXNCLHFCQUFxQixvQkFBb0IsZ0JBQWdCLDhCQUE4QixHQUFHLHVCQUF1QiwwQkFBMEIseUJBQXlCLHNCQUFzQixvQkFBb0Isd0JBQXdCLHlCQUF5QixHQUFHLFVBQVUsb0JBQW9CLG9DQUFvQyw0QkFBNEIsZ0JBQWdCLGtCQUFrQixzREFBc0QsR0FBRyxjQUFjLG9CQUFvQiw4QkFBOEIsdUJBQXVCLHVDQUF1QyxtQkFBbUIsR0FBRyx1QkFBdUIsc0NBQXNDLHVCQUF1Qiw0QkFBNEIsTUFBTSxtQkFBbUIsb0JBQW9CLEdBQUcsdUJBQXVCO0FBQzkzRjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBb0c7QUFDcEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUk4QztBQUN0RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksOEZBQWMsR0FBRyw4RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYk87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pIc0Q7QUFDdEQ7QUFDeUM7O0FBRWxDOzs7QUFHUCxpQkFBaUIseUVBQXNCOztBQUV2QztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsOERBQXFCO0FBQ3pDO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7Ozs7OztBQU1MO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RHNEO0FBQ1k7QUFDbkI7QUFDL0M7O0FBRU87Ozs7QUFJUCxvQkFBb0IsdUVBQW9COztBQUV4Qzs7O0FBR0E7QUFDQTtBQUNBLHdCQUF3QixzQkFBc0I7QUFDOUM7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROzs7QUFHUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGlDQUFpQyxxQkFBcUI7O0FBRXREO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7OztBQUlMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsdUJBQXVCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNkJBQTZCO0FBQ3pEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaUZBQXFDO0FBQ3JFO0FBQ0EsaUJBQWlCO0FBQ2pCLGdCQUFnQiw4RUFBa0M7QUFDbEQ7QUFDQSxnQkFBZ0Isa0ZBQTJCLENBQUMsdUVBQTJCOztBQUV2RTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SUEsWUFBWSxlQUFlO0FBQ2U7QUFDbkI7QUFDNEM7QUFDekI7QUFDQTs7O0FBRzFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQ0FBK0M7QUFDL0Msb0JBQW9CLHlCQUF5QjtBQUM3QztBQUNBLDRCQUE0Qiw2QkFBNkI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2Qyx5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DO0FBQ25DLG9CQUFvQixtQkFBbUI7QUFDdkM7QUFDQTtBQUNBLDBCQUEwQiwwREFBTTs7O0FBR2hDO0FBQ0E7QUFDQSxJQUFJLGtGQUEyQjtBQUMvQixJQUFJLDBEQUFpQjs7O0FBR3JCOzs7QUFHTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGdGQUF5QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrRUFBc0M7O0FBRTlDLEtBQUs7O0FBRUw7QUFDQSx3QkFBd0IsK0JBQStCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7Ozs7QUFLTDtBQUNBLFFBQVEsd0RBQWU7QUFDdkIsUUFBUSwwREFBaUI7QUFDekIsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7OztBQUlqQjs7QUFFQTs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkpPOztBQUVQOzs7QUFHQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOzs7Ozs7Ozs7Ozs7Ozs7QUNuRmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDUk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWNpcGVzLW4tZ3JvY2VyaWVzLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVjaXBlcy1uLWdyb2Nlcmllcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVjaXBlcy1uLWdyb2Nlcmllcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3JlY2lwZXMtbi1ncm9jZXJpZXMvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3JlY2lwZXMtbi1ncm9jZXJpZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVjaXBlcy1uLWdyb2Nlcmllcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVjaXBlcy1uLWdyb2Nlcmllcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZWNpcGVzLW4tZ3JvY2VyaWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3JlY2lwZXMtbi1ncm9jZXJpZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZWNpcGVzLW4tZ3JvY2VyaWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVjaXBlcy1uLWdyb2Nlcmllcy8uL3NyYy9yZWNpcGVMaWJyYXJ5L2NyZWF0ZUZvcm0uanMiLCJ3ZWJwYWNrOi8vcmVjaXBlcy1uLWdyb2Nlcmllcy8uL3NyYy9yZWNpcGVMaWJyYXJ5L3JlY2lwZUZvcm0uanMiLCJ3ZWJwYWNrOi8vcmVjaXBlcy1uLWdyb2Nlcmllcy8uL3NyYy9yZWNpcGVMaWJyYXJ5L3JlY2lwZUhUTUwuanMiLCJ3ZWJwYWNrOi8vcmVjaXBlcy1uLWdyb2Nlcmllcy8uL3NyYy9yZWNpcGVMaWJyYXJ5L3JlY2lwZUxpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vcmVjaXBlcy1uLWdyb2Nlcmllcy8uL3NyYy91dGlscy9jcmVhdGVIVE1MU2tlbC5qcyIsIndlYnBhY2s6Ly9yZWNpcGVzLW4tZ3JvY2VyaWVzLy4vc3JjL3V0aWxzL3JlY2lwZUNsYXNzLmpzIiwid2VicGFjazovL3JlY2lwZXMtbi1ncm9jZXJpZXMvLi9zcmMvdXRpbHMvc2F2ZUxvYWRMb2NTdG9yYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaGVhZGVyIHtcXG4gICAgbWluLWhlaWdodDogMTV2aDtcXG59XFxuXFxuLnRwLWx2bC1uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogMTV2aDtcXG59XFxuXFxuXFxuLnRwLWx2bC1uYXYsXFxuLnRwLWx2bC1uYXYgPiBsaSA+IGEsXFxuLnNlY29uZGFyeS1sdmwtbmF2LFxcbi5zZWNvbmRhcnktbHZsLW5hdiA+IGxpID4gYSAge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4ucmVtb3ZlLXNlbGVjdGVkLXJlY2lwZSB7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIGRpc3BsYXk6IHJlbGF0aXZlO1xcbn1cXG4vKiAucmVtb3ZlLXNlbGVjdGVkLXJlY2lwZTo6YWZ0ZXIge1xcbiAgICBkaXNwbGF5OiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogJ3gnXFxufSAqL1xcblxcbi8qIC5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgZm9udC1zaXplOiAyNHB0O1xcbiAgICBwYWRkaW5nOiBhdXRvO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCAzMDBweCk7XFxufVxcblxcbmZvcm0gPiAqIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGhlaWdodDogY2xhbXAoNjBweCwgNnJlbSwgNDAwcHgpO1xcbiAgICBtYXJnaW46IG5vbmU7XFxufVxcbmZvcm0gPiAqID4gdGV4dGFyZWEge1xcbiAgICBoZWlnaHQ6IGNsYW1wKDIwcHgsIDJyZW0sIDEwMCUpO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuXFxufSAqL1xcblxcbi5oaWRlLWJsb2NrIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7OztBQUdBOzs7O0lBSUkscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFDQTs7O0dBR0c7O0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9DRzs7QUFFSDtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaGVhZGVyIHtcXG4gICAgbWluLWhlaWdodDogMTV2aDtcXG59XFxuXFxuLnRwLWx2bC1uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogMTV2aDtcXG59XFxuXFxuXFxuLnRwLWx2bC1uYXYsXFxuLnRwLWx2bC1uYXYgPiBsaSA+IGEsXFxuLnNlY29uZGFyeS1sdmwtbmF2LFxcbi5zZWNvbmRhcnktbHZsLW5hdiA+IGxpID4gYSAge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4ucmVtb3ZlLXNlbGVjdGVkLXJlY2lwZSB7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIGRpc3BsYXk6IHJlbGF0aXZlO1xcbn1cXG4vKiAucmVtb3ZlLXNlbGVjdGVkLXJlY2lwZTo6YWZ0ZXIge1xcbiAgICBkaXNwbGF5OiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogJ3gnXFxufSAqL1xcblxcbi8qIC5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgZm9udC1zaXplOiAyNHB0O1xcbiAgICBwYWRkaW5nOiBhdXRvO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCAzMDBweCk7XFxufVxcblxcbmZvcm0gPiAqIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGhlaWdodDogY2xhbXAoNjBweCwgNnJlbSwgNDAwcHgpO1xcbiAgICBtYXJnaW46IG5vbmU7XFxufVxcbmZvcm0gPiAqID4gdGV4dGFyZWEge1xcbiAgICBoZWlnaHQ6IGNsYW1wKDIwcHgsIDJyZW0sIDEwMCUpO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuXFxufSAqL1xcblxcbi5oaWRlLWJsb2NrIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IGNyZWF0ZUZvcm0gPSB7XG4gICAgLy9jcmVhdGUgZm9ybSwgaW5wdXQgZm9yIE5hbWUsIEluZ3JlZGllbnRzKFtpbmdyZWRpZW50LCBhbW91bnQsIG1zcm1udF0pLCBTdGVwcyAoWzEsMiwzXSlcbiAgICByZWNpcGVGb3JtOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyksXG4gICAgaW5nckxpc3Q6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyksXG4gICAgc3RlcHNMaXN0OiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpLFxuXG5cblxuICAgIGNyZWF0ZUZvcm06IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnJlY2lwZUZvcm0uYXBwZW5kQ2hpbGQodGhpcy5hZGROYW1lKCkpXG5cbiAgICAgICAgdGhpcy5yZWNpcGVGb3JtLmFwcGVuZENoaWxkKHRoaXMuaW5nckxpc3QpXG4gICAgICAgIHRoaXMuaW5nckxpc3QuYXBwZW5kQ2hpbGQodGhpcy5hZGRJbmdyZWRpZW50cygpKVxuXG4gICAgICAgIHRoaXMucmVjaXBlRm9ybS5hcHBlbmRDaGlsZCh0aGlzLnN0ZXBzTGlzdClcbiAgICAgICAgdGhpcy5zdGVwc0xpc3QuYXBwZW5kQ2hpbGQodGhpcy5hZGRTdGVwcygpKVxuXG4gICAgICAgIHRoaXMucmVjaXBlRm9ybS5hcHBlbmRDaGlsZCh0aGlzLmFkZFN1Ym1pdEJ0bigpKVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJlY2lwZUZvcm1cblxuXG4gICAgLy9lbmQgZnVuY3Rpb25cbiAgICBcbiAgICB9LFxuXG4gICAgYWRkTmFtZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgICAgIHRoaXMubGFiZWxOYW1lID0gdGhpcy5jcmVhdGVGb3JtTGFiZWwoJ25hbWUnLCAnUmVjaXBlIE5hbWUnKVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGhpcy5sYWJlbE5hbWUpXG5cbiAgICAgICAgdGhpcy5uYW1lSW5wdXQgPSB0aGlzLmNyZWF0ZU5hbWVJbnB1dCgpXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0aGlzLm5hbWVJbnB1dClcblxuICAgICAgICByZXR1cm4gZGl2XG4gICAgfSxcblxuICAgIGFkZEluZ3JlZGllbnRzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuXG4gICAgICAgIHRoaXMubGFiZWxJbmdyID0gdGhpcy5jcmVhdGVGb3JtTGFiZWwoJ2luZ3JlZGllbnRzJywgJ0luZ3JlZGllbnRzJylcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQodGhpcy5sYWJlbEluZ3IpXG5cbiAgICAgICAgdGhpcy5pbmdySW5wdXQgPSB0aGlzLmNyZWF0ZUluZ3JJbnB1dCgpXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKHRoaXMuaW5ncklucHV0KVxuXG4gICAgICAgIHJldHVybiBsaSAgXG4gICAgfSxcblxuICAgIGFkZFN0ZXBzOiBmdW5jdGlvbigpIHtcblxuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICBcbiAgICAgICAgdGhpcy5zdGVwc0xhYmVsID0gdGhpcy5jcmVhdGVGb3JtTGFiZWwoJ3N0ZXBzJywgJ1N0ZXBzJylcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQodGhpcy5zdGVwc0xhYmVsKVxuXG4gICAgICAgIHRoaXMuaW5wdXRTdGVwID0gdGhpcy5jcmVhdGVTdGVwc0lucHV0KClcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dFN0ZXApXG5cbiAgICAgICAgcmV0dXJuIGxpXG4gICAgfSxcblxuICAgIGFkZFN1Ym1pdEJ0bjogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24gPSB0aGlzLmNyZWF0ZVN1Ym1pdEJ0bigpXG4gICAgICAgIHJldHVybiB0aGlzLnN1Ym1pdEJ1dHRvblxuXG4gICAgfSxcblxuICAgIFxuICAgIGNyZWF0ZUZvcm1MYWJlbDogZnVuY3Rpb24obGFiZWxOYW1lLCBsYWJlbEhUTUwpIHsgXG4gICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBsYWJlbE5hbWUpXG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxIVE1MLnRvVXBwZXJDYXNlKClcbiAgICAgICAgcmV0dXJuIGxhYmVsXG4gICAgfSxcblxuXG4gICAgY3JlYXRlTmFtZUlucHV0OiAoKSA9PiB7XG4gICAgICAgIGxldCBfbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICBfbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICAgICAgX25hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2lucHV0TmFtZScpXG4gICAgICAgIF9uYW1lSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ25hbWUnKVxuICAgICAgICBfbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnbWF4TGVuZ3RoJywgJzMyJylcbiAgICAgICAgX25hbWVJbnB1dC5yZXF1aXJlZCA9IHRydWVcbiAgICAgICAgcmV0dXJuIF9uYW1lSW5wdXRcbiAgICB9LFxuIFxuXG4gICAgY3JlYXRlSW5ncklucHV0OiAoKSA9PiB7XG4gICAgICAgIGxldCBfaW5ncklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICBfaW5ncklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKVxuICAgICAgICBfaW5ncklucHV0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaW5wdXRJbmdyZWRpZW50JylcbiAgICAgICAgX2luZ3JJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnaW5ncmVkaWVudHMnKVxuICAgICAgICBfaW5ncklucHV0LnNldEF0dHJpYnV0ZSgnbWF4VmFsdWUnLCAnOTknKVxuICAgICAgICBfaW5ncklucHV0LnNldEF0dHJpYnV0ZSgnbWluVmFsdWUnLCAnMScpXG4gICAgICAgIF9pbmdySW5wdXQucmVxdWlyZWQgPSB0cnVlXG4gICAgICAgIHJldHVybiBfaW5ncklucHV0XG4gICAgfSxcblxuXG4gICAgXG4gICAgY3JlYXRlU3RlcHNJbnB1dDogKCkgPT4ge1xuICAgICAgICBsZXQgX2lucHV0U3RlcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICAgICAgX2lucHV0U3RlcC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnc3RlcHMnKVxuICAgICAgICBfaW5wdXRTdGVwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc3RlcHMnKVxuICAgICAgICBfaW5wdXRTdGVwLnNldEF0dHJpYnV0ZSgnY29scycsICczMCcpXG4gICAgICAgIF9pbnB1dFN0ZXAuc2V0QXR0cmlidXRlKCdyb3dzJywgJzEwJylcbiAgICAgICAgX2lucHV0U3RlcC5yZXF1aXJlZCA9IHRydWVcbiAgICAgICAgcmV0dXJuIF9pbnB1dFN0ZXBcbiAgICB9LFxuXG5cbiAgICBjcmVhdGVTdWJtaXRCdG46ICgpID0+IHtcbiAgICAgICAgbGV0IF9zdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBfc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ1N1Ym1pdCdcbiAgICAgICAgX3N1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0JylcbiAgICAgICAgcmV0dXJuIF9zdWJtaXRCdXR0b25cbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBIVE1MU2tlbGV0b24gfSBmcm9tICcuLi91dGlscy9jcmVhdGVIVE1MU2tlbCdcbiAgICBcbmltcG9ydCB7IGNyZWF0ZUZvcm0gfSBmcm9tICcuL2NyZWF0ZUZvcm0nXG5cbmV4cG9ydCBjb25zdCByZWNpcGVGb3JtID0ge1xuXG5cbiAgICBzZWN0aW9uRm9ybTogSFRNTFNrZWxldG9uLmFkZFJlY2lwZSxcblxuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnJlY2lwZUZvcm0uY2xhc3NMaXN0ID0gJ2hpZGUtYmxvY2snLFxuICAgICAgICB0aGlzLmNyZWF0ZUNvbnRhaW5lcigpLFxuICAgICAgICB0aGlzLmZvcm0gPSBjcmVhdGVGb3JtLmNyZWF0ZUZvcm0oKSxcbiAgICAgICAgdGhpcy5jcmVhdGVUb2dnbGVCdXR0b24oKVxuICAgICAgICAvLyB0aGlzLmF0dGFzY2hGb3JtU3VibWl0TGlzdGVuZXIoJ3JlY2lwZS1mb3JtJylcbiAgICB9LFxuXG4gICAgY3JlYXRlQ29udGFpbmVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc2xpc3QgPSAnY29udGFpbmVyJ1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlY3Rpb25Gb3JtKVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRhaW5lcilcbiAgICAgICAgdGhpcy5zZWN0aW9uRm9ybS5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcilcbiAgICB9LFxuXG5cblxuXG5cbiAgICBjcmVhdGVUb2dnbGVCdXR0b246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9oaWRlL3Nob3cgcmVjaXBlIGZvcm0gb24gYnV0dG9uIGNsaWNrXG4gICAgICAgICAgICB0aGlzLmZvcm1Ub2dnbGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHRoaXMuZm9ybVRvZ2dsZUJ1dHRvbi50ZXh0Q29udGVudCA9ICcrJ1xuICAgICAgICAgICAgdGhpcy5mb3JtVG9nZ2xlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVjaXBlRm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlLWJsb2NrJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5wcmVwZW5kKHRoaXMuZm9ybVRvZ2dsZUJ1dHRvbilcbiAgICB9LFxuXG4gICAgLy8gdXNlRm9ybVN1Ym1pdE5vdzogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgIHJldHVybiBmb3JtRGF0YTtcbiAgICAvLyB9LFxuXG4gICAgLy8gYXR0YWNoRm9ybVN1Ym1pdExpc3RlbmVyOiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgIHRoaXMucmVjaXBlRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLnVzZUZvcm1TdWJtaXROb3cpXG4gICAgLy8gfSxcblxuICBcbiAgICBcbiAgICBcbiAgICBcbiAgICBcbiAgIC8vZW5kIGZvcm0gb2JqIFxufSIsImltcG9ydCB7IEhUTUxTa2VsZXRvbiB9IGZyb20gJy4uL3V0aWxzL2NyZWF0ZUhUTUxTa2VsJ1xuaW1wb3J0IHsgc2F2ZUxvYWRMb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi91dGlscy9zYXZlTG9hZExvY1N0b3JhZ2UnXG5pbXBvcnQgeyByZWNpcGVMaWJyYXJ5IH0gZnJvbSAnLi9yZWNpcGVMaWJyYXJ5JyAvL3VzZWQgaW4gZGVsZXRlYnV0dG9uXG4vL0ZJWCBTTyBOT0xPTkdFUiBJTVBPUlQgUkVDSVBFIExJQlxuXG5leHBvcnQgY29uc3QgcmVjaXBlSFRNTCA9IHtcblxuXG5cbiAgICBzZWN0aW9uUmVjaXBlczogSFRNTFNrZWxldG9uLnJlY2lwZXMsXG5cbiAgICByZWNpcGVJRENvdW50ZXI6IDAsXG5cblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKHJlY2lwZUxpYikge1xuICAgICAgICB0aGlzLmNyZWF0ZVVMUGFyZW50KClcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWNpcGVMaWIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucmVjaXBlTGlzdEhUTUwuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVPYmp0b0xpc3QocmVjaXBlTGliW2ldKSlcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBjcmVhdGVJbnNldE11bHRpUGFnZUxpc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgLy9zb3J0IGFuZCBzZWFyY2hcbiAgICBcbiAgICAvLyAgICAgLy8xMCBpdGVtcyBhdCBhIHRpbWVcbiAgICAvLyAgICAgZnVuY3Rpb24gY3JlYXRlMTBSZWNpcGVMaXN0KCkge1xuICAgICAgICAgICAgXG4gICAgLy8gICAgIH1cbiAgICBcbiAgICBcbiAgICAvLyAgICAgLy9jaGFuZ2UgcGFnZVxuICAgIC8vIH0sXG5cblxuICAgIGNyZWF0ZVVMUGFyZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVjaXBlTGlzdEhUTUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgICAgIHRoaXMuc2VjdGlvblJlY2lwZXMuYXBwZW5kQ2hpbGQodGhpcy5yZWNpcGVMaXN0SFRNTClcbiAgICAgICAgcmV0dXJuIHRoaXMucmVjaXBlTGlzdEhUTUxcbiAgICB9LFxuXG4gICAgY3JlYXRlT2JqdG9MaXN0OiBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICBjb250YWluZXIuaWQgPSBgcmVjaXBlLSR7dGhpcy5yZWNpcGVJRENvdW50ZXJ9YCBcblxuICAgICAgICBsZXQgX2RlbGV0ZWJ1dHRvbiA9IHRoaXMuY3JlYXRlRGVsZXRlQnV0dG9uKHRoaXMucmVjaXBlSURDb3VudGVyLCBjb250YWluZXIpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoX2RlbGV0ZWJ1dHRvbilcblxuICAgICAgICBsZXQgb2JqTmFtZSA9IHRoaXMuY3JlYXRlTmFtZURpdihpdGVtKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG9iak5hbWUpXG5cbiAgICAgICAgLy8gdGhpcy5idG4gPSBjcmVhdGVBZGRHcm9jZXJ5QnRuKHNlY3Rpb25DbGFzcyk7XG4gICAgICAgIC8vIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidG4pXG5cbiAgICAvL2NyZWF0ZSB1bCBmb3IgaW5ncmVkaWVudHNcbiAgICAgICAgbGV0IG9iakluZ3IgPSB0aGlzLmNyZWF0ZUVudW1JbmdyZWRpZW50TGlzdChpdGVtKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG9iakluZ3IpXG5cbiAgICAgICAgbGV0IG9ialN0ZXBzID0gdGhpcy5jcmVhdGVFbnVtU3RlcHNMaXN0KGl0ZW0pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQob2JqU3RlcHMpXG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lclxuICAgIH0sXG5cblxuXG4gICAgICAgIGNyZWF0ZU5hbWVEaXY6IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBsZXQgb2JqTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgb2JqTmFtZS5jbGFzc0xpc3QgPSAnb2JqLW5hbWUnO1xuICAgICAgICAgICAgb2JqTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgICAgICAgICAgIHJldHVybiBvYmpOYW1lO1xuICAgICAgICB9LFxuXG5cbiAgICAgICAgY3JlYXRlRW51bVN0ZXBzTGlzdDogZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGxldCBvYmpTdGVwcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29sJyk7XG4gICAgICAgICAgICBvYmpTdGVwcy5jbGFzc0xpc3QgPSAnb2JqLXN0ZXBzJztcbiAgICAgICAgICAgIGxldCBzdGVwc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgICAgIHN0ZXBzVGl0bGUudGV4dENvbnRlbnQgPSAnU3RlcHMnO1xuICAgICAgICAgICAgb2JqU3RlcHMuYXBwZW5kQ2hpbGQoc3RlcHNUaXRsZSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW0uc3RlcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgX3N0ZXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgICAgIF9zdGVwLmNsYXNzTGlzdCA9ICdzdGVwJztcbiAgICAgICAgICAgICAgICBfc3RlcC50ZXh0Q29udGVudCA9IGl0ZW0uc3RlcHNbaV07XG4gICAgICAgICAgICAgICAgb2JqU3RlcHMuYXBwZW5kQ2hpbGQoX3N0ZXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9ialN0ZXBzO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNyZWF0ZUVudW1JbmdyZWRpZW50TGlzdDogZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGxldCBvYmpJbmdyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgICAgIG9iakluZ3IuY2xhc3NMaXN0ID0gJ29iai1pbmdyJztcbiAgICAgICAgICAgIG9iakluZ3IubmFtZSA9ICdpbmdyZWRpZW50cyc7XG4gICAgICAgICAgICBsZXQgaW5nclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgICAgIGluZ3JUaXRsZS50ZXh0Q29udGVudCA9ICdJbmdyZWRpZW50cyc7XG4gICAgICAgICAgICBvYmpJbmdyLmFwcGVuZENoaWxkKGluZ3JUaXRsZSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW0uaW5ncmVkaWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgX2luZ3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgICAgICAgICAgICAgbGV0IF9uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIF9uYW1lLnRleHRDb250ZW50ID0gaXRlbS5pbmdyZWRpZW50c1tpXS5pbmdyZWRpZW50O1xuXG4gICAgICAgICAgICAgICAgbGV0IF9hbW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIF9hbW50LnRleHRDb250ZW50ID0gaXRlbS5pbmdyZWRpZW50c1tpXS5hbW91bnQ7XG5cbiAgICAgICAgICAgICAgICBsZXQgX21lYXN1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgX21lYXN1cmUudGV4dENvbnRlbnQgPSBpdGVtLmluZ3JlZGllbnRzW2ldLm1lYXN1cmVtZW50O1xuXG4gICAgICAgICAgICAgICAgX2luZ3IuYXBwZW5kQ2hpbGQoX2FtbnQpO1xuICAgICAgICAgICAgICAgIF9pbmdyLmFwcGVuZENoaWxkKF9tZWFzdXJlKTtcbiAgICAgICAgICAgICAgICBfaW5nci5hcHBlbmRDaGlsZChfbmFtZSk7XG4gICAgICAgICAgICAgICAgb2JqSW5nci5hcHBlbmRDaGlsZChfaW5ncik7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvYmpJbmdyO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNyZWF0ZURlbGV0ZUJ1dHRvbjogZnVuY3Rpb24gKHJlY2lwZUlEQ291bnRlciwgcGFyZW50KSB7XG4gICAgICAgICAgICBsZXQgX2RlbGV0ZWJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgX2RlbGV0ZWJ1dHRvbi50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgIF9kZWxldGVidXR0b24uaWQgPSByZWNpcGVJRENvdW50ZXI7XG4gICAgICAgICAgICByZWNpcGVJRENvdW50ZXIrKztcbiAgICAgICAgICAgIF9kZWxldGVidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1OYW1lSUQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlY2lwZS1cIiArIF9kZWxldGVidXR0b24uaWQgKyAnID4gLm9iai1uYW1lJyk7XG4gICAgICAgICAgICAgICAgZWxlbU5hbWVJRCA9IGVsZW1OYW1lSUQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1JbmRleCA9IHJlY2lwZUxpYnJhcnkucmVjaXBlTGlicmFyeS5maW5kSW5kZXgoKGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVsLm5hbWUgPT0gZWxlbU5hbWVJRDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZWNpcGVMaWJyYXJ5LnJlY2lwZUxpYnJhcnkuc3BsaWNlKGVsZW1JbmRleCk7XG4gICAgICAgICAgICAgICAgX2RlbGV0ZWJ1dHRvbi5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIHNhdmVMb2FkTG9jYWxTdG9yYWdlLnNhdmVUbyhyZWNpcGVMaWJyYXJ5LnJlY2lwZUxpYnJhcnksICdKU09OcmVjaXBlTGlicmFyeScpXG5cbiAgICAgICAgICAgICAgICAvLyByZWNpcGVMaWJyYXJ5LnNwbGljZSh0aGlzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQpXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlKHRoaXMucGFyZW50RWxlbWVudClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIF9kZWxldGVidXR0b247XG4gICAgICAgIH1cbn1cbiIsIi8vIGltcG9ydCB7IEhUTUxTa2VsZXRvbiB9IGZyb20gJy4uL3V0aWxzL2NyZWF0ZUhUTUxTa2VsJztcbmltcG9ydCBSZWNpcGUgZnJvbSAnLi4vdXRpbHMvcmVjaXBlQ2xhc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IHNhdmVMb2FkTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vdXRpbHMvc2F2ZUxvYWRMb2NTdG9yYWdlJztcbmltcG9ydCB7IHJlY2lwZUhUTUwgfSBmcm9tICcuL3JlY2lwZUhUTUwnO1xuaW1wb3J0IHsgcmVjaXBlRm9ybSB9IGZyb20gJy4vcmVjaXBlRm9ybSc7XG5cblxuZnVuY3Rpb24gZm9ybUhhbmRsZXIgKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMucmVjaXBlRm9ybSlcblxuICAgIGZvcm1EYXRhID0gZS5mb3JtRGF0YVxuICAgIGxldCBfbmFtZSA9IGZvcm1EYXRhLmdldCgnbmFtZScpO1xuICAgIGxldCBfaW5ncmVkaWVudHMgPSBmb3JtRGF0YS5nZXQoJ2luZ3JlZGllbnRzJykgXG4gICAgbGV0IF9zdGVwcyA9IGZvcm1EYXRhLmdldCgnc3RlcHMnKVxuXG4gICAgX2luZ3JlZGllbnRzID0gX2luZ3JlZGllbnRzLnRyaW0oKS5zcGxpdCgnOycpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX2luZ3JlZGllbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfaW5ncmVkaWVudHNbaV0gPSBfaW5ncmVkaWVudHNbaV0udHJpbSgpLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8ICBfaW5ncmVkaWVudHNbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBfaW5ncmVkaWVudHNbaV1bal0gPSBfaW5ncmVkaWVudHNbaV1bal0udHJpbSgpO1xuICAgICAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgX2luZ3JPYmpMaXN0ID0gW11cblxuICAgIGZvciAobGV0IGk9MDtpPF9pbmdyZWRpZW50cy5sZW5ndGg7aSsrKSB7XG4gICAgICAgIGxldCBfaW5nck9iaiA9IHsgaW5ncmVkaWVudDp1bmRlZmluZWQsIGFtb3VudDp1bmRlZmluZWQsIG1lYXN1cmVtZW50OnVuZGVmaW5lZH1cblxuICAgICAgICBfaW5nck9iai5pbmdyZWRpZW50ID0gX2luZ3JlZGllbnRzW2ldWzBdXG4gICAgICAgIF9pbmdyT2JqLmFtb3VudCA9IF9pbmdyZWRpZW50c1tpXVsxXVxuICAgICAgICBfaW5nck9iai5tZWFzdXJlbWVudCA9IF9pbmdyZWRpZW50c1tpXVsyXVxuICAgICAgICBfaW5nck9iakxpc3QucHVzaChfaW5nck9iailcbiAgICB9XG5cbiAgICBfc3RlcHMgPSBfc3RlcHMudHJpbSgpLnNwbGl0KCc7Jyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfc3RlcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgX3N0ZXBzW2ldID0gX3N0ZXBzW2ldLnRyaW0oKVxuICAgIH1cbiAgICBjb25zdCBuZXdSZWNpcGUgPSBuZXcgUmVjaXBlKF9uYW1lLCBfaW5nck9iakxpc3QsIF9zdGVwcyk7XG5cblxuICAgIC8vd2F5IHRvIGV4dHJhY3QgdGhpcz8gbmVjZXNzYXJ5IGJlZm9yZSBtb2R1bGFyaXppbmdcbiAgICByZWNpcGVMaWJyYXJ5LnJlY2lwZUxpYnJhcnkucHVzaChuZXdSZWNpcGUpXG4gICAgc2F2ZUxvYWRMb2NhbFN0b3JhZ2Uuc2F2ZVRvKHJlY2lwZUxpYnJhcnkucmVjaXBlTGlicmFyeSwgJ0pTT05yZWNpcGVMaWJyYXJ5JylcbiAgICByZWNpcGVIVE1MLnJlbmRlcihyZWNpcGVMaWJyYXJ5LnJlY2lwZUxpYnJhcnkpXG5cblxufVxuXG5cbmV4cG9ydCBjb25zdCByZWNpcGVMaWJyYXJ5ID0ge1xuXG4gICAgcmVjaXBlTGlicmFyeTogbmV3IEFycmF5LFxuICAgICAgICAvL2ltcG9ydCByZWNpcGVGb3JtXG4gICAgICAgIC8vaW1wb3J0IHJlY2lwZUhUTUxcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yZWNpcGVMaWJyYXJ5KVxuICAgICAgICB0aGlzLnJlY2lwZUxpYnJhcnkgPSBzYXZlTG9hZExvY2FsU3RvcmFnZS5sb2FkKCdKU09OcmVjaXBlTGlicmFyeScpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlY2lwZUxpYnJhcnkpXG4gICAgICAgIGlmICh0aGlzLnJlY2lwZUxpYnJhcnkgPT09IHVuZGVmaW5lZCkgdGhpcy5yZWNpcGVMaWJyYXJ5ID0gdGhpcy5kZWZhdWx0TGlicmFyeVxuICAgICAgICAvLyByZWNpcGVGb3JtID0gcmVjaXBlRm9ybVxuICAgICAgICB0aGlzLnJlbmRlcigpIC8vY3JlYXRlIFJlY2lwZXMgTGlzdCBIVE1MXG4gICAgICAgIC8vIHJlY2lwZUhUTUwgPSByZWNpcGVIVE1MXG4gICAgICAgIHJlY2lwZUZvcm0ucmVjaXBlRm9ybS5hZGRFdmVudExpc3RlbmVyKCdmb3JtZGF0YScsIGZvcm1IYW5kbGVyKSAvL2FkZCByZXNwb25zZSB0byBsaWJyYXJ5IGFuZCB1cGRhdGVIVE1MIG9uIHN1Ym1pdFxuXG4gICAgfSxcblxuICAgIGZpbmRCeU5hbWU6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJlY2lwZUxpYnJhcnkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlY2lwZUxpYnJhcnlbaV0ubmFtZSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVjaXBlTGlicmFyeVtpXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuXG5cblxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlY2lwZUZvcm0uaW5pdCgpIC8vY3JlYXRlIFJlY2lwZUZvcm0gSFRNTCAmIEFkZCB0byBEb2NcbiAgICAgICAgcmVjaXBlSFRNTC5yZW5kZXIodGhpcy5yZWNpcGVMaWJyYXJ5KVxuICAgIH0sXG5cblxuICAgIGRlZmF1bHRMaWJyYXJ5OiBbe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNjcmFtYmxlZCBlZ2dzXCIsXG4gICAgICAgICAgICAgICAgICAgIGluZ3JlZGllbnRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5ncmVkaWVudDogXCJlZ2dzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlbWVudDogXCJ3aG9sZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZ3JlZGllbnQ6IFwicGVwcGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlbWVudDogXCJ0c3BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmdyZWRpZW50OiBcInNhbHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lYXN1cmVtZW50OiBcInRzcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZ3JlZGllbnQ6IFwib2lsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlbWVudDogXCJ0YnNwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc3RlcHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29va1wiXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJvbWVsbGV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBpbmdyZWRpZW50czogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZ3JlZGllbnQ6IFwiZWdnc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogXCI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVhc3VyZW1lbnQ6IFwid2hvbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmdyZWRpZW50OiBcInBlcHBlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVhc3VyZW1lbnQ6IFwidHNwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5ncmVkaWVudDogXCJzYWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBcIjNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlbWVudDogXCJ0c3BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmdyZWRpZW50OiBcImJhY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBcIjRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlbWVudDogXCJzdHJpcHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGVwczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb29rXCJcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1dXG5cblxuXG59XG5cbiBcblxuXG5cblxuXG4gICAgIFxuXG4iLCJcbmV4cG9ydCBjb25zdCBIVE1MU2tlbGV0b24gPSB7XG5cbiAgICBkb2Nib2R5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JyksXG5cblxuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnJlbmRlcigpXG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUhlYWRlcigpO1xuICAgICAgICB0aGlzLmNyZWF0ZVNlY3Rpb25zKClcbiAgICB9LFxuXG4gICAgY3JlYXRlSGVhZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxuICAgICAgICB0aGlzLmNyZWF0ZU5hdigpXG5cbiAgICB9LFxuXG4gICAgbmF2OiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKSxcbiAgICB1bE5hdiA6ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKSxcblxuICAgIGNyZWF0ZU5hdjogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdGhpcy5uYXYuYXBwZW5kQ2hpbGQodGhpcy51bE5hdilcblxuICAgICAgICB0aGlzLnVsTmF2LmFwcGVuZENoaWxkKHRoaXMuaG9tZU5hdkxpbmsoKSlcbiAgICAgICAgdGhpcy51bE5hdi5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZU5hdkxpbmsoJ1JlY2lwZXMnLCAnJykpXG4gICAgICAgIC8vIHRoaXMudWxOYXYuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVTZWFyY2hCYXIoKSlcbiAgICB9LFxuXG4gICAgaG9tZU5hdkxpbms6IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgbGluay5ocmVmID0gJydcbiAgICAgICAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgICBsb2dvLnNyYyA9ICcnXG4gICAgICAgIGxvZ28uYWx0ID0gJydcblxuICAgICAgICBsaW5rLmFwcGVuZENoaWxkKGxvZ28pXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGxpbmspXG5cbiAgICAgICAgcmV0dXJuIGxpXG4gICAgfSxcblxuICAgIGNyZWF0ZU5hdkxpbms6IGZ1bmN0aW9uKHRpdGxlLCB1cmwpIHtcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgICAgICBsaW5rLmhyZWYgPSB1cmxcbiAgICAgICAgbGluay50ZXh0Q29udGVudCA9IHRpdGxlXG5cbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQobGluaylcblxuICAgICAgICByZXR1cm4gbGlcbiAgICB9LFxuXG4gICAgY3JlYXRlU2VhcmNoQmFyKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnd2lwJylcbiAgICB9LFxuXG4gICAgc2VsZWN0ZWRSZWNpcGVzOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyksXG4gICAgYWRkUmVjaXBlOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyksXG4gICAgcmVjaXBlczogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpLFxuICAgIGdyb2NlcnlMaXN0OiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyksXG5cbiAgICBcbiAgICBjcmVhdGVTZWN0aW9uczogZnVuY3Rpb24oKSB7XG4gICAgICAgIFxuXG5cbiAgICAgICAgdGhpcy5kb2Nib2R5LmFwcGVuZENoaWxkKHRoaXMuc2VsZWN0ZWRSZWNpcGVzKVxuICAgICAgICB0aGlzLmRvY2JvZHkuYXBwZW5kQ2hpbGQodGhpcy5hZGRSZWNpcGUpXG4gICAgICAgIHRoaXMuZG9jYm9keS5hcHBlbmRDaGlsZCh0aGlzLnJlY2lwZXMpXG4gICAgICAgIHRoaXMuZG9jYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdyb2NlcnlMaXN0KVxuICAgIFxuICAgIH0sXG5cbiAgICAvLyBjcmVhdGVTZWM6IGZ1bmN0aW9uKGlkKSB7XG4gICAgLy8gICAgIGxldCBzZWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcbiAgICAvLyAgICAgc2VjLmlkID0gaWRcbiAgICAvLyAgICAgcmV0dXJuIHNlY1xuICAgIC8vIH0sXG59IiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWNpcGUge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGluZ3JlZGllbnRzLCBzdGVwcykge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAvL2luZ3JlZGllbnRzIGlzIGEgZG91YmxlIGFycmF5LFtbaXRlbSwgYW1vdW50LCBtZWFzdXJlbWVudF1dXG4gICAgICAgIHRoaXMuaW5ncmVkaWVudHMgPSBpbmdyZWRpZW50cztcbiAgICAgICAgdGhpcy5zdGVwcyA9IHN0ZXBzO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjb25zdCBzYXZlTG9hZExvY2FsU3RvcmFnZSA9IHtcbiAgICBcbiAgICBsb2FkOiBmdW5jdGlvbiAoYWRkcmVzcykge1xuICAgICAgICBsZXQgdGVtcCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGFkZHJlc3MpXG4gICAgICAgIGNvbnNvbGUubG9nKHRlbXApXG4gICAgICAgIGNvbnNvbGUubG9nKGFkZHJlc3MpXG4gICAgICAgIGlmICh0ZW1wID09PSBudWxsKSByZXR1cm47XG4gICAgICAgIGxldCBlbCA9IEpTT04ucGFyc2UodGVtcClcbiAgICAgICAgcmV0dXJuIGVsXG4gICAgICAgIFxuICAgIH0sXG5cbiAgICBzYXZlVG86IGZ1bmN0aW9uIChlbCwgYWRkcmVzcykge1xuICAgICAgICBsZXQgdGVtcCA9IEpTT04uc3RyaW5naWZ5KGVsKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShhZGRyZXNzLCB0ZW1wKVxuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=