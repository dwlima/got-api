const Character = require('../models/Character');

module.exports = {

  async index(req, res, next) {
    const items = await Character.find({},{name: 1, seasons: 1}).sort('nome');
    return res.json(items);
  },

	async show(req, res, next) {
    const { id } = req.params;
    const item = await Character.findById(id,{name: 1, seasons: 1});
		if(!item){
			return res.status(200).json({ error: 'Character not exists' });
		}
		return res.json(item);
  },

  async store(req, res){
    const { name, seasons } = req.body;

    if(!name || !seasons){
      return res.status(200).json({ error: 'Preencha todos os campos' });
    }

		const character = await Character.create({
			name,
      seasons
		});
		return res.json(character);
  },

  async update(req, res){
		const { id } = req.params;
		const { name, seasons } = req.body;
		const character = await Character.findById(id);

    if(!name || !seasons){
      return res.status(200).json({ error: 'Preencha o campo nome e URL da API' });
    }

		if(!character){
			return res.status(200).json({ error: 'Personagem não existe' });
		}


		character.name = name;
		character.seasons = seasons;
		await character.save();

		return res.json(character);
  },

  async delete(req, res){

		const { id } = req.params;
		const character = await Character.findById(id);
		if(!character){
			return res.status(200).json({ error: 'Character not exists' });
		}
		await character.delete();

		return res.json({ ok: true });
  },

};
