module.exports = {
  "extends": ["airbnb"],
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module",
    "ecmaFeatures": {
      "impliedStrict": true,
    }
  },
  env: {
    node: true,
    jest: true,
  },
  "rules": {
    "linebreak-style": [2 ,"unix"],
    "semi": [2, 'never'],
    "max-len": [0,{ "code": 200 }],
    "no-unused-vars": 1,
    "no-shadow": ["error", { "allow": ["err","error"] }]
  }
}