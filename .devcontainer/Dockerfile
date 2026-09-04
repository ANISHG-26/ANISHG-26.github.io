FROM ruby:3.3.4-bookworm

RUN apt-get update \
    && apt-get install -y --no-install-recommends git \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /workspace

RUN gem install bundler

COPY Gemfile /tmp/portfolio/Gemfile
RUN cd /tmp/portfolio && bundle install
