const continent = require('../continent.json');
const countries = require('../countries.json');

module.exports = {
  getMainPage: function (req, res) {
    res.render('pages/home', {title: 'World', data: continent});
  },

  getContinentPage: function (req, res, next) {
    const continentId = req.params.continent;
    const data = countries.filter(function (item) {
      return ~item.target.indexOf(continentId)
    });
    const continentObj = continent.find(function (item) {
      return item.id === continentId;
    });
    res.render('pages/continent', {title: continentObj.name, data: data});
  },

  getCountryPage: function (req, res) {
    const countryId = req.params.country;
    const data = countries.find(function (item) {
      return item.id === countryId;
    });
    res.render('pages/country', {title: data.name, item: data});
  }

};