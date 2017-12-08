#!/bin/bash

# sudo apt install ruby-dev
# sudo apt install gem
# sudo gem install jekyll
# sudo gem install bundler
# bundle install

gnome-terminal --window -e livereload
bundle exec jekyll serve --watch