(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Philosopher&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Quicksand&display=swap\");\n@font-face {\n  font-family: \"Amelya\";\n  src: url(\"/assets/fonts/Amelya.woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: \"Hilland\";\n  src: url(\"/assets/fonts/Hilland.woff\");\n  font-weight: normal;\n  font-style: normal; }\n@keyframes fadeIn {\n  100% {\n    opacity: 1; } }\n@keyframes resetTransform {\n  100% {\n    transform: unset; } }\n@keyframes shakeAnimation {\n  0% {\n    transform: translate(0); }\n  10% {\n    transform: translate(7px); }\n  20% {\n    transform: translate(-14px); }\n  30% {\n    transform: translate(21px); }\n  40% {\n    transform: translate(-28px); }\n  50% {\n    transform: translate(0); }\n  60% {\n    transform: translate(28px); }\n  70% {\n    transform: translate(-21px); }\n  80% {\n    transform: translate(14px); }\n  90% {\n    transform: translate(-7px); }\n  100% {\n    transform: translate(0); } }\n* {\n  margin: 0;\n  padding: 0;\n  color: #ddd;\n  font-family: monospace; }\nul {\n  list-style: none; }\na:focus {\n  outline: none; }\nh1 {\n  font-size: 3em;\n  text-shadow: 1px 1px 5px #528a8a; }\n.centered-flex-container {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n.centered-flex-column-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n.justify-content-center {\n  justify-content: center; }\n.justify-content-between {\n  justify-content: space-between; }\n.justify-content-around {\n  justify-content: space-around; }\n.d-unset {\n  display: unset; }\n.d-none {\n  display: none; }\nhtml, body {\n  height: 100%; }\nbody {\n  background: radial-gradient(#333, #000);\n  overflow-x: hidden;\n  padding-left: 15px;\n  padding-right: 15px;\n  box-sizing: unset; }\nbody::before {\n  z-index: -1;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  content: \"\";\n  background: url(\"/assets/images/background.jpg\");\n  background-size: 100% 100%;\n  background-attachment: fixed;\n  opacity: 0.05; }\napp-root {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin-left: auto;\n  margin-right: auto; }\n.transparent {\n  opacity: 0; }\n.opaque {\n  opacity: 1; }\n.bt-button {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  outline: none;\n  padding: 10px 20px;\n  background-color: transparent;\n  cursor: pointer; }\n@media (min-width: 768px) {\n  app-root {\n    width: 750px; } }\n@media (min-width: 992px) {\n  app-root {\n    width: 970px; } }\n@media (min-width: 1200px) {\n  app-root {\n    width: 1170px; } }\n@media (min-width: 1600px) {\n  app-root {\n    width: 1400px; } }\n@media (min-width: 2000px) {\n  app-root {\n    width: 1700px; } }\napp-project-images {\n  display: flex;\n  flex-grow: 1; }\n.hideable-content-toggler {\n  display: flex;\n  align-items: center;\n  font-size: 1.5em; }\n.hideable-content-toggler * {\n    cursor: pointer; }\n.hideable-content-toggler label {\n    padding-right: 10px;\n    cursor: pointer; }\n.hideable-content-toggler button:hover {\n    background-color: #aaa; }\n.hideable-content-toggler button.toggled .vertical {\n    transform: scale(0.15, 0); }\n.hideable-content-toggler button {\n    width: 22px;\n    height: 22px;\n    background-color: #ddd;\n    position: relative;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 5px;\n    border: 1px solid black;\n    margin: auto;\n    margin-left: 0px;\n    transition: background-color 0.25s 0s ease-in-out;\n    outline: none; }\n.hideable-content-toggler button .vertical, .hideable-content-toggler button .horizontal {\n      background-color: #2F2F2F;\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%; }\n.hideable-content-toggler button .vertical {\n      transform: scale(0.15, 0.65);\n      transition: transform 0.1s 0s ease-in-out; }\n.hideable-content-toggler button .horizontal {\n      transform: scale(0.65, 0.15); }\n.hideable-content {\n  padding: 15px;\n  transform-origin: top;\n  transform: scaleY(0);\n  height: 0;\n  opacity: 0; }\n.hideable-content.visible {\n  transform: scaleY(1);\n  opacity: 1;\n  height: auto; }\n@media (min-width: 992px) {\n  .hideable-content {\n    transition-property: transform, opacity, height;\n    transition: 0.25s ease-in-out; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9HOlxcRG9jdW1lbnRvc1xcUEhQXFxjb2RlXFxwb3J0Zm9saW8tMjAyMlxcYW5ndWxhci1wb3J0Zm9saW8vc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9HOlxcRG9jdW1lbnRvc1xcUEhQXFxjb2RlXFxwb3J0Zm9saW8tMjAyMlxcYW5ndWxhci1wb3J0Zm9saW8vc3JjXFxhcHBcXGdsb2JhbC1zdHlsZXNoZWV0c1xcdmFyaWFibGVzLnNjc3MiLCJzcmMvRzpcXERvY3VtZW50b3NcXFBIUFxcY29kZVxccG9ydGZvbGlvLTIwMjJcXGFuZ3VsYXItcG9ydGZvbGlvL3NyY1xcYXBwXFxnbG9iYWwtc3R5bGVzaGVldHNcXGFuaW1hdGlvbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSw2RUFBWTtBQUNaLCtFQUFZO0FBQ1osNkVBQVk7QUNnQlo7RUFDRSxxQkFBcUI7RUFDckIscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLHNCQUFzQjtFQUN0QixzQ0FBc0M7RUFDdEMsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBO0FDL0JwQjtFQUNJO0lBQ0ksVUFBVSxFQUFBLEVBQUE7QUFJbEI7RUFDSTtJQUNJLGdCQUFnQixFQUFBLEVBQUE7QUFJeEI7RUFJSTtJQUNJLHVCQUF1QixFQUFBO0VBRzNCO0lBQ0kseUJBQXdDLEVBQUE7RUFHNUM7SUFDSSwyQkFBNkMsRUFBQTtFQUdqRDtJQUNJLDBCQUE0QyxFQUFBO0VBR2hEO0lBQ0ksMkJBQTZDLEVBQUE7RUFHakQ7SUFDSSx1QkFBdUIsRUFBQTtFQUczQjtJQUNJLDBCQUE0QyxFQUFBO0VBR2hEO0lBQ0ksMkJBQTZDLEVBQUE7RUFHakQ7SUFDSSwwQkFBNEMsRUFBQTtFQUdoRDtJQUNJLDBCQUE2QyxFQUFBO0VBR2pEO0lBQ0ksdUJBQXVCLEVBQUEsRUFBQTtBRmxEL0I7RUFDSSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFdDVmE7RURXYixzQkFBc0IsRUFBQTtBQU8xQjtFQUNJLGdCQUFnQixFQUFBO0FBR3BCO0VBQ0ksYUFBYSxFQUFBO0FBR2pCO0VBQ0ksY0FBYztFQUNkLGdDQzNCK0IsRUFBQTtBRDhCbkM7RUFDSSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBO0FBR3ZCO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7QUFHdkI7RUFDSSx1QkFBdUIsRUFBQTtBQUczQjtFQUNJLDhCQUE4QixFQUFBO0FBR2xDO0VBQ0ksNkJBQTZCLEVBQUE7QUFHakM7RUFDSSxjQUFjLEVBQUE7QUFHbEI7RUFDSSxhQUFhLEVBQUE7QUFHakI7RUFDSSxZQUFZLEVBQUE7QUFHaEI7RUFDSSx1Q0M1RGlGO0VENkRqRixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQTtBQUdyQjtFQUNJLFdBQVc7RUFDWCxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxTQUFTO0VBQ1QsUUFBUTtFQUNSLFdBQVc7RUFDWCxnREFBZ0Q7RUFDaEQsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1QixhQUFhLEVBQUE7QUFHakI7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0FBR3RCO0VBQ0ksVUFBVSxFQUFBO0FBR2Q7RUFDSSxVQUFVLEVBQUE7QUFHZDtFQUNJLHdCQUFnQjtLQUFoQixxQkFBZ0I7VUFBaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLGVBQWUsRUFBQTtBQUduQjtFQUNJO0lBQ0ksWUFBWSxFQUFBLEVBQ2Y7QUFHTDtFQUNJO0lBQ0ksWUFBWSxFQUFBLEVBQ2Y7QUFHTDtFQUNJO0lBQ0ksYUFBYSxFQUFBLEVBQ2hCO0FBR0w7RUFDSTtJQUNJLGFBQWEsRUFBQSxFQUNoQjtBQUdMO0VBQ0k7SUFDSSxhQUFhLEVBQUEsRUFDaEI7QUFHTDtFQUNJLGFBQWE7RUFDYixZQUFZLEVBQUE7QUFJaEI7RUFFSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBO0FBSnBCO0lBT1EsZUFBZSxFQUFBO0FBUHZCO0lBV1EsbUJBQW1CO0lBQ25CLGVBQWUsRUFBQTtBQVp2QjtJQWdCUSxzQkNuS2MsRUFBQTtBRG1KdEI7SUFxQlkseUJBQXlCLEVBQUE7QUFyQnJDO0lBMEJRLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JDbkxTO0lEb0xULGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaURBQWlEO0lBR2pELGFBQWEsRUFBQTtBQXhDckI7TUE0Q1kseUJDak1ZO01Ea01aLGtCQUFrQjtNQUVsQixNQUFNO01BQ04sT0FBTztNQUNQLFdBQVc7TUFDWCxZQUFZLEVBQUE7QUFsRHhCO01Bc0RZLDRCQUE0QjtNQUM1Qix5Q0FBeUMsRUFBQTtBQXZEckQ7TUEyRFksNEJBQTRCLEVBQUE7QUFLeEM7RUFDSSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixTQUFTO0VBQ1QsVUFBVSxFQUFBO0FBR2Q7RUFDSSxvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLFlBQVksRUFBQTtBQUloQjtFQUNJO0lBQ0ksK0NBQStDO0lBQy9DLDZCQUE2QixFQUFBLEVBQ2hDIiwiZmlsZSI6InNyYy9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vYXBwL2dsb2JhbC1zdHlsZXNoZWV0cy92YXJpYWJsZXMuc2Nzcyc7XHJcbkBpbXBvcnQgJy4vYXBwL2dsb2JhbC1zdHlsZXNoZWV0cy9hbmltYXRpb25zLnNjc3MnO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FucyZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1QaGlsb3NvcGhlciZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1RdWlja3NhbmQmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5cclxuKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgY29sb3I6ICRtYWluLWNvbG9yO1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIC8vIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIC8vIGZvbnQtZmFtaWx5OiAnUGhpbG9zb3BoZXInLCBzYW5zLXNlcmlmO1xyXG4gICAgLy8gZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgLy8gZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbmE6Zm9jdXMgeyBcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggNXB4ICRzZWNvbmRhcnktY29sb3I7XHJcbn1cclxuXHJcbi5jZW50ZXJlZC1mbGV4LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY2VudGVyZWQtZmxleC1jb2x1bW4tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uanVzdGlmeS1jb250ZW50LWNlbnRlciB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmp1c3RpZnktY29udGVudC1iZXR3ZWVuIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmp1c3RpZnktY29udGVudC1hcm91bmQge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5kLXVuc2V0IHtcclxuICAgIGRpc3BsYXk6IHVuc2V0O1xyXG59XHJcblxyXG4uZC1ub25lIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmh0bWwsIGJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGJhY2tncm91bmQ6ICRoZXJvLWJhY2tncm91bmQtY29sb3I7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgYm94LXNpemluZzogdW5zZXQ7XHJcbn1cclxuXHJcbmJvZHk6OmJlZm9yZSB7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBvcGFjaXR5OiAwLjA1O1xyXG59XHJcblxyXG5hcHAtcm9vdCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4udHJhbnNwYXJlbnQge1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLm9wYXF1ZSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uYnQtYnV0dG9uIHtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgYXBwLXJvb3Qge1xyXG4gICAgICAgIHdpZHRoOiA3NTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICBhcHAtcm9vdCB7XHJcbiAgICAgICAgd2lkdGg6IDk3MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICBhcHAtcm9vdCB7XHJcbiAgICAgICAgd2lkdGg6IDExNzBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDE2MDBweCkge1xyXG4gICAgYXBwLXJvb3Qge1xyXG4gICAgICAgIHdpZHRoOiAxNDAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAyMDAwcHgpIHtcclxuICAgIGFwcC1yb290IHtcclxuICAgICAgICB3aWR0aDogMTcwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5hcHAtcHJvamVjdC1pbWFnZXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuXHJcbi5oaWRlYWJsZS1jb250ZW50LXRvZ2dsZXIge1xyXG4gICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBcclxuICAgICoge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWdyYXktY29sb3I7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGJ1dHRvbi50b2dnbGVkIHtcclxuICAgICAgICAudmVydGljYWwge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMTUsIDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMjJweDtcclxuICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tY29sb3I7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyBcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzIDBzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLnZlcnRpY2FsLCAuaG9yaXpvbnRhbCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXJ0aWFyeS1jb2xvcjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAudmVydGljYWwge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMTUsIDAuNjUpOyAgICAgICAgXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIDBzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuaG9yaXpvbnRhbCB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC42NSwgMC4xNSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uaGlkZWFibGUtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uaGlkZWFibGUtY29udGVudC52aXNpYmxlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmhpZGVhYmxlLWNvbnRlbnQge1xyXG4gICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eSwgaGVpZ2h0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuMjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG59IiwiJG1haW4tY29sb3I6ICNkZGQ7XHJcbiRzZWNvbmRhcnktY29sb3I6IHJnYig4MiwgMTM4LCAxMzgpO1xyXG4kdGVydGlhcnktY29sb3I6ICMyRjJGMkY7XHJcblxyXG4kbWFpbi1ncmF5LWNvbG9yOiAjYWFhO1xyXG5cclxuJG91dGVyLWdyYWRpZW50LWNvbG9yOiAjMDAwO1xyXG4kaW5uZXItZ3JhZGllbnQtY29sb3I6ICMzMzM7XHJcblxyXG4kaGVyby1iYWNrZ3JvdW5kLWNvbG9yOiByYWRpYWwtZ3JhZGllbnQoJGlubmVyLWdyYWRpZW50LWNvbG9yLCAkb3V0ZXItZ3JhZGllbnQtY29sb3IpO1xyXG5cclxuJGNhcmQtYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NywgNzksIDc5LCAwLjIpO1xyXG5cclxuJHByb2dyZXNzLWJhci1oZWlnaHQ6IDM1cHg7XHJcblxyXG4kZGVmYXVsdC10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc3LCAwLjIsIDAuMDUsIC41KTtcclxuJHRyYW5zaXRpb24tZmFzdDogMC4yNXM7XHJcblxyXG4kaGVhZGVyLWxvZ28tYW5pbWF0aW9uLXBhcmFtczogM3MgY3ViaWMtYmV6aWVyKC41MiwtMC4yMiwuMzMsMS4yOCkgMSBmb3J3YXJkcztcclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkFtZWx5YVwiO1xyXG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9BbWVseWEud29mZlwiKTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiSGlsbGFuZFwiO1xyXG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9IaWxsYW5kLndvZmZcIik7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn0iLCJAa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJlc2V0VHJhbnNmb3JtIHtcclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdW5zZXQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hha2VBbmltYXRpb24ge1xyXG5cclxuICAgICRiYXNlLXNoYWtlLW9mZnNldDogN3B4O1xyXG5cclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKVxyXG4gICAgfVxyXG5cclxuICAgIDEwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoJGJhc2Utc2hha2Utb2Zmc2V0KVxyXG4gICAgfVxyXG5cclxuICAgIDIwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIgKiAkYmFzZS1zaGFrZS1vZmZzZXQpXHJcbiAgICB9XHJcblxyXG4gICAgMzAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzICogJGJhc2Utc2hha2Utb2Zmc2V0KVxyXG4gICAgfVxyXG5cclxuICAgIDQwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQgKiAkYmFzZS1zaGFrZS1vZmZzZXQpXHJcbiAgICB9XHJcblxyXG4gICAgNTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKVxyXG4gICAgfVxyXG5cclxuICAgIDYwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNCAqICRiYXNlLXNoYWtlLW9mZnNldClcclxuICAgIH1cclxuXHJcbiAgICA3MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zICogJGJhc2Utc2hha2Utb2Zmc2V0KVxyXG4gICAgfVxyXG5cclxuICAgIDgwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMiAqICRiYXNlLXNoYWtlLW9mZnNldClcclxuICAgIH1cclxuXHJcbiAgICA5MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xICogJGJhc2Utc2hha2Utb2Zmc2V0KVxyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApXHJcbiAgICB9XHJcbn0iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\Documentos\PHP\code\portfolio-2022\angular-portfolio\src\styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map