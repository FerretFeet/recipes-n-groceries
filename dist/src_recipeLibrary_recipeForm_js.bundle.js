"use strict";
(self["webpackChunkrecipes_n_groceries"] = self["webpackChunkrecipes_n_groceries"] || []).push([["src_recipeLibrary_recipeForm_js"],{

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
//import ingr list
//import msr units


const createForm = {
    //create form, input for Name, Ingredients([ingredient, amount, msrmnt]), Steps ([1,2,3])
    recipeForm: document.createElement('form'),
    ingrList: document.createElement('ul'),
    stepsList: document.createElement('ul'),



    createForm: function() {
        this.recipeForm.appendChild(this.addName())

        this.ingrCont = document.createElement('div')
        //put appends in own function
        this.appendIngr(this.ingrCont)


        this.stepsCont = document.createElement('div')
        //put appends in own function
        this.appendSteps(this.stepsCont)

        this.recipeForm.appendChild(this.addSubmitBtn())

        return this.recipeForm


    //end function
    
    },

    appendSteps: function(container) {

        container.appendChild(this.stepsList)
            container.appendChild(this.addSteps())
        container.appendChild(this.dupInpBtn())

    },

    appendIngr: function(container) {
    container.appendChild(this.ingrList)
        container.appendChild(this.addIngredients())
    container.appendChild(this.dupInpBtn())   
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

        let labelIngr = this.createFormLabel('ingredients', 'Ingredients')
        li.appendChild(labelIngr)

        let ingrInput = this.createIngrValInput()
        li.appendChild(ingrInput)

        let ingrName = this.createIngrNameInput()
        li.appendChild(ingrName)

        let ingrMsr = this.createIngrMsrInput()
        li.appendChild(ingrMsr)

        return li  
    },

    addSteps: function() {

        let li = document.createElement('li')
         
        let stepsLabel = this.createFormLabel('steps', 'Steps')
        li.appendChild(stepsLabel)

        let inputStep = this.createStepsInput()
        li.appendChild(inputStep)

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
 

    createIngrValInput: () => {
        let _ingrInput = document.createElement('input')
        _ingrInput.setAttribute('type', 'number')
        _ingrInput.classlist = 'inputIngredient inputVal'
        _ingrInput.setAttribute('name', 'ingredients')
        _ingrInput.setAttribute('maxValue', '99')
        _ingrInput.setAttribute('minValue', '1')
        _ingrInput.required = true
        return _ingrInput
    },

    createIngrNameInput: () => {
        //look for above input for guidance
        let _ingrInput = document.createElement('select')
        _ingrInput.classlist = 'inputIngredient inputName'

        _ingrInput.setAttribute('name', 'ingredients')
        _ingrInput.required = true
        undefined.createOptions(_ingrInput, ['eggs', 'milk'])
        return _ingrInput
    },

    createOptions: function(selectEl, valueArr) {

     valueArr.forEach(element => {
           let temp = document.createElement('option')
           temp.setAttribute('value', element)
           temp.textContent = element
           selectEl.appendChild(temp)
     });
    },

    createIngrMsrInput: () => {
        let _ingrInput = document.createElement('select')
        _ingrInput.classlist = 'inputIngredient inputMsr'
        _ingrInput.setAttribute('name', 'ingredients')
        _ingrInput.required = true
        undefined.createOptions(_ingrInput, ['tbsp', 'cup'])
        return _ingrInput
    },

    dupInpBtn: function() {
        //might need input arg
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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles.css */ "./src/styles.css");
/* harmony import */ var _createForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createForm */ "./src/recipeLibrary/createForm.js");




const recipeForm = {


    sectionForm: _utils_createHTMLSkel__WEBPACK_IMPORTED_MODULE_0__.HTMLSkeleton.addRecipe,

    init: function() {
        this.form = _createForm__WEBPACK_IMPORTED_MODULE_2__.createForm.createForm(),
        console.log(this.form)

        this.form.classList = 'hide-block',
        this.createContainer(),
        this.container.appendChild(this.form)
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
                this.form.classList.toggle('hide-block')
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3JlY2lwZUxpYnJhcnlfcmVjaXBlRm9ybV9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0Esa0RBQWtELHVCQUF1QixHQUFHLGlCQUFpQixvQkFBb0Isb0NBQW9DLDBCQUEwQix1QkFBdUIsR0FBRyw4RkFBOEYsNEJBQTRCLHVCQUF1QixxQkFBcUIsR0FBRyw2QkFBNkIsa0JBQWtCLG1CQUFtQix3QkFBd0IsR0FBRyxxQ0FBcUMsd0JBQXdCLHNCQUFzQixxQkFBcUIsb0JBQW9CLGdCQUFnQiw4QkFBOEIsR0FBRyx1QkFBdUIsMEJBQTBCLHlCQUF5QixzQkFBc0Isb0JBQW9CLHdCQUF3Qix5QkFBeUIsR0FBRyxVQUFVLG9CQUFvQixvQ0FBb0MsNEJBQTRCLGdCQUFnQixrQkFBa0Isc0RBQXNELEdBQUcsY0FBYyxvQkFBb0IsOEJBQThCLHVCQUF1Qix1Q0FBdUMsbUJBQW1CLEdBQUcsdUJBQXVCLHNDQUFzQyx1QkFBdUIsNEJBQTRCLE1BQU0sbUJBQW1CLG9CQUFvQixHQUFHLFdBQVcsaUZBQWlGLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsUUFBUSxRQUFRLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLE9BQU8sTUFBTSx3Q0FBd0MsT0FBTyxLQUFLLFVBQVUsa0NBQWtDLHVCQUF1QixHQUFHLGlCQUFpQixvQkFBb0Isb0NBQW9DLDBCQUEwQix1QkFBdUIsR0FBRyw4RkFBOEYsNEJBQTRCLHVCQUF1QixxQkFBcUIsR0FBRyw2QkFBNkIsa0JBQWtCLG1CQUFtQix3QkFBd0IsR0FBRyxxQ0FBcUMsd0JBQXdCLHNCQUFzQixxQkFBcUIsb0JBQW9CLGdCQUFnQiw4QkFBOEIsR0FBRyx1QkFBdUIsMEJBQTBCLHlCQUF5QixzQkFBc0Isb0JBQW9CLHdCQUF3Qix5QkFBeUIsR0FB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Ozs7QUN4RE87O0FBRVA7OztBQUdBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWNpcGVzLW4tZ3JvY2VyaWVzLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVjaXBlcy1uLWdyb2Nlcmllcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVjaXBlcy1uLWdyb2Nlcmllcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3JlY2lwZXMtbi1ncm9jZXJpZXMvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3JlY2lwZXMtbi1ncm9jZXJpZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVjaXBlcy1uLWdyb2Nlcmllcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVjaXBlcy1uLWdyb2Nlcmllcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZWNpcGVzLW4tZ3JvY2VyaWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3JlY2lwZXMtbi1ncm9jZXJpZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZWNpcGVzLW4tZ3JvY2VyaWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVjaXBlcy1uLWdyb2Nlcmllcy8uL3NyYy9yZWNpcGVMaWJyYXJ5L2NyZWF0ZUZvcm0uanMiLCJ3ZWJwYWNrOi8vcmVjaXBlcy1uLWdyb2Nlcmllcy8uL3NyYy9yZWNpcGVMaWJyYXJ5L3JlY2lwZUZvcm0uanMiLCJ3ZWJwYWNrOi8vcmVjaXBlcy1uLWdyb2Nlcmllcy8uL3NyYy91dGlscy9jcmVhdGVIVE1MU2tlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImhlYWRlciB7XFxuICAgIG1pbi1oZWlnaHQ6IDE1dmg7XFxufVxcblxcbi50cC1sdmwtbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDE1dmg7XFxufVxcblxcblxcbi50cC1sdmwtbmF2LFxcbi50cC1sdmwtbmF2ID4gbGkgPiBhLFxcbi5zZWNvbmRhcnktbHZsLW5hdixcXG4uc2Vjb25kYXJ5LWx2bC1uYXYgPiBsaSA+IGEgIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLnJlbW92ZS1zZWxlY3RlZC1yZWNpcGUge1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBkaXNwbGF5OiByZWxhdGl2ZTtcXG59XFxuLyogLnJlbW92ZS1zZWxlY3RlZC1yZWNpcGU6OmFmdGVyIHtcXG4gICAgZGlzcGxheTogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6ICd4J1xcbn0gKi9cXG5cXG4vKiAuY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhaW5lciBidXR0b24ge1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGZvbnQtc2l6ZTogMjRwdDtcXG4gICAgcGFkZGluZzogYXV0bztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgMzAwcHgpO1xcbn1cXG5cXG5mb3JtID4gKiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBoZWlnaHQ6IGNsYW1wKDYwcHgsIDZyZW0sIDQwMHB4KTtcXG4gICAgbWFyZ2luOiBub25lO1xcbn1cXG5mb3JtID4gKiA+IHRleHRhcmVhIHtcXG4gICAgaGVpZ2h0OiBjbGFtcCgyMHB4LCAycmVtLCAxMDAlKTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcblxcbn0gKi9cXG5cXG4uaGlkZS1ibG9jayB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOzs7QUFHQTs7OztJQUlJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBQ0E7OztHQUdHOztBQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQ0c7O0FBRUg7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImhlYWRlciB7XFxuICAgIG1pbi1oZWlnaHQ6IDE1dmg7XFxufVxcblxcbi50cC1sdmwtbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDE1dmg7XFxufVxcblxcblxcbi50cC1sdmwtbmF2LFxcbi50cC1sdmwtbmF2ID4gbGkgPiBhLFxcbi5zZWNvbmRhcnktbHZsLW5hdixcXG4uc2Vjb25kYXJ5LWx2bC1uYXYgPiBsaSA+IGEgIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLnJlbW92ZS1zZWxlY3RlZC1yZWNpcGUge1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBkaXNwbGF5OiByZWxhdGl2ZTtcXG59XFxuLyogLnJlbW92ZS1zZWxlY3RlZC1yZWNpcGU6OmFmdGVyIHtcXG4gICAgZGlzcGxheTogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6ICd4J1xcbn0gKi9cXG5cXG4vKiAuY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhaW5lciBidXR0b24ge1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGZvbnQtc2l6ZTogMjRwdDtcXG4gICAgcGFkZGluZzogYXV0bztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgMzAwcHgpO1xcbn1cXG5cXG5mb3JtID4gKiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBoZWlnaHQ6IGNsYW1wKDYwcHgsIDZyZW0sIDQwMHB4KTtcXG4gICAgbWFyZ2luOiBub25lO1xcbn1cXG5mb3JtID4gKiA+IHRleHRhcmVhIHtcXG4gICAgaGVpZ2h0OiBjbGFtcCgyMHB4LCAycmVtLCAxMDAlKTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcblxcbn0gKi9cXG5cXG4uaGlkZS1ibG9jayB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vaW1wb3J0IGluZ3IgbGlzdFxuLy9pbXBvcnQgbXNyIHVuaXRzXG5cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUZvcm0gPSB7XG4gICAgLy9jcmVhdGUgZm9ybSwgaW5wdXQgZm9yIE5hbWUsIEluZ3JlZGllbnRzKFtpbmdyZWRpZW50LCBhbW91bnQsIG1zcm1udF0pLCBTdGVwcyAoWzEsMiwzXSlcbiAgICByZWNpcGVGb3JtOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyksXG4gICAgaW5nckxpc3Q6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyksXG4gICAgc3RlcHNMaXN0OiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpLFxuXG5cblxuICAgIGNyZWF0ZUZvcm06IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnJlY2lwZUZvcm0uYXBwZW5kQ2hpbGQodGhpcy5hZGROYW1lKCkpXG5cbiAgICAgICAgdGhpcy5pbmdyQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIC8vcHV0IGFwcGVuZHMgaW4gb3duIGZ1bmN0aW9uXG4gICAgICAgIHRoaXMuYXBwZW5kSW5ncih0aGlzLmluZ3JDb250KVxuXG5cbiAgICAgICAgdGhpcy5zdGVwc0NvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAvL3B1dCBhcHBlbmRzIGluIG93biBmdW5jdGlvblxuICAgICAgICB0aGlzLmFwcGVuZFN0ZXBzKHRoaXMuc3RlcHNDb250KVxuXG4gICAgICAgIHRoaXMucmVjaXBlRm9ybS5hcHBlbmRDaGlsZCh0aGlzLmFkZFN1Ym1pdEJ0bigpKVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJlY2lwZUZvcm1cblxuXG4gICAgLy9lbmQgZnVuY3Rpb25cbiAgICBcbiAgICB9LFxuXG4gICAgYXBwZW5kU3RlcHM6IGZ1bmN0aW9uKGNvbnRhaW5lcikge1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnN0ZXBzTGlzdClcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmFkZFN0ZXBzKCkpXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmR1cElucEJ0bigpKVxuXG4gICAgfSxcblxuICAgIGFwcGVuZEluZ3I6IGZ1bmN0aW9uKGNvbnRhaW5lcikge1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmluZ3JMaXN0KVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5hZGRJbmdyZWRpZW50cygpKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmR1cElucEJ0bigpKSAgIFxuICAgIH0sXG5cblxuICAgIGFkZE5hbWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgICAgICB0aGlzLmxhYmVsTmFtZSA9IHRoaXMuY3JlYXRlRm9ybUxhYmVsKCduYW1lJywgJ1JlY2lwZSBOYW1lJylcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRoaXMubGFiZWxOYW1lKVxuXG4gICAgICAgIHRoaXMubmFtZUlucHV0ID0gdGhpcy5jcmVhdGVOYW1lSW5wdXQoKVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGhpcy5uYW1lSW5wdXQpXG5cbiAgICAgICAgcmV0dXJuIGRpdlxuICAgIH0sXG5cbiAgICBhZGRJbmdyZWRpZW50czogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcblxuICAgICAgICBsZXQgbGFiZWxJbmdyID0gdGhpcy5jcmVhdGVGb3JtTGFiZWwoJ2luZ3JlZGllbnRzJywgJ0luZ3JlZGllbnRzJylcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQobGFiZWxJbmdyKVxuXG4gICAgICAgIGxldCBpbmdySW5wdXQgPSB0aGlzLmNyZWF0ZUluZ3JWYWxJbnB1dCgpXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGluZ3JJbnB1dClcblxuICAgICAgICBsZXQgaW5nck5hbWUgPSB0aGlzLmNyZWF0ZUluZ3JOYW1lSW5wdXQoKVxuICAgICAgICBsaS5hcHBlbmRDaGlsZChpbmdyTmFtZSlcblxuICAgICAgICBsZXQgaW5nck1zciA9IHRoaXMuY3JlYXRlSW5nck1zcklucHV0KClcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoaW5nck1zcilcblxuICAgICAgICByZXR1cm4gbGkgIFxuICAgIH0sXG5cbiAgICBhZGRTdGVwczogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICAgXG4gICAgICAgIGxldCBzdGVwc0xhYmVsID0gdGhpcy5jcmVhdGVGb3JtTGFiZWwoJ3N0ZXBzJywgJ1N0ZXBzJylcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoc3RlcHNMYWJlbClcblxuICAgICAgICBsZXQgaW5wdXRTdGVwID0gdGhpcy5jcmVhdGVTdGVwc0lucHV0KClcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoaW5wdXRTdGVwKVxuXG4gICAgICAgIHJldHVybiBsaVxuICAgIH0sXG5cbiAgICBhZGRTdWJtaXRCdG46IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uID0gdGhpcy5jcmVhdGVTdWJtaXRCdG4oKVxuICAgICAgICByZXR1cm4gdGhpcy5zdWJtaXRCdXR0b25cblxuICAgIH0sXG5cbiAgICBcbiAgICBjcmVhdGVGb3JtTGFiZWw6IGZ1bmN0aW9uKGxhYmVsTmFtZSwgbGFiZWxIVE1MKSB7IFxuICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgbGFiZWxOYW1lKVxuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsSFRNTC50b1VwcGVyQ2FzZSgpXG4gICAgICAgIHJldHVybiBsYWJlbFxuICAgIH0sXG5cblxuICAgIGNyZWF0ZU5hbWVJbnB1dDogKCkgPT4ge1xuICAgICAgICBsZXQgX25hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgX25hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgICAgIF9uYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdpbnB1dE5hbWUnKVxuICAgICAgICBfbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICduYW1lJylcbiAgICAgICAgX25hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ21heExlbmd0aCcsICczMicpXG4gICAgICAgIF9uYW1lSW5wdXQucmVxdWlyZWQgPSB0cnVlXG4gICAgICAgIHJldHVybiBfbmFtZUlucHV0XG4gICAgfSxcbiBcblxuICAgIGNyZWF0ZUluZ3JWYWxJbnB1dDogKCkgPT4ge1xuICAgICAgICBsZXQgX2luZ3JJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgX2luZ3JJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJylcbiAgICAgICAgX2luZ3JJbnB1dC5jbGFzc2xpc3QgPSAnaW5wdXRJbmdyZWRpZW50IGlucHV0VmFsJ1xuICAgICAgICBfaW5ncklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdpbmdyZWRpZW50cycpXG4gICAgICAgIF9pbmdySW5wdXQuc2V0QXR0cmlidXRlKCdtYXhWYWx1ZScsICc5OScpXG4gICAgICAgIF9pbmdySW5wdXQuc2V0QXR0cmlidXRlKCdtaW5WYWx1ZScsICcxJylcbiAgICAgICAgX2luZ3JJbnB1dC5yZXF1aXJlZCA9IHRydWVcbiAgICAgICAgcmV0dXJuIF9pbmdySW5wdXRcbiAgICB9LFxuXG4gICAgY3JlYXRlSW5nck5hbWVJbnB1dDogKCkgPT4ge1xuICAgICAgICAvL2xvb2sgZm9yIGFib3ZlIGlucHV0IGZvciBndWlkYW5jZVxuICAgICAgICBsZXQgX2luZ3JJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgICAgIF9pbmdySW5wdXQuY2xhc3NsaXN0ID0gJ2lucHV0SW5ncmVkaWVudCBpbnB1dE5hbWUnXG5cbiAgICAgICAgX2luZ3JJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnaW5ncmVkaWVudHMnKVxuICAgICAgICBfaW5ncklucHV0LnJlcXVpcmVkID0gdHJ1ZVxuICAgICAgICB0aGlzLmNyZWF0ZU9wdGlvbnMoX2luZ3JJbnB1dCwgWydlZ2dzJywgJ21pbGsnXSlcbiAgICAgICAgcmV0dXJuIF9pbmdySW5wdXRcbiAgICB9LFxuXG4gICAgY3JlYXRlT3B0aW9uczogZnVuY3Rpb24oc2VsZWN0RWwsIHZhbHVlQXJyKSB7XG5cbiAgICAgdmFsdWVBcnIuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgbGV0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICAgICB0ZW1wLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBlbGVtZW50KVxuICAgICAgICAgICB0ZW1wLnRleHRDb250ZW50ID0gZWxlbWVudFxuICAgICAgICAgICBzZWxlY3RFbC5hcHBlbmRDaGlsZCh0ZW1wKVxuICAgICB9KTtcbiAgICB9LFxuXG4gICAgY3JlYXRlSW5nck1zcklucHV0OiAoKSA9PiB7XG4gICAgICAgIGxldCBfaW5ncklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICAgICAgX2luZ3JJbnB1dC5jbGFzc2xpc3QgPSAnaW5wdXRJbmdyZWRpZW50IGlucHV0TXNyJ1xuICAgICAgICBfaW5ncklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdpbmdyZWRpZW50cycpXG4gICAgICAgIF9pbmdySW5wdXQucmVxdWlyZWQgPSB0cnVlXG4gICAgICAgIHRoaXMuY3JlYXRlT3B0aW9ucyhfaW5ncklucHV0LCBbJ3Ric3AnLCAnY3VwJ10pXG4gICAgICAgIHJldHVybiBfaW5ncklucHV0XG4gICAgfSxcblxuICAgIGR1cElucEJ0bjogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vbWlnaHQgbmVlZCBpbnB1dCBhcmdcbiAgICB9LFxuXG5cbiAgICBcbiAgICBjcmVhdGVTdGVwc0lucHV0OiAoKSA9PiB7XG4gICAgICAgIGxldCBfaW5wdXRTdGVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgICAgICBfaW5wdXRTdGVwLnNldEF0dHJpYnV0ZSgnbmFtZScsICdzdGVwcycpXG4gICAgICAgIF9pbnB1dFN0ZXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzdGVwcycpXG4gICAgICAgIF9pbnB1dFN0ZXAuc2V0QXR0cmlidXRlKCdjb2xzJywgJzMwJylcbiAgICAgICAgX2lucHV0U3RlcC5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnMTAnKVxuICAgICAgICBfaW5wdXRTdGVwLnJlcXVpcmVkID0gdHJ1ZVxuICAgICAgICByZXR1cm4gX2lucHV0U3RlcFxuICAgIH0sXG5cblxuICAgIGNyZWF0ZVN1Ym1pdEJ0bjogKCkgPT4ge1xuICAgICAgICBsZXQgX3N1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIF9zdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnU3VibWl0J1xuICAgICAgICBfc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKVxuICAgICAgICByZXR1cm4gX3N1Ym1pdEJ1dHRvblxuICAgIH1cblxufSIsImltcG9ydCB7IEhUTUxTa2VsZXRvbiB9IGZyb20gJy4uL3V0aWxzL2NyZWF0ZUhUTUxTa2VsJ1xuaW1wb3J0ICcuLi9zdHlsZXMuY3NzJ1xuaW1wb3J0IHsgY3JlYXRlRm9ybSB9IGZyb20gJy4vY3JlYXRlRm9ybSdcblxuZXhwb3J0IGNvbnN0IHJlY2lwZUZvcm0gPSB7XG5cblxuICAgIHNlY3Rpb25Gb3JtOiBIVE1MU2tlbGV0b24uYWRkUmVjaXBlLFxuXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuZm9ybSA9IGNyZWF0ZUZvcm0uY3JlYXRlRm9ybSgpLFxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm0pXG5cbiAgICAgICAgdGhpcy5mb3JtLmNsYXNzTGlzdCA9ICdoaWRlLWJsb2NrJyxcbiAgICAgICAgdGhpcy5jcmVhdGVDb250YWluZXIoKSxcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5mb3JtKVxuICAgICAgICB0aGlzLmNyZWF0ZVRvZ2dsZUJ1dHRvbigpXG4gICAgICAgIC8vIHRoaXMuYXR0YXNjaEZvcm1TdWJtaXRMaXN0ZW5lcigncmVjaXBlLWZvcm0nKVxuICAgIH0sXG5cbiAgICBjcmVhdGVDb250YWluZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzbGlzdCA9ICdjb250YWluZXInXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VjdGlvbkZvcm0pXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGFpbmVyKVxuICAgICAgICB0aGlzLnNlY3Rpb25Gb3JtLmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKVxuICAgIH0sXG5cblxuXG5cblxuICAgIGNyZWF0ZVRvZ2dsZUJ1dHRvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAvL2hpZGUvc2hvdyByZWNpcGUgZm9ybSBvbiBidXR0b24gY2xpY2tcbiAgICAgICAgICAgIHRoaXMuZm9ybVRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgdGhpcy5mb3JtVG9nZ2xlQnV0dG9uLnRleHRDb250ZW50ID0gJysnXG4gICAgICAgICAgICB0aGlzLmZvcm1Ub2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUtYmxvY2snKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnByZXBlbmQodGhpcy5mb3JtVG9nZ2xlQnV0dG9uKVxuICAgIH0sXG5cbiAgICAvLyB1c2VGb3JtU3VibWl0Tm93OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAvLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgICAgcmV0dXJuIGZvcm1EYXRhO1xuICAgIC8vIH0sXG5cbiAgICAvLyBhdHRhY2hGb3JtU3VibWl0TGlzdGVuZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgdGhpcy5yZWNpcGVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMudXNlRm9ybVN1Ym1pdE5vdylcbiAgICAvLyB9LFxuXG4gIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgLy9lbmQgZm9ybSBvYmogXG59IiwiXG5leHBvcnQgY29uc3QgSFRNTFNrZWxldG9uID0ge1xuXG4gICAgZG9jYm9keTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLFxuXG5cbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5yZW5kZXIoKVxuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVIZWFkZXIoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVTZWN0aW9ucygpXG4gICAgfSxcblxuICAgIGNyZWF0ZUhlYWRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcbiAgICAgICAgdGhpcy5jcmVhdGVOYXYoKVxuXG4gICAgfSxcblxuICAgIG5hdjogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2JyksXG4gICAgdWxOYXYgOmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyksXG5cbiAgICBjcmVhdGVOYXY6IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHRoaXMubmF2LmFwcGVuZENoaWxkKHRoaXMudWxOYXYpXG5cbiAgICAgICAgdGhpcy51bE5hdi5hcHBlbmRDaGlsZCh0aGlzLmhvbWVOYXZMaW5rKCkpXG4gICAgICAgIHRoaXMudWxOYXYuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVOYXZMaW5rKCdSZWNpcGVzJywgJycpKVxuICAgICAgICAvLyB0aGlzLnVsTmF2LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlU2VhcmNoQmFyKCkpXG4gICAgfSxcblxuICAgIGhvbWVOYXZMaW5rOiBmdW5jdGlvbigpIHtcblxuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICAgIGxpbmsuaHJlZiA9ICcnXG4gICAgICAgIGxldCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgbG9nby5zcmMgPSAnJ1xuICAgICAgICBsb2dvLmFsdCA9ICcnXG5cbiAgICAgICAgbGluay5hcHBlbmRDaGlsZChsb2dvKVxuICAgICAgICBsaS5hcHBlbmRDaGlsZChsaW5rKVxuXG4gICAgICAgIHJldHVybiBsaVxuICAgIH0sXG5cbiAgICBjcmVhdGVOYXZMaW5rOiBmdW5jdGlvbih0aXRsZSwgdXJsKSB7XG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgbGluay5ocmVmID0gdXJsXG4gICAgICAgIGxpbmsudGV4dENvbnRlbnQgPSB0aXRsZVxuXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGxpbmspXG5cbiAgICAgICAgcmV0dXJuIGxpXG4gICAgfSxcblxuICAgIGNyZWF0ZVNlYXJjaEJhcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3dpcCcpXG4gICAgfSxcblxuICAgIHNlbGVjdGVkUmVjaXBlczogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpLFxuICAgIGFkZFJlY2lwZTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpLFxuICAgIHJlY2lwZXM6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKSxcbiAgICBncm9jZXJ5TGlzdDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpLFxuXG4gICAgXG4gICAgY3JlYXRlU2VjdGlvbnM6IGZ1bmN0aW9uKCkge1xuICAgICAgICBcblxuXG4gICAgICAgIHRoaXMuZG9jYm9keS5hcHBlbmRDaGlsZCh0aGlzLnNlbGVjdGVkUmVjaXBlcylcbiAgICAgICAgdGhpcy5kb2Nib2R5LmFwcGVuZENoaWxkKHRoaXMuYWRkUmVjaXBlKVxuICAgICAgICB0aGlzLmRvY2JvZHkuYXBwZW5kQ2hpbGQodGhpcy5yZWNpcGVzKVxuICAgICAgICB0aGlzLmRvY2JvZHkuYXBwZW5kQ2hpbGQodGhpcy5ncm9jZXJ5TGlzdClcbiAgICBcbiAgICB9LFxuXG4gICAgLy8gY3JlYXRlU2VjOiBmdW5jdGlvbihpZCkge1xuICAgIC8vICAgICBsZXQgc2VjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpXG4gICAgLy8gICAgIHNlYy5pZCA9IGlkXG4gICAgLy8gICAgIHJldHVybiBzZWNcbiAgICAvLyB9LFxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==