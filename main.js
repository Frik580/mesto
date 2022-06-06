(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const r=t((function e(t){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n(this,"_handleResponse",(function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status," ").concat(e.statusText))})),n(this,"getInitialCards",(function(){return fetch("".concat(r._url,"/cards"),{headers:r._headers}).then(r._handleResponse)})),n(this,"getUserInfo",(function(){return fetch("".concat(r._url,"/users/me"),{headers:r._headers}).then(r._handleResponse)})),n(this,"editUserInfo",(function(e){return fetch("".concat(r._url,"/users/me"),{method:"PATCH",headers:r._headers,body:JSON.stringify(e)}).then(r._handleResponse)})),n(this,"postCard",(function(e){return fetch("".concat(r._url,"/cards"),{method:"POST",headers:r._headers,body:JSON.stringify(e)}).then(r._handleResponse)})),n(this,"deleteCard",(function(e){return fetch("".concat(r._url,"/cards/").concat(e),{method:"DELETE",headers:r._headers}).then(r._handleResponse)})),n(this,"addLike",(function(e){return fetch("".concat(r._url,"/cards/").concat(e._id,"/likes"),{method:"PUT",headers:r._headers,body:JSON.stringify(e)}).then(r._handleResponse)})),n(this,"deleteLike",(function(e){return fetch("".concat(r._url,"/cards/").concat(e._id,"/likes"),{method:"DELETE",headers:r._headers,body:JSON.stringify(e)}).then(r._handleResponse)})),n(this,"editAvatar",(function(e){return fetch("".concat(r._url,"/users/me/avatar"),{method:"PATCH",headers:r._headers,body:JSON.stringify(e)}).then(r._handleResponse)})),this._url=t.baseUrl,this._headers=t.headers}));function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=i((function e(t,n){var r=this,o=t.data,i=t.userID,a=t.handleCardClick,u=t.handleDeleteClick,l=t.handleAddLike,s=t.handleDeleteLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,"_createCard",(function(){r._card=r._template.querySelector(".element").cloneNode(!0),r._image=r._card.querySelector(".element__pic"),r._delButton=r._card.querySelector(".element__del-button"),r._like=r._card.querySelector(".element__like-button"),r._card.querySelector(".element__title").textContent=r._data.name,r._card.querySelector(".element__like-value").textContent=r._likesArray.length,r._image.alt=r._data.name,r._image.src=r._data.link,r._setEventListeners(),r._data.owner._id!==r._userID&&(r._delButton.remove(),r._delButton=null)})),c(this,"_setEventListeners",(function(){r._likesArray.map((function(e){e._id===r._userID&&r._like.classList.add("element__like-button_active")})),r._delButton.addEventListener("click",(function(){r._handleDeleteClick(r._card,r._data._id)})),r._like.addEventListener("click",(function(e){e.target.classList.contains("element__like-button_active")?r._handleDeleteLike(r._data):r._handleAddLike(r._data)})),r._image.addEventListener("click",r._handleCardClick)})),c(this,"deleteLike",(function(e){r._like.classList.remove("element__like-button_active"),r._likesArray=e.likes,r._card.querySelector(".element__like-value").textContent=r._likesArray.length})),c(this,"addLike",(function(e){r._like.classList.add("element__like-button_active"),r._likesArray=e.likes,r._card.querySelector(".element__like-value").textContent=r._likesArray.length})),c(this,"getCard",(function(){return r._createCard(),r._card})),this._data=o,this._userID=i,this._handleCardClick=a,this._handleDeleteClick=u,this._handleAddLike=l,this._handleDeleteLike=s,this._likesArray=this._data.likes,this._template=document.querySelector(n).content}));const u=a;function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const p=s((function e(t,n){var r=this,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),f(this,"renderItems",(function(e){e.forEach((function(e){var t=r._renderer(e);r._container.append(t)}))})),f(this,"addItem",(function(e){var t=r._renderer(e);r._container.prepend(t)})),this._container=document.querySelector(n),this._renderer=o}));function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),this._selector=t,this._popup=document.querySelector(this._selector),this._buttonClose=this._popup.querySelector(".popup__close-button")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.close()})),this._buttonClose.addEventListener("click",(function(){e.close()}))}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();const h=_;function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function m(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=w(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(i,e);var t,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(n);if(r){var o=E(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return m(this,e)});function i(e){var t,n,r,c=e.selector,a=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),k(v(r=o.call(this,c)),"_getInputValues",(function(){return r._formValues={},r._inputList.forEach((function(e){r._formValues[e.name]=e.value})),r._formValues})),k(v(r),"setInputValues",(function(e){r._inputList.forEach((function(t){t.value=e[t.name]}))})),k(v(r),"close",(function(){g((t=v(r),E(i.prototype)),"close",t).call(t),r._form.reset(),r._renderLoading(!1)})),k(v(r),"_renderLoading",(function(e){r._button.textContent=e?"Сохранение...":r._textButton})),k(v(r),"setEventListeners",(function(){g((n=v(r),E(i.prototype)),"setEventListeners",n).call(n),r._form.addEventListener("submit",(function(e){e.preventDefault(),r._renderLoading(!0),r._handleFormSubmit(r._getInputValues())}))})),r._handleFormSubmit=a,r._form=r._popup.querySelector(".popup-form"),r._inputList=r._form.querySelectorAll(".popup-form__item"),r._button=r._form.querySelector(".popup-form__button"),r._textButton=r._button.textContent,r}return t=i,Object.defineProperty(t,"prototype",{writable:!1}),t}(h);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function j(e,t){return j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},j(e,t)}function L(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return C(e)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=I(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},P.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(i,e);var t,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(n);if(r){var o=R(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return L(this,e)});function i(e){var t,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e.open=n}(C(n=o.call(this,e)),"open",(function(e){P((t=C(n),R(i.prototype)),"open",t).call(t),n._popupImage.src=e.link,n._popupImage.alt=e.name,n._popupText.textContent=e.name})),n._popupImage=n._popup.querySelector(".popup__pic"),n._popupText=n._popup.querySelector(".popup__text"),n}return t=i,Object.defineProperty(t,"prototype",{writable:!1}),t}(h);const q=x;function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function T(e,t){return T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},T(e,t)}function D(e,t){if(t&&("object"===B(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return A(e)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function V(){return V="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=U(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},V.apply(this,arguments)}function U(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=N(e)););return e}function N(e){return N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},N(e)}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const J=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(i,e);var t,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=N(n);if(r){var o=N(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return D(this,e)});function i(e){var t,n,r,c,a=e.selector,u=e.handleSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),F(A(c=o.call(this,a)),"open",(function(e,n){c._element=e,c._id=n,V((t=A(c),N(i.prototype)),"open",t).call(t)})),F(A(c),"close",(function(){V((n=A(c),N(i.prototype)),"close",n).call(n),c._renderLoading(!1)})),F(A(c),"_renderLoading",(function(e){c._button.textContent=e?"Удаление...":c._textButton})),F(A(c),"setEventListeners",(function(){V((r=A(c),N(i.prototype)),"setEventListeners",r).call(r),c._button.addEventListener("click",(function(e){e.preventDefault(),c._renderLoading(!0),c._handleSubmit(c._element,c._id)}))})),c._handleSubmit=u,c._button=c._popup.querySelector(".popup-submit__button"),c._textButton=c._button.textContent,c}return t=i,Object.defineProperty(t,"prototype",{writable:!1}),t}(h);function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function H(e,t,n){return t&&z(e.prototype,t),n&&z(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const G=H((function e(t){var n=this,r=t.selectorName,o=t.selectorInfo,i=t.selectorAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),M(this,"getUserInfo",(function(){return n._data={},n._data.name=n._nameValue.textContent,n._data.about=n._jobValue.textContent,n._data})),M(this,"setUserInfo",(function(e){n._nameValue.textContent=e.name,n._jobValue.textContent=e.about,n._avatarValue.src=e.avatar})),this._selectorName=r,this._selectorInfo=o,this._selectorAvatar=i,this._nameValue=document.querySelector(this._selectorName),this._jobValue=document.querySelector(this._selectorInfo),this._avatarValue=document.querySelector(this._selectorAvatar)}));var K={formSelector:".popup-form",inputSelector:".popup-form__item",submitButtonSelector:".popup-form__button",inactiveButtonClass:"popup-form__button_disabled",inputErrorClass:"popup-form__item_type_error",errorClass:"popup-form__item_error_active"},Q=".popup_zoom",W=document.querySelector(".profile__avatar"),X=document.querySelector(".profile__edit-button"),Y=document.querySelector(".profile__add-button");function Z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $(e,t,n){return t&&Z(e.prototype,t),n&&Z(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var te=$((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),ee(this,"_showInputError",(function(e,t){r._errorElement=r._formElement.querySelector("#".concat(e.id,"-error")),e.classList.add(r._obj.inputErrorClass),r._errorElement.textContent=t,r._errorElement.classList.add(r._obj.errorClass)})),ee(this,"_hideInputError",(function(e){r._errorElement=r._formElement.querySelector("#".concat(e.id,"-error")),e.classList.remove(r._obj.inputErrorClass),r._errorElement.classList.remove(r._obj.errorClass),r._errorElement.textContent=""})),ee(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),ee(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),ee(this,"enableButton",(function(){r._buttonElement.disabled=!1,r._buttonElement.classList.remove(r._obj.inactiveButtonClass)})),ee(this,"disableButton",(function(){r._buttonElement.disabled=!0,r._buttonElement.classList.add(r._obj.inactiveButtonClass)})),ee(this,"_toggleButtonState",(function(){r._hasInvalidInput()?r.disableButton():r.enableButton()})),ee(this,"enableValidation",(function(){r._inputList=Array.from(r._formElement.querySelectorAll(r._obj.inputSelector)),r._toggleButtonState(),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e),r._toggleButtonState()}))}))})),ee(this,"resetErrors",(function(){r._inputList.forEach((function(e){return r._hideInputError(e)}))})),this._obj=t,this._formElement=document.querySelector(n),this._buttonElement=this._formElement.querySelector(this._obj.submitButtonSelector)}));const ne=te;var re=new ne(K,".popup-form_edit");re.enableValidation();var oe=new ne(K,".popup-form_add");oe.enableValidation();var ie=new ne(K,".popup-form_avatar");ie.enableValidation();var ce=new r({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-42",headers:{authorization:"342f1300-29ab-4b49-832f-8ffeb3287cd2","Content-Type":"application/json"}}),ae=[ce.getUserInfo(),ce.getInitialCards()];console.log(Q),Promise.all(ae).then((function(e){var t=e[0],n=t._id,r=e[1],o=new p({renderer:function(e){return function(e){var t=new u({data:e,handleCardClick:function(){return i.open(e)},userID:n,handleDeleteClick:function(e,t){c.open(e,t)},handleAddLike:function(e){return r(e)},handleDeleteLike:function(e){return o(e)}},"#element-template"),r=function(e){return ce.addLike(e).then((function(e){t.addLike(e)})).catch((function(e){console.log(e)}))},o=function(e){return ce.deleteLike(e).then((function(e){t.deleteLike(e)})).catch((function(e){console.log(e)}))};return t.getCard()}(e)}},".elements__list");o.renderItems(r);var i=new q(Q);i.setEventListeners();var c=new J({selector:".popup_submit",handleSubmit:function(e,t){return a(e,t)}});c.setEventListeners();var a=function(e,t){return ce.deleteCard(t).then((function(){e.remove(),e=null,c.close()})).catch((function(e){console.log(e)}))},l=new O({selector:".popup_add",handleFormSubmit:function(e){var t={};t.name=e.namecard,t.link=e.link,function(e){ce.postCard(e).then((function(e){o.addItem(e),l.close()})).catch((function(e){console.log(e)}))}(t)}});l.setEventListeners(),Y.addEventListener("click",(function(){oe.resetErrors(),oe.disableButton(),l.open()}));var s=new G({selectorName:".profile__title",selectorInfo:".profile__text",selectorAvatar:".profile__avatar"});s.setUserInfo(t);var f=new O({selector:".popup_edit",handleFormSubmit:function(e){return ce.editUserInfo(e).then((function(e){s.setUserInfo(e),f.close()})).catch((function(e){console.log(e)}))}});f.setEventListeners(),X.addEventListener("click",(function(){f.setInputValues(s.getUserInfo()),re.resetErrors(),re.enableButton(),f.open()}));var d=new O({selector:".popup_avatar",handleFormSubmit:function(e){return ce.editAvatar(e).then((function(e){W.src=e.avatar,d.close()})).catch((function(e){console.log(e)}))}});d.setEventListeners(),W.addEventListener("click",(function(){ie.resetErrors(),ie.disableButton(),d.open()}))})).catch((function(e){console.log(e)}))})();