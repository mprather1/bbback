class User < ActiveRecord::Base

  def self.import(file)
    spreadsheet = open_spreadsheet(file)
    header = spreadsheet.row(1)
    (2..spreadsheet.last_row).each do |f|
    row = Hash[[header, spreadsheet.row(f)].transpose]
      user = find_by_id(row["id"]) || new
      user.attributes = row.to_hash.slice(*accessible_attributes)
      user.save!
    end
  end

  def self.open_spreadsheet(file)
    Csv.new(file.path, nil, :ignore)
  end
  

end
