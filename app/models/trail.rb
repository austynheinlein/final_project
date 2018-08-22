class Trail

  if(ENV['DATABASE_URL'])
      uri = URI.parse(ENV['DATABASE_URL'])
      DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
  else
      DB = PG.connect(host: "localhost", port: 5432, dbname: 'final_project_development')
  end



  def self.all
    results = DB.exec("SELECT * FROM trails;")
    return results.map do |result|
      {
        "id" => result["id"].to_i,
        "image" => result["image"],
        "name" => result["name"],
        "location" => result["location"],
        "mileage" => result["mileage"]
      }
    end
  end

  def self.create(opts)
    results = DB.exec(
      <<-SQL
        INSERT INTO trails (image, name, location, mileage)
        VALUES ('#{opts["image"]}', '#{opts["name"]}', '#{opts["location"]}', #{opts["mileage"]})
        RETURNING id, image, name, location, mileage;
      SQL
    )
    result = results.first
    return {
      "id" => result["id"].to_i,
      "image" => result["image"],
      "name" => result["name"],
      "location" => result["location"],
      "mileage" => result["mileage"]
    }
  end

  def self.delete(id)
    results = DB.exec("DELETE FROM trails WHERE id=#{id};")
    return {"deleted" => true}
  end

  def self.update(id, opts)
    results = DB.exec(
      <<-SQL
        UPDATE trails
        SET image='#{opts["image"]}', name='#{opts["name"]}', location='#{opts["location"]}', mileage='#{opts["mileage"]}'
        WHERE id=#{id}
        RETURNING id, image, name, location, mileage;
      SQL
    )
    result = results.first
    return {
      "id" => result["id"].to_i,
      "image" => result["image"],
      "name" => result["name"],
      "location" => result["location"],
      "mileage" => result["mileage"]
    }
  end

end
