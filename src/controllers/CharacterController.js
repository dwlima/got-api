const Character = require('../models/Character');

module.exports = {

  async index(req, res, next) {
    const items = await Character.find().sort('nome');
    return res.json(items);
  },

	async show(req, res, next) {
    const { id } = req.params;
    const item = await Character.findById(id);
		if(!item){
			return res.status(400).json({ error: 'Character not exists' });
		}
		return res.json(item);
  },

  async store(req, res){
    const { name, seasons } = req.body;

    if(!name || !seasons){
      return res.status(400).json({ error: 'Preencha todos os campos' });
    }

		await Character.create({
			name,
      seasons
		});
		return res.json({ ok: true });
  },

  async update(req, res){
		const { id } = req.params;
		const { name, seasons } = req.body;
		const character = await Character.findById(id);

    if(!name || !seasons){
      return res.status(400).json({ error: 'Preencha o campo nome e URL da API' });
    }

		if(!character){
			return res.status(400).json({ error: 'Personagem não existe' });
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
			return res.status(400).json({ error: 'Character not exists' });
		}
		await character.delete();

		return res.json({ ok: true });
  },

};
