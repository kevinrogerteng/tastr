'use strict';

(function(module){

  var rest1 = {
    'name' : 'Gary Danko',
    'categories' : [
      {
        'name' : 'Restaurants',
        'str_id': 'restaurants'
      }
    ],
    'location' : {
      'locality' : 'San Francisco',
      'country' : 'United States',
      'region' : 'CA',
      'postal_code' : '94122',
      'address1' : '1240 9th ave',
      'geo' : {
        'type' : 'Point',
        'coordinates' : [
           -122.42039680481,
            37.8056473927126
        ]
      }
    },
    'menu_url' : 'https://locu.com/places/restaurant-gary-danko-san-francisco-us/#menu',
    'menus' : [{
      'menu_name' : 'Menu',
      'sections' : [
        {
          'section_name': 'myFood',
          'subsections': [
            {
              'subsection_name': '',
              'contents': [{
                  'type': 'ITEM',
                  'name': 'Potato-Leek Soup w/ Crème Fraîche, Salmon-Crab Fritter & Bacon'
              }, {
                  'type': 'ITEM',
                  'name': 'Risotto w/ Lobster, Rock Shrimp, Shimeji Mushrooms, & Butternut Squash'
              }]
            }
          ]
        }
      ]
    }]
  };

  var rest2 = {
    'name' : 'Kevin Goods',
    'categories' : [
      {
        'name' : 'Restaurants',
        'str_id' : 'restaurants'
      },
      {
        'name' : 'tradamerican',
        'str_id' : 'Traditional American'
      }
    ],
    'location' : {
      'locality' : 'San Francisco',
      'country' : 'United States',
      'region' : 'CA',
      'postal_code' : '94112',
      'address1' : '636 Dorado Terrace',
      'geo' : {
        'type' : 'Point',
        'coordinates' : [
           -122.46621,
            37.765139
        ]
      }
    },
    'menu_url' : 'https://somecoolsite.com',
    'menus' : [{
      'menu_name' : 'Cool Kids Menu',
      'sections' : [
        {
          'section_name': 'Entree',
          'subsections': [
            {
              'subsection_name': '',
              'contents': [{
                  'type': 'ITEM',
                  'name': 'Mash Potato'
              }, {
                  'type': 'ITEM',
                  'name': 'Lobster with Mash Potato'
              }]
            }
          ]
        }
      ]
    }]
  };

    var payload = {
    'status' : 'success',
    'http_status' : 200,
    'venues' : [
          rest1, 
          rest2
    ]
  };

  module.exports = payload;

})(module);