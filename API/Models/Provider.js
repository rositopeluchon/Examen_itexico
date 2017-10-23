const mongoose= require ('mongoose');
const Schema = mongoose.Schema;

var providerSquema = new Squema({
    company: String,
    email: String,
    address: String,
    tel: String,
    crated_at:{type: Date, dafault: Date.now},
    update_at:{type: Date, defalu: Date.now}
})


let Provider = mongoose.model('Provider', providerSquema);

module.exports= Provider;
