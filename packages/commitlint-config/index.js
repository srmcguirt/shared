const automaticCommitPattern = /^chore\(release\):.*\[skip ci]/

module.exports = {
  extends: ['@commitlint/config-conventional'],
  /*
    https://github.com/semantic-release/git/issues/331
  */
  ignores: [commitMessage => automaticCommitPattern.test(commitMessage)],
}
