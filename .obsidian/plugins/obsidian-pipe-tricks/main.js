var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/main.ts
__export(exports, {
  default: () => PipeTricksPlugin
});

// src/consts.ts
var PUNCTUATION = [
  "*",
  "~",
  "^",
  "`",
  `=`,
  ".",
  "?",
  "!",
  ",",
  ";",
  ":",
  "-",
  "\u2013",
  "\u2014",
  "[",
  "]",
  "(",
  ")",
  "{",
  "}",
  "'",
  '"',
  "\u2026"
];
var FINAL_PAREN = /\s\(.*\)$/;
var FINAL_COMMA = /,.*$/;

// node_modules/text-lower-case/dist.es2015/index.js
function lowerCase(str) {
  return str.toLowerCase();
}

// node_modules/text-no-case/dist.es2015/index.js
var DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
function noCase(input, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? " " : _d;
  var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
  var start = 0;
  var end = result.length;
  while (result.charAt(start) === "\0")
    start++;
  while (result.charAt(end - 1) === "\0")
    end--;
  return result.slice(start, end).split("\0").map(transform).join(delimiter);
}
function replace(input, re, value) {
  if (re instanceof RegExp)
    return input.replace(re, value);
  return re.reduce(function(input2, re2) {
    return input2.replace(re2, value);
  }, input);
}

// node_modules/text-upper-case-first/dist.es2015/index.js
function upperCaseFirst(input) {
  return input.charAt(0).toUpperCase() + input.substr(1);
}

// node_modules/text-capital-case/dist.es2015/index.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function capitalCaseTransform(input) {
  return upperCaseFirst(input.toLowerCase());
}
function capitalCase(input, options) {
  if (options === void 0) {
    options = {};
  }
  return noCase(input, __assign({ delimiter: " ", transform: capitalCaseTransform }, options));
}

// node_modules/text-title-case/dist.es2015/index.js
var SMALL_WORDS = /\b(?:an?d?|a[st]|because|but|by|en|for|i[fn]|neither|nor|o[fnr]|only|over|per|so|some|tha[tn]|the|to|up|upon|vs?\.?|versus|via|when|with|without|yet)\b/i;
var TOKENS = /[^\s:–—-]+|./g;
var WHITESPACE = /\s/;
var IS_MANUAL_CASE = /.(?=[A-Z]|\..)/;
var ALPHANUMERIC_PATTERN = /[A-Za-z0-9\u00C0-\u00FF]/;
function titleCase(input) {
  var result = "";
  var m;
  while ((m = TOKENS.exec(input)) !== null) {
    var token = m[0], index = m.index;
    if (!IS_MANUAL_CASE.test(token) && (!SMALL_WORDS.test(token) || index === 0 || index + token.length === input.length) && (input.charAt(index + token.length) !== ":" || WHITESPACE.test(input.charAt(index + token.length + 1)))) {
      result += token.replace(ALPHANUMERIC_PATTERN, function(m2) {
        return m2.toUpperCase();
      });
      continue;
    }
    result += token;
  }
  return result;
}

// src/functions.ts
var DEFAULT_FUNCTIONS = [removeParenthesisComma, blendSuffix];
var FUNCTION_LOOKUP = {
  lower,
  _: lower,
  sentence,
  "^": sentence,
  capital,
  "^^": capital,
  upper,
  "^^^": upper,
  title,
  "#": title
};
function removeParenthesisComma(link, text) {
  const hasFinalParenthesis = FINAL_PAREN.test(text);
  return hasFinalParenthesis ? text.replace(FINAL_PAREN, "") : text.replace(FINAL_COMMA, "");
}
function blendSuffix(link, text) {
  const sibling = link.nextSibling;
  if (sibling === null || sibling.nodeType !== Node.TEXT_NODE) {
    return text;
  }
  const siblingText = sibling.nodeValue;
  if (siblingText) {
    let suffix;
    const idx = siblingText.indexOf(" ");
    if (idx === -1) {
      suffix = siblingText;
    } else if (idx === 0) {
      suffix = "";
    } else {
      suffix = siblingText.slice(0, idx);
    }
    if (suffix.length > 0 && !PUNCTUATION.contains(suffix[0])) {
      text += suffix;
      sibling.nodeValue = siblingText.slice(suffix.length);
    }
  }
  return text;
}
function lower(link, text) {
  return text.toLowerCase();
}
function upper(link, text) {
  return text.toUpperCase();
}
function title(link, text) {
  return titleCase(text);
}
function sentence(link, text) {
  return upperCaseFirst(text);
}
function capital(link, text) {
  return capitalCase(text);
}

// src/main.ts
var import_obsidian = __toModule(require("obsidian"));
var PipeTricksPlugin = class extends import_obsidian.Plugin {
  onload() {
    return __async(this, null, function* () {
      this.registerMarkdownPostProcessor((element) => {
        element.querySelectorAll("a.internal-link").forEach(updateLinkText);
      });
    });
  }
};
function shouldTrick(text) {
  return !text || text.endsWith("|");
}
function updateLinkText(link) {
  const alias = link.innerText;
  const href = link.getAttr("href");
  if (shouldTrick(alias)) {
    const functionNames = alias.split("|").filter(Boolean);
    const functions = DEFAULT_FUNCTIONS;
    for (const name of functionNames) {
      const func = FUNCTION_LOOKUP[name];
      if (func) {
        functions.push(func);
      }
    }
    let text = href;
    for (const func of functions) {
      text = func(link, text);
    }
    link.innerText = text;
  }
}
