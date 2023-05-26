"use strict";
(self["webpackChunkrecipes_n_groceries"] = self["webpackChunkrecipes_n_groceries"] || []).push([["createHTMLSkeleton"],{

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

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/utils/createHTMLSkel.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlSFRNTFNrZWxldG9uLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNPOztBQUVQOzs7QUFHQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVjaXBlcy1uLWdyb2Nlcmllcy8uL3NyYy91dGlscy9jcmVhdGVIVE1MU2tlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjb25zdCBIVE1MU2tlbGV0b24gPSB7XG5cbiAgICBkb2Nib2R5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JyksXG5cblxuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnJlbmRlcigpXG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUhlYWRlcigpO1xuICAgICAgICB0aGlzLmNyZWF0ZVNlY3Rpb25zKClcbiAgICB9LFxuXG4gICAgY3JlYXRlSGVhZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxuICAgICAgICB0aGlzLmNyZWF0ZU5hdigpXG5cbiAgICB9LFxuXG4gICAgbmF2OiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKSxcbiAgICB1bE5hdiA6ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKSxcblxuICAgIGNyZWF0ZU5hdjogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdGhpcy5uYXYuYXBwZW5kQ2hpbGQodGhpcy51bE5hdilcblxuICAgICAgICB0aGlzLnVsTmF2LmFwcGVuZENoaWxkKHRoaXMuaG9tZU5hdkxpbmsoKSlcbiAgICAgICAgdGhpcy51bE5hdi5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZU5hdkxpbmsoJ1JlY2lwZXMnLCAnJykpXG4gICAgICAgIC8vIHRoaXMudWxOYXYuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVTZWFyY2hCYXIoKSlcbiAgICB9LFxuXG4gICAgaG9tZU5hdkxpbms6IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgbGluay5ocmVmID0gJydcbiAgICAgICAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgICBsb2dvLnNyYyA9ICcnXG4gICAgICAgIGxvZ28uYWx0ID0gJydcblxuICAgICAgICBsaW5rLmFwcGVuZENoaWxkKGxvZ28pXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGxpbmspXG5cbiAgICAgICAgcmV0dXJuIGxpXG4gICAgfSxcblxuICAgIGNyZWF0ZU5hdkxpbms6IGZ1bmN0aW9uKHRpdGxlLCB1cmwpIHtcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgICAgICBsaW5rLmhyZWYgPSB1cmxcbiAgICAgICAgbGluay50ZXh0Q29udGVudCA9IHRpdGxlXG5cbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQobGluaylcblxuICAgICAgICByZXR1cm4gbGlcbiAgICB9LFxuXG4gICAgY3JlYXRlU2VhcmNoQmFyKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnd2lwJylcbiAgICB9LFxuXG4gICAgc2VsZWN0ZWRSZWNpcGVzOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyksXG4gICAgYWRkUmVjaXBlOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyksXG4gICAgcmVjaXBlczogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpLFxuICAgIGdyb2NlcnlMaXN0OiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyksXG5cbiAgICBcbiAgICBjcmVhdGVTZWN0aW9uczogZnVuY3Rpb24oKSB7XG4gICAgICAgIFxuXG5cbiAgICAgICAgdGhpcy5kb2Nib2R5LmFwcGVuZENoaWxkKHRoaXMuc2VsZWN0ZWRSZWNpcGVzKVxuICAgICAgICB0aGlzLmRvY2JvZHkuYXBwZW5kQ2hpbGQodGhpcy5hZGRSZWNpcGUpXG4gICAgICAgIHRoaXMuZG9jYm9keS5hcHBlbmRDaGlsZCh0aGlzLnJlY2lwZXMpXG4gICAgICAgIHRoaXMuZG9jYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdyb2NlcnlMaXN0KVxuICAgIFxuICAgIH0sXG5cbiAgICAvLyBjcmVhdGVTZWM6IGZ1bmN0aW9uKGlkKSB7XG4gICAgLy8gICAgIGxldCBzZWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcbiAgICAvLyAgICAgc2VjLmlkID0gaWRcbiAgICAvLyAgICAgcmV0dXJuIHNlY1xuICAgIC8vIH0sXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9