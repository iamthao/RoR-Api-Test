module BagMethods
  def bag
    @bag ||= Hashie::Mash.new
  end

  def reset_bag
    @bag = nil
  end
end

World(BagMethods)

After do
  reset_bag
end
