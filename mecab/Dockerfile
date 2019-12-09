# ベースイメージ
FROM ubuntu:18.04
RUN apt-get update

# curl
RUN apt-get install -y curl

# MeCab
RUN apt-get install -y mecab
RUN apt-get install -y libmecab-dev
RUN apt-get install -y mecab-ipadic-utf8

# get install script and pass it to execute:
RUN curl -sL https://deb.nodesource.com/setup_13.x | bash
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update
# Node
RUN apt-get install -y nodejs
RUN apt-get install -y yarn

RUN apt-get remove -y curl