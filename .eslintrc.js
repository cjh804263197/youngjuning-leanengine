module.exports = {
  "extends": ["airbnb"],
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "script",
    "ecmaFeatures": {
      "impliedStrict": true,
    }
  },
  env: {
    node: true,
    jest: true
  },
  "rules": {
    "linebreak-style": [2 ,"unix"],
    "semi": [2, 'never'],
    "max-len": [0,{ "code": 200 }],
    "object-curly-newline": 0,
    "global-require":0,
    "no-unused-vars": [1, { "args": "none" }],
    "no-shadow": [2, { "allow": ["err","error"] }],
    "no-lone-blocks": 0,
  }
}