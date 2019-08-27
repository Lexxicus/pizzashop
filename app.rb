#encoding: utf-8
require 'rubygems'
require 'sinatra'
require "bundler/setup"
require 'sinatra/reloader'
require 'sinatra/activerecord'

set :database, 'sqlite3:pizzashop.db'

class Product < ActiveRecord::Base

end

get '/' do
  @products = Product.all
	erb :index
end

get '/about' do
  erb :about
end

post'/cart' do
  test = params[:orders]
  @test = test.split(',')
  @hh = {}
  @test.each do |x|
    s2 = x.split('=')
    s3 = s2[0].split('_')
    value = s2[1]
    key = s3[1]
    hh[key] = value
  end
  @in_cart = Product.all
  erb :cart

end