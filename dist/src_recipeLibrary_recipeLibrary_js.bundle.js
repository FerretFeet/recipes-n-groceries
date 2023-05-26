"use strict";
(self["webpackChunkrecipes_n_groceries"] = self["webpackChunkrecipes_n_groceries"] || []).push([["src_recipeLibrary_recipeLibrary_js"],{

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
___CSS_LOADER_EXPORT___.push([module.id, "header {\n    min-height: 15vh;\n}\n\n.tp-lvl-nav {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    min-height: 15vh;\n}\n\n\n.tp-lvl-nav,\n.tp-lvl-nav > li > a,\n.secondary-lvl-nav,\n.secondary-lvl-nav > li > a  {\n    text-decoration: none;\n    list-style: none;\n    color: inherit;\n}\n\n/* .container {\n    display: flex;\n    gap: 2rem;\n    justify-content: center;\n}\n\n.container button {\n    height: fit-content;\n    width: fit-content;\n    font-size: 24pt;\n    padding: auto;\n    font-weight: bold;\n    align-self: center;\n}\n\nform {\n    display: grid;\n    justify-content: space-around;\n    justify-items: center;\n    gap: 1rem;\n    width: 100%;\n    grid-template-columns: repeat(auto-fill, 300px);\n}\n\nform > * {\n    display: grid;\n    justify-content: center;\n    overflow-y: auto;\n    height: clamp(60px, 6rem, 400px);\n    margin: none;\n}\nform > * > textarea {\n    height: clamp(20px, 2rem, 100%);\n    overflow-y: auto;\n    word-wrap: break-word;\n\n} */\n\n.hide-block {\n    display: none;\n}\n\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,gBAAgB;AACpB;;;AAGA;;;;IAII,qBAAqB;IACrB,gBAAgB;IAChB,cAAc;AAClB;;AAEA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GAoCG;;AAEH;IACI,aAAa;AACjB","sourcesContent":["header {\n    min-height: 15vh;\n}\n\n.tp-lvl-nav {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    min-height: 15vh;\n}\n\n\n.tp-lvl-nav,\n.tp-lvl-nav > li > a,\n.secondary-lvl-nav,\n.secondary-lvl-nav > li > a  {\n    text-decoration: none;\n    list-style: none;\n    color: inherit;\n}\n\n/* .container {\n    display: flex;\n    gap: 2rem;\n    justify-content: center;\n}\n\n.container button {\n    height: fit-content;\n    width: fit-content;\n    font-size: 24pt;\n    padding: auto;\n    font-weight: bold;\n    align-self: center;\n}\n\nform {\n    display: grid;\n    justify-content: space-around;\n    justify-items: center;\n    gap: 1rem;\n    width: 100%;\n    grid-template-columns: repeat(auto-fill, 300px);\n}\n\nform > * {\n    display: grid;\n    justify-content: center;\n    overflow-y: auto;\n    height: clamp(60px, 6rem, 400px);\n    margin: none;\n}\nform > * > textarea {\n    height: clamp(20px, 2rem, 100%);\n    overflow-y: auto;\n    word-wrap: break-word;\n\n} */\n\n.hide-block {\n    display: none;\n}\n\n"],"sourceRoot":""}]);
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

    

const recipeForm = {

    recipeForm: document.createElement('form'),

    sectionForm: _utils_createHTMLSkel__WEBPACK_IMPORTED_MODULE_0__.HTMLSkeleton.addRecipe,

    init: function() {
        this.recipeForm.classList = 'hide-block',
        this.createContainer(),
        this.createForm(),
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


    createForm: function() {
        //create form, input for Name, Ingredients([ingredient, amount, msrmnt]), Steps ([1,2,3])

        this.createFormLabel = function(labelName, labelHTML) { 
            let label = document.createElement('label')
            label.setAttribute('for', labelName)
            label.textContent = labelHTML.toUpperCase()
            return label
        }
        this.labelName = this.createFormLabel('name', 'Recipe Name')
        this.recipeForm.appendChild(this.labelName)

        this.createNameInput = () => {
            let _nameInput = document.createElement('input')
            _nameInput.setAttribute('type', 'text')
            _nameInput.setAttribute('id', 'inputName')
            _nameInput.setAttribute('name', 'name')
            _nameInput.setAttribute('maxLength', '32')
            _nameInput.required = true
            return _nameInput
        }

        this.nameInput = this.createNameInput()
        this.recipeForm.appendChild(this.nameInput)


        this.labelIngr = this.createFormLabel('ingredients', 'Ingredients')
        this.recipeForm.appendChild(this.labelIngr)

        this.createIngrInput = () => {
            let _ingrInput = document.createElement('input')
            _ingrInput.setAttribute('type', 'number')
            _ingrInput.setAttribute('class', 'inputIngredient')
            _ingrInput.setAttribute('name', 'ingredients')
            _ingrInput.setAttribute('maxValue', '99')
            _ingrInput.setAttribute('minValue', '1')
            _ingrInput.required = true
            return _ingrInput
        }

        this.ingrInput = this.createIngrInput()
        this.recipeForm.appendChild(this.ingrInput)


        this.stepsLabel = this.createFormLabel('steps', 'Steps')
        this.recipeForm.appendChild(this.stepsLabel)
        
        this.createStepsInput = () => {
            let _inputStep = document.createElement('textarea')
            _inputStep.setAttribute('name', 'steps')
            _inputStep.setAttribute('class', 'steps')
            _inputStep.setAttribute('cols', '30')
            _inputStep.setAttribute('rows', '10')
            _inputStep.required = true
            return _inputStep
        }

        this.inputStep = this.createStepsInput()
        this.recipeForm.appendChild(this.inputStep)


        this.createSubmitBtn = () => {
            let _submitButton = document.createElement('button')
            _submitButton.textContent = 'Submit'
            _submitButton.setAttribute('type', 'submit')
            return _submitButton
        }

        this.submitButton = this.createSubmitBtn()
        this.recipeForm.appendChild(this.submitButton)

        //submit button

        this.container.appendChild(this.recipeForm)
    //end function
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
    //     let formData = new FormData(this.recipeForm)
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
                let elemIndex = recipeLibrary.recipeLibrary.findIndex((el) => {
                    el.name == elemNameID;
                });
                recipeLibrary.recipeLibrary.splice(elemIndex);
                _deletebutton.parentElement.remove();
                saveLoadLocalStorage.saveTo(recipeLibrary.recipeLibrary, 'JSONrecipeLibrary')

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3JlY2lwZUxpYnJhcnlfcmVjaXBlTGlicmFyeV9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0Esa0RBQWtELHVCQUF1QixHQUFHLGlCQUFpQixvQkFBb0Isb0NBQW9DLDBCQUEwQix1QkFBdUIsR0FBRyw4RkFBOEYsNEJBQTRCLHVCQUF1QixxQkFBcUIsR0FBRyxtQkFBbUIsb0JBQW9CLGdCQUFnQiw4QkFBOEIsR0FBRyx1QkFBdUIsMEJBQTBCLHlCQUF5QixzQkFBc0Isb0JBQW9CLHdCQUF3Qix5QkFBeUIsR0FBRyxVQUFVLG9CQUFvQixvQ0FBb0MsNEJBQTRCLGdCQUFnQixrQkFBa0Isc0RBQXNELEdBQUcsY0FBYyxvQkFBb0IsOEJBQThCLHVCQUF1Qix1Q0FBdUMsbUJBQW1CLEdBQUcsdUJBQXVCLHNDQUFzQyx1QkFBdUIsNEJBQTRCLE1BQU0sbUJBQW1CLG9CQUFvQixHQUFHLFdBQVcsaUZBQWlGLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsUUFBUSxRQUFRLFlBQVksYUFBYSxXQUFXLE9BQU8sd0NBQXdDLE9BQU8sS0FBSyxVQUFVLGtDQUFrQyx1QkFBdUIsR0FBRyxpQkFBaUIsb0JBQW9CLG9DQUFvQywwQkFBMEIsdUJBQXVCLEdBQUcsOEZBQThGLDRCQUE0Qix1QkFBdUIscUJBQXFCLEdBQUcsbUJBQW1CLG9CQUFvQixnQkFBZ0IsOEJBQThCLEdBQUcsdUJBQXVCLDBCQUEwQix5QkFBeUIsc0JBQXNCLG9CQUFvQix3QkFBd0IseUJBQXlCLEdBQUcsVUFBVSxvQkFBb0Isb0NBQW9DLDRCQUE0QixnQkFBZ0Isa0JBQWtCLHNEQUFzRCxHQUFHLGNBQWMsb0JBQW9CLDhCQUE4Qix1QkFBdUIsdUNBQXVDLG1CQUFtQixHQUFHLHVCQUF1QixzQ0FBc0MsdUJBQXVCLDRCQUE0QixNQUFNLG1CQUFtQixv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Q0E7QUFDQSxpQkFBaUI7Ozs7QUFJakI7O0FBRUE7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JKTzs7QUFFUDs7O0FBR0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7Ozs7Ozs7Ozs7Ozs7O0FDbkZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1JPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVjaXBlcy1uLWdyb2Nlcmllcy8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3JlY2lwZXMtbi1ncm9jZXJpZXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3JlY2lwZXMtbi1ncm9jZXJpZXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZWNpcGVzLW4tZ3JvY2VyaWVzLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZWNpcGVzLW4tZ3JvY2VyaWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3JlY2lwZXMtbi1ncm9jZXJpZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3JlY2lwZXMtbi1ncm9jZXJpZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVjaXBlcy1uLWdyb2Nlcmllcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZWNpcGVzLW4tZ3JvY2VyaWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVjaXBlcy1uLWdyb2Nlcmllcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3JlY2lwZXMtbi1ncm9jZXJpZXMvLi9zcmMvcmVjaXBlTGlicmFyeS9yZWNpcGVGb3JtLmpzIiwid2VicGFjazovL3JlY2lwZXMtbi1ncm9jZXJpZXMvLi9zcmMvcmVjaXBlTGlicmFyeS9yZWNpcGVIVE1MLmpzIiwid2VicGFjazovL3JlY2lwZXMtbi1ncm9jZXJpZXMvLi9zcmMvcmVjaXBlTGlicmFyeS9yZWNpcGVMaWJyYXJ5LmpzIiwid2VicGFjazovL3JlY2lwZXMtbi1ncm9jZXJpZXMvLi9zcmMvdXRpbHMvY3JlYXRlSFRNTFNrZWwuanMiLCJ3ZWJwYWNrOi8vcmVjaXBlcy1uLWdyb2Nlcmllcy8uL3NyYy91dGlscy9yZWNpcGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9yZWNpcGVzLW4tZ3JvY2VyaWVzLy4vc3JjL3V0aWxzL3NhdmVMb2FkTG9jU3RvcmFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImhlYWRlciB7XFxuICAgIG1pbi1oZWlnaHQ6IDE1dmg7XFxufVxcblxcbi50cC1sdmwtbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDE1dmg7XFxufVxcblxcblxcbi50cC1sdmwtbmF2LFxcbi50cC1sdmwtbmF2ID4gbGkgPiBhLFxcbi5zZWNvbmRhcnktbHZsLW5hdixcXG4uc2Vjb25kYXJ5LWx2bC1uYXYgPiBsaSA+IGEgIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLyogLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb250YWluZXIgYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBmb250LXNpemU6IDI0cHQ7XFxuICAgIHBhZGRpbmc6IGF1dG87XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIDMwMHB4KTtcXG59XFxuXFxuZm9ybSA+ICoge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgaGVpZ2h0OiBjbGFtcCg2MHB4LCA2cmVtLCA0MDBweCk7XFxuICAgIG1hcmdpbjogbm9uZTtcXG59XFxuZm9ybSA+ICogPiB0ZXh0YXJlYSB7XFxuICAgIGhlaWdodDogY2xhbXAoMjBweCwgMnJlbSwgMTAwJSk7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG5cXG59ICovXFxuXFxuLmhpZGUtYmxvY2sge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7O0FBR0E7Ozs7SUFJSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9DRzs7QUFFSDtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaGVhZGVyIHtcXG4gICAgbWluLWhlaWdodDogMTV2aDtcXG59XFxuXFxuLnRwLWx2bC1uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogMTV2aDtcXG59XFxuXFxuXFxuLnRwLWx2bC1uYXYsXFxuLnRwLWx2bC1uYXYgPiBsaSA+IGEsXFxuLnNlY29uZGFyeS1sdmwtbmF2LFxcbi5zZWNvbmRhcnktbHZsLW5hdiA+IGxpID4gYSAge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4vKiAuY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhaW5lciBidXR0b24ge1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGZvbnQtc2l6ZTogMjRwdDtcXG4gICAgcGFkZGluZzogYXV0bztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgMzAwcHgpO1xcbn1cXG5cXG5mb3JtID4gKiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBoZWlnaHQ6IGNsYW1wKDYwcHgsIDZyZW0sIDQwMHB4KTtcXG4gICAgbWFyZ2luOiBub25lO1xcbn1cXG5mb3JtID4gKiA+IHRleHRhcmVhIHtcXG4gICAgaGVpZ2h0OiBjbGFtcCgyMHB4LCAycmVtLCAxMDAlKTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcblxcbn0gKi9cXG5cXG4uaGlkZS1ibG9jayB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IEhUTUxTa2VsZXRvbiB9IGZyb20gJy4uL3V0aWxzL2NyZWF0ZUhUTUxTa2VsJ1xuICAgIFxuXG5leHBvcnQgY29uc3QgcmVjaXBlRm9ybSA9IHtcblxuICAgIHJlY2lwZUZvcm06IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKSxcblxuICAgIHNlY3Rpb25Gb3JtOiBIVE1MU2tlbGV0b24uYWRkUmVjaXBlLFxuXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMucmVjaXBlRm9ybS5jbGFzc0xpc3QgPSAnaGlkZS1ibG9jaycsXG4gICAgICAgIHRoaXMuY3JlYXRlQ29udGFpbmVyKCksXG4gICAgICAgIHRoaXMuY3JlYXRlRm9ybSgpLFxuICAgICAgICB0aGlzLmNyZWF0ZVRvZ2dsZUJ1dHRvbigpXG4gICAgICAgIC8vIHRoaXMuYXR0YXNjaEZvcm1TdWJtaXRMaXN0ZW5lcigncmVjaXBlLWZvcm0nKVxuICAgIH0sXG5cbiAgICBjcmVhdGVDb250YWluZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzbGlzdCA9ICdjb250YWluZXInXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VjdGlvbkZvcm0pXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGFpbmVyKVxuICAgICAgICB0aGlzLnNlY3Rpb25Gb3JtLmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKVxuICAgIH0sXG5cblxuICAgIGNyZWF0ZUZvcm06IGZ1bmN0aW9uKCkge1xuICAgICAgICAvL2NyZWF0ZSBmb3JtLCBpbnB1dCBmb3IgTmFtZSwgSW5ncmVkaWVudHMoW2luZ3JlZGllbnQsIGFtb3VudCwgbXNybW50XSksIFN0ZXBzIChbMSwyLDNdKVxuXG4gICAgICAgIHRoaXMuY3JlYXRlRm9ybUxhYmVsID0gZnVuY3Rpb24obGFiZWxOYW1lLCBsYWJlbEhUTUwpIHsgXG4gICAgICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGxhYmVsTmFtZSlcbiAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxIVE1MLnRvVXBwZXJDYXNlKClcbiAgICAgICAgICAgIHJldHVybiBsYWJlbFxuICAgICAgICB9XG4gICAgICAgIHRoaXMubGFiZWxOYW1lID0gdGhpcy5jcmVhdGVGb3JtTGFiZWwoJ25hbWUnLCAnUmVjaXBlIE5hbWUnKVxuICAgICAgICB0aGlzLnJlY2lwZUZvcm0uYXBwZW5kQ2hpbGQodGhpcy5sYWJlbE5hbWUpXG5cbiAgICAgICAgdGhpcy5jcmVhdGVOYW1lSW5wdXQgPSAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgX25hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgIF9uYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgICAgICAgICAgX25hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2lucHV0TmFtZScpXG4gICAgICAgICAgICBfbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICduYW1lJylcbiAgICAgICAgICAgIF9uYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdtYXhMZW5ndGgnLCAnMzInKVxuICAgICAgICAgICAgX25hbWVJbnB1dC5yZXF1aXJlZCA9IHRydWVcbiAgICAgICAgICAgIHJldHVybiBfbmFtZUlucHV0XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5hbWVJbnB1dCA9IHRoaXMuY3JlYXRlTmFtZUlucHV0KClcbiAgICAgICAgdGhpcy5yZWNpcGVGb3JtLmFwcGVuZENoaWxkKHRoaXMubmFtZUlucHV0KVxuXG5cbiAgICAgICAgdGhpcy5sYWJlbEluZ3IgPSB0aGlzLmNyZWF0ZUZvcm1MYWJlbCgnaW5ncmVkaWVudHMnLCAnSW5ncmVkaWVudHMnKVxuICAgICAgICB0aGlzLnJlY2lwZUZvcm0uYXBwZW5kQ2hpbGQodGhpcy5sYWJlbEluZ3IpXG5cbiAgICAgICAgdGhpcy5jcmVhdGVJbmdySW5wdXQgPSAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgX2luZ3JJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgIF9pbmdySW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpXG4gICAgICAgICAgICBfaW5ncklucHV0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaW5wdXRJbmdyZWRpZW50JylcbiAgICAgICAgICAgIF9pbmdySW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2luZ3JlZGllbnRzJylcbiAgICAgICAgICAgIF9pbmdySW5wdXQuc2V0QXR0cmlidXRlKCdtYXhWYWx1ZScsICc5OScpXG4gICAgICAgICAgICBfaW5ncklucHV0LnNldEF0dHJpYnV0ZSgnbWluVmFsdWUnLCAnMScpXG4gICAgICAgICAgICBfaW5ncklucHV0LnJlcXVpcmVkID0gdHJ1ZVxuICAgICAgICAgICAgcmV0dXJuIF9pbmdySW5wdXRcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5ncklucHV0ID0gdGhpcy5jcmVhdGVJbmdySW5wdXQoKVxuICAgICAgICB0aGlzLnJlY2lwZUZvcm0uYXBwZW5kQ2hpbGQodGhpcy5pbmdySW5wdXQpXG5cblxuICAgICAgICB0aGlzLnN0ZXBzTGFiZWwgPSB0aGlzLmNyZWF0ZUZvcm1MYWJlbCgnc3RlcHMnLCAnU3RlcHMnKVxuICAgICAgICB0aGlzLnJlY2lwZUZvcm0uYXBwZW5kQ2hpbGQodGhpcy5zdGVwc0xhYmVsKVxuICAgICAgICBcbiAgICAgICAgdGhpcy5jcmVhdGVTdGVwc0lucHV0ID0gKCkgPT4ge1xuICAgICAgICAgICAgbGV0IF9pbnB1dFN0ZXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgICAgICAgICBfaW5wdXRTdGVwLnNldEF0dHJpYnV0ZSgnbmFtZScsICdzdGVwcycpXG4gICAgICAgICAgICBfaW5wdXRTdGVwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc3RlcHMnKVxuICAgICAgICAgICAgX2lucHV0U3RlcC5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCAnMzAnKVxuICAgICAgICAgICAgX2lucHV0U3RlcC5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnMTAnKVxuICAgICAgICAgICAgX2lucHV0U3RlcC5yZXF1aXJlZCA9IHRydWVcbiAgICAgICAgICAgIHJldHVybiBfaW5wdXRTdGVwXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlucHV0U3RlcCA9IHRoaXMuY3JlYXRlU3RlcHNJbnB1dCgpXG4gICAgICAgIHRoaXMucmVjaXBlRm9ybS5hcHBlbmRDaGlsZCh0aGlzLmlucHV0U3RlcClcblxuXG4gICAgICAgIHRoaXMuY3JlYXRlU3VibWl0QnRuID0gKCkgPT4ge1xuICAgICAgICAgICAgbGV0IF9zdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgX3N1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTdWJtaXQnXG4gICAgICAgICAgICBfc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKVxuICAgICAgICAgICAgcmV0dXJuIF9zdWJtaXRCdXR0b25cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uID0gdGhpcy5jcmVhdGVTdWJtaXRCdG4oKVxuICAgICAgICB0aGlzLnJlY2lwZUZvcm0uYXBwZW5kQ2hpbGQodGhpcy5zdWJtaXRCdXR0b24pXG5cbiAgICAgICAgLy9zdWJtaXQgYnV0dG9uXG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yZWNpcGVGb3JtKVxuICAgIC8vZW5kIGZ1bmN0aW9uXG4gICAgfSxcblxuXG4gICAgY3JlYXRlVG9nZ2xlQnV0dG9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vaGlkZS9zaG93IHJlY2lwZSBmb3JtIG9uIGJ1dHRvbiBjbGlja1xuICAgICAgICAgICAgdGhpcy5mb3JtVG9nZ2xlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICB0aGlzLmZvcm1Ub2dnbGVCdXR0b24udGV4dENvbnRlbnQgPSAnKydcbiAgICAgICAgICAgIHRoaXMuZm9ybVRvZ2dsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY2lwZUZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZS1ibG9jaycpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIucHJlcGVuZCh0aGlzLmZvcm1Ub2dnbGVCdXR0b24pXG4gICAgfSxcblxuICAgIC8vIHVzZUZvcm1TdWJtaXROb3c6IGZ1bmN0aW9uIChldmVudCkge1xuICAgIC8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcy5yZWNpcGVGb3JtKVxuICAgIC8vICAgICByZXR1cm4gZm9ybURhdGE7XG4gICAgLy8gfSxcblxuICAgIC8vIGF0dGFjaEZvcm1TdWJtaXRMaXN0ZW5lcjogZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICB0aGlzLnJlY2lwZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy51c2VGb3JtU3VibWl0Tm93KVxuICAgIC8vIH0sXG5cbiAgXG4gICAgXG4gICAgXG4gICAgXG4gICAgXG4gICAvL2VuZCBmb3JtIG9iaiBcbn0iLCJpbXBvcnQgeyBIVE1MU2tlbGV0b24gfSBmcm9tICcuLi91dGlscy9jcmVhdGVIVE1MU2tlbCdcblxuZXhwb3J0IGNvbnN0IHJlY2lwZUhUTUwgPSB7XG5cblxuXG4gICAgc2VjdGlvblJlY2lwZXM6IEhUTUxTa2VsZXRvbi5yZWNpcGVzLFxuXG4gICAgcmVjaXBlSURDb3VudGVyOiAwLFxuXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uIChyZWNpcGVMaWIpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVVTFBhcmVudCgpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVjaXBlTGliLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnJlY2lwZUxpc3RIVE1MLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlT2JqdG9MaXN0KHJlY2lwZUxpYltpXSkpXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gY3JlYXRlSW5zZXRNdWx0aVBhZ2VMaXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgIC8vc29ydCBhbmQgc2VhcmNoXG4gICAgXG4gICAgLy8gICAgIC8vMTAgaXRlbXMgYXQgYSB0aW1lXG4gICAgLy8gICAgIGZ1bmN0aW9uIGNyZWF0ZTEwUmVjaXBlTGlzdCgpIHtcbiAgICAgICAgICAgIFxuICAgIC8vICAgICB9XG4gICAgXG4gICAgXG4gICAgLy8gICAgIC8vY2hhbmdlIHBhZ2VcbiAgICAvLyB9LFxuXG5cbiAgICBjcmVhdGVVTFBhcmVudDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJlY2lwZUxpc3RIVE1MID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgICAgICB0aGlzLnNlY3Rpb25SZWNpcGVzLmFwcGVuZENoaWxkKHRoaXMucmVjaXBlTGlzdEhUTUwpXG4gICAgICAgIHJldHVybiB0aGlzLnJlY2lwZUxpc3RIVE1MXG4gICAgfSxcblxuICAgIGNyZWF0ZU9ianRvTGlzdDogZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgY29udGFpbmVyLmlkID0gYHJlY2lwZS0ke3RoaXMucmVjaXBlSURDb3VudGVyfWAgXG5cbiAgICAgICAgbGV0IF9kZWxldGVidXR0b24gPSB0aGlzLmNyZWF0ZURlbGV0ZUJ1dHRvbih0aGlzLnJlY2lwZUlEQ291bnRlciwgY29udGFpbmVyKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKF9kZWxldGVidXR0b24pXG5cbiAgICAgICAgbGV0IG9iak5hbWUgPSB0aGlzLmNyZWF0ZU5hbWVEaXYoaXRlbSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvYmpOYW1lKVxuXG4gICAgICAgIC8vIHRoaXMuYnRuID0gY3JlYXRlQWRkR3JvY2VyeUJ0bihzZWN0aW9uQ2xhc3MpO1xuICAgICAgICAvLyBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuKVxuXG4gICAgLy9jcmVhdGUgdWwgZm9yIGluZ3JlZGllbnRzXG4gICAgICAgIGxldCBvYmpJbmdyID0gdGhpcy5jcmVhdGVFbnVtSW5ncmVkaWVudExpc3QoaXRlbSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvYmpJbmdyKVxuXG4gICAgICAgIGxldCBvYmpTdGVwcyA9IHRoaXMuY3JlYXRlRW51bVN0ZXBzTGlzdChpdGVtKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG9ialN0ZXBzKVxuXG4gICAgICAgIHJldHVybiBjb250YWluZXJcbiAgICB9LFxuXG5cblxuICAgICAgICBjcmVhdGVOYW1lRGl2OiBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgbGV0IG9iak5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG9iak5hbWUuY2xhc3NMaXN0ID0gJ29iai1uYW1lJztcbiAgICAgICAgICAgIG9iak5hbWUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG4gICAgICAgICAgICByZXR1cm4gb2JqTmFtZTtcbiAgICAgICAgfSxcblxuXG4gICAgICAgIGNyZWF0ZUVudW1TdGVwc0xpc3Q6IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBsZXQgb2JqU3RlcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvbCcpO1xuICAgICAgICAgICAgb2JqU3RlcHMuY2xhc3NMaXN0ID0gJ29iai1zdGVwcyc7XG4gICAgICAgICAgICBsZXQgc3RlcHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAgICAgICBzdGVwc1RpdGxlLnRleHRDb250ZW50ID0gJ1N0ZXBzJztcbiAgICAgICAgICAgIG9ialN0ZXBzLmFwcGVuZENoaWxkKHN0ZXBzVGl0bGUpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtLnN0ZXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IF9zdGVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgICAgICBfc3RlcC5jbGFzc0xpc3QgPSAnc3RlcCc7XG4gICAgICAgICAgICAgICAgX3N0ZXAudGV4dENvbnRlbnQgPSBpdGVtLnN0ZXBzW2ldO1xuICAgICAgICAgICAgICAgIG9ialN0ZXBzLmFwcGVuZENoaWxkKF9zdGVwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvYmpTdGVwcztcbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVFbnVtSW5ncmVkaWVudExpc3Q6IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBsZXQgb2JqSW5nciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgICBvYmpJbmdyLmNsYXNzTGlzdCA9ICdvYmotaW5ncic7XG4gICAgICAgICAgICBvYmpJbmdyLm5hbWUgPSAnaW5ncmVkaWVudHMnO1xuICAgICAgICAgICAgbGV0IGluZ3JUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAgICAgICBpbmdyVGl0bGUudGV4dENvbnRlbnQgPSAnSW5ncmVkaWVudHMnO1xuICAgICAgICAgICAgb2JqSW5nci5hcHBlbmRDaGlsZChpbmdyVGl0bGUpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtLmluZ3JlZGllbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IF9pbmdyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgICAgICAgICAgICAgIGxldCBfbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICBfbmFtZS50ZXh0Q29udGVudCA9IGl0ZW0uaW5ncmVkaWVudHNbaV0uaW5ncmVkaWVudDtcblxuICAgICAgICAgICAgICAgIGxldCBfYW1udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICBfYW1udC50ZXh0Q29udGVudCA9IGl0ZW0uaW5ncmVkaWVudHNbaV0uYW1vdW50O1xuXG4gICAgICAgICAgICAgICAgbGV0IF9tZWFzdXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIF9tZWFzdXJlLnRleHRDb250ZW50ID0gaXRlbS5pbmdyZWRpZW50c1tpXS5tZWFzdXJlbWVudDtcblxuICAgICAgICAgICAgICAgIF9pbmdyLmFwcGVuZENoaWxkKF9hbW50KTtcbiAgICAgICAgICAgICAgICBfaW5nci5hcHBlbmRDaGlsZChfbWVhc3VyZSk7XG4gICAgICAgICAgICAgICAgX2luZ3IuYXBwZW5kQ2hpbGQoX25hbWUpO1xuICAgICAgICAgICAgICAgIG9iakluZ3IuYXBwZW5kQ2hpbGQoX2luZ3IpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb2JqSW5ncjtcbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVEZWxldGVCdXR0b246IGZ1bmN0aW9uIChyZWNpcGVJRENvdW50ZXIsIHBhcmVudCkge1xuICAgICAgICAgICAgbGV0IF9kZWxldGVidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIF9kZWxldGVidXR0b24udGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgICAgICBfZGVsZXRlYnV0dG9uLmlkID0gcmVjaXBlSURDb3VudGVyO1xuICAgICAgICAgICAgcmVjaXBlSURDb3VudGVyKys7XG4gICAgICAgICAgICBfZGVsZXRlYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBlbGVtTmFtZUlEID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZWNpcGUtXCIgKyBfZGVsZXRlYnV0dG9uLmlkICsgJyA+IC5vYmotbmFtZScpO1xuICAgICAgICAgICAgICAgIGVsZW1OYW1lSUQgPSBlbGVtTmFtZUlELnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIGxldCBlbGVtSW5kZXggPSByZWNpcGVMaWJyYXJ5LnJlY2lwZUxpYnJhcnkuZmluZEluZGV4KChlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbC5uYW1lID09IGVsZW1OYW1lSUQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmVjaXBlTGlicmFyeS5yZWNpcGVMaWJyYXJ5LnNwbGljZShlbGVtSW5kZXgpO1xuICAgICAgICAgICAgICAgIF9kZWxldGVidXR0b24ucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBzYXZlTG9hZExvY2FsU3RvcmFnZS5zYXZlVG8ocmVjaXBlTGlicmFyeS5yZWNpcGVMaWJyYXJ5LCAnSlNPTnJlY2lwZUxpYnJhcnknKVxuXG4gICAgICAgICAgICAgICAgLy8gcmVjaXBlTGlicmFyeS5zcGxpY2UodGhpcy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50KVxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSh0aGlzLnBhcmVudEVsZW1lbnQpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBfZGVsZXRlYnV0dG9uO1xuICAgICAgICB9XG59XG4iLCIvLyBpbXBvcnQgeyBIVE1MU2tlbGV0b24gfSBmcm9tICcuLi91dGlscy9jcmVhdGVIVE1MU2tlbCc7XG5pbXBvcnQgUmVjaXBlIGZyb20gJy4uL3V0aWxzL3JlY2lwZUNsYXNzJztcbmltcG9ydCAnLi4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyBzYXZlTG9hZExvY2FsU3RvcmFnZSB9IGZyb20gJy4uL3V0aWxzL3NhdmVMb2FkTG9jU3RvcmFnZSc7XG5pbXBvcnQgeyByZWNpcGVIVE1MIH0gZnJvbSAnLi9yZWNpcGVIVE1MJztcbmltcG9ydCB7IHJlY2lwZUZvcm0gfSBmcm9tICcuL3JlY2lwZUZvcm0nO1xuXG5cbmZ1bmN0aW9uIGZvcm1IYW5kbGVyIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGZvcm1EYXRhID0gZS5mb3JtRGF0YVxuICAgIGxldCBfbmFtZSA9IGZvcm1EYXRhLmdldCgnbmFtZScpO1xuICAgIGxldCBfaW5ncmVkaWVudHMgPSBmb3JtRGF0YS5nZXQoJ2luZ3JlZGllbnRzJykgXG4gICAgbGV0IF9zdGVwcyA9IGZvcm1EYXRhLmdldCgnc3RlcHMnKVxuXG4gICAgX2luZ3JlZGllbnRzID0gX2luZ3JlZGllbnRzLnRyaW0oKS5zcGxpdCgnOycpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX2luZ3JlZGllbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfaW5ncmVkaWVudHNbaV0gPSBfaW5ncmVkaWVudHNbaV0udHJpbSgpLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8ICBfaW5ncmVkaWVudHNbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBfaW5ncmVkaWVudHNbaV1bal0gPSBfaW5ncmVkaWVudHNbaV1bal0udHJpbSgpO1xuICAgICAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgX2luZ3JPYmpMaXN0ID0gW11cblxuICAgIGZvciAobGV0IGk9MDtpPF9pbmdyZWRpZW50cy5sZW5ndGg7aSsrKSB7XG4gICAgICAgIGxldCBfaW5nck9iaiA9IHsgaW5ncmVkaWVudDp1bmRlZmluZWQsIGFtb3VudDp1bmRlZmluZWQsIG1lYXN1cmVtZW50OnVuZGVmaW5lZH1cblxuICAgICAgICBfaW5nck9iai5pbmdyZWRpZW50ID0gX2luZ3JlZGllbnRzW2ldWzBdXG4gICAgICAgIF9pbmdyT2JqLmFtb3VudCA9IF9pbmdyZWRpZW50c1tpXVsxXVxuICAgICAgICBfaW5nck9iai5tZWFzdXJlbWVudCA9IF9pbmdyZWRpZW50c1tpXVsyXVxuICAgICAgICBfaW5nck9iakxpc3QucHVzaChfaW5nck9iailcbiAgICB9XG5cbiAgICBfc3RlcHMgPSBfc3RlcHMudHJpbSgpLnNwbGl0KCc7Jyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfc3RlcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgX3N0ZXBzW2ldID0gX3N0ZXBzW2ldLnRyaW0oKVxuICAgIH1cbiAgICBjb25zdCBuZXdSZWNpcGUgPSBuZXcgUmVjaXBlKF9uYW1lLCBfaW5nck9iakxpc3QsIF9zdGVwcyk7XG5cblxuICAgIC8vd2F5IHRvIGV4dHJhY3QgdGhpcz8gbmVjZXNzYXJ5IGJlZm9yZSBtb2R1bGFyaXppbmdcbiAgICByZWNpcGVMaWJyYXJ5LnJlY2lwZUxpYnJhcnkucHVzaChuZXdSZWNpcGUpXG4gICAgc2F2ZUxvYWRMb2NhbFN0b3JhZ2Uuc2F2ZVRvKHJlY2lwZUxpYnJhcnkucmVjaXBlTGlicmFyeSwgJ0pTT05yZWNpcGVMaWJyYXJ5JylcbiAgICByZWNpcGVIVE1MLnJlbmRlcihyZWNpcGVMaWJyYXJ5LnJlY2lwZUxpYnJhcnkpXG5cblxufVxuXG5cbmV4cG9ydCBjb25zdCByZWNpcGVMaWJyYXJ5ID0ge1xuXG4gICAgcmVjaXBlTGlicmFyeTogbmV3IEFycmF5LFxuICAgICAgICAvL2ltcG9ydCByZWNpcGVGb3JtXG4gICAgICAgIC8vaW1wb3J0IHJlY2lwZUhUTUxcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yZWNpcGVMaWJyYXJ5KVxuICAgICAgICB0aGlzLnJlY2lwZUxpYnJhcnkgPSBzYXZlTG9hZExvY2FsU3RvcmFnZS5sb2FkKCdKU09OcmVjaXBlTGlicmFyeScpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlY2lwZUxpYnJhcnkpXG4gICAgICAgIGlmICh0aGlzLnJlY2lwZUxpYnJhcnkgPT09IHVuZGVmaW5lZCkgdGhpcy5yZWNpcGVMaWJyYXJ5ID0gdGhpcy5kZWZhdWx0TGlicmFyeVxuICAgICAgICAvLyByZWNpcGVGb3JtID0gcmVjaXBlRm9ybVxuICAgICAgICB0aGlzLnJlbmRlcigpIC8vY3JlYXRlIFJlY2lwZXMgTGlzdCBIVE1MXG4gICAgICAgIC8vIHJlY2lwZUhUTUwgPSByZWNpcGVIVE1MXG4gICAgICAgIHJlY2lwZUZvcm0ucmVjaXBlRm9ybS5hZGRFdmVudExpc3RlbmVyKCdmb3JtZGF0YScsIGZvcm1IYW5kbGVyKSAvL2FkZCByZXNwb25zZSB0byBsaWJyYXJ5IGFuZCB1cGRhdGVIVE1MIG9uIHN1Ym1pdFxuXG4gICAgfSxcblxuICAgIGZpbmRCeU5hbWU6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJlY2lwZUxpYnJhcnkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlY2lwZUxpYnJhcnlbaV0ubmFtZSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVjaXBlTGlicmFyeVtpXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuXG5cblxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlY2lwZUZvcm0uaW5pdCgpIC8vY3JlYXRlIFJlY2lwZUZvcm0gSFRNTCAmIEFkZCB0byBEb2NcbiAgICAgICAgcmVjaXBlSFRNTC5yZW5kZXIodGhpcy5yZWNpcGVMaWJyYXJ5KVxuICAgIH0sXG5cblxuICAgIGRlZmF1bHRMaWJyYXJ5OiBbe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNjcmFtYmxlZCBlZ2dzXCIsXG4gICAgICAgICAgICAgICAgICAgIGluZ3JlZGllbnRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5ncmVkaWVudDogXCJlZ2dzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlbWVudDogXCJ3aG9sZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZ3JlZGllbnQ6IFwicGVwcGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlbWVudDogXCJ0c3BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmdyZWRpZW50OiBcInNhbHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lYXN1cmVtZW50OiBcInRzcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZ3JlZGllbnQ6IFwib2lsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlbWVudDogXCJ0YnNwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc3RlcHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29va1wiXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJvbWVsbGV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBpbmdyZWRpZW50czogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZ3JlZGllbnQ6IFwiZWdnc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogXCI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVhc3VyZW1lbnQ6IFwid2hvbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmdyZWRpZW50OiBcInBlcHBlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVhc3VyZW1lbnQ6IFwidHNwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5ncmVkaWVudDogXCJzYWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBcIjNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlbWVudDogXCJ0c3BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmdyZWRpZW50OiBcImJhY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBcIjRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlbWVudDogXCJzdHJpcHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGVwczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb29rXCJcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1dXG5cblxuXG59XG5cbiBcblxuXG5cblxuXG4gICAgIFxuXG4iLCJcbmV4cG9ydCBjb25zdCBIVE1MU2tlbGV0b24gPSB7XG5cbiAgICBkb2Nib2R5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JyksXG5cblxuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnJlbmRlcigpXG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUhlYWRlcigpO1xuICAgICAgICB0aGlzLmNyZWF0ZVNlY3Rpb25zKClcbiAgICB9LFxuXG4gICAgY3JlYXRlSGVhZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxuICAgICAgICB0aGlzLmNyZWF0ZU5hdigpXG5cbiAgICB9LFxuXG4gICAgbmF2OiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKSxcbiAgICB1bE5hdiA6ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKSxcblxuICAgIGNyZWF0ZU5hdjogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdGhpcy5uYXYuYXBwZW5kQ2hpbGQodGhpcy51bE5hdilcblxuICAgICAgICB0aGlzLnVsTmF2LmFwcGVuZENoaWxkKHRoaXMuaG9tZU5hdkxpbmsoKSlcbiAgICAgICAgdGhpcy51bE5hdi5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZU5hdkxpbmsoJ1JlY2lwZXMnLCAnJykpXG4gICAgICAgIC8vIHRoaXMudWxOYXYuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVTZWFyY2hCYXIoKSlcbiAgICB9LFxuXG4gICAgaG9tZU5hdkxpbms6IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgbGluay5ocmVmID0gJydcbiAgICAgICAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgICBsb2dvLnNyYyA9ICcnXG4gICAgICAgIGxvZ28uYWx0ID0gJydcblxuICAgICAgICBsaW5rLmFwcGVuZENoaWxkKGxvZ28pXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGxpbmspXG5cbiAgICAgICAgcmV0dXJuIGxpXG4gICAgfSxcblxuICAgIGNyZWF0ZU5hdkxpbms6IGZ1bmN0aW9uKHRpdGxlLCB1cmwpIHtcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgICAgICBsaW5rLmhyZWYgPSB1cmxcbiAgICAgICAgbGluay50ZXh0Q29udGVudCA9IHRpdGxlXG5cbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQobGluaylcblxuICAgICAgICByZXR1cm4gbGlcbiAgICB9LFxuXG4gICAgY3JlYXRlU2VhcmNoQmFyKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnd2lwJylcbiAgICB9LFxuXG4gICAgc2VsZWN0ZWRSZWNpcGVzOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyksXG4gICAgYWRkUmVjaXBlOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyksXG4gICAgcmVjaXBlczogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpLFxuICAgIGdyb2NlcnlMaXN0OiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyksXG5cbiAgICBcbiAgICBjcmVhdGVTZWN0aW9uczogZnVuY3Rpb24oKSB7XG4gICAgICAgIFxuXG5cbiAgICAgICAgdGhpcy5kb2Nib2R5LmFwcGVuZENoaWxkKHRoaXMuc2VsZWN0ZWRSZWNpcGVzKVxuICAgICAgICB0aGlzLmRvY2JvZHkuYXBwZW5kQ2hpbGQodGhpcy5hZGRSZWNpcGUpXG4gICAgICAgIHRoaXMuZG9jYm9keS5hcHBlbmRDaGlsZCh0aGlzLnJlY2lwZXMpXG4gICAgICAgIHRoaXMuZG9jYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdyb2NlcnlMaXN0KVxuICAgIFxuICAgIH0sXG5cbiAgICAvLyBjcmVhdGVTZWM6IGZ1bmN0aW9uKGlkKSB7XG4gICAgLy8gICAgIGxldCBzZWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcbiAgICAvLyAgICAgc2VjLmlkID0gaWRcbiAgICAvLyAgICAgcmV0dXJuIHNlY1xuICAgIC8vIH0sXG59IiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWNpcGUge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGluZ3JlZGllbnRzLCBzdGVwcykge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAvL2luZ3JlZGllbnRzIGlzIGEgZG91YmxlIGFycmF5LFtbaXRlbSwgYW1vdW50LCBtZWFzdXJlbWVudF1dXG4gICAgICAgIHRoaXMuaW5ncmVkaWVudHMgPSBpbmdyZWRpZW50cztcbiAgICAgICAgdGhpcy5zdGVwcyA9IHN0ZXBzO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjb25zdCBzYXZlTG9hZExvY2FsU3RvcmFnZSA9IHtcbiAgICBcbiAgICBsb2FkOiBmdW5jdGlvbiAoYWRkcmVzcykge1xuICAgICAgICBsZXQgdGVtcCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGFkZHJlc3MpXG4gICAgICAgIGNvbnNvbGUubG9nKHRlbXApXG4gICAgICAgIGNvbnNvbGUubG9nKGFkZHJlc3MpXG4gICAgICAgIGlmICh0ZW1wID09PSBudWxsKSByZXR1cm47XG4gICAgICAgIGxldCBlbCA9IEpTT04ucGFyc2UodGVtcClcbiAgICAgICAgcmV0dXJuIGVsXG4gICAgICAgIFxuICAgIH0sXG5cbiAgICBzYXZlVG86IGZ1bmN0aW9uIChlbCwgYWRkcmVzcykge1xuICAgICAgICBsZXQgdGVtcCA9IEpTT04uc3RyaW5naWZ5KGVsKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShhZGRyZXNzLCB0ZW1wKVxuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=