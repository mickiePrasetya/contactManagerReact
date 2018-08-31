This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Existing Problems if using gh-pages

1. fatal: A branch named 'gh-pages' already exists.
2. fatal: could not read Username for 'https://github.com': No such file or directory

## Solutions

1. Try to rm -rf node_modules/gh-pages/.cache on terminal
2. Try to git remote set-url origin https://{username}:{password}@github.com/{username}/project.git
