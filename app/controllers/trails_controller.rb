class TrailsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Trail.all
  end

  def show
    render json: Trail.find(params["id"])
  end

  def create
    render json: Trail.create(params["trail"])
  end

  def delete
    render json: Trail.delete(params["id"])
  end

  def update
    render json: Trail.update(params["id"], params["trail"])
  end

end
