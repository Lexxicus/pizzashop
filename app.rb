#encoding: utf-8
require 'rubygems'
require 'sinatra'
require "bundler/setup"
require 'sinatra/reloader'


get '/' do
	erb :index
end