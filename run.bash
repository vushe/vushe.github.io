#!/bin/bash

# sudo apt install ruby-dev
# sudo apt install gem
# sudo gem install jekyll
# sudo gem install bundler
# bundle install

# Run livereload if not running yet
`ps cax | grep livereload > /dev/null`

if [ $? != 0 ]; then
    echo "Running LiveReload server"
    gnome-terminal --tab -e 'livereload'
fi

bundle exec jekyll serve --watch