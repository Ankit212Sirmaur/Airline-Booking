const express = require('express');
const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const { log } = require('winston');
const { where } = require('sequelize');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);

    //bad code alerts
    const { Airport, City } = require('./models');

    // const MumbaiCity = await City.findByPk(5);
    // console.log(MumbaiCity);
    // const airportCreatedInMumbai = await MumbaiCity.createAirport({name: 'Mumbai-central', code: 'MCA'});
    // console.log(airportCreatedInMumbai);
    
    // const central_mumbai_airport = await Airport.findByPk(14);
    // const ans  = await MumbaiCity.removeAirport(central_mumbai_airport);
    // console.log(ans);

    // await City.destroy({
    //     where: {
    //         id:5
    //     }
    // })
});
