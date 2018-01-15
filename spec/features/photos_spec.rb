require 'rails_helper'

RSpec.feature "Photos", type: :feature do
  it 'creating new photo' do
    visit photos_path
    click_link 'New'
    attr = attributes_for :photo
    fill_in 'Name', with: attr[:name]
    fill_in 'Description', with: attr[:description]
    attach_file 'Image', File.absolute_path(Rails.root.join('spec', 'support', 'assets', 'sample_image.jpg'))
    click_button 'Create'
    expect(page).to have_xpath("//img[contains(@src,'sample_image.jpg')]")
  end
end
