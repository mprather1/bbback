require 'csv'

namespace :import do

  desc "Import Users"
  task users: :environment do
    filename = File.join Rails.root, 'user_samples.csv'
    CSV.foreach(filename, headers: true) do |row|
      User.create(row.to_hash)
    end
  end
end
