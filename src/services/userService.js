
module.exports = {

	async getByCode(code) {
	    return await User.findByCode(code).select('-hash');
	},

	async getByEmail(code) {
	    return await User.findByCode(code).select('-hash');
	},

	randomString(lenght){
		let text = "";
		const possible = "abcdefghijklmnopqrstuvwxyz01234567890";
		for(let i=0; i<lenght; i++){
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return text;
	},
}
