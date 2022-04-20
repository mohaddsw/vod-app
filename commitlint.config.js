module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", ["add", "wip", "feat", "fix", "change", "hotfix", "remove", "update", "refactor"]],
  },
};
