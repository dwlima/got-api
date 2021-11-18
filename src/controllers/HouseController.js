const House = require('../models/House');
const Character = require('../models/Character');

module.exports = {

  async index(req, res, next) {
    const { name } = req.query;
    let items = [];
    if(name){
      items = await House.find({ name: { $regex: name, $options:'i' }}).populate("currentLord").sort('name');
    } else {
      items = await House.find().populate("currentLord").sort('name');
    }

    return res.json(items);
  },

	async show(req, res, next) {
    const { id } = req.params;
    const item = await House.findById(id).populate("currentLord");
		if(!item){
			return res.status(400).json({ error: 'House not exists' });
		}
		return res.json(item);
  },

  async store(req, res){
    const { name, region, founded, currentLord } = req.body;

    if(!name || !region || !founded || !currentLord){
      return res.status(400).json({ error: 'Preencha todos os campos' });
    }

		const house = await House.create({
			name,
      region,
      founded,
      currentLord
		});
		return res.json({ ok: true });
  },

  async update(req, res){
		const { id } = req.params;
    const { name, region, founded, currentLord } = req.body;

		const house = await House.findById(id);

		if(!house){
			return res.status(400).json({ error: 'house not exists' });
		}

    if(!name || !region || !founded || !currentLord){
      return res.status(400).json({ error: 'Preencha todos os campos' });
    }

		house.name = name;
		house.region = region;
    house.founded = founded;
    house.currentLord = currentLord;
		await house.save();

		return res.json(house);
  },

  async delete(req, res){

		const { id } = req.params;
		const house = await House.findById(id);
		if(!house){
			return res.status(400).json({ error: 'House not exists' });
		}
		await house.delete();

		return res.json({ ok: true });
  },

  // -----------------------------------------------------------------------------------


};
