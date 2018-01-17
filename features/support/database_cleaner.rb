DatabaseCleaner.clean_with(:truncation)

After do
  DatabaseCleaner.clean
end
