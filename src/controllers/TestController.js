const moment = require('moment');

module.exports = {

  async index(req, res, next) {

    const hourConfig = {
      "2021-12-08": {
        "weekday": 3,
        "slots": [
          {
            "index": 1,
            "text": "08:00 - 10:00",
            "config": "618d18a6a90dac001b70d020",
            "start_minute_in_day": 480
          },
          {
            "index": 2,
            "text": "10:00 - 12:00",
            "config": "618d18a6a90dac001b70d020",
            "start_minute_in_day": 600
          },
          {
            "index": 3,
            "text": "12:00 - 14:00",
            "config": "618d18a6a90dac001b70d020",
            "start_minute_in_day": 720
          },
          {
            "index": 4,
            "text": "14:00 - 16:00",
            "config": "618d18a6a90dac001b70d020",
            "start_minute_in_day": 840
          },
          {
            "index": 5,
            "text": "16:00 - 18:00",
            "config": "618d18a6a90dac001b70d020",
            "start_minute_in_day": 960
          },
          {
            "index": 6,
            "text": "18:00 - 20:00",
            "config": "618d18a6a90dac001b70d020",
            "start_minute_in_day": 1080
          },
          {
            "index": 7,
            "text": "20:00 - 22:00",
            "config": "618d18a6a90dac001b70d020",
            "start_minute_in_day": 1200,
            "end_minute_in_day": 1320
          }
        ]
      }
    }

    /**
     * /- o array de slot pode vir vazio
     * /- formatar a data (moment)
     * /- end_minute_in_day talvez nao venha mesmo e tem que fazer o parser no text
     **/
     const dateNow = new Date();
     const date = moment(dateNow).format('YYYY-MM-DD');
     
     if(hourConfig[date].slots && hourConfig[date].slots.length > 0) {

      const now = dateNow.getHours() * 60 + dateNow.getMinutes();
      //const now = (22 * 60) + 59;

      const slotFirst = hourConfig[date].slots[0];
      const slotLast = hourConfig[date].slots[hourConfig[date].slots.length-1];

      const startMinuteInDay = slotFirst.start_minute_in_day;
      const closeMinuteInDay = slotLast.end_minute_in_day;

      console.log("data");
      console.log(startMinuteInDay);
      console.log(closeMinuteInDay);
      console.log("now: " + now);

      if (startMinuteInDay > now || now >= closeMinuteInDay) {
        console.log('loja fechada');
      } else {
        console.log('loja aberta');
      }
    } else {
      console.log("loja está fechada2");
    }
		return res.json(hourConfig);
  },

  // -----------------------------------------------------------------------------------


};
