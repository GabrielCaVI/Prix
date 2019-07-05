var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, h } from './chunk-ac0a85cb.js';
var TestMenu = /** @class */ (function () {
    function TestMenu(hostRef) {
        registerInstance(this, hostRef);
        this.color = "";
        this.expandSize = "";
        this.side = "";
        this.opacity = false;
    }
    TestMenu.prototype.showDrawer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var wrapper;
            return __generator(this, function (_a) {
                wrapper = document.getElementById("drawer-wrapper");
                switch (this.expandSize) {
                    case "small": {
                        if (this.side == "es-top" || this.side == "es-bottom") {
                            wrapper.classList.add("small-size-height");
                        }
                        else {
                            wrapper.classList.add("small-size-width");
                        }
                        break;
                    }
                    case "medium": {
                        if (this.side == "es-top" || this.side == "es-bottom") {
                            wrapper.classList.add("medium-size-height");
                        }
                        else {
                            wrapper.classList.add("medium-size-width");
                        }
                        break;
                    }
                    case "large": {
                        if (this.side == "es-top" || this.side == "es-bottom") {
                            wrapper.classList.add("large-size-height");
                        }
                        else {
                            wrapper.classList.add("large-size-width");
                        }
                        break;
                    }
                    default: {
                        if (this.side == "es-top" || this.side == "es-bottom") {
                            wrapper.classList.add("small-size-height");
                        }
                        else {
                            wrapper.classList.add("small-size-width");
                        }
                        break;
                    }
                }
                if (this.opacity) {
                    document.body.style.backgroundColor = "rgba(0,0,0,0.2)";
                }
                return [2 /*return*/];
            });
        });
    };
    TestMenu.prototype.hideDrawer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var wrapper;
            return __generator(this, function (_a) {
                wrapper = document.getElementById("drawer-wrapper");
                switch (this.expandSize) {
                    case "small": {
                        if (this.side == "es-top" || this.side == "es-bottom") {
                            wrapper.classList.remove("small-size-height");
                        }
                        else {
                            wrapper.classList.remove("small-size-width");
                        }
                        break;
                    }
                    case "medium": {
                        if (this.side == "es-top" || this.side == "es-bottom") {
                            wrapper.classList.remove("medium-size-height");
                        }
                        else {
                            wrapper.classList.remove("medium-size-width");
                        }
                        break;
                    }
                    case "large": {
                        if (this.side == "es-top" || this.side == "es-bottom") {
                            wrapper.classList.remove("large-size-height");
                        }
                        else {
                            wrapper.classList.remove("large-size-width");
                        }
                        break;
                    }
                    default: {
                        if (this.side == "es-top" || this.side == "es-bottom") {
                            wrapper.classList.remove("small-size-height");
                        }
                        else {
                            wrapper.classList.remove("small-size-width");
                        }
                        break;
                    }
                }
                if (this.opacity) {
                    document.body.style.backgroundColor = "white";
                }
                return [2 /*return*/];
            });
        });
    };
    TestMenu.prototype.componentDidLoad = function () {
        var wrapper = document.getElementById("drawer-wrapper");
        document.getElementById("drawer-wrapper").style.backgroundColor = this.color;
        switch (this.side) {
            case "es-left": {
                wrapper.classList.toggle("drawer-left");
                break;
            }
            case "es-right": {
                wrapper.classList.toggle("drawer-right");
                break;
            }
            case "es-top": {
                wrapper.classList.toggle("drawer-top");
                break;
            }
            case "es-bottom": {
                wrapper.classList.toggle("drawer-bottom");
                break;
            }
            default: {
                wrapper.classList.toggle("drawer-left");
                break;
            }
        }
    };
    TestMenu.prototype.render = function () {
        return (h("div", null, h("div", { id: "drawer-wrapper" }, h("div", { id: "drawer-content" }, h("slot", { name: "drawer-content" })))));
    };
    Object.defineProperty(TestMenu, "style", {
        get: function () { return "body,html{height:100%;margin:0;padding:0}#drawer-content{margin-left:2%}.drawer-left{left:0}.drawer-left,.drawer-right{height:100%;position:fixed;z-index:1;top:0;width:0;background-color:#afa;overflow-x:hidden;-webkit-transition:.5s;transition:.5s}.drawer-right{right:0}.drawer-top{top:0}.drawer-bottom,.drawer-top{height:0%;position:fixed;z-index:1;left:0;width:100%;background-color:#afa;overflow-x:hidden;-webkit-transition:.5s;transition:.5s}.drawer-bottom{bottom:0}\@media only screen and (max-width:600px){.small-size-height{height:30%}.medium-size-height{height:60%}.large-size-height{height:100%}.medium-size-width,.small-size-width{width:60%}.large-size-width{width:100%}}\@media only screen and (min-width:600px){.small-size-height{height:30%}.medium-size-height{height:60%}.large-size-height{height:100%}.small-size-width{width:30%}.medium-size-width{width:60%}.large-size-width{width:100%}}"; },
        enumerable: true,
        configurable: true
    });
    return TestMenu;
}());
export { TestMenu as prix_drawer };
