/**
 * Return the type of `model`
 *
 * The Jugglingdb datastore allows Locomotive to introspect model stored in `Jugglingdb`.
 *
 * @param {Object} model
 * @return {String}
 * @api public
 */
exports.recordOf = function(model) {
	if (model.constructor && ('ModelConstructor' === model.constructor.name)) {
		// [Model Name]
		return model.constructor.toString().slice(7, -1);
	}
}
