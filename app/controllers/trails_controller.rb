class TrailsController < ApplicationController
  skip_before_action :verify_authenticity_token

  # get index (all)
  def index
    render json: Trail.all
  end

  # get one (by id)
  def show
    render json: Trail.find(params["id"])
  end

  # create new location
  def create
    render json: Trail.create(params["trail"])
  end

  # delete location (by id)
  def delete
    render json: Trail.delete(params["id"])
  end

  # update location (by id)
  def update
    render json: Trail.update(params["id"], params["trail"])
  end

end
