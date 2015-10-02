class ItemsController < ApplicationController
  def index
    @items = Item.all
  end

=begin
  def show
    @item = Item.find(params[:id])
  end
=end


  def new
    @item = Item.new
    render 'new', layout: false
  end

  def edit
    @item = Item.find(params[:id])
  end

  def create
    @item = Item.new(item_params)
    if @item.save
      render json: @item
    else
      render 'new'
    end

  end

  def update
    @item = Item.find(params[:id])
    if @item.update(item_params)
      redirect_to items_path
    else
      render 'edit'
    end
  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy

    redirect_to items_path
  end

  private
  def item_params
    params.require(:item).permit(:title, :description)
  end

end
