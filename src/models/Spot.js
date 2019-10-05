const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema(
  {
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

SpotSchema.virtual('thumbnail_url').get(function() {
  return `https://aircnc-backend-yxkwifzlti.now.sh/files/${this.thumbnail}`;
});

module.exports = mongoose.model('Spot', SpotSchema);
